// toy-scene.js
// An ambient rotating 3D turntable sitting behind the hero text, in the
// spirit of albedo.com's background hero scene. Renders a placeholder toy
// figure until a real model is dropped in at models/toy.glb — swap the file
// and reload, no code changes needed.
//
// To use your own model:
//   1. Export it as .glb (glTF binary) — Blender, Blockbench, and most
//      3D tools can do this directly ("File > Export > glTF Binary").
//   2. Save it as models/toy.glb in this project.
//   3. Reload the page. The loader below picks it up automatically and
//      replaces the placeholder figure, auto-scaled and centered.
//
// .hero-toy is display:none under 768px in CSS, so this only needs to skip
// rendering there as a resource-saving nicety, not for correctness — it's
// checked on every resize rather than once at load, since a one-time check
// at module-load time isn't reliable (layout can still be settling then).

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const container = document.querySelector('.hero-toy');
const canvas = document.getElementById('toyCanvas');

// Iridescence (thin-film interference — soap-bubble / oil-slick color shift)
// is a MeshPhysicalMaterial feature, not MeshStandardMaterial, so any
// material — the placeholder's or whatever GLTFLoader assigns from the
// file — gets upgraded through this.
//
// This pulls over only the known-safe common properties rather than using
// MeshPhysicalMaterial's own .copy(), which assumes the source is also a
// MeshPhysicalMaterial and crashes (reading .x off an undefined Vector2)
// when handed a plain MeshStandardMaterial, which is what GLTFLoader and
// the placeholder both actually produce.
function makeIridescent(material) {
  return new THREE.MeshPhysicalMaterial({
    color: material.color ? material.color.clone() : new THREE.Color(0xffffff),
    map: material.map || null,
    normalMap: material.normalMap || null,
    roughnessMap: material.roughnessMap || null,
    metalnessMap: material.metalnessMap || null,
    aoMap: material.aoMap || null,
    emissiveMap: material.emissiveMap || null,
    emissive: material.emissive ? material.emissive.clone() : undefined,
    emissiveIntensity: material.emissiveIntensity ?? 1,
    roughness: Math.min(material.roughness ?? 0.5, 0.35),
    metalness: material.metalness ?? 0.1,
    transparent: material.transparent,
    opacity: material.opacity ?? 1,
    side: material.side ?? THREE.FrontSide,
    iridescence: 1,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [100, 400],
    clearcoat: 0.5,
    clearcoatRoughness: 0.25,
  });
}

if (container && canvas && window.WebGLRenderingContext) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0.5, 4.4);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Iridescence and clearcoat read as flat color without something to
  // reflect — a generated studio environment (no HDR file needed) gives
  // them highlights and a sense of surface without a literal skybox.
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xe9ff7a, 0.7);
  rimLight.position.set(-4, 2, -3);
  scene.add(rimLight);

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));

  const group = new THREE.Group();
  scene.add(group);

  function buildPlaceholderToy() {
    const pink = makeIridescent(new THREE.MeshStandardMaterial({ color: 0xff64c8, roughness: 0.45, metalness: 0.05 }));
    const blue = makeIridescent(new THREE.MeshStandardMaterial({ color: 0x2f6bff, roughness: 0.45, metalness: 0.05 }));

    const g = new THREE.Group();

    const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.3, 0.8), pink);
    g.add(body);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), blue);
    head.position.y = 1.05;
    g.add(head);

    const armGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1, 12);
    const armLeft = new THREE.Mesh(armGeometry, blue);
    armLeft.position.set(-0.75, 0.1, 0);
    armLeft.rotation.z = 0.3;
    g.add(armLeft);

    const armRight = armLeft.clone();
    armRight.position.x = 0.75;
    armRight.rotation.z = -0.3;
    g.add(armRight);

    const legGeometry = new THREE.CylinderGeometry(0.18, 0.18, 0.9, 12);
    const legLeft = new THREE.Mesh(legGeometry, pink);
    legLeft.position.set(-0.32, -1.1, 0);
    g.add(legLeft);

    const legRight = legLeft.clone();
    legRight.position.x = 0.32;
    g.add(legRight);

    g.scale.setScalar(0.9);
    return g;
  }

  let activeModel = buildPlaceholderToy();
  group.add(activeModel);

  new GLTFLoader().load(
    'models/toy.glb',
    (gltf) => {
      group.remove(activeModel);
      activeModel = gltf.scene;

      activeModel.traverse((child) => {
        if (child.isMesh) {
          child.material = makeIridescent(child.material);
        }
      });

      const box = new THREE.Box3().setFromObject(activeModel);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z) || 1;
      const scale = 2.4 / maxDimension;

      activeModel.scale.setScalar(scale);
      activeModel.position.set(
        -center.x * scale,
        -center.y * scale,
        -center.z * scale
      );

      group.add(activeModel);
    },
    undefined,
    (err) => {
      console.warn('models/toy.glb failed to load, keeping the placeholder figure', err);
    }
  );

  function resize() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', resize);
  // Layout (fonts, absolute positioning within the hero) can settle a frame
  // or two after this module first runs, so retry rather than relying on a
  // single synchronous measurement.
  resize();
  requestAnimationFrame(resize);
  if (window.ResizeObserver) {
    new ResizeObserver(resize).observe(canvas);
  } else {
    setTimeout(resize, 300);
  }

  function isHiddenForLayout() {
    return getComputedStyle(container).display === 'none';
  }

  // Spin around a tilted axis (45° between X and Y) rather than the plain
  // vertical Y-axis, so the toy tumbles and shows its top/underside as it
  // turns instead of just lazy-susan-rotating in place.
  const tiltAxis = new THREE.Vector3(1, 1, 0).normalize();

  if (reduceMotion) {
    group.rotateOnAxis(tiltAxis, Math.PI * 0.25);
    if (!isHiddenForLayout()) renderer.render(scene, camera);
  } else {
    const animate = () => {
      requestAnimationFrame(animate);
      if (isHiddenForLayout()) return;
      group.rotateOnAxis(tiltAxis, 0.006);
      renderer.render(scene, camera);
    };

    animate();
  }
}

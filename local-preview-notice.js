// local-preview-notice.js
// The 3D toy scene and the actor-network diagram both load as ES modules
// (import statements pulling in Three.js / Mermaid from a CDN), and browsers
// block module scripts under the file:// protocol as a CORS restriction.
// That failure is silent — nothing shows up and there's no visible error —
// so this surfaces it directly instead of leaving it a mystery.

if (location.protocol === 'file:') {
  var notice = document.createElement('div');
  notice.className = 'local-preview-notice';
  notice.innerHTML =
    'Viewing this file directly (<code>file://</code>) blocks the 3D scene and the actor-network diagram, both need to load as ES modules, which browsers disallow outside a real server. ' +
    'Run <code>python3 -m http.server</code> in this folder and open <code>http://localhost:8000</code> instead.' +
    '<button type="button" class="local-preview-notice-dismiss" aria-label="Dismiss">&times;</button>';
  document.body.insertBefore(notice, document.body.firstChild);

  notice.querySelector('.local-preview-notice-dismiss').addEventListener('click', function () {
    notice.remove();
  });
}

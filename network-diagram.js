// A spatial actor-network inspired by force-directed sociograms. Positions are
// normalized so the constellation scales with its container without a library.

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('actorNetworkCanvas');
  if (!canvas) return;

  var nodes = [
    { id: 'culture', label: 'Cultural gender norms', x: .12, y: .18, size: 82, major: true },
    { id: 'families', label: 'Parents + children', x: .12, y: .72, size: 96, major: true },
    { id: 'retail', label: 'Amazon + Target', x: .29, y: .40, size: 74 },
    { id: 'categories', label: 'Girls / boys categories', x: .34, y: .16, size: 68 },
    { id: 'listings', label: 'Product listings', x: .45, y: .34, size: 64 },
    { id: 'packaging', label: 'Packaging aesthetics', x: .32, y: .68, size: 62 },
    { id: 'unboxing', label: 'Unboxing media', x: .49, y: .82, size: 58 },
    { id: 'dataset', label: 'Scraped dataset', x: .58, y: .52, size: 104, major: true },
    { id: 'model', label: 'Machine-learning model', x: .69, y: .24, size: 100, major: true },
    { id: 'outputs', label: 'Generated toys', x: .78, y: .47, size: 76 },
    { id: 'liu', label: "Liu's selection", x: .63, y: .77, size: 72 },
    { id: 'screens', label: 'Digital screens', x: .82, y: .74, size: 58 },
    { id: 'objects', label: '3D prototypes', x: .91, y: .60, size: 58 },
    { id: 'gallery', label: 'Gallery installation', x: .91, y: .27, size: 88, major: true },
    { id: 'public', label: 'Viewers + press', x: .82, y: .10, size: 76 },
    { id: 'critique', label: 'Recognition + critique', x: .52, y: .10, size: 72 }
  ];

  var links = [
    ['culture', 'families'], ['culture', 'categories'], ['culture', 'packaging'],
    ['families', 'retail'], ['families', 'culture'], ['retail', 'categories'],
    ['retail', 'listings'], ['categories', 'listings'], ['categories', 'packaging'],
    ['listings', 'dataset'], ['unboxing', 'dataset'], ['dataset', 'model'],
    ['model', 'outputs'], ['outputs', 'liu'], ['liu', 'screens'], ['liu', 'objects'],
    ['packaging', 'objects'], ['screens', 'gallery'], ['objects', 'gallery'],
    ['gallery', 'public'], ['public', 'critique'], ['critique', 'culture'],
    ['dataset', 'categories'], ['public', 'families'], ['model', 'critique']
  ];

  function draw() {
    var rect = canvas.getBoundingClientRect();
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);

    var ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);
    var w = rect.width;
    var h = rect.height;
    var scale = Math.min(w / 1000, h / 650);
    var byId = {};

    ctx.fillStyle = '#2f6bff';
    ctx.fillRect(0, 0, w, h);

    nodes.forEach(function (node) {
      node.px = node.x * w;
      node.py = node.y * h;
      node.ps = Math.max(44, node.size * scale);
      byId[node.id] = node;
    });

    links.forEach(function (link, index) {
      var a = byId[link[0]];
      var b = byId[link[1]];
      var critical = link[0] === 'critique' && link[1] === 'culture';
      ctx.beginPath();
      ctx.moveTo(a.px, a.py);
      ctx.lineTo(b.px, b.py);
      ctx.strokeStyle = critical ? '#e9ff7a' : 'rgba(255,255,255,.62)';
      ctx.lineWidth = critical ? 3 : 1;
      if (critical) ctx.setLineDash([8, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      if (index % 2 === 0 || critical) {
        var angle = Math.atan2(b.py - a.py, b.px - a.px);
        var endX = b.px - Math.cos(angle) * (b.ps * .56);
        var endY = b.py - Math.sin(angle) * (b.ps * .56);
        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(endX - Math.cos(angle - .55) * 8, endY - Math.sin(angle - .55) * 8);
        ctx.lineTo(endX - Math.cos(angle + .55) * 8, endY - Math.sin(angle + .55) * 8);
        ctx.closePath();
        ctx.fillStyle = critical ? '#e9ff7a' : '#ffffff';
        ctx.fill();
      }
    });

    nodes.forEach(function (node) {
      var s = node.ps;
      ctx.fillStyle = node.major ? '#111111' : '#2f6bff';
      ctx.fillRect(node.px - s / 2, node.py - s / 2, s, s);
      ctx.strokeStyle = node.major ? '#e9ff7a' : '#ffffff';
      ctx.lineWidth = node.major ? 3 : 1.5;
      ctx.strokeRect(node.px - s / 2, node.py - s / 2, s, s);

      var words = node.label.split(' ');
      var lines = [];
      var line = '';
      ctx.font = '700 ' + Math.max(9, Math.min(13, 11 * scale + 3)) + 'px "Courier New", monospace';
      words.forEach(function (word) {
        var test = line ? line + ' ' + word : word;
        if (ctx.measureText(test).width > s - 10 && line) {
          lines.push(line);
          line = word;
        } else {
          line = test;
        }
      });
      lines.push(line);

      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var lineHeight = 13;
      lines.forEach(function (text, i) {
        ctx.fillText(text, node.px, node.py + (i - (lines.length - 1) / 2) * lineHeight);
      });
    });
  }

  var resizeFrame;
  window.addEventListener('resize', function () {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(draw);
  });
  draw();
});

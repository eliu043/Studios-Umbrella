// ontology.js
// Hover or focus a component in the ontological analysis grid to populate
// the detail pane with its description and function in the project.

document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.ontology-item');
  var nameEl = document.querySelector('.ontology-detail-name');
  var descEl = document.querySelector('.ontology-detail-desc');
  var funcEl = document.querySelector('.ontology-detail-function');

  if (!items.length || !descEl) return;

  function activate(item) {
    items.forEach(function (i) { i.classList.remove('is-active'); });
    item.classList.add('is-active');
    nameEl.textContent = item.textContent.replace(/^\d+/, '').trim();
    descEl.textContent = item.dataset.desc;
    funcEl.textContent = item.dataset.function;
  }

  items.forEach(function (item) {
    item.addEventListener('mouseenter', function () { activate(item); });
    item.addEventListener('focus', function () { activate(item); });
  });
});

// sort-game.js
// "You are the dataset" — a sorting game that lets the visitor reproduce the
// same girls/boys labeling act that produced the training data behind A.I. Toys.

document.addEventListener('DOMContentLoaded', function () {
  var toys = [
    { name: 'Sparkle Fairy Dress-Up Wand & Wings Set', desc: 'A satin wand, tulle wings, and a tiara sized for pretend transformation.', retail: 'girls' },
    { name: 'Ultimate Combat Ops Blaster Squad', desc: 'A foam-dart blaster with tactical vest, goggles, and a 20-dart magazine.', retail: 'boys' },
    { name: 'Rainbow Loom Bracelet Studio', desc: 'A loom, hook, and 600 elastic bands for building bracelets and charms.', retail: 'girls' },
    { name: 'Dino Dig Excavation Kit', desc: 'A block of plaster hides three dinosaur skeletons to chip out with real tools.', retail: 'boys' },
    { name: "Baby's First Nursery Care Set", desc: 'A soft-bodied doll, bottle, blanket, and carrier for feeding and rocking play.', retail: 'girls' },
    { name: 'Monster Crawler RC Truck', desc: 'A remote-control truck with oversized tires built for mud, ramps, and speed.', retail: 'boys' },
    { name: 'Little Chef Kitchen & Market Set', desc: 'A pretend stove, pots, and felt produce for restaurant and grocery play.', retail: 'girls' },
    { name: 'Junior Workshop Tool Bench', desc: 'A wooden bench with a working drill, saw, and vise for building projects.', retail: 'boys' },
    { name: 'Glitter Gem Jewelry Design Studio', desc: 'A tray of beads, wire, and a spinning display stand for making rings and necklaces.', retail: 'girls' },
    { name: 'Galactic Explorer Rocket Launch Set', desc: 'A pump-powered rocket, launchpad, and astronaut figures for backyard launches.', retail: 'boys' },
    { name: 'My First Vet Clinic Playset', desc: 'A checkup table, stethoscope, and plush animal patients for pretend appointments.', retail: 'girls' },
    { name: 'Circuit Builders Robotics Kit', desc: 'Snap-together blocks and a motor for building a walking robot from a diagram.', retail: 'boys' }
  ];

  var startBtn = document.getElementById('sortStart');
  if (!startBtn) return;

  var introEl = document.getElementById('sortIntro');
  var stageEl = document.getElementById('sortStage');
  var progressEl = document.getElementById('sortProgress');
  var tagEl = document.getElementById('sortTag');
  var nameEl = document.getElementById('sortName');
  var descEl = document.getElementById('sortDesc');
  var girlsBtn = document.getElementById('sortGirls');
  var boysBtn = document.getElementById('sortBoys');
  var resultsEl = document.getElementById('sortResults');
  var replayBtn = document.getElementById('sortReplay');

  var order = [];
  var index = 0;
  var answers = [];

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function renderCard() {
    var toy = order[index];
    progressEl.textContent = 'Toy ' + (index + 1) + ' of ' + order.length;
    tagEl.textContent = 'Item ' + String(index + 1).padStart(2, '0') + ' · retail listing';
    nameEl.textContent = toy.name;
    descEl.textContent = toy.desc;
  }

  function recordChoice(choice) {
    var toy = order[index];
    answers.push({ name: toy.name, chosen: choice, retail: toy.retail });
    index++;
    if (index < order.length) {
      renderCard();
    } else {
      showResults();
    }
  }

  function showResults() {
    stageEl.classList.add('hidden');
    resultsEl.classList.remove('hidden');

    var girlsCount = 0;
    var boysCount = 0;
    var matchCount = 0;
    var rows = '';

    answers.forEach(function (a) {
      if (a.chosen === 'girls') girlsCount++; else boysCount++;
      var isMatch = a.chosen === a.retail;
      if (isMatch) matchCount++;
      rows += '<tr>' +
        '<td>' + a.name + '</td>' +
        '<td>' + (a.chosen === 'girls' ? "Girls'" : "Boys'") + '</td>' +
        '<td>' + (a.retail === 'girls' ? "Girls'" : "Boys'") + '</td>' +
        '<td class="' + (isMatch ? 'match-yes' : 'match-no') + '">' + (isMatch ? 'Match' : 'Diverged') + '</td>' +
        '</tr>';
    });

    document.getElementById('sortTallyGirls').textContent = girlsCount;
    document.getElementById('sortTallyBoys').textContent = boysCount;
    document.getElementById('sortTallyMatch').textContent = matchCount + ' / ' + answers.length;
    document.getElementById('sortTableBody').innerHTML = rows;

    var reflection;
    if (matchCount >= 10) {
      reflection = 'You matched retail’s own gendered categorization on ' + matchCount + ' of ' + answers.length + ' toys. That consistency, reproduced by someone who was never told the rule, is exactly the training signal a model like Liu’s learns from.';
    } else if (matchCount >= 6) {
      reflection = 'You matched retail’s categorization on ' + matchCount + ' of ' + answers.length + ' toys and broke from it on the rest. The mismatches aren’t errors, they’re evidence that the boundary was never fixed to begin with.';
    } else {
      reflection = 'You broke from retail’s categorization on more than half these toys. That’s the crack in the premise: the girls/boys binary only holds together if everyone keeps sorting the same way.';
    }
    document.getElementById('sortReflection').textContent = reflection;
  }

  function startGame() {
    order = shuffle(toys);
    index = 0;
    answers = [];
    introEl.classList.add('hidden');
    resultsEl.classList.add('hidden');
    stageEl.classList.remove('hidden');
    renderCard();
  }

  startBtn.addEventListener('click', startGame);
  girlsBtn.addEventListener('click', function () { recordChoice('girls'); });
  boysBtn.addEventListener('click', function () { recordChoice('boys'); });
  replayBtn.addEventListener('click', startGame);
});

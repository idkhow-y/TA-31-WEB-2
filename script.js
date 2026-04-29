const categories = [
  'Light Arms',
  'Heavy Arms',
  'Uniforms',
  'Medical Equipment',
  'Vehicles'
];

const itemData = [
  {
    id: 'ammunition',
    name: 'Патрон 7.62',
    category: 'Light Arms',
    bmats: 80,
    emats: 5,
    rmats: 0,
    time: 4,
    icon: 'RifleAmmoItemIcon.webp'
  },
  {
    id: 'rifle',
    name: 'Арґенті Р.II',
    category: 'Light Arms',
    bmats: 100,
    emats: 0,
    rmats: 0,
    time: 5,
    icon: 'RifleIcon.webp'
  },
  {
    id: 'machinegun',
    name: 'KRN886-127 Ґаст',
    category: 'Light Arms',
    bmats: 120,
    emats: 0,
    rmats: 0,
    time: 9,
    icon: 'MGCItemIcon.png'
  },
  {
    id: 'artshell',
    name: '150мм Артилерійський заряд',
    category: 'Heavy Arms',
    bmats: 70,
    emats: 50,
    rmats: 0,
    time: 15,
    icon: 'HeavyArtilleryAmmoItemIcon.webp'
  },
  {
    id: 'mortar',
    name: 'Мортира Кремарі',
    category: 'Heavy Arms',
    bmats: 0,
    emats: 0,
    rmats: 120,
    time: 24,
    icon: 'MortarItemIcon.webp'
  },
  {
    id: 'mortarShell',
    name: 'Вибуховий заряд для мортири',
    category: 'Heavy Arms',
    bmats: 70,
    emats: 80,
    rmats: 0,
    time: 19,
    icon: 'MortarAmmoIcon.webp'
  },
  {
    id: 'shrapnellShell',
    name: 'Осколковий заряд для мортири',
    category: 'Heavy Arms',
    bmats: 90,
    emats: 60,
    rmats: 0,
    time: 17,
    icon: 'MortarAmmoIconShrapnel.webp'
  },
  {
    id: 'tankUniform',
    name: 'Уніформа танкіста',
    category: 'Uniforms',
    bmats: 120,
    emats: 0,
    rmats: 0,
    time: 11,
    icon: 'TankUniformCIcon.png'
  },
  {
    id: 'FlakVest',
    name: 'Велійський бронежилет',
    category: 'Uniforms',
    bmats: 150,
    emats: 0,
    rmats: 0,
    time: 14,
    icon: 'ArmourUniformC.png'
  },
  {
    id: 'medicuniform',
    name: 'Уніформа медика',
    category: 'Uniforms',
    bmats: 150,
    emats: 0,
    rmats: 0,
    time: 11,
    icon: 'MedicUniformCIcon.png'
  },
  {
    id: 'medpack',
    name: 'Медична сумка',
    category: 'Medical Equipment',
    bmats: 80,
    emats: 0,
    rmats: 0,
    time: 9,
    icon: 'FirstAidKitItem.png'
  },
  {
    id: 'bandage',
    name: 'Бинт',
    category: 'Medical Equipment',
    bmats: 70,
    emats: 0,
    rmats: 0,
    time: 5,
    icon: 'BandagesItemIcon.webp'
  },
  {
    id: 'bloodplasma',
    name: 'Плазма крові',
    category: 'Medical Equipment',
    bmats: 70,
    emats: 0,
    rmats: 0,
    time: 10,
    icon: 'BloodPlasmaItemIcon.webp'
  },
  {
    id: '150mmarty',
    name: '150мм гармата "Громовиця"',
    category: 'Vehicles',
    bmats: 0,
    emats: 0,
    rmats: 150,
    time: 68,
    icon: 'HeavyArtilleryCIcon.webp'
  },
    {
    id: 'Bardiche',
    name: '86К-а Бардиш',
    category: 'Vehicles',
    bmats: 0,
    emats: 0,
    rmats: 165,
    time: 47,
    icon: 'MediumTank2CIcon.webp'
  },
    {
    id: 'hauler',
    name: 'R-1 Перевізник',
    category: 'Vehicles',
    bmats: 100,
    emats: 0,
    rmats: 0,
    time: 10,
    icon: 'TruckVehicleIcon.webp'
  }
];

const categorySelect = document.getElementById('categorySelect');
const itemGrid = document.getElementById('itemGrid');
const queueList = document.getElementById('queueList');
const categoryTotals = document.getElementById('categoryTotals');
const totalBmatsEl = document.getElementById('totalBmats');
const totalEmatsEl = document.getElementById('totalEmats');
const totalRmatsEl = document.getElementById('totalRmats');
const totalTimeEl = document.getElementById('totalTime');
const clearQueueBtn = document.getElementById('clearQueueBtn');

const queue = [];
let selectedCategory = categories[0];

function saveQueue() {
  try {
    localStorage.setItem('factoryQueue', JSON.stringify(queue));
    console.log('Queue saved to localStorage:', queue);
  } catch (e) {
    console.error('Failed to save queue:', e);
  }
}

function loadQueue() {
  try {
    const savedQueue = JSON.parse(localStorage.getItem('factoryQueue'));
    if (savedQueue && Array.isArray(savedQueue)) {
      queue.push(...savedQueue);
      console.log('Queue loaded from localStorage:', queue);
    } else {
      console.log('No saved queue found');
    }
  } catch (e) {
    console.error('Failed to load queue from localStorage:', e);
  }
}

function clearQueue() {
  queue.length = 0;
  localStorage.removeItem('factoryQueue');
  renderQueue();
  updateTotals();
  console.log('Queue cleared');
}

function formatTooltip(item) {
  return `${item.name} • BMats: ${item.bmats} • EMats: ${item.emats} • RMats: ${item.rmats} • Time: ${item.time} min`;
}

function getFilteredItems() {
  return itemData.filter((item) => item.category === selectedCategory);
}

function renderCategoryOptions() {
  categorySelect.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join('');
  categorySelect.value = selectedCategory;
  categorySelect.addEventListener('change', (event) => {
    selectedCategory = event.target.value;
    renderGallery();
  });
}

function renderGallery() {
  const filteredItems = getFilteredItems();
  itemGrid.innerHTML = '';

  if (filteredItems.length === 0) {
    const emptyCard = document.createElement('div');
    emptyCard.className = 'queue-empty';
    emptyCard.textContent = 'No items in this category yet.';
    itemGrid.appendChild(emptyCard);
    return;
  }

  filteredItems.forEach((item) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'item-card';
    card.dataset.tooltip = formatTooltip(item);
    card.innerHTML = `
      <img src="${item.icon}" alt="${item.name} icon">
      <span class="item-name">${item.name}</span>
    `;
    card.addEventListener('click', () => addToQueue(item));
    itemGrid.appendChild(card);
  });
}

function renderQueue() {
  queueList.innerHTML = '';

  if (queue.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'queue-empty';
    empty.textContent = 'No items added yet. Click an item to enqueue it.';
    queueList.appendChild(empty);
    return;
  }

  categories.forEach((category) => {
    const groupedItems = queue.filter((item) => item.category === category);
    if (!groupedItems.length) return;

    const group = document.createElement('div');
    group.className = 'queue-group';
    group.innerHTML = `<h3 class="queue-group-header">${category}</h3>`;

    groupedItems.forEach((entry, index) => {
      const row = document.createElement('div');
      row.className = 'queue-item';
      row.innerHTML = `
        <img src="${entry.icon}" alt="${entry.name} icon">
        <div class="queue-item-text">
          <strong>${entry.name}</strong>
          <div class="queue-item-meta">BMats: ${entry.bmats} • EMats: ${entry.emats} • RMats: ${entry.rmats} • Time: ${entry.time} min</div>
        </div>
        <button type="button" class="queue-remove" aria-label="Remove ${entry.name} from queue">×</button>
      `;

      row.querySelector('.queue-remove').addEventListener('click', () => removeFromQueue(queue.indexOf(entry)));
      group.appendChild(row);
    });

    queueList.appendChild(group);
  });
}

function updateTotals() {
  const totalsByCategory = categories.map((category) => {
    const categoryItems = queue.filter((item) => item.category === category);
    return {
      category,
      bmats: categoryItems.reduce((sum, item) => sum + item.bmats, 0),
      emats: categoryItems.reduce((sum, item) => sum + item.emats, 0),
      rmats: categoryItems.reduce((sum, item) => sum + item.rmats, 0),
      time: categoryItems.reduce((sum, item) => sum + item.time, 0)
    };
  });

  categoryTotals.innerHTML = totalsByCategory
    .map(
      (entry) => `
      <div class="category-total">
        <span>${entry.category}</span>
        <strong>BMats: ${entry.bmats} • EMats: ${entry.emats} • RMats: ${entry.rmats} • ${entry.time} min</strong>
      </div>
    `
    )
    .join('');

  const totalBmats = totalsByCategory.reduce((sum, entry) => sum + entry.bmats, 0);
  const totalEmats = totalsByCategory.reduce((sum, entry) => sum + entry.emats, 0);
  const totalRmats = totalsByCategory.reduce((sum, entry) => sum + entry.rmats, 0);
  const totalTime = totalsByCategory.reduce((sum, entry) => sum + entry.time, 0);

  totalBmatsEl.textContent = totalBmats;
  totalEmatsEl.textContent = totalEmats;
  totalRmatsEl.textContent = totalRmats;
  totalTimeEl.textContent = `${totalTime} min`;
}

function addToQueue(item) {
  queue.push({ ...item });
  renderQueue();
  updateTotals();
  saveQueue();
}

function removeFromQueue(index) {
  queue.splice(index, 1);
  renderQueue();
  updateTotals();
  saveQueue();
}

loadQueue();
renderCategoryOptions();
renderGallery();
renderQueue();
updateTotals();
clearQueueBtn.addEventListener('click', clearQueue);

// Check if localStorage is available
try {
  localStorage.setItem('test', 'test');
  localStorage.removeItem('test');
  console.log('✓ localStorage is available');
} catch (e) {
  console.warn('✗ localStorage is NOT available (file:// protocol blocks it in some browsers)');
}

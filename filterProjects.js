const RESEARCH_DIRECTIONS = [
  {
    key: 'llm',
    label: 'AI Agents',
    icon: 'fa-wand-magic-sparkles',
    aliases: ['llm']
  },
  {
    key: 'tp',
    label: 'Transportation & Autonomy',
    icon: 'fa-route',
    aliases: ['tp', 'st']
  },
  {
    key: 'uq',
    label: 'Trustworthy AI',
    icon: 'fa-shield-halved',
    aliases: ['uq']
  }
];

function getCanonicalTopics(row) {
  const rawTopics = (row.getAttribute('data-topic') || '').split(/\s+/).filter(Boolean);
  return RESEARCH_DIRECTIONS
    .filter(direction => direction.aliases.some(alias => rawTopics.includes(alias)))
    .map(direction => direction.key);
}

function decoratePublicationTopics() {
  const table = document.getElementById('publications-table');
  if (!table) return;

  table.querySelectorAll('tr.paper_entry').forEach(row => {
    const details = row.querySelector('.paper_details');
    if (!details) return;

    const thumbnail = row.querySelector('.paper_tb img');
    const paperTitle = row.querySelector('papertitle');
    if (thumbnail) {
      thumbnail.loading = 'lazy';
      if (!thumbnail.alt && paperTitle) {
        thumbnail.alt = `Key figure from ${paperTitle.textContent.trim()}`;
      }
    }

    details.querySelectorAll('.topic-circle').forEach(dot => dot.remove());
    const oldLabels = details.querySelector('.paper-topic-labels');
    if (oldLabels) oldLabels.remove();

    const topics = getCanonicalTopics(row);
    if (!topics.length) return;

    const labels = document.createElement('span');
    labels.className = 'paper-topic-labels';
    labels.setAttribute('aria-label', 'Research directions');

    topics.forEach(topic => {
      const direction = RESEARCH_DIRECTIONS.find(item => item.key === topic);
      const label = document.createElement('span');
      label.className = 'paper-topic-label';
      label.dataset.topic = direction.key;

      const icon = document.createElement('i');
      icon.className = `fa-solid ${direction.icon}`;
      icon.setAttribute('aria-hidden', 'true');

      const text = document.createElement('span');
      text.textContent = direction.label;

      label.append(icon, text);
      labels.appendChild(label);
    });

    details.appendChild(labels);
  });
}

function filterPublications(filterFn) {
  const table = document.getElementById('publications-table');
  if (!table) return;

  // Convert HTMLCollection to Array
  const rows = Array.from(table.querySelectorAll('tr.paper_entry'));

  rows.forEach(row => {
    // If filterFn returns true, show row; else hide row
    if (filterFn(row)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function setActiveDirection(topic) {
  document.querySelectorAll('.research-direction').forEach(button => {
    const isActive = button.dataset.topic === topic;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

// 2. Show only "selected" rows
function showSelected() {
    const table = document.getElementById('publications-table');
    if (!table) return;
  
    // Grab all rows
    let rows = Array.from(table.querySelectorAll('tr.paper_entry'));
  
    // 1. Filter for only the selected rows
    rows = rows.filter(row => row.getAttribute('data-selected') === 'true');
  
    // 2. Sort them by year descending
    rows.sort((a, b) => {
      const aYear = parseInt(a.getAttribute('data-year') || '0', 10);
      const bYear = parseInt(b.getAttribute('data-year') || '0', 10);
      return bYear - aYear; // descending
    });
  
    // 3. Hide all rows, then show only the selected ones
    const allRows = Array.from(table.querySelectorAll('tr.paper_entry'));
    allRows.forEach(r => (r.style.display = 'none'));
  
    // 4. Re-append sorted, selected rows and set display=''
    rows.forEach(r => {
      table.tBodies[0].appendChild(r);
      r.style.display = '';
    });
    setActiveDirection(null);
  }

// 3. Show all rows by date descending
function showAllByDate() {
  const table = document.getElementById('publications-table');
  if (!table) return;

  // Grab all rows
  let rows = Array.from(table.querySelectorAll('tr.paper_entry'));

  // Sort them by year (descending)
  rows.sort((a, b) => {
    const aYear = parseInt(a.getAttribute('data-year') || '0', 10);
    const bYear = parseInt(b.getAttribute('data-year') || '0', 10);
    return bYear - aYear; // descending
  });

  // Re-append them in sorted order
  rows.forEach(r => table.tBodies[0].appendChild(r));

  // Finally, show all
  rows.forEach(r => r.style.display = '');
  setActiveDirection(null);
}

// 4. Show all rows, but only those matching a certain topic
function showAllByTopic(topic) {
    const table = document.getElementById('publications-table');
    if (!table) return;
  
    // 1. Grab all rows
    let rows = Array.from(table.querySelectorAll('tr.paper_entry'));
  
    // 2. Filter using the new three-direction taxonomy.
    // Legacy "st" entries are folded into transportation and autonomous systems.
    rows = rows.filter(row => getCanonicalTopics(row).includes(topic));
  
    // 3. Sort the filtered rows by year (descending)
    rows.sort((a, b) => {
      const aYear = parseInt(a.getAttribute('data-year') || '0', 10);
      const bYear = parseInt(b.getAttribute('data-year') || '0', 10);
      return bYear - aYear; // descending
    });
  
    // 4. Hide all rows first
    const allRows = Array.from(table.querySelectorAll('tr.paper_entry'));
    allRows.forEach(r => (r.style.display = 'none'));
  
    // 5. Re-append filtered, sorted rows and set display=''
    rows.forEach(r => {
      table.tBodies[0].appendChild(r);
      r.style.display = '';
    });
    setActiveDirection(topic);
  }

document.addEventListener('DOMContentLoaded', decoratePublicationTopics);

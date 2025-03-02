
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
}

// 4. Show all rows, but only those matching a certain topic
function showAllByTopic(topic) {
    const table = document.getElementById('publications-table');
    if (!table) return;
  
    // 1. Grab all rows
    let rows = Array.from(table.querySelectorAll('tr.paper_entry'));
  
    // 2. Filter for rows whose data-topic contains the chosen topic
    rows = rows.filter(row => {
      const topics = row.getAttribute('data-topic') || '';
      return topics.split(' ').includes(topic);
    });
  
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
  }

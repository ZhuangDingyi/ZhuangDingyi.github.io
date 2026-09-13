const RESEARCH_DIRECTIONS = [
  { key: 'llm', label: 'AI Agents', icon: 'fa-wand-magic-sparkles', aliases: ['llm'] },
  { key: 'tp', label: 'Transportation & Autonomy', icon: 'fa-route', aliases: ['tp', 'st'] },
  { key: 'uq', label: 'Trustworthy AI', icon: 'fa-shield-halved', aliases: ['uq'] }
];

const RESEARCH_SUBTOPICS = [
  { key: 'llm-agents', label: 'LLM Agents', parent: 'llm' },
  { key: 'tool-planning', label: 'Tool Use & Planning', parent: 'llm' },
  { key: 'rsi', label: 'Recursive Self-Improvement (RSI)', parent: 'llm' },
  { key: 'multimodal', label: 'Multimodal Reasoning', parent: 'llm' },
  { key: 'agent-evaluation', label: 'Agent Evaluation', parent: 'llm' },
  { key: 'ai-science', label: 'AI for Science', parent: 'llm' },
  { key: 'spatiotemporal', label: 'Spatiotemporal Learning', parent: 'tp' },
  { key: 'forecast-optimization', label: 'Forecasting & Optimization', parent: 'tp' },
  { key: 'reinforcement-learning', label: 'Reinforcement Learning', parent: 'tp' },
  { key: 'autonomous-driving', label: 'Autonomous Driving', parent: 'tp' },
  { key: 'uncertainty', label: 'Uncertainty Quantification', parent: 'uq' },
  { key: 'calibration', label: 'Reliability & Calibration', parent: 'uq' },
  { key: 'fairness', label: 'Fairness', parent: 'uq' }
];

const PUBLICATION_SUBTOPICS = new Map([
  ['EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards', ['llm-agents', 'tool-planning', 'agent-evaluation', 'ai-science', 'fairness']],
  ['Public Transit Gains and Spatially Uneven Travel Demand Changes after NYC Congestion Pricing', ['spatiotemporal', 'forecast-optimization', 'uncertainty', 'calibration']],
  ['Bridge: Retrieval-Augmented Spatiotemporal Modeling for Urban Delivery Demand', ['llm-agents', 'spatiotemporal', 'forecast-optimization']],
  ['Ozone: A Unified Platform for Transportation Research', ['forecast-optimization']],
  ['Risk-Controllable Multi-View Diffusion for Driving Scenario Generation', ['multimodal', 'autonomous-driving', 'uncertainty']],
  ['TrustEnergy: A Unified Framework for Accurate and Reliable User-level Energy Usage Prediction', ['uncertainty', 'calibration']],
  ['Think Before You Drive: World Model-Inspired Multimodal Grounding for Autonomous Vehicles', ['multimodal', 'autonomous-driving']],
  ['TimePre: Bridging Accuracy, Efficiency, and Stability in Probabilistic Time-Series Forecasting', ['spatiotemporal', 'forecast-optimization', 'uncertainty', 'calibration']],
  ['AlphaOPT: Formulating Optimization Programs with Self-Improving LLM Experience Library', ['llm-agents', 'tool-planning', 'rsi', 'agent-evaluation']],
  ['From Patchwork to Network: A Comprehensive Framework for Demand Analysis and Fleet Optimization of Urban Air Mobility', ['spatiotemporal', 'forecast-optimization']],
  ['Human-guided Urban Form Generation Using Multimodal Diffusion Models', ['multimodal']],
  ['UQGNN: Uncertainty Quantification of Graph Neural Networks for Multivariate Spatiotemporal Prediction', ['spatiotemporal', 'forecast-optimization', 'uncertainty']],
  ['Interpretable Time Series Autoregression for Periodicity Quantification', ['spatiotemporal', 'forecast-optimization']],
  ['Reliable imputation of incomplete crash data for predicting driver injury severity', ['spatiotemporal', 'forecast-optimization', 'uncertainty']],
  ['Dynamic Autoregressive Tensor Factorization for Pattern Discovery of Spatiotemporal Systems', ['spatiotemporal', 'forecast-optimization']],
  ['Towards Foundation Model for Spatiotemporal Data Analysis', ['llm-agents', 'spatiotemporal', 'forecast-optimization']],
  ['Reimagining Urban Science: Scaling Causal Inference with Large Language Models', ['llm-agents', 'tool-planning', 'ai-science']],
  ['GETS: Ensemble Temperature Scaling for Calibration in Graph Neural Networks', ['uncertainty', 'calibration']],
  ['Time Series Supplier Allocation via Deep Black-Litterman Model', ['spatiotemporal', 'forecast-optimization']],
  ['Mitigating Spatial Disparity in Urban Prediction Using Residual-Aware Spatiotemporal Graph Neural Networks: A Chicago Case Study', ['spatiotemporal', 'forecast-optimization', 'fairness']],
  ['ItiNera: Integrating Spatial Optimization with Large Language Models for Open-domain Urban Itinerary Planning', ['llm-agents', 'tool-planning', 'spatiotemporal', 'forecast-optimization']],
  ['Uncertainty-aware Probabilistic Graph Neural Networks for Road-level Traffic Crash Prediction', ['spatiotemporal', 'forecast-optimization', 'uncertainty', 'calibration']],
  ['Uncertainty Quantification of Sparse Travel Demand Prediction with Spatial-Temporal Graph Neural Networks', ['spatiotemporal', 'forecast-optimization', 'uncertainty', 'calibration']],
  ['Uncertainty Quantification via Spatial-Temporal Tweedie Model for Zero-inflated and Long-tail Travel Demand Prediction', ['spatiotemporal', 'forecast-optimization', 'uncertainty']],
  ['SAUC: Sparsity-Aware Uncertainty Calibration for Spatiotemporal Prediction with Graph Neural Networks', ['spatiotemporal', 'uncertainty', 'calibration']],
  ['Large Language Models for Travel Behavior Prediction', ['llm-agents', 'spatiotemporal', 'forecast-optimization']],
  ['Inductive Graph Neural Networks for Spatiotemporal Kriging', ['spatiotemporal', 'forecast-optimization']],
  ["The Braess's Paradox in Dynamic Traffic", ['forecast-optimization', 'reinforcement-learning']],
  ['From Compound Word to Metropolitan Station: Semantic Similarity Analysis using Smart Card Data', ['spatiotemporal']],
  ['Uncertainty Quantification of Spatiotemporal Travel Demand with Probabilistic Graph Neural Networks', ['spatiotemporal', 'forecast-optimization', 'uncertainty']],
  ['Sparkle: Mastering Basic Spatial Capabilities in Vision Language Models Elicits Generalization to Composite Spatial Reasoning', ['multimodal', 'agent-evaluation']],
  ['Virtual Nodes Improve Long-term Traffic Prediction', ['spatiotemporal', 'forecast-optimization']],
  ['Fairness-Enhancing Vehicle Rebalancing in the Ride-hailing System', ['forecast-optimization', 'reinforcement-learning', 'fairness']],
  ['ST-GIN: An Uncertainty Quantification Approach in Traffic Data Imputation with Spatio-temporal Graph Attention and Bidirectional Recurrent United Neural Networks', ['spatiotemporal', 'forecast-optimization', 'uncertainty']],
  ['Fairness-enhancing Deep Learning for Ride-hailing Demand Prediction', ['spatiotemporal', 'forecast-optimization', 'fairness']],
  ['A Universal Framework of Spatiotemporal Bias Block for Long-term Traffic Forecasting', ['spatiotemporal', 'forecast-optimization', 'fairness']],
  ['Low-rank Hankel Tensor Completion for Traffic Speed Estimation', ['spatiotemporal', 'forecast-optimization']],
  ['Spatial Aggregation and Temporal Convolution Networks for Real-time Kriging', ['spatiotemporal', 'forecast-optimization']],
  ['Advancing Transportation Mode Share Analysis with Built Environment: Deep Hybrid Models with Urban Road Network', ['spatiotemporal', 'forecast-optimization']],
  ['Understanding the Bike Sharing Travel Demand and Cycle Lane Network: The Case of Shanghai', ['spatiotemporal', 'forecast-optimization']]
]);

function getPublicationTitle(row) {
  return row.querySelector('papertitle')?.textContent.trim() || '';
}

function getSubtopics(row) {
  const explicit = (row.dataset.subtopics || '').split(/\s+/).filter(Boolean);
  if (explicit.length) return explicit;

  const mapped = PUBLICATION_SUBTOPICS.get(getPublicationTitle(row)) || [];
  if (mapped.length) row.dataset.subtopics = mapped.join(' ');
  return mapped;
}

function getCanonicalTopics(row) {
  const rawTopics = (row.getAttribute('data-topic') || '').split(/\s+/).filter(Boolean);
  const subtopicParents = getSubtopics(row)
    .map(key => RESEARCH_SUBTOPICS.find(subtopic => subtopic.key === key)?.parent)
    .filter(Boolean);

  return RESEARCH_DIRECTIONS
    .filter(direction => (
      direction.aliases.some(alias => rawTopics.includes(alias)) || subtopicParents.includes(direction.key)
    ))
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
    details.querySelector('.paper-topic-labels')?.remove();

    const topics = getCanonicalTopics(row);
    const subtopics = getSubtopics(row);
    if (!topics.length && !subtopics.length) return;

    const labels = document.createElement('span');
    labels.className = 'paper-topic-labels';
    labels.setAttribute('aria-label', 'Research topics');

    topics.forEach(topic => {
      const direction = RESEARCH_DIRECTIONS.find(item => item.key === topic);
      const label = document.createElement('span');
      label.className = 'paper-topic-label paper-primary-label';
      label.dataset.topic = direction.key;

      const icon = document.createElement('i');
      icon.className = `fa-solid ${direction.icon}`;
      icon.setAttribute('aria-hidden', 'true');

      const text = document.createElement('span');
      text.textContent = direction.label;

      label.append(icon, text);
      labels.appendChild(label);
    });

    subtopics.forEach(key => {
      const subtopic = RESEARCH_SUBTOPICS.find(item => item.key === key);
      if (!subtopic) return;

      const label = document.createElement('span');
      label.className = 'paper-topic-label paper-subtopic-label';
      label.dataset.subtopic = subtopic.key;
      label.dataset.parent = subtopic.parent;
      label.textContent = subtopic.label;
      labels.appendChild(label);
    });

    details.appendChild(labels);
  });
}

function filterPublications(filterFn) {
  const table = document.getElementById('publications-table');
  if (!table) return;

  Array.from(table.querySelectorAll('tr.paper_entry')).forEach(row => {
    row.style.display = filterFn(row) ? '' : 'none';
  });
}

function setActiveFilter(kind, key) {
  const activeSubtopic = kind === 'subtopic'
    ? RESEARCH_SUBTOPICS.find(subtopic => subtopic.key === key)
    : null;

  document.querySelectorAll('.research-direction').forEach(card => {
    const cardIsActive = kind === 'topic'
      ? card.dataset.topic === key
      : activeSubtopic?.parent === card.dataset.topic;
    card.classList.toggle('is-active', cardIsActive);
  });

  document.querySelectorAll('.direction-main').forEach(button => {
    const isActive = kind === 'topic' && button.dataset.topic === key;
    button.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('.direction-tags button').forEach(button => {
    const isActive = kind === 'subtopic' && button.dataset.subtopic === key;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function updateFilterStatus(label, count) {
  const status = document.getElementById('research-filter-status');
  if (!status) return;
  status.textContent = `${label} · ${count} ${count === 1 ? 'publication' : 'publications'}`;
}

function sortByYear(rows) {
  return rows.sort((a, b) => {
    const aYear = parseInt(a.getAttribute('data-year') || '0', 10);
    const bYear = parseInt(b.getAttribute('data-year') || '0', 10);
    return bYear - aYear;
  });
}

function displayRows(rows) {
  const table = document.getElementById('publications-table');
  if (!table) return;

  const allRows = Array.from(table.querySelectorAll('tr.paper_entry'));
  allRows.forEach(row => (row.style.display = 'none'));
  sortByYear(rows).forEach(row => {
    table.tBodies[0].appendChild(row);
    row.style.display = '';
  });
}

function showSelected() {
  const table = document.getElementById('publications-table');
  if (!table) return;

  const rows = Array.from(table.querySelectorAll('tr.paper_entry'))
    .filter(row => row.getAttribute('data-selected') === 'true');

  displayRows(rows);
  setActiveFilter(null, null);
  updateFilterStatus('Selected publications', rows.length);
}

function showAllByDate() {
  const table = document.getElementById('publications-table');
  if (!table) return;

  const rows = Array.from(table.querySelectorAll('tr.paper_entry'));
  displayRows(rows);
  setActiveFilter(null, null);
  updateFilterStatus('All research directions', rows.length);
}

function showAllByTopic(topic) {
  const table = document.getElementById('publications-table');
  if (!table) return;

  const rows = Array.from(table.querySelectorAll('tr.paper_entry'))
    .filter(row => getCanonicalTopics(row).includes(topic));

  displayRows(rows);
  setActiveFilter('topic', topic);
  const direction = RESEARCH_DIRECTIONS.find(item => item.key === topic);
  updateFilterStatus(direction?.label || 'Research direction', rows.length);
}

function showAllBySubtopic(subtopicKey) {
  const table = document.getElementById('publications-table');
  if (!table) return;

  const rows = Array.from(table.querySelectorAll('tr.paper_entry'))
    .filter(row => getSubtopics(row).includes(subtopicKey));

  displayRows(rows);
  setActiveFilter('subtopic', subtopicKey);
  const subtopic = RESEARCH_SUBTOPICS.find(item => item.key === subtopicKey);
  updateFilterStatus(subtopic?.label || 'Research subtopic', rows.length);
}

document.addEventListener('DOMContentLoaded', () => {
  decoratePublicationTopics();
  const publicationCount = document.querySelectorAll('#publications-table tr.paper_entry').length;
  updateFilterStatus('All research directions', publicationCount);
});

import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const EXPECTED_RESUME_SHA256 = 'f2da9a86fdca854b4e6d5adf2b4ab1c94deb85e4c0ab42f8c69ab23f4f6a2537';

const EXPECTED_SELECTED_TITLES = [
  'AlphaOPT: Formulating Optimization Programs with Self-Improving LLM Experience Library',
  'Dynamic Autoregressive Tensor Factorization for Pattern Discovery of Spatiotemporal Systems',
  'GETS: Ensemble Temperature Scaling for Calibration in Graph Neural Networks',
  'ItiNera: Integrating Spatial Optimization with Large Language Models for Open-domain Urban Itinerary Planning',
  'Mitigating Spatial Disparity in Urban Prediction Using Residual-Aware Spatiotemporal Graph Neural Networks: A Chicago Case Study',
  'Rethinking Driving Topology Reasoning: Plug-and-Play Discrete Graph Refinement',
  'SAUC: Sparsity-Aware Uncertainty Calibration for Spatiotemporal Prediction with Graph Neural Networks',
  'Sparkle: Mastering Basic Spatial Capabilities in Vision Language Models Elicits Generalization to Composite Spatial Reasoning',
  'TrustEnergy: A Unified Framework for Accurate and Reliable User-level Energy Usage Prediction',
  'Uncertainty Quantification of Sparse Travel Demand Prediction with Spatial-Temporal Graph Neural Networks',
].sort();

function normalizeText(value) {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function publicationRows(html) {
  const table = html.match(/<table id="publications-table"[\s\S]*?<\/table>/)?.[0] ?? '';
  return [...table.matchAll(/<tr class="paper_entry"([\s\S]*?)<\/tr>/g)].map(([, row]) => row);
}

test('homepage uses the supplied resume PDF verbatim', async () => {
  const resume = await readFile(new URL('../data/misc/resume.pdf', import.meta.url));
  const digest = createHash('sha256').update(resume).digest('hex');
  assert.equal(digest, EXPECTED_RESUME_SHA256);
});

test('default selected publications match the approved high-signal shortlist', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const selected = publicationRows(html)
    .filter((row) => /data-selected="true"/.test(row))
    .map((row) => normalizeText(row.match(/<papertitle>([\s\S]*?)<\/papertitle>/)?.[1] ?? ''))
    .sort();

  assert.deepEqual(selected, EXPECTED_SELECTED_TITLES);
});

test('RSI filter connects AlphaOPT with CORAL and Reef', async () => {
  const [html, script] = await Promise.all([
    readFile(new URL('../index.html', import.meta.url), 'utf8'),
    readFile(new URL('../filterProjects.js', import.meta.url), 'utf8'),
  ]);

  assert.match(script, /AlphaOPT:[^\n]+\['rsi', 'agent-evaluation'\]/);
  assert.match(html, /data-subtopics="rsi"[\s\S]*?>Reef<\/a>/);
  assert.match(html, /data-subtopics="rsi"[\s\S]*?>CORAL<\/a>/);
});

test('Sparkle card identifies its workshop best-paper award', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const sparkleRow = publicationRows(html).find((row) => row.includes('<papertitle>Sparkle:')) ?? '';

  assert.match(normalizeText(sparkleRow), /IJCAI 2025 MKLM Workshop.*Best Paper Award/);
});

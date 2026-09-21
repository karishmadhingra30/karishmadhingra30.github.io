const filterCopy = {
  public: { label: 'Customer workflows', value: 'workflow' },
  safety: { label: 'Trust & evaluation', value: 'trust' },
};

document.querySelectorAll('.filter').forEach((button) => {
  const update = filterCopy[button.dataset.filter];
  if (update) {
    button.dataset.filter = update.value;
    button.textContent = update.label;
  }
  if (button.dataset.filter === 'ai') button.textContent = 'Applied AI';
});

document.querySelectorAll('.project').forEach((project) => {
  project.dataset.categories = project.dataset.categories
    .split(' ')
    .map((category) => ({ public: 'workflow', safety: 'trust' })[category] || category)
    .join(' ');
});

document.querySelector('.section-heading .eyebrow').textContent = 'Selected solution builds';
document.querySelector('#work-title').textContent = 'Built around the customer problem, not the feature list.';
document.querySelector('.section-heading > p').textContent = 'Each project shows how I approach a workflow, make technical trade-offs, and communicate limitations. Live demos appear only when the current experience is publicly available.';

document.querySelector('.approach-title .eyebrow').textContent = 'How I work';
document.querySelector('#approach-title').textContent = 'From discovery to a solution a customer can trust.';
document.querySelector('.principles').innerHTML = `
  <article><span>01</span><h3>Lead with discovery.</h3><p>I ask enough of the right questions to understand the workflow, decision-makers, constraints, and definition of success before proposing a solution.</p></article>
  <article><span>02</span><h3>Translate context into a technical plan.</h3><p>I turn customer needs into focused demos, workflows, integrations, and prototypes that technical and business teams can evaluate together.</p></article>
  <article><span>03</span><h3>Close the loop from customer to product.</h3><p>Clear documentation, measurable trade-offs, and honest limitations keep implementation grounded and make customer feedback useful to Product and Engineering.</p></article>
`;
document.querySelector('footer h2').textContent = 'Useful solutions start with the right question.';

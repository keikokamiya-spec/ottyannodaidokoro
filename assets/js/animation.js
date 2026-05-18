document.addEventListener('DOMContentLoaded', () => {
  // Stagger delay for grid children
  document.querySelectorAll('.feature-grid, .course-cards, .banquet-features').forEach(grid => {
    grid.querySelectorAll('.feature-card, .course-card, .banquet-feature').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
      el.classList.add('fade-in');
    });
  });
});

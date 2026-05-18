document.addEventListener('DOMContentLoaded', () => {
  // Stagger fade-in delay for grid children
  document.querySelectorAll('.feature-3, .course-wrap, .banquet-grid, .photo-grid-4').forEach(grid => {
    grid.querySelectorAll('.feature-item, .course-card, .banquet-item, .p-img').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
      el.classList.add('fade-in');
    });
  });
});

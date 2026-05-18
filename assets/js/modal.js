document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('[data-modal-src]');
  if (!triggers.length) return;

  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:200;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.3s;';
  modal.innerHTML = '<img style="max-width:90vw;max-height:90vh;object-fit:contain;" src="" alt=""><button style="position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer;line-height:1;" aria-label="閉じる">✕</button>';
  document.body.appendChild(modal);

  const img = modal.querySelector('img');

  const open = src => {
    img.src = src;
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  };

  triggers.forEach(el => el.addEventListener('click', () => open(el.dataset.modalSrc)));
  modal.addEventListener('click', e => { if (e.target !== img) close(); });
});

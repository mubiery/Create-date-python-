// ─────────────────────────────────────
// Scroll reveal para los pasos
// ─────────────────────────────────────
const steps = document.querySelectorAll('.step');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

steps.forEach(step => observer.observe(step));

// ─────────────────────────────────────
// Botón copiar código
// ─────────────────────────────────────
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText;

  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = '✓ Copiado';
    btn.style.color = '#82c4a0';
    btn.style.borderColor = '#82c4a0';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  }).catch(() => {
    btn.textContent = 'Error';
    setTimeout(() => btn.textContent = 'Copiar', 1500);
  });
}

// ─────────────────────────────────────
// Resaltar número de paso activo al scrollear
// ─────────────────────────────────────
const stepNumbers = document.querySelectorAll('.step-number');

const stepObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const num = entry.target.querySelector('.step-number');
    if (num) {
      if (entry.isIntersecting) {
        num.style.color = '#c8a96e44';
      } else {
        num.style.color = '';
      }
    }
  });
}, { threshold: 0.5 });

steps.forEach(step => stepObserver.observe(step));

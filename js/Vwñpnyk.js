document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.search');
  const links = document.querySelectorAll('.menu a');
  const sections = document.querySelectorAll('.section');

  function getVisibleItems() {
    const visibleSection = document.querySelector('.section.show');
    return visibleSection
      ? [...visibleSection.querySelectorAll('.item')]
      : [];
  }

  // Buscador
  input.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    getVisibleItems().forEach(it => {
      it.style.display = it.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  });

  // Cambio de secciones
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(s => s.classList.remove('show'));

      const target = document.getElementById(link.dataset.target);
      target.classList.add('show');

      input.value = '';
      target.querySelectorAll('.item').forEach(it => (it.style.display = ''));
    });
  });

  // Estado inicial
  document.getElementById('escritos').classList.add('show');
});

const temaBtn = document.getElementById('temaBtn');
temaBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const contactoForm = document.getElementById('contactoForm');
contactoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Formulario enviado correctamente 😄');
});

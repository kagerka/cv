const ruBtn = document.getElementById('ruBtn');
const enBtn = document.getElementById('enBtn');
const enSection = document.querySelector('.main.en');
const ruSection = document.querySelector('.main.ru');

enBtn.addEventListener('click', () => {
  enBtn.classList.add('active');
  ruBtn.classList.remove('active');
  enSection.classList.add('active');
  ruSection.classList.remove('active');
});

ruBtn.addEventListener('click', () => {
  ruBtn.classList.add('active');
  enBtn.classList.remove('active');
  ruSection.classList.add('active');
  enSection.classList.remove('active');
});
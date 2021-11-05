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

const avatarEn = document.querySelector('.avatar__container.en');
const avatarRu = document.querySelector('.avatar__container.ru');

const flipCard = () => {
  avatarEn.classList.toggle('flipCard');
  avatarRu.classList.toggle('flipCard');
}

avatarEn.addEventListener('click', flipCard);
avatarRu.addEventListener('click', flipCard);

const wrapper = document.querySelector('.wrapper');
const inscription = document.querySelector('.inscription');

inscription.addEventListener('click', () => {
    wrapper.classList.add('active');
});
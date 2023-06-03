const buttons = document.querySelectorAll('.filter__button');
const items = document.querySelectorAll('.cards__item');
const container = document.querySelector('.cards__list');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
       
        item.classList.remove('visually-hidden');
        item.style.opacity = 1;
        
      } else {
       
        item.classList.add('visually-hidden');
        item.style.opacity = 0;
        
      }
    });
  });
});
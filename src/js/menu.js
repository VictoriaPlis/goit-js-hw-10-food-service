import menuCardTemplate from '../templates/menu-items';
import menuItemsData from '../menu.json';

const foodMenuRef = document.querySelector('.js-menu');

const MenuItemsEls = menuCardTemplate(menuItemsData);

foodMenuRef.insertAdjacentHTML('beforeend', MenuItemsEls);

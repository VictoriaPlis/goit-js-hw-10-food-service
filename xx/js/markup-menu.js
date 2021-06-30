import menuCardsTempl from '../templates/menu-items';
import menuItemsData from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const menuItemsEls = menuCardsTempl(menuItemsData);

menuRef.insertAdjacentHTML('beforeend', MenuItemsEls);
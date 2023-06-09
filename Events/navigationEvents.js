import getEntries from '../api/entryData';
import showButtonsAndCards from '../pages/card';
import renderForm from '../pages/form';

const navigationEvents = () => {
  document.querySelector('#add-form').addEventListener('click', renderForm);
  document.querySelector('#add-cards').addEventListener('click', getEntries().then(showButtonsAndCards));
};

export default navigationEvents;

// import getEntries from '../api/entryData';
// import showButtonsAndCards from '../pages/card';
import { getEntries } from '../api/entryData';
import showButtonsAndCards from '../pages/card';
import renderForm from '../pages/form';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-entry')) {
      renderForm();
    }
  });
  document.querySelector('#filters').addEventListener('click', (e) => {
    const language = e.target.id;
    getEntries(user.uid).then((entries) => {
      const filteredEntries = entries.filter((entry) => entry.language === language);
      showButtonsAndCards(filteredEntries);
    });
  });
  // document.querySelector('#add-cards').addEventListener('click', getEntries().then(showButtonsAndCards));
};

export default navigationEvents;

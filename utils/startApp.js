import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import getEntries from '../api/entryData';
import showButtonsAndCards from '../pages/card';

const startApp = () => {
  domBuilder();
  navbar();
  logoutButton();
  getEntries().then((entry) => showButtonsAndCards(entry));
};

export default startApp;

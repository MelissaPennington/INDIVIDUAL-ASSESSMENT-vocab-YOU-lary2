// import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
// import navigationEvents from '../events/navigationEvents';
import { getEntries } from '../api/entryData';

const startApp = () => {
  // domBuilder();
  navbar();
  logoutButton();
  // navigationEvents();
  getEntries().then(showButtonsAndCards);
};

export default startApp;

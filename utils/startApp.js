import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import navigationEvents from '../Events/navigationEvents';
import showButtonsAndCards from '../pages/card';
import domEvents from '../Events/domEvents';
import { getEntries } from '../api/entryData';
import formEvents from '../Events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  navbar();
  navigationEvents(user);
  domEvents(user);
  formEvents(user);
  logoutButton();
  getEntries(`${user.uid}`).then((entry) => showButtonsAndCards(entry));
};

export default startApp;

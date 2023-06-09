import logoutButton from '../components/logoutButton';
import navbar from '../components/navbar';
import getEntries from '../api/entryData';

const startApp = () => {
  navbar();
  logoutButton();
  getEntries();
};

export default startApp;

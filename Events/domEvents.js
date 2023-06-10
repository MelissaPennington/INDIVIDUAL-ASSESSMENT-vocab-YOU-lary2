import showButtonsAndCards from '../pages/card';
import updateEntryForm from '../pages/updateEntyForm';
import { getEntries, deleteEntries, getSingleEntry } from '../api/entryData';

function domEvents() {
  document.querySelector('#cards').addEventListener('click', (e) => {
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entry) => updateEntryForm(entry));
    }

    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you want to delete this definition?')) {
        console.warn('DELETE ENTRY', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteEntries(firebaseKey).then(() => {
          getEntries().then(showButtonsAndCards);
        });
      }
    }
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleEntry(firebaseKey).then((entryObj) => updateEntryForm(entryObj));
    }
  });
}

export default domEvents;

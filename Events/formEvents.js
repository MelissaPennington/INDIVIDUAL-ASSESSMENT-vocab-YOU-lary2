import { createEntry, getEntries, updateEntry } from '../api/entryData';
import showButtonsAndCards from '../pages/card';

const formEvents = (user) => {
  document.querySelector('#main').addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-entry')) {
      console.warn('submit clicked');
      const payload = {
        title: document.querySelector('#titleInput').value,
        definition: document.querySelector('#definitionInput').value,
        language: document.querySelector('#languageSelect').value,
        // eslint-disable-next-line no-template-curly-in-string
        uid: `${user.uid}`,
      };

      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
          getEntries().then(showButtonsAndCards);
        });
      });
      document.querySelector('#formComponent').reset();
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-button')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE ENTRY', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        firebaseKey,
        title: document.querySelector('#update-name').value,
        definition: document.querySelector('#update-definition').value,
        language: document.querySelector('#update-langOrTech').value,
        // eslint-disable-next-line no-template-curly-in-string
        uid: `${user.uid}`,
      };
      updateEntry(payload).then(() => {
        getEntries().then(showButtonsAndCards);
      });
    }
  });
};

export default formEvents;

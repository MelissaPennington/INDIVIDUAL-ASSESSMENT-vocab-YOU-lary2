import clearDom from '../utils/clearDOM';
import filterBtn from '../components/filters';
import renderToDom from '../utils/renderToDOM';

const showButtonsAndCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    console.warn('item', item);
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
        <p class="card-text">${item.definition}</p>
        <a href="#" class="card-link" id="update-entry--${item.firebaseKey}">Edit</a>
        <a href="#" class="card-link" id="delete-entry--${item.firebaseKey}">Delete</a>
      </div>
    </div>
  `;
  });
  filterBtn();
  renderToDom('#cards', domString);
};

export default showButtonsAndCards;

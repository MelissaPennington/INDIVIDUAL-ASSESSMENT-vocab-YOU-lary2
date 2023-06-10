import renderToDOM from '../utils/renderToDOM';

const updateEntryForm = (obj) => {
  const updateString = `
        <form id="update-form-${obj.firebaseKey}">
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="update-name" value="${obj.title}">
          </div>
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="update-definition" value="${obj.definition}">
          </div>
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="update-langOrTech" value="${obj.language}"> 
          </div>
          <button type="submit" class="btn btn-success" id="update-button--${obj.firebaseKey}">Update Vocabulary</button>
        </form>`;
  renderToDOM('#form', updateString);
};

export default updateEntryForm;

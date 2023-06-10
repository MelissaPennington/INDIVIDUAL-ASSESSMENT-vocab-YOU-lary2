import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDOM';

const renderForm = () => {
  clearDom();
  const domstring = `
  <h1>Make a new card</h1>
  <br />
  <form id="formComponent">
    <div class="mb-3">
      <label for="titleInput" class="form-label">Title</label>
      <input type="text" class="form-control" id="titleInput">
    </div>
    <div class="mb-3">
      <label for="definitionInput" class="form-label">Definition</label>
      <input type="text" class="form-control" id="definitionInput">
    </div>
    <div class="mb-3">
      <label for="languageSelect" class="form-label">Language</label>
      <select id="languageSelect" class="form-select">
        <option selected>Choose a language</option>
        <option value="javascript">JavaScript</option>
        <option value="cSharp">C#</option>
        <option value="python">Python</option>
        <option value="php">PHP</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-entry">Submit</button>
  </form>
  `;
  renderToDOM('#form', domstring);
};

export default renderForm;

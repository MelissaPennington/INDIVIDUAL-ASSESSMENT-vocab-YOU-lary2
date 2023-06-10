import renderToDOM from '../utils/renderToDOM';

const filterBtn = () => {
  const domString = `
  <div class="d-flex justify-content-evenly filter-btns">
    <button id="html" type="button" class="btn btn-outline-light">HTML</button>
    <button id="javascript" type="button" class="btn btn-outline-light">JavaScript</button>
    <button id="python" type="button" class="btn btn-outline-light">Python</button>
    <button id="php" type="button" class="btn btn-outline-light">PHP</button>
  </div>
  `;
  renderToDOM('#filters', domString);
};

export default filterBtn;

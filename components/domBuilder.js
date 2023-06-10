import renderToDOM from '../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>  
  <div id="main">
    <div id="form"></div>
    <div id="filters"></div>
    <div id="cardButtons"></div>
    <div id="cards"></div>
  </div>  
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;

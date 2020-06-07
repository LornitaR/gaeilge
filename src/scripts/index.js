// import { deireadh } from "../data/deireadh"

// use this to generate the story
function scéalAScríobh() {
  let data = deireadh();
  let ceannteideal = '<h1>An Timpiste</h1><br>'
  let scéal = `<p>${data[0].ga} </p><br><br><br>`;

  let heading = '<h1>The Accident</h1><br>'
  let story = '<p>Last summer, I was on holidays. '
  + 'The sun was splitting the stones. I was at the seaside. Suddenly, '
  + 'I started fighting with my friend and my nose started bleeding. '
  + 'The woman called my parents. I will never forget that day. </p><br><br><br>';


  document.getElementById('timpiste').innerHTML = ceannteideal + scéal + heading + story;
}

function createButton() {
  return '<button type="button" class="btn btn-success btn-lg" onClick="scéalAScríobh()">Timpiste Nua</button>'
  + '<br><br><br>'
  + '<div id="timpiste"></div>';
}

// update the HTML here
function taispeáinGachRud() {
  let gachRud = createButton();
  return gachRud;
}

document.querySelector('main').innerHTML = taispeáinGachRud();
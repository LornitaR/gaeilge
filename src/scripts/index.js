// use this to generate the story
function scéalAScríobh() {
  let deireadhData = deireadh();

  let ceannteideal = '<h1>An Timpiste</h1><br>'
  let scéal = `<p>${deireadhData.ga} </p><br><br><br>`;

  let heading = '<h1>The Accident</h1><br>'
  let story = `<p>${deireadhData.en} </p><br><br><br>`;


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
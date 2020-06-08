// use this to generate the story
function scéalAScríobh() {
  let cathainData = cathain();
  let fáthData = fáth();
  let áitData = áit();
  let aimsirData = aimsir();
  let timpisteData = timpiste();
  let comhshníochtData = comhshníocht();
  let cabhairData = cabhair();
  let deireadhData = deireadh();

  let ceannteideal = '<h1>An Timpiste</h1><br>'
  let scéal = `<p>${cathainData.ga}${fáthData.ga}${áitData.ga}${aimsirData.ga} Go tobann, ${timpisteData.ga}${comhshníochtData.ga}${cabhairData.ga}${deireadhData.ga}</p><br><br>`;

  let heading = '<h1>The Accident</h1><br>'
  let story = `<p>${cathainData.en}${fáthData.en}${áitData.en}${aimsirData.en} Suddenly, ${timpisteData.en}${comhshníochtData.en}${cabhairData.en}${deireadhData.en}</p><br><br>`;


  document.getElementById('timpiste').innerHTML = ceannteideal + scéal + heading + story;
}

function createButton() {
  return '<div id="timpiste"></div>'
  + '<button type="button" class="btn btn-success btn-lg" onClick="scéalAScríobh()">Timpiste Nua</button>'
  + '<br><br><br>';
}

// update the HTML here
function taispeáinGachRud() {
  let gachRud = createButton();
  return gachRud;
}

document.querySelector('main').innerHTML = taispeáinGachRud();

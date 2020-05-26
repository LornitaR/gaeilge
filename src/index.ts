// use this to generate the story
function scéalAScríobh() {
  let ceannteideal = '<h1>An Timpiste</h1><br>'
  let scéal = '<p>An samhradh seo caite, bhí mé ar mo laethanta saoire. '
  + 'Bhí an grian ag scoilteadh na gcloch. Bhí mé cois farraige. Go tobann, '
  + 'thosaigh mé ag troid le mo chara agus thosaigh mo shrón ag cur fola. '
  + 'Chuir an bhean glaoch ar mo thuismitheoirí. Ní dhéanfaidh mé dearmad go deo ar an lá sin. </p><br><br><br><br>';

  let heading = '<h1>The Accident</h1><br>'
  let story = '<p>Last summer, I was on holidays. '
  + 'The sun was splitting the stones. I was at the seaside. Suddenly, '
  + 'I started fighting with my friend and my nose started bleeding. '
  + 'The woman called my parents. I will never forget that day. </p><br><br><br><br>';


  return ceannteideal + scéal + heading + story;
}

// update the HTML here
function taispeáinAnScéal() {
  return scéalAScríobh();
}

document.querySelector('main').innerHTML = taispeáinAnScéal();
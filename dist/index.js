"use strict";
// use this to generate the story
function scéalAScríobh() {
    var ceannteideal = '<h1>An Timpiste</h1><br>';
    var scéal = '<p>An samhradh seo caite, bhí mé ar mo laethanta saoire. '
        + 'Bhí an grian ag scoilteadh na gcloch. Bhí mé cois farraige. Go tobann, '
        + 'thosaigh mé ag troid le mo chara agus thosaigh mo shrón ag cur fola. '
        + 'Chuir an bhean glaoch ar mo thuismitheoirí. Ní dhéanfaidh mé dearmad go deo ar an lá sin. </p><br><br><br>';
    var heading = '<h1>The Accident</h1><br>';
    var story = '<p>Last summer, I was on holidays. '
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
    var gachRud = createButton();
    return gachRud;
}
document.querySelector('main').innerHTML = taispeáinGachRud();
//# sourceMappingURL=index.js.map
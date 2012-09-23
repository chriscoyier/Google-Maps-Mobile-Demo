// @codekit-prepend "enquire.js"

enquire
  .register("(min-width: 600px)", {
    match: function() {
      doLargeScreenStuff();
    },
    unmatch: function() {
      doSmallScreenStuff();
    }
  })
  .listen();


function doLargeScreenStuff() {
  $("#map")
    .load("../parts/large-screen/map.html");
}

function doSmallScreenStuff() {
  $("#map")
    .load("../parts/small-screen/map.html");
}
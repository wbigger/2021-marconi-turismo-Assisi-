let receiveData = function(data) {
    console.log(data);
    $("#titolo").text(data.titolo);
}

let init = function() {
  //$.getJSON("poi_list.json").done(receiveData);
  $.getJSON("index.php").done(receiveData);
}

$(document).ready(init)
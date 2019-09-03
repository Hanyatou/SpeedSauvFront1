
function init() {
  $('.progress').each(function () {
    $this = $(this);
    var progressValue = $this.children().attr('aria-valuenow');
    $this.children().width(progressValue + "%");
    if (progressValue != 100) {
      $this.children().children().text(progressValue + "%");
    }
  })
}

function set(selector, value) {
  $(selector).children().removeClass('success fail');

  $(selector).children().attr('aria-valuenow', value);
  if(value>100){
    console.log('value over 100');
  } else if (value == 100) {
    $(selector).children().attr('aria-valuenow', value);
    $(selector).children().children().html('<i class="fas fa-check"></i>');
    $(selector).children().addClass('success');
  } else if (value < 30) {
    $(selector).children().addClass('fail');
  }
  init();
}

set('#bar1', 20);
set('#bar2', 20);
set('#bar3', 30);
set('#bar4', 90);


/* var dataResert = document.getElementById(boutton2).value;
var dataConnect =document.getElementById(boutton1).value;
var dataInscriprion = document.getElementById(boutton3).value; */

//


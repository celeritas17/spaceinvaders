
var num_ufos = 5;
var game_on = false;

for (var i = 0; i < num_ufos; i++){
  $('#ufo' + i).css('left', 175 + i*125);
  $('#ufo' + i).css('top', 175 + Math.floor(Math.random()*400)); 
}

$('#ufos').delegate('img', 'click', function(){
  if (game_on){
    $(this).attr('src', 'img/explosion.jpg');
    var ufo = this;
    setTimeout(function(){
      $(ufo).toggle();
    }, 750);
    setTimeout(function(){
      $(ufo).attr('src', 'img/ufo.jpg');
      $(ufo).toggle();
    }, 3500);
  }
});

var move_spaceship = function(i){
    var current_left = parseInt($('#ufo' + i).css('left'));
    var current_top = parseInt($('#ufo' + i).css('top'));
    var up_or_down = (Math.random() > 0.5) ? 1 : -1
    $('#ufo' + i).css('left', (current_left + up_or_down*Math.floor(Math.random()*100))%1250);
    $('#ufo' + i).css('top', 175 + (current_top + up_or_down*Math.floor(Math.random()*150))%600); 
  };

var move_spaceships = function(){
  for (var i = 0; i < num_ufos; i++){
    move_spaceship(i);
  }
};

$('#go').click(function(){
  if (!game_on){
    game_on = true;
    return setInterval(move_spaceships, 750);
  }
});

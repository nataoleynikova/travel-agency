$(document).ready(function(){
  // Связка дня и ночи
  $('#days').bind('input', function() {
    let value = parseInt(event.target.value);
    if (Number.isFinite(value)) {
      nights.value = value - 1;
    };
  });

  $('#nights').bind('input', function() {
    let value = parseInt(event.target.value);
    if (Number.isFinite(value)) {
      days.value = value + 1;
    };
  });

  // Калькулятор
  $('button').on('click', function() {
    // let country = Number($('#country').val());
    // let days = Number($('#days').val());
    // let nights = Number($('#nights').val()) / 2;
    // let people = Number($('#people').val());
    // let result = country * (days + nights) * people;
    let result = Number($('#country').val()) * (Number($('#days').val()) + 
    Number($('#nights').val()) / 2) * Number($('#people').val());
    $('#result').html(result);
  });
});
$(document).ready(function(){
  // Связка days и nights
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
  $(function calc() {
    $('#country') = country.options[country.selectedIndex].value;
    $('#days').val() = Number(days);
    $('#nights').val() = Number(nights) / 2;
    $('#people').val() = Number(people);
    let result = $('#select').val() * ($('#days').val() + 
    $('#nights').val()) * $('#people').val();
    console.log (result);
    $('#result').html('result');
    console.log (4);
  });
});
function calc() {
  let country = document.getElementById("country");
  let days = document.getElementById("days");
  let people = document.getElementById("people");
  let result = document.getElementById("result");
  let price = 1;
  price += country.options[country.selectedIndex].value;
  price += days.options[country.selectedIndex].value;
  price += people.options[country.selectedIndex].value;
  price = country * days * people;
  result.innerHTML = price;
}
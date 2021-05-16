// start execute code after page load...
document.addEventListener('DOMContentLoaded', () => {
  // get data from user
    // get country
  let countrySelect = calculator.country;

  function changeCountry() {
    let selectedOption = countrySelect.options[countrySelect.selectedIndex];
  }

  countrySelect.addEventListener("change", changeCountry);
    // get count days
  let daysSelect = calculator.days;

  function changeDays() {
    let selectedOption = daysSelect.options[daysSelect.selectedIndex];
  }

  daysSelect.addEventListener("change", changeDays);
    // get count people
  let peopleSelect = calculator.people;

  function changePeople() {
    let selectedOption = peopleSelect.options[peopleSelect.selectedIndex];
  }

  peopleSelect.addEventListener("change", changePeople);
  // calculate price
  function calculatePrice() {
    // if country = 'turkey':
    if (country === 'Турция') {
    //     one_day_in_country = 1000
      var oneDayInCountry = 1000
    }
    // if country = 'great britain':
    if (country === 'Великобритания') {
    //     one_day_in_country = 4000
      var oneDayInCountry = 4000
    }
    // if country = 'brasilia':
    if (country === 'Бразилия') {
    //   one_day_in_country = 2000
      var oneDayInCountry = 2000
    }
  // price = count_people * count_days * one_day_in_country
    let price = peopleSelect * daysSelect * oneDayInCountry;
  }
  // output price
  // get element itogo

  // replace value
  // append new_value (price)
});

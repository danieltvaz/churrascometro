let inputMen = document.getElementById("man");
let inputWoman = document.getElementById("woman");
let inputKids = document.getElementById("kids");
let inputTime = document.getElementById("time");

let result = document.getElementById("result");

function calc() {
  let men = inputMen.value;
  let woman = inputWoman.value;
  let kids = inputKids.value;
  let time = inputTime.value;
  // calc food
  let totalFood =
    men * foodPP_man(time) +
    woman * foodPP_woman(time) +
    kids * foodPP_kids(time);

  // calc beer
  let totalBeer = men * beerPP_man(time) + woman * beerPP_woman(time);

  // calc soda
  let totalSoda = kids * sodaPP_kids(time);
  // calc water
  let totalWater = (Number(men) + Number(woman) + Number(kids)) * waterPP(time);
  result.innerHTML = `<p>${totalFood / 1000}Kg de Carne</p>`;
  result.innerHTML += `<p>${totalBeer / 1000}L de Cerveja</p>`;
  if (kids != 0) {
    result.innerHTML += `<p>${totalSoda / 1000}L de Refrigerante</p>`;
  }

  result.innerHTML += `<p>${totalWater / 1000}L de Água</p>`;
}
function foodPP_man(time) {
  if (time <= 4) return 400;
  else if (time > 4 && time <= 6) {
    return 500;
  } else if (time > 6) {
    return 600;
  }
}
function foodPP_woman(time) {
  if (time <= 4) return 300;
  else if (time > 4 && time <= 6) {
    return 400;
  } else if (time > 6) {
    return 500;
  }
}
function foodPP_kids(time) {
  if (time <= 4) return 200;
  else if (time > 4 && time <= 6) {
    return 300;
  } else if (time > 6) {
    return 400;
  }
}
function beerPP_man(time) {
  if (time <= 4) return 2000;
  else if (time > 4 && time <= 6) return 3000;
  else if (time > 6) return 4000;
}
function beerPP_woman(time) {
  if (time <= 4) return 1000;
  else if (time > 4 && time <= 6) return 1500;
  else if (time > 6) return 2000;
}
function sodaPP_kids(time) {
  if (time <= 4) return 1000;
  else if (time > 4 && time <= 6) return 1500;
  else if (time > 6) return 2000;
}
function waterPP(time) {
  if (time <= 4) return 1000;
  else if (time > 4 && time <= 6) return 1200;
  else if (time > 6) return 1500;
}

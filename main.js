let numbers = document.querySelectorAll(".number")

function main(a, b, c) {
  if (a != 0 && b.length != 0 && c.length != 0 && a.length <= 6 && b.length <= 6 && c.length <= 6) {
    numbers[3].value = b * c / a
  } else {
    numbers[3].value = "x"
  }
}

function show(a, b, c) {
  let result = document.querySelector("#result")
  if (a != 0 && b.length != 0 && c.length != 0 && a.length <= 6 && b.length <= 6 && c.length <= 6) {
    result.innerHTML = `
    <p>${a}x = ${b} . ${c}</p>
    <p>${a}x = ${b*c}</p>
    <p>x = ${b*c}/${a} = ${b*c/a}</p>`
  } else {
    result.innerHTML = "Impossível calcular!"
  }
}
let numbers = document.querySelectorAll(".number")
let proportionality = document.querySelector("#proportionality")

function main(a, b, c) {
  show(0,0,0)
  if (a != 0 && b.length != 0 && c.length != 0 && a.length <= 6 && b.length <= 6 && c.length <= 6) {
    switch (proportionality.value) {
      case "directly":
        numbers[3].value = b * c / a
        break;
        
      case "inversely":
        numbers[3].value = a * c / b
        break;
    }
  } else {
    numbers[3].value = "x"
  }
}

function show(a, b, c) {
  let result = document.querySelector("#result")
  if (a != 0 && b.length != 0 && c.length != 0 && a.length <= 6 && b.length <= 6 && c.length <= 6) {
    switch (proportionality.value) {
      case "directly":
        result.innerHTML = `
        <p>${a}x = ${b} . ${c}</p>
        <p>${a}x = ${b*c}</p>
        <p>x = ${b*c}/${a} = ${b*c/a}</p>`
        break;

      case "inversely":
        result.innerHTML = `
        <p>${b}x = ${a} . ${c}</p>
        <p>${b}x = ${a*c}</p>
        <p>x = ${a*c}/${b} = ${a*c/b}</p>`
        break;
    }
  } else {
    result.innerHTML = ""
  }
}

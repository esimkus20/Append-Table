"use strict"

var table = document.querySelector("table")
var input = document.getElementsByTagName("input")
var vardas = document.getElementById("name")
var surname = document.getElementById("surname")
var age = document.getElementById("age")
var add = document.getElementById("add")
var removeFirst = document.getElementById("removeFirst")
var removeLast = document.getElementById("removeLast")

add.addEventListener("click", function() {

  var nameValue = vardas.value
  var surnameValue = surname.value
  var ageValue = age.value

  // Jei name, surname, age turi value ir age daugiau už 0
  if (nameValue && surnameValue && ageValue > 0) {

    var newLine = document.createElement("tr")
    
    // Sukuria naują eilutę su input value
    newLine.innerHTML = `<td>${nameValue}</td> <td>${surnameValue}</td> <td>${ageValue}</td>`

    // Prideda naują eilutę table apačioje
    table.append(newLine)

    // Išvalo visus input laukelius
    vardas.value = ""
    surname.value = ""
    age.value = ""

  } else {

    alert("Įveskite duomenis")

  }
})

removeFirst.addEventListener("click", function() {
  var tableLine = document.querySelectorAll("tr")

  if (tableLine.length > 1) {
    tableLine[1].remove()
  } else {
    alert("Nebėra ką trinti.")
  }
})

removeLast.addEventListener("click", function() {
  var tableLine = document.querySelectorAll("tr")

  if (tableLine.length > 1) {
    tableLine[tableLine.length - 1].remove()
  } else {
    alert("Nebėra ką trinti.")
  }
})

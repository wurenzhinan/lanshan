let input = document.querySelector("input")
let add = document.querySelector(".add")
let ul = document.querySelector("ul")
let dlt = document.getElementsByClassName("delete")
let done = document.getElementsByClassName("done")
function ad (obj) {
  if (obj.value.trim()) {
    ul.innerHTML += '<li>' + '<button class=\"done\">' + "√" + '</button>' + obj.value.trim() + '<button class=\"delete\">' + "×" + '</button>' + '</li>'
  }
  input.value = ""
}
function delt (obj) {
  obj.parentNode.remove()
}
function don (obj) {
  obj.parentNode.className = 'do'
}
add.onclick = function () {
  ad(input)
  for (let i = 0; i < dlt.length; i++) {
    dlt[i].onclick = function () { delt(this) }
    done[i].onclick = function () { don(this) }
  }
}
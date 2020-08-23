function add() {
  let item = document.querySelector("input").value
  let list = document.querySelector("ul")
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(item))
  list.appendChild(li)
}
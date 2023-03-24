let listItem = document.getElementsByClassName("list-group-item");
// listItem[2].style.backgroundColor = "green";

for (let i = 0; i < listItem.length; i++) {
  listItem[i].style.color = "#245953";
  listItem[i].style.fontWeight = "800";
}
let list = document.querySelector("list-group");
let li = document.createElement("li");
li.className = "li-eliment-new";
li.textContent = "Indrojit";
li.style.listStyle = "none";
li.style.fontSize = "18px";
// document.body.appendChild(li);
document.getElementById("items").appendChild(li);

listItem[1].style.backgroundColor = "green";
listItem[2].style.display = "none";

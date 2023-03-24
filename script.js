let listItem = document.getElementsByClassName("list-group-item");
listItem[2].style.backgroundColor = "green";

for (let i = 0; i < listItem.length; i++) {
  listItem[i].style.color = "#245953";
  listItem[i].style.fontWeight = "800";
}

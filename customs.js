var button = document.createElement("p");

button.innerText = "Voir le Site FRAnime >>";

button.className = "btn";

button.addEventListener("click", function() {
  
  window.open("https://franime.tv", "_blank");
});
document.getElementById("btncnt").appendChild(button);

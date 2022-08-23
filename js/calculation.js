let numberOfPlayer = 0;
let arr = [];
//add player function
function addPlayers(playerName, btnId) {
  numberOfPlayer += 1;
  if (numberOfPlayer <= 5) {
    arr.push(1);
    const player = playerName;
    const list = document.createElement("li");
    list.innerText = player;
    document.getElementById("playerList").appendChild(list);
    document.getElementById(btnId).setAttribute("disabled", "");
    document.getElementById(btnId).style.background = "gray";
  } else {
    alert("You do not add another player!");
  }
}
//all input field null
function allFieldEmpty() {
  document.getElementById("perPlayerCost").value = "";
  document.getElementById("managerCost").value = "";
  document.getElementById("coachCost").value = "";
}

//1st player
document.getElementById("1stPlayer").addEventListener("click", function () {
  const btnId = "1stPlayer";
  const playerName = document.getElementById("1stPlayerName").innerText;
  addPlayers(playerName, btnId);
});

//2nd player
document.getElementById("2ndPlayer").addEventListener("click", function () {
  const btnId = "2ndPlayer";
  const playerName = document.getElementById("2ndPlayerName").innerText;
  addPlayers(playerName, btnId);
});
//3rd player
document.getElementById("3rdPlayer").addEventListener("click", function () {
  const btnId = "3rdPlayer";
  const playerName = document.getElementById("3rdPlayerName").innerText;
  addPlayers(playerName, btnId);
});
//4th player
document.getElementById("4thPlayer").addEventListener("click", function () {
  const btnId = "4thPlayer";
  const playerName = document.getElementById("4thPlayerName").innerText;
  addPlayers(playerName, btnId);
});
//5th player
document.getElementById("5thPlayer").addEventListener("click", function () {
  const btnId = "5thPlayer";
  const playerName = document.getElementById("5thPlayerName").innerText;
  addPlayers(playerName, btnId);
});
//6th player
document.getElementById("6thPlayer").addEventListener("click", function () {
  const btnId = "6thPlayer";
  const playerName = document.getElementById("6thPlayerName").innerText;
  addPlayers(playerName, btnId);
});
//budget
document.getElementById("calculateBtn").addEventListener("click", function () {
  const perPlayerRate = parseInt(
    document.getElementById("perPlayerCost").value
  );
  totalPlayerCost = perPlayerRate * arr.length;

  document.getElementById("totalPlayerCost").innerText = totalPlayerCost;
});

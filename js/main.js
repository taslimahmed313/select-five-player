/* Get Input Field by Using Function........................................ */
function getInputValueById(inputId){
  const inputAmountField = document.getElementById(inputId);
  const inputAmountString = inputAmountField.value;
  const inputAmount = parseInt(inputAmountString);
  return inputAmount;
}

   /* Select Player List and Error Handling Function .......................... */
 function selectBestPlayerInId(playerName, playerId){
  /* Select Player List by Use Event Delegate................................ */
    const itemContainer = document.getElementById("player-container");
    const list = document.createElement("li");
    list.innerText = playerName;
    itemContainer.appendChild(list);
    list.style.listStyleType = "decimal";
    document.getElementById(playerId).disabled = true;

  // Error Handling..............................................................
    const player = document.getElementById("player-container");
    if (player.children.length > 5) {
      alert("You can MAX add up to five players");
      player.removeChild(player.lastElementChild);
      document.getElementById(playerId).disabled = false;
    }
  }
  

  /* Get and Set Player Expenses............................................ */
document.getElementById("calculate").addEventListener('click', function(){
    const perPlayerAmount = getInputValueById('per-player-amount');
    const playerExpensesElement = document.getElementById("player-expenses");

    // Get Number of Player
    const numberOfPlayer = document.getElementById("player-container").children.length;

    // Get Player Expenses
    const PlayerExpenses = perPlayerAmount * numberOfPlayer;
    playerExpensesElement.innerText = PlayerExpenses;
});

/* Get and Set Total Expenses.............................................. */
document.getElementById("calculate-total").addEventListener('click', function(){
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost')
    const totalField = document.getElementById("total-field");
    const perPlayerAmount = getInputValueById("per-player-amount");
    const playerExpensesElement = document.getElementById("player-expenses");
    const numberOfPlayer =
      document.getElementById("player-container").children.length;
    const PlayerExpenses = perPlayerAmount * numberOfPlayer;
    playerExpensesElement.innerText = PlayerExpenses;

    /* Get then Set Final Total Amount......................................  */
    const total = PlayerExpenses + managerCost + coachCost;
    totalField.innerText = total;
});

  /* Get Element by Id and  Select Player List and Error Handling........ */
  document.getElementById("messi-added").addEventListener("click", function () {
    selectBestPlayerInId("Lionel Messi", 'messi-added');
  });
  document.getElementById("neymar-add").addEventListener("click", function () {
    selectBestPlayerInId("Neymar Jr", "neymar-add");
  });
  document.getElementById("mbappe-add").addEventListener("click", function () {
    selectBestPlayerInId("Kylian Mbappé",'mbappe-add');
  });
  document.getElementById("ramos-add").addEventListener("click", function () {
    selectBestPlayerInId("Sergio Ramos",'ramos-add');
  });
  document.getElementById("slah-add").addEventListener("click", function () {
    selectBestPlayerInId("M Salah",'slah-add');
  });
  document.getElementById("benzema-add").addEventListener("click", function () {
    selectBestPlayerInId("Karim Benzema", 'benzema-add');
  });


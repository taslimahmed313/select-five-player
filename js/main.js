/* Get Input Field by Using Function........................................ */
function getInputValueById(inputId){
  const inputAmountField = document.getElementById(inputId);
  const inputAmountString = inputAmountField.value;
  const inputAmount = parseInt(inputAmountString);
  return inputAmount;
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


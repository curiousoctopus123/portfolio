let currentProblem = 1

function selectProblem(number) {
  document.getElementById(`problem-${currentProblem}`).style.display = 'none';
  currentProblem = number
  document.getElementById(`problem-${currentProblem}`).style.display = 'flex';
}

let currentInterview = 1
let currentPersona = 1

function selectInterview(number) {
  document.getElementById(`interview-${currentInterview}`).style.display = 'none';
  currentInterview = number
  document.getElementById(`interview-${currentInterview}`).style.display = 'block';
}

function selectPersona(persona) {
  document.getElementById(`persona-${currentPersona}`).style.display = 'none';
  currentPersona = persona
  document.getElementById(`persona-${currentPersona}`).style.display = 'block';
}
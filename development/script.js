const current = {
  'principle': 1,
}

function select(name, number) {
  document.getElementById(`${name}-${current[name]}`).style.display = 'none';
  current[name] = number
  document.getElementById(`${name}-${current[name]}`).style.display = 'flex';
}

function selectPrinciple(b) {
  select('principle', b)
}

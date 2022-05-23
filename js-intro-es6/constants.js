//Exercise 1
const person = {
  firstName: 'Kevin',
  lastname: 'Russell'
}

//Exercise 2
const teams = ['Chelsea', 'Real Madrid', 'AC Milan', 'Liverpool', 'Barcelona'];
const [firstTeam, secondTeam, ...otherTeams] = teams;

//Exercise 3
const fruit1 = ['orange', 'apple', 'banana', 'apricot'];
const fruit2 = ['cherry', 'blueberry', 'mango', 'lemon'];
const allFruits = [...fruit1, ...fruit2];

export {
  person as firstUser,
  teams as clubs,
  firstTeam,
  secondTeam,
  otherTeams,
  allFruits
}

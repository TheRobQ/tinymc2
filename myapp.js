document.addEventListener('DOMContentLoaded', function() {
const salute = document.getElementById('salute')
const name = document.getElementById('name')

function sayName(event){
 let mySalutation = Salutation('Peter', 'Forsberg');
 let nameArea = document.querySelector("#fullname")
 nameArea.textContent += mySalutation.fullName()
}

function addGreeting (event){
  let mySalutation = Salutation('Joe', 'Sakic')
  let saluteArea = document.querySelector("#salutation")
  saluteArea.textContent += mySalutation.greeting()
}

salute.addEventListener('click', addGreeting)
name.addEventListener('click', sayName)
})

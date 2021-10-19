const bill = document.querySelector('#input-bill')
const people = document.querySelector('#input-people')
const tipAmout = document.querySelector('.tip-amount h2')
const total = document.querySelector('.tip-total h2')

function captureData(){
  const tip = document.querySelector('input[name=tip]:checked').value
  const billValue = bill.value
  const peopleValue = people.value

  const tipAmoutValue =  ((tip * billValue) / 100) / peopleValue
  const totalValue = (billValue / peopleValue) + tipAmoutValue

  if(peopleValue != 0 || peopleValue != ''){
    tipAmout.innerHTML = `$${tipAmoutValue.toFixed(2)}`  
    total.innerHTML = `$${totalValue.toFixed(2)}`
  } else{
    tipAmout.innerHTML = `$0.00`  
    total.innerHTML = `$0.00`
  }
}
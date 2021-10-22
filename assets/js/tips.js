// bill
const bill = document.querySelector('#input-bill')
const people = document.querySelector('#input-people')
const customTip = document.querySelector('#custom')
const errorPeople = document.querySelector('.people .error')

// results
const tipAmount = document.querySelector('.tip-amount h2')
const total = document.querySelector('.tip-total h2')


function billCalc(){  
  reset()
  
  const inputPeople = document.querySelector('#input-people:focus')
  const tipValue = document.querySelector('input[name=tip]:checked').value
  const billValue = bill.value
  const peopleValue = people.value
  const customTipValue = customTip.value


  if(billValue > 0 && peopleValue > 0){
    const tipAmoutValue =  ((tipValue * billValue) / 100) / peopleValue
    const totalValue = (billValue / peopleValue) + tipAmoutValue

    inputPeople.style.borderColor = 'transparent'
    errorPeople.style.display = 'none'
    tipAmount.innerHTML = `$${tipAmoutValue.toFixed(2)}`  
    total.innerHTML = `$${totalValue.toFixed(2)}`
  } else{
    inputPeople.style.borderColor = 'red'
    errorPeople.style.display = 'inline-block'
    tipAmount.innerHTML = `$0.00`  
    total.innerHTML = `$0.00`
  }
}


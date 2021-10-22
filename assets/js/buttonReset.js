// reset
const buttonReset = document.querySelector('.reset')

function clear(){
  buttonReset.addEventListener('click', ()=>{
    bill.value = ''
    people.value = ''
    errorPeople.style.display = 'none'
    customTip.value = ''
    tipAmount.innerHTML = '$0.00'
    total.innerHTML = '$0.00'
    buttonReset.disabled = true
  })
}

function reset(){
  if(bill.value != '' || bill.value != 0){
    buttonReset.disabled = false
    clear()
  } else if(people.value != '' || people.value != 0){
    buttonReset.disabled = false
    clear()
  } else{
    buttonReset.disabled = true
  }
}
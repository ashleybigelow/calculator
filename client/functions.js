const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clear = document.querySelector('[data-clear]')
const equals = document.querySelector('[data-equals]')
const percent = document.querySelector('[data-percent]');
const sign = document.querySelector('[data-sign]')
const decimal = document.querySelector('[data-decimal]')
const data_delete = document.querySelector('[data-delete]')

number1 = ""
number2 = ""
operator = ""
currentnum = 1

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentnum == 1){
      number1+=button.innerText;
      change_screen(number1);
    } else {
      number2+=button.innerText;
      change_screen(number2)
    }
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () =>{
    if(currentnum == 1){
      operator = button.innerText;
      currentnum = 2;
    } else {
      calculate();
      operator = button.innerText;
      currentnum = 2;
    }
  })
})

clear.addEventListener('click', () => {
  if (currentnum == 1 || number2 == ""){
    number1 = "";
    operator = "";
    change_screen("");
  } else {
    number2="";
    currentnum = 1;
    change_screen(number1);
  }
})

equals.addEventListener('click', () => {
  calculate();
})

percent.addEventListener('click', () =>{
  if(currentnum == 1){
    number1 = (round_8(number1/100)).toString();
    change_screen(number1);
  } else {
    number2 = (round_8(number2/100)).toString();
    change_screen(number2);
  }
})

sign.addEventListener('click', () => {
  if(currentnum == 1){
    number1 = (parseFloat(number1)*-1).toString();
    change_screen(number1)
  } else {
    number2 = (parseFloat(number2)*-1).toString();
    change_screen(number2)
  }
})

decimal.addEventListener('click', () => {
  if(currentnum == 1){
    if(!number1.includes('.')){
      number1 += ".";
      change_screen(number1)
    }
  } else {
    if(!number2.includes('.')){
      number2 += ".";
      change_screen(number2)
    }
  }
})

data_delete.addEventListener('click', () => {
  if (currentnum == 1){
    number1 = number1.slice(0, -1)
    change_screen(number1)
  } else {
    number2 = number2.slice(0, -1)
    change_screen(number2)
  }
})

let change_screen = (str) => {
  let screen = document.getElementById('screen');
  screen.innerText = str;
}

let calculate = () => {
  console.log(number1 + operator + number2)
  if (operator == '/'){
    num = round_8((number1/number2).toString())
    change_screen(num);
    number1 = num.toString()
  } else if (operator == 'x'){
    num = round_8((number1*number2).toString())
    change_screen(num);
    number1 = num.toString()
  } else if (operator == '+'){
    num = round_8((parseFloat(number1)+parseFloat(number2)).toString())
    change_screen(num);
    number1 = num.toString()
  } else if (operator == '-'){
    num = round_8((parseFloat(number1)-parseFloat(number2)).toString())
    change_screen(num);
    number1 = num.toString()
  }
  operator = "";
  number2 = "";
  currentnum = 1;
}

let round_8 = (int) => {
  let num = (Math.round(int*100000000) / 100000000).toString();
  if (num.length > 8){
    return num  
  } else {
    return num;
  };
}
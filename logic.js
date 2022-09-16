var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector('#cash-given');
var button = document.querySelector('#check-button');
var output = document.querySelector('#output');
var message = document.querySelector('#error-msg');
var noOfNote = document.querySelectorAll(".notes");

//array for notes....
const notes = [2000, 500, 100, 50, 20, 10, 5, 1];


//check both input field
button.addEventListener('click', ()=>{

    if(cashGiven.value==''||billAmount.value == ''){

        output.innerText = 'Please insert both the values';
    }else{
        validateFunction(); //if yes, call validateFunction 
    }
});

//check for proper cash amount as well as provide parameter value of return amount to the calculate function
function validateFunction() {
    msgHide();

    var cashgiven = Number(cashGiven.value);
    var billamount = Number(billAmount.value);


    if (cashgiven > 0 && billamount > 0) {
        
        if (cashgiven >= billamount) {

            const returnAmount = cashgiven - billamount;   
// substracting cash value with bill amount:
// cash=100 and bill=50 output = 100-50 => 50
            calculate(returnAmount);

        } else {
        
            errorMessage('Cash should be greater than or equals to bill');
        }
    }else {
    // bill is less  than small
    errorMessage('Do you want to wash plates? 😁');
    }
}

function calculate(returnAmount) {

    output.innerText = ' Return Amount ' + parseInt(returnAmount); //parseInt for getting interger value
    if (returnAmount < 1) {
        errorMessage('There is no amount to returned');
    }
    for (let i = 0; i < notes.length; i++) {         
        // math.trunc(50/100) => 0
        const numberOfNote = Math.trunc(
            returnAmount / notes[i]
        );
        returnAmount = returnAmount % notes[i];

        noOfNote[i].innerText = numberOfNote;

        console.log(numberOfNote)
    }
}


function msgHide(){
    message.style.display = "none";
}

function errorMessage(msg) {
    message.style.display = 'block';
    message.innerText = msg;
}












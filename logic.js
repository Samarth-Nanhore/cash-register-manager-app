// all variable arranged
var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector('#cash-given');
var button = document.querySelector('#check-button');
var output = document.querySelector('#output');
var message = document.querySelector('#error-message');
var noOfNote = document.querySelectorAll(".no-of-notes");



const availableNote = [2000, 500, 100, 50, 20, 10, 5, 1]; //array of the notes 

// check whether both value insert
button.addEventListener('click', ()=>{
    if(cashGiven.value==''||billAmount.value == ''){
        output.innerText = 'you have to insert both value';
    }else{
        validateFunction();
    }
});

// logic function
function validateFunction() {
    // First checking wherther the bill is grater than zero
    messageHide();
    var cashgiven = Number(cashGiven.value);
    var billamount = Number(billAmount.value);
    if (cashgiven > 0 && billamount > 0) {
        if (cashgiven >= billamount) {
            const returnAmount = cashgiven - billamount;
            calculateFun(returnAmount);

        } else {
       
            error('Cash smount must be greater than or equals to bill');
        }
    }else {
    // bill is less  than small
    error('Do you want to wash plates? 😁');
    }
}


function calculateFun(returnAmount) {
    output.innerText = 'Amount to be returned: ' + parseInt(returnAmount);
    if (returnAmount < 1) {
        error('No amount to be returned');
    }
    for (let i = 0; i < availableNote.length; i++) {
        const numberOfNodes = Math.trunc(
            returnAmount / availableNote[i]
        );
        returnAmount = returnAmount % availableNote[i];
        noOfNote[i].innerText = numberOfNodes;
    }
}


function messageHide(){
    message.style.display = "none";
}

function errorMsgFun(msg) {
    message.style.display = 'block';
    message.innerText = msg;
}
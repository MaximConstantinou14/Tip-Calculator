let billAmt = document.getElementById('bill-ammount');
let serviceQual = document.getElementById('service-quality');
let peopleAmt = document.getElementById('people-ammount');

const calcBtn = document.getElementById('calculate');

calcBtn.addEventListener('click', calculateTip);

function calculateTip () {
    let bill = Number(billAmt.value);
    let service = Number(serviceQual.value)/100;
    let people = Number(peopleAmt.value);
    let tip = (bill * service) / people;

    if (bill == '' || service == '') {
        alert('Please enter values')
    };

    if (people === '' || people === 0) {
        people = 1
    };

    let tip_el = document.querySelector('.tip-wrap .tip');
    tip_el.innerText = '£' + tip.toFixed(2) + ((people > 1) ? ' each' : '');
};

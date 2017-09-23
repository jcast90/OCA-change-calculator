// Write your JavaScript here



var amountD = $('#amount-due').val();
var amountR = $('#amount-received').val();

//Monetary Values
var change = {
    totalChange: 0,
    dollar: {
        one: 0,
        five: 0,
        ten: 0,
        twenty: 0
    },
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
}


//Outputs
var totalChange = $('#total-change');
var twentyDollar = $('#twenty-dollar-output');
var tenDollar = $('#ten-dollar-output');
var fiveDollar = $('#five-dollar-output');
var oneDollar = $('#one-dollar-output');
var quartersOutput = $('#quarters-output');
var dimesOutput = $('#dimes-output');
var nickelsOutput = $('#nickels-output');
var penniesOutput = $('#pennies-output');

totalChange.append(change.totalChange);
twentyDollar.append(change.dollar.twenty);
tenDollar.append(change.dollar.ten);
fiveDollar.append(change.dollar.five);
oneDollar.append(change.dollar.one);
quartersOutput.append(change.quarters);
dimesOutput.append(change.dimes);
penniesOutput.append(change.pennies);
nickelsOutput.append(change.nickels);

function calculateChange() {

    //User Inputs
    var amountD = $('#amount-due').val();
    var amountR = $('#amount-received').val();
    //Button
    var calculate = $('#calculate-change');

    //calculate user inputs
    var result = (amountR * 100) - (amountD * 100);
    var totalResult = result / 100;
    //output initial calculation
    $('#total-change').append(totalResult);

    //take initial 'result' compare to see quantity of bills to return
    if (result / 2000 > 1.5) {
        change.dollar.twenty = Math.floor(result / 2000);
        result = result % 2000;
        console.log(result, result % 2000);
    }
    if (result / 1000 > 1.25) {
        change.dollar.ten = Math.floor(result / 1000);
        result = result % 1000;
    }
    if (result / 500 > 1.1) {
        change.dollar.five = Math.floor(result / 500);
        result = result % 500;
    }
    if (result / 100 > 1) {
        change.dollar.one = Math.floor(result / 100); //14.66
        result = result % 100;
    }
    if (result / 25 > .25) {
        change.quarters = Math.floor(result / 25);
        result = result % 25;
    }
    if (result / 10 > .10) {
        change.dimes = Math.floor(result / 10);
        result = result % 10;
    }
    if (result / 5 > .05) {
        change.nickels = Math.floor(result / 5);
        result = result % 5;
    }
    if (result / .01 > .01) {
        change.pennies = Math.ceil(result);
        result = result;

    }

    //output how many bills/coins to return
    twentyDollar.append(change.dollar.twenty);
    tenDollar.append(change.dollar.ten);
    fiveDollar.append(change.dollar.five);
    oneDollar.append(change.dollar.one);
    quartersOutput.append(change.quarters);
    dimesOutput.append(change.dimes);
    penniesOutput.append(change.pennies);
    nickelsOutput.append(change.nickels);

    //Animate numbers
    $('.number').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

}
//handles click event for calculation
$('#calculate-change').click(function() {
    twentyDollar.html('');
    tenDollar.html('');
    fiveDollar.html('');
    oneDollar.html('');
    quartersOutput.html('');
    dimesOutput.html('');
    penniesOutput.html('');
    nickelsOutput.html('');



    calculateChange();


});
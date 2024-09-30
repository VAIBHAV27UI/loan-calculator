function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value
    intrestRateValue = document.getElementById("intrest-rate").value
    monthsToPayValue = document.getElementById("months-to-pay").value

    intrest = ( loanAmountValue * (intrestRateValue * 0.01)) / monthsToPayValue

    monthlyPayment = ( loanAmountValue / monthsToPayValue + intrest ).toFixed(2)

    document.getElementById("payment").innerHTML = `Monthly Payment:${monthlyPayment}`

} 
// Cash In Script
document.getElementById('cInBtn').addEventListener('click',function(event){
    event.preventDefault()
    // Get Value Of input Field
    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;
    const convertAmount = parseFloat(amount);
    const pinNumber = document.getElementById('pinNumber').value;
    //check Phone Number and Pin 
    if (phoneNumber === '123' && amount > 0 && pinNumber === '123'){
        // Get Main Balance
        const mainBalancee = document.getElementById('mainBalance').innerText;
        const convertMainBalance = parseFloat(mainBalancee);
        alert('success');
        // Calculate and Add New Update Balance
        const newBalance = convertMainBalance + convertAmount;
        mainBalance.innerText = newBalance;
        // Clear All input Field
        document.getElementById('phoneNumber').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('pinNumber').value = '';
    }
    else {
        alert('Invalid Number or Pin')
    }
})


// Cash Out Script 
document.getElementById('loginBtn').addEventListener('click', function(event){
    event.preventDefault();
    // Get All Input Value
    const phoneNumberC = document.getElementById('phoneNumberC').value;
    const amountC = document.getElementById('amountC').value;
    const convertAmountC = parseFloat(amountC);
    const pinNumberC = document.getElementById('pinNumberC').value;
    // checking Phone Number and pin 
    if(phoneNumberC === "123" && amountC > 0 && pinNumberC === "123"){
        // get Value Main balance
        const mainBalanceC = document.getElementById('mainBalance').innerText;
        const convertMainBalanceC = parseFloat(mainBalanceC);
        // Calculate and add new Update balance 
        const newUpdateBalanceC = convertMainBalanceC - convertAmountC;
        mainBalance.innerText = newUpdateBalanceC;
        alert('Cash Out Successful');
        // clear All the data
        document.getElementById('phoneNumberC').value = ""
        document.getElementById('amountC').value = ""
        document.getElementById('pinNumberC').value = ""
    }
    else{
        alert('Invalid Number or Pin')
    }
})
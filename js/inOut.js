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
        // Convert and Add New Update Balance
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

// Login Button Check 
document.getElementById('loginBtn').addEventListener('click', function(){
    // Get Value from fieldset
    const phoneNumber = document.getElementById('phoneNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;
    if( phoneNumber === '123' && pinNumber === '123'){
        alert('Login Successful');
        window.location.href = "/home.html";
    }
    else {
        alert('Something Went Wrong');
    };
});
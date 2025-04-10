//Show Cash In Form
document.getElementById('cashInBtn').addEventListener('click',function(){
    document.getElementById('cashinForm').classList.remove('hidden');
    document.getElementById('cashOutFrom').classList.add('hidden');
});
// Show Cash Out Form
document.getElementById('cashOutBtn').addEventListener('click', function(){
    document.getElementById('cashOutFrom').classList.remove('hidden');
    document.getElementById('cashinForm').classList.add('hidden');
});



function showInputFiledById(id){
   const inputValue = document.getElementById(id).value;
   const InputNumber = parseFloat(inputValue)
   return InputNumber;
}

function showTextValueById(id){
    const balance = document.getElementById(id).innerText;
    const balanceValue = parseFloat(balance);
    return balanceValue
}
function anotherShowInputFiled(id){
    const showInputField = document.getElementById(id).innerText;
    const showInputNumber =parseFloat(showInputField);
    return showInputNumber;
}


function showSectionByIdBtn (id){
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
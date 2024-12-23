document.getElementById('donate1-btn')
.addEventListener('click',function(event){
    event.preventDefault();


   
  const addMoney = showInputFiledById('input-field1')
if(isNaN(addMoney) || addMoney <='0'){
    alert('failed to add donate money')
    return;
}

  const balanceInput =showTextValueById('balance-btn1');
//   console.log(balanceInput)

   const subtractionBtn = anotherShowInputFiled('subtract-btn');

   if( subtractionBtn < addMoney){
    alert('you have not enough money')
    return ;
}

   const balanceSubtract = subtractionBtn - addMoney;
   document.getElementById('subtract-btn').innerText =balanceSubtract;

  const balanceCount = addMoney + balanceInput;
  document.getElementById('balance-btn1').innerText =balanceCount;

//   add to history
const div =document.createElement('div') 
const date = new Date()
div.classList.add('p-8','outline','outline-[#E7E7E7]' ,'rounded-lg','mb-2','mt-2','max-w-[800px]','mx-auto')
div.innerHTML =`
<h2 class="font-bold lg:text-xl text-sm text-[#111111] mb-4">${addMoney} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
<p class="font-light lg:text-[16px] text-sm">${date}</p> `
console.log(div)
   document.getElementById('history-container').appendChild(div);

   document.getElementById('my_modal_5').showModal()
})
// btn 2
document.getElementById('donate2-btn')
.addEventListener('click',function(event){
    event.preventDefault();
   
  const addMoney = showInputFiledById('input-field2')
if(isNaN(addMoney)){
    alert('failed to add donate money')
    return;
}
if(addMoney <=0){
    alert('please input valid value')
    return
}
  const balanceInput =showTextValueById('balance-btn2');
//   console.log(balanceInput)

   const subtractionBtn = anotherShowInputFiled('subtract-btn');

   const balanceSubtract = subtractionBtn - addMoney;
   document.getElementById('subtract-btn').innerText =balanceSubtract;

  const balanceCount = addMoney + balanceInput;
  document.getElementById('balance-btn2').innerText =balanceCount;

//   add to history
const div =document.createElement('div') 
const date = new Date()
div.classList.add('p-8','outline','outline-[#E7E7E7]' ,'rounded-lg','mb-2','mt-2','max-w-[800px]','mx-auto')
div.innerHTML =`
<h2 class="font-bold lg:text-xl text-sm text-[#111111] mb-4">${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
<p class="font-light lg:text-[16px] text-sm">${date}</p> `
console.log(div)
   document.getElementById('history-container').appendChild(div);
   document.getElementById('my_modal_5').showModal()

})

// btn 3
document.getElementById('donate3-btn')
.addEventListener('click',function(event){
    event.preventDefault();
   
  const addMoney = showInputFiledById('input-field3')
if(isNaN(addMoney)){
    alert('failed to add donate money')
    return;
}
  const balanceInput =showTextValueById('balance-btn3');
//   console.log(balanceInput)

   const subtractionBtn = anotherShowInputFiled('subtract-btn');

   const balanceSubtract = subtractionBtn - addMoney;
   document.getElementById('subtract-btn').innerText =balanceSubtract;

  const balanceCount = addMoney + balanceInput;
  document.getElementById('balance-btn3').innerText =balanceCount;

//   add to history
const div =document.createElement('div') 
const date = new Date()
div.classList.add('p-8','outline','outline-[#E7E7E7]' ,'rounded-lg','mb-2','mt-2','max-w-[800px]','mx-auto')
div.innerHTML =`
<h2 class="font-bold lg:text-xl text-sm text-[#111111] mb-4">${addMoney} Taka is Donated for Injured in the Quota Movement</h2>
<p class="font-light lg:text-[16px] text-sm">${date}</p> `
console.log(div)
   document.getElementById('history-container').appendChild(div);
   document.getElementById('my_modal_5').showModal()
   
})


 function showColorById(id){
        document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
        document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
        document.getElementById(id).classList.add('bg-[#B4F461]');
        
 }



document.getElementById('donation-btn')
.addEventListener('click',function(){
    
    showSectionByIdBtn('donation-container')
    showColorById('donation-btn')

    
})
document.getElementById('history-btn')
.addEventListener('click',function(){
    showSectionByIdBtn('history-container')
    showColorById('history-btn')
})




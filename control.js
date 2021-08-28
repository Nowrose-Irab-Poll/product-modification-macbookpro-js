const acceptedPromo = 'stevekaku';
let isPromoApplied = false;
const discount = 20;

//Memory Buttons Control
document.getElementById('memory-section').addEventListener('click', function(event){
    const button1 = document.getElementById('memory-btn-1');
    const button2 = document.getElementById('memory-btn-2');

    switch (event.target) {
        case button1:
            //8gb 
            updateField('memory-cost', 0);
          break;
        case button2:
            //16gb
            updateField('memory-cost', 180);
          break;
      }
    updateTotal();
});

//Storage section control
document.getElementById('storage-section').addEventListener('click', function(event){
    const button1 = document.getElementById('storage-btn-1');
    const button2 = document.getElementById('storage-btn-2');
    const button3 = document.getElementById('storage-btn-3');

    switch (event.target) {
        case button1:
            //256gb ssd
            updateField('storage-cost', 0);
          break;
        case button2:
            //512gb ssd
            updateField('storage-cost', 100);
          break;
        case button3:
            //1tb ssd
            updateField('storage-cost', 180);
          break;
      }
      updateTotal();
});

//delivery section control
document.getElementById('delivery-section').addEventListener('click', function(event){
    const button1 = document.getElementById('delivery-btn-1');
    const button2 = document.getElementById('delivery-btn-2');

    switch (event.target) {
        case button1:
            //free delivery
            updateField('delivery-cost', 0);
          break;
        case button2:
            //paid delivery
            updateField('delivery-cost', 20);
          break;
      }
      updateTotal();
});

//promo button control
document.getElementById('apply-btn').addEventListener('click', function(){
    const promo = getValue('promo-input');
    if(promo == acceptedPromo){
        isPromoApplied = true;
    }
    clearValue('promo-input');
    updateTotal();
});

//update any field innerText by id
function updateField(id, item){
    document.getElementById(id).innerText = item;
}

//get Integer innerText from any field by id
function getField(id){
    return parseInt( document.getElementById(id).innerText );
}

//update total price
function updateTotal(){

    const price = getField('price');
    const memoryCost = getField('memory-cost');
    const storageCost = getField('storage-cost');
    const deliveryCost = getField('delivery-cost');

    const totalPrice = price + memoryCost + storageCost + deliveryCost;
    let finalPrice = totalPrice;

    //20% discount applied
    if(isPromoApplied)  finalPrice*=(100-discount)/100;

    updateField('total-price', totalPrice);
    updateField('final-price', finalPrice);
}

//get value from any field by id
function getValue(id){
    return document.getElementById(id).value;
}

//clear value from any field by id
function clearValue(id){
    document.getElementById(id).value = '';
}
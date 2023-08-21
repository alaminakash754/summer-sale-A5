function goHome() {
    location.href = 'index.html';
}
function sportsCap() {
    const mainPrice = getInnerTextPrice('cap-price');
    const previousAmount = getValue('total-price');
    const totalPrice = mainPrice + previousAmount;
    price = parseFloat(totalPrice).toFixed(2);
    setElementInnerText('total-price', price);
    addItemList('Sports Back Cap');
}

function fullJersey() {
    const mainPrice = getInnerTextPrice('jersey-price');
    const previousAmount = getValue('total-price');
    const totalPrice = previousAmount + mainPrice;
    price = parseFloat(totalPrice).toFixed(2);
    setElementInnerText('total-price', price);
    addItemList('Full Jersey Set');
}
function sportsCates() {
    const mainPrice = getInnerTextPrice('cates-price');
    const previousAmount = getValue('total-price');
    const totalPrice = previousAmount + mainPrice;
    price = parseFloat(totalPrice).toFixed(2);
    setElementInnerText('total-price', price);
    addItemList('Sports cates');
}
function relaxChair() {
    const mainPrice = getInnerTextPrice('chair-price');
    const previousAmount = getValue('total-price');
    const totalPrice = previousAmount + mainPrice;
    price = parseFloat(totalPrice).toFixed(2);
    setElementInnerText('total-price', price);
    addItemList('Single Relax Chair');
}
function childrenPlay() {
    const mainPrice = getInnerTextPrice('children-play-price');
    const previousAmount = getValue('total-price');
    const totalPrice = previousAmount + mainPrice;
    price = parseFloat(totalPrice).toFixed(2);
    setElementInnerText('total-price', price);
    addItemList('Children play');
}
function flexibleSofa() {
    const mainPrice = getInnerTextPrice('flexible-sofa');
    const previousAmount = getValue('total-price');
    const totalPrice = previousAmount + mainPrice;
    price = parseFloat(totalPrice).toFixed(2);
    setElementInnerText('total-price', price);
    addItemList('Flexible Sofa');
}
// Total price & enable apply button
document.getElementById('total-price').addEventListener('change', function () {
    const totalPrice = getValue('total-price');
    const applyBtn = document.getElementById('apply-btn');
    if (totalPrice > 200) {
        applyBtn.removeAttribute('disabled')
    }
    else {
        applyBtn.setAttribute('disabled', true);
    }

});
// coupon code and enable apply button
document.getElementById('coupon-code').addEventListener('keyup', function (event) {
    const couponCode = event.target.value;
    const applyBtn = document.getElementById('apply-btn');
    if (couponCode == 'SELL200') {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disabled', true);
    }
});

// Discount and Total calculate and set these in their position.
document.getElementById('apply-btn').addEventListener('click', function () {
    var totalPrice = getInnerTextPrice('total-price');
    var calculatedPercentage = totalPrice * 0.2;
    var discount = parseFloat(calculatedPercentage).toFixed(2);
    setElementInnerText('discount', discount);
    var initialGrandTotal = getInnerTextPrice('grand-total');
    var secondGrandTotal = totalPrice - discount;
    var finalGrandTotal = secondGrandTotal + initialGrandTotal;
    grandTotal = finalGrandTotal.toFixed(2);
    setElementInnerText('grand-total', grandTotal);
})

// Reusable Function 
function getInnerTextPrice(id) {
    const priceInnerText = document.getElementById(id);
    const getInnerText = priceInnerText.innerText.split(' ')[0];
    const price = parseFloat(getInnerText)
    return price;
}

function getValue(id) {
    const getElement = document.getElementById(id);
    const valueString = getElement.innerText;
    const value = parseFloat(valueString);
    return value;
}
function setElementInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}
function addItemList(id) {
    const addItem = document.getElementById('set-item-list')
    const p = document.createElement('p');
    const count = addItem.childElementCount;
    p.innerHTML = `${count + 1}. ${id}`
    addItem.appendChild(p);
}
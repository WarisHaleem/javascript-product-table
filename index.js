const select = document.querySelector('#select');
const price = document.querySelector('#price');
const qty = document.querySelector('#quantity');
const total = document.querySelector('#total');
const button = document.querySelector('#submit');
const table = document.querySelector('#productsTable');
const myTable = document.querySelector('#contentHere');
const subtotalNum = document.querySelector('#subtotal');

var subtotal = 0;

const priceArray = {
  'T-Shirt': 500,
  'Shirt': 350,
  'Hairdryer': 400,
  'Trimmer':750
};

button.addEventListener('click', () => {
  totalPrice = qty.value * priceArray[select.value]
  priceItem = priceArray[select.value]

  inpStr = `<tr><td><input type="button" id="del-button" value="Delete" onclick="deleteRow(this)" /></td><td>${select.value}</td><td>${priceItem}</td><td>${qty.value}</td><td>${totalPrice}</td></tr>`
  subtotal += totalPrice;

  subtotalNum.innerHTML = subtotal;
  myTable.innerHTML = myTable.innerHTML + inpStr;
})

select.addEventListener('input', () => {
  price.innerHTML = priceArray[select.value]
  total.innerHTML = qty.value * priceArray[select.value]
})

qty.addEventListener('input', ()=> {
total.innerHTML = "(" + qty.value * priceArray[select.value] + ") Total rice qty * price";
})

function deleteRow(row){
    const i = row.parentNode.parentNode.rowIndex - 1;
    console.log(i)
    innerTotal = row.parentNode.parentNode.childNodes[4].innerHTML
    subtotal -= innerTotal
    subtotalNum.innerHTML = subtotal
    myTable.deleteRow(i);
}
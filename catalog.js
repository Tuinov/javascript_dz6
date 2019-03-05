
var cart = [];

var products = [
               {
                   name: 'parkа',
                   color: 'green',
                   cost: 150,
               },
                {
                   name: 'coat',
                   color: 'white', 
                   cost: 555,
               },
                {
                   name: 'jacket',
                   color: 'blue',  
                   cost: 259,
               },
           ];

var $catalog = document.getElementById('catalog');
var $cart = document.getElementById('cart');

// создаёт 3 дива с продуктом и кнопкой купить
for(var i = 0; i < products.length; i++){
    var $div = document.createElement('div');
    $div.classList.add('showcase');
    $catalog.appendChild($div);
    $div.textContent = ' Наименование: ' + products[i].name + ' цвет: ' + products[i].color +  ' цена: ' + products[i].cost;

    
    var $button = document.createElement('button');
    $div.appendChild($button);
    $button.textContent = ' В корзину ';
    $button.id = 'buttonBuy' + i;
    
}

var count = 0; // колличество товаров в корзине.
var sum = 0; // cумма товаров



// добавляет продукт в корзину и суммирует
   function addProductCart(id){
       count++;
       sum = sum + products[(event.target.id[9])].cost;   
   }

$catalog.addEventListener('click', handeleButtonClick);

function handeleButtonClick(event){
    addProductCart(event.target.id)
    $cart.textContent = 'В вашей корзине: ' + count + ' товаров'  + ' на сумму: ' + sum + ' рублей.';
}

// кнопка очистки корзины
$buttonClear = document.createElement('button');
document.body.appendChild($buttonClear);
$buttonClear.textContent = ' ОЧИСТИТЬ КОРЗИНУ ';
$buttonClear.id = 'buttonClear';

$buttonClear.addEventListener('click', handeleClearCart);
function handeleClearCart(event){
    $cart.textContent = 'В вашей корзине: 0 товаров';
    count = 0;
    sum = 0;
}

// кнопка оформить покупку
$buttonTotal = document.createElement('button');
document.body.appendChild($buttonTotal);
$buttonTotal.textContent = ' ОФОРМИТЬ ПОКУПКУ ';
$buttonTotal.id = 'buttonTotal';

$buttonTotal.addEventListener('click', handeleTotalCart);
function handeleTotalCart(event){
   $cart.id = 'grandTotal';
   $cart.textContent = ' Перевожу на страницу оплаты....';
}


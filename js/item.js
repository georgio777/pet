const addToCart = document.querySelector('#add__to--cart');
const itemImg = document.querySelector('.photoon');
const itemName = document.querySelector('.item__name');
const actualPrice = document.querySelector('.actual__price');
const formerPrice = document.querySelector('.former__price');
const itemDescription = document.querySelector('.tab__content[data-content="1"');
const itemChar = document.querySelector('.tab__content[data-content="2"');


// вся информация об отображаемом товаре
const item = {
  name: "Watchersons 1334, gold, швейцария",
  currentPrice: 24320,
  formerPrice: "41 990",
  articleNumber: "123123",
  imgURL: "../img/item1.jpg",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, tempora maiores magni est, quam officiis reprehenderit ut amet voluptas necessitatibus eligendi earum repellat. Animi maiores inventore eveniet. Maiores, sint dolores?",
  characteristics: `<tr>
              <td> Lorem</td>
              <td>ipsum</td>
            </tr>
            <tr>
              <td>dolor</td>
              <td>sit amet</td>
            </tr>
            <tr>
              <td>eligendi</td>
              <td>1924</td>
            </tr>
            <tr>
              <td>reprehenderit</td>
              <td>voluptas</td>
            </tr>
            <tr>
              <td>earum</td>
              <td>quam</td>
            </tr>
            <tr>
              <td>maiores</td>
              <td>inventore</td>
            </tr>`
}

// отрисовка информации о товаре на странице
itemImg.src = item.imgURL;
itemName.textContent = item.name;
actualPrice.textContent = item.currentPrice;
formerPrice.textContent = item.formerPrice;
itemDescription.textContent = item.description;
itemChar.innerHTML = item.characteristics;

// добавляет в корзину и local storage 
 function addToCartHandler(item) {
  localStorage.setItem('item', JSON.stringify(item));
  localStorage.setItem('cart', true);
}

// обработка по клику кнопки "добавить в корзину"

addToCart.addEventListener('click', ()=>{
  addToCart.setAttribute('disabled', true);
  addToCart.textContent = "в корзине";
  // проверяем нет ли товара в локальном хранилище чтобы не было дублирований
  if (!localStorage.getItem('cart')) {
    addToCartHandler(item);
    cartCreator();  
  }
})


// clear localstorage on reload
// window.onload = window.localStorage.clear();
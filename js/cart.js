const cartIcon = document.querySelector('.cart__img');
const cartModal = document.querySelector('.modal__cart');
const closeCartIcon = document.querySelector('.close__cart');
const cartInform = document.querySelector('.cart__inform');


// открытие закрытие модального окна корзины
cartIcon.addEventListener('click', ()=>{
  cartModal.classList.remove('none')
})

closeCartIcon.addEventListener('click', ()=>{
  cartModal.classList.add('none')
})

window.addEventListener('click', (e)=>{
  if (e.target == cartModal) {
    cartModal.classList.add('none')
  }
})

// добавляет красную бляшку когда корзина не пуста



// проверяем локальное хранилище на наличие изменений в корзине
if (localStorage.getItem('cart')) {
  cartCreator()
  cartInform.classList.add('active__cart')
} else {
  cartInform.classList.remove('active__cart')
}


function updatePrice(counter, initialPrice) {
  const price = document.querySelector('.mycart__item--totalprice')
  price.textContent = counter*initialPrice;
}





// ффункция вызывается при 1) если в localstorage записан cart со значением true 2) при клике кнопки добавить в корзину и отрисовывает добавленный в корзину элемент из local storage

function cartCreator() {
  cartInform.classList.add('active__cart')
  // вызов из локального хранилища
  const itemFromLocalStorage = JSON.parse(localStorage.getItem('item'));  

   // создаем очиститель корзины и локального хранилища
  // находим родителя в которого будем помещать товар
  const cartContainer = document.querySelector('#mycart')

   const clearButton = document.createElement('button')
   clearButton.classList.add('clear__cart')
   clearButton.textContent = "очистить корзину"
   cartContainer.appendChild(clearButton)
    // обработчик для кнопки очистки корзины
  clearButton.addEventListener('click', ()=>{
    localStorage.clear();
    itemContainer.remove();
    checkoutButton.remove();
    clearButton.remove();
    cartInform.classList.remove('active__cart')
  })

  //  создаем контейнер товара

  const itemContainer = document.createElement('div')
  itemContainer.classList.add('mycart__item')
  
  
  cartContainer.appendChild(itemContainer)
  
  // фикс ссылки для индекс хтмл
  let watchUrl = itemFromLocalStorage.imgURL;
  console.log(window.location.pathname);
  
  if (window.location.pathname == "/index.html") {
    watchUrl = itemFromLocalStorage.indexImgUrl;
    console.log(watchUrl);
  } 
  
  document.querySelector('.mycart__item').innerHTML = `<img src="${watchUrl}" alt="" class="mycart__img"> 
          <div class="mycart__item--info--wrapper">
            <p class="mycart__item--name">${itemFromLocalStorage.name}</p>
            <p class="mycart__item--totalprice">${itemFromLocalStorage.currentPrice}</p>
          </div>
          <div class="mycart__item--quantyty">
            <p class="quantyty__number">количество: 1</p>
            <div class="quantyty__buttons">
              <button class="quantyty__minus">-1</button>
              <button class="quantyty__plus">+1</button></div>
            </div>  
          </div>`
  //  тут добавляем кнопку чекаута ведущую к оплате
  const checkoutButton = document.createElement('button')
  checkoutButton.classList.add('checkout')
  checkoutButton.textContent = 'checkout';
  
  cartContainer.appendChild(checkoutButton) 

  // создаем калькулятор
  function createCalc() {
    const plusButton = document.querySelector('.quantyty__plus')
    const minusButton = document.querySelector('.quantyty__minus')
    const amount = document.querySelector('.quantyty__number')
    let counter = 1;

    // создаем обработчики событий для кнопок количества и внутри вызываем обновление цены в корзине
    plusButton.addEventListener('click', ()=>{
      counter++
      updatePrice(counter, itemFromLocalStorage.currentPrice)
      amount.textContent = "количество: " + counter
    })
    minusButton.addEventListener('click', ()=>{
      if (counter - 1) {
        counter--
        updatePrice(counter, itemFromLocalStorage.currentPrice)
        amount.textContent = "количество: " + counter
      }
    })
  }

  createCalc()

}


// очистка корзины и локального хранилища




const loopa = document.querySelector('.img-magnifier-glass')
const imgContainer = document.querySelector('.photoon')

const rect = imgContainer.getBoundingClientRect()


// window.addEventListener('mousemove', (e)=>{

//   let posX = e.screenX;
//   let posY = e.screenY;

//   loopa.style.top = `calc(${posY}px - 200px)`;
//   loopa.style.left = `calc(${posX}px + 20px)`;
// })


imgContainer.addEventListener('mouseover', function (e) {
  loopa.style.visibility = 'visible';
})

imgContainer.addEventListener('mouseout', function () {
  loopa.style.visibility = 'hidden';
})
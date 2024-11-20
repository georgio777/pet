const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab__content')

tabs.forEach(tab => {
  tab.addEventListener('click', ()=> {
    tabs.forEach(t => {
      t.classList.remove('active__tab')
    })

    tab.classList.add('active__tab')

    const target = tab.dataset.tab;

    tabContents.forEach(content => {
      content.classList.remove('active__content')

      document.querySelector(`.tab__content[data-content="${target}"]`).classList.add('active__content')
    })
  })
})
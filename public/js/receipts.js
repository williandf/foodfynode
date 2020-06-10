const showText = document.querySelector('.text')
const showHide = document.querySelectorAll('.hide')

for(let show of showHide)
    show.addEventListener('click', () => {
        if (show.innerHTML == 'ESCONDER') {
            showText.classList.add('active')
            show.innerHTML = 'MOSTRAR'
        } else {
            showText.classList.remove('active')
            show.innerHTML = 'ESCONDER'
        }
    })
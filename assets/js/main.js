const titleSanfona = document.querySelectorAll('.titleSeeMore');
const seeMore = document.querySelectorAll('.seeMore');
const sanfonaContent = document.querySelectorAll('.sanfona-content');
const sanfona = document.querySelectorAll('.sanfona-card');

function animateScroll() {
    const dataAnime = document.querySelectorAll('[data-anime]');
    const windowTop = window.innerHeight * 0.5;

    dataAnime.forEach((e) => {
        if (e.getBoundingClientRect().top - windowTop < 120) {
            e.classList.add('animate')
        } else {
            e.classList.remove('animate')
        }
    })
}

function percorre(array) {
    array.forEach((el, index) => {
        el.addEventListener('click', () => {
            toggleSanfona(el, index)
        })
    })
}

function toggleSanfona(el, index) {

    if (el.classList.contains('seeMore')) {
        el.classList.toggle('rotateBtn');
    } else if (el.classList.contains('titleSeeMore')) {
        el.classList.remove('rotateBtn')
        seeMore[index].classList.toggle('rotateBtn');
    }
    sanfonaContent[index].classList.toggle('active');
    sanfona[index].classList.toggle('active2');
}

percorre(titleSanfona)
percorre(seeMore)

window.addEventListener('scroll', () => {
    animateScroll()
})

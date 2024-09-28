// Тут идет код, который писал от скуки
// Если не интересно МОЖНО СРАЗУ НАЧАТЬ С 25-ой СТРОКИ
const div1 = document.getElementById('container1');
const div2 = document.getElementById('container2');
const div3 = document.getElementById('container3');

const divHeight1 = div1.clientHeight
const divHeight2 = div2.clientHeight
const divHeight3 = div3.clientHeight

if (div1 <= div2) {
    if (div2 <= div3) {
        div1.style.height = `${divHeight3}px`
        div2.style.height = `${divHeight3}px`
    } else {
        div1.style.height = `${divHeight2}px`
        div3.style.height = `${divHeight2}px`
    }
} else {
    div2.style.height = `${divHeight1}px`
    div3.style.height = `${divHeight1}px`
}

// Основная часть рпешения задачи
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.onclick = () => {
    const width = window.screen.width;
    const height = window.screen.height;

    alert(`Ширина экрана монитора: ${width}px\nВысота экрана монитора: ${height}px`);
};

btn2.onclick = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    alert(`Ширина экрана: ${width}px\nВысота экрана: ${height}px`);
};

btn3.onclick = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    alert(`Ширина экрана: ${width}px\nВысота экрана: ${height}px`); 
    // В данном случае будет таким же как во втором случае, так как нет полосы прокрутки
    // Но все прекрасно работает, проверял с заданной высотой и шириной :)
};
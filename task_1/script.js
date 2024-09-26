const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const iconFill = document.querySelector('.icon-fill');

btn.onclick = () => {
    icon.classList.toggle('icon-toggle')
    iconFill.classList.toggle('icon-toggle')
}
var btn = document.querySelector('#btn1');
var btns = document.querySelector('#btn2');
var modls = document.querySelector('.modal');
btn.onclick = ()=>{
    modls.classList.add('ahmad');
}
btns.onclick = ()=>{
    modls.classList.remove('ahmad');
}
btn_header.onclick = () => {
    head.style.display = 'block';
}
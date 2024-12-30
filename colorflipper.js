const colors=['green','aqua','rgba(133,122,200','#f15025'];
const btn=document.getElementById('btn');
const color=document.querySelectorAll('.color');
btn.addEventListener('click',function(){
    const randomNumber=getran();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
    

});
function getran(){
    return Math.floor(Math.random()*colors.length);
}
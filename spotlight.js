var point =document.documentElement;

point.addEventListener('touchmove',
(ele)=>{
    point.style.setProperty('--x', ele.clientX +'px')
    point.style.setProperty('--y', ele.clientY +'px')
}
)
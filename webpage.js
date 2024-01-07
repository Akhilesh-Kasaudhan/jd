
// document.addEventListener('mousemove',(elem)=>{
//     // let x = elem.clientX;
//     // let y = elem.clientY;
//     // console.log(`x: ${x}, y:${y}`);
//     circle.style.transform=`translate(${elem.clientX - 10}px,${elem.clientY-10}px)`;

// });
const cursor= document.querySelector('#circle');
const btn = document.querySelector('#btn');
const svgelem = document.querySelector('svg');
var tl = gsap.timeline();

window.addEventListener('mousemove',function(details) {
    // console.log(details);
    let valueX = details.clientX;
    let valueY = details.clientY;
    setTimeout(() => {
        circle.style.top = `${valueY}px`;
        circle.style.left = `${valueX}px`;   
    }, 100);
   
});
btn.addEventListener('click',function(){
    tl.reverse();
    setTimeout(() => {
        svgelem.classList.add('animate');
    },3500);
})


tl
.from('#wrapper',{
    duration:3,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration:1.5,
    width:0,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')
.from('#blackcard',{
    duration:1.5,
    x:70,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')
.from('.linelem',{
    duration:2.5,
    x:70,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')
.from('.linelem .line',{
    duration:2.5,
    width:0,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')
.from('#blackcard p',{
    duration:1.5,
    y:30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1.5')
.from('#sideelem',{
    duration:2,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')
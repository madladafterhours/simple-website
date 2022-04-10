const button = document.querySelector('.continue');
const hoverdetector = document.querySelector('.hoverdet');
var sb = false
gsap.to('.text', {opacity:1, duration:.5})
//Popup removal
button.addEventListener('click', () => {
  button.disabled = true;
  gsap.to('.cont', {opacity:0, y:40, duration:.4});
  gsap.to('.text', {opacity:0, y:200, duration:1});
  document.querySelector('.logo').style.visibility = 'visible'
  gsap.fromTo(".logo",
  {opacity:0, y: -30, ease: "power2.out"},
  {opacity: 1, y:0, duration: 1})
  sb = !sb
  gsap.to(".redsidebar",
  {x:9.6, duration: .5})

  setTimeout(() => {
    gsap.to('.github', {opacity:1, duration:.5})
    gsap.to('.twitter', {opacity:1, duration:.5})
    document.querySelector('.title').remove();
    document.querySelector('.sig').remove();
    document.querySelector('.continue').remove();
    document.querySelector('.desc').remove();
  }, 1000)
})

//Show sidebar
hoverdetector.addEventListener('mouseenter', () => {
  if(sb == true){
    gsap.to(".redsidebar",
    {x:200, duration: .35})
  }
})

//Hide redsidebar
hoverdetector.addEventListener('mouseleave', () => {
  if(sb == true){
    gsap.to(".redsidebar",
    {x:9.6, duration: .35})
  }
})

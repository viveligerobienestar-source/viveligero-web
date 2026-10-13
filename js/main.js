// Smooth scroll + subtle reveal animations
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
  });
});
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';io.unobserve(e.target);}
}),{threshold:.12});
document.querySelectorAll('.card,.step').forEach(el=>{
  el.style.opacity=0;el.style.transform='translateY(24px)';
  el.style.transition='opacity .6s ease,transform .6s ease';
  io.observe(el);
});

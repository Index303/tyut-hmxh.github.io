// 设置页脚年份
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
// 移动端导航切换
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
btn && btn.addEventListener('click', ()=>{
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  if(nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});

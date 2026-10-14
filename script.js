'use strict';
const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('#mobile-menu');
if(menuButton&&menu){menuButton.addEventListener('click',()=>{menu.showModal();menuButton.setAttribute('aria-expanded','true')});menu.querySelector('[data-close-menu]').addEventListener('click',()=>menu.close());menu.addEventListener('close',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.focus()});}
const filters=document.querySelector('.filters');
if(filters){filters.hidden=false;filters.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;let count=0;filters.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=b.dataset.filter!=='Alla'&&card.dataset.category!==b.dataset.filter;if(!card.hidden)count++});document.querySelector('#filter-status').textContent=count+' projekt visas.'})}
const lightbox=document.querySelector('#lightbox');
let activeImageLink;
if(lightbox){document.querySelectorAll('[data-gallery]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();activeImageLink=a;const image=lightbox.querySelector('img');image.src=a.href;image.alt=a.querySelector('img').alt;lightbox.querySelector('p').textContent=image.alt;lightbox.showModal()}));lightbox.querySelector('button').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});lightbox.addEventListener('close',()=>activeImageLink?.focus());}

/* script.js for girly portfolio (projects + labs + modal + small interactions) */

/* --- Projects data (kept from your uploaded file) --- */
const PROJECTS = [
  {
    title: "Fintech Landing Page",
    desc: "A fully responsive fintech landing page designed with HTML, CSS, and JS.",
    imgs: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"]
  },
  {
    title: "Portfolio Website",
    desc: "My personal responsive portfolio built using vanilla JS and CSS grid.",
    imgs: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"]
  }
];

/* Render projects grid */
const projectsGrid = document.getElementById('projectsGrid');
if(projectsGrid){
  PROJECTS.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="project-thumb" style="background-image: url('${p.imgs[0]}'); background-size:cover; background-position:center;"></div>
      <h4>${p.title}</h4>
      <div class="muted">${p.desc}</div>
      <button class="btn primary open-project" type="button">View</button>
    `;
    projectsGrid.appendChild(card);
  });
}

/* --- Labs data (Lab 1 - Lab 5) --- */
const LABS = [
  { title:'Lab Activity 1', desc:'Web Introduction', link:'Laboratory Activities/lab1.html', thumb:'lab1.jpg' },
  { title:'Lab Activity 2', desc:'CSS Styling and Layout', link:'Laboratory Activities/lab2.html', thumb:'lab2.png' },
  { title:'Lab Activity 3', desc:'card hide', link:'Laboratory Activities/lab3.html', thumb:'lab3.png' },
  { title:'Lab Activity 4', desc:'card hover', link:'Laboratory Activities/lab4.html', thumb:'lab4.png' },
   { title:'Lab Activity 5', desc:'Toggle Darkmode', link:'Laboratory Activities/lab5.html', thumb:'lab5.png' },

];

const labsGrid = document.getElementById('labsGrid');
if(labsGrid){
  LABS.forEach(l=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="project-thumb" style="background-image: url('${l.thumb}'); background-size:cover; background-position:center;"></div>
      <h4>${l.title}</h4>
      <div class="muted">${l.desc}</div>
      <a class="btn ghost" href="${l.link}" target="_blank" rel="noopener">Open Lab</a>
    `;
    labsGrid.appendChild(el);
  });
}

/* --- Modal behavior (open project previews) --- */
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

document.addEventListener('click', (e) => {
  if (e.target.matches('.open-project')) {
    const card = e.target.closest('.card');
    const title = card.querySelector('h4')?.textContent || 'Project';
    const desc = card.querySelector('.muted')?.textContent || '';
    const imgStyle = card.querySelector('.project-thumb')?.getAttribute('style') || '';
    openModal({title, desc, imgStyle});
  }
});

function openModal(data){
  if(!modal) return;
  modal.setAttribute('aria-hidden','false');
  modalBody.innerHTML = `
    <div style="${data.imgStyle};height:220px;border-radius:10px;background-size:cover;background-position:center;margin-bottom:12px;"></div>
    <h3>${data.title}</h3>
    <p class="muted">${data.desc}</p>
  `;
}

function closeModal(){
  if(!modal) return;
  modal.setAttribute('aria-hidden','true');
  modalBody.innerHTML = '';
}
if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
window.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* --- Contact form basic feedback (Formspree handled by action) --- */
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    // let Formspree handle submission; show small feedback
    formMsg.textContent = 'Sending...';
    setTimeout(()=> formMsg.textContent = 'Thank you — your message was sent (Formspree).', 1200);
  });
}

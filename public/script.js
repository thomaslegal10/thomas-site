// Tema
const root = document.documentElement;
const key = 'pref-theme';
const applyTheme = (t) => root.setAttribute('data-theme', t);
const systemPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const saved = localStorage.getItem(key) || systemPref;
applyTheme(saved);
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const next = (root.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
  applyTheme(next); localStorage.setItem(key, next);
});

// Ano rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Animações de entrada
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('appear'); io.unobserve(e.target) }});
}, {threshold: .1});
document.querySelectorAll('.fade-up').forEach(el=> io.observe(el));

// Form -> mailto
function sendEmail(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('mensagem').value.trim();
  const assunto = encodeURIComponent('Contato via site — ' + nome);
  const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${msg}`);
  window.location.href = `mailto:thomas.sm1013@gmail.com?subject=${assunto}&body=${corpo}`;
}
window.sendEmail = sendEmail;

// Dados de projetos
const projects = [
  {
    id: 'ops-warehouse',
    title: 'WMS Corporativo — Estocagem e Controle',
    meta: 'Enterprise • .NET • SQL Server • Microsserviços',
    tags: ['.NET', 'SQL Server', 'Microsserviços'],
    filter: ['dotnet'],
    image: 'https://images.unsplash.com/photo-1586521995568-39ec9b1a8c3a?q=80&w=1200&auto=format&fit=crop',
    links: [{label: 'Detalhes', action: 'modal'}],
    description: `
      Plataforma de estocagem e controle de produtos com integrações corporativas.
      Migração de módulos OutSystems para .NET C# e React, melhoria de performance e estabilidade.
      Arquitetura baseada em microsserviços, mensageria e monitoramento.
    `
  },
  {
    id: 'cards-admin',
    title: 'Back-end Administradora de Cartões',
    meta: 'Serviços • .NET • React • AWS • RabbitMQ',
    tags: ['.NET', 'React', 'AWS', 'RabbitMQ'],
    filter: ['dotnet','react','cloud','node'],
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop',
    links: [{label: 'Detalhes', action: 'modal'}],
    description: `
      Desenvolvimento do core de serviços para administradora de cartões.
      APIs REST, integração com mensageria (RabbitMQ), esteiras CI/CD em AWS e front React.
    `
  },
  {
    id: 'esp-juridico',
    title: 'Espaider — Evolução de Performance',
    meta: 'Produto • .NET • SQL • Otimizações',
    tags: ['.NET', 'Entity Framework', 'SQL'],
    filter: ['dotnet'],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    links: [{label: 'Detalhes', action: 'modal'}],
    description: `
      Manutenção e evolução do software jurídico Espaider com foco em performance,
      refino de consultas e melhoria de experiência do usuário.
    `
  },
  {
    id: 'php-migrate',
    title: 'Migração PHP → .NET',
    meta: 'Consultoria • Replatform • EF • PostgreSQL',
    tags: ['C#', 'PostgreSQL', 'EF'],
    filter: ['dotnet'],
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    links: [{label: 'Detalhes', action: 'modal'}],
    description: `
      Reescrita de serviços legados em PHP para .NET com ganhos de performance,
      padronização e maior facilidade de manutenção.
    `
  },
  {
    id: 'freelance-portal',
    title: 'Portal Web Sob Demanda',
    meta: 'Freelancer • Node.js • React • Docker',
    tags: ['Node.js', 'React', 'Docker'],
    filter: ['node','react','cloud'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    links: [{label: 'Detalhes', action: 'modal'}],
    description: `
      Desenvolvimento full‑stack de portal sob demanda com autenticação, CRUDs,
      APIs REST e pipelines containerizados com Docker.
    `
  },
  {
    id: 'monitoring-cloud',
    title: 'Observabilidade em Cloud',
    meta: 'DevOps • AWS • Logs • Dashboards',
    tags: ['AWS', 'Observabilidade', 'DevOps'],
    filter: ['cloud'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    links: [{label: 'Detalhes', action: 'modal'}],
    description: `
      Implementação de logs estruturados, métricas e dashboards para serviços distribuídos,
      com alertas e acompanhamento de SLIs/SLOs.
    `
  }
];

// Remover inicialização de projetos enquanto a seção está oculta
// const grid = document.getElementById('projectsGrid');
// function renderProjects(filter = 'all'){ /* ... */ }
// renderProjects();
// document.querySelectorAll('.chip').forEach(/* ... */);

// const modal = document.getElementById('projectModal');
// const modalBody = document.getElementById('modalBody');
// const modalClose = document.getElementById('modalClose');
// function openModal(contentHtml){ /* ... */ }
// function closeModal(){ /* ... */ }
// if (modalClose) { modalClose.addEventListener('click', closeModal); }
// if (modal) {
//   modal.addEventListener('click', (e)=>{ if (e.target.matches('.modal-backdrop') || e.target.dataset.dismiss === 'modal') closeModal(); });
//   window.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.classList.contains('show')) closeModal() });
// }
// if (grid) {
//   grid.addEventListener('click', (e)=>{ /* ... */ });
// }

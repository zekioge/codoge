// ========================================
// CODOGE — main.js
// ========================================

// Mobile nav toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Works filter (isler.html)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Contact form (basic — no backend)
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  if (note) {
    note.textContent = 'Mesajınız alındı. En kısa sürede dönüş yapacağız.';
    e.target.reset();
  }
}

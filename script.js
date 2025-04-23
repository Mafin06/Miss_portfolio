// Плавное появление элементов при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);

});

document.querySelectorAll('.container').forEach(container => {
    observer.observe(container);

});

//плавный скролл
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
  });
  // scroll certain amounts from current position
  window.scrollBy({
    top: 100, // negative value acceptable
    left: 0,
    behavior: 'smooth'
  });
  // scroll to a certain element
  document.querySelector('.body').scrollIntoView({
    behavior: 'smooth'
  });
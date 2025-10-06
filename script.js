
// Small interactions for the template
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

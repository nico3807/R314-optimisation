// Script volontairement bloquant et non minifié
(function(){
  // Bloquer le thread principal ~2 secondes
  const start = performance.now();
  while (performance.now() - start < 2000) {}

  // Générer des données inutiles pour ralentir un peu
  const waste = [];
  for (let i=0;i<200000;i++) {
    waste.push(Math.random()*i);
  }
  window.__waste = waste; // fuite mémoire volontaire

  // Au chargement, marquer les images comme 'loaded' pour l'effet de fondu
  window.addEventListener('load', function(){
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach(img => {
      if (img.complete) img.classList.add('loaded');
      else img.addEventListener('load', ()=> img.classList.add('loaded'));
    });

    // Encore un petit blocage de 1s après le load (à supprimer par les étudiants)
    const t0 = performance.now();
    while (performance.now() - t0 < 1000) {}
  });
})();

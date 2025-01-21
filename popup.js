// Ecoute de l'événement "DOMContentLoaded" sur le document (la page web)
document.addEventListener("DOMContentLoaded", () => {
  // Récupération du bouton ayant la classe print__btn et  ecoute de l'événement "click" sur celui-ci
  document.querySelector("#print__btn").addEventListener("click", () => {
    // Extension chrome qui va agir sur l'onglet actif et la fenêtre qui est active
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Injection / éxécution de script dans l'onglet sélectionné
      chrome.scripting.executeScript({
        // Cibler l'onglet actif
        target: { tabId: tabs[0].id },
        // Fonction à éxécuter
        func: pagePrint,
      });
    });
  });
});

// Déclaration de la fonction pagePrint qui va permettre d'imprimer la page web
const pagePrint = () => {
  window.print();
};

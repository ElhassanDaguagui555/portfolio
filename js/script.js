document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');

  

    // Générer les cartes dynamiquement
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('portfolio-card');

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        portfolioGrid.appendChild(card);
    });
    
    
});

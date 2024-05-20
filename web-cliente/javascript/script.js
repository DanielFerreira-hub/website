const menuData = {
    pizza: [
        { name: 'Margherita', ingredients: 'Tomato, Mozzarella, Basil', price: '$10' },
        { name: 'Pepperoni', ingredients: 'Tomato, Mozzarella, Pepperoni', price: '$12' },
        { name: 'Hawaiian', ingredients: 'Tomato, Mozzarella, Ham, Pineapple', price: '$11' }
    ],
    salad: [
        { name: 'Caesar', ingredients: 'Romaine, Parmesan, Croutons, Caesar Dressing', price: '$8' },
        { name: 'Greek', ingredients: 'Tomato, Cucumber, Olives, Feta', price: '$9' },
        { name: 'Garden', ingredients: 'Lettuce, Tomato, Cucumber, Carrot', price: '$7' }
    ],
    starter: [
        { name: 'Bruschetta', ingredients: 'Tomato, Basil, Garlic, Olive Oil', price: '$6' },
        { name: 'Stuffed Mushrooms', ingredients: 'Mushrooms, Cheese, Garlic', price: '$7' },
        { name: 'Garlic Bread', ingredients: 'Bread, Garlic, Butter, Parsley', price: '$5' }
    ]
};

function showMenu(category) {
    const contentDiv = document.getElementById('menu-content');

    // Remove existing content
    contentDiv.innerHTML = '';
    contentDiv.classList.remove('show');

    menuData[category].forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item-description';

        const headerDiv = document.createElement('div');
        headerDiv.className = 'menu-item-header';

        const name = document.createElement('h3');
        name.textContent = item.name;
        headerDiv.appendChild(name);

        const price = document.createElement('span');
        price.textContent = item.price;
        headerDiv.appendChild(price);

        itemDiv.appendChild(headerDiv);

        const ingredients = document.createElement('p');
        ingredients.textContent = item.ingredients;
        itemDiv.appendChild(ingredients);

        contentDiv.appendChild(itemDiv);
    });

    // Delay adding the show class to allow the transition
    setTimeout(() => contentDiv.classList.add('show'), 10);

    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');
}

// Load pizza menu by default
document.addEventListener('DOMContentLoaded', () => {
    showMenu('pizza');
});

//https://www.youtube.com/watch?v=9eKao_SnXqU ve isto para animacao menu
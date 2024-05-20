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
    contentDiv.innerHTML = '';

    menuData[category].forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item-description';

        const name = document.createElement('h3');
        name.textContent = item.name;
        itemDiv.appendChild(name);

        const ingredients = document.createElement('p');
        ingredients.textContent = item.ingredients;
        itemDiv.appendChild(ingredients);

        const price = document.createElement('span');
        price.textContent = item.price;
        itemDiv.appendChild(price);

        contentDiv.appendChild(itemDiv);
    });

    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');
}
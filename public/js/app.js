const searchBtn = document.getElementById('search-btn');
const foodSearch = document.getElementById('food-search');
const locationSearch = document.getElementById('location-search');
const resultsContainer = document.querySelector('.results-container');

const dummyData = [
    // Hyderabad
    {
        dish: 'Chicken Biryani',
        restaurant: 'Paradise',
        swiggy: 350,
        zomato: 360,
        uberEats: 340,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Hyderabad'
    },
    {
        dish: 'Mutton Biryani',
        restaurant: 'Shadab',
        swiggy: 450,
        zomato: 460,
        uberEats: 440,
        image: 'https://media.istockphoto.com/id/1324838456/photo/mutton-biryani-with-raita-and-salad-served-in-a-dish-isolated-on-dark-background-side-view.jpg?s=612x612&w=0&k=20&c=j3Zn2-x9A-s82O4i-S5z0rTz-s3wJib3zX1x3WaXPk4=',
        location: 'Hyderabad'
    },
    {
        dish: 'Haleem',
        restaurant: 'Pista House',
        swiggy: 280,
        zomato: 270,
        uberEats: null,
        image: 'https://media.istockphoto.com/id/516248332/photo/haleem.jpg?s=612x612&w=0&k=20&c=FUXLg_Ua_w0Jh8UUNJeZg-zsdn_lG5D7flS0VlGeSE4=',
        location: 'Hyderabad'
    },
    {
        dish: 'Chicken 65',
        restaurant: 'Bawarchi',
        swiggy: 220,
        zomato: 210,
        uberEats: 230,
        image: 'https://media.istockphoto.com/id/1299135323/photo/chicken-65-spicy-deep-fried-indian-chicken-with-curry-leaves-and-chili-and-lemon-on-a.jpg?s=612x612&w=0&k=20&c=6PZ0h8hG5_iI0nGNMREQ1oQUk5k6d_2oF5oP2v9A_x0=',
        location: 'Hyderabad'
    },
    {
        dish: 'Qubani Ka Meetha',
        restaurant: 'Cafe Bahar',
        swiggy: 150,
        zomato: 160,
        uberEats: 145,
        image: 'https://media.istockphoto.com/id/1295329598/photo/idli-vada-sambar-and-chutney-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=S0B_0JbZkGsA3-X_C9Na_2N2JYm5jliW4v5XgV2jD5c=',
        location: 'Hyderabad'
    },
    {
        dish: 'Paneer Butter Masala',
        restaurant: 'Chutneys',
        swiggy: 320,
        zomato: 310,
        uberEats: 330,
        image: 'https://images.unsplash.com/photo-1603894584379-3e5b3b3b3b1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Hyderabad'
    },
    {
        dish: 'Irani Chai',
        restaurant: 'Nimrah Cafe',
        swiggy: 20,
        zomato: 20,
        uberEats: null,
        image: 'https://media.istockphoto.com/id/1295329598/photo/idli-vada-sambar-and-chutney-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=S0B_0JbZkGsA3-X_C9Na_2N2JYm5jliW4v5XgV2jD5c=',
        location: 'Hyderabad'
    },
    {
        dish: 'Pathar ka Gosht',
        restaurant: 'Hotel Shadab',
        swiggy: 480,
        zomato: 470,
        uberEats: 490,
        image: 'https://media.istockphoto.com/id/1295329598/photo/idli-vada-sambar-and-chutney-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=S0B_0JbZkGsA3-X_C9Na_2N2JYm5jliW4v5XgV2jD5c=',
        location: 'Hyderabad'
    },
    {
        dish: 'Veg Biryani',
        restaurant: 'Paradise',
        swiggy: 280,
        zomato: 290,
        uberEats: 270,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Hyderabad'
    },
    {
        dish: 'Kaju Paneer',
        restaurant: 'Ohri\'s',
        swiggy: 380,
        zomato: 370,
        uberEats: 390,
        image: 'https://images.unsplash.com/photo-1603894584379-3e5b3b3b3b1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Hyderabad'
    },
     // Bangalore
    {
        dish: 'Chicken Biryani',
        restaurant: 'Meghana Foods',
        swiggy: 320,
        zomato: 315,
        uberEats: 330,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Bangalore'
    },
    {
        dish: 'Masala Dosa',
        restaurant: 'CTR',
        swiggy: 100,
        zomato: 110,
        uberEats: 105,
        image: 'https://images.unsplash.com/photo-1626501142276-5357c363369a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Bangalore'
    },
    {
        dish: 'Mysore Masala Dosa',
        restaurant: 'Vidyarthi Bhavan',
        swiggy: 120,
        zomato: 125,
        uberEats: 115,
        image: 'https://media.istockphoto.com/id/1155484849/photo/masala-dosa-south-indian-food.jpg?s=612x612&w=0&k=20&c=swy5FpUP2N52Xkeq5i6R1hJss3yYAbYaxv_i30bYPb8=',
        location: 'Bangalore'
    },
    {
        dish: 'Idli Vada',
        restaurant: 'MTR',
        swiggy: 80,
        zomato: 85,
        uberEats: null,
        image: 'https://media.istockphoto.com/id/1295329598/photo/idli-vada-sambar-and-chutney-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=S0B_0JbZkGsA3-X_C9Na_2N2JYm5jliW4v5XgV2jD5c=',
        location: 'Bangalore'
    },
    {
        dish: 'Gobi Manchurian',
        restaurant: 'Beijing Bites',
        swiggy: 180,
        zomato: 170,
        uberEats: 190,
        image: 'https://media.istockphoto.com/id/1344440330/photo/gobi-manchurian-popular-indian-chinese-starter-dish.jpg?s=612x612&w=0&k=20&c=Iq2M5wR6qL25G-tXjLpmrUUMk-400iAFiT58yB7jFfA=',
        location: 'Bangalore'
    },
    {
        dish: 'Bisi Bele Bath',
        restaurant: 'Halli Mane',
        swiggy: 150,
        zomato: 140,
        uberEats: 160,
        image: 'https://media.istockphoto.com/id/1295329598/photo/idli-vada-sambar-and-chutney-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=S0B_0JbZkGsA3-X_C9Na_2N2JYm5jliW4v5XgV2jD5c=',
        location: 'Bangalore'
    },
    {
        dish: 'Donne Biryani',
        restaurant: 'Shivaji Military Hotel',
        swiggy: 250,
        zomato: 260,
        uberEats: null,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Bangalore'
    },
    {
        dish: 'Chicken Burger',
        restaurant: 'Truffles',
        swiggy: 350,
        zomato: 340,
        uberEats: 360,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Bangalore'
    },
    {
        dish: 'Neer Dosa',
        restaurant: 'Coastal Express',
        swiggy: 130,
        zomato: 120,
        uberEats: 140,
        image: 'https://images.unsplash.com/photo-1626501142276-5357c363369a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Bangalore'
    },
    {
        dish: 'Dal Makhani',
        restaurant: 'Punjab Grill',
        swiggy: 400,
        zomato: 390,
        uberEats: 410,
        image: 'https://images.unsplash.com/photo-1603894584379-3e5b3b3b3b1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        location: 'Bangalore'
    },
];

locationSearch.addEventListener('change', () => {
    const selectedLocation = locationSearch.value;
    foodSearch.disabled = false;
    foodSearch.innerHTML = '<option value="" disabled selected>Select a dish</option>';

    const dishes = [...new Set(dummyData
        .filter(item => item.location === selectedLocation)
        .map(item => item.dish)
    )].sort();

    dishes.forEach(dish => {
        const option = document.createElement('option');
        option.value = dish;
        option.textContent = dish;
        foodSearch.appendChild(option);
    });
});

const networkUrls = {
    swiggy: 'https://www.swiggy.com/',
    zomato: 'https://www.zomato.com/',
    ubereats: 'https://www.ubereats.com/'
};

searchBtn.addEventListener('click', () => {
    const searchTerm = foodSearch.value;
    const locationTerm = locationSearch.value;
    resultsContainer.innerHTML = '';

    if (!locationTerm) {
        resultsContainer.innerHTML = '<p>Please select a location.</p>';
        return;
    }

    if (!searchTerm) {
        resultsContainer.innerHTML = '<p>Please select a dish.</p>';
        return;
    }

    const filteredData = dummyData.filter(item => 
        item.dish === searchTerm && item.location === locationTerm
    );

    if (filteredData.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    filteredData.forEach(item => {
        const prices = [
            { network: 'Swiggy', price: item.swiggy },
            { network: 'Zomato', price: item.zomato },
            { network: 'Uber Eats', price: item.uberEats }
        ].filter(x => x.price).sort((a, b) => a.price - b.price);

        const priceList = prices.map(p => `<li>${p.network}: ₹${p.price}</li>`).join('');

        const resultCard = `
            <div class="result-card">
                <img src="${item.image}" alt="${item.dish}">
                <h3>${item.dish} - ${item.restaurant}</h3>
                <ul>${priceList}</ul>
                <a href="#" class="redirect-link" data-network="${prices[0].network.toLowerCase()}">Order from ${prices[0].network}</a>
            </div>
        `;
        resultsContainer.innerHTML += resultCard;
    });
});

resultsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('redirect-link')) {
        e.preventDefault();
        const network = e.target.dataset.network;
        const url = networkUrls[network];
        if (url) {
            window.open(url, '_blank');
        }
    }
}); 
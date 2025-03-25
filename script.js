// Sample Data for Restaurants and Menu Items
const restaurants = [
    {
      id: "restaurant-1",
      name: "Tula's Cafeteria",
      image: "https://images.shiksha.com/mediadata/images/1495624985phpo6bo6S_205x160.png",
      rating: "⭐⭐⭐⭐⭐",
      description: "Best Food All Over Universities",
    },
    {
      id: "restaurant-2",
      name: "KFC",
      image: "https://content3.jdmagicbox.com/comp/def_content_category/kfc/274744306-5359482000748984-6753959334173458855-n-kfc-1008-6k5wh.jpg",
      rating: "⭐⭐⭐⭐",
      description: "It's Finger Lickin' Good!",
    },
    {
        id: "restaurant-3",
        name: "Tons Food Park",
        image: "https://b.zmtcdn.com/data/pictures/8/20341268/846bc98c4d14ddc4730df535b20e61d4.jpg",
        rating: "⭐⭐⭐⭐",
        description: "Where Every Bites Tells A Story",
      },
      {
        id: "restaurant-4",
        name: "Yours Bawarchi",
        image: "https://content.jdmagicbox.com/v2/comp/dehradun/y2/9999px135.x135.231221140056.s6y2/catalogue/ur-s-bawarchi-selaqui-dehradun-indian-restaurants-4a60gowyki.jpg",
        rating: "⭐⭐⭐⭐",
        description: "Every Bite Is Masterpiece!",
      },
      {
        id: "restaurant-5",
        name: "MOM's KITCHEN",
        image: "https://content.jdmagicbox.com/comp/nandyal/l6/9999p8514.8514.210310151558.c4l6/catalogue/-4k1eaie046.jpg",
        rating: "⭐⭐⭐⭐",
        description: "Flavour that brings you HOME!",
      },
      {
      id: "restaurant-6",
      name: "Doon Darbar",
      image: "https://b.zmtcdn.com/data/pictures/9/20434769/859e595290be57d0e8438d321d37f8f1.jpg",
      rating: "⭐⭐⭐⭐",
      description: "Spend Your Quality Time With Quality!",
    },

   
  ];
  
  // Function to display restaurants on the main page
  function displayRestaurants() {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';
  
    restaurants.forEach(restaurant => {
      const card = document.createElement('div');
      card.classList.add('restaurant-card');
      card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}">
        <h3>${restaurant.name}</h3>
        <p class="rating">${restaurant.rating}</p>
        <p>${restaurant.description}</p>
        <button onclick="viewRestaurant('${restaurant.id}')">View Menu</button>
      `;
      restaurantList.appendChild(card);
    });
  }
  
  // Function to redirect to the restaurant menu page
  function viewRestaurant(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (restaurant) {
      localStorage.setItem("selectedRestaurant", JSON.stringify(restaurant));
      window.location.href = "restaurant.html";
    }
  }
  // Initialize the restaurant list on page load
  window.onload = displayRestaurants;
  
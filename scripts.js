const restaurants = [
    { name: "Ocean Breeze", cuisine: "local", rating: 4.5, distance: "0.5 miles", description: "Fresh seafood and local dishes." },
    { name: "Sunset Grill", cuisine: "american", rating: 4.0, distance: "1.2 miles", description: "Classic American comfort food." },
    { name: "Spice Route", cuisine: "pan-asian", rating: 4.7, distance: "0.8 miles", description: "Diverse Pan-Asian flavors." },
    { name: "Lotus Garden", cuisine: "pan-asian", rating: 4.6, distance: "1.0 miles", description: "Serene dining experience with a variety of sushi, stir-fries, and noodle dishes." }
];

const lodgings = [
    { name: "Island Resort", type: "resort", rating: 4.8, distance: "0.5 miles", description: "Luxurious beach resort with all-inclusive amenities." },
    { name: "Cozy B&B", type: "bnb", rating: 4.5, distance: "1.2 miles", description: "Charming bed and breakfast with cozy rooms and homemade breakfast." },
    { name: "Downtown Hotel", type: "hotel", rating: 4.3, distance: "0.8 miles", description: "Modern hotel in the heart of the city, close to all attractions." },
    { name: "Backpackers Hostel", type: "hostel", rating: 4.0, distance: "1.0 miles", description: "Affordable hostel for backpackers with shared rooms and social events." }
];

const entertainments = [
    { name: "Beach Volleyball", type: "beach", description: "Join a game of beach volleyball on the pristine sands of Taniti's beaches." },
    { name: "Night Club", type: "nightlife", description: "Dance the night away at Taniti's hottest night club with top DJs and live music." },
    { name: "Rainforest Hike", type: "rainforest", description: "Explore the lush rainforests of Taniti on a guided hiking tour." },
    { name: "Beach Bonfire", type: "beach", description: "Enjoy a relaxing evening with a beach bonfire, music, and friends." }
];

const sightseeing = [
    { name: "Volcano Hike", type: "volcano", description: "Explore the majestic volcanoes with guided tours and stunning views." },
    { name: "Rainforest Expedition", type: "rainforest",description: "Dive into the lush rainforest, home to exotic flora and fauna." },
    { name: "Beachfront Tour", type: "beach", description: "Relax and enjoy the beautiful beaches with golden sands and crystal-clear waters." }
];

const transportation = [
    { name: "Public Buses", type: "bus", description: "Affordable and reliable bus services connecting all major areas of Taniti Island.", cost: "$2 per ride" },
    { name: "Taxis", type: "taxi", description: "Convenient taxi services available 24/7 throughout the island.", cost: "$10 per ride" },
    { name: "Rental Cars", type: "rental", description: "Wide range of rental cars available to suit your travel needs.", cost: "Starting from $30 per day" },
    { name: "Bike Rentals", type: "bike", description: "Eco-friendly bike rentals to explore the island at your own pace.", cost: "$5 per hour" }
];

const info = [
    { name: "Climate", description: "Taniti Island has a tropical climate with warm temperatures year-round." },
    { name: "Currency", description: "The official currency of Taniti Island is the United States Dollar." },
    { name: "Language", description: "The official language is Tanitian, but English is widely spoken." },
    { name: "Time Zone", description: "Taniti Island follows the Pacific Standard Time (PST)." },
    { name: "Outlets", description: "Power outlets are 120 volts (the same as in the United States)." },
    { name: "Drinking", description: "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. "}
];

function search() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const sections = document.querySelectorAll('.panel');
    let found = false;

    sections.forEach(sec => {
        const content = sec.textContent.toLowerCase();
        if (content.includes(query)) {
            sec.previousElementSibling.classList.add('active');
            sec.style.display = "block";
            found = true;
        } else {
            sec.previousElementSibling.classList.remove('active');
            sec.style.display = "none";
        }
    });

    if (!found) {
        const home = document.getElementById('home');
        home.classList.add('active');
    }
}

function filterInfo(name) {
    const filteredInfo = info.filter(info => info.name === name);
    displayInfo(filteredInfo);
}

function displayInfo(info) {
    const infoList = document.getElementById('info-list');
    infoList.innerHTML = "";
    info.forEach(info => {
        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');
        infoCard.innerHTML = `
            <button class="accordion">${info.name}</button>
            <div class="panel">
                <h3>${info.name}</h3>
                <p>${info.description}</p>
            </div>
        `;
        infoList.appendChild(infoCard);
    });
    addAccordionFunctionality();
}
function filterTransportation(type) {
    const filteredTransportation = transportation.filter(transport => transport.type === type);
    displayTransportation(filteredTransportation);
}

function displayTransportation(transportation) {
    const transportationList = document.getElementById('transportation-list');
    transportationList.innerHTML = "";
    transportation.forEach(transport => {
        const transportCard = document.createElement('div');
        transportCard.classList.add('transport-card');
        transportCard.innerHTML = `
            <button class="accordion">${transport.name}</button>
            <div class="panel">
                <h3>${transport.name}</h3>
                <p>${transport.description}</p>
                <p>Cost: ${transport.cost}</p>
            </div>
        `;
        transportationList.appendChild(transportCard);
    });
    addAccordionFunctionality();
}

function filterCuisine(cuisine) {
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.cuisine === cuisine);
    displayRestaurants(filteredRestaurants);
}

function displayRestaurants(restaurants) {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = "";
    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.classList.add('restaurant-card');
        restaurantCard.innerHTML = `
            <button class="accordion">${restaurant.name}</button>
            <div class="panel">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.description}</p>
                <p>Cuisine: ${restaurant.cuisine}</p>
                <p>Rating: ${restaurant.rating}</p>
                <p>Distance: ${restaurant.distance}</p>
            </div>
        `;
        restaurantList.appendChild(restaurantCard);
    });
    addAccordionFunctionality();
}

function filterLodging(type) {
    const filteredLodgings = lodgings.filter(lodging => lodging.type === type);
    displayLodgings(filteredLodgings);
}

function displayLodgings(lodgings) {
    const lodgingList = document.getElementById('lodging-list');
    lodgingList.innerHTML = "";
    lodgings.forEach(lodging => {
        const lodgingCard = document.createElement('div');
        lodgingCard.classList.add('lodging-card');
        lodgingCard.innerHTML = `
            <button class="accordion">${lodging.name}</button>
            <div class="panel">
                <h3>${lodging.name}</h3>
                <p>${lodging.description}</p>
                <p>Type: ${lodging.type}</p>
                <p>Rating: ${lodging.rating}</p>
                <p>Distance: ${lodging.distance}</p>
            </div>
        `;
        lodgingList.appendChild(lodgingCard);
    });
    addAccordionFunctionality();
}

function  filterSightseeing(type){
    const filteredSightseeing = sightseeing.filter(sightseeing => sightseeing.type === type);
    displaySightseeing(filteredSightseeing);
}
function displaySightseeing(sightseeing) {
    const sightseeingList = document.getElementById('sightseeing-list');
    sightseeingList.innerHTML = "";
    sightseeing.forEach(sightseeing => {
        const sightseeingCard = document.createElement('div');
        sightseeingCard.classList.add('sightseeing-card');
        sightseeingCard.innerHTML = `
            <button class="accordion">${sightseeing.name}</button>
            <div class="panel">
                <h3>${sightseeing.name}</h3>
                <p>${sightseeing.description}</p>
            </div>
        `;
        sightseeingList.appendChild(sightseeingCard);
    });
    addAccordionFunctionality();
}


function filterEntertainment(type) {
    const filteredEntertainments = entertainments.filter(entertainment => entertainment.type === type);
    displayEntertainments(filteredEntertainments);
}


function displayEntertainments(entertainments) {
    const entertainmentList = document.getElementById('entertainment-list');
    entertainmentList.innerHTML = "";
    entertainments.forEach(entertainment => {
        const entertainmentCard = document.createElement('div');
        entertainmentCard.classList.add('entertainment-card');
        entertainmentCard.innerHTML = `
            <button class="accordion">${entertainment.name}</button>
            <div class="panel">
                <h3>${entertainment.name}</h3>
                <p>${entertainment.description}</p>
                <p>Type: ${entertainment.type}</p>
            </div>
        `;
        entertainmentList.appendChild(entertainmentCard);
    });
    addAccordionFunctionality();
}


function addAccordionFunctionality() {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

function navigate(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    const section = document.getElementById(sectionId);
    section.classList.add('active');

    if (sectionId === 'restaurants') {
        displayRestaurants(restaurants);
    }else if (sectionId === 'lodging') {
        displayLodgings(lodgings);
    }else if (sectionId === 'entertainment') {
        displayEntertainments(entertainments);
    }else if (sectionId === 'sightseeing') {
        displaySightseeing(sightseeing);
    }else if (sectionId === 'transportation') {
        displayTransportation(transportation);
    }else if (sectionId === 'info') {
        displayInfo(info);
    }
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
    displayRestaurants(restaurants);
});

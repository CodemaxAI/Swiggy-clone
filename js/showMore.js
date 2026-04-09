document.addEventListener('DOMContentLoaded', () => {
    const handleShowMore = (buttonId, additionalItems) => {
        const showMoreBtn = document.getElementById(buttonId);
        if (!showMoreBtn) return;
        const gridContainer = showMoreBtn.parentElement;

        showMoreBtn.addEventListener('click', () => {
            showMoreBtn.remove();
            
            additionalItems.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'mcu-item';
                itemDiv.textContent = item;
                gridContainer.appendChild(itemDiv);
            });
        });
    };

    const additionalCities = [
        "Best Restaurants in Kochi",
        "Best Restaurants in Surat",
        "Best Restaurants in Bhubaneswar",
        "Best Restaurants in Dehradun",
        "Best Restaurants in Ludhiana",
        "Best Restaurants in Mangaluru",
        "Best Restaurants in Bhopal",
        "Best Restaurants in Gurgaon",
        "Best Restaurants in Patna",
        "Best Restaurants in Coimbatore",
        "Best Restaurants in Agra",
        "Best Restaurants in Noida",
        "Best Restaurants in Vijayawada",
        "Best Restaurants in Mysore",
        "Best Restaurants in Pondicherry",
        "Best Restaurants in Udaipur",
        "Best Restaurants in Vadodara",
        "Best Restaurants in Guwahati",
        "Best Restaurants in Ranchi",
        "Best Restaurants in Vizag",
        "Best Restaurants in Thiruvananthapuram"
    ];

    const additionalCuisines = [
        "Japanese Restaurant Near Me",
        "Arabian Restaurant Near Me",
        "Biryani Restaurant Near Me",
        "Jain Restaurant Near Me",
        "Gujarati Restaurant Near Me",
        "Thai Restaurant Near Me",
        "Fast Food Restaurant Near Me",
        "Pizzas Restaurant Near Me",
        "Cafe Restaurant Near Me",
        "Continental Restaurant Near Me",
        "Asian Restaurant Near Me",
        "Mughlai Restaurant Near Me",
        "Sushi Restaurant Near Me",
        "Mangalorean Restaurant Near Me",
        "Mexican Restaurant Near Me",
        "Tibetan Restaurant Near Me",
        "Maharashtrian Restaurant Near Me",
        "Nepalese Restaurant Near Me",
        "Barbecue Restaurant Near Me",
        "Turkish Restaurant Near Me",
        "Rajasthani Restaurant Near Me"
    ];

    handleShowMore('showMore-city', additionalCities);
    handleShowMore('showMore-cuisine', additionalCuisines);
});
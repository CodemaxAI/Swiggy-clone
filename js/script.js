document.addEventListener('DOMContentLoaded', () => {
    // food scroll
    const foodWrapper = document.querySelector('.food-wrapper');
    const foodWrap = document.querySelector('.food-wrap');
    const foodScrollButtons = document.querySelectorAll('.food-items-head .scroll-button');

    const foodLeftButton = foodScrollButtons[0];
    const foodRightButton = foodScrollButtons[1];

    // Calculate scroll amount for 4 items (width of four food items + gaps)
    const itemWidth = 144; // image width
    const itemGap = 26;  // gap between items
    const itemsToScroll = 4;
    const foodScrollAmount = (itemWidth + itemGap) * itemsToScroll;

    foodLeftButton.addEventListener('click', () => {
        foodWrap.scrollLeft -= foodScrollAmount;
        updateFoodButtonVisibility();
    });

    foodRightButton.addEventListener('click', () => {
        foodWrap.scrollLeft += foodScrollAmount;
        updateFoodButtonVisibility();
    });

    const updateFoodButtonVisibility = () => {
        const isAtStart = foodWrap.scrollLeft <= 0;
        foodLeftButton.style.opacity = isAtStart ? '0.5' : '1';
        foodLeftButton.style.cursor = isAtStart ? 'default' : 'pointer';
        
        const maxScroll = foodWrap.scrollWidth - foodWrap.clientWidth;
        const isAtEnd = Math.ceil(foodWrap.scrollLeft) >= Math.floor(maxScroll);
        foodRightButton.style.opacity = isAtEnd ? '0.5' : '1';
        foodRightButton.style.cursor = isAtEnd ? 'default' : 'pointer';
    };

    foodWrap.addEventListener('scroll', updateFoodButtonVisibility);

    updateFoodButtonVisibility();

    
    // Restaurant scroll 
    const restaurantWrapper = document.querySelector('.restaurant-wrapper');
    const restaurantWrap = document.querySelector('.restaurant-wrap');
    const restaurantScrollButtons = document.querySelectorAll('.restaurants-items-head .scroll-button');
    const scrollIndicatorBar = document.querySelector('.scroll-indicator-bar');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const restaurantLeftButton = restaurantScrollButtons[0];
    const restaurantRightButton = restaurantScrollButtons[1];

    // Calculate scroll amount for restaurants (width of three restaurant items + gaps)
    const restaurantItemWidth = 273; // restaurant card width
    const restaurantItemGap = 25;  // gap between restaurant cards
    const restaurantsToScroll = 3;
    const restaurantScrollAmount = (restaurantItemWidth + restaurantItemGap) * restaurantsToScroll;

    const updateScrollIndicator = () => {
        const maxScroll = restaurantWrap.scrollWidth - restaurantWrap.clientWidth;
        const scrollPercentage = Math.min((restaurantWrap.scrollLeft / maxScroll), 1) * (scrollIndicator.clientWidth - scrollIndicatorBar.clientWidth);
        scrollIndicatorBar.style.left = `${scrollPercentage}px`;
    };

    restaurantLeftButton.addEventListener('click', () => {
        restaurantWrap.scrollLeft -= restaurantScrollAmount;
        updateRestaurantButtonVisibility();
        updateScrollIndicator();
    });

    restaurantRightButton.addEventListener('click', () => {
        restaurantWrap.scrollLeft += restaurantScrollAmount;
        updateRestaurantButtonVisibility();
        updateScrollIndicator();
    });

    const updateRestaurantButtonVisibility = () => {
        const isAtStart = restaurantWrap.scrollLeft <= 0;
        restaurantLeftButton.style.opacity = isAtStart ? '0.5' : '1';
        restaurantLeftButton.style.cursor = isAtStart ? 'default' : 'pointer';
        
        const maxScroll = restaurantWrap.scrollWidth - restaurantWrap.clientWidth;
        const isAtEnd = Math.ceil(restaurantWrap.scrollLeft) >= Math.floor(maxScroll);
        restaurantRightButton.style.opacity = isAtEnd ? '0.5' : '1';
        restaurantRightButton.style.cursor = isAtEnd ? 'default' : 'pointer';
    };

    restaurantWrap.addEventListener('scroll', () => {
        updateRestaurantButtonVisibility();
        updateScrollIndicator();
    });

    updateRestaurantButtonVisibility();
    updateScrollIndicator();
}); 
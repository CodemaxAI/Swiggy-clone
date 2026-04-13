document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterPopup = document.getElementById('filter-popup');
    
    let isFilterOpen = false;
    
    const createFilterPopup = () => {
        return `
            <div class="filter-popup-overlay">
                <div class="filter-container">
                    <div class="filter-header">
                        <h2>Filter</h2>
                        <button class="close-filter"><i class='bx bx-x'></i></button>
                    </div>
                    <div class="filter-content">
                        <div class="filter-sidebar">
                            <div class="sidebar-item active">Sort</div>
                            <div class="sidebar-item">Delivery Time</div>
                            <div class="sidebar-item">Cuisines</div>
                            <div class="sidebar-item">Explore</div>
                            <div class="sidebar-item">Ratings</div>
                            <div class="sidebar-item">Veg/Non-Veg</div>
                            <div class="sidebar-item">Offers</div>
                            <div class="sidebar-item">Cost for Two</div>
                        </div>
                        <div class="filter-main">
                            <div class="filter-section active">
                                <h3>SORT BY</h3>
                                <div class="filter-options">
                                    <div class="filter-option">
                                        <input type="radio" id="relevance" name="sort" checked>
                                        <label for="relevance">Relevance (Default)</label>
                                    </div>
                                    <div class="filter-option">
                                        <input type="radio" id="delivery" name="sort">
                                        <label for="delivery">Delivery Time</label>
                                    </div>
                                    <div class="filter-option">
                                        <input type="radio" id="rating" name="sort">
                                        <label for="rating">Rating</label>
                                    </div>
                                    <div class="filter-option">
                                        <input type="radio" id="cost-low" name="sort">
                                        <label for="cost-low">Cost: Low to High</label>
                                    </div>
                                    <div class="filter-option">
                                        <input type="radio" id="cost-high" name="sort">
                                        <label for="cost-high">Cost: High to Low</label>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="filter-section">
                                <h3>FILTER BY</h3>
                                <div class="filter-options">
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="fast-delivery" name="fast-delivery">
                                        <label for="fast-delivery">Fast Delivery</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-section">
                                <h3>FILTER BY CUISINES</h3>
                                <div class="filter-options">
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="afghani" name="cuisine">
                                        <label for="afghani">Afghani</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="american" name="cuisine">
                                        <label for="american">American</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="andhra" name="cuisine">
                                        <label for="andhra">Andhra</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="arabian" name="cuisine">
                                        <label for="arabian">Arabian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="asian" name="cuisine">
                                        <label for="asian">Asian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="assamese" name="cuisine">
                                        <label for="assamese">Assamese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="awadhi" name="cuisine">
                                        <label for="awadhi">Awadhi</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="bakery" name="cuisine">
                                        <label for="bakery">Bakery</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="barbecue" name="cuisine">
                                        <label for="barbecue">Barbecue</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="bengali" name="cuisine">
                                        <label for="bengali">Bengali</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="beverages" name="cuisine">
                                        <label for="beverages">Beverages</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="bihari" name="cuisine">
                                        <label for="bihari">Bihari</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="biryani" name="cuisine">
                                        <label for="biryani">Biryani</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="british" name="cuisine">
                                        <label for="british">British</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="bubble-tea" name="cuisine">
                                        <label for="bubble-tea">Bubble Tea</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="buffalo-meat" name="cuisine">
                                        <label for="buffalo-meat">Buffalo meat</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="burger" name="cuisine">
                                        <label for="burger">Burger</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="burgers" name="cuisine">
                                        <label for="burgers">Burgers</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="burmese" name="cuisine">
                                        <label for="burmese">Burmese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="cafe" name="cuisine">
                                        <label for="cafe">Cafe</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="cakes" name="cuisine">
                                        <label for="cakes">Cakes</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="cakes-and-pastries" name="cuisine">
                                        <label for="cakes-and-pastries">Cakes and Pastries</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="chaat" name="cuisine">
                                        <label for="chaat">Chaat</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="chettinad" name="cuisine">
                                        <label for="chettinad">Chettinad</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="chinese" name="cuisine">
                                        <label for="chinese">Chinese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="coastal" name="cuisine">
                                        <label for="coastal">Coastal</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="coffee" name="cuisine">
                                        <label for="coffee">Coffee</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="combo" name="cuisine">
                                        <label for="combo">Combo</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="combos" name="cuisine">
                                        <label for="combos">Combos</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="continental" name="cuisine">
                                        <label for="continental">Continental</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="dessert" name="cuisine">
                                        <label for="dessert">Dessert</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="desserts" name="cuisine">
                                        <label for="desserts">Desserts</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="egg" name="cuisine">
                                        <label for="egg">Egg</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="european" name="cuisine">
                                        <label for="european">European</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="fast-food" name="cuisine">
                                        <label for="fast-food">Fast Food</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="french" name="cuisine">
                                        <label for="french">French</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="goan" name="cuisine">
                                        <label for="goan">Goan</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="grill" name="cuisine">
                                        <label for="grill">Grill</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="gujarati" name="cuisine">
                                        <label for="gujarati">Gujarati</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="haleem" name="cuisine">
                                        <label for="haleem">Haleem</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="healthy" name="cuisine">
                                        <label for="healthy">Healthy</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="healthy-food" name="cuisine">
                                        <label for="healthy-food">Healthy Food</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="home-food" name="cuisine">
                                        <label for="home-food">Home food</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="hyderabadi" name="cuisine">
                                        <label for="hyderabadi">Hyderabadi</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="ice-cream" name="cuisine">
                                        <label for="ice-cream">Ice Cream</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="ice-cream-cakes" name="cuisine">
                                        <label for="ice-cream-cakes">Ice Cream Cakes</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="indian" name="cuisine">
                                        <label for="indian">Indian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="indonesian" name="cuisine">
                                        <label for="indonesian">Indonesian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="italian" name="cuisine">
                                        <label for="italian">Italian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="italian-american" name="cuisine">
                                        <label for="italian-american">Italian-American</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="jain" name="cuisine">
                                        <label for="jain">Jain</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="japanese" name="cuisine">
                                        <label for="japanese">Japanese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="jar-cakes" name="cuisine">
                                        <label for="jar-cakes">Jar Cakes</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="juice-and-shake" name="cuisine">
                                        <label for="juice-and-shake">Juice and shake</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="juices" name="cuisine">
                                        <label for="juices">Juices</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="kashmiri" name="cuisine">
                                        <label for="kashmiri">Kashmiri</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="kebabs" name="cuisine">
                                        <label for="kebabs">Kebabs</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="kerala" name="cuisine">
                                        <label for="kerala">Kerala</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="keto" name="cuisine">
                                        <label for="keto">Keto</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="korean" name="cuisine">
                                        <label for="korean">Korean</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="lebanese" name="cuisine">
                                        <label for="lebanese">Lebanese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="lucknowi" name="cuisine">
                                        <label for="lucknowi">Lucknowi</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="maharashtrian" name="cuisine">
                                        <label for="maharashtrian">Maharashtrian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="malaysian" name="cuisine">
                                        <label for="malaysian">Malaysian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="mangalorean" name="cuisine">
                                        <label for="mangalorean">Mangalorean</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="meat" name="cuisine">
                                        <label for="meat">Meat</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="mediterranean" name="cuisine">
                                        <label for="mediterranean">Mediterranean</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="mexican" name="cuisine">
                                        <label for="mexican">Mexican</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="middle-eastern" name="cuisine">
                                        <label for="middle-eastern">Middle Eastern</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="milkshakes" name="cuisine">
                                        <label for="milkshakes">Milkshakes</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="momos" name="cuisine">
                                        <label for="momos">Momos</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="mughlai" name="cuisine">
                                        <label for="mughlai">Mughlai</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="naga" name="cuisine">
                                        <label for="naga">Naga</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="navratri-special" name="cuisine">
                                        <label for="navratri-special">Navratri Special</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="nepalese" name="cuisine">
                                        <label for="nepalese">Nepalese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="north-eastern" name="cuisine">
                                        <label for="north-eastern">North Eastern</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="north-indian" name="cuisine">
                                        <label for="north-indian">North Indian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="north-indian-paratha" name="cuisine">
                                        <label for="north-indian-paratha">North Indian Paratha</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="oriental" name="cuisine">
                                        <label for="oriental">Oriental</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="paan" name="cuisine">
                                        <label for="paan">Paan</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="pan-asian" name="cuisine">
                                        <label for="pan-asian">Pan-Asian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="paneer" name="cuisine">
                                        <label for="paneer">Paneer</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="parathas" name="cuisine">
                                        <label for="parathas">Parathas</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="parsi" name="cuisine">
                                        <label for="parsi">Parsi</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="pastas" name="cuisine">
                                        <label for="pastas">Pastas</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="pav-bhaji" name="cuisine">
                                        <label for="pav-bhaji">Pav Bhaji</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="persian" name="cuisine">
                                        <label for="persian">Persian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="pizzas" name="cuisine">
                                        <label for="pizzas">Pizzas</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="portuguese" name="cuisine">
                                        <label for="portuguese">Portuguese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="punjabi" name="cuisine">
                                        <label for="punjabi">Punjabi</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="pure-veg" name="cuisine">
                                        <label for="pure-veg">Pure Veg</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="rajasthani" name="cuisine">
                                        <label for="rajasthani">Rajasthani</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="ramzan-special" name="cuisine">
                                        <label for="ramzan-special">Ramzan Special</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="rolls" name="cuisine">
                                        <label for="rolls">Rolls</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="rolls-wraps" name="cuisine">
                                        <label for="rolls-wraps">Rolls & Wraps</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="salads" name="cuisine">
                                        <label for="salads">Salads</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="sandwich" name="cuisine">
                                        <label for="sandwich">Sandwich</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="seafood" name="cuisine">
                                        <label for="seafood">Seafood</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="shawarma" name="cuisine">
                                        <label for="shawarma">Shawarma</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="singaporean" name="cuisine">
                                        <label for="singaporean">Singaporean</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="snacks" name="cuisine">
                                        <label for="snacks">Snacks</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="south-american" name="cuisine">
                                        <label for="south-american">South American</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="south-indian" name="cuisine">
                                        <label for="south-indian">South Indian</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="sri-lankan" name="cuisine">
                                        <label for="sri-lankan">Sri Lankan</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="steakhouse" name="cuisine">
                                        <label for="steakhouse">Steakhouse</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="street-food" name="cuisine">
                                        <label for="street-food">Street Food</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="sushi" name="cuisine">
                                        <label for="sushi">Sushi</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="sweets" name="cuisine">
                                        <label for="sweets">Sweets</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="tandoor" name="cuisine">
                                        <label for="tandoor">Tandoor</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="tandoori" name="cuisine">
                                        <label for="tandoori">Tandoori</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="tea" name="cuisine">
                                        <label for="tea">Tea</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="tex-mex" name="cuisine">
                                        <label for="tex-mex">Tex-Mex</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="thai" name="cuisine">
                                        <label for="thai">Thai</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="thalis" name="cuisine">
                                        <label for="thalis">Thalis</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="tibetan" name="cuisine">
                                        <label for="tibetan">Tibetan</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="tribal" name="cuisine">
                                        <label for="tribal">Tribal</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="turkish" name="cuisine">
                                        <label for="turkish">Turkish</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="vietnamese" name="cuisine">
                                        <label for="vietnamese">Vietnamese</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="waffle" name="cuisine">
                                        <label for="waffle">Waffle</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="wrap" name="cuisine">
                                        <label for="wrap">Wrap</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-section">
                                <h3>FILTER BY</h3>
                                <div class="filter-options">
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="new-on-swiggy" name="new-on-swiggy">
                                        <label for="new-on-swiggy">New on Swiggy</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-section">
                                <h3>FILTER BY</h3>
                                <div class="filter-options">
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="rating-4-5" name="rating">
                                        <label for="rating-4-5">Ratings 4.5+</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="rating-4-0" name="rating">
                                        <label for="rating-4-0">Ratings 4.0+</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="rating-3-5" name="rating">
                                        <label for="rating-3-5">Ratings 3.5+</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-section">
                                <h3>FILTER BY</h3>
                                <div class="filter-options">
                                    <div class="filter-option">
                                        <input type="radio" id="pure-vege" name="veg-type">
                                        <label for="pure-vege">Pure Veg</label>
                                    </div>
                                    <div class="filter-option">
                                        <input type="radio" id="non-veg" name="veg-type">
                                        <label for="non-veg">Non Veg</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-section">
                                <h3>RESTAURANTS WITH</h3>
                                <div class="filter-options">
                                    <div class="filter-option">
                                        <input type="radio" id="offers-all" name="offers">
                                        <label for="offers-all">All Offers</label>
                                    </div>
                                    <div class="filter-option">
                                        <input type="radio" id="offers-deals" name="offers">
                                        <label for="offers-deals">Deals & Discounts</label>
                                    </div>
                                    <div class="filter-option">
                                        <input type="radio" id="offers-free-delivery" name="offers">
                                        <label for="offers-free-delivery">Free Delivery</label>
                                    </div>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h3>FILTER BY</h3>
                                <div class="filter-options">
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="cost-less-300" name="cost">
                                        <label for="cost-less-300">Less than Rs. 300</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="cost-300-600" name="cost">
                                        <label for="cost-300-600">Rs. 300 - Rs. 600</label>
                                    </div>
                                    <div class="filter-option checkbox">
                                        <input type="checkbox" id="cost-more-600" name="cost">
                                        <label for="cost-more-600">Greater than Rs. 600</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="filter-footer">
                        <button class="clear-filters">Clear Filters</button>
                        <button class="apply-filters">Apply</button>
                    </div>
                </div>
            </div>
        `;
    };
    
    // open filter popup
    function openFilter() {
        if (!isFilterOpen) {
            const sortbyContainer = document.getElementById('sortby');
            if (sortbyContainer && sortbyContainer.style.display === 'block') {
                sortbyContainer.innerHTML = '';
                sortbyContainer.style.display = 'none';
                window.isDropdownOpen = false;
            }
            
            filterPopup.innerHTML = createFilterPopup();
            filterPopup.style.display = 'block';
            
            const closeBtn = document.querySelector('.close-filter');
            closeBtn.addEventListener('click', closeFilter);
            
            const applyBtn = document.querySelector('.apply-filters');
            applyBtn.addEventListener('click', closeFilter);
            
            const clearBtn = document.querySelector('.clear-filters');
            clearBtn.disabled = true;
            clearBtn.style.color = '#555';
            clearBtn.style.cursor = 'not-allowed';
            
            clearBtn.addEventListener('click', function() {
                if (this.disabled) return;
                
                // Reset all radio buttons and checkboxes
                const allInputs = document.querySelectorAll('.filter-option input');
                allInputs.forEach(input => {
                    if (input.id === 'relevance') {
                        input.checked = true;
                    } else {
                        input.checked = false;
                    }
                });
                
                // Disable clear filters button
                this.disabled = true;
                this.style.color = '#555';
                this.style.cursor = 'not-allowed';
            });
            
            const allInputs = document.querySelectorAll('.filter-option input');
            allInputs.forEach(input => {
                input.addEventListener('change', function() {
                    let hasSelection = false;
                    
                    allInputs.forEach(inp => {
                        if (inp.id !== 'relevance' && inp.checked) {
                            hasSelection = true;
                        }
                    });
                    
                    if (hasSelection) {
                        clearBtn.disabled = false;
                        clearBtn.style.color = '#ff5200';
                        clearBtn.style.cursor = 'pointer';
                    } else {
                        clearBtn.disabled = true;
                        clearBtn.style.color = '#555';
                        clearBtn.style.cursor = 'not-allowed';
                    }
                });
            });
            
            const popupOverlay = document.querySelector('.filter-popup-overlay');
            popupOverlay.addEventListener('click', function(e) {
                if (e.target === popupOverlay) {
                    closeFilter();
                }
            });
            
            // Sidebar navigation
            const sidebarItems = document.querySelectorAll('.sidebar-item');
            const filterSections = document.querySelectorAll('.filter-section');
            
            sidebarItems.forEach((item, index) => {
                item.addEventListener('click', function() {
                    sidebarItems.forEach(si => si.classList.remove('active'));
                    this.classList.add('active');
                    
                    filterSections.forEach(section => section.classList.remove('active'));
                    
                    // Show the corresponding filter section
                    if (index === 0) {
                        // Sort section
                        filterSections[0].classList.add('active');
                    } else if (index === 1) {
                        // Delivery Time section
                        filterSections[1].classList.add('active');
                    } else if (index === 2) {
                        // Cuisines section
                        filterSections[2].classList.add('active');
                    } else if (index === 3) {
                        // Explore section
                        filterSections[3].classList.add('active');
                    } else if (index === 4) {
                        // Ratings section
                        filterSections[4].classList.add('active');
                    } else if (index === 5) {
                        // Veg/Non-Veg section
                        filterSections[5].classList.add('active');
                    } else if (index === 6) {
                        // Offers section
                        filterSections[6].classList.add('active');
                    } else if (index === 7) {
                        // Cost for Two section
                        filterSections[7].classList.add('active');
                    }
                });
            });
            
            isFilterOpen = true;
        }
    }
    
    function closeFilter() {
        filterPopup.innerHTML = '';
        filterPopup.style.display = 'none';
        isFilterOpen = false;
    }
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            openFilter();
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isFilterOpen) {
            closeFilter();
        }
    });
});
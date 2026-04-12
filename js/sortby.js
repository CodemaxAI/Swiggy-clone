document.addEventListener('DOMContentLoaded', function() {
    const sortbyBtn = document.querySelector('.sortby-btn');
    const sortbyContainer = document.getElementById('sortby');
    
    const createSortbyDropdown = () => {
        return `
            <div class="sortby-dropdown">
                <div class="sortby-option selected">
                    <span>Relevance (Default)</span>
                    <span class="radio-btn selected"></span>
                </div>
                <div class="sortby-option">
                    <span>Delivery Time</span>
                    <span class="radio-btn"></span>
                </div>
                <div class="sortby-option">
                    <span>Rating</span>
                    <span class="radio-btn"></span>
                </div>
                <div class="sortby-option">
                    <span>Cost: Low to High</span>
                    <span class="radio-btn"></span>
                </div>
                <div class="sortby-option">
                    <span>Cost: High to Low</span>
                    <span class="radio-btn"></span>
                </div>
                <div class="apply-btn">Apply</div>
            </div>
        `;
    };
    
    window.isDropdownOpen = false;
    
    // Function to position the dropdown
    function positionDropdown() {
        const btnRect = sortbyBtn.getBoundingClientRect();
        sortbyContainer.style.position = 'fixed';
        sortbyContainer.style.top = btnRect.top + 'px';
        sortbyContainer.style.left = btnRect.left + 'px';
        sortbyContainer.style.zIndex = '1000';
    }
    
    // Toggle dropdown when clicking the sortby button
    sortbyBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (!window.isDropdownOpen) {
            sortbyContainer.innerHTML = createSortbyDropdown();
            sortbyContainer.style.display = 'block';
            
            positionDropdown();
            
            const options = document.querySelectorAll('.sortby-option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    options.forEach(opt => {
                        opt.classList.remove('selected');
                        opt.querySelector('.radio-btn').classList.remove('selected');
                    });
                    
                    this.classList.add('selected');
                    this.querySelector('.radio-btn').classList.add('selected');
                });
            });
            
            // Apply button close the dropdown
            const applyBtn = document.querySelector('.apply-btn');
            applyBtn.addEventListener('click', function() {
                closeDropdown();
            });
            
            window.isDropdownOpen = true;
            
            window.addEventListener('scroll', positionDropdown);
        } else {
            closeDropdown();
        }
    });
    
    function closeDropdown() {
        sortbyContainer.innerHTML = '';
        sortbyContainer.style.display = 'none';
        window.isDropdownOpen = false;
        
        window.removeEventListener('scroll', positionDropdown);
    }
    
    document.addEventListener('click', function(e) {
        if (window.isDropdownOpen && !sortbyContainer.contains(e.target) && e.target !== sortbyBtn) {
            closeDropdown();
        }
    });
}); 
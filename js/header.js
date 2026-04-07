const overlay = document.querySelector('.overlay');
const others = document.querySelector('.others');
const sidebarLocation = document.querySelector('.overlay-sidebar-location');
const signInUser = document.querySelector('.sign-in-user');
const sidebarLogin = document.querySelector('.overlay-sidebar-login');

// Sidebar content generators
const createLocationSidebar = () => {
    const locationContent = `
        <div class="location-sidebar">
            <div class="location-header">
                <i class='bx bx-x' id="close-location"></i>
            </div>
            <div class="location-search">
                <input type="text" placeholder="Search for area, street name.." />
            </div>
            <div class="get-location-btn">
                <i class='bx bx-current-location'></i>
                <div class="location-text">
                    <h3>Get current location</h3>
                    <p>Using GPS</p>
                </div>
            </div>
        </div>
    `;
    sidebarLocation.innerHTML = locationContent;
    document.getElementById('close-location').addEventListener('click', () => closeSidebar('location'));
};

const createAuthForm = (isLogin = true) => {
    const authContent = `
        <div class="login-sidebar">
            <div class="login-header">
                <i class='bx bx-x' id="close-login"></i>
            </div>
            <div class="login-content">
                <div class="login-content-header">
                    <div class="login-content-header-left">
                        <h2>${isLogin ? 'Login' : 'Sign up'}</h2>
                        <p class="login-text">or <span class="create-account">${isLogin ? 'create an account' : 'login to your account'}</span></p>
                    </div>
                    <div class="login-content-header-right">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="Login">
                    </div>
                </div>
                <div class="login-form">
                    <div class="form-group">
                        <input type="text" placeholder=" " class="phone-input">
                        <label>Phone number</label>
                    </div>
                    ${!isLogin ? `
                    <div class="form-group">
                        <input type="text" placeholder=" " class="name-input">
                        <label>Name</label>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder=" " class="email-input">
                        <label>Email</label>
                    </div>
                    <div class="referral-code">
                        <span>Have a referral code?</span>
                    </div>
                    ` : ''}
                    <button class="login-btn">${isLogin ? 'LOGIN' : 'CONTINUE'}</button>
                    <p class="terms-text">
                        By ${isLogin ? 'clicking on Login, I accept' : 'creating an account, I accept'} the <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    `;
    sidebarLogin.innerHTML = authContent;
    
    document.getElementById('close-login').addEventListener('click', () => closeSidebar('login'));
    document.querySelector('.create-account').addEventListener('click', () => {
        createAuthForm(!isLogin);
    });
    
    // referral code
    const referralCodeElement = document.querySelector('.referral-code span');
    if (referralCodeElement) {
        referralCodeElement.addEventListener('click', () => {
            const referralCodeDiv = document.querySelector('.referral-code');
            referralCodeDiv.innerHTML = `
                <div class="form-group">
                    <input type="text" placeholder=" " class="referral-input">
                    <label>Referal code</label>
                </div>
            `;
        });
    }
};

// open and close functions
const openSidebar = (type, isLogin = true) => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (type === 'location') {
        createLocationSidebar();
        sidebarLocation.classList.add('active');
        sidebarLogin.classList.remove('active');
    } else if (type === 'login') {
        createAuthForm(isLogin);
        sidebarLogin.classList.add('active');
        sidebarLocation.classList.remove('active');
    }
};

const closeSidebar = (type) => {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    if (type === 'location') {
        sidebarLocation.classList.remove('active');
        setTimeout(() => {
            sidebarLocation.innerHTML = '';
        }, 300);
    } else if (type === 'login') {
        sidebarLogin.classList.remove('active');
        setTimeout(() => {
            sidebarLogin.innerHTML = '';
        }, 300);
    }
};

others.addEventListener('click', () => openSidebar('location'));
signInUser.addEventListener('click', () => openSidebar('login', true));
overlay.addEventListener('click', () => {
    if (sidebarLocation.classList.contains('active')) {
        closeSidebar('location');
    } else if (sidebarLogin.classList.contains('active')) {
        closeSidebar('login');
    }
});
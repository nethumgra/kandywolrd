document.write(`<div class="bg-black text-white py-2 text-sm">
        <div class="w-full max-w-[1920px] xl:px-12 mx-auto flex justify-between items-center px-4">
            <button class="text-gray-400 hover:text-white"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>
            <span class="text-xs md:text-sm">Free Standard Shipping on Orders Over Rs. 5,000</span>
            <button class="text-gray-400 hover:text-white"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
        </div>
    </div>

    <nav class="bg-white text-gray-800 sticky top-0 z-40 border-b shadow-sm">
        <style>
            @media (max-width: 480px) {
                .mobile-logo-text {
                    display: none !important;
                }
                .mobile-logo-img {
                    margin-right: 0 !important;
                }
            }
        </style>
        <!-- ====== DESKTOP NAV ====== -->
        <div class="hidden md:flex w-full max-w-[1920px] xl:px-12 mx-auto px-4 py-3 items-center justify-between gap-6">
            
            <!-- Left: Logo -->
            <a href="index.html" class="flex items-center flex-shrink-0">
                <img src="https://i.ibb.co/PyNpHPH/Untitled-design-3.png" alt="Kandy World Logo" class="h-9 mr-2">
                <span class="text-xl font-semibold tracking-widest text-black">KANDY WORLD</span>
            </a>

            <!-- Center: Nav Links -->
            <div class="flex items-center gap-x-6 text-[13px] font-semibold tracking-wide uppercase">
                <a href="index.html#product-grid-container" onclick="if(window.setCategoryFilter) window.setCategoryFilter('');" class="hover:text-teal-600 transition whitespace-nowrap">New Arrivals</a>
                <a href="index.html#product-grid-container" onclick="if(window.setCategoryFilter) window.setCategoryFilter('Linen Pants ladies');" class="hover:text-teal-600 transition whitespace-nowrap">Women</a>
                <a href="index.html#product-grid-container" onclick="if(window.setCategoryFilter) window.setCategoryFilter('Linen Pants Male');" class="hover:text-teal-600 transition whitespace-nowrap">Men</a>
                <a href="index.html#product-grid-container" onclick="if(window.setCategoryFilter) window.setCategoryFilter('Linen Shirts');" class="hover:text-teal-600 transition whitespace-nowrap">Linen</a>
                <a href="index.html#product-grid-container" onclick="if(window.setCategoryFilter) window.setCategoryFilter('viscose casual shirts');" class="hover:text-teal-600 transition whitespace-nowrap">Collections</a>
                <a href="index.html#product-grid-container" onclick="if(window.setCategoryFilter) window.setCategoryFilter('Linen Short Pants ladies');" class="hover:text-teal-600 transition whitespace-nowrap">Sale</a>
                <a href="index.html#get-in-touch" class="hover:text-teal-600 transition whitespace-nowrap">About Us</a>
            </div>

            <!-- Right: Search + Icons -->
            <div class="flex items-center gap-4 flex-shrink-0">
                <!-- Inline Search -->
                <div class="relative">
                    <form id="desktop-search-form" class="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white h-9">
                        <input type="text" id="desktop-search-input" autocomplete="off" placeholder="Search for products, categories..." class="py-2 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none w-52 xl:w-64">
                        <button type="submit" class="px-3 py-2 bg-black text-white hover:bg-gray-800 transition h-full flex items-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </form>
                    <!-- Live Search Dropdown -->
                    <div id="desktop-search-dropdown" class="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 hidden max-h-[400px] overflow-y-auto"></div>
                </div>
                <!-- User -->
                <button id="user-button" class="hover:text-teal-600 focus:outline-none flex flex-col items-center" title="My Account">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                </button>
                <!-- Wishlist -->
                <a href="wishlist.html" class="hover:text-teal-600 focus:outline-none" title="Wishlist">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path></svg>
                </a>
                <!-- Cart -->
                <button id="cart-button" class="hover:text-teal-600 relative focus:outline-none" title="Cart">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"></path></svg>
                    <span id="cart-count" class="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center hidden">0</span>
                </button>
            </div>
        </div>

        <!-- ====== MOBILE NAV ====== -->
        <div class="flex md:hidden w-full max-w-[1920px] mx-auto px-4 py-4 items-center justify-between">
            <!-- Left: Hamburger -->
            <button class="text-gray-800 hover:text-teal-600 focus:outline-none" id="mobile-menu-btn">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            
            <!-- Center: Logo -->
            <a href="index.html" class="flex items-center absolute left-[43%] -translate-x-1/2">
                <img src="https://i.ibb.co/PyNpHPH/Untitled-design-3.png" alt="Kandy World Logo" class="h-8 mr-2 mobile-logo-img">
                <span class="text-lg font-semibold tracking-widest text-black mobile-logo-text">KANDY WORLD</span>
            </a>

            <!-- Right: Icons -->
            <div class="flex items-center space-x-4">
                <button id="search-toggle-btn" class="hover:text-teal-600 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                <button id="user-button-mobile" class="hover:text-teal-600 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                </button>
                <button id="cart-button" class="hover:text-teal-600 relative focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"></path></svg>
                    <span id="cart-count" class="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center hidden">0</span>
                </button>
            </div>
        </div>

        <!-- Mobile Search Bar (hidden by default) -->
        <div id="search-bar-container" class="md:hidden w-full px-4 pb-3 hidden">
            <div class="relative w-full">
                <form id="mobile-search-header-form" class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                    <input type="text" id="mobile-search-input" autocomplete="off" placeholder="Search for products, categories..." class="flex-grow py-2.5 px-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none">
                    <button type="submit" class="px-4 py-2.5 bg-black text-white hover:bg-gray-800 transition">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </form>
                <!-- Mobile Live Search Dropdown -->
                <div id="mobile-search-dropdown" class="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 hidden max-h-[340px] overflow-y-auto"></div>
            </div>
        </div>
    </nav>`);

// Search bar toggle for mobile
(function() {
    function initSearchToggle() {
        const toggleBtn = document.getElementById('search-toggle-btn');
        const searchContainer = document.getElementById('search-bar-container');
        if (toggleBtn && searchContainer) {
            toggleBtn.addEventListener('click', () => {
                searchContainer.classList.toggle('hidden');
                if (!searchContainer.classList.contains('hidden')) {
                    const searchInput = document.getElementById('mobile-search-input');
                    if (searchInput) searchInput.focus();
                }
            });
        }

        // Mobile user button mirrors desktop user button behavior
        const mobileUserBtn = document.getElementById('user-button-mobile');
        const desktopUserBtn = document.getElementById('user-button');
        if (mobileUserBtn && desktopUserBtn) {
            mobileUserBtn.addEventListener('click', () => desktopUserBtn.click());
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearchToggle);
    } else {
        initSearchToggle();
    }
})();

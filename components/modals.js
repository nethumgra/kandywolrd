document.write(`<!-- Mobile Navigation Drawer -->
    <div id="mobile-nav-drawer" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden lg:hidden">
        <div id="mobile-nav-panel" class="sidebar-panel absolute top-0 left-0 h-full w-full max-w-xs bg-white shadow-xl transform -translate-x-full flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
                <span class="text-lg font-medium text-gray-900">Categories</span>
                <button onclick="toggleMobileNavDrawer(false)" class="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <!-- Body: Links & Categories -->
            <div class="flex-grow overflow-y-auto p-4 space-y-6 custom-scrollbar">
                <!-- Core Navigation -->
                <div class="space-y-1">
                    <a href="index.html" class="flex items-center gap-3 py-3 px-4 text-gray-900 hover:bg-gray-50 rounded-lg transition font-medium">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        Home
                    </a>
                    <a href="my-orders.html" class="flex items-center gap-3 py-3 px-4 text-gray-900 hover:bg-gray-50 rounded-lg transition font-medium">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        My Orders
                    </a>
                    <a href="wishlist.html" class="flex items-center gap-3 py-3 px-4 text-gray-900 hover:bg-gray-50 rounded-lg transition font-medium">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path></svg>
                        Wishlist
                    </a>
                </div>
                
                <hr class="border-gray-100">
                
                <!-- Dynamic Category List -->
                <div class="space-y-1">
                    <span class="block px-4 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Shop Categories</span>
                    <div id="mobile-nav-categories" class="space-y-1">
                        <!-- Loaded dynamically -->
                        <p class="text-xs text-gray-400 px-4">Loading categories...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Drawer -->
    <div id="cart-drawer" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
        <div id="cart-drawer-panel" class="sidebar-panel absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transform translate-x-full flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
                <h2 class="text-lg font-semibold flex items-center gap-2">
                    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"></path></svg>
                    Shopping Bag
                </h2>
                <button onclick="toggleCartDrawer(false)" class="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <!-- Free Shipping Progress Bar -->
            <div id="cart-drawer-shipping-banner" class="bg-[#faf9f6] border-b px-4 py-3">
                <div class="flex items-center justify-between text-xs font-medium text-gray-700 mb-1.5">
                    <span id="cart-shipping-text">Add <strong class="text-teal-700 font-bold">Rs. 5,000</strong> for <span class="font-bold text-gray-900">FREE Delivery 🚚</span></span>
                    <span id="cart-shipping-percent" class="text-teal-700 font-bold text-[11px]">0%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div id="cart-shipping-bar" class="bg-teal-600 h-1.5 rounded-full transition-all duration-500 ease-out" style="width: 0%"></div>
                </div>
            </div>

            <!-- Cart Items List (Scrollable) -->
            <div id="cart-drawer-items" class="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar">
                <p class="text-center text-gray-500 py-8">Your shopping bag is empty.</p>
            </div>
            <!-- Summary & Checkout (Sticky bottom) -->
            <div class="p-4 border-t bg-gray-50 space-y-3">
                <div class="flex justify-between font-medium text-gray-700 text-sm">
                    <span>Subtotal</span>
                    <span id="cart-drawer-subtotal" class="font-bold text-gray-900">Rs. 0</span>
                </div>
                <p class="text-[11px] text-gray-400">Standard delivery & taxes calculated at checkout.</p>
                <button onclick="if(window.proceedToCheckoutFromDrawer) window.proceedToCheckoutFromDrawer(); else window.location.href='checkout.html';" class="w-full bg-black text-white font-bold py-3.5 rounded-md hover:bg-gray-800 transition shadow-sm flex items-center justify-center gap-2 text-sm tracking-wide">
                    <span>Proceed to Checkout</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <div class="flex items-center justify-between pt-1">
                    <a href="cart.html" class="text-xs font-medium text-gray-600 hover:text-black underline transition">View Full Cart</a>
                    <button onclick="toggleCartDrawer(false)" class="text-xs font-semibold text-gray-500 hover:text-black transition">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div id="mobile-filter-sidebar" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
        <div id="mobile-filter-panel" class="sidebar-panel absolute top-0 left-0 h-full w-full max-w-sm bg-white shadow-xl transform -translate-x-full flex flex-col">
            <div class="flex items-center justify-between p-4 border-b">
                <h2 class="text-lg font-semibold">Filters</h2>
                <button id="close-filter-btn" class="p-2 rounded-full hover:bg-gray-100"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            </div>
            <div class="p-4 space-y-6 overflow-y-auto flex-grow custom-scrollbar">
                <div>
                    <h3 class="font-semibold mb-2">Brand</h3>
                    <input type="text" id="mobile-brand-search" placeholder="Search Brand" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-3">
                    <div id="mobile-brand-filter-list" class="space-y-2 max-h-40 overflow-y-auto"></div>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Category</h3>
                    <div id="mobile-category-filter-list" class="space-y-2"></div>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Size</h3>
                    <div class="border-b border-gray-200">
                        <nav class="-mb-px flex space-x-4" aria-label="Tabs">
                            <button class="size-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm border-teal-500 text-teal-600" data-tab="brand-size">Brand Size</button>
                            <button class="size-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500" data-tab="eu">EU</button>
                        </nav>
                    </div>
                    <div class="mt-4">
                        <div id="mobile-size-filter-list">
                            <div class="tab-panel active grid grid-cols-4 gap-2" data-panel="brand-size">
                                <button data-size="XXS" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">XXS</button>
                                <button data-size="XS" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">XS</button>
                                <button data-size="S" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">S</button>
                                <button data-size="M" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">M</button>
                                <button data-size="L" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">L</button>
                                <button data-size="XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">XL</button>
                                <button data-size="2XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">2XL</button>
                                <button data-size="3XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">3XL</button>
                                <button data-size="4XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">4XL</button>
                                <button data-size="5XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">5XL</button>
                            </div>
                            <div class="tab-panel" data-panel="eu"><p class="text-xs text-gray-400">EU sizes not available.</p></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Price Range</h3>
                    <div class="flex items-center space-x-2">
                        <input type="number" id="mobile-min-price" placeholder="Min" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" min="0">
                        <span class="text-gray-500">-</span>
                        <input type="number" id="mobile-max-price" placeholder="Max" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" min="0">
                    </div>
                </div>
            </div>
            <div class="p-4 border-t bg-white flex space-x-2">
                <button id="mobile-clear-filters-btn" class="w-1/2 bg-gray-200 text-gray-800 font-bold py-2.5 rounded-md hover:bg-gray-300 transition">Clear All</button>
                <button id="mobile-apply-filters-btn" class="w-1/2 bg-teal-600 text-white font-bold py-2.5 rounded-md hover:bg-teal-700 transition">Apply</button>
            </div>
        </div>
    </div>

    <div id="auth-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden transition-opacity">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all relative">
            <button id="close-auth-modal" class="absolute right-4 top-4 text-gray-400 hover:text-black transition-colors z-10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div class="flex border-b border-gray-100 relative">
                <button id="login-tab" class="flex-1 py-4 text-sm font-bold text-center text-black bg-gray-50 hover:bg-gray-100 transition-colors uppercase tracking-wider relative">Log In
                    <div id="login-indicator" class="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                </button>
                <button id="signup-tab" class="flex-1 py-4 text-sm font-bold text-center text-gray-400 bg-white hover:bg-gray-50 transition-colors uppercase tracking-wider relative">Sign Up
                    <div id="signup-indicator" class="absolute bottom-0 left-0 w-full h-0.5 bg-transparent"></div>
                </button>
            </div>
            <div class="p-8 sm:p-10">
                <div class="text-center mb-8">
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-1" id="auth-title">Welcome Back</h2>
                    <p class="text-sm text-gray-500" id="auth-subtitle">Enter your details to access your account.</p>
                </div>
                <form id="login-form" class="space-y-5">
                    <div>
                        <label for="login-email" class="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
                        <input type="email" id="login-email" required class="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all sm:text-sm">
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <label for="login-password" class="block text-xs font-bold text-gray-700 uppercase tracking-wide">Password</label>
                            <a href="#" class="text-xs font-medium text-gray-500 hover:text-black hover:underline transition-colors">Forgot password?</a>
                        </div>
                        <input type="password" id="login-password" required class="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all sm:text-sm">
                    </div>
                    <button type="submit" class="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl mt-2 flex justify-center items-center gap-2">
                        <span>Sign In</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </form>
                <form id="signup-form" class="space-y-5 hidden">
                    <div>
                        <label for="signup-email" class="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
                        <input type="email" id="signup-email" required class="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all sm:text-sm">
                    </div>
                    <div>
                        <label for="signup-password" class="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Password</label>
                        <input type="password" id="signup-password" minlength="6" required class="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all sm:text-sm">
                        <p class="text-xs text-gray-400 mt-2">Must be at least 6 characters long.</p>
                    </div>
                    <button type="submit" class="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl mt-2 flex justify-center items-center gap-2">
                        <span>Create Account</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                    </button>
                </form>
                <div class="relative flex py-5 items-center mt-2">
                    <div class="flex-grow border-t border-gray-200"></div>
                    <span class="flex-shrink mx-4 text-xs text-gray-400 uppercase font-bold tracking-widest">Or</span>
                    <div class="flex-grow border-t border-gray-200"></div>
                </div>
                <button id="google-signin-btn" class="w-full flex items-center justify-center py-3 border border-gray-200 rounded-xl shadow-sm text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
                    <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.223 0-9.641-3.657-11.297-8.591l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.574l6.19 5.238C42.012 35.245 44 30.024 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                    Continue with Google
                </button>
                <p id="auth-error" class="text-red-500 text-xs font-bold mt-4 text-center"></p>
            </div>
        </div>
    </div>
`);

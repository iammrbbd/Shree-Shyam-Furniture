// Shree Shyam Furniture Website JavaScript

// Product data
const products = [
    {
        id: 1,
        name: "Wall Droves",
        category: "Storage",
        description: "Custom wardrobes and wall storage units with premium finishes",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1754998062/pplx_project_search_images/17bf2f53b54cba5e6b76d3507fb5ebcf7479844e.png",
            "https://pplx-res.cloudinary.com/image/upload/v1755792106/pplx_project_search_images/9a45fd2e651d0fa167fb7f5bf7e77dd2ae10b111.png",
            "https://pplx-res.cloudinary.com/image/upload/v1756445648/pplx_project_search_images/2de8ba0290681aede40c14ff2ad8933363b448a5.png"
        ],
        features: ["Custom sizing", "Premium wood finish", "Soft-close hinges"]
    },
    {
        id: 2,
        name: "Kitchen Cabinets",
        category: "Kitchen",
        description: "Modern modular kitchen solutions with premium hardware",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1754649082/pplx_project_search_images/06895cc68e21bfe550dd4aeb936f4a67ce7fabc1.png",
            "https://res.cloudinary.com/dadjouvur/image/upload/v1757919717/180123120725DSC02127_8_9_Enhancer_tjyeo4.webp",
            "https://res.cloudinary.com/dadjouvur/image/upload/v1757919717/R_xgtddi.jpg",
            "https://res.cloudinary.com/dadjouvur/image/upload/v1757919717/180123121004DSC02230_1_2_Enhancer_y43kef.webp"
        ],
        features: ["Modular design", "Water-resistant", "Premium hardware"]
    },
    {
        id: 3,
        name: "TV Cabinets",
        category: "Living Room",
        description: "Entertainment units and TV stands with modern design",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757840210/pplx_project_search_images/b85a81d6f6e158364078412fe73e27165e373d2d.png",
            "https://pplx-res.cloudinary.com/image/upload/v1757840210/pplx_project_search_images/35518e36623d789c02532fb9d867dfa4b9fd22c5.png"
        ],
        features: ["Cable management", "Multiple storage", "Modern design"]
    },
    {
        id: 4,
        name: "Office Tables",
        category: "Office",
        description: "Professional workstations and desks for modern offices",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757840210/pplx_project_search_images/b1632cd4ff376f047d8dc8ea5f9841e28d70bfe3.png"
        ],
        features: ["Ergonomic design", "Cable management", "Durable construction"]
    },
    {
        id: 5,
        name: "Chairs",
        category: "Seating",
        description: "Comfortable seating solutions for office and home",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757840210/pplx_project_search_images/fa47dfa50f19ffb156936a2e582815319a75b593.png",
            "https://pplx-res.cloudinary.com/image/upload/v1757840210/pplx_project_search_images/0f89fe48d50b034aa50cfc983e82ae45f9b11cac.png"
        ],
        features: ["Ergonomic support", "Premium upholstery", "Adjustable height"]
    },
    {
        id: 6,
        name: "Beds",
        category: "Bedroom",
        description: "Comfortable bedroom furniture with modern aesthetics",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757840211/pplx_project_search_images/4c497428b6ad5bc430b4b4f59512296af99d89c1.png"
        ],
        features: ["Solid wood construction", "Modern design", "Storage options"]
    },
    {
        id: 7,
        name: "Bathroom Cabinets",
        category: "Bathroom",
        description: "Water-resistant bathroom storage solutions",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757533674/pplx_project_search_images/e6821e792d9b5811cada50e382a856bd8b5cf810.png",
            "https://pplx-res.cloudinary.com/image/upload/v1754645609/pplx_project_search_images/267af94c74804074561d510a8a966ba33d791bd4.png",
            "https://pplx-res.cloudinary.com/image/upload/v1756283938/pplx_project_search_images/3aedd3479a33be89de3f97fb1b7f0d23161e7230.png"
        ],
        features: ["Moisture resistant", "Soft-close drawers", "Modern styling"]
    },
    {
        id: 8,
        name: "Doors",
        category: "Interior",
        description: "Interior and exterior doors with premium craftsmanship",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757840227/pplx_project_search_images/2d6ba5a1775eda8a9c6f7b0fba61da76d13c49bc.png",
            "https://pplx-res.cloudinary.com/image/upload/v1755247210/pplx_project_search_images/d19ccba46730b1a7df5a1f35053bcb2193b5e71e.png",
            "https://pplx-res.cloudinary.com/image/upload/v1756461142/pplx_project_search_images/3ac20e494f27bc0c1296b3a1aa68a511d8c1c45f.png"
        ],
        features: ["Solid wood construction", "Custom designs", "Premium hardware"]
    },
    {
        id: 9,
        name: "Racks/Bookracks",
        category: "Storage",
        description: "Display and storage solutions for books and accessories",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757840227/pplx_project_search_images/9ac9e24c732fde7025cd7581613bc5afb4aaa328.png",
            "https://pplx-res.cloudinary.com/image/upload/v1757840228/pplx_project_search_images/f8f834f569fb14bacdb9c71e61974c29bfe7ec00.png",
            "https://pplx-res.cloudinary.com/image/upload/v1757840228/pplx_project_search_images/7bdb21bdb17b7cc223bffdc4aafe920cedc3a774.png"
        ],
        features: ["Adjustable shelves", "Modern design", "Space efficient"]
    },
    {
        id: 10,
        name: "Shoe Racks",
        category: "Storage",
        description: "Organized shoe storage solutions with modern design",
        images: [
            "https://pplx-res.cloudinary.com/image/upload/v1757840227/pplx_project_search_images/e8a5996c135195d2a7fa83bfbbae69cab2fd922c.png"
        ],
        features: ["Multi-tier design", "Ventilated storage", "Compact footprint"]
    }
];

// Catalog data - unified PDF collection
const catalogs = [
    {
        id: 1,
        title: "Real Plast Digital Kitchen Catalog",
        description: "Complete digital kitchen designs and modular solutions",
        filename: "080322021757newbrochuredigital.pdf",
        type: "Kitchen & Wall Art",
        pages: "36 pages",
        category: "kitchen",
        icon: "📚"
    },
    {
        id: 2,
        title: "UPVC Fluted Panel Catalog",
        description: "Decorative UPVC louver panels for wall decoration",
        filename: "191124092239Flutedpannel.pdf", 
        type: "Wall Panels",
        pages: "8 pages",
        category: "wall-panels",
        icon: "🏠"
    },
    {
        id: 3,
        title: "Real Louver Collection",
        description: "Premium louver panel designs and textures",
        filename: "301023045403RealLoverCatlouge.pdf",
        type: "Louver Panels", 
        pages: "2 pages",
        category: "panels",
        icon: "📋"
    },
    {
        id: 4,
        title: "Real Louver Brochure",
        description: "Wall decor and wooden panel solutions",
        filename: "RealLouversBrochure-08-03-2022.pdf",
        type: "Wall Decor",
        pages: "4 pages", 
        category: "decor",
        icon: "🎨"
    },
    {
        id: 5,
        title: "Real Plast Digital Designs",
        description: "Comprehensive design patterns and door solutions",
        filename: "RealPlastBrochureDigital.pdf",
        type: "Design Patterns",
        pages: "12 pages",
        category: "designs",
        icon: "✨"
    }
];

// Global variables
let currentSlide = 0;
let autoSlideInterval;
let showingAllProducts = false;

// Fallback image for failed loads
const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjVmNWY1Ii8+CjxwYXRoIGQ9Ik0xMjAgODBMMTgwIDgwTDE4MCA5MEwxMjAgOTBMMTIwIDgwWiIgZmlsbD0iI2RkZGRkZCIvPgo8Y2lyY2xlIGN4PSIxMzAiIGN5PSIxMDAiIHI9IjE1IiBmaWxsPSIjZGRkZGRkIi8+CjxwYXRoIGQ9Ik0xMzAgMTIwTDE3MCA4MEwxNzAgMTQwTDEzMCAxMDBMMTMwIDEyMFoiIGZpbGw9IiNjY2NjY2MiLz4KPHN0eWxlPi5zdDAgeyBmb250LWZhbWlseTogQXJpYWw7IGZvbnQtc2l6ZTogMTZweDsgZmlsbDogIzk5OTk5OTsgfTwvc3R5bGU+Cjx0ZXh0IHg9IjE1MCIgeT0iMTcwIiBjbGFzcz0ic3QwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GdXJuaXR1cmU8L3RleHQ+Cjwvc3ZnPgo=';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Shree Shyam Furniture website...');
    initializeCarousel();
    initializeSearch();
    initializeNavigation();
    initializeForms();
    initializeScrollAnimations();
    initializeCounters();
    initializeCatalog();
    initializeContactButtons();
    startAutoSlide();
});

// Navigation functionality - Fixed
function initializeNavigation() {
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links - Fixed
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const header = document.getElementById('header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const sectionTop = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: Math.max(0, sectionTop),
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                    
                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = ['home', 'products', 'services', 'catalog', 'about', 'contact'];
    const navLinks = document.querySelectorAll('.nav__link');
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top <= 100 && rect.bottom >= 100;
            
            if (isVisible) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
}

// Search functionality - Fixed
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
        
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        if (showingAllProducts) {
            renderAllProducts();
        }
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.features.some(feature => feature.toLowerCase().includes(query))
    );
    
    if (filteredProducts.length > 0) {
        displaySearchResults(filteredProducts);
    } else {
        showNoResults();
    }
}

function displaySearchResults(filteredProducts) {
    if (!showingAllProducts) {
        toggleAllProducts();
    } else {
        renderAllProducts(filteredProducts);
    }
}

function showNoResults() {
    if (!showingAllProducts) {
        toggleAllProducts();
    }
    
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-card-border);">
                <h3 style="color: var(--color-text); margin-bottom: 16px;">No products found</h3>
                <p style="color: var(--color-text-secondary); margin-bottom: 24px;">Try searching with different keywords</p>
                <button class="btn btn--outline" onclick="clearSearch()">Show All Products</button>
            </div>
        `;
    }
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        renderAllProducts();
    }
}

// Carousel functionality
function initializeCarousel() {
    renderCarouselProducts();
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const viewAllBtn = document.getElementById('viewAllBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            previousSlide();
            startAutoSlide();
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAllProducts();
        });
    }
}

function renderCarouselProducts() {
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) return;
    
    carouselTrack.innerHTML = products.map(product => `
        <div class="product__card" data-product-id="${product.id}">
            <img src="${product.images[0]}" alt="${product.name}" class="product__image" 
                 onerror="this.src='${fallbackImage}'">
            <div class="product__info">
                <h3 class="product__name">${product.name}</h3>
                <p class="product__category">${product.category}</p>
                <p class="product__description">${product.description}</p>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to product cards
    const productCards = carouselTrack.querySelectorAll('.product__card');
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(card.dataset.productId);
            openProductModal(productId);
        });
        card.style.cursor = 'pointer';
    });
}

function renderAllProducts(filteredProducts = products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product__card animate-on-scroll" data-product-id="${product.id}">
            <img src="${product.images[0]}" alt="${product.name}" class="product__image"
                 onerror="this.src='${fallbackImage}'">
            <div class="product__info">
                <h3 class="product__name">${product.name}</h3>
                <p class="product__category">${product.category}</p>
                <p class="product__description">${product.description}</p>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to grid product cards
    const productCards = productsGrid.querySelectorAll('.product__card');
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(card.dataset.productId);
            openProductModal(productId);
        });
        card.style.cursor = 'pointer';
    });
    
    // Trigger scroll animations
    setTimeout(() => {
        const elements = productsGrid.querySelectorAll('.animate-on-scroll');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 100);
        });
    }, 100);
}

function nextSlide() {
    const maxSlides = Math.max(0, products.length - getVisibleSlides());
    currentSlide = currentSlide >= maxSlides ? 0 : currentSlide + 1;
    updateCarouselPosition();
}

function previousSlide() {
    const maxSlides = Math.max(0, products.length - getVisibleSlides());
    currentSlide = currentSlide <= 0 ? maxSlides : currentSlide - 1;
    updateCarouselPosition();
}

function getVisibleSlides() {
    const containerWidth = document.querySelector('.carousel__container')?.offsetWidth || 1200;
    return Math.max(1, Math.floor(containerWidth / 316)); // 300px card + 16px gap
}

function updateCarouselPosition() {
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) return;
    const slideWidth = 316; // card width + gap
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function toggleAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const carousel = document.querySelector('.products__carousel');
    const viewAllBtn = document.getElementById('viewAllBtn');
    
    if (!showingAllProducts) {
        renderAllProducts();
        if (productsGrid) productsGrid.classList.remove('hidden');
        if (carousel) carousel.style.display = 'none';
        if (viewAllBtn) viewAllBtn.textContent = 'Show Carousel';
        showingAllProducts = true;
        scrollToSection('products');
    } else {
        if (productsGrid) productsGrid.classList.add('hidden');
        if (carousel) carousel.style.display = 'block';
        if (viewAllBtn) viewAllBtn.textContent = 'View All Products';
        showingAllProducts = false;
    }
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Catalog functionality - Fixed
function initializeCatalog() {
    renderCatalogGrid();
}

function renderCatalogGrid() {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;
    
    catalogGrid.innerHTML = catalogs.map(catalog => `
        <div class="catalog__card" data-catalog-id="${catalog.id}">
            <div class="catalog__preview">
                <div class="catalog__preview-icon">${catalog.icon}</div>
            </div>
            <div class="catalog__content">
                <h3 class="catalog__title">${catalog.title}</h3>
                <p class="catalog__description">${catalog.description}</p>
                <div class="catalog__meta">
                    <span class="catalog__type">${catalog.type}</span>
                    <span class="catalog__pages">${catalog.pages}</span>
                </div>
                <div class="catalog__actions">
                    <button class="catalog__btn catalog-view-btn" data-filename="${catalog.filename}" data-title="${catalog.title}">
                        View PDF
                    </button>
                    <button class="catalog__btn catalog__btn--download catalog-download-btn" data-filename="${catalog.filename}" data-title="${catalog.title}">
                        Download
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to catalog cards
    const catalogCards = catalogGrid.querySelectorAll('.catalog__card');
    catalogCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on action buttons
            if (e.target.classList.contains('catalog__btn')) return;
            
            e.preventDefault();
            const catalogId = parseInt(card.dataset.catalogId);
            const catalog = catalogs.find(c => c.id === catalogId);
            if (catalog) {
                viewCatalog(catalog.filename, catalog.title);
            }
        });
        card.style.cursor = 'pointer';
    });
    
    // Add listeners to view buttons
    const viewButtons = catalogGrid.querySelectorAll('.catalog-view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filename = btn.dataset.filename;
            const title = btn.dataset.title;
            viewCatalog(filename, title);
        });
    });
    
    // Add listeners to download buttons
    const downloadButtons = catalogGrid.querySelectorAll('.catalog-download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const filename = btn.dataset.filename;
            const title = btn.dataset.title;
            downloadCatalog(filename, title);
        });
    });
}

function viewCatalog(filename, title) {
    window.open(`catalogs/${filename}`, "_blank");
}

function downloadCatalog(filename, title) {
     const link = document.createElement('a');
    link.href = `catalogs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showCatalogMessage(title, message) {
    const productModal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (modalBody) {
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="margin-bottom: 24px; color: var(--color-primary);">${title}</h2>
                <p style="margin-bottom: 32px; line-height: 1.6; color: var(--color-text-secondary);">${message}</p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <a href="tel:+919116974132" class="btn btn--primary">Call Now</a>
                    <a href="mailto:shreeshyamfurniturehouse@gmail.com" class="btn btn--outline">Send Email</a>
                    <button class="btn btn--outline" onclick="closeModal()">Close</button>
                </div>
            </div>
        `;
    }
    
    if (productModal) {
        productModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Contact functionality - Fixed
function initializeContactButtons() {
    // Contact buttons are already properly set up in HTML with href attributes
    // Just add visual feedback
    const contactBtns = document.querySelectorAll('.contact__btn');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Add visual feedback
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });
    
    const contactLinks = document.querySelectorAll('.contact__link');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add visual feedback
            link.style.color = 'var(--color-primary-hover)';
            setTimeout(() => {
                link.style.color = '';
            }, 200);
        });
    });
}

// Modal functionality
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const productModal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!product || !productModal || !modalBody) {
        console.error('Product not found or modal not available:', productId);
        return;
    }
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-images">
                <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="mainImage"
                     onerror="this.src='${fallbackImage}'">
                ${product.images.length > 1 ? `
                    <div class="image-thumbnails">
                        ${product.images.map((img, index) => `
                            <img src="${img}" alt="${product.name}" 
                                 onclick="changeMainImage('${img}')"
                                 onerror="this.src='${fallbackImage}'"
                                 class="thumbnail ${index === 0 ? 'active' : ''}">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="product-info-detail">
                <h2>${product.name}</h2>
                <p class="category" style="color: var(--color-primary); font-weight: 500; margin-bottom: 16px;">${product.category}</p>
                <p class="description" style="margin-bottom: 24px;">${product.description}</p>
                <h4 style="margin-bottom: 12px;">Features:</h4>
                <ul class="features-list" style="margin-bottom: 32px;">
                    ${product.features.map(feature => `<li style="margin-bottom: 8px;">${feature}</li>`).join('')}
                </ul>
                <div class="product-actions" style="display: flex; gap: 16px; flex-wrap: wrap;">
                    <button class="btn btn--primary" onclick="openServiceModal()">Request Quote</button>
                    <button class="btn btn--outline" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
        
        // Update thumbnail active state
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumb => {
            thumb.classList.toggle('active', thumb.src === imageSrc);
        });
    }
}

function closeModal() {
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function openServiceModal() {
    const serviceModal = document.getElementById('serviceModal');
    const productModal = document.getElementById('productModal');
    
    if (serviceModal) {
        serviceModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    if (productModal && !productModal.classList.contains('hidden')) {
        closeModal();
    }
}

function closeServiceModal() {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Form functionality
function initializeForms() {
    const contactForm = document.getElementById('contactForm');
    const serviceForm = document.getElementById('serviceForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    if (serviceForm) {
        serviceForm.addEventListener('submit', handleServiceForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    showFormSuccess('Thank you for your inquiry! We will contact you soon.');
    e.target.reset();
}

function handleServiceForm(e) {
    e.preventDefault();
    showFormSuccess('Service booking request submitted! Our team will contact you within 24 hours.');
    e.target.reset();
    closeServiceModal();
}

function showFormSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--color-success);
        color: var(--color-btn-primary-text);
        padding: 20px 30px;
        border-radius: var(--radius-base);
        z-index: 3000;
        box-shadow: var(--shadow-lg);
        animation: fadeInUp 0.5s ease;
        font-weight: 500;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 4000);
}

// Counter animations
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Scroll animations
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animateElements = document.querySelectorAll('.feature__card, .catalog__card, .partner__card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Utility function for scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const header = document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const sectionTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: Math.max(0, sectionTop),
            behavior: 'smooth'
        });
    }
}

// Event listeners for modal closing
document.addEventListener('click', (e) => {
    const productModal = document.getElementById('productModal');
    const serviceModal = document.getElementById('serviceModal');
    
    if (e.target === productModal) {
        closeModal();
    }
    if (e.target === serviceModal) {
        closeServiceModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeServiceModal();
    }
});

// Resize handler for carousel
window.addEventListener('resize', debounce(() => {
    currentSlide = Math.min(currentSlide, Math.max(0, products.length - getVisibleSlides()));
    updateCarouselPosition();
}, 250));

// Touch/swipe support for carousel
let startX = 0;
let currentX = 0;
let isDragging = false;

const carouselTrack = document.getElementById('carouselTrack');
if (carouselTrack) {
    carouselTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoSlide();
    }, {passive: true});
    
    carouselTrack.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    }, {passive: true});
    
    carouselTrack.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide();
            } else {
                previousSlide();
            }
        }
        
        startAutoSlide();
    }, {passive: true});
}

// Global functions for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
window.changeMainImage = changeMainImage;
window.clearSearch = clearSearch;
window.viewCatalog = viewCatalog;
window.downloadCatalog = downloadCatalog;

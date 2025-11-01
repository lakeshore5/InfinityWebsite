// InfinityBuilds Website JavaScript
// Professional Minecraft Builder Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize build modal system
    initBuildModals();
    
    // Initialize build cards interaction
    initBuildCards();
    
    // Initialize image carousel
    initImageCarousel();
    
    // Initialize image zoom functionality
    initImageZoom();
});

// Build data with descriptions and image lists
const buildData = {
    'anime-fight': {
        title: 'Anime Arena',
        description: 'Dynamic anime-inspired battle arena featuring vibrant designs and action-packed environments.',
        images: [
            'builds/Anime_Fight/AnimeFight.webp'
        ]
    },
    'blastoise': {
        title: 'Pokemon Blastoise',
        description: 'Detailed recreation of the iconic water-type Pokemon with impressive scale and accuracy.',
        images: [
            'builds/Blastoise/Pokemon1.webp',
            'builds/Blastoise/Pokemon2.webp'
        ]
    },
    'death-star': {
        title: 'Death Star',
        description: 'Massive Star Wars space station featuring intricate mechanical details and imposing scale.',
        images: [
            'builds/DeathStar/Death_Star.webp',
            'builds/DeathStar/Death_Star2.webp'
        ]
    },
    'dinos': {
        title: 'Dinosaur Assets',
        description: 'Collection of prehistoric creatures and environments showcasing paleontological accuracy.',
        images: [
            'builds/Dinos/Dinos.webp',
            'builds/Dinos/Dino_assets.webp',
            'builds/Dinos/Dino_assets3.webp',
            'builds/Dinos/Dino_assets4.webp'
        ]
    },
    'elephant': {
        title: 'Elephant',
        description: 'Majestic elephant sculpture demonstrating organic building techniques and natural proportions.',
        images: [
            'builds/Elephant/Elephant.webp'
        ]
    },
    'jungle': {
        title: 'Jungle Build',
        description: 'Lush tropical environment featuring dense vegetation and natural wilderness atmosphere.',
        images: [
            'builds/Jungle/Jungle.webp'
        ]
    },
    'mega': {
        title: 'Mega Build',
        description: 'Ambitious large-scale construction project showcasing advanced building techniques.',
        images: [
            'builds/Mega/Mega.webp'
        ]
    },
    'minotaur': {
        title: 'Minotaur',
        description: 'Mythological creature build featuring detailed anatomy and imposing presence.',
        images: [
            'builds/Minotaur/Minotaur.webp'
        ]
    },
    'plant-assets': {
        title: 'Plant Assets',
        description: 'Botanical collection featuring various plant life and organic structures.',
        images: [
            'builds/Plant_assets/Plant_assets.webp',
            'builds/Plant_assets/Plant_assets2.webp',
            'builds/Plant_assets/Plant_assets3.webp',
            'builds/Plant_assets/Palm_tree.webp'
        ]
    },
    'squirtle': {
        title: 'Pokemon Squirtle',
        description: 'Charming turtle Pokemon build showcasing attention to character details and proportions.',
        images: [
            'builds/Squirtle/Squirtle1.webp',
            'builds/Squirtle/Squirtle2.webp',
            'builds/Squirtle/Squirtle3.png'
        ]
    }
};

// Mobile navigation is now handled by shared/navbar.js

// Initialize build cards interaction
function initBuildCards() {
    const buildCards = document.querySelectorAll('.build-card');
    
    buildCards.forEach(card => {
        card.addEventListener('click', function() {
            const buildId = this.getAttribute('data-build');
            if (buildData[buildId]) {
                openBuildModal(buildId);
            }
        });
    });
}

// Initialize build modal system
function initBuildModals() {
    const modal = document.getElementById('buildModal');
    const closeBtn = document.querySelector('.close');
    
    if (!modal || !closeBtn) return;
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', closeBuildModal);
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeBuildModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeBuildModal();
        }
    });
}

// Open build modal with specific build data
function openBuildModal(buildId) {
    const modal = document.getElementById('buildModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const thumbnailContainer = document.querySelector('.image-thumbnails');
    
    if (!modal || !modalTitle || !modalDescription || !modalImage || !thumbnailContainer) return;
    
    const build = buildData[buildId];
    
    // Set modal content
    modalTitle.textContent = build.title;
    modalDescription.innerHTML = `<p>${build.description}</p>`;
    
    // Set up images
    if (build.images.length > 0) {
        modalImage.src = build.images[0];
        modalImage.alt = build.title;
        modalImage.setAttribute('data-current-index', '0');
        
        // Create thumbnails
        thumbnailContainer.innerHTML = '';
        build.images.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imageSrc;
            thumbnail.alt = `${build.title} - Image ${index + 1}`;
            thumbnail.className = 'thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            
            thumbnail.addEventListener('click', function() {
                showImage(index);
            });
            
            thumbnailContainer.appendChild(thumbnail);
        });
    }
    
    // Store current build data for carousel
    window.currentBuildImages = build.images;
    window.currentImageIndex = 0;
    
    // Show modal first
    modal.style.display = 'block';
    
    // Reset scroll position to top for all scrollable elements in modal
    // Use setTimeout to ensure DOM is updated before scroll reset
    setTimeout(() => {
        const modalContent = modal.querySelector('.modal-content');
        const modalBody = modal.querySelector('.modal-body');
        const modalInfo = modal.querySelector('.modal-info');
        
        // Reset scroll for modal itself
        modal.scrollTop = 0;
        
        // Reset scroll for modal content
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        // Reset scroll for modal body
        if (modalBody) {
            modalBody.scrollTop = 0;
        }
        
        // Reset scroll for modal info section (this is the main scrolling element)
        if (modalInfo) {
            modalInfo.scrollTop = 0;
        }
    }, 10);
}

// Close build modal
function closeBuildModal() {
    const modal = document.getElementById('buildModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Show specific image in carousel
function showImage(index) {
    if (!window.currentBuildImages) return;
    
    const modalImage = document.getElementById('modalImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (!modalImage) return;
    
    // Update main image
    modalImage.src = window.currentBuildImages[index];
    modalImage.setAttribute('data-current-index', index);
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Auto-scroll to active thumbnail
    if (thumbnails[index]) {
        thumbnails[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    
    window.currentImageIndex = index;
}

// Initialize image carousel controls
function initImageCarousel() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!prevBtn || !nextBtn) return;
    
    prevBtn.addEventListener('click', function() {
        if (!window.currentBuildImages) return;
        
        let newIndex = window.currentImageIndex - 1;
        if (newIndex < 0) {
            newIndex = window.currentBuildImages.length - 1;
        }
        
        showImage(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        if (!window.currentBuildImages) return;
        
        let newIndex = window.currentImageIndex + 1;
        if (newIndex >= window.currentBuildImages.length) {
            newIndex = 0;
        }
        
        showImage(newIndex);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('buildModal');
        if (!modal || modal.style.display !== 'block') return;
        
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
}

// Initialize image zoom functionality
function initImageZoom() {
    let currentZoom = 1;
    let currentPanX = 0;
    let currentPanY = 0;
    
    document.addEventListener('wheel', function(e) {
        const modal = document.getElementById('buildModal');
        const modalImage = document.getElementById('modalImage');
        
        // Only zoom if modal is open and shift key is held
        if (!modal || modal.style.display !== 'block' || !e.shiftKey || !modalImage) {
            return;
        }
        
        e.preventDefault();
        
        const zoomSpeed = 0.1;
        const minZoom = 1;
        const maxZoom = 4;
        
        // Calculate new zoom level
        if (e.deltaY < 0) {
            // Zoom in
            currentZoom = Math.min(currentZoom + zoomSpeed, maxZoom);
        } else {
            // Zoom out
            currentZoom = Math.max(currentZoom - zoomSpeed, minZoom);
        }
        
        // Reset pan when zooming back to 1x
        if (currentZoom === minZoom) {
            currentPanX = 0;
            currentPanY = 0;
        }
        
        // Apply transform
        modalImage.style.transform = `scale(${currentZoom}) translate(${currentPanX}px, ${currentPanY}px)`;
        modalImage.style.cursor = currentZoom > 1 ? 'move' : 'default';
    });
    
    // Pan functionality when zoomed
    let isPanning = false;
    let lastPanX = 0;
    let lastPanY = 0;
    
    document.addEventListener('mousedown', function(e) {
        const modal = document.getElementById('buildModal');
        const modalImage = document.getElementById('modalImage');
        
        if (!modal || modal.style.display !== 'block' || e.target !== modalImage || currentZoom <= 1) {
            return;
        }
        
        isPanning = true;
        lastPanX = e.clientX;
        lastPanY = e.clientY;
        modalImage.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isPanning) return;
        
        const modalImage = document.getElementById('modalImage');
        if (!modalImage) return;
        
        const deltaX = e.clientX - lastPanX;
        const deltaY = e.clientY - lastPanY;
        
        currentPanX += deltaX / currentZoom;
        currentPanY += deltaY / currentZoom;
        
        modalImage.style.transform = `scale(${currentZoom}) translate(${currentPanX}px, ${currentPanY}px)`;
        
        lastPanX = e.clientX;
        lastPanY = e.clientY;
    });
    
    document.addEventListener('mouseup', function() {
        if (isPanning) {
            isPanning = false;
            const modalImage = document.getElementById('modalImage');
            if (modalImage && currentZoom > 1) {
                modalImage.style.cursor = 'move';
            }
        }
    });
    
    // Reset zoom when modal closes or image changes
    const originalCloseBuildModal = window.closeBuildModal;
    window.closeBuildModal = function() {
        currentZoom = 1;
        currentPanX = 0;
        currentPanY = 0;
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.style.transform = 'scale(1) translate(0px, 0px)';
            modalImage.style.cursor = 'default';
        }
        if (originalCloseBuildModal) originalCloseBuildModal();
    };
    
    // Reset zoom when changing images
    const originalShowImage = window.showImage;
    window.showImage = function(index) {
        currentZoom = 1;
        currentPanX = 0;
        currentPanY = 0;
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.style.transform = 'scale(1) translate(0px, 0px)';
            modalImage.style.cursor = 'default';
        }
        if (originalShowImage) originalShowImage(index);
    };
}

// Add smooth scrolling for any anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

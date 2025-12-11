// ================================
// MODERN PORTFOLIO - JAVASCRIPT
// ================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initFormHandling();
    initProjectCards();
    initEducationTerminal();
    initSkillsAnimation();
    initFloatingIcons();
    initTwemoji();
});

// Detect touch device
const isTouchDevice = ('ontouchstart' in window) || 
                      (navigator.maxTouchPoints > 0) || 
                      (navigator.msMaxTouchPoints > 0);

if (isTouchDevice) {
    document.body.classList.add('touch-device');
}

// ================================
// NAVIGATION
// ================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.full-section');
    
    // Smooth scroll to section
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip external links (let them open normally)
            if (href.startsWith('http')) {
                return;
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active state
                updateActiveNav(link);
            }
        });
    });
    
    // Update active nav on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    updateActiveNav(activeLink);
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// ================================
// SCROLL ANIMATIONS
// ================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate bento cards
    document.querySelectorAll('.bento-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        animateOnScroll.observe(card);
    });
    
    // Animate project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        animateOnScroll.observe(card);
    });
    
    // Animate skill groups
    document.querySelectorAll('.skill-group').forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(30px)';
        group.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        animateOnScroll.observe(group);
    });

    // Animate skills cards
    document.querySelectorAll('.skills-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        animateOnScroll.observe(card);
    });

    // Animate hero elements
    document.querySelectorAll('.hero-profile, .hero-content, .hero-stats-bar').forEach((el, index) => {
        if (el) {
            animateOnScroll.observe(el);
        }
    });
}

// ================================
// FORM HANDLING (with Formspree)
// ================================

function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            try {
                // Send to Formspree
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                    contactForm.reset();
                    
                    // Reset button after delay
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error
                submitBtn.innerHTML = '<span>Error - Try Again</span><i class="fas fa-exclamation-circle"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #f87171)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
                
                console.error('Form error:', error);
            }
        });
    }
}

// ================================
// MOBILE MENU
// ================================

function initMobileMenu() {
    const sideNav = document.querySelector('.side-nav');
    if (!sideNav) return;
    
    // Create mobile menu toggle button
    let menuToggle = document.querySelector('.mobile-menu-toggle');
    if (!menuToggle) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.appendChild(menuToggle);
    }
    
    // Create overlay
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }
    
    let isOpen = false;
    
    function toggleMenu() {
        isOpen = !isOpen;
        sideNav.classList.toggle('mobile-open', isOpen);
        overlay.classList.toggle('active', isOpen);
        menuToggle.innerHTML = isOpen 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
        menuToggle.setAttribute('aria-expanded', isOpen.toString());
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    function closeMenu() {
        if (isOpen) {
            isOpen = false;
            sideNav.classList.remove('mobile-open');
            overlay.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking the top-right area (close button)
    sideNav.addEventListener('click', (e) => {
        const rect = sideNav.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Check if click is in top-right corner (close button area)
        if (clickX > rect.width - 60 && clickY < 60) {
            closeMenu();
        }
    });
    
    // Close menu when clicking nav links
    sideNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMenu, 100);
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeMenu();
        }
    });
}

// ================================
// PROJECT CARDS INTERACTIONS
// ================================

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// ================================
// TYPING EFFECT (Optional)
// ================================

function initTypingEffect() {
    // Typing effect disabled - using static text for cleaner UX
}

// ================================
// SKILLS SECTION ANIMATION
// ================================

function initSkillsAnimation() {
    const skillsSection = document.querySelector('.skills-section');
    if (!skillsSection) return;

    const progBars = document.querySelectorAll('.prog-fill');
    const langDots = document.querySelectorAll('.lang-dots .dot');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate programming bars
                progBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.getPropertyValue('--level');
                    }, index * 100);
                });
                
                // Animate language dots
                langDots.forEach((dot, index) => {
                    setTimeout(() => {
                        if (dot.classList.contains('filled')) {
                            dot.style.transform = 'scale(1)';
                            dot.style.opacity = '1';
                        }
                    }, index * 50);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    // Initially hide bar widths
    progBars.forEach(bar => {
        bar.style.width = '0';
        bar.style.transition = 'width 0.8s ease-out';
    });

    observer.observe(skillsSection);
}

// ================================
// SMOOTH SCROLL BEHAVIOR
// ================================

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ================================
// PERFORMANCE OPTIMIZATIONS
// ================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        // Handle scroll-based animations here if needed
    });
}, { passive: true });

// ================================
// SKILL BAR ANIMATIONS
// ================================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.classList.add('animate');
                }, index * 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-group').forEach(group => {
    skillObserver.observe(group);
});

// ================================
// CURSOR EFFECTS (Optional)
// ================================

function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 40px;
        height: 40px;
        border: 2px solid rgba(99, 102, 241, 0.5);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, border-color 0.2s ease;
        display: none;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 20 + 'px';
        cursor.style.top = e.clientY - 20 + 'px';
    });
    
    document.querySelectorAll('a, button, .project-card, .btn').forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'rgba(99, 102, 241, 0.8)';
        });
        
        elem.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(99, 102, 241, 0.5)';
        });
    });
}

// Uncomment to enable custom cursor
// if (window.innerWidth > 900) {
//     initCustomCursor();
// }

// ================================
// EDUCATION TERMINAL TYPING ANIMATION
// ================================

function initEducationTerminal() {
    const outputContainer = document.getElementById('output-container-education');
    if (!outputContainer) return;

    const content = [
        {
            icon: "fa-graduation-cap",
            lines: [
                { text: "Bachelor in Computer Science & Artificial Intelligence", color: "#6366f1", bold: true },
                { text: "IE University, Spain", indent: true },
                { text: "2020 - 2024", color: "#00d4ff", indent: true },
                { text: "Full-Ride Scholarship - Young Talented Leaders Program", color: "#22c55e", indent: true }
            ]
        },
        {
            icon: "fa-school",
            lines: [
                { text: "IB Diploma Program", color: "#6366f1", bold: true },
                { text: "Ullens School, Nepal", indent: true },
                { text: "2018 - 2020", color: "#00d4ff", indent: true },
                { text: "Excellence Award", color: "#22c55e", indent: true }
            ]
        }
    ];
    
    let currentBlockIndex = 0;
    let currentLineIndex = 0;
    let currentBlock = null;
    
    const typeContent = () => {
        if (currentBlockIndex >= content.length) {
            setTimeout(removeContent, 2000);
            return;
        }
        
        const block = content[currentBlockIndex];
        
        // Create block container if starting new block
        if (currentLineIndex === 0) {
            currentBlock = document.createElement('div');
            currentBlock.className = 'mb-4';
            currentBlock.innerHTML = `<i class="fas ${block.icon}"></i>`;
            outputContainer.appendChild(currentBlock);
        }
        
        // Type current line
        if (currentLineIndex < block.lines.length) {
            const line = block.lines[currentLineIndex];
            const lineElement = document.createElement('span');
            lineElement.className = 'typing-line';
            lineElement.style.display = 'block';
            if (line.color) lineElement.style.color = line.color;
            if (line.bold) lineElement.style.fontWeight = 'bold';
            if (line.indent) lineElement.style.marginLeft = '25px';
            
            currentBlock.appendChild(lineElement);
            
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex <= line.text.length) {
                    lineElement.textContent = line.text.substring(0, charIndex);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    currentLineIndex++;
                    setTimeout(typeContent, 100);
                }
            }, 30);
        } else {
            // Move to next block
            currentBlockIndex++;
            currentLineIndex = 0;
            setTimeout(typeContent, 500);
        }
    };
    
    const removeContent = () => {
        if (outputContainer.children.length === 0) {
            currentBlockIndex = 0;
            currentLineIndex = 0;
            setTimeout(typeContent, 1000);
            return;
        }
        
        const lastBlock = outputContainer.lastChild;
        if (!lastBlock) return;

        // Get all text lines in reverse order
        const lines = Array.from(lastBlock.querySelectorAll('.typing-line')).reverse();
        let lineIndex = 0;
        
        const removeLine = () => {
            if (lineIndex >= lines.length) {
                outputContainer.removeChild(lastBlock);
                setTimeout(removeContent, 200);
                return;
            }
            
            const line = lines[lineIndex];
            const fullText = line.textContent;
            let charIndex = fullText.length;
            
            const removingInterval = setInterval(() => {
                if (charIndex >= 0) {
                    line.textContent = fullText.substring(0, charIndex);
                    charIndex--;
                } else {
                    clearInterval(removingInterval);
                    lineIndex++;
                    setTimeout(removeLine, 50);
                }
            }, 20);
        };
        
        removeLine();
    };
    
    setTimeout(typeContent, 1500);
}

// ================================
// FLOATING BACKGROUND ICONS
// ================================

function initFloatingIcons() {
    const container = document.getElementById('floating-icons-container');
    if (!container) return;
    
    // Array of tech icons
    const icons = [
        'fas fa-brain',
        'fab fa-python',
        'fas fa-database',
        'fas fa-code',
        'fas fa-robot',
        'fas fa-network-wired',
        'fas fa-microchip',
        'fas fa-server',
        'fas fa-cogs',
        'fas fa-chart-line',
        'fas fa-cube',
        'fas fa-terminal',
        'fas fa-laptop-code',
        'fas fa-project-diagram',
        'fas fa-layer-group',
        'fas fa-sitemap',
        'fas fa-graduation-cap',
        'fas fa-lightbulb',
        'fas fa-bolt',
        'fas fa-atom',
        'fas fa-wave-square',
        'fas fa-chart-area',
        'fas fa-bezier-curve',
        'fas fa-diagram-project',
        'fab fa-react',
        'fab fa-node-js',
        'fab fa-docker',
        'fab fa-git-alt',
        'fas fa-cloud',
        'fas fa-fire',
        'fas fa-flask',
        'fas fa-infinity',
        'fas fa-memory',
        'fas fa-brain-circuit',
        'fas fa-rocket',
        'fas fa-satellite-dish',
        'fas fa-dna',
        'fas fa-fingerprint',
        'fas fa-shield-halved',
        'fas fa-lock'
    ];
    
    const numberOfIcons = 35; // Increased from 24 to 35
    const minDistance = 8; // Minimum distance between icons in percentage units
    const placedIcons = [];
    
    // Function to check if position overlaps with existing icons
    function isOverlapping(x, y) {
        for (const icon of placedIcons) {
            const distance = Math.sqrt(
                Math.pow(x - icon.x, 2) + 
                Math.pow(y - icon.y, 2)
            );
            if (distance < minDistance) {
                return true;
            }
        }
        return false;
    }
    
    // Generate random non-overlapping positions
    let attempts = 0;
    const maxAttempts = 500;
    
    for (let i = 0; i < numberOfIcons && attempts < maxAttempts; attempts++) {
        // Random position (5% to 95% to keep icons away from edges)
        const x = Math.random() * 85 + 5;
        const y = Math.random() * 85 + 5;
        
        // Check for overlap
        if (!isOverlapping(x, y)) {
            // Pick a random icon
            const iconClass = icons[Math.floor(Math.random() * icons.length)];
            const delay = Math.random() * 3.5;
            
            // Create icon element
            const iconDiv = document.createElement('div');
            iconDiv.className = 'floating-icon';
            iconDiv.style.setProperty('--delay', `${delay}s`);
            iconDiv.style.setProperty('--x', `${x}%`);
            iconDiv.style.setProperty('--y', `${y}%`);
            
            const iconElement = document.createElement('i');
            iconElement.className = iconClass;
            iconDiv.appendChild(iconElement);
            
            container.appendChild(iconDiv);
            
            // Store position for overlap checking
            placedIcons.push({ x, y });
            i++;
        }
    }
}

// ================================
// TWEMOJI INITIALIZATION
// ================================

function initTwemoji() {
    if (typeof twemoji !== 'undefined') {
        twemoji.parse(document.body, {
            folder: 'svg',
            ext: '.svg'
        });
    }
}

// ================================
// CONSOLE MESSAGE
// ================================

console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cLooking at the code? I like your style! 🚀', 'font-size: 14px; color: #f59e0b;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 12px; color: #10b981;');

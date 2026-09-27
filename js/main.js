/**
 * Raghad Abu Aziz - Portfolio JavaScript Engine
 * Modern, Dependency-Free, Modular & Accessible
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Projects Data Definition
  const projectsData = [
    {
      id: 'buzoor-platform',
      title: 'Buzoor Educational & Diagnostic Platform',
      subtitle: 'Graduation Capstone — Systems Architecture & Database Engineering',
      category: 'databases',
      categories: ['databases', 'fullstack'],
      image: 'assets/images/buzoor-level.jpg',
      shortDesc: 'Enterprise-grade educational diagnostic engine with a 21-table normalized PostgreSQL schema, RBAC security, JSONB audit logging, and adaptive skill remediation.',
      overview: 'Buzoor is an end-to-end adaptive diagnostic learning platform designed to assess and improve language competencies for Palestinian elementary curricula. The system evaluates students through standardized diagnostic trees, analyzes error patterns, and dynamically generates customized remediation pathways.',
      highlights: [
        'Engineered an architectural database design with 21 relational tables adhering strictly to 3NF standards in PostgreSQL.',
        'Implemented JSONB question snapshots within session records to guarantee immutable historical auditability across curriculum revisions.',
        'Formulated adaptive diagnostic assessment logic encompassing 17 language skills and 119 standardized test items.',
        'Authored comprehensive Software Architecture Design Documents (ADD), Authentication API specs, and Role-Based Access Control (RBAC) tiers.'
      ],
      tags: ['PostgreSQL', 'Software Architecture', 'REST APIs', '3NF Database Design', 'RBAC', 'Python / SQL'],
      codeLink: 'https://github.com/r409124013-svg'
    },
    {
      id: 'ibtesam-shop',
      title: 'Ibtesam Plant Shop — E-Commerce Web Platform',
      subtitle: 'Modern Responsive Web Application with Full RTL Support',
      category: 'fullstack',
      categories: ['fullstack'],
      image: 'assets/images/plant-shop-preview.jpg',
      shortDesc: 'A responsive, high-performance web storefront for botanical products featuring product catalog exploration, interactive cart handling, and full Arabic typography.',
      overview: 'An e-commerce front-end and web foundation project designed for aesthetic botanical retail. Focuses on seamless responsive layouts, touch-friendly UI components, accessible navigation, and localized RTL styling.',
      highlights: [
        'Developed semantic HTML5 structure with modern CSS3 Flexbox and Grid layouts optimized across mobile, tablet, and desktop.',
        'Engineered interactive product listing components with discount tags, dynamic pricing cards, and shopping cart integrations.',
        'Created custom responsive navigation with sticky glassmorphism headers and smooth section transitions.',
        'Implemented contact inquiry validation and modular component styling.'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI/UX', 'RTL Localization', 'PHP'],
      codeLink: 'https://github.com/r409124013-svg'
    },
    {
      id: 'library-oop-system',
      title: 'Enterprise Library Management System',
      subtitle: 'Object-Oriented Architecture & Polymorphic Data Modeling',
      category: 'algorithms',
      categories: ['algorithms'],
      iconPlaceholder: '📚',
      shortDesc: 'A robust desktop software architecture in Java utilizing inheritance, polymorphism, and modular catalogs to manage book circulation and memberships.',
      overview: 'Developed as part of Advanced Programming & OOP coursework, this project manages complex library logistics. It features structured class hierarchies differentiating between Fiction, Non-Fiction, and Reference materials with unique borrowing rules and membership tiers.',
      highlights: [
        'Implemented strict OOP principles: Abstraction, Encapsulation, Multi-level Inheritance, and Polymorphic method dispatch.',
        'Designed decoupled entities: Book, FictionBook, NonFictionBook, ReferenceBook, Member, and Catalog.',
        'Built dynamic catalog search and validation mechanisms preventing unauthorized borrowings of restricted reference assets.',
        'Clean NetBeans project structure with automated build scripts and modular test suites.'
      ],
      tags: ['Java', 'Object-Oriented Programming (OOP)', 'Polymorphism', 'Data Structures', 'Software Design'],
      codeLink: 'https://github.com/r409124013-svg'
    },
    {
      id: 'isbn-verification-db',
      title: 'Automated ISBN Verification & Database Pipeline',
      subtitle: 'Python Data Pipeline with Atomic SQLite Operations',
      category: 'databases',
      categories: ['databases'],
      iconPlaceholder: '🔍',
      shortDesc: 'Automated Python tool pipeline for validating international standard book numbers (ISBN-10 & ISBN-13), parsing metadata, and atomic SQLite persistence.',
      overview: 'A robust data processing utility built in Python that sanitizes, validates, and archives library inventory into an ACID-compliant SQLite database. Uses mathematical checksum validation algorithms to eliminate corrupt data entry.',
      highlights: [
        'Implemented mathematical modulus checksum verification routines for both ISBN-10 and ISBN-13 standard formats.',
        'Created transactional SQLite persistence layer with parameterized queries to prevent SQL injection vulnerabilities.',
        'Implemented batch processing capabilities reading from unstructured log and text sources with comprehensive error handling.',
        'Integrated clean CLI reporting and status telemetry for automated inventory auditing.'
      ],
      tags: ['Python', 'SQLite', 'Data Sanitization', 'Algorithms', 'Database Automation'],
      codeLink: 'https://github.com/r409124013-svg'
    },
    {
      id: 'parking-sensor-iot',
      title: 'Intelligent Ultrasonic Parking Assistant',
      subtitle: 'Real-Time Embedded Collision Avoidance System',
      category: 'embedded',
      categories: ['embedded'],
      image: 'assets/images/parking-circuit.png',
      shortDesc: 'Embedded system utilizing ultrasonic distance measurement, multi-tiered visual LED alerts, and audible frequency alerts for driver safety.',
      overview: 'An IoT hardware engineering project that interfaces an Arduino Uno microcontroller with ultrasonic echo transceivers. Calculates precise distances in real-time to alert drivers against physical obstructions with progressive sensory cues.',
      highlights: [
        'Engineered complete electronic schematic and breadboard wiring linking HC-SR04 sensor, LEDs, buzzer, and microcontroller.',
        'Programmed microsecond-level trigger and pulse timing algorithms in C++ to compute accurate physical distances.',
        'Constructed multi-tiered safety feedback loops (safe, warning, critical proximity) with dynamic audio frequency modulation.',
        'Documented hardware wiring diagram and architectural README for reproducibility.'
      ],
      tags: ['Arduino', 'C / C++', 'HC-SR04 Ultrasonic', 'Embedded Systems', 'Circuit Design', 'IoT'],
      codeLink: 'https://github.com/r409124013-svg'
    },
    {
      id: 'rfid-access-control',
      title: 'Secure RFID Identity & Access Control System',
      subtitle: 'Hardware-Level Authentication via MFRC522 RFID Module',
      category: 'embedded',
      categories: ['embedded'],
      iconPlaceholder: '💳',
      shortDesc: 'Hardware-level authentication system decoding high-frequency RFID cards/fobs in C++ for secure physical access verification.',
      overview: 'Designed to safeguard physical laboratory and facility entrances, this embedded system utilizes SPI communication between an Arduino microcontroller and an MFRC522 RFID reader to authenticate contactless credentials.',
      highlights: [
        'Configured Serial Peripheral Interface (SPI) communications with RC522 transceiver.',
        'Implemented algorithms to extract, format, and match 4-byte and 7-byte Non-UID (NUID) credentials against authorized access tables.',
        'Built real-time visual indicator responses signaling access granted vs. unauthorized denial states.',
        'Optimized embedded loop performance for sub-100ms card read latency.'
      ],
      tags: ['Arduino', 'C / C++', 'RFID RC522', 'SPI Protocol', 'Hardware Security', 'Embedded Systems'],
      codeLink: 'https://github.com/r409124013-svg'
    },
    {
      id: 'ai-agents-search',
      title: 'AI Intelligent Agents & Heuristic Search Systems',
      subtitle: 'Formal Agent Modeling & Combinatorial Problem Solving',
      category: 'algorithms',
      categories: ['algorithms'],
      iconPlaceholder: '🤖',
      shortDesc: 'Implementation of artificial intelligence state-space search algorithms and formal PEAS agent formulations for complex constraint satisfaction.',
      overview: 'A deep dive into classical and modern Artificial Intelligence paradigms, implementing state-space exploration heuristics for combinatorial puzzles like the 8-Queens problem, adversarial game trees (Tic-Tac-Toe), and conducting domain research on AI in Healthcare & NLP.',
      highlights: [
        'Constructed formal PEAS (Performance, Environment, Actuators, Sensors) agent specifications for intelligent environments.',
        'Implemented backtracking and heuristic search strategies resolving the 8-Queens constraint satisfaction challenge.',
        'Researched and authored technical analyses on recent trends in Natural Language Processing (NLP) and diagnostic AI in Healthcare.',
        'Analyzed time and space complexity tradeoffs across depth-first, breadth-first, and informed heuristic search strategies.'
      ],
      tags: ['Python', 'Artificial Intelligence', 'Heuristic Search', 'PEAS Modeling', 'Algorithms', 'Research'],
      codeLink: 'https://github.com/r409124013-svg'
    }
  ];

  // 2. Render Project Cards
  const projectsContainer = document.getElementById('projects-container');
  
  function renderProjects(filter = 'all') {
    projectsContainer.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.categories.includes(filter));

    filteredProjects.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${project.title}`);

      // Thumbnail logic
      let thumbHtml = '';
      if (project.image) {
        thumbHtml = `
          <div class="project-thumb">
            <img src="${project.image}" alt="${project.title} Preview" loading="lazy">
            <span class="project-badge-overlay">${project.tags[0]}</span>
          </div>
        `;
      } else {
        thumbHtml = `
          <div class="project-thumb">
            <div class="project-thumb-placeholder">${project.iconPlaceholder || '💻'}</div>
            <span class="project-badge-overlay">${project.tags[0]}</span>
          </div>
        `;
      }

      const tagsHtml = project.tags.slice(0, 4).map(tag => `<span class="tech-pill">${tag}</span>`).join('');

      card.innerHTML = `
        ${thumbHtml}
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDesc}</p>
          <div class="project-tech">
            ${tagsHtml}
          </div>
          <div class="project-footer">
            <span class="view-details-link">
              <span>View Architecture & Specs</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(project));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(project);
        }
      });

      projectsContainer.appendChild(card);
    });
  }

  // Initial render
  renderProjects('all');

  // 3. Project Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // 4. Modal Interactions
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCloseSecondary = document.getElementById('modal-close-secondary');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalStack = document.getElementById('modal-stack');
  const modalImg = document.getElementById('modal-img');
  const modalImgContainer = document.getElementById('modal-image-container');
  const modalCodeLink = document.getElementById('modal-code-link');

  function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalCategory.textContent = project.tags[0];
    modalDesc.textContent = project.overview;

    // Highlights list
    modalHighlights.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');

    // Tech stack badges
    modalStack.innerHTML = project.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');

    // Image container
    if (project.image) {
      modalImg.src = project.image;
      modalImg.alt = project.title;
      modalImgContainer.style.display = 'block';
    } else {
      modalImgContainer.style.display = 'none';
    }

    // Code link
    if (project.codeLink) {
      modalCodeLink.href = project.codeLink;
      modalCodeLink.style.display = 'inline-flex';
    } else {
      modalCodeLink.style.display = 'none';
    }

    // Open native dialog
    if (typeof modal.showModal === 'function') {
      modal.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeProjectModal() {
    if (modal.open) {
      modal.close();
      document.body.style.overflow = '';
    }
  }

  modalCloseBtn.addEventListener('click', closeProjectModal);
  modalCloseSecondary.addEventListener('click', closeProjectModal);

  // Close when clicking outside of modal dialog box
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeProjectModal();
    }
  });

  // 5. Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Retrieve saved theme or prefer dark
  const savedTheme = localStorage.getItem('raghad_theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('raghad_theme', newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
  });

  // 6. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 7. Active Nav Link on Scroll (IntersectionObserver)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));

  // 8. Copy Email to Clipboard
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'r409124013@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!');
      }).catch(() => {
        showToast('Failed to copy. Email: ' + email);
      });
    });
  });

  // 9. Toast Notification Handler
  const toast = document.getElementById('toast');
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // 10. Contact Form Interactive Handler
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Display success message
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `
        <strong>Thank you, ${name}!</strong> Your message has been prepared. 
        You can also email directly at <a href="mailto:r409124013@gmail.com" style="text-decoration: underline; color: inherit;">r409124013@gmail.com</a>.
      `;
      formFeedback.style.display = 'block';

      showToast('Message sent successfully!');
      contactForm.reset();

      // Scroll feedback into view smoothly
      formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});

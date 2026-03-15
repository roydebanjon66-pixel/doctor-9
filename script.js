
document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================
     0. Language Translation Dictionary
     ========================================================== */
  const translations = {
    en: {
      page_title: "Afsan Dental Care | Best Dental Clinic in Eastern Housing Pallabi",
      tagline: "Skyline Dental Care",
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_gallery: "Gallery",
      nav_book: "Appointment",
      hero_title_part1: "Modern Dental Care by",
      hero_title_accent: "Dr. Afsana Jui",
      hero_desc: "Expert dental services by Dr. Afsana Jui at Afsan Dental Care. We provide advanced oral and maxillofacial surgery, endodontics, and facial aesthetics.",
      btn_book_now: "Book Appointment",
      btn_consult: "Consult Now",
      service_1_title: "Dental Checkup",
      service_1_desc: "Comprehensive dental examinations to prevent problems before they start.",
      service_2_title: "Teeth Cleaning",
      service_2_desc: "Professional scaling and polishing for a fresh, healthy mouth.",
      service_3_title: "Root Canal Treatment",
      service_3_desc: "Painless microscopic therapy to save your natural damaged teeth.",
      service_4_title: "Dental Filling",
      service_4_desc: "High-quality cosmetic fillings to restore cavities invisibly.",
      service_5_title: "Dental Implant",
      service_5_desc: "Permanent teeth replacement that feels and functions naturally.",
      service_6_title: "Teeth Whitening",
      service_6_desc: "Professional whitening for a brighter and more confident smile.",
      service_7_title: "Orthodontic Treatment",
      service_7_desc: "Straighten your teeth with modern braces and clear aligners.",
      service_8_title: "Cosmetic Dentistry",
      service_8_desc: "Smile makeovers, veneers, and aesthetic dental enhancements.",
      learn_more: "Learn More",
      footer_desc: "Afsan Dental Care. Your trusted partner for modern dental treatments in Dhaka.",
      contact_info: "Contact Info",
      quick_links: "Quick Links",
      visit_us: "Visit Us",
      nav_contact: "Contact",
      badge_services: "Our Expertise",
      services_header: "Advanced Dental Solutions",
      services_subtitle: "Expert care for your oral health.",
      badge_gallery: "Our Gallery",
      gallery_header: "Happy Patients",
      badge_contact: "Contact Us",
      contact_header: "Get In Touch",
      btn_call_now: "Call Now",
      btn_directions: "Get Directions",
      footer_visit_us: "Visit Our Clinic",
      form_name: "Full Name",
      form_phone: "Phone Number",
      form_service: "Preferred Service",
      form_date: "Preferred Date",
      form_message: "Your Message (Optional)",
      form_submit: "Confirm Request",
      booking_hours: "Opening Hours",
      copyright: "© 2026 Afsan Dental Care. All Rights Reserved.",
      doctor_name: "Dr. Afsana Jui",
      price_prefix: "Price: ",
      price_1: "৳1,500",
      price_2: "৳2,000",
      price_3: "৳12,000",
      price_4: "৳2,000",
      price_5: "৳55,000",
      price_6: "৳15,000",
      price_7: "৳80,000",
      price_8: "৳35,000"
    },
    bn: {
      page_title: "আফসান ডেন্টাল কেয়ার | ইস্টার্ন হাউজিং পল্লবীর সেরা ডেন্টাল ক্লিনিক",
      tagline: "স্কাইলাইন ডেন্টাল কেয়ার",
      nav_home: "হোম",
      nav_about: "আমাদের সম্পর্কে",
      nav_services: "সেবা",
      nav_gallery: "গ্যালারি",
      nav_contact: "যোগাযোগ",
      nav_book: "অ্যাপয়েন্টমেন্ট",
      hero_title_part1: "আধুনিক ডেন্টাল কেয়ার ও",
      hero_title_accent: "ডাঃ আফসানা জুই",
      hero_desc: "ডাঃ আফসানা জুইয়ের তত্ত্বাবধানে উন্নত ডেন্টাল সেবা। আমরা দিচ্ছি উন্নতমানের ওরাল এন্ড ম্যাক্সিলোফেসিয়াল সার্জারি এবং ফেসিয়াল এসথেটিকস চিকিৎসা।",
      btn_book_now: "অ্যাপয়েন্টমেন্ট নিন",
      btn_consult: "পরামর্শ নিন",
      service_1_title: "ডেন্টাল চেকআপ",
      service_1_desc: "দাঁতের সমস্যা শুরু হওয়ার আগেই তা প্রতিরোধ করার জন্য বিস্তারিত পরীক্ষা।",
      service_2_title: "দাঁত পরিষ্কার",
      service_2_desc: "মুখের সতেজতা এবং সুস্বাস্থ্যের জন্য পেশাদার স্কেলিং ও পলিশিং।",
      service_3_title: "রুট ক্যানেল চিকিৎসা",
      service_3_desc: "আপনার ক্ষতিগ্রস্ত প্রাকৃতিক দাঁত বাঁচাতে ব্যথামুক্ত মাইক্রোস্কোপিক থেরাপি।",
      service_4_title: "ডেন্টাল ফিলিং",
      service_4_desc: "গর্ত অদৃশ্যভাবে পূরণ করতে উচ্চ-মানের কসমেটিক ফিলিং।",
      service_5_title: "ডেন্টাল ইমপ্ল্যান্ট",
      service_5_desc: "স্থায়ী দাঁত প্রতিস্থাপন যা প্রাকৃতিকভাবে কাজ করে।",
      service_6_title: "দাঁত সাদা করা",
      service_6_desc: "একটি উজ্জ্বল এবং আরো আত্মবিশ্বাসী হাসির জন্য পেশাদার ব্যবস্থা।",
      service_7_title: "অর্থোডন্টিক চিকিৎসা",
      service_7_desc: "আধুনিক ব্রেসিস এবং অ্যালাইনার দিয়ে বাঁকা দাঁত সোজা করুন।",
      service_8_title: "কসমেটিক ডেন্টিস্ট্রী",
      service_8_desc: "স্মাইল মেকওভার, ভিনিয়ার এবং নান্দনিক ডেন্টাল উন্নয়ন।",
      learn_more: "আরও জানুন",
      footer_desc: "আফসান ডেন্টাল কেয়ার। ঢাকার একটি বিশ্বস্ত ডেন্টাল ক্লিনিক।",
      contact_info: "যোগাযোগ",
      quick_links: "দ্রুত লিঙ্ক",
      visit_us: "আমাদের ঠিকানা",
      badge_services: "আমাদের দক্ষতা",
      services_header: "উন্নত ডেন্টাল সমাধান",
      services_subtitle: "আপনার মৌখিক স্বাস্থ্যের জন্য বিশেষজ্ঞ যত্ন।",
      badge_gallery: "গ্যালারি",
      gallery_header: "হাস্যোজ্জ্বল রোগী",
      badge_contact: "যোগাযোগ করুন",
      contact_header: "যোগাযোগ",
      btn_call_now: "কল করুন",
      btn_directions: "অবস্থান দেখুন",
      footer_visit_us: "ক্লিনিকে আসুন",
      form_name: "আপনার নাম",
      form_phone: "ফোন নম্বর",
      form_service: "পছন্দসই সেবা",
      form_date: "তারিখ",
      form_message: "আপনার বার্তা (ঐচ্ছিক)",
      form_submit: "অনুরোধ পাঠান",
      booking_hours: "খোলার সময়",
      copyright: "© ২০২৬ আফসান ডেন্টাল কেয়ার। সর্বস্বত্ব সংরক্ষিত।",
      doctor_name: "ডাঃ আফসানা জুই",
      price_prefix: "মূল্য: ",
      price_1: "১,৫০০ টাকা",
      price_2: "২,০০০ টাকা",
      price_3: "১২,০০০ টাকা",
      price_4: "২,০০০ টাকা",
      price_5: "৫৫,০০০ টাকা",
      price_6: "১৫,০০০ টাকা",
      price_7: "৮০,০০০ টাকা",
      price_8: "৩৫,০০০ টাকা"
    }
  };

  const setLanguage = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'TITLE') {
          document.title = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Save language preference
    localStorage.setItem('ma_dental_lang', lang);

    // Apply font-family change if needed for Bangla
    document.body.style.fontFamily = lang === 'bn' ? "'Hind Siliguri', sans-serif" : "'Plus Jakarta Sans', sans-serif";
  };

  // Language buttons
  const enBtn = document.getElementById('lang-en');
  const bnBtn = document.getElementById('lang-bn');

  if (enBtn && bnBtn) {
    enBtn.addEventListener('click', () => setLanguage('en'));
    bnBtn.addEventListener('click', () => setLanguage('bn'));
  }

  // Initial language check
  const savedLang = localStorage.getItem('ma_dental_lang') || 'en';
  setLanguage(savedLang);
  /* ==========================================================
     1. Preloader Logic
     ========================================================== */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const hidePreloader = () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }, 500);
    };

    window.addEventListener('load', hidePreloader);
    
    // Fallback: hide preloader after 3 seconds anyway
    setTimeout(hidePreloader, 3000);
  }

  /* ==========================================================
     2. Navigation & Scroll Effects
     ========================================================== */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  const scrollThreshold = 80;

  const handleScroll = () => {
    // Navbar Background
    if (navbar && window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else if (navbar) {
      navbar.classList.remove('scrolled');
    }

    // Scroll Top Button Visibility
    if (scrollTopBtn) {
      if (window.scrollY > 600) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Smooth Scroll Top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================
     3. Mobile Menu Toggle
     ========================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const body = document.body;

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      
      if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars-staggered', 'fa-xmark');
        body.style.overflow = 'hidden'; // Prevent scroll when menu is open
      } else {
        icon.classList.replace('fa-xmark', 'fa-bars-staggered');
        body.style.overflow = '';
      }
    });

    // Close menu when clicking a link and handle smooth scroll for same-page anchors
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // If it's a same-page anchor
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offset = 80; // Navbar height
            const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPos, behavior: 'smooth' });
          }
        }
        
        navLinks.classList.remove('active');
        mobileToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars-staggered');
        body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars-staggered');
        body.style.overflow = '';
      }
    });
  }

  /* ==========================================================
     4. Number Counter Animation
     ========================================================== */
  const counters = document.querySelectorAll('.counter');
  const counterSpeed = 50; // Increasing takes longer

  const startCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/,/g, '');
        const suffix = counter.getAttribute('data-suffix') || '';
        const increment = target / counterSpeed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment).toLocaleString() + suffix;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toLocaleString() + suffix;
        }
      };
      updateCount();
    });
  };

  // Intersection Observer for Statistics
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startCounters();
        observer.unobserve(statsSection);
      }
    }, { threshold: 0.5 });
    observer.observe(statsSection);
  }

  /* ==========================================================
     5. Before & After Interactive Slider
     ========================================================== */
  const baSlider = document.getElementById('baSlider');
  const baHandle = document.getElementById('baHandle');
  const baAfter = document.querySelector('.ba-image-after');

  if (baSlider && baHandle && baAfter) {
    const moveSlider = (e) => {
      const rect = baSlider.getBoundingClientRect();
      let xPos = 0;

      // Handle both touch and mouse
      if (e.type.includes('mouse')) {
        xPos = e.pageX - rect.left - window.scrollX;
      } else if (e.touches) {
        xPos = e.touches[0].pageX - rect.left - window.scrollX;
      }

      // Constraints
      if (xPos < 0) xPos = 0;
      if (xPos > rect.width) xPos = rect.width;

      const percentage = (xPos / rect.width) * 100;
      baAfter.style.width = `${percentage}%`;
      baHandle.style.left = `${percentage}%`;
    };

    baSlider.addEventListener('mousemove', moveSlider);
    baSlider.addEventListener('touchmove', moveSlider, { passive: true });
  }

  /* ==========================================================
     6. FAQ Accordion Logic
     ========================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      faqItems.forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('i').classList.replace('fa-minus', 'fa-plus');
      });

      // If clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
        question.querySelector('i').classList.replace('fa-plus', 'fa-minus');
      }
    });
  });

  /* ==========================================================
     7. Booking Form Simulation
     ========================================================== */
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = appointmentForm.querySelector('button');
      const originalHTML = submitBtn.innerHTML;

      // Loading State
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';

      // Simulate API call
      setTimeout(() => {
        submitBtn.style.background = '#10b981';
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Booking Confirmed!';
        
        // Success Toast Notification (Optional could be added here)
        appointmentForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHTML;
          submitBtn.style.background = '';
        }, 3000);
      }, 1800);
    });
  }
});
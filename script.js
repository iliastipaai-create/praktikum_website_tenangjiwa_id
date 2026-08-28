document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. HAMBURGER MENU (MOBILE NAVIGATION)
       ========================================== */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links li a');

    if (hamburger && navLinks) {
        // Toggle menu saat hamburger di-klik
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Tutup menu otomatis saat salah satu link navigasi di-klik (di mobile)
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    /* ==========================================
       2. STICKY NAVBAR SHADOW ON SCROLL
       ========================================== */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
        }
    });

    /* ==========================================
       3. CONTACT FORM HANDLING
       ========================================== */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah reload halaman

            // Ambil nilai dari input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Simulasi notifikasi sukses
            alert(`Terima kasih, ${name}! Pesanmu telah terkirim. Kami akan menghubungi lewat email (${email}) secepatnya.`);

            // Reset form setelah terkirim
            contactForm.reset();
        });
    }

});
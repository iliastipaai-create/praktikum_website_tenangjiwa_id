document.addEventListener("DOMContentLoaded", function () {
    
    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("toggle");
        });

        // Tutup menu saat salah satu link diklik (khusus di mobile)
        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.classList.remove("toggle");
            });
        });
    }

    // Form Contact
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const name = document.getElementById("name") ? document.getElementById("name").value : "Pengguna";

            alert(`Terima kasih, ${name}! Pesan kamu telah terkirim. Tim TenangJiwa.id akan segera menghubungimu.`);

            contactForm.reset();
        });
    }

    // Logika tes skrining mandiri
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");
    const resultText = document.getElementById("resultText");

    if (quizForm) {
        quizForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let totalScore = 0;
            const q1 = parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0);
            const q2 = parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0);
            const q3 = parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0);

            totalScore = q1 + q2 + q3;

            let categoryMessage = "";

            if (totalScore <= 2) {
                categoryMessage = `<strong>Kondisi Emosional Relatif Stabil (Skor: ${totalScore}/9)</strong><br>` +
                    "Tingkat cemas dan kelelahanmu tergolong minimal. Pertahankan pola hidup sehat, istirahat cukup, dan luangkan waktu untuk relaksasi.";
            } else if (totalScore <= 5) {
                categoryMessage = `<strong>Indikasi Stres / Kecemasan Ringan (Skor: ${totalScore}/9)</strong><br>` +
                    "Kamu mungkin sedang menghadapi tekanan atau beban harian yang cukup menyita energi. Luangkan waktu untuk istirahat sejenak dan bicarakan perasaanmu dengan orang terpercaya.";
            } else {
                categoryMessage = `<strong>Indikasi Tingkat Stres / Kecemasan Cukup Tinggi (Skor: ${totalScore}/9)</strong><br>` +
                    "Skor kamu menunjukkan adanya gejala stres atau beban emosional yang cukup berat. Kami sangat menyarankanmu untuk berdiskusi dengan psikolog klinis kami agar mendapatkan pendampingan yang tepat.";
            }

            resultText.innerHTML = categoryMessage;
            quizResult.classList.remove("hidden");

            quizResult.scrollIntoView({ behavior: "smooth" });
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Swiper.js for the 3D Coverflow Project Carousel
    const swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 1,
        coverflowEffect: {
            rotate: 35,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
        },
    });

    // 2. Glitch effect interval for the main title
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                glitchText.style.transform = 'translate(0, 0)';
            }, 50);
        }, 3000);
    }

    // 3. Terminal Typewriter Effect (Intro)
    const type1 = document.getElementById("typewriter-1");
    const type2 = document.getElementById("typewriter-2");
    const bioText = document.getElementById("bio-text-reveal");
    const promptLine = document.getElementById("prompt-line-reveal");

    if (type1 && type2) {
        const text1 = type1.getAttribute("data-text");
        const text2 = type2.getAttribute("data-text");

        let i = 0;
        let j = 0;

        type1.classList.add("typewriter-cursor");

        function typeWriter1() {
            if (i < text1.length) {
                type1.innerHTML += text1.charAt(i);
                i++;
                setTimeout(typeWriter1, 40);
            } else {
                type1.classList.remove("typewriter-cursor");
                type2.classList.add("typewriter-cursor");
                setTimeout(typeWriter2, 400);
            }
        }

        function typeWriter2() {
            if (j < text2.length) {
                type2.innerHTML += text2.charAt(j);
                j++;
                setTimeout(typeWriter2, 40);
            } else {
                type2.classList.remove("typewriter-cursor");
                if (bioText) bioText.classList.remove("typewriter-hidden");
                if (promptLine) promptLine.classList.remove("typewriter-hidden");
            }
        }

        setTimeout(typeWriter1, 800);
    }

    // 4. Interactive Terminal Tabs (About, Motivation, Vision)
    const terminalData = {
        about: {
            title: ">> ABOUT",
            cmd: "> Loading profile...",
            text: "I am a Mechatronics Engineering student at Ain Shams University, specializing in Bio-Mechatronics, with a strong interest in developing assistive and rehabilitation technologies that address real human needs.\n\nAs a USAID Scholar, I gained valuable leadership experience and worked within diverse environments that supported my academic and personal growth. I also applied my interest in biomechanics by working with children with special needs, designing simple exercises to improve fine motor skills.\n\nTechnically, I have worked on projects including gait analysis, ROV design, and automotive systems, building a solid foundation in engineering through hands-on experience in modeling, simulation, embedded systems, and mechanical design. I currently maintain a GPA of 3.3 in a rigorous engineering program and was recognized with an Excellence Award from the university for my academic performance.\n\nBeyond academics, I served as Chairwoman of the IEEE Ain Shams Student Branch, where I helped organize technical events reaching over 2,000 students and fostered collaboration and knowledge sharing.",
            image: "about_rawan.jpg"
        },
        motivation: {
            title: ">> MOTIVATION",
            cmd: "> Executing motive....",
            text: "My motivation comes from growing up with my mother, a specialist in special needs education. Watching her work closely with children helped me understand the challenges they face and how meaningful support can improve their daily lives. Over time, I became interested in how engineering could help address these challenges. This is what led me to choose Bio-Mechatronics, where I can apply engineering to real human needs, particularly in rehabilitation and assistive technologies.",
            image: "motivation_rawan.jpg"
        },
        vision: {
            title: ">> VISION",
            cmd: "> Loading vision....",
            text: "I aspire to create meaningful impact by applying engineering to improve people’s lives, with a focus on making technology more accessible, inclusive, and human-centered.\n\nI believe in a future where innovation supports not only advancement, but also equality, where individuals have access to the tools and opportunities they need to live healthier and more independent lives. Through my work, I aim to contribute to solutions that are practical, affordable, and designed with real human needs in mind.\n\nI am also driven by a desire to connect with different cultures and perspectives, learning from diverse experiences and bringing those insights back to my community. I believe that understanding and collaboration across cultures are essential for building more effective and inclusive technologies.\n\nUltimately, I hope to contribute to a world that is not only technologically advanced, but also more connected, compassionate, and supportive of people’s well-being.",
            image: "vision_rawan.jpg"
        }
    };

    const screen = document.getElementById('terminal-screen');
    const titleElement = document.getElementById('terminal-title');
    const imageElement = document.getElementById('dynamic-image');
    const buttons = document.querySelectorAll('.cyber-tab');
    let typingInterval;

    function typeWriterEffect(dataId) {
        clearInterval(typingInterval);
        const data = terminalData[dataId];
        titleElement.innerHTML = data.title;

        // Update Dots
        document.querySelectorAll('.indicator-dot').forEach(dot => {
            dot.classList.remove('active');
        });
        const activeDot = document.getElementById('dot-' + dataId);
        if (activeDot) activeDot.classList.add('active');

        // Update Image
        if (imageElement) {
            imageElement.style.opacity = '0';
            setTimeout(() => {
                imageElement.src = data.image;
                imageElement.style.opacity = '0.8';
            }, 300);
        }

        // Update Text
        if (screen) {
            screen.innerHTML = `<span class="cmd-text" style="color: #00ffff; display: block; margin-bottom: 10px;">${data.cmd}</span><span id="typed-text"></span><span class="typing-cursor"></span>`;
            const textContainer = document.getElementById('typed-text');
            const textToType = data.text;
            let charIndex = 0;
            const typingSpeed = 20;

            typingInterval = setInterval(() => {
                if (charIndex < textToType.length) {
                    textContainer.innerHTML += textToType.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, typingSpeed);
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentBtn = e.currentTarget;
            buttons.forEach(b => b.classList.remove('active'));
            currentBtn.classList.add('active');
            const targetData = currentBtn.getAttribute('data-target');
            typeWriterEffect(targetData);
        });
    });

    // Start with 'about' tab active
    if (buttons.length > 0) typeWriterEffect('about');
});

// 5. Projects Database (تم تعديل مسار وصورة قدرات هنا)
const projectsDatabase = {
    "asu-racing": {
        title: "ASU RACING // Formula Student",
        image: "images/racing-image.jpg",
        desc: "Here you can paste all the detailed text from your PDF about ASU Racing.\n\n- Role: Mechanical Design\n- Software: SolidWorks, ANSYS\n- Outcome: Optimized suspension geometry..."
    },
    "qudrat": {
        title: "QUDRAT ACADEMY // Volunteering",
        image: "images/qudrat-logo.jpg", // <--- هنا حطينا صورة الرسمة بالمسار الصح
        desc: "Volunteering experience in Bio-Mechatronics and rehabilitation, focusing on fine motor skills development for children with special needs."
    },
    "ieee": {
        title: "IEEE ASU SB // Leadership",
        image: "images/ieee-group.jpg", // الصورة المنبثقة
        desc: "Progressed from Freshman Representative..."
    }
};

// 6. Modal Logic (النافذة المنبثقة)
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');
const viewBtns = document.querySelectorAll('.view-btn');

if (modal && closeBtn) {
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const projectInfo = projectsDatabase[projectId];

            if (projectInfo) {
                document.getElementById('modal-title').textContent = projectInfo.title;
                document.getElementById('modal-img').src = projectInfo.image;
                document.getElementById('modal-desc').textContent = projectInfo.desc;
                modal.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// 7. Certifications Swiper (3D Effect)
document.addEventListener("DOMContentLoaded", () => {
    const certSwiper = new Swiper(".certSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: ".certSwiper .swiper-pagination",
            clickable: true,
        },
    });
});


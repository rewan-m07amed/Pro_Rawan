document.addEventListener("DOMContentLoaded", () => {
    // Initialize Swiper.js for the 3D Coverflow Project Carousel
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
        // Enable keyboard navigation
        keyboard: {
            enabled: true,
        },
    });

    // Optional: Add a slight glitch effect interval to the main title
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                glitchText.style.transform = 'translate(0, 0)';
            }, 50);
        }, 3000);
    }

    // Terminal Typewriter Effect
    const type1 = document.getElementById("typewriter-1");
    const type2 = document.getElementById("typewriter-2");
    const bioText = document.getElementById("bio-text-reveal");
    const promptLine = document.getElementById("prompt-line-reveal");

    if (type1 && type2) {
        const text1 = type1.getAttribute("data-text");
        const text2 = type2.getAttribute("data-text");

        let i = 0;
        let j = 0;

        // Add active cursor class
        type1.classList.add("typewriter-cursor");

        function typeWriter1() {
            if (i < text1.length) {
                type1.innerHTML += text1.charAt(i);
                i++;
                setTimeout(typeWriter1, 40); // Speed
            } else {
                type1.classList.remove("typewriter-cursor");
                type2.classList.add("typewriter-cursor");
                setTimeout(typeWriter2, 400); // Delay before next line
            }
        }

        function typeWriter2() {
            if (j < text2.length) {
                type2.innerHTML += text2.charAt(j);
                j++;
                setTimeout(typeWriter2, 40);
            } else {
                type2.classList.remove("typewriter-cursor");
                // Reveal the rest of the terminal
                if (bioText) bioText.classList.remove("typewriter-hidden");
                if (promptLine) promptLine.classList.remove("typewriter-hidden");
            }
        }

        // Start typing after a short delay
        setTimeout(typeWriter1, 800);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const terminalData = {
        about: {
            title: ">> TERMINAL_LOG_01 // ABOUT",
            cmd: "> Loading profile_data.exe...",
            text: "Bridging the gap between engineering precision, scientific research, and data analytics. Specializing in Mechatronics Control Systems and financial data modeling. Ready to deploy robust solutions to complex challenges."
        },
        motivation: {
            title: ">> TERMINAL_LOG_01 // MOTIVATION",
            cmd: "> Executing motivation.sh...",
            text: "Driven by the challenge of translating complex physics and raw data into actionable models. Believing that solving hard problems through elegant code and mathematical derivations is the purest form of engineering."
        },
        vision: {
            title: ">> TERMINAL_LOG_01 // VISION",
            cmd: "> Decrypting future_vision.sys...",
            text: "To architect intelligent control systems and leverage deep data engineering to advance scientific research. Aiming to leave an eternal impact by solving tomorrow's uncertainties through technology today."
        }
    };

    const screen = document.getElementById('terminal-screen');
    const titleElement = document.getElementById('terminal-title');
    const buttons = document.querySelectorAll('.cyber-tab');
    let typingInterval;

    function typeWriterEffect(dataId) {
        clearInterval(typingInterval);

        const data = terminalData[dataId];
        titleElement.innerHTML = data.title;

        screen.innerHTML = `
            <span class="cmd-text">${data.cmd}</span>
            <span id="typed-text"></span>
            <span class="typing-cursor"></span>
        `;

        const textContainer = document.getElementById('typed-text');
        const textToType = data.text;
        let charIndex = 0;
        const typingSpeed = 30;

        typingInterval = setInterval(() => {
            if (charIndex < textToType.length) {
                textContainer.innerHTML += textToType.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentBtn = e.currentTarget; // استخدمنا currentTarget عشان يتأكد إنه مسك الزرار كله
            buttons.forEach(b => b.classList.remove('active'));
            currentBtn.classList.add('active');

            const targetData = currentBtn.getAttribute('data-target');
            typeWriterEffect(targetData);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ضفنا مسار الصورة (image) لكل تاب
    const terminalData = {
        about: {
            title: ">> TERMINAL_LOG_01 // ABOUT",
            cmd: "> Loading profile_data.exe...",
            text: "I am a Mechatronics Engineering student at Ain Shams University, specializing in Bio-Mechatronics, with a strong interest in developing assistive and rehabilitation technologies that address real human needs.\n\nAs a USAID Scholar, I gained valuable leadership experience and worked within diverse environments that supported my academic and personal growth. I also applied my interest in biomechanics by working with children with special needs, designing simple exercises to improve fine motor skills.\n\nTechnically, I have worked on projects including gait analysis, ROV design, and automotive systems, building a solid foundation in engineering through hands-on experience in modeling, simulation, embedded systems, and mechanical design. I currently maintain a GPA of 3.3 in a rigorous engineering program and was recognized with an Excellence Award from the university for my academic performance.\n\nBeyond academics, I served as Chairwoman of the IEEE Ain Shams Student Branch, where I helped organize technical events reaching over 2,000 students and fostered collaboration and knowledge sharing.",
            image: "about_rawan.jpg" // اسم صورة الـ about
        },
        motivation: {
            title: ">> TERMINAL_LOG_01 // MOTIVATION",
            cmd: "> Executing motive.sh...",
            text: "My motivation comes from growing up with my mother, a specialist in special needs education. Watching her work closely with children helped me understand the challenges they face and how meaningful support can improve their daily lives. Over time, I became interested in how engineering could help address these challenges. This is what led me to choose Bio-Mechatronics, where I can apply engineering to real human needs, particularly in rehabilitation and assistive technologies.",
            image: "motivation_rawan.jpg" // اسم صورة الـ motivation
        },
        vision: {
            title: ">> TERMINAL_LOG_01 // VISION",
            cmd: "> Decrypting future_vision.sys...",
            text: "I aspire to create meaningful impact by applying engineering to improve people’s lives, with a focus on making technology more accessible, inclusive, and human-centered.\n\nI believe in a future where innovation supports not only advancement, but also equality, where individuals have access to the tools and opportunities they need to live healthier and more independent lives. Through my work, I aim to contribute to solutions that are practical, affordable, and designed with real human needs in mind.\n\nI am also driven by a desire to connect with different cultures and perspectives, learning from diverse experiences and bringing those insights back to my community. I believe that understanding and collaboration across cultures are essential for building more effective and inclusive technologies.\n\nUltimately, I hope to contribute to a world that is not only technologically advanced, but also more connected, compassionate, and supportive of people’s well-being.",
            image: "vision_rawan.jpg" // اسم صورة الـ vision
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

        // ---------- الجزء الجديد الخاص بالنقط ----------
        // 1. نطفي كل النقط ونرجعها لحجمها
        document.querySelectorAll('.indicator-dot').forEach(dot => {
            dot.classList.remove('active');
        });
        // 2. ننور النقطة المرتبطة بالتاب اللي دُسنا عليه
        const activeDot = document.getElementById('dot-' + dataId);
        if (activeDot) {
            activeDot.classList.add('active');
        }
        // ----------------------------------------------

        // تحديث الصورة بشفافية ناعمة
        imageElement.style.opacity = '0';
        setTimeout(() => {
            imageElement.src = data.image;
            imageElement.style.opacity = '0.8';
        }, 300);

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



    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentBtn = e.currentTarget;
            buttons.forEach(b => b.classList.remove('active'));
            currentBtn.classList.add('active');

            const targetData = currentBtn.getAttribute('data-target');
            typeWriterEffect(targetData);
        });
    });

    // تشغيل الـ About كأول حاجة تظهر
    typeWriterEffect('about');
});

// بيانات المشاريع (هنا تنقلي اللي في الـ PDF)
const projectsDatabase = {
    "asu-racing": {
        title: "ASU RACING // Formula Student",
        image: "racing-image.jpg", // حطي مسار صورة المشروع
        desc: "Here you can paste all the detailed text from your PDF about ASU Racing.\n\nYou can press Enter to make new lines.\n\n- Role: Mechanical Design\n- Software: SolidWorks, ANSYS\n- Outcome: Optimized suspension geometry..."
    },
    "aquaphoton": {
        title: "AQUAPHOTON // ROV Systems",
        image: "rov-image.jpg", // حطي مسار صورة الغواصة
        desc: "Detailed explanation of the underwater ROV design from your PDF.\n\nExplain the depth mechanisms, the embedded systems used, and your specific role in the team."
    },
    "ravan": {
        title: "RAVAN // Autonomous Robotics",
        image: "robot-image.jpg", // صورة الروبوت
        desc: "Paste the detailed PDF information about RAVAN here.\n\nTalk about 3D modeling, autonomous navigation, and any bio-mechatronics applications."
    }
    // تقدري تزودي مشاريع تانية بنفس الطريقة
};

// أكواد تشغيل النافذة المنبثقة
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');
const viewBtns = document.querySelectorAll('.view-btn');

// لما ندوس على أي زرار VIEW_DATA
viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // بنعرف هو داس على أنهي مشروع
        const projectId = btn.getAttribute('data-project');
        const projectInfo = projectsDatabase[projectId];

        if (projectInfo) {
            // بنعبي النافذة بالبيانات الخاصة بالمشروع ده
            document.getElementById('modal-title').textContent = projectInfo.title;
            document.getElementById('modal-img').src = projectInfo.image;
            document.getElementById('modal-desc').textContent = projectInfo.desc;

            // بنظهر النافذة
            modal.classList.add('active');
        }
    });
});

// قفل النافذة لما ندوس على الـ X
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// قفل النافذة لو دوسنا في أي مكان أسود برا المربع
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});


const swiper = new Swiper('.swiper', {
    // ... إعداداتك الحالية (loop, slidesPerView, etc)

    // تفعيل الأسهم
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // تفعيل النقاط التوضيحية لو موجودة
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// تشغيل سلايدر الشهادات (Academic Archive) بتأثير 3D
const certSwiper = new Swiper(".certSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,    /* درجة ميل الكروت */
        stretch: 0,
        depth: 250,    /* عمق الـ 3D عشان يبانوا ورا بعض */
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2500, // سرعة الدوران
        disableOnInteraction: false,
    },
    breakpoints: {
        320: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 } // هيعرض 3 كروت بوضوح على الشاشات الكبيرة
    },
    pagination: {
        el: ".certSwiper .swiper-pagination",
        clickable: true,
    },
});


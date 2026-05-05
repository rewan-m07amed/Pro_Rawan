<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASU RACING // DATA_LOG</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
</head>

<body class="project-page">
    <div class="gears-container">
        <div class="gear gear-1">⚙️</div>
        <div class="gear gear-2">⚙️</div>
    </div>

    <div class="project-container">

        <!-- شريط التحكم واللوجو -->
        <div class="project-header"
            style="border-bottom: 2px dashed rgba(0, 255, 255, 0.4); padding-bottom: 20px; margin-bottom: 40px;">
            <a href="index.html" class="back-btn" style="display: inline-block; margin-bottom: 20px;">&lt;&lt;
                RETURN_TO_MAIN</a>

            <div
                style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                <h1 class="project-title glitch-text" style="margin: 0;">ASU RACING // Formula Student</h1>

                <!-- اللوجو بالكلاس الجديد المميز (الحجم الكبير والحركة) -->
                <img src="images/asu-racing-logo.jpg" alt="ASU Racing Logo" class="cyber-logo">
            </div>
        </div>

        <!-- 1. شريط الخلاصة -->
        <div class="quick-info-bar">
            <div class="info-item">
                <span class="info-label">CORE_FOCUS</span>
                <span class="info-value">Race Car Dynamics & Design</span>
            </div>
            <div class="info-item">
                <span class="info-label">SOFTWARE_STACK</span>
                <span class="info-value">MATLAB/Simulink, FEA Tools</span>
            </div>
            <div class="info-item">
                <span class="info-label">TEAM_AFFILIATION</span>
                <span class="info-value">ASU Racing Team</span>
            </div>
        </div>

        <!-- 2. الأرقام والإنجازات (مساحة مريحة للعين) -->
        <div class="metrics-grid">
            <div class="metric-box">
                <h3 class="metric-desc">Space Frame Stress Analysis</h3>
            </div>
            <div class="metric-box">
                <h3 class="metric-desc">Dynamic Brakes Model</h3>

            </div>
            <div class="metric-box">
                <h3 class="metric-desc">Traction & Load Transfer</h3>
            </div>
        </div>

        <!-- 3. صورة الغلاف الرئيسية (بإطار وتأثير نيون) -->

        <!-- فاصل تقني أنيق يفصل بين الصور وبين بداية الشرح -->
        <div
            style="width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent); margin: 60px 0;">
        </div>

        <!-- 4. مراحل المشروع (بلوكات الشرح الاحترافية) -->
        <!-- 4. مراحل المشروع (بلوكات الشرح الاحترافية) -->
        <div class="project-phases">

            <!-- Phase 1 -->
            <div class="phase-block">
                <h3 class="phase-title"><span>&gt;</span> PHASE_01: ACADEMY_TRAINING.log</h3>
                <p>
                    My journey with the racing team began by going through a highly competitive and strict selection
                    process to join the academy, where only a limited number of candidates were accepted. This one-month
                    intensive program introduced me to the <strong>fundamentals of vehicle systems</strong>, with a
                    strong emphasis on <strong>braking systems</strong>.
                </p>
                <p>
                    During this phase, I was involved in <strong>hands-on assembly tasks</strong>, gaining practical
                    exposure to how mechanical components are integrated within a complete system. In parallel, I worked
                    on studying and summarizing technical references, including engineering papers and design manuals,
                    which helped me build a solid theoretical foundation.
                </p>
                <p>
                    This experience strengthened my understanding of brake system design, safety considerations, and the
                    constraints specific to motorsport engineering.
                </p>

                <!-- صور المرحلة الأولى -->
                <div class="phase-images-grid">
                    <div class="cyber-window">
                        <div class="window-header"><span>&gt; DESIGN_FUNDAMENTALS</span></div>
                        <img src="images/asu-racing-hero.jpg" alt="Race Car Basics Summary">
                    </div>

                    <div class="cyber-window">
                        <div class="window-header"><span>&gt; CHASSIS_ANALYSIS_REPORT</span></div>
                        <img src="images/asu-racing-chassis.png" alt="Chassis Analysis Report">
                    </div>
                </div>
            </div>

            <!-- Phase 2 -->
            <div class="phase-block">
                <h3 class="phase-title"><span>&gt;</span> PHASE_02: BRAKE_SYSTEM_DEV.exe</h3>
                <p>
                    After successfully completing the academy, I continued with the team for a full year as part of the
                    brake system design effort. My work focused on analyzing and developing a braking system capable of
                    performing reliably under dynamic racing conditions.
                </p>
                <p>
                    I developed a <strong>MATLAB/Simulink</strong> model to simulate braking performance, enabling the
                    calculation of braking forces, weight transfer, and stopping distances. This model supported design
                    validation and informed engineering decisions throughout the development process.
                </p>
                <p>
                    In addition, I conducted brake sizing calculations to ensure the system met both safety and
                    performance requirements. I also performed <strong>thermal analysis</strong> to evaluate heat
                    generation and dissipation during high-speed and repeated braking scenarios, addressing critical
                    challenges such as <strong>brake fade</strong>.
                </p>
                <p>
                    Based on these analyses, I contributed to the selection of key components, including brake discs,
                    calipers, and pads, ensuring an effective balance between performance, reliability, and durability.
                </p>

                <!-- صور المرحلة الثانية -->
                <div class="phase-images-grid">
                    <div class="cyber-window">
                        <div class="window-header"><span>&gt; SIMULINK_MODEL</span></div>
                        <img src="images/asu-racing-simulink.jpg" alt="Brakes System Simulink Model">
                    </div>

                    <div class="cyber-window">
                        <div class="window-header"><span>&gt; CALIPER_TRADE_OFF</span></div>
                        <img src="images/asu-racing-brakes.png" alt="Brakes Caliper Options Trade-off">
                    </div>
                </div>
            </div>

        </div>

        <!-- Bottom Return Button -->
        <div style="text-align: center; margin-top: 60px; padding-bottom: 20px;">
            <a href="index.html" class="back-btn" style="display: inline-block;">
                &lt;&lt; RETURN_TO_MAIN
            </a>
        </div>

    </div>

</body>

</html>

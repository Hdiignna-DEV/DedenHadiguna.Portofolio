(function() {
    "use strict";

    const HIGHLIGHT_COLORS = {
        primary: '#FF5938', // Orange/Coral from --color-accent-primary
        secondary: '#97DDEB', // Light Blue from --color-accent-secondary
        tertiary: '#004A4A', // Dark Teal from --color-accent-tertiary
        darkText: '#FFD1E2', // Pinkish from --color-text-dark
        lightBg: '#134D80', // Dark Blue from --card-bg-light
        glitch: '#97DDEB' // Light Blue from --color-glitch-effect (secondary accent)
    };
    const GLITCH_COLOR = HIGHLIGHT_COLORS.glitch;

    const languageData = {
        "id": {
            "page_title": "Deden Hadiguna - Portofolio Modern",
            "meta_description": "Portofolio interaktif Deden Hadiguna, seorang pengembang AI, dengan desain modern dan sentuhan profesional. Jelajahi kanvas data pribadi yang mengalir.",
            "meta_keywords": "Deden Hadiguna, AI developer, portfolio, machine learning, deep learning, web development, komputer, Telkom University Purwokerto, modern design, clean portfolio",
            "og_title": "Deden Hadiguna - Portofolio Modern",
            "og_description": "Portofolio interaktif Deden Hadiguna, seorang pengembang AI, dengan desain modern dan sentuhan profesional.",
            "preloader_loading": "MEMUAT PORTOFOLIO",
            "preloader_status_label": "STATUS:",
            "preloader_status_value": "ONLINE",
            "system_status_ai": "Status AI",
            "status_canvas_value": "OFFLINE",
            "hero_title": "Deden Hadiguna",
            "profile_subtitle": "Arsitek Data & Pengembang AI",
            "profile_subtitle_highlight": "Arsitek Data & Pengembang AI",
            "welcome_text": "Selamat datang di portofolio pribadi saya",
            "thank_you_text": "Alowwwww semuanyaaaa ☺️",
            "voice_info_text": "Tersedia fitur voice dengan klik icon headphone di atas, bunyi ketika aktif. Ucapkan \"Bantu saya\" nanti akan bersuara dan menyebutkan apa saja yang bisa dilakukannya",
            "view_projects": "LIHAT PROYEK",
            "download_cv": "UNDUH CV",
            "about_me_title": "Tentang Saya",
            "about_me_p1": "Halo! Saya Deden Hadiguna, seorang mahasiswa Teknik Informatika yang proaktif di Telkom University Purwokerto. Ketertarikan saya terletak pada Kecerdasan Buatan, Machine Learning, dan Deep Learning, di mana saya berjuang untuk menciptakan solusi inovatif yang memberdayakan teknologi.",
            "about_me_p2": "Pengalaman saya, meskipun tidak selalu formal, diperkaya oleh proyek-proyek independen dan sertifikasi dari program-program seperti Mereka Academy. Perjalanan ini telah membentuk saya menjadi individu yang proaktif, berorientasi tim, siap menghadapi tantangan profesional.",
            "terminal_name_label": "Nama:",
            "profile_name_terminal": "Deden Hadiguna",
            "terminal_role_label": "Peran:",
            "profile_role_terminal": "AI Developer / Mahasiswa Teknik Informatika",
            "terminal_location_label": "Lokasi:",
            "profile_location_terminal": "Purwokerto, Jawa Tengah, Indonesia",
            "terminal_status_label": "Status:",
            "profile_status_terminal": "Berinovasi Tiada Henti",
            "terminal_command_label": "Perintah:",
            "terminal_command_value": "siapa_saya",
            "profile_response_terminal": "Seorang mahasiswa Teknik Informatika yang bersemangat dalam menciptakan sistem cerdas dan solusi berdampak.",
            "skills_title": "Keterampilan & Keahlian",
            "skill_machine_learning_title": "Machine Learning",
            "skill_machine_learning_desc": "Berpengalaman dalam mengembangkan dan menerapkan model ML menggunakan framework modern.",
            "skill_deep_learning_title": "Deep Learning",
            "skill_deep_learning_desc": "Mahir dalam jaringan saraf dan arsitektur pembelajaran mendalam.",
            "skill_programming_title": "Programming",
            "skill_programming_desc": "Fondasi kuat dalam berbagai bahasa pemrograman.",
            "skill_data_db_title": "Data & Databases",
            "skill_data_db_desc": "Desain database, optimasi kueri, dan manajemen data.",
            "skill_tools_platforms_title": "Tools & Platforms",
            "skill_tools_platforms_desc": "Familiar dengan deployment, version control, dan platform cloud.",
            "skill_cert_concepts_title": "Concepts & Certifications",
            "skill_cert_concepts_desc": "Pelatihan formal dan aplikasi praktis konsep AI tingkat lanjut.",
            "skill_overlay_title": "INFO_KANVAS:",
            "skill_overlay_desc_default": "Arahkan kursor ke modul skill untuk analisis detail.",
            "projects_title": "Proyek",
            "all_filter": "SEMUA",
            "computer_vision_filter": "COMPUTER VISION",
            "nlp_filter": "NLP",
            "machine_learning_filter": "MACHINE LEARNING",
            "web_dev_filter": "WEB DEVELOPMENT",
            "project_plant_disease_title": "Plant Disease Predictor",
            "project_plant_disease_type": "Computer Vision / Deep Learning",
            "project_plant_disease_desc": "Mengembangkan model CNN untuk mengidentifikasi penyakit daun tanaman dari gambar untuk deteksi dini.",
            "project_movie_sentiment_title": "Movie Review Sentiment Analysis",
            "project_movie_sentiment_type": "NLP",
            "project_movie_sentiment_desc": "Membangun sistem analisis sentimen untuk mengklasifikasikan ulasan film (positif/negatif/netral) menggunakan teknik NLP.",
            "project_music_recom_title": "Music Recommendation System",
            "project_music_recom_type": "Machine Learning / Data Mining",
            "project_music_recom_desc": "Mengembangkan sistem rekomendasi musik berdasarkan collaborative filtering dan pendekatan berbasis konten.",
            "project_portfolio_title": "Interactive Portfolio Interface",
            "project_portfolio_type": "Web Development / Frontend",
            "project_portfolio_desc": "Antarmuka portofolio ini sendiri, dirancang dengan HTML, CSS, dan JavaScript untuk pengalaman unik.",
            "repo_link": "REPO",
            "demo_link_disabled": "DEMO",
            "report_link_disabled": "LAPORAN",
            "live_link": "LIVE",
            "photos_title": "Momen Pribadi",
            "photos_campus_life": "Kehidupan Kampus",
            "photos_learning_session": "Sesi Pembelajaran",
            "photos_group_project": "Proyek Kelompok",
            "photos_tech_event": "Acara Teknologi",
            "certificates_title": "Sertifikat",
            "cert_general": "Sertifikat Umum",
            "cert_issuer_professional_development": "Pengembangan Profesional",
            "cert_azure_ai": "Azure AI Fundamentals",
            "cert_issuer_microsoft": "Microsoft Certified",
            "cert_webinar_rise": "Webinar Rise Intelligent Future",
            "cert_issuer_google_developer_student_clubs": "Google Developer Student Clubs",
            "cert_webinar_nevcrypt": "Webinar Nevcrypt #2",
            "cert_issuer_nevcrypt_community": "Komunitas Nevcrypt",
            "cert_javascript": "Pemrograman JavaScript",
            "cert_issuer_dicoding_indonesia": "Dicoding Indonesia",
            "cert_other": "Sertifikat Lain",
            "cert_issuer_various_platforms": "Berbagai Platform",
            "education_title": "Pendidikan & Aktivitas",
            "edu_telkom_university_purwokerto_title": "Telkom University Purwokerto",
            "edu_telkom_university_purwokerto_period": "2023 - Sekarang",
            "edu_telkom_university_purwokerto_role": "Mahasiswa Teknik Informatika",
            "edu_telkom_university_purwokerto_desc": "Sedang menempuh gelar Sarjana dengan fokus pada Struktur Data, Algoritma, Basis Data, dan mata kuliah khusus Kecerdasan Buatan. Aktif dalam proyek kelompok dan pengembangan diri.",
            "edu_calculus_teaching_assistant_title": "Pelatihan Azure AI Fundamentals",
            "edu_calculus_teaching_assistant_period": "Mei 2025 - Juni 2025",
            "edu_calculus_teaching_assistant_role": "Preparation Course for Azure AI Fundamentals (AI-900)",
            "edu_calculus_teaching_assistant_desc": "Program Pelatihan Azure AI Fundamentals dirancang untuk siapa saja yang tertarik untuk mempelajari tentang jenis solusi yang dimungkinkan oleh kecerdasan buatan (AI), dan layanan di Microsoft Azure.",
            "edu_bangkit_academy_title": "Bangkit Academy oleh Google, GoTo, Traveloka",
            "edu_bangkit_academy_period": "Februari 2024 - April 2024",
            "edu_bangkit_academy_role": "Kohort Insinyur Pembelajaran Mesin",
            "edu_bangkit_academy_desc": "Program intensif yang mencakup Python untuk ML, Dasar-dasar Pembelajaran Mesin, Arsitektur Pembelajaran Mendalam, dan Implementasi Model AI menggunakan Google Cloud Platform (GCP). Menyelesaikan proyek akhir tim.",
            "edu_high_school_graduate_title": "Lulusan Sekolah Menengah Atas",
            "edu_high_school_graduate_period": "2020 - 2023",
            "edu_high_school_graduate_role": "SMA Negeri 1 CabangBungin",
            "edu_high_school_graduate_desc": "Lulus dari program Ilmu Pengetahuan Alam. Aktif terlibat dalam kegiatan Teknologi Informasi dan Komunikasi (TIK).",
            "contact_title": "Hubungi Saya",
            "contact_intro": "Tertarik untuk berkolaborasi dalam proyek AI, mendiskusikan inovasi teknologi, atau memiliki peluang untuk dibagikan? Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk koneksi baru.",
            "contact_email_title": "Email",
            "contact_linkedin_title": "LinkedIn",
            "contact_github_title": "GitHub",
            "contact_whatsapp_title": "WhatsApp",
            "back_to_top_aria": "Kembali ke atas",
            "footer_rights": "Semua hak dilindungi undang-undang.",
            "home": "Beranda",
            "about": "Tentang",
            "skills": "Keahlian",
            "projects": "Proyek",
            "photos": "Foto",
            "certificates": "Sertifikat",
            "education": "Pendidikan",
            "contact": "Kontak",
            "logo_text": "HDiignna DEV.",
            "lang_id": "ID",
            "lang_en": "EN",
            "voice_assistant_active_title": "Asisten Suara: AKTIF (Klik untuk Berhenti)",
            "voice_assistant_inactive_title": "Asisten Suara: NONAKTIF (Klik untuk Memulai)",
            "voice_status_listening": "MENDENGARKAN...",
            "voice_status_processing": "MEMPROSES...",
            "voice_status_speaking": "MEMBICARAKAN...",
            "voice_status_inactive": "NONAKTIF",
            "voice_error_start_recognition": "Maaf, tidak dapat memulai pengenalan suara. Pastikan mikrofon berfungsi dan izinkan akses.",
            "voice_error_general": "Terjadi kesalahan pada pengenalan suara.",
            "voice_error_not_allowed": "Akses mikrofon ditolak. Mohon izinkan penggunaan mikrofon.",
            "voice_error_no_speech": "Tidak ada suara terdeteksi. Silakan coba lagi.",
            "voice_error_network": "Tidak ada koneksi internet untuk pengenalan suara. Mohon periksa koneksi Anda.",
            "loading_image": "MEMUAT GAMBAR...",
            "loading": "Memuat",
            "image_not_found_error": "GALAT: GAMBAR TIDAK DITEMUKAN. Silakan periksa jalur file.",
            "loading_error": "Galat memuat",
            "check_file_path": "Periksa jalur file",
            "konami_code_activated": "AKSES DIBERIKAN: Mode Overclock Diaktifkan! Bersiaplah untuk dampak.",
            "link_opened_confirmation": (title) => `Baik, saya akan membuka ${title} Deden.`,
            "download_cv_confirmation": () => 'Baik, CV Deden Hadiguna akan diunduh.',
            "project": "proyek",
            "certificate": "sertifikat",
            "education_history": "riwayat pendidikan",
            "which_project": "proyek mana",
            "which_certificate": "sertifikat mana",
            "which_education_history": "riwayat pendidikan mana",
            "skills_info": () => 'Tentu, ini adalah keahlian Deden. Apakah ada keahlian tertentu yang ingin Anda ketahui lebih lanjut?',
            "projects_info": () => 'Ini adalah daftar proyek Deden. Apakah ada proyek spesifik yang menarik perhatian Anda?',
            "education_info": () => 'Berikut riwayat pendidikan Deden. Ada pertanyaan lain?',
            "contact_info": () => 'Tentu, ini adalah informasi kontak Deden.',
            "cv_link": "tautan CV",
            "link": "tautan"
        },
        "en": {
            "page_title": "Deden Hadiguna - Modern Portfolio",
            "meta_description": "Deden Hadiguna's interactive portfolio, an AI developer, with a modern design and professional touch. Explore a flowing personal data canvas.",
            "meta_keywords": "Deden Hadiguna, AI developer, portfolio, machine learning, deep learning, web development, computer, Telkom University Purwokerto, modern design, clean portfolio",
            "og_title": "Deden Hadiguna - Modern Portfolio",
            "og_description": "Deden Hadiguna's interactive portfolio, an AI developer, with a modern design and professional touch.",
            "preloader_loading": "LOADING PORTFOLIO",
            "preloader_status_label": "STATUS:",
            "preloader_status_value": "ONLINE",
            "system_status_ai": "AI Status",
            "status_canvas_value": "OFFLINE",
            "hero_title": "Deden Hadiguna",
            "profile_subtitle": "Data Architect & AI Developer",
            "profile_subtitle_highlight": "Data Architect & AI Developer",
            "welcome_text": "Welcome to my personal portfolio",
            "thank_you_text": "Hellooooo everyoneeee ☺️",
            "voice_info_text": "Voice feature is available by clicking the headphone icon above, it will chime when active. Say \"Help me\" and it will speak and list what it can do.",
            "view_projects": "VIEW PROJECTS",
            "download_cv": "DOWNLOAD CV",
            "about_me_title": "About Me",
            "about_me_p1": "Hello! I'm Deden Hadiguna, a proactive Computer Science student at Telkom University Purwokerto. My interests lie in Artificial Intelligence, Machine Learning, and Deep Learning, where I strive to create innovative solutions that empower technology.",
            "about_me_p2": "My experience, though not always formal, is enriched by independent projects and certifications from programs like Merdeka Academy. This journey has shaped me into a proactive, team-oriented individual, ready to face professional challenges.",
            "terminal_name_label": "Name:",
            "profile_name_terminal": "Deden Hadiguna",
            "terminal_role_label": "Role:",
            "profile_role_terminal": "AI Developer / Computer Science Student",
            "terminal_location_label": "Location:",
            "profile_location_terminal": "Purwokerto, Central Java, Indonesia",
            "terminal_status_label": "Status:",
            "profile_status_terminal": "Innovating Non-stop",
            "terminal_command_label": "Command:",
            "terminal_command_value": "who_am_i",
            "profile_response_terminal": "A passionate Computer Science student dedicated to creating intelligent systems and impactful solutions.",
            "skills_title": "Skills & Expertise",
            "skill_machine_learning_title": "Machine Learning",
            "skill_machine_learning_desc": "Experienced in developing and deploying ML models using modern frameworks.",
            "skill_deep_learning_title": "Deep Learning",
            "skill_deep_learning_desc": "Proficient in neural networks and deep learning architectures.",
            "skill_programming_title": "Programming",
            "skill_programming_desc": "Strong foundation in multiple programming languages.",
            "skill_data_db_title": "Data & Databases",
            "skill_data_db_desc": "Database design, query optimization, and data management.",
            "skill_tools_platforms_title": "Tools & Platforms",
            "skill_tools_platforms_desc": "Familiarity with deployment, version control, and cloud platforms.",
            "skill_cert_concepts_title": "Concepts & Certifications",
            "skill_cert_concepts_desc": "Formal training and practical application of advanced AI concepts.",
            "skill_overlay_title": "CANVAS_INFO:",
            "skill_overlay_desc_default": "Hover over skill modules for detailed analysis.",
            "projects_title": "Projects",
            "all_filter": "ALL",
            "computer_vision_filter": "COMPUTER VISION",
            "nlp_filter": "NLP",
            "machine_learning_filter": "MACHINE LEARNING",
            "web_dev_filter": "WEB DEVELOPMENT",
            "project_plant_disease_title": "Plant Disease Predictor",
            "project_plant_disease_type": "Computer Vision / Deep Learning",
            "project_plant_disease_desc": "Developed a CNN model to identify plant leaf diseases from images for early detection.",
            "project_movie_sentiment_title": "Movie Review Sentiment Analysis",
            "project_movie_sentiment_type": "NLP",
            "project_movie_sentiment_desc": "Built a sentiment analysis system to classify movie reviews (positive/negative/neutral) using NLP techniques.",
            "project_music_recom_title": "Music Recommendation System",
            "project_music_recom_type": "Machine Learning / Data Mining",
            "project_music_recom_desc": "Developed a music recommendation system based on collaborative filtering and content-based approaches.",
            "project_portfolio_title": "Interactive Portfolio Interface",
            "project_portfolio_type": "Web Development / Frontend",
            "project_portfolio_desc": "This portfolio interface itself, designed with HTML, CSS, and JavaScript for a unique experience.",
            "repo_link": "REPO",
            "demo_link_disabled": "DEMO",
            "report_link_disabled": "REPORT",
            "live_link": "LIVE",
            "photos_title": "Personal Moments",
            "photos_campus_life": "Campus Life",
            "photos_learning_session": "Learning Session",
            "photos_group_project": "Group Project",
            "photos_tech_event": "Tech Event",
            "certificates_title": "Certificates",
            "cert_general": "General Certificate",
            "cert_issuer_professional_development": "Professional Development",
            "cert_azure_ai": "Azure AI Fundamentals",
            "cert_issuer_microsoft": "Microsoft Certified",
            "cert_webinar_rise": "Webinar Rise Intelligent Future",
            "cert_issuer_google_developer_student_clubs": "Google Developer Student Clubs",
            "cert_webinar_nevcrypt": "Webinar Nevcrypt #2",
            "cert_issuer_nevcrypt_community": "Nevcrypt Community",
            "cert_javascript": "JavaScript Programming",
            "cert_issuer_dicoding_indonesia": "Dicoding Indonesia",
            "cert_other": "Other Certificates",
            "cert_issuer_various_platforms": "Various Platforms",
            "education_title": "Education & Activities",
            "edu_telkom_university_purwokerto_title": "Telkom University Purwokerto",
            "edu_telkom_university_purwokerto_period": "2023 - Present",
            "edu_telkom_university_purwokerto_role": "Computer Science Student",
            "edu_telkom_university_purwokerto_desc": "Currently pursuing a Bachelor's degree with a focus on Data Structures, Algorithms, Databases, and specialized Artificial Intelligence courses. Actively involved in group projects and personal development.",
            "edu_calculus_teaching_assistant_title": "Azure AI Fundamentals Training",
            "edu_calculus_teaching_assistant_period": "May 2025 - June 2025",
            "edu_calculus_teaching_assistant_role": "Preparation Course for Azure AI Fundamentals (AI-900)",
            "edu_calculus_teaching_assistant_desc": "The Azure AI Fundamentals Training program is designed for anyone interested in learning about the types of solutions artificial intelligence (AI) enables, and the services on Microsoft Azure.",
            "edu_bangkit_academy_title": "Bangkit Academy by Google, GoTo, Traveloka",
            "edu_bangkit_academy_period": "February 2024 - April 2024",
            "edu_bangkit_academy_role": "Machine Learning Engineer Cohort",
            "edu_bangkit_academy_desc": "Intensive program covering Python for ML, Machine Learning Fundamentals, Deep Learning Architectures, and AI Model Deployment using Google Cloud Platform (GCP). Completed a team capstone project.",
            "edu_high_school_graduate_title": "High School Graduate",
            "edu_high_school_graduate_period": "2020 - 2023",
            "edu_high_school_graduate_role": "SMA Negeri 1 CabangBungin",
            "edu_high_school_graduate_desc": "Graduated from the Science program. Actively involved in Information and Communication Technology (ICT) activities.",
            "contact_title": "Contact Me",
            "contact_intro": "Tertarik untuk berkolaborasi dalam proyek AI, mendiskusikan inovasi teknologi, atau memiliki peluang untuk dibagikan? Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk koneksi baru.",
            "contact_email_title": "Email",
            "contact_linkedin_title": "LinkedIn",
            "contact_github_title": "GitHub",
            "contact_whatsapp_title": "WhatsApp",
            "back_to_top_aria": "Kembali ke atas",
            "footer_rights": "Semua hak dilindungi undang-undang.",
            "home": "Home",
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "photos": "Photos",
            "certificates": "Certificates",
            "education": "Education",
            "contact": "Contact",
            "logo_text": "HDiignna DEV.",
            "lang_id": "ID",
            "lang_en": "EN",
            "voice_assistant_active_title": "Voice Assistant: ACTIVE (Click to Stop)",
            "voice_assistant_inactive_title": "Voice Assistant: INACTIVE (Click to Start)",
            "voice_status_listening": "LISTENING...",
            "voice_status_processing": "PROCESSING...",
            "voice_status_speaking": "SPEAKING...",
            "voice_status_inactive": "INACTIVE",
            "voice_error_start_recognition": "Sorry, cannot start speech recognition. Make sure your microphone is working and allow access.",
            "voice_error_general": "An error occurred with speech recognition.",
            "voice_error_not_allowed": "Microphone access denied. Please allow microphone usage.",
            "voice_error_no_speech": "No speech detected. Please try again.",
            "voice_error_network": "No internet connection for speech recognition. Please check your connection.",
            "loading_image": "LOADING IMAGE...",
            "loading": "Loading",
            "image_not_found_error": "ERROR: IMAGE NOT FOUND. Please check file path.",
            "loading_error": "Error loading",
            "check_file_path": "Check file path",
            "konami_code_activated": "ACCESS GRANTED: Overclock Mode Activated! Prepare for impact.",
            "link_opened_confirmation": (title) => `Okay, I will open Deden's ${title}.`,
            "download_cv_confirmation": () => 'Okay, Deden Hadiguna\'s CV will be downloaded.',
            "project": "project",
            "certificate": "certificate",
            "education_history": "education history",
            "which_project": "which project",
            "which_certificate": "which certificate",
            "which_education_history": "which education history",
            "skills_info": () => 'Certainly, these are Deden\'s skills. Is there any particular skill you\'d like to know more about?',
            "projects_info": () => 'Here is a list of Deden\'s projects. Is there any specific project that catches your attention?',
            "education_info": () => 'Here is Deden\'s education history. Any other questions?',
            "contact_info": () => 'Certainly, here is Deden\'s contact information.',
            "cv_link": "CV link",
            "link": "link"
        }
    };

    const responseVariations = {
        id: {
            greet: [
                'Halo kembali. Ada yang bisa saya bantu?',
                'Hai! Apa yang bisa saya lakukan untuk Anda?',
                'Selamat datang kembali. Ada pertanyaan?',
                'Senang bisa berbicara dengan Anda.'
            ],
            identity: [
                'Saya adalah asisten AI di portofolio Deden Hadiguna. Saya di sini untuk membantu Anda menjelajahi informasi.',
                'Saya adalah antarmuka AI Deden. Saya dapat membantu Anda menemukan apa yang Anda cari di situs ini.',
                'Anda berbicara dengan asisten virtual Deden Hadiguna. Senang bertemu dengan Anda.'
            ],
            time: (timeString) => [
                `Sekarang pukul ${timeString} Waktu Indonesia Barat.`,
                `Waktu saat ini adalah ${timeString} WIB.`,
                `Pukul ${timeString} WIB sekarang.`
            ],
            location: (loc) => [
                `Deden Hadiguna berlokasi di ${loc}.`,
                `Saat ini Deden ada di ${loc}.`,
                `Lokasi Deden adalah ${loc}.`
            ],
            aboutDedenFull: () => {
                const aboutTextElement1 = document.querySelector('[data-i18n="about_me_p1"]');
                const aboutTextElement2 = document.querySelector('[data-i18n="about_me_p2"]');
                let text = '';
                if (aboutTextElement1) {
                    text += (languageData['id']['about_me_p1'] || aboutTextElement1.textContent).replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
                }
                if (aboutTextElement2) {
                    if (text) text += ' ';
                    text += (languageData['id']['about_me_p2'] || aboutTextElement2.textContent).replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
                }
                return text || 'Maaf, saya tidak dapat menemukan informasi lengkap tentang Deden saat ini.';
            },
            dedenAge: (age) => {
                const currentYear = new Date().getFullYear();
                const userAge = parseInt(document.body.dataset.userAge) || 'unknown'; 
                
                if (userAge && !isNaN(userAge)) {
                    return [
                        `Deden Hadiguna saat ini berumur sekitar ${userAge} tahun.`,
                        `Usia Deden adalah ${userAge} tahun.`,
                        `Menurut catatan saya, Deden berusia ${userAge} tahun.`
                    ];
                } else {
                    return [
                        `Saya tidak memiliki informasi pasti mengenai umur Deden.`,
                        `Maaf, saya tidak bisa memberikan informasi umur Deden saat ini.`,
                        `Umur Deden tidak tercatat dalam sistem saya.`
                    ];
                }
            },
            dedenHobbies: (hobbies) => [
                `Deden memiliki beberapa minat, antara lain ${hobbies}.`,
                `Beberapa hobi dan kegemaran Deden adalah ${hobbies}.`,
                `Dia suka melakukan ${hobbies}.`
            ],
            projectDetails: (title, type, tech) => [
                `Proyek ${title} adalah proyek ${type}, menggunakan teknologi seperti ${tech}.`,
                `${title} ini merupakan proyek ${type} yang dikembangkan dengan ${tech}.`
            ],
            certDetails: (title, issuer, date) => {
                const dateText = date && date !== 'N/A' ? ` pada tahun ${date}` : '';
                return [
                    `Sertifikat ${title} diterbitkan oleh ${issuer}${dateText}.`,
                    `Sertifikat ${title} ini berasal dari ${issuer}, yang diperoleh${dateText}.`
                ];
            },
            eduDetails: (title, role, period, desc) => [
                `Mengenai ${title}, Deden berperan sebagai ${role} pada periode ${period}. Deskripsinya adalah: ${desc}.`,
                `Pendidikan atau aktivitas ${title} di mana Deden menjadi ${role} dari ${period}, dengan deskripsi: ${desc}.`
            ],
            thanks: [
                'Sama-sama. Senang bisa membantu.',
                'Dengan senang hati.',
                'Tidak masalah.',
                'Senang saya bisa membantu Anda.'
            ],
            unrecognized: [
                'Maaf, saya tidak mengerti perintah itu. Bisakah Anda mengulanginya?',
                'Saya kurang memahami. Bisakah Anda mencoba perintah lain?',
                'Perintah tersebut tidak dikenali. Mohon berikan instruksi yang lebih jelas.',
                'Saya tidak dapat memproses permintaan Anda. Perintah apa yang ingin Anda berikan?'
            ],
            confirmNavigation: (section) => [
                `Baik, saya akan membawa Anda ke bagian ${section}.`,
                `Mengganti tampilan ke ${section}.`,
                `Menuju ke ${section}.`
            ],
            errorNotFound: (item) => [
                `Maaf, saya tidak dapat menemukan ${item} yang Anda maksud.`,
                `Tidak dapat menemukan ${item}. Mungkin ada kesalahan penulisan?`,
                `Saya tidak bisa menemukan ${item}.`
            ],
            help: [
                'Anda bisa meminta saya untuk "Tampilkan proyek", "Buka LinkedIn", "Ceritakan tentang Deden", atau bertanya "Jam berapa".',
                'Saya dapat membantu Anda menavigasi situs ini. Coba katakan "Tampilkan keahlian" atau "Hubungi Deden".',
                'Perintah yang saya pahami antara lain: navigasi halaman, buka tautan sosial, informasi tentang Deden, dan waktu saat ini.'
            ],
            fullHelp: () => {
                const capabilities = [
                    'Saya bisa menyapa Anda.',
                    'Saya bisa memberi tahu siapa saya.',
                    'Saya bisa memberi tahu waktu saat ini.',
                    'Saya bisa memberi tahu lokasi Deden.',
                    'Saya bisa menceritakan tentang Deden Hadiguna, termasuk keahlian, proyek, pendidikan, umur, dan hobinya.',
                    'Saya bisa membantu Anda mengunduh CV Deden.',
                    'Saya bisa membuka tautan sosial seperti LinkedIn, GitHub, email, atau WhatsApp Deden.',
                    'Saya bisa menavigasi Anda ke berbagai bagian portofolio ini, seperti Home, About, Skills, Projects, Photos, Certificates, Education, dan Contact.',
                    'Dan tentu saja, saya bisa memberikan bantuan seperti saat ini.'
                ];
                return 'Saya bisa melakukan beberapa hal. Contohnya, ' + capabilities.join(', ') + '. Apa yang ingin Anda lakukan?';
            },
            thinking: [
                'Memproses...',
                'Sebentar...',
                'Menganalisis...'
            ],
            clarification: (question) => [
                `Bisakah Anda lebih spesifik tentang ${question}?`,
                `Anda ingin ${question} yang mana?`
            ],
            goodbye: [
                'Baik, saya akan nonaktifkan. Sampai jumpa lagi!',
                'Asisten dinonaktifkan. Silakan aktifkan kembali kapan saja Anda butuhkan.',
                'Saya off. Hubungi saya jika Anda butuk bantuan.'
            ],
            proactiveHelp: [
                "Apakah ada hal lain yang ingin Anda ketahui atau bagian yang ingin Anda kunjungi?",
                "Ada lagi yang bisa saya bantu?",
                "Jika Anda butuh bantuan, katakan 'bantu saya'."
            ]
        },
        "en": {
            "page_title": "Deden Hadiguna - Modern Portfolio",
            "meta_description": "Deden Hadiguna's interactive portfolio, an AI developer, with a modern design and professional touch. Explore a flowing personal data canvas.",
            "meta_keywords": "Deden Hadiguna, AI developer, portfolio, machine learning, deep learning, web development, computer, Telkom University Purwokerto, modern design, clean portfolio",
            "og_title": "Deden Hadiguna - Modern Portfolio",
            "og_description": "Deden Hadiguna's interactive portfolio, an AI developer, with a modern design and professional touch.",
            "preloader_loading": "LOADING PORTFOLIO",
            "preloader_status_label": "STATUS:",
            "preloader_status_value": "ONLINE",
            "system_status_ai": "AI Status",
            "status_canvas_value": "OFFLINE",
            "hero_title": "Deden Hadiguna",
            "profile_subtitle": "Data Architect & AI Developer",
            "profile_subtitle_highlight": "Data Architect & AI Developer",
            "welcome_text": "Welcome to my personal portfolio",
            "view_projects": "VIEW PROJECTS",
            "download_cv": "DOWNLOAD CV",
            "about_me_title": "About Me",
            "about_me_p1": "Hello! I'm Deden Hadiguna, a proactive Computer Science student at Telkom University Purwokerto. My interests lie in Artificial Intelligence, Machine Learning, and Deep Learning, where I strive to create innovative solutions that empower technology.",
            "about_me_p2": "My experience, though not always formal, is enriched by independent projects and certifications from programs like Merdeka Academy. This journey has shaped me into a proactive, team-oriented individual, ready to face professional challenges.",
            "terminal_name_label": "Name:",
            "profile_name_terminal": "Deden Hadiguna",
            "terminal_role_label": "Role:",
            "profile_role_terminal": "AI Developer / Computer Science Student",
            "terminal_location_label": "Location:",
            "profile_location_terminal": "Purwokerto, Central Java, Indonesia",
            "terminal_status_label": "Status:",
            "profile_status_terminal": "Innovating Non-stop",
            "terminal_command_label": "Command:",
            "terminal_command_value": "who_am_i",
            "profile_response_terminal": "A passionate Computer Science student dedicated to creating intelligent systems and impactful solutions.",
            "skills_title": "Skills & Expertise",
            "skill_machine_learning_title": "Machine Learning",
            "skill_machine_learning_desc": "Experienced in developing and deploying ML models using modern frameworks.",
            "skill_deep_learning_title": "Deep Learning",
            "skill_deep_learning_desc": "Proficient in neural networks and deep learning architectures.",
            "skill_programming_title": "Programming",
            "skill_programming_desc": "Strong foundation in multiple programming languages.",
            "skill_data_db_title": "Data & Databases",
            "skill_data_db_desc": "Database design, query optimization, and data management.",
            "skill_tools_platforms_title": "Tools & Platforms",
            "skill_tools_platforms_desc": "Familiarity with deployment, version control, and cloud platforms.",
            "skill_cert_concepts_title": "Concepts & Certifications",
            "skill_cert_concepts_desc": "Formal training and practical application of advanced AI concepts.",
            "skill_overlay_title": "CANVAS_INFO:",
            "skill_overlay_desc_default": "Hover over skill modules for detailed analysis.",
            "projects_title": "Projects",
            "all_filter": "ALL",
            "computer_vision_filter": "COMPUTER VISION",
            "nlp_filter": "NLP",
            "machine_learning_filter": "MACHINE LEARNING",
            "web_dev_filter": "WEB DEVELOPMENT",
            "project_plant_disease_title": "Plant Disease Predictor",
            "project_plant_disease_type": "Computer Vision / Deep Learning",
            "project_plant_disease_desc": "Developed a CNN model to identify plant leaf diseases from images for early detection.",
            "project_movie_sentiment_title": "Movie Review Sentiment Analysis",
            "project_movie_sentiment_type": "NLP",
            "project_movie_sentiment_desc": "Built a sentiment analysis system to classify movie reviews (positive/negative/neutral) using NLP techniques.",
            "project_music_recom_title": "Music Recommendation System",
            "project_music_recom_type": "Machine Learning / Data Mining",
            "project_music_recom_desc": "Developed a music recommendation system based on collaborative filtering and content-based approaches.",
            "project_portfolio_title": "Interactive Portfolio Interface",
            "project_portfolio_type": "Web Development / Frontend",
            "project_portfolio_desc": "This portfolio interface itself, designed with HTML, CSS, and JavaScript for a unique experience.",
            "repo_link": "REPO",
            "demo_link_disabled": "DEMO",
            "report_link_disabled": "REPORT",
            "live_link": "LIVE",
            "photos_title": "Personal Moments",
            "photos_campus_life": "Campus Life",
            "photos_learning_session": "Learning Session",
            "photos_group_project": "Group Project",
            "photos_tech_event": "Tech Event",
            "certificates_title": "Certificates",
            "cert_general": "General Certificate",
            "cert_issuer_professional_development": "Professional Development",
            "cert_azure_ai": "Azure AI Fundamentals",
            "cert_issuer_microsoft": "Microsoft Certified",
            "cert_webinar_rise": "Webinar Rise Intelligent Future",
            "cert_issuer_google_developer_student_clubs": "Google Developer Student Clubs",
            "cert_webinar_nevcrypt": "Webinar Nevcrypt #2",
            "cert_issuer_nevcrypt_community": "Nevcrypt Community",
            "cert_javascript": "JavaScript Programming",
            "cert_issuer_dicoding_indonesia": "Dicoding Indonesia",
            "cert_other": "Other Certificates",
            "cert_issuer_various_platforms": "Various Platforms",
            "education_title": "Education & Activities",
            "edu_telkom_university_purwokerto_title": "Telkom University Purwokerto",
            "edu_telkom_university_purwokerto_period": "2023 - Present",
            "edu_telkom_university_purwokerto_role": "Computer Science Student",
            "edu_telkom_university_purwokerto_desc": "Currently pursuing a Bachelor's degree with a focus on Data Structures, Algorithms, Databases, and specialized Artificial Intelligence courses. Actively involved in group projects and personal development.",
            "edu_calculus_teaching_assistant_title": "Azure AI Fundamentals Training",
            "edu_calculus_teaching_assistant_period": "May 2025 - June 2025",
            "edu_calculus_teaching_assistant_role": "Preparation Course for Azure AI Fundamentals (AI-900)",
            "edu_calculus_teaching_assistant_desc": "The Azure AI Fundamentals Training program is designed for anyone interested in learning about the types of solutions artificial intelligence (AI) enables, and the services on Microsoft Azure.",
            "edu_bangkit_academy_title": "Bangkit Academy by Google, GoTo, Traveloka",
            "edu_bangkit_academy_period": "February 2024 - April 2024",
            "edu_bangkit_academy_role": "Machine Learning Engineer Cohort",
            "edu_bangkit_academy_desc": "Intensive program covering Python for ML, Machine Learning Fundamentals, Deep Learning Architectures, and AI Model Deployment using Google Cloud Platform (GCP). Completed a team capstone project.",
            "edu_high_school_graduate_title": "High School Graduate",
            "edu_high_school_graduate_period": "2020 - 2023",
            "edu_high_school_graduate_role": "SMA Negeri 1 CabangBungin",
            "edu_high_school_graduate_desc": "Graduated from the Science program. Actively involved in Information and Communication Technology (ICT) activities.",
            "contact_title": "Contact Me",
            "contact_intro": "Interested in collaborating on AI projects, discussing tech innovations, or have an opportunity to share? Feel free to reach out! I'm always open to new connections.",
            "contact_email_title": "Email",
            "contact_linkedin_title": "LinkedIn",
            "contact_github_title": "GitHub",
            "contact_whatsapp_title": "WhatsApp",
            "back_to_top_aria": "Back to top",
            "footer_rights": "All rights reserved.",
            "home": "Home",
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "photos": "Photos",
            "certificates": "Certificates",
            "education": "Education",
            "contact": "Contact",
            "logo_text": "HDiignna DEV.",
            "lang_id": "ID",
            "lang_en": "EN",
            "voice_assistant_active_title": "Voice Assistant: ACTIVE (Click to Stop)",
            "voice_assistant_inactive_title": "Voice Assistant: INACTIVE (Click to Start)",
            "voice_status_listening": "LISTENING...",
            "voice_status_processing": "PROCESSING...",
            "voice_status_speaking": "SPEAKING...",
            "voice_status_inactive": "INACTIVE",
            "voice_error_start_recognition": "Sorry, cannot start speech recognition. Make sure your microphone is working and allow access.",
            "voice_error_general": "An error occurred with speech recognition.",
            "voice_error_not_allowed": "Microphone access denied. Please allow microphone usage.",
            "voice_error_no_speech": "No speech detected. Please try again.",
            "voice_error_network": "No internet connection for speech recognition. Please check your connection.",
            "loading_image": "LOADING IMAGE...",
            "loading": "Loading",
            "image_not_found_error": "ERROR: IMAGE NOT FOUND. Please check file path.",
            "loading_error": "Error loading",
            "check_file_path": "Check file path",
            "konami_code_activated": "ACCESS GRANTED: Overclock Mode Activated! Prepare for impact.",
            "link_opened_confirmation": (title) => `Okay, I will open Deden's ${title}.`,
            "download_cv_confirmation": () => 'Okay, Deden Hadiguna\'s CV will be downloaded.',
            "project": "project",
            "certificate": "certificate",
            "education_history": "education history",
            "which_project": "which project",
            "which_certificate": "which certificate",
            "which_education_history": "which education history",
            "skills_info": () => 'Certainly, these are Deden\'s skills. Is there any particular skill you\'d like to know more about?',
            "projects_info": () => 'Here is a list of Deden\'s projects. Is there any specific project that catches your attention?',
            "education_info": () => 'Here is Deden\'s education history. Any other questions?',
            "contact_info": () => 'Certainly, here is Deden\'s contact information.',
            "cv_link": "CV link",
            "link": "link"
        }
    };

    // >>> START: Pastikan DEKLARASI FUNGSI applyLanguage di sini <<<
    // Ini adalah fungsi applyLanguage original yang akan dideklarasikan di awal
    function applyLanguage(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = languageData[lang][key];

            if (translation) {
                if (element.tagName === 'TITLE') {
                    document.title = translation;
                } else if (element.tagName === 'META') {
                    if (element.getAttribute('name') === 'description' || element.getAttribute('name') === 'keywords' ||
                        element.getAttribute('property') === 'og:title' || element.getAttribute('property') === 'og:description') {
                        element.setAttribute('content', translation);
                    }
                } else if (element.classList.contains('decrypt-text')) {
                    element.setAttribute('data-text', translation);
                    if (element.classList.contains('decrypted') || key === 'hero_title') {
                         element.textContent = translation;
                    } else {
                        element.textContent = '';
                        element.style.opacity = '0';
                        element.classList.remove('scrambled');
                        element.classList.remove('decrypted');
                    }
                } else if (element.hasAttribute('data-i18n-hover-title')) {
                    element.querySelector('.skill-title').textContent = translation;
                    element.setAttribute('data-hover-title', translation);
                } else if (element.hasAttribute('data-i18n-hover-desc')) {
                    element.querySelector('.skill-level-text').textContent = translation;
                    element.setAttribute('data-hover-desc', translation);
                } else if (element.classList.contains('project-title')) {
                    element.textContent = translation;
                    element.closest('.project-card').setAttribute('data-project-title', translation);
                } else if (element.classList.contains('project-type')) {
                    element.textContent = translation;
                    element.closest('.project-card').setAttribute('data-project-type', translation);
                } else if (element.classList.contains('project-desc')) {
                    element.textContent = translation;
                } else if (element.classList.contains('photo-overlay')) {
                    element.textContent = translation;
                    element.closest('.photo-item').setAttribute('data-photo-caption', translation);
                } else if (element.classList.contains('cert-title')) {
                    element.textContent = translation;
                    element.closest('.certificate-item').setAttribute('data-cert-title', translation);
                } else if (element.classList.contains('cert-issuer')) {
                    element.textContent = translation;
                    element.closest('.certificate-item').setAttribute('data-cert-issuer', translation);
                } else if (element.classList.contains('timeline-title')) {
                    element.textContent = translation;
                    element.closest('.timeline-item').setAttribute('data-edu-title', translation);
                } else if (element.classList.contains('timeline-period')) {
                    element.textContent = translation;
                    element.closest('.timeline-item').setAttribute('data-edu-period', translation);
                } else if (element.classList.contains('timeline-role')) {
                    element.textContent = translation;
                    element.closest('.timeline-item').setAttribute('data-edu-role', translation);
                } else if (element.classList.contains('timeline-desc')) {
                    element.textContent = translation;
                    element.closest('.timeline-item').setAttribute('data-edu-desc', translation);
                } else if (element.id === 'back-to-top' && key === 'back_to_top_aria') {
                    element.setAttribute('aria-label', translation);
                } else {
                    element.textContent = translation;
                }
            }
        });

        const profileSubtitleElement = document.querySelector('[data-i18n="profile_subtitle"]');
        if (profileSubtitleElement) {
            const highlightSpan = profileSubtitleElement.querySelector('[data-i18n="profile_subtitle_highlight"]');
            if (highlightSpan) {
                const originalFullText = languageData[lang]["profile_subtitle"];
                const highlightText = languageData[lang]["profile_subtitle_highlight"];
                if (originalFullText && highlightText) {
                    profileSubtitleElement.setAttribute('data-text', originalFullText);
                    profileSubtitleElement.textContent = originalFullText;
                    highlightSpan.textContent = highlightText;
                }
            }
        }

        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        localStorage.setItem('selectedLanguage', lang);
    }
    // >>> END: DEKLARASI FUNGSI applyLanguage di sini <<<

    const debounce = (func, delay) => {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const preloader = document.getElementById('preloader');
    const preloaderStatus = document.getElementById('preloader-status');

    function hidePreloader() {
        if (preloader) {
            preloader.classList.add('hidden');
            preloader.addEventListener('transitionend', () => {
                preloader.remove();
                initCoreFeatures();
            }, { once: true });
        } else {
            initCoreFeatures();
        }
    }

    if (preloader && preloaderStatus) {
        const preloaderBar = preloader.querySelector('.preloader-bar');
        const preloaderTextSpans = preloader.querySelectorAll('.preloader-text span');
        
        preloaderStatus.textContent = 'MEMUAT...';

        if (preloaderBar) {
            preloaderBar.addEventListener('animationend', () => {
                preloaderStatus.textContent = 'SIAP';
                preloaderTextSpans.forEach(span => span.classList.add('typed-done'));
                setTimeout(hidePreloader, 300);
            }, { once: true });

            preloaderTextSpans.forEach((span, index) => {
                let delay = 0;
                if (index === 0) delay = 100;
                if (index === 1) delay = 2000;
                if (index === 2) delay = 2750;
                
                setTimeout(() => {
                    span.classList.add('typed-done');
                }, delay + 100);
            });

        } else {
            preloaderStatus.textContent = 'SIAP';
            preloaderTextSpans.forEach(span => span.classList.add('typed-done'));
            setTimeout(hidePreloader, 500);
        }
    } else {
        initCoreFeatures();
    }

    function initCoreFeatures() {
        initContentAnimations();
        initQuantumCanvas();
        initUptimeCounter();
        initAIStatus();
        initDecryptTextOnScroll();
        initNavAndScrollHighlight();
        initCtaButtons();
        initMobileMenuToggle();
        initProjectFiltering();
        initSkillInfoOverlay();
        initImageModal();
        initCurrentYear();
        initBackToTopButton();
        initKonamiCode();
        initAIVoiceToggle();
        initTypedJS();
        initLanguageToggle();
        initDashboardToggle();
        initDarkModeToggle();
    }

    let applyLanguageModified = false; // Flag to check if applyLanguage has been modified

    function initLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        if (langButtons.length === 0) {
            return;
        }

        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                applyLanguage(button.dataset.lang);
            });
        });

        const savedLanguage = localStorage.getItem('selectedLanguage') || 'id';
        applyLanguage(savedLanguage);
    }

    // This section modifies the applyLanguage function
    if (!applyLanguageModified) { // Ensure it's only modified once
        let originalApplyLanguage = applyLanguage; // Capture the initial function reference
        applyLanguage = (lang) => { // Reassign applyLanguage to the new function
            originalApplyLanguage(lang); // Call the original function first
            // Add additional logic that you want to run after the original applyLanguage
            if (lang === 'en' || lang === 'id') { // Only run if language is English or Indonesian
                initTypedJS(); // Re-initialize TypedJS for the hero title
                findAndSetAIvoice(); // Re-select AI voice for the current language
                const skillOverlayDesc = document.getElementById('skill-overlay-desc');
                if (skillOverlayDesc) {
                    skillOverlayDesc.textContent = languageData[lang]["skill_overlay_desc_default"] || 'Arahkan kursor ke modul skill untuk analisis detail.';
                }
                const aiVoiceToggle = document.querySelector('.ai-voice-toggle');
                if (aiVoiceToggle) {
                    const isActive = aiVoiceToggle.dataset.active === 'true';
                    aiVoiceToggle.setAttribute('title', isActive ? languageData[lang]["voice_assistant_active_title"] : languageData[lang]["voice_assistant_inactive_title"]);
                }
                initAIStatus(aiStatusElement.textContent, aiStatusElement.style.color);
            }
        };
        applyLanguageModified = true; // Set flag to true
    }

    let uptimeSeconds = 0;
    let uptimeInterval;
    const uptimeDisplay = document.getElementById('uptime-display');
    const aiStatusElement = document.getElementById('ai-status');
    const systemStatusDashboard = document.querySelector('.system-status-dashboard');

    function initUptimeCounter() {
        if (!uptimeDisplay) {
            return;
        }
        if (uptimeInterval) clearInterval(uptimeInterval);

        uptimeInterval = setInterval(() => {
            uptimeSeconds++;
            const hours = String(Math.floor(uptimeSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((uptimeSeconds % 3600) / 60)).padStart(2, '0');
            const seconds = String(uptimeSeconds % 60).padStart(2, '0');
            uptimeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }

    function initAIStatus(statusText = 'OFFLINE', color = HIGHLIGHT_COLORS.secondary) {
        if (!aiStatusElement || !systemStatusDashboard) {
            return;
        }

        aiStatusElement.textContent = statusText;
        aiStatusElement.style.color = color;
        aiStatusElement.style.textShadow = `0 0 5px ${color}`;

        if (aiStatusElement._flickerInterval) clearInterval(aiStatusElement._flickerInterval);
        aiStatusElement.classList.remove('online-flicker');

        const isAIActive = statusText !== 'OFFLINE' && statusText !== languageData[document.documentElement.lang]["status_canvas_value"];
        const isListeningOrProcessing = statusText === (languageData[document.documentElement.lang]["voice_status_listening"] || 'MENDENGARKAN...') ||
                                        statusText === (languageData[document.documentElement.lang]["voice_status_processing"] || 'MEMPROSES...') ||
                                        statusText === (languageData[document.documentElement.lang]["voice_status_speaking"] || 'MEMBICARAKAN...') ||
                                        statusText === (languageData[document.documentElement.lang]["voice_error_general"] || 'GALAT');


        if (isAIActive || isListeningOrProcessing) {
            systemStatusDashboard.classList.remove('hidden-dashboard');
            systemStatusDashboard.classList.add('show-dashboard');
        } else {
            systemStatusDashboard.classList.remove('show-dashboard');
            systemStatusDashboard.classList.add('hidden-dashboard');
        }

        if (statusText === (languageData[document.documentElement.lang]["voice_status_listening"] || 'MENDENGARKAN...') || statusText === (languageData[document.documentElement.lang]["voice_status_active"] || 'AKTIF')) {
            aiStatusElement.classList.add('online-flicker');
        } else {
            aiStatusElement.style.opacity = '1';
        }
    }

    function initDashboardToggle() {
        if (!systemStatusDashboard) {
            return;
        }

        systemStatusDashboard.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                systemStatusDashboard.classList.toggle('expanded');
            }
        });
    }

    let recognition;
    let synth;
    let speaking = false;
    let listening = false;
    let aiContext = {};
    const aiVoiceToggle = document.querySelector('.ai-voice-toggle');
    let selectedVoiceForAI = null;
    let audioContext;
    let proactiveHelpTimer; 

    const simulateThinking = (callback) => {
        initAIStatus(languageData[document.documentElement.lang]["voice_status_processing"] || 'MEMPROSES...', HIGHLIGHT_COLORS.secondary);
        setTimeout(() => {
            callback();
        }, 800);
    };

    const playSound = (type) => {
        try {
            if (!audioContext || audioContext.state === 'closed') {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            switch (type) {
                case 'start_listening':
                    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.08);
                    break;
                case 'stop_listening':
                    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.08);
                    break;
                case 'unrecognized':
                    oscillator.type = 'sawtooth';
                    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.15);
                    break;
                case 'success':
                    oscillator.frequency.setValueAtTime(980, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.08);
                    break;
            }
        } catch (e) {
        }
    };

    function findAndSetAIvoice() {
        const voices = synth.getVoices();
        let voiceFound = null;
        const currentLang = document.documentElement.lang;

        if (currentLang === 'id') {
            voiceFound = voices.find(
                voice => voice.lang === 'id-ID' &&
                         (voice.name.includes('Google') && voice.name.includes('Bahasa Indonesia') ||
                          voice.name.includes('id-ID') && voice.name.includes('Wavenet'))
            );
            if (!voiceFound) {
                voiceFound = voices.find(
                    voice => voice.lang === 'id-ID' && voice.name.includes('Google')
                );
            }
            if (!voiceFound) {
                voiceFound = voices.find(voice => voice.lang.startsWith('id'));
            }
        } else if (currentLang === 'en') {
            voiceFound = voices.find(
                voice => voice.lang === 'en-US' && voice.name.includes('Google') ||
                         voice.lang === 'en-GB' && voice.name.includes('Google')
            );
            if (!voiceFound) {
                voiceFound = voices.find(voice => voice.lang.startsWith('en'));
            }
        }

        selectedVoiceForAI = voiceFound;
    }

    function startSpeechRecognition() {
        if (listening) {
            return;
        }
        if (!recognition) {
            return;
        }

        try {
            recognition.start();
        } catch (e) {
            if (e.message.includes("already started")) {
            } else {
                initAIStatus('GALAT', GLITCH_COLOR);
                aiVoiceToggle.dataset.active = 'false';
                aiVoiceToggle.setAttribute('title', languageData[document.documentElement.lang]["voice_assistant_inactive_title"] || 'Asisten Suara: NONAKTIF (Galat)');
                speakText(languageData[document.documentElement.lang]["voice_error_start_recognition"] || "Maaf, tidak dapat memulai pengenalan suara. Pastikan mikrofon berfungsi dan izinkan akses.");
                playSound('unrecognized');
                clearTimeout(proactiveHelpTimer);
            }
        }
    }

    function initAIVoiceToggle() {
        if (!aiVoiceToggle) {
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const SpeechSynthesis = window.speechSynthesis;
        const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;

        if (!SpeechRecognition || !SpeechSynthesis || !SpeechSynthesisUtterance) {
            aiVoiceToggle.style.display = 'none';
            return;
        }

        synth = SpeechSynthesis;
        synth.onvoiceschanged = findAndSetAIvoice;
        if (synth.getVoices().length > 0) {
            findAndSetAIvoice();
        }

        aiVoiceToggle.addEventListener('click', () => {
            const isActive = aiVoiceToggle.dataset.active === 'true';

            if (!isActive) {
                aiVoiceToggle.dataset.active = 'true';
                aiVoiceToggle.setAttribute('title', languageData[document.documentElement.lang]["voice_assistant_active_title"] || 'Asisten Suara: AKTIF (Klik untuk Berhenti)');
                initAIStatus('INISIALISASI...', HIGHLIGHT_COLORS.secondary);
                playSound('start_listening');

                recognition = new SpeechRecognition();
                recognition.lang = document.documentElement.lang === 'id' ? 'id-ID' : 'en-US';
                recognition.interimResults = false;
                recognition.continuous = true;
                recognition.maxAlternatives = 1;

                recognition.onstart = () => {
                    listening = true;
                    initAIStatus(languageData[document.documentElement.lang]["voice_status_listening"] || 'MENDENGARKAN...', HIGHLIGHT_COLORS.primary);
                    aiVoiceToggle.querySelector('i').classList.add('fa-beat-fade');
                    resetProactiveHelpTimer();
                };

                recognition.onresult = (event) => {
                    const speechResult = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();

                    if (speechResult) {
                        initAIStatus(languageData[document.documentElement.lang]["voice_status_processing"] || 'MEMPROSES...', HIGHLIGHT_COLORS.secondary);
                        aiVoiceToggle.querySelector('i').classList.remove('fa-beat-fade');
                        
                        if (recognition && listening) {
                            recognition.stop();
                            listening = false;
                        }

                        simulateThinking(() => {
                            let aiResponse = processVoiceCommand(speechResult);
                            speakText(aiResponse, () => {
                                if (aiContext.lastIntent === 'stop_command') {
                                    aiVoiceToggle.dataset.active = 'false';
                                    aiVoiceToggle.setAttribute('title', languageData[document.documentElement.lang]["voice_assistant_inactive_title"] || 'Asisten Suara: NONAKTIF (Klik untuk Memulai)');
                                    initAIStatus(languageData[document.documentElement.lang]["voice_status_inactive"] || 'NONAKTIF', HIGHLIGHT_COLORS.secondary);
                                    aiContext = {};
                                    playSound('stop_listening');
                                    clearTimeout(proactiveHelpTimer);
                                } else if (aiVoiceToggle.dataset.active === 'true') {
                                    startSpeechRecognition();
                                }
                            });
                        });
                    } else {
                    }
                };

                recognition.onerror = (event) => {
                    listening = false;
                    aiVoiceToggle.querySelector('i').classList.remove('fa-beat-fade');
                    
                    let errorMessage = languageData[document.documentElement.lang]["voice_error_general"] || "Terjadi kesalahan pada pengenalan suara.";
                    let shouldDeactivateToggle = true;

                    if (event.error === 'not-allowed') {
                        errorMessage = languageData[document.documentElement.lang]["voice_error_not_allowed"] || "Akses mikrofon ditolak. Mohon izinkan penggunaan mikrofon.";
                    } else if (event.error === 'no-speech') {
                        errorMessage = languageData[document.documentElement.lang]["voice_error_no_speech"] || "Tidak ada suara terdeteksi. Silakan coba lagi.";
                        shouldDeactivateToggle = false; 
                        if (aiVoiceToggle.dataset.active === 'true' && !speaking) {
                            initAIStatus(languageData[document.documentElement.lang]["voice_status_listening"] || 'MENDENGARKAN...', HIGHLIGHT_COLORS.primary);
                            startSpeechRecognition();
                        } else {
                            shouldDeactivateToggle = true;
                        }
                        return;
                    } else if (event.error === 'network') {
                        errorMessage = languageData[document.documentElement.lang]["voice_error_network"] || "Tidak ada koneksi internet untuk pengenalan suara. Mohon periksa koneksi Anda.";
                    } else if (event.error === 'aborted') {
                        if (aiVoiceToggle.dataset.active === 'true' && !speaking) {
                            aiVoiceToggle.dataset.active = 'false';
                            aiVoiceToggle.setAttribute('title', languageData[document.documentElement.lang]["voice_assistant_inactive_title"] || 'Asisten Suara: NONAKTIF (Klik untuk Memulai)');
                            initAIStatus(languageData[document.documentElement.lang]["voice_status_inactive"] || 'NONAKTIF', HIGHLIGHT_COLORS.secondary);
                            aiContext = {};
                            clearTimeout(proactiveHelpTimer);
                            playSound('stop_listening');
                        }
                        return;
                    }

                    if (shouldDeactivateToggle) {
                        initAIStatus('GALAT', GLITCH_COLOR);
                        aiVoiceToggle.dataset.active = 'false';
                        aiVoiceToggle.setAttribute('title', languageData[document.documentElement.lang]["voice_assistant_inactive_title"] || 'Asisten Suara: NONAKTIF (Galat)');
                        aiContext = {};
                        clearTimeout(proactiveHelpTimer);
                        speakText(errorMessage);
                        playSound('unrecognized');
                    }
                };

                recognition.onend = () => {
                    listening = false;
                    aiVoiceToggle.querySelector('i').classList.remove('fa-beat-fade');
                    if (aiVoiceToggle.dataset.active === 'true' && !speaking) {
                        initAIStatus(languageData[document.documentElement.lang]["voice_status_listening"] || 'MENDENGARKAN...', HIGHLIGHT_COLORS.primary);
                        startSpeechRecognition();
                    } else if (aiVoiceToggle.dataset.active !== 'true' && !speaking) {
                        initAIStatus(languageData[document.documentElement.lang]["voice_status_inactive"] || 'NONAKTIF', HIGHLIGHT_COLORS.secondary);
                        aiContext = {};
                        playSound('stop_listening');
                        clearTimeout(proactiveHelpTimer);
                    }
                };

                startSpeechRecognition();

            } else {
                aiVoiceToggle.dataset.active = 'false';
                aiVoiceToggle.setAttribute('title', languageData[document.documentElement.lang]["voice_assistant_inactive_title"] || 'Asisten Suara: NONAKTIF (Klik untuk Memulai)');
                if (recognition) { 
                    recognition.stop();
                    recognition = null;
                }
                listening = false;
                if (synth && synth.speaking) {
                    synth.cancel();
                }
                speaking = false;
                aiVoiceToggle.querySelector('i').classList.remove('fa-beat-fade');
                initAIStatus(languageData[document.documentElement.lang]["voice_status_inactive"] || 'NONAKTIF', HIGHLIGHT_COLORS.secondary);
                aiContext = {};
                playSound('stop_listening');
                clearTimeout(proactiveHelpTimer);
            }
        });

        synth.addEventListener('end', () => {
            speaking = false;
            if (aiContext.lastIntent === 'stop_command') {
                aiVoiceToggle.dataset.active = 'false';
                aiVoiceToggle.setAttribute('title', languageData[document.documentElement.lang]["voice_assistant_inactive_title"] || 'Asisten Suara: NONAKTIF (Klik untuk Memulai)');
                initAIStatus(languageData[document.documentElement.lang]["voice_status_inactive"] || 'NONAKTIF', HIGHLIGHT_COLORS.secondary);
                aiContext = {};
                playSound('stop_listening');
                clearTimeout(proactiveHelpTimer);
            } else if (aiVoiceToggle.dataset.active === 'true') {
                initAIStatus(languageData[document.documentElement.lang]["voice_status_listening"] || 'MENDENGARKAN...', HIGHLIGHT_COLORS.primary);
                startSpeechRecognition();
            }
        });

        synth.addEventListener('start', () => {
            speaking = true;
            initAIStatus(languageData[document.documentElement.lang]["voice_status_speaking"] || 'MEMBICARAKAN...', HIGHLIGHT_COLORS.secondary);
            if (recognition && listening) {
                recognition.stop();
                listening = false;
            }
        });
    }

    function matchCommand(command, keywords) {
        command = command.toLowerCase().trim();

        for (const keyword of keywords) {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            if (regex.test(command)) {
                return true;
            }
        }

        const commandWords = command.split(/\s+/).filter(word => word.length > 0);
        for (const keyword of keywords) {
            const keywordWords = keyword.split(/\s+/).filter(word => word.length > 0);
            if (keywordWords.length === 0) continue;

            let matchesInOrder = 0;
            let currentCommandIndex = 0;
            for (let i = 0; i < keywordWords.length; i++) {
                const kw = keywordWords[i];
                let found = false;
                for (let j = currentCommandIndex; j < commandWords.length; j++) {
                    if (commandWords[j].includes(kw)) {
                        matchesInOrder++;
                        currentCommandIndex = j + 1;
                        found = true;
                        break;
                    }
                }
                if (!found) break;
            }
            if (matchesInOrder === keywordWords.length && matchesInOrder > 0) {
                return true;
            }
        }

        return false;
    }

    const intents = {
        id: {
            greet: ['halo', 'hai', 'selamat pagi', 'selamat siang', 'selamat sore', 'selamat malam', 'hallo', 'hai deden'],
            identity: ['siapa kamu', 'kamu siapa', 'tentang kamu', 'nama kamu siapa', 'jelaskan dirimu'],
            time: ['jam berapa', 'sekarang jam berapa', 'pukul berapa'],
            location: ['dimana kamu', 'lokasimu dimana', 'kamu di mana', 'dimana deden sekarang', 'lokasi deden'],
            describeDeden: ['ceritakan tentang deden', 'deden itu siapa', 'profil deden', 'siapa deden hadiguna', 'jelaskan tentang deden', 'tentang dia'],
            dedenAge: ['berapa umur deden', 'usia deden', 'deden berapa tahun'],
            dedenHobbies: ['apa hobi deden', 'kegemaran deden', 'aktivitas deden', 'deden suka apa'],
            thanks: ['terima kasih', 'makasih', 'thank you'],
            downloadCV: ['download cv', 'unduh cv', 'ambil cv', 'dapatkan cv', 'download resume'],
            openLink: {
                linkedin: ['buka linkedin', 'pergi ke linkedin', 'linkedin deden', 'lihat linkedin'],
                github: ['buka github', 'pergi ke github', 'github deden', 'lihat github', 'repositori deden'],
                email: ['kirim email', 'email deden', 'alamat email', 'kirimi saya email'],
                whatsapp: ['whatsapp deden', 'nomor whatsapp', 'kirim pesan whatsapp', 'kontak whatsapp', 'wa deden']
            },
            navigate: {
                home: ['home', 'beranda', 'kembali ke home', 'halaman utama', 'pulang'],
                about: ['tentang', 'profil', 'pergi ke tentang', 'tampilkan tentang', 'halaman tentang'],
                skills: ['keahlian', 'skill', 'kemampuan', 'daftar keahlian', 'lihat skill', 'halaman keahlian'],
                projects: ['proyek', 'portofolio', 'pekerjaan', 'lihat proyek', 'tampilkan proyek', 'halaman proyek'],
                photos: ['foto', 'galeri', 'gambar', 'lihat foto', 'tampilkan foto', 'halaman foto'],
                certificates: ['sertifikat', 'prestasi', 'lihat sertifikat', 'sertifikatnya', 'tampilkan sertifikat', 'halaman sertifikat'],
                education: ['pendidikan', 'riwayat', 'riwayat pendidikan', 'latar belakang pendidikan', 'sekolah deden', 'lihat pendidikan', 'halaman pendidikan'],
                contact: ['kontak', 'hubungi', 'informasi kontak', 'cara menghubungi', 'halaman kontak']
            },
            help: ['bantu saya', 'butuh bantuan', 'apa yang bisa saya lakukan', 'perintah apa saja', 'daftar perintah', 'apa saja yang bisa kamu lakukan', 'bantuan'],
            stop: ['mati', 'berhenti', 'nonaktifkan', 'tutup', 'sudah', 'cukup', 'selesai', 'hentikan', 'matikan asisten'],
            affirmation: ['ya', 'benar', 'betul', 'oke', 'setuju'],
            negation: ['tidak', 'bukan', 'salah'],
            queryProject: ['ceritakan tentang proyek', 'jelaskan proyek', 'detail proyek', 'informasi proyek', 'proyek'],
            queryCert: ['ceritakan tentang sertifikat', 'jelaskan sertifikat', 'detail sertifikat', 'informasi sertifikat', 'sertifikat'],
            queryEdu: ['ceritakan tentang pendidikan', 'jelaskan pendidikan', 'detail pendidikan', 'informasi pendidikan', 'pendidikan', 'riwayat']
        },
        en: {
            greet: ['hello', 'hi', 'good morning', 'good afternoon', 'good evening', 'hallo', 'hi deden'],
            identity: ['who are you', 'what are you', 'tell me about yourself', 'what is your name', 'explain yourself'],
            time: ['what time is it', 'current time'],
            location: ['where are you', 'your location', 'where is deden', 'deden\'s location'],
            describeDeden: ['tell me about deden', 'who is deden', 'deden\'s profile', 'who is deden hadiguna', 'explain deden', 'about him'],
            dedenAge: ['how old is deden', 'deden\'s age'],
            dedenHobbies: ['what are deden\'s hobbies', 'deden\'s interests', 'deden\'s activities', 'what does deden like'],
            thanks: ['thank you', 'thanks'],
            downloadCV: ['download cv', 'download resume', 'get cv'],
            openLink: {
                linkedin: ['open linkedin', 'go to linkedin', 'deden\'s linkedin', 'view linkedin'],
                github: ['open github', 'go to github', 'deden\'s github', 'view github', 'deden\'s repository'],
                email: ['send email', 'deden\'s email', 'email address', 'email me'],
                whatsapp: ['deden\'s whatsapp', 'whatsapp number', 'send whatsapp message', 'whatsapp contact', 'deden\'s wa']
            },
            navigate: {
                home: ['home', 'go home', 'main page'],
                about: ['about', 'profile', 'go to about', 'show about', 'about page'],
                skills: ['skills', 'expertise', 'abilities', 'list skills', 'show skills', 'skills page'],
                projects: ['projects', 'portfolio', 'work', 'view projects', 'show projects', 'projects page'],
                photos: ['photos', 'gallery', 'pictures', 'view photos', 'show photos', 'photos page'],
                certificates: ['certificates', 'achievements', 'view certificates', 'show certificates', 'certificates page'],
                education: ['education', 'history', 'education history', 'educational background', 'deden\'s school', 'view education', 'education page'],
                contact: ['contact', 'reach out', 'contact info', 'how to contact', 'contact page']
            },
            help: ['help me', 'need help', 'what can I do', 'what commands', 'list commands', 'what can you do', 'assistance'],
            stop: ['stop', 'turn off', 'deactivate', 'close', 'enough', 'finished', 'done'],
            affirmation: ['yes', 'correct', 'right', 'ok', 'agree'],
            negation: ['no', 'not', 'wrong'],
            queryProject: ['tell me about project', 'explain project', 'project details', 'project information', 'project'],
            queryCert: ['tell me about certificate', 'explain certificate', 'certificate details', 'certificate information', 'certificate'],
            queryEdu: ['tell me about education', 'explain education', 'education details', 'education information', 'education history', 'education']
        }
    };

    const PROACTIVE_HELP_DELAY = 20000;
    const startProactiveHelpTimer = () => {
        if (proactiveHelpTimer) clearTimeout(proactiveHelpTimer);
        proactiveHelpTimer = setTimeout(() => {
            if (aiVoiceToggle.dataset.active === 'true' && !speaking && !listening) {
                speakText(responseVariations[document.documentElement.lang].proactiveHelp[Math.floor(Math.random() * responseVariations[document.documentElement.lang].proactiveHelp.length)]);
            }
        }, PROACTIVE_HELP_DELAY);
    };
    const resetProactiveHelpTimer = () => {
        if (proactiveHelpTimer) clearTimeout(proactiveHelpTimer);
        if (aiVoiceToggle.dataset.active === 'true') {
            startProactiveHelpTimer();
        }
    };

    function processVoiceCommand(command) {
        command = command.trim().toLowerCase();
        const currentLangIntents = intents[document.documentElement.lang];
        const currentLangResponses = responseVariations[document.documentElement.lang];
        let commandMatched = false;

        resetProactiveHelpTimer();

        if (matchCommand(command, currentLangIntents.stop)) {
            commandMatched = true;
            aiContext = { lastIntent: 'stop_command' };
            return currentLangResponses.goodbye[Math.floor(Math.random() * currentLangResponses.goodbye.length)];
        }

        if (matchCommand(command, currentLangIntents.help)) {
            commandMatched = true;
            aiContext = { lastIntent: 'help' };
            return currentLangResponses.fullHelp();
        }

        if (matchCommand(command, currentLangIntents.describeDeden)) {
            commandMatched = true;
            aiContext = { lastIntent: 'describe_deden' };
            return currentLangResponses.aboutDedenFull();
        }
        if (matchCommand(command, currentLangIntents.dedenAge)) {
            commandMatched = true;
            const dedenAge = document.body.dataset.userAge || "unknown";
            aiContext = { lastIntent: 'deden_info', infoType: 'age' };
            return currentLangResponses.dedenAge(dedenAge)[Math.floor(Math.random() * currentLangResponses.dedenAge(dedenAge).length)];
        }
        if (matchCommand(command, currentLangIntents.dedenHobbies)) {
            commandMatched = true;
            const dedenHobbies = document.body.dataset.userHobbies || "not recorded";
            aiContext = { lastIntent: 'deden_info', infoType: 'hobbies' };
            return currentLangResponses.dedenHobbies(dedenHobbies)[Math.floor(Math.random() * currentLangResponses.dedenHobbies(dedenHobbies).length)];
        }
        if (matchCommand(command, currentLangIntents.location)) {
            commandMatched = true;
            const dedenLocation = document.body.dataset.userLocation || "unknown";
            aiContext = { lastIntent: 'deden_info', infoType: 'location' };
            return currentLangResponses.location(dedenLocation)[Math.floor(Math.random() * currentLangResponses.location(dedenLocation).length)];
        }

        for (const section in currentLangIntents.navigate) {
            if (matchCommand(command, currentLangIntents.navigate[section])) {
                commandMatched = true;
                const sectionName = languageData[document.documentElement.lang][section];
                if (navigateToSection(section)) {
                    aiContext = { lastIntent: 'navigate', lastSection: section };
                    return currentLangResponses.confirmNavigation(sectionName)[Math.floor(Math.random() * currentLangResponses.confirmNavigation(sectionName).length)];
                } else {
                    return currentLangResponses.errorNotFound(languageData[document.documentElement.lang][section] || `section ${section}`);
                }
            }
        }

        for (const linkType in currentLangIntents.openLink) {
            if (matchCommand(command, currentLangIntents.openLink[linkType])) {
                commandMatched = true;
                let targetHref = '';
                let linkTitle = '';

                if (linkType === 'linkedin') {
                    targetHref = document.querySelector('a[href*="linkedin.com/in/dedenhadiguna"]')?.href;
                    linkTitle = languageData[document.documentElement.lang]["contact_linkedin_title"] || 'LinkedIn';
                } else if (linkType === 'github') {
                    targetHref = document.querySelector('a[href*="github.com/Hdiignna-DEV"]')?.href;
                    linkTitle = languageData[document.documentElement.lang]["contact_github_title"] || 'GitHub';
                } else if (linkType === 'email') {
                    targetHref = document.querySelector('a[href^="mailto:"]')?.href;
                    linkTitle = languageData[document.documentElement.lang]["contact_email_title"] || 'email application';
                } else if (linkType === 'whatsapp') {
                    const contactPhoneElement = document.querySelector('.contact-card .contact-info a[href*="wa.me"]');
                    if (contactPhoneElement) {
                        targetHref = contactPhoneElement.href;
                        linkTitle = languageData[document.documentElement.lang]["contact_whatsapp_title"] || 'WhatsApp';
                    }
                }

                if (targetHref) {
                    window.open(targetHref, '_blank');
                    aiContext = { lastIntent: 'open_link', lastLink: linkType };
                    playSound('success');
                    return currentLangResponses.link_opened_confirmation ? currentLangResponses.link_opened_confirmation(linkTitle) : `Baik, saya akan membuka ${linkTitle} Deden.`;
                } else {
                    playSound('unrecognized');
                    return currentLangResponses.errorNotFound(languageData[document.documentElement.lang]["link"] || `link ${linkTitle}`);
                }
            }
        }

        if (matchCommand(command, currentLangIntents.downloadCV)) {
            commandMatched = true;
            const cvLink = document.querySelector('.cta-button.secondary[href*="CV-DedenHadiguna.pdf"]');
            if (cvLink) {
                cvLink.click();
                aiContext = { lastIntent: 'download_cv' };
                playSound('success');
                return currentLangResponses.download_cv_confirmation ? currentLangResponses.download_cv_confirmation() : 'Baik, CV Deden Hadiguna akan diunduh.';
            } else {
                playSound('unrecognized');
                return currentLangResponses.errorNotFound(languageData[document.documentElement.lang]["cv_link"] || 'CV link');
            }
        }

        let itemDetailQueryMatched = false;
        if (matchCommand(command, currentLangIntents.queryProject)) {
            const queryPart = command.replace(new RegExp(`\\b(${currentLangIntents.queryProject.join('|')})\\b`, 'gi'), '').trim();
            const projectData = getProjectData(queryPart || aiContext.lastSpokenProject);
            if (projectData) {
                commandMatched = true;
                itemDetailQueryMatched = true;
                aiContext = { lastIntent: 'item_detail', itemType: 'project', itemData: projectData, lastSpokenProject: projectData.title.toLowerCase() };
                playSound('success');
                return currentLangResponses.projectDetails(projectData.title, projectData.type, projectData.tech)[Math.floor(Math.random() * currentLangResponses.projectDetails(projectData.title, projectData.type, projectData.tech).length)];
            } else if (queryPart) {
                commandMatched = true;
                playSound('unrecognized');
                return currentLangResponses.errorNotFound(languageData[document.documentElement.lang]["project"] || `project "${queryPart}"`);
            } else if (aiContext.lastIntent === 'navigate' && aiContext.lastSection === 'projects') {
                commandMatched = true;
                return currentLangResponses.clarification(languageData[document.documentElement.lang]["which_project"] || 'which project');
            }
        }
        if (!itemDetailQueryMatched && matchCommand(command, currentLangIntents.queryCert)) {
            const queryPart = command.replace(new RegExp(`\\b(${currentLangIntents.queryCert.join('|')})\\b`, 'gi'), '').trim();
            const certData = getCertData(queryPart || aiContext.lastSpokenCert);
            if (certData) {
                commandMatched = true;
                itemDetailQueryMatched = true;
                aiContext = { lastIntent: 'item_detail', itemType: 'certificate', itemData: certData, lastSpokenCert: certData.title.toLowerCase() };
                playSound('success');
                return currentLangResponses.certDetails(certData.title, certData.issuer, certData.date)[Math.floor(Math.random() * currentLangResponses.certDetails(certData.title, certData.issuer, certData.date).length)];
            } else if (queryPart) {
                commandMatched = true;
                playSound('unrecognized');
                return currentLangResponses.errorNotFound(languageData[document.documentElement.lang]["certificate"] || `certificate "${queryPart}"`);
            } else if (aiContext.lastIntent === 'navigate' && aiContext.lastSection === 'certificates') {
                commandMatched = true;
                return currentLangResponses.clarification(languageData[document.documentElement.lang]["which_certificate"] || 'which certificate');
            }
        }
        if (!itemDetailQueryMatched && matchCommand(command, currentLangIntents.queryEdu)) {
            const queryPart = command.replace(new RegExp(`\\b(${currentLangIntents.queryEdu.join('|')})\\b`, 'gi'), '').trim();
            const eduData = getEducationData(queryPart || aiContext.lastSpokenEdu);
            if (eduData) {
                commandMatched = true;
                itemDetailQueryMatched = true;
                aiContext = { lastIntent: 'item_detail', itemType: 'education', itemData: eduData, lastSpokenEdu: eduData.title.toLowerCase() };
                playSound('success');
                return currentLangResponses.eduDetails(eduData.title, eduData.role, eduData.period, eduData.desc)[Math.floor(Math.random() * currentLangResponses.eduDetails(eduData.title, eduData.role, eduData.period, eduData.desc).length)];
            } else if (queryPart) {
                commandMatched = true;
                playSound('unrecognized');
                return currentLangResponses.errorNotFound(languageData[document.documentElement.lang]["education_history"] || `education history "${queryPart}"`);
            } else if (aiContext.lastIntent === 'navigate' && aiContext.lastSection === 'education') {
                commandMatched = true;
                return currentLangResponses.clarification(languageData[document.documentElement.lang]["which_education_history"] || 'which education history');
            }
        }

        if (matchCommand(command, currentLangIntents.greet)) {
            commandMatched = true;
            aiContext = { lastIntent: 'greet' };
            return currentLangResponses.greet[Math.floor(Math.random() * currentLangResponses.greet.length)];
        } else if (matchCommand(command, currentLangIntents.identity)) {
            commandMatched = true;
            aiContext = { lastIntent: 'identity' };
            return currentLangResponses.identity[Math.floor(Math.random() * currentLangResponses.identity.length)];
        } else if (matchCommand(command, currentLangIntents.time)) {
            commandMatched = true;
            aiContext = { lastIntent: 'time' };
            const now = new Date();
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: 'Asia/Jakarta'
            };
            const timeString = now.toLocaleTimeString(document.documentElement.lang === 'id' ? 'id-ID' : 'en-US', options);
            return currentLangResponses.time(timeString)[Math.floor(Math.random() * currentLangResponses.time(timeString).length)];
        } else if (matchCommand(command, currentLangIntents.thanks)) {
            commandMatched = true;
            aiContext = { lastIntent: 'thanks' };
            return currentLangResponses.thanks[Math.floor(Math.random() * currentLangResponses.thanks.length)];
        }

        if (!commandMatched && aiContext.lastIntent) {
            if (['describe_deden', 'deden_info', 'help'].includes(aiContext.lastIntent)) {
                if (matchCommand(command, ['keahlian', 'skill', 'kemampuan', 'skills', 'abilities'])) {
                    navigateToSection('skills');
                    aiContext = { lastIntent: 'navigate', lastSection: 'skills' };
                    return currentLangResponses.skills_info ? currentLangResponses.skills_info() : 'Tentu, ini adalah keahlian Deden. Apakah ada keahlian tertentu yang ingin Anda ketahui lebih lanjut?';
                } else if (matchCommand(command, ['proyek', 'portfolio', 'pekerjaan', 'projects', 'work'])) {
                    navigateToSection('projects');
                    aiContext = { lastIntent: 'navigate', lastSection: 'projects' };
                    return currentLangResponses.projects_info ? currentLangResponses.projects_info() : 'Ini adalah daftar proyek Deden. Apakah ada proyek spesifik yang menarik perhatian Anda?';
                } else if (matchCommand(command, ['pendidikan', 'riwayat', 'education', 'history'])) {
                    navigateToSection('education');
                    aiContext = { lastIntent: 'navigate', lastSection: 'education' };
                    return currentLangResponses.education_info ? currentLangResponses.education_info() : 'Berikut riwayat pendidikan Deden. Ada pertanyaan lain?';
                } else if (matchCommand(command, currentLangIntents.contact)) {
                    navigateToSection('contact');
                    aiContext = { lastIntent: 'navigate', lastSection: 'contact' };
                    return currentLangResponses.contact_info ? currentLangResponses.contact_info() : 'Tentu, ini adalah informasi kontak Deden.';
                } else if (matchCommand(command, currentLangIntents.downloadCV)) {
                     const cvLink = document.querySelector('.cta-button.secondary[href*="CV-DedenHadiguna.pdf"]');
                     if (cvLink) {
                         cvLink.click();
                         aiContext = { lastIntent: 'download_cv' };
                         return currentLangResponses.download_cv_confirmation ? currentLangResponses.download_cv_confirmation() : 'Baik, CV Deden Hadiguna akan diunduh.';
                     } else {
                         return currentLangResponses.errorNotFound(languageData[document.documentElement.lang]["cv_link"] || 'CV link');
                     }
                }
            }
            aiContext = {}; 
        }

        aiContext = { lastIntent: 'unrecognized' };
        playSound('unrecognized');
        const unrecognizedResponse = currentLangResponses.unrecognized[Math.floor(Math.random() * currentLangResponses.unrecognized.length)];
        const proactiveTip = currentLangResponses.proactiveHelp[Math.floor(Math.random() * currentLangResponses.proactiveHelp.length)];
        return `${unrecognizedResponse} ${proactiveTip}`;
    }

    function speakText(text, callback = null, logWarning = true) {
        if (synth && synth.speaking) {
            synth.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = document.documentElement.lang === 'id' ? 'id-ID' : 'en-US';
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        if (selectedVoiceForAI) {
            utterance.voice = selectedVoiceForAI;
        } else {
            const voices = synth.getVoices();
            let voiceToUse = voices.find(voice => voice.lang === utterance.lang && voice.name.includes('Google')) ||
                             voices.find(voice => voice.lang.startsWith(document.documentElement.lang));
            if (voiceToUse) {
                utterance.voice = voiceToUse;
            } else {
            }
        }

        utterance.onend = () => {
            speaking = false;
            if (callback) callback();
            resetProactiveHelpTimer();
        };
        utterance.onstart = () => {
            speaking = true;
            initAIStatus(languageData[document.documentElement.lang]["voice_status_speaking"] || 'MEMBICARAKAN...', HIGHLIGHT_COLORS.secondary);
            if (recognition && listening) {
                recognition.stop();
                listening = false;
            }
        };
        utterance.onerror = (event) => {
            speaking = false;
            if (callback) callback();
            playSound('unrecognized');
            resetProactiveHelpTimer();
        };

        synth.speak(utterance);
    }

    let navbarHeight = 90;
    const updateNavbarHeight = () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbarHeight = navbar.offsetHeight;
        }
    };
    window.addEventListener('resize', debounce(updateNavbarHeight, 200));

    const highlightNavLink = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinksSide = document.querySelectorAll('.nav-links-side .nav-link');
        let currentSectionId = '';

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const sectionTop = section.offsetTop - navbarHeight - 90;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.id;
                break;
            }
        }

        navLinksSide.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', debounce(highlightNavLink, 50));

    function initNavAndScrollHighlight() {
        updateNavbarHeight();
        highlightNavLink();
        
        const sideNavLinks = document.querySelectorAll('.nav-links-side .nav-link');

        sideNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight + 1,
                        behavior: 'smooth'
                    });
                    const sideOverlayMenu = document.getElementById('sideOverlayMenu');
                    if (sideOverlayMenu && sideOverlayMenu.classList.contains('open')) {
                        sideOverlayMenu.classList.remove('open');
                    }
                }
            });
        });
    }

    function initCtaButtons() {
        const ctaButtons = document.querySelectorAll('.cta-button[data-scroll-to]');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetId = this.dataset.scrollTo;
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight + 1,
                        behavior: 'smooth'
                    });
                    playSound('success');
                }
            });
        });
    }
    
    function initMobileMenuToggle() {
        const menuToggle = document.querySelector('.menu-toggle');
        const sideOverlayMenu = document.getElementById('sideOverlayMenu');
        const closeSideMenuBtn = document.getElementById('closeSideMenu');
        const navLinksSide = document.getElementById('navLinksSide');

        if (!menuToggle || !sideOverlayMenu || !closeSideMenuBtn || !navLinksSide) {
            return;
        }

        menuToggle.addEventListener('click', () => {
            sideOverlayMenu.classList.add('open');
        });

        closeSideMenuBtn.addEventListener('click', () => {
            sideOverlayMenu.classList.remove('open');
        });

        navLinksSide.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                sideOverlayMenu.classList.remove('open');
            });
        });
    }

    function initContentAnimations() {
        const skillCards = document.querySelectorAll('.skill-card');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBarDiv = entry.target.querySelector('.skill-level-bar div');
                    if (skillBarDiv) {
                        skillBarDiv.style.width = entry.target.dataset.hoverValue || '0%';
                        obs.unobserve(entry.target);
                    }
                }
            });
        }, options);

        skillCards.forEach(element => {
            observer.observe(element);
        });
    }

    function getRandomChar(originalChar) {
        const chars = "!@#$%^&*()_+{}[]|:;<>?,./`~";
        if (/[a-zA-Z0-9]/.test(originalChar)) {
            return chars[Math.floor(Math.random() * chars.length)];
        }
        return originalChar;
    }

    function getRandomScrambledText(text) {
        let scrambled = '';
        for (let i = 0; i < text.length; i++) {
            scrambled += getRandomChar(text[i]);
        }
        return scrambled;
    }

    function initDecryptTextOnScroll() {
        const decryptTexts = document.querySelectorAll('.decrypt-text:not(#typed-hero-title):not(.decrypted):not(.scrambling)');
        if (decryptTexts.length === 0) {
            return;
        }

        const decryptObserverOptions = {
            root: null,
            rootMargin: '0px 0px -15% 0px',
            threshold: 0.5
        };

        const decryptObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('decrypted')) {
                    const element = entry.target;

                    const originalText = element.dataset.text;
                    if (!originalText) {
                        return;
                    }

                    let pseudoContentSpan = element.querySelector('.decrypt-pseudo-content');
                    if (pseudoContentSpan) {
                        pseudoContentSpan.remove();
                    }
                    
                    pseudoContentSpan = document.createElement('span');
                    pseudoContentSpan.classList.add('decrypt-pseudo-content');
                    element.innerHTML = '';
                    element.appendChild(pseudoContentSpan);


                    let charIndex = 0;
                    let scrambleIteration = 0;
                    const maxScrambleIterations = 3;
                    const decryptionSpeed = parseInt(element.dataset.decryptSpeed) || 30;

                    element.classList.add('scrambling');
                    element.style.opacity = '1';

                    const decryptInterval = setInterval(() => {
                        if (charIndex < originalText.length) {
                            if (scrambleIteration < maxScrambleIterations) {
                                const scrambledPart = getRandomScrambledText(originalText.substring(charIndex));
                                pseudoContentSpan.textContent = originalText.substring(0, charIndex) + scrambledPart;
                                scrambleIteration++;
                            } else {
                                charIndex++;
                                scrambleIteration = 0;
                                pseudoContentSpan.textContent = originalText.substring(0, charIndex) + getRandomScrambledText(originalText.substring(charIndex));
                            }
                        } else {
                            clearInterval(decryptInterval);
                            element.textContent = originalText;
                            element.classList.remove('scrambling');
                            element.classList.add('decrypted');
                            setTimeout(() => {
                                if (pseudoContentSpan) {
                                    pseudoContentSpan.remove();
                                }
                            }, 300);
                            observer.unobserve(element);
                        }
                    }, decryptionSpeed);
                }
            });
        }, decryptObserverOptions);

        decryptTexts.forEach(element => {
            if (!element.dataset.text && element.hasAttribute('data-i18n')) {
                const key = element.getAttribute('data-i18n');
                element.dataset.text = languageData[document.documentElement.lang][key] || element.textContent;
            }
            element.textContent = '';
            element.style.opacity = '0';
            decryptObserver.observe(element);
        });
    }

    let quantumCanvas = null;
    let quantumCtx = null;
    let particles = [];
    let mouse = { x: null, y: null, radius: 200 };
    let particlesAnimationFrameId;

    const PARTICLE_COUNT_DESKTOP = 200; 
    const PARTICLE_COUNT_MOBILE = 100; // Reduced for performance on mobile
    const PARTICLE_SIZE = 1.5;
    const PARTICLE_SPEED_MULTIPLIER = 0.05;

    function initQuantumCanvas() {
        quantumCanvas = document.getElementById('quantumCanvas');
        if (!quantumCanvas) {
            return;
        }

        quantumCtx = quantumCanvas.getContext('2d');
        window.addEventListener('resize', debounce(resizeQuantumCanvas, 200));
        resizeQuantumCanvas();

        quantumCanvas.addEventListener('mousemove', function(e) {
            const rect = quantumCanvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        quantumCanvas.addEventListener('mouseout', function() {
            mouse.x = null;
            mouse.y = null;
        });

        if (particlesAnimationFrameId) {
            cancelAnimationFrame(particlesAnimationFrameId);
        }
        animateParticles();
    }

    function resizeQuantumCanvas() {
        if (quantumCanvas) {
            quantumCanvas.width = quantumCanvas.offsetWidth;
            quantumCanvas.height = quantumCanvas.offsetHeight;

            particles = [];
            // Dynamically adjust particle count based on screen width
            const currentParticleCount = window.innerWidth <= 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP; 
            for (let i = 0; i < currentParticleCount; i++) {
                particles.push(new Particle(
                    Math.random() * quantumCanvas.width,
                    Math.random() * quantumCanvas.height,
                    (Math.random() - 0.5) * PARTICLE_SPEED_MULTIPLIER,
                    (Math.random() - 0.5) * PARTICLE_SPEED_MULTIPLIER
                ));
            }
        }
    }

    class Particle {
        constructor(x, y, vx, vy) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.size = PARTICLE_SIZE;
            this.opacity = Math.random() * 0.6 + 0.2;
        }

        draw() {
            if (!quantumCtx) return;
            // Use the primary accent color for particles
            const color = HIGHLIGHT_COLORS.secondary; 
            quantumCtx.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${this.opacity})`;
            quantumCtx.beginPath();
            quantumCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            quantumCtx.closePath();
            quantumCtx.fill();
        }

        update() {
            if (this.x + this.size > quantumCanvas.width || this.x - this.size < 0) {
                this.vx *= -1;
            }
            if (this.y + this.size > quantumCanvas.height || this.y - this.size < 0) {
                this.vy *= -1;
            }

            this.x += this.vx;
            this.y += this.vy;

            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let repulsionStrength = 1.2;
                    let directionX = forceDirectionX * force * repulsionStrength;
                    let directionY = forceDirectionY * force * repulsionStrength;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            for (let i = 0; i < particles.length; i++) {
                let otherParticle = particles[i];
                if (this !== otherParticle) {
                    let dx = this.x - otherParticle.x;
                    let dy = this.y - otherParticle.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        if (!quantumCtx) return;
                        // Use secondary accent color for lines
                        const lineColor = HIGHLIGHT_COLORS.primary; 
                        quantumCtx.strokeStyle = `rgba(${parseInt(lineColor.slice(1, 3), 16)}, ${parseInt(lineColor.slice(3, 5), 16)}, ${parseInt(lineColor.slice(5, 7), 16)}, ${0.4 - (distance / 150) * 0.4})`;
                        quantumCtx.lineWidth = 0.8;
                        quantumCtx.beginPath();
                        quantumCtx.moveTo(this.x, this.y);
                        quantumCtx.lineTo(otherParticle.x, otherParticle.y);
                        quantumCtx.stroke();
                    }
                }
            }
        }
    }

    function animateParticles() {
        if (!quantumCtx || !quantumCanvas) return;
        quantumCtx.clearRect(0, 0, quantumCanvas.width, quantumCanvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        particlesAnimationFrameId = requestAnimationFrame(animateParticles);
    }

    function initProjectFiltering() {
        const filterButtonsContainer = document.querySelector('.filter-buttons-container');
        const projectItems = document.querySelectorAll('.project-item');

        if (!filterButtonsContainer || projectItems.length === 0) {
            return;
        }

        filterButtonsContainer.addEventListener('click', function(event) {
            const clickedButton = event.target.closest('.filter-btn');
            if (!clickedButton || clickedButton.classList.contains('active')) return;

            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            clickedButton.classList.add('active');

            const filter = clickedButton.dataset.filter;

            projectItems.forEach(item => {
                const category = item.dataset.category;
                const isVisible = (filter === 'all' || category.includes(filter));

                if (isVisible) {
                    item.style.display = 'block';
                    item.classList.remove('aos-animate');
                    void item.offsetWidth;
                    item.classList.add('aos-animate');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('aos-animate');
                }
            });
        });

        const initialFilterButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (initialFilterButton) {
            initialFilterButton.click();
        }
    }

    function initSkillInfoOverlay() {
        const skillCardsContainer = document.querySelector('.skills-grid');
        const skillCards = document.querySelectorAll('.skill-card');
        const skillOverlayValue = document.getElementById('skill-overlay-value');
        const skillOverlayDesc = document.getElementById('skill-overlay-desc');

        if (!skillCardsContainer || skillCards.length === 0 || !skillOverlayValue || !skillOverlayDesc) {
            return;
        }

        const defaultOverlayValue = '--';
        const defaultOverlayDesc = languageData[document.documentElement.lang]["skill_overlay_desc_default"] || 'Arahkan kursor ke modul skill untuk analisis detail.';

        const resetSkillOverlay = () => {
            skillOverlayValue.textContent = defaultOverlayValue;
            skillOverlayDesc.textContent = defaultOverlayDesc;
            skillOverlayValue.style.color = HIGHLIGHT_COLORS.secondary; // Default color for value
            skillOverlayDesc.style.color = HIGHLIGHT_COLORS.tertiary; // Default color for description
        };

        skillCards.forEach(card => {
            const updateOverlay = () => {
                const value = card.dataset.hoverValue || 'N/A';
                const descKey = card.getAttribute('data-i18n-hover-desc');
                const desc = languageData[document.documentElement.lang][descKey] || card.dataset.hoverDesc || 'No description available.';
                
                skillOverlayValue.textContent = value;
                skillOverlayDesc.textContent = desc;
                skillOverlayValue.style.color = HIGHLIGHT_COLORS.primary; // Accent color when active
                skillOverlayDesc.style.color = HIGHLIGHT_COLORS.darkText; // Dark text when active
            };

            card.addEventListener('mouseenter', updateOverlay);
            card.addEventListener('focusin', updateOverlay);
        });

        skillCardsContainer.addEventListener('mouseleave', resetSkillOverlay);

        document.addEventListener('focusout', (event) => {
            if (!skillCardsContainer.contains(event.relatedTarget)) {
                resetSkillOverlay();
            }
        });

        resetSkillOverlay();
    }

    function initImageModal() {
        const modal = document.getElementById("image-modal");
        const modalContent = modal ? modal.querySelector(".modal-content") : null;
        const modalImg = modal ? document.getElementById("modal-image-display") : null;
        const captionText = modal ? document.getElementById("modal-caption") : null;
        const closeBtn = modal ? modal.querySelector(".close-button") : null;
        
        // Exclude the new hero figure from triggering the modal
        const heroMainFigure = document.querySelector('.hero-main-figure'); 

        if (!modal || !modalContent || !modalImg || !captionText || !closeBtn) {
            return;
        }

        document.body.addEventListener('click', function(event) {
            const trigger = event.target.closest('.modal-trigger');
            
            // Prevent heroMainFigure from triggering modal
            if (trigger === heroMainFigure) {
                return; 
            }

            if (!trigger) return;

            const parentCard = trigger.closest('.project-card, .photo-item, .certificate-item, .about-image'); // Include about-image
            if (!parentCard) {
                return;
            }

            const imgSrc = parentCard.dataset.modalImage || trigger.src;
            let title = '';

            // Determine caption based on parent type
            if (parentCard.classList.contains('project-card')) {
                const titleKey = parentCard.querySelector('.project-title')?.getAttribute('data-i18n');
                title = languageData[document.documentElement.lang][titleKey] || parentCard.dataset.projectTitle || parentCard.querySelector('.project-title')?.textContent || 'Project Image';
            } else if (parentCard.classList.contains('photo-item')) {
                const captionKey = parentCard.querySelector('.photo-overlay')?.getAttribute('data-i18n');
                title = languageData[document.documentElement.lang][captionKey] || parentCard.dataset.photoCaption || parentCard.querySelector('.photo-overlay')?.textContent || 'Personal Photo';
            } else if (parentCard.classList.contains('certificate-item')) {
                const titleKey = parentCard.querySelector('.cert-title')?.getAttribute('data-i18n');
                title = languageData[document.documentElement.lang][titleKey] || parentCard.dataset.certTitle || parentCard.querySelector('.cert-title')?.textContent || 'Certificate';
            } else if (parentCard.classList.contains('about-image')) { // Handle about-image specifically
                title = trigger.alt || 'Personal Moment'; 
            }

            if (!imgSrc) {
                return;
            }

            modalImg.src = '';
            modalImg.alt = title;
            modalImg.style.display = 'none';

            const existingLoadError = modalContent.querySelector('.modal-loading-text');
            if (existingLoadError) {
                existingLoadError.remove();
            }

            const loadingTextDiv = document.createElement('div');
            loadingTextDiv.classList.add('modal-loading-text');
            loadingTextDiv.textContent = languageData[document.documentElement.lang]["loading_image"] || 'MEMUAT GAMBAR...';
            modalContent.appendChild(loadingTextDiv);

            modalContent.style.backgroundColor = HIGHLIGHT_COLORS.lightBg;
            captionText.innerHTML = `${languageData[document.documentElement.lang]["loading"] || 'Memuat'}: <span style="color: ${HIGHLIGHT_COLORS.tertiary};">${title}</span>`;
            modal.style.display = "flex";
            modal.focus();

            modalImg.src = imgSrc;

            modalImg.onload = () => {
                const currentLoadingText = modalContent.querySelector('.modal-loading-text');
                if (currentLoadingText) {
                    currentLoadingText.remove();
                }
                modalImg.style.display = 'block';
                modalContent.style.backgroundColor = ''; // Reset background to allow CSS to take over
                captionText.innerHTML = title;
            };

            modalImg.onerror = () => {
                const currentLoadingText = modalContent.querySelector('.modal-loading-text');
                if (currentLoadingText) {
                    currentLoadingText.remove();
                }
                const errorTextDiv = document.createElement('div');
                errorTextDiv.classList.add('modal-loading-text');
                errorTextDiv.style.color = GLITCH_COLOR;
                errorTextDiv.textContent = languageData[document.documentElement.lang]["image_not_found_error"] || 'GALAT: GAMBAR TIDAK DITEMUKAN. Silakan periksa jalur file.';
                modalContent.appendChild(errorTextDiv);
                modalContent.style.backgroundColor = 'rgba(100, 0, 0, 0.8)';
                modalImg.style.display = 'none';
                captionText.innerHTML = `${languageData[document.documentElement.lang]["loading_error"] || 'Galat memuat'}: <span style="color: ${GLITCH_COLOR};">${title} (${languageData[document.documentElement.lang]["check_file_path"] || 'Periksa jalur file'})</span>`;
            };
        });

        const closeModal = () => {
            modal.style.display = "none";
            modalImg.src = '';
            modalImg.alt = '';
            const currentLoadingText = modalContent.querySelector('.modal-loading-text');
            if (currentLoadingText) currentLoadingText.remove();
            // Reset background and caption styling on close
            modalContent.style.backgroundColor = '';
            captionText.style.color = ''; 
        };

        closeBtn.addEventListener('click', closeModal);

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        window.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "flex") {
                closeModal();
            }
        });
    }

    function initCurrentYear() {
        const currentYearSpan = document.getElementById('current-year-placeholder');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        } else {
        }
    }

    const backToTopButton = document.getElementById('back-to-top');
    const handleScrollBackToTop = () => {
        if (!backToTopButton) return;
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };
    window.addEventListener('scroll', debounce(handleScrollBackToTop, 50));

    function initBackToTopButton() {
        if (!backToTopButton) {
            return;
        }
        handleScrollBackToTop();

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            playSound('success');
        });
    }

    function initKonamiCode() {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiCodePosition = 0;

        document.addEventListener('keydown', function(e) {
            if (e.key.toLowerCase() === konamiCode[konamiCodePosition].toLowerCase()) {
                konamiCodePosition++;
                if (konamiCodePosition === konamiCode.length) {
                    activateSecretFeature();
                    konamiCodePosition = 0;
                }
            } else {
                konamiCodePosition = 0;
            }
        });

        function activateSecretFeature() {
            alert(languageData[document.documentElement.lang]["konami_code_activated"] || "AKSES DIBERIKAN: Mode Overclock Diaktifkan! Bersiaplah untuk dampak.");
            playSound('success');

            const body = document.body;
            body.classList.add('overclock-mode');

            setTimeout(() => {
                body.classList.remove('overclock-mode');
            }, 4000);
        }
    }

    let typedInstance = null;

    function initTypedJS() {
        const typedElement = document.getElementById('typed-hero-title');
        if (!typedElement) {
            return;
        }

        const parentH1 = typedElement.closest('h1.decrypt-text');
        const typedText = languageData[document.documentElement.lang]["hero_title"] || (parentH1 ? parentH1.dataset.text : '');

        if (!typedText) {
            if (parentH1) parentH1.textContent = "Deden Hadiguna";
            return;
        }

        if (typedInstance) {
            typedInstance.destroy();
        }

        typedInstance = new Typed('#typed-hero-title', {
            strings: [typedText],
            typeSpeed: 70,
            backSpeed: 40,
            loop: false,
            showCursor: true,
            onComplete: (self) => {
                if (parentH1) {
                    parentH1.classList.remove('scrambling');
                    parentH1.classList.add('decrypted');
                    parentH1.textContent = typedText;
                }
                const typedCursor = document.querySelector('.typed-cursor');
                if(typedCursor) {
                    typedCursor.style.animation = 'none';
                    typedCursor.style.opacity = '0';
                }
            }
        });
    }
    
})();

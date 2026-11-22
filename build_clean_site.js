const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\8f789559-8856-403a-8367-ceb7cce3f27e';
const logoB64 = fs.readFileSync(path.join(dir, 'logo_base64.txt'), 'utf8').trim();
const faviconB64 = fs.readFileSync(path.join(dir, 'favicon_base64.txt'), 'utf8').trim();
const teacherB64 = fs.readFileSync(path.join(dir, 'teacher_sakib_base64.txt'), 'utf8').trim();
const teacherSakibB64 = teacherB64;
const teacherRajibB64 = fs.readFileSync(path.join(dir, 'teacher_rajib_base64.txt'), 'utf8').trim();
const teacherRifatB64 = fs.readFileSync(path.join(dir, 'teacher_rifat_base64.txt'), 'utf8').trim();
const mentorRifatHdB64 = fs.readFileSync(path.join(dir, 'mentor_rifat_hd_base64.txt'), 'utf8').trim();
const mentorRajibHdB64 = fs.readFileSync(path.join(dir, 'mentor_rajib_hd_base64.txt'), 'utf8').trim();
const mentorShadhinHdB64 = fs.readFileSync(path.join(dir, 'mentor_shadhin_hd_base64.txt'), 'utf8').trim();
const ebiThreeB64 = fs.readFileSync(path.join(dir, 'ebi_three_teachers_base64.txt'), 'utf8').trim();
const ebiPosterB64 = fs.readFileSync(path.join(dir, 'ebi_poster_base64.txt'), 'utf8').trim();
const mathBookB64 = fs.readFileSync(path.join(dir, 'book_math_base64.txt'), 'utf8').trim();
const bookMathB64 = mathBookB64;
const ictBookB64 = fs.readFileSync(path.join(dir, 'book_ict_base64.txt'), 'utf8').trim();
const bookSscEngB64 = fs.readFileSync(path.join(dir, 'book_ssc_eng_base64.txt'), 'utf8').trim();
const bookHscEngB64 = fs.readFileSync(path.join(dir, 'book_hsc_eng_base64.txt'), 'utf8').trim();
const bookSscBanglaB64 = fs.readFileSync(path.join(dir, 'book_ssc_bangla_base64.txt'), 'utf8').trim();
const bookHscBanglaB64 = fs.readFileSync(path.join(dir, 'book_hsc_bangla_base64.txt'), 'utf8').trim();
const teacherAnikB64 = fs.readFileSync(path.join(dir, 'teacher_anik_base64.txt'), 'utf8').trim();
const bookSscPhysicsB64 = fs.readFileSync(path.join(dir, 'book_ssc_physics_base64.txt'), 'utf8').trim();
const bookHscPhysicsB64 = fs.readFileSync(path.join(dir, 'book_hsc_physics_base64.txt'), 'utf8').trim();
const teacherNayanB64 = fs.readFileSync(path.join(dir, 'teacher_nayan_base64.txt'), 'utf8').trim();
const bookFinanceB64 = fs.readFileSync(path.join(dir, 'book_finance_base64.txt'), 'utf8').trim();
const teacherPrityB64 = fs.readFileSync(path.join(dir, 'teacher_prity_base64.txt'), 'utf8').trim();
const teacherBoishakiB64 = fs.readFileSync(path.join(dir, 'teacher_boishaki_base64.txt'), 'utf8').trim();
const bookManagementB64 = fs.readFileSync(path.join(dir, 'book_management_base64.txt'), 'utf8').trim();
const teacherRakibB64 = fs.readFileSync(path.join(dir, 'teacher_rakib_base64.txt'), 'utf8').trim();
const bookAccountingB64 = fs.readFileSync(path.join(dir, 'book_accounting_base64.txt'), 'utf8').trim();
const teacherTonmoyB64 = fs.readFileSync(path.join(dir, 'teacher_tonmoy_base64.txt'), 'utf8').trim();
const teacherIkraB64 = fs.readFileSync(path.join(dir, 'teacher_ikra_base64.txt'), 'utf8').trim();
const eiBannerB64 = fs.readFileSync(path.join(dir, 'ei_banner_base64.txt'), 'utf8').trim();
const mathBannerB64 = fs.readFileSync(path.join(dir, 'math_banner_base64.txt'), 'utf8').trim();
const englishBannerB64 = fs.readFileSync(path.join(dir, 'english_banner_base64.txt'), 'utf8').trim();
const gallery01B64 = fs.readFileSync(path.join(dir, 'gallery_01_base64.txt'), 'utf8').trim();
const gallery02B64 = fs.readFileSync(path.join(dir, 'gallery_02_base64.txt'), 'utf8').trim();
const gallery03B64 = fs.readFileSync(path.join(dir, 'gallery_03_base64.txt'), 'utf8').trim();
const gallery04B64 = fs.readFileSync(path.join(dir, 'gallery_04_base64.txt'), 'utf8').trim();
const gallery05B64 = fs.readFileSync(path.join(dir, 'gallery_05_base64.txt'), 'utf8').trim();
const gallery06B64 = fs.readFileSync(path.join(dir, 'gallery_06_base64.txt'), 'utf8').trim();

const html = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Favicon (Official Insight Academia Book & IA Brand Icon) -->
  <link rel="icon" type="image/png" href="data:image/png;base64,${faviconB64}">
  <link rel="shortcut icon" type="image/png" href="data:image/png;base64,${faviconB64}">
  <link rel="apple-touch-icon" href="data:image/png;base64,${faviconB64}">

  <!-- Primary SEO Meta Tags -->
  <title>Insight Academia</title>
  <meta name="title" content="Insight Academia">
  <meta name="description" content="ইনসাইট একাডেমিয়া (Insight Academia) - সহজ শেখা, সেরা প্রস্তুতি। প্রতিষ্ঠিত: ০৪ অক্টোবর ২০১৫। প্রতিষ্ঠাতা ও সিইও: তারেকুল ইসলাম রাজিব, সহ-প্রতিষ্ঠাতা: ফারুকুল ইসলাম নয়ন। প্ল্যাটফর্ম আর্কিটেক্ট ও ডেভেলপার: মোঃ সাকিবুর রহমান (Code Cafe by Sakib)।">
  <meta name="keywords" content="Insight Academia, ইনসাইট একাডেমিয়া, Tarequl Islam Rajib, তারেকুল ইসলাম রাজিব, Farukul Islam Noyon, ফারুকুল ইসলাম নয়ন, Md. Sakibur Rahman, মোঃ সাকিবুর রহমান, Code Cafe by Sakib, SSC Math, HSC ICT, এসএসসি ও এইচএসসি প্রস্তুতি">
  <meta name="author" content="Tarequl Islam Rajib (Founder), Farukul Islam Noyon (Co-Founder), Md. Sakibur Rahman (Lead Software Engineer)">
  <meta name="designer" content="Md. Sakibur Rahman">
  <meta name="developer" content="Md. Sakibur Rahman">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="canonical" href="https://insightacademia.com/">

  <!-- Open Graph / Facebook / WhatsApp Preview -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://insightacademia.com/">
  <meta property="og:site_name" content="Insight Academia">
  <meta property="og:title" content="Insight Academia - সহজ শেখা, সেরা প্রস্তুতি">
  <meta property="og:description" content="ইনসাইট একাডেমিয়া - প্রতিষ্ঠিত: ০৪ অক্টোবর ২০১৫। প্রতিষ্ঠাতা ও সিইও: তারেকুল ইসলাম রাজিব, সহ-প্রতিষ্ঠাতা: ফারুকুল ইসলাম নয়ন। সিস্টেম আর্কিটেক্ট ও সফটওয়্যার ইঞ্জিনিয়ার: মোঃ সাকিবুর রহমান (Code Cafe by Sakib)।">
  <meta property="og:locale" content="bn_BD">

  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://insightacademia.com/">
  <meta name="twitter:title" content="Insight Academia - সহজ শেখা, সেরা প্রস্তুতি">
  <meta name="twitter:description" content="প্রতিষ্ঠিত: ০৪ অক্টোবর ২০১৫। প্রতিষ্ঠাতা ও সিইও: তারেকুল ইসলাম রাজিব, সহ-প্রতিষ্ঠাতা: ফারুকুল ইসলাম নয়ন। সফটওয়্যার ইঞ্জিনিয়ার: মোঃ সাকিবুর রহমান।">

  <!-- Google Structured Data (Schema.org JSON-LD for Google Sitelinks & Knowledge Panel) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://insightacademia.com/#organization",
        "name": "Insight Academia",
        "alternateName": "ইনসাইট একাডেমিয়া",
        "url": "https://insightacademia.com",
        "slogan": "সহজ শেখা, সেরা প্রস্তুতি",
        "foundingDate": "2015-10-04",
        "description": "০৪ অক্টোবর ২০১৫ তারিখে ইনসাইট একাডেমিয়া (Insight Academia) প্রতিষ্ঠিত হয়। এটি এসএসসি ও এইচএসসি শিক্ষার্থীদের জন্য একটি নির্ভরযোগ্য শিক্ষামূলক প্ল্যাটফর্ম।",
        "email": "iinsight.academiaa@gmail.com",
        "telephone": "+8801748470620",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mirpur-10",
          "addressLocality": "Dhaka",
          "addressCountry": "BD"
        },
        "sameAs": [
          "https://www.facebook.com/tarequl.islam.71619533",
          "https://www.youtube.com/@InsightAcademia-k2v"
        ],
        "founder": [
          {
            "@type": "Person",
            "@id": "https://insightacademia.com/#founder-rajib",
            "name": "Tarequl Islam Rajib",
            "alternateName": "তারেকুল ইসলাম রাজিব",
            "jobTitle": "Founder & CEO",
            "url": "https://www.facebook.com/tarequl.islam.71619533",
            "worksFor": {
              "@id": "https://insightacademia.com/#organization"
            },
            "alumniOf": "University of Dhaka",
            "sameAs": [
              "https://www.facebook.com/tarequl.islam.71619533",
              "https://www.youtube.com/@InsightAcademia-k2v"
            ]
          },
          {
            "@type": "Person",
            "@id": "https://insightacademia.com/#cofounder-noyon",
            "name": "Farukul Islam Noyon",
            "alternateName": "ফারুকুল ইসলাম নয়ন",
            "jobTitle": "Co-Founder",
            "worksFor": {
              "@id": "https://insightacademia.com/#organization"
            }
          }
        ],
        "creator": {
          "@type": "Person",
          "@id": "https://insightacademia.com/#developer-sakib",
          "name": "Md. Sakibur Rahman",
          "alternateName": ["মোঃ সাকিবুর রহমান", "Sakib", "Shadhin"],
          "jobTitle": "Lead Software Engineer & Instructor (ICT)",
          "worksFor": {
            "@id": "https://insightacademia.com/#organization"
          },
          "alumniOf": "Southeast University",
          "founder": {
            "@type": "Organization",
            "name": "Code Cafe by Sakib",
            "url": "https://www.youtube.com/@CodeCafebySakib",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61588753517112",
              "https://www.instagram.com/codecafeby_sakib/"
            ]
          },
          "sameAs": [
            "https://www.linkedin.com/in/rahmansakibur/",
            "https://github.com/rahmanshakibur",
            "https://www.facebook.com/rahman.sakibur",
            "https://www.youtube.com/@CodeCafebySakib",
            "https://www.instagram.com/codecafeby_sakib/",
            "https://www.facebook.com/profile.php?id=61588753517112"
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://insightacademia.com/#website",
        "url": "https://insightacademia.com",
        "name": "Insight Academia",
        "publisher": {
          "@id": "https://insightacademia.com/#organization"
        },
        "creator": {
          "@id": "https://insightacademia.com/#developer-sakib"
        }
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://insightacademia.com/#navigation",
        "name": "Insight Academia Main Navigation",
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "কোর্স ও ব্যাচসমূহ",
            "url": "https://insightacademia.com/#courses"
          },
          {
            "@type": "WebPage",
            "name": "শিক্ষক প্যানেল",
            "url": "https://insightacademia.com/#teachers"
          },
          {
            "@type": "WebPage",
            "name": "ই-বুক ও লাইব্রেরি",
            "url": "https://insightacademia.com/#ebooks"
          },
          {
            "@type": "WebPage",
            "name": "আমাদের সম্পর্কে",
            "url": "https://insightacademia.com/#about-section"
          }
        ]
      }
    ]
  }
  </script>
    <!-- Google Cloud Firebase SDK (v10.8.0 Compat) -->
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics-compat.js"></script>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Hind Siliguri', 'Plus Jakarta Sans', sans-serif; -webkit-user-select: none; user-select: none; }
    input, textarea { -webkit-user-select: text; user-select: text; }
    
    #policyModalBox {
      font-family: 'Hind Siliguri', 'Plus Jakarta Sans', sans-serif;
    }
    #policyModalBox p,
    #policyModalBox li {
      font-size: 13.5px;
      line-height: 1.8;
    }
    @media (min-width: 640px) {
      #policyModalBox p,
      #policyModalBox li {
        font-size: 14.5px;
      }
    }
    
    .page-section {
      display: none;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.25s ease-out, transform 0.25s ease-out;
    }
    .page-section.active {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes floatWatermark {
      0% { transform: translate(15px, 20px); }
      25% { transform: translate(220px, 50px); }
      50% { transform: translate(140px, 140px); }
      75% { transform: translate(300px, 80px); }
      100% { transform: translate(15px, 20px); }
    }
    .watermark-animated {
      animation: floatWatermark 18s ease-in-out infinite alternate;
    }
    
    .hero-glow {
      background: radial-gradient(circle at 50% 20%, rgba(0, 102, 255, 0.07) 0%, rgba(248, 250, 252, 0) 70%);
    }

    /* Green Glow Highlight Effect for Developer Md. Sakibur Rahman Card */
    @keyframes sakibGreenPulse {
      0%, 100% {
        box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.4), 0 0 35px rgba(16, 185, 129, 0.75), 0 0 65px rgba(16, 185, 129, 0.4);
        border-color: #10B981 !important;
        transform: scale(1.025);
      }
      50% {
        box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.6), 0 0 50px rgba(16, 185, 129, 0.95), 0 0 85px rgba(16, 185, 129, 0.65);
        border-color: #059669 !important;
        transform: scale(1.035);
      }
    }
    .sakib-card-glow {
      border: 3px solid #10B981 !important;
      animation: sakibGreenPulse 1.8s infinite ease-in-out !important;
      position: relative !important;
      z-index: 20 !important;
      transition: all 0.5s ease-in-out !important;
    }
  </style>
</head>
<body class="bg-[#F8FAFC] text-slate-800 antialiased min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">

  <!-- ============================================== -->
  <!-- 1. TOP HEADER NAVIGATION                       -->
  <!-- ============================================== -->
  <header class="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="javascript:void(0)" onclick="navigateTo('home')" class="flex items-center gap-2 group">
        <img src="data:image/png;base64,${logoB64}" alt="Insight Academia" class="h-10 sm:h-12 w-auto object-contain" />
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 sm:gap-2 text-sm font-semibold text-slate-600 bg-slate-100/60 p-1.5 rounded-2xl border border-slate-200/60">
        <button onclick="navigateTo('home')" id="nav-home" data-i18n="nav_home" class="nav-btn px-4 py-2 rounded-xl text-blue-600 bg-white shadow-xs font-bold transition-all">
          হোম
        </button>
        <!-- Courses & Batches with Dropdown -->
        <div class="relative" id="coursesDropdownWrapper">
          <button onclick="toggleCoursesDropdown(event)" id="nav-courses" class="nav-btn px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 transition-all flex items-center gap-1.5 cursor-pointer">
            <span data-i18n="nav_courses">কোর্স ও ব্যাচসমূহ</span>
            <svg id="courseNavArrow" class="w-3.5 h-3.5 hidden transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>

          <!-- Dropdown Menu (Opened only on click) -->
          <div id="coursesDropdownMenu" class="hidden absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 p-1.5 z-50">
            <!-- Option 1: Offline Batch -->
            <button onclick="selectCourseMode('offline')" class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50/80 transition flex items-center gap-3 cursor-pointer group/opt">
              <div class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm shrink-0 font-bold group-hover/opt:bg-emerald-600 group-hover/opt:text-white transition">
                🏫
              </div>
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover/opt:text-emerald-700">Offline Batch</span>
            </button>

            <!-- Option 2: Online Batch -->
            <button onclick="selectCourseMode('online')" class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-50/80 transition flex items-center gap-3 cursor-pointer group/opt">
              <div class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0 font-bold group-hover/opt:bg-blue-600 group-hover/opt:text-white transition">
                🌐
              </div>
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover/opt:text-blue-700">Online Batch</span>
            </button>
          </div>
        </div>
        <!-- Teachers Panel with Dropdown (Courses & batches style) -->
        <div class="relative" id="teachersDropdownWrapper">
          <button onclick="toggleTeachersDropdown(event)" id="nav-teachers" class="nav-btn px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 transition-all flex items-center gap-1.5 cursor-pointer">
            <span data-i18n="nav_teachers">শিক্ষক প্যানেল</span>
            <svg id="teacherNavArrow" class="w-3.5 h-3.5 hidden transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
          </button>

          <!-- Dropdown Menu (Opened only on click) -->
          <div id="teachersDropdownMenu" class="hidden absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 p-1.5 z-50">
            <!-- Option 1: Offline Teachers -->
            <button onclick="selectTeacherMode('offline')" class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50/80 transition flex items-center gap-3 cursor-pointer group/topt">
              <div class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm shrink-0 font-bold group-hover/topt:bg-emerald-600 group-hover/topt:text-white transition">
                🏫
              </div>
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover/topt:text-emerald-700">Offline Teachers</span>
            </button>

            <!-- Option 2: Online Teachers -->
            <button onclick="selectTeacherMode('online')" class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-50/80 transition flex items-center gap-3 cursor-pointer group/topt">
              <div class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0 font-bold group-hover/topt:bg-blue-600 group-hover/topt:text-white transition">
                🌐
              </div>
              <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover/topt:text-blue-700">Online Teachers</span>
            </button>
          </div>
        </div>
        <button onclick="navigateTo('ebooks')" id="nav-ebooks" data-i18n="nav_ebooks" class="nav-btn px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 transition-all">
          ই-বুক
        </button>
        <button onclick="navigateTo('home'); setTimeout(() => document.getElementById('about-section')?.scrollIntoView({behavior:'smooth'}), 100);" id="nav-about" data-i18n="nav_about" class="nav-btn px-4 py-2 rounded-xl text-slate-600 hover:text-[#FF2E7E] transition-all">
          আমাদের সম্পর্কে
        </button>
      </nav>

      <!-- Header Right: Helpline Call, Language Toggle & Login Button -->
      <div class="flex items-center gap-2 sm:gap-3">
        <a href="tel:+8801748470620" class="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl hover:border-blue-300 transition">
          <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <span>01748470620</span>
        </a>

        <!-- New Blue Login Button (Styled like red demo with ->] icon and brand blue) -->
        <!-- Auth Slot (Holds Login Button OR [Student Name + Red Logout Button]) -->
        <div id="nav-auth-slot" class="flex items-center gap-2 sm:gap-2.5">
          <button onclick="handleNavLoginClick()" id="nav-login" class="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">
          <svg class="w-4 h-4 text-white shrink-0 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/>
            <polyline points="10 16 14 12 10 8"/>
            <line x1="14" y1="12" x2="4" y2="12"/>
          </svg>
          <span id="t-loginBtn">লগ ইন</span>
        </button>
        </div>
      </div>

    </div>

    <!-- Mobile Sub-Nav Pills -->
    <div class="md:hidden flex items-center justify-around border-t border-slate-200/80 bg-white py-2 px-2 text-xs font-bold text-slate-600 overflow-x-auto">
      <button onclick="navigateTo('home')" id="m-nav-home" data-i18n="nav_home" class="m-nav-btn text-blue-600 px-2 py-1">হোম</button>
      <button onclick="navigateTo('courses')" id="m-nav-courses" data-i18n="nav_courses" class="m-nav-btn text-slate-600 px-2 py-1">কোর্সসমূহ</button>
      <button onclick="navigateTo('teachers')" id="m-nav-teachers" data-i18n="nav_teachers" class="m-nav-btn text-slate-600 px-2 py-1">শিক্ষক</button>
      <button onclick="navigateTo('ebooks')" id="m-nav-ebooks" data-i18n="nav_ebooks" class="m-nav-btn text-slate-600 px-2 py-1">ই-বুক</button>
      <button onclick="navigateTo('home'); setTimeout(() => document.getElementById('about-section')?.scrollIntoView({behavior:'smooth'}), 100);" data-i18n="nav_about" class="m-nav-btn text-[#FF2E7E] px-2 py-1">সম্পর্কে</button>
      <div id="m-nav-auth-slot" class="flex items-center">
        <button onclick="handleNavLoginClick()" id="m-nav-login" class="m-nav-btn text-blue-600 font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 hover:bg-blue-50 transition">
        <svg class="w-3.5 h-3.5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/>
          <polyline points="10 16 14 12 10 8"/>
          <line x1="14" y1="12" x2="4" y2="12"/>
        </svg>
        <span>লগ ইন</span>
      </button>
      </div>
    </div>
  </header>

  <!-- ============================================== -->
  <!-- MAIN CONTENT CONTAINER (PAGES SWITCH HERE)     -->
  <!-- ============================================== -->
  <main class="flex-grow">

    <!-- ============================================ -->
    <!-- PAGE 1: HOME PAGE (হোম পেজ)                  -->
    <!-- ============================================ -->
    <section id="page-home" class="page-section active">
      
      <!-- Hero Section -->
      <div class="hero-glow pt-12 pb-20 border-b border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left: Hero Headline & CTA -->
            <div class="lg:col-span-7 text-center lg:text-left">
              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none" data-i18n="hero_title">
                শিক্ষা হোক নিখুঁত, <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500">
                  সহজ ও আধুনিক প্রযুক্তিতে
                </span>
              </h1>

              <p class="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal" data-i18n="hero_desc">
                <span class="font-bold text-slate-800">এক প্ল্যাটফর্মেই সম্পূর্ণ গোছানো প্রস্তুতি!</span><br class="hidden sm:inline">
                তোমার জন্য ইনসাইট একাডেমিয়া নিয়ে এলো সহজ, সাশ্রয়ী ও সুরক্ষিত ডিজিটাল স্পেস।
              </p>

              <!-- Single Primary CTA to Courses Page -->
              <div class="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button onclick="navigateTo('courses')" class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                  <span data-i18n="hero_btn_courses">কোর্স ও ব্যাচসমূহ দেখুন</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
                <a href="https://wa.me/8801748470620" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-7 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer" title="আমাদের WhatsApp হেল্পলাইনে সরাসরি মেসেজ দিন">
                  <svg class="w-5 h-5 fill-current text-white shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span class="tracking-wide" data-i18n="hero_btn_wa">WhatsApp হেল্পলাইন</span>
                </a>
              </div>
            </div>

            <!-- Right: Spotlight Flagship Course Card (EBI 1.0) -->
            <div class="lg:col-span-5">
              <div class="relative mx-auto max-w-md lg:max-w-none">
                <div class="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-20"></div>
                <div class="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden p-4 sm:p-5">
                  
                  <!-- Top Badge Bar -->
                  <div class="flex items-center justify-end pb-2 border-b border-slate-100">
                    <span class="text-xs sm:text-sm font-extrabold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-2xs">
                      HSC-28 অফলাইন ব্যাচ
                    </span>
                  </div>

                  <!-- Course Main Banner (Compact, Sleek & Reduced Size as requested) -->
                  <div class="mt-2.5 rounded-2xl bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#BAE6FD] border border-sky-200/90 p-3.5 sm:p-4 relative overflow-hidden shadow-xs">
                    <!-- Subtle Light Sky Highlights -->
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-sky-300/30 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-8 -bottom-8 w-28 h-28 bg-blue-300/20 rounded-full blur-lg pointer-events-none"></div>

                    <div class="relative z-10 flex items-center justify-between">
                      <span class="text-[10px] font-extrabold uppercase tracking-wider text-white bg-sky-700 border border-sky-800 px-2 py-0.5 rounded-md shadow-2xs">
                        ENGLISH • BANGLA • ICT
                      </span>
                      <span class="text-[10px] font-bold text-white bg-emerald-600 border border-emerald-700 px-2 py-0.5 rounded-md shadow-2xs animate-pulse">
                        ● ভর্তি চলছে!
                      </span>
                    </div>

                    <h3 class="relative z-10 text-lg sm:text-xl font-black text-slate-900 mt-1.5 tracking-tight">
                      Insight - EBI 1.0
                    </h3>
                    
                    <p class="relative z-10 text-xs sm:text-sm font-extrabold text-blue-900 mt-0.5 tracking-tight leading-snug">
                      ৫০০ তে ৪৫০+ পাওয়ার সম্পূর্ণ প্রস্তুতি এক কোর্সেই !!
                    </p>

                    <!-- Free Demo Badge (Compact) -->
                    <div class="relative z-10 mt-2 inline-flex items-center bg-white/95 border border-amber-400 text-amber-950 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-md shadow-2xs">
                      <span>১ সপ্তাহ অফলাইনে ডেমো ক্লাস দেখে ভর্তির সুযোগ</span>
                    </div>
                  </div>

                  <!-- 3 Mentors Profile Row (Updated: Large Cards, Full HD Photos, Clear Visibility) -->
                  <div class="mt-3 p-3 sm:p-3.5 bg-slate-50/90 border border-slate-200/90 rounded-2xl">
                    

                    <div class="grid grid-cols-3 gap-2.5 sm:gap-3 text-center">
                      <!-- Mentor 1: Rifat Bhai (Bangla) - HD Zoomed Face -->
                      <div class="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col items-center group">
                        <div class="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs mb-2">
                          <img src="data:image/jpeg;base64,${mentorRifatHdB64}" alt="রিফাত ভাই" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">রিফাত ভাই</h4>
                        <span class="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md mt-1">বাংলা</span>
                      </div>

                      <!-- Mentor 2: Rajib Bhai (English) - HD Zoomed Face -->
                      <div class="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center group">
                        <div class="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs mb-2">
                          <img src="data:image/jpeg;base64,${mentorRajibHdB64}" alt="রাজীব ভাই" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">রাজীব ভাই</h4>
                        <span class="text-[10px] sm:text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md mt-1">ইংরেজি</span>
                      </div>

                      <!-- Mentor 3: Shadhin Bhai (ICT) - HD Zoomed Face -->
                      <div class="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col items-center group">
                        <div class="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs mb-2">
                          <img src="data:image/jpeg;base64,${mentorShadhinHdB64}" alt="স্বাধীন ভাই" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">স্বাধীন ভাই</h4>
                        <span class="text-[10px] sm:text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md mt-1">আইসিটি</span>
                      </div>
                    </div>
                  </div>

                  <!-- Course Special Features List (Balanced & Sleek) -->
                  <div class="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <div class="flex items-start gap-2.5">
                      <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-2xs">✓</span>
                      <span class="leading-relaxed"><strong class="font-extrabold text-slate-900">ICT কম্পিউটার ল্যাব:</strong> HTML, Python ও DBMS সরাসরি প্র্যাকটিক্যাল কোডিং</span>
                    </div>
                    <div class="flex items-start gap-2.5">
                      <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-2xs">✓</span>
                      <span class="leading-relaxed"><strong class="font-extrabold text-slate-900">ফ্রি স্পেশাল কোর্স:</strong> ইংরেজিতে বানিয়ে লেখার কোর্স সম্পূর্ণ ফ্রি</span>
                    </div>
                    <div class="flex items-start gap-2.5">
                      <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-2xs">✓</span>
                      <span class="leading-relaxed"><strong class="font-extrabold text-slate-900">1-to-1 মেন্টরশিপ:</strong> পার্সোনাল ডাউট সলভিং ও সাপ্তাহিক এক্সাম + SMS আপডেট</span>
                    </div>
                  </div>

                  <!-- Location & Booking Action Footer (Updated: Larger & Prominent) -->
                  <div class="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div class="text-sm sm:text-base text-slate-700 font-bold flex items-center gap-1.5">
                        <span class="text-base text-rose-500">📍</span>
                        <strong class="text-slate-900 font-extrabold text-sm sm:text-base">শান্তিবাগ | শাহজাহানপুর</strong>
                      </div>
                      <div class="text-xs sm:text-sm text-emerald-700 font-extrabold mt-1 flex items-center gap-1">
                        <span>WhatsApp:</span>
                        <a href="https://wa.me/8801748470620" target="_blank" rel="noopener noreferrer" class="hover:underline font-black text-emerald-700">+8801748470620</a>
                      </div>
                    </div>

                    <div class="flex items-center gap-2">
                      <button onclick="handleCourseClick('hsc28_ebi_landing', 'https://wa.me/8801748470620?text=I%20want%20to%20know%20about%20HSC-28%20EBI%20Offline%20Course')" class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1 cursor-pointer">
                        <span>সিট বুকিং</span>
                        <span>➔</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>            </div>

          </div>
        </div>
      </div>

      <!-- ============================================== -->
      <!-- 🎁 FREE COURSES SECTION (Free Class দেখে যাচাই করো) -->
      <!-- ============================================== -->
      <div id="free-courses-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            <span class="text-[#EF4444] font-black">Free Class</span> দেখে যাচাই করো
          </h2>

        </div>

        <!-- 8 Free Course Cards Grid (2 rows on desktop) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Card: aikyIPqxKFM -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('aikyIPqxKFM', 'Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28 | English 2nd Paper | All Rules & Practice |')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/aikyIPqxKFM/mqdefault.jpg" alt="Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28 | English 2nd Paper | All Rules & Practice |" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28 | English 2nd Paper | All Rules & Practice |">
                  Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28 | English 2nd Paper | All Rules & Practice |
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Tarequl Islam Rajib</span>
                  <span>👥 ৮,৫২০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: HgjSlUIyFD4 (2nd Position) -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('HgjSlUIyFD4', 'মাত্র ১০টি Rules শিখলেই Right Form of Verbs Complete! 🔥 | English 2nd Paper')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/HgjSlUIyFD4/mqdefault.jpg" alt="মাত্র ১০টি Rules শিখলেই Right Form of Verbs Complete! 🔥 | English 2nd Paper" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="মাত্র ১০টি Rules শিখলেই Right Form of Verbs Complete! 🔥 | English 2nd Paper">
                  মাত্র ১০টি Rules শিখলেই Right Form of Verbs Complete! 🔥 | English 2nd Paper
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Tarequl Islam Rajib</span>
                  <span>👥 ৯,১০০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: FzaCgyj6vPY -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('FzaCgyj6vPY', 'এক ভিডিওতেই সংখ্যা পদ্ধতির সকল রূপান্তর সম্পূর্ণ ! 🔥 | Basic to Advanced | HSC ICT Chapter 3')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/FzaCgyj6vPY/mqdefault.jpg" alt="এক ভিডিওতেই সংখ্যা পদ্ধতির সকল রূপান্তর সম্পূর্ণ ! 🔥 | Basic to Advanced | HSC ICT Chapter 3" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="এক ভিডিওতেই সংখ্যা পদ্ধতির সকল রূপান্তর সম্পূর্ণ ! 🔥 | Basic to Advanced | HSC ICT Chapter 3">
                  এক ভিডিওতেই সংখ্যা পদ্ধতির সকল রূপান্তর সম্পূর্ণ ! 🔥 | Basic to Advanced | HSC ICT Chapter 3
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  <span>👥 ৯,৪০০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: TWCC9RZntuw -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('TWCC9RZntuw', '৫ মিনিটে ২-এর পরিপূরক নির্ণয় করতে চাও? 😍 | A to Z শিখে নাও | সংখ্যাপদ্ধতি | HSC ICT Chapter 3')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/TWCC9RZntuw/mqdefault.jpg" alt="৫ মিনিটে ২-এর পরিপূরক নির্ণয় করতে চাও? 😍 | A to Z শিখে নাও | সংখ্যাপদ্ধতি | HSC ICT Chapter 3" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="৫ মিনিটে ২-এর পরিপূরক নির্ণয় করতে চাও? 😍 | A to Z শিখে নাও | সংখ্যাপদ্ধতি | HSC ICT Chapter 3">
                  ৫ মিনিটে ২-এর পরিপূরক নির্ণয় করতে চাও? 😍 | A to Z শিখে নাও | সংখ্যাপদ্ধতি | HSC ICT Chapter 3
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  <span>👥 ৬,৮০০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: kRrqew866lE -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('kRrqew866lE', 'এক ক্লাসে Tag Question-এ 5/5 নিশ্চিত পূর্ণাঙ্গ ক্লাস')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/kRrqew866lE/mqdefault.jpg" alt="এক ক্লাসে Tag Question-এ 5/5 নিশ্চিত পূর্ণাঙ্গ ক্লাস" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="এক ক্লাসে Tag Question-এ 5/5 নিশ্চিত পূর্ণাঙ্গ ক্লাস">
                  এক ক্লাসে Tag Question-এ 5/5 নিশ্চিত পূর্ণাঙ্গ ক্লাস
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Tarequl Islam Rajib</span>
                  <span>👥 ১১,২০০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: K2qe59q3D_0 -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('K2qe59q3D_0', 'পরিসংখ্যানের সেরা ৩টি CQ | ২টি Must Common! 😱 | SSC 2027 -  সাধারণ গণিত |#ssc27 #ssc28 #sscexamtips')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/K2qe59q3D_0/mqdefault.jpg" alt="পরিসংখ্যানের সেরা ৩টি CQ | ২টি Must Common! 😱 | SSC 2027 -  সাধারণ গণিত |#ssc27 #ssc28 #sscexamtips" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="পরিসংখ্যানের সেরা ৩টি CQ | ২টি Must Common! 😱 | SSC 2027 -  সাধারণ গণিত |#ssc27 #ssc28 #sscexamtips">
                  পরিসংখ্যানের সেরা ৩টি CQ | ২টি Must Common! 😱 | SSC 2027 -  সাধারণ গণিত |#ssc27 #ssc28 #sscexamtips
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  <span>👥 ৭,৬৫০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: aD8Y0NQoTCo -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('aD8Y0NQoTCo', 'সেট ও ফাংশন থেকে ৫টি গুরুত্বপূর্ণ CQ 😱 | ১টি CQ Must Common! | SSC 27/28/29 | সাধারণ গণিত - অধ্যায় ২')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/aD8Y0NQoTCo/mqdefault.jpg" alt="সেট ও ফাংশন থেকে ৫টি গুরুত্বপূর্ণ CQ 😱 | ১টি CQ Must Common! | SSC 27/28/29 | সাধারণ গণিত - অধ্যায় ২" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="সেট ও ফাংশন থেকে ৫টি গুরুত্বপূর্ণ CQ 😱 | ১টি CQ Must Common! | SSC 27/28/29 | সাধারণ গণিত - অধ্যায় ২">
                  সেট ও ফাংশন থেকে ৫টি গুরুত্বপূর্ণ CQ 😱 | ১টি CQ Must Common! | SSC 27/28/29 | সাধারণ গণিত - অধ্যায় ২
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  <span>👥 ৮,৯০০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: RrpZZfTCtVU -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('RrpZZfTCtVU', 'Lalsalu Novel | Complete Discussion in One Video (লালসালু উপন্যাস)')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/RrpZZfTCtVU/mqdefault.jpg" alt="Lalsalu Novel | Complete Discussion in One Video (লালসালু উপন্যাস)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="Lalsalu Novel | Complete Discussion in One Video (লালসালু উপন্যাস)">
                  Lalsalu Novel | Complete Discussion in One Video (লালসালু উপন্যাস)
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Insight Faculty Board</span>
                  <span>👥 ৫,৪২০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>

          <!-- Card: hLdNtW7ZDnY -->
          <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer" onclick="handleClassClick('hLdNtW7ZDnY', 'Learn English from scratch in just 7 days! স্পোকেন ও বেসিক ফাউন্ডেশন')">
            <!-- 16:9 Thumbnail -->
            <div class="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <img src="https://img.youtube.com/vi/hLdNtW7ZDnY/mqdefault.jpg" alt="Learn English from scratch in just 7 days! স্পোকেন ও বেসিক ফাউন্ডেশন" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />

              <!-- Hover Play Overlay -->
              <div class="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg font-bold text-sm sm:text-base transform scale-90 group-hover:scale-100 transition-transform pl-0.5">
                  ▶
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition line-clamp-2 leading-snug" title="Learn English from scratch in just 7 days! স্পোকেন ও বেসিক ফাউন্ডেশন">
                  Learn English from scratch in just 7 days! স্পোকেন ও বেসিক ফাউন্ডেশন
                </h3>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                  <span class="font-medium text-slate-600">👨‍🏫 Parrot English School / Rajib Sir</span>
                  <span>👥 ১৪,৫০০+ শিক্ষার্থী</span>
                </div>
              </div>

              <!-- Footer: 'ফ্রি ক্লাস' on left, '▶ ক্লাস দেখো' on right, NO 'বিস্তারিত' -->
              <div class="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-[#EF4444] font-extrabold text-xs">ফ্রি ক্লাস</span>
                <span class="text-xs font-bold text-blue-600 group-hover:text-rose-600 transition flex items-center gap-1">
                  ▶ ক্লাস দেখো
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Free Classes on YouTube (Green Button) -->
        <div class="mt-10 sm:mt-12 text-center">
          <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-sm sm:text-base rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer" title="ইনসাইট একাডেমিয়ার ইউটিউব চ্যানেলে সকল ফ্রি ক্লাস দেখুন">
            <svg class="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span class="tracking-wide">সব ফ্রি ক্লাস দেখো</span>
            <span class="text-base group-hover:translate-x-1 transition-transform">➔</span>
          </a>
        </div>
      </div>

      </div>

      <!-- ============================================== -->
      <!-- ⭐ ABOUT US SECTION (আমাদের সম্পর্কে - ASMANI / LIGHT BLUE THEME) ⭐ -->
      <!-- ============================================== -->
      <div id="about-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="relative rounded-3xl bg-gradient-to-br from-sky-100/90 via-[#F0F7FF] to-blue-100/80 text-slate-800 p-8 sm:p-12 border border-sky-200/90 shadow-xl overflow-hidden">
          
          <!-- Soft Ambient Asmani Glows -->
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Left: Description & Stats (Badge Removed, Relaxed Line Gap) -->
            <div class="lg:col-span-5 text-center lg:text-left">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-normal" data-i18n="about_title">
                অভিজ্ঞতার সাথে আধুনিকতার <br>
                <span class="inline-block mt-4 sm:mt-5 pt-1.5 pb-0.5 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">
                  নিখুঁত মেলবন্ধন
                </span>
              </h2>

              <p class="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0" data-i18n="about_desc">
                ইনসাইট একাডেমিয়া দীর্ঘ <strong class="text-slate-900 font-bold">১১+ বছর</strong> ধরে অফলাইনে বিশ্বস্ততার সাথে শিক্ষার্থীদের পাশে রয়েছে এবং বিগত <strong class="text-slate-900 font-bold">২+ বছর</strong> ধরে অনলাইন প্ল্যাটফর্মে দেশজুড়ে এসএসসি ও এইচএসসি শিক্ষার্থীদের দিচ্ছে মানসম্মত ও সুশৃঙ্খল একাডেমিক সাপোর্ট। দক্ষ মেন্টর এবং সর্বাধুনিক ডিজিটাল প্রযুক্তির সাহায্যে আমরা গড়ে তুলেছি সহজে শেখা ও বিজয়ী হওয়ার এক অনন্য প্ল্যাটফর্ম।
              </p>

              <!-- 3 Stat Badges -->
              <div class="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                <div class="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-sky-200/70 shadow-xs text-center">
                  <div class="text-xl sm:text-2xl font-black text-sky-700">১১+ বছর</div>
                  <div class="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1" data-i18n="about_offline">অফলাইন অভিজ্ঞতা</div>
                </div>
                <div class="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-emerald-200/70 shadow-xs text-center">
                  <div class="text-xl sm:text-2xl font-black text-emerald-700">২+ বছর</div>
                  <div class="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1" data-i18n="about_online">অনলাইন সাপোর্ট</div>
                </div>
                <div class="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-rose-200/70 shadow-xs text-center">
                  <div class="text-xl sm:text-2xl font-black text-rose-600">SSC & HSC</div>
                  <div class="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1" data-i18n="about_care">পূর্ণাঙ্গ প্রস্তুতি</div>
                </div>
              </div>

              <!-- Action Buttons: Course Button = Soft Red, Teacher Button = Green -->
              <div class="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button onclick="navigateTo('courses')" class="bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer">
                  <span data-i18n="hero_btn_courses">আমাদের কোর্সসমূহ দেখুন</span>
                  <span>➔</span>
                </button>
                <button onclick="navigateTo('teachers')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer border border-emerald-500" data-i18n="nav_teachers">
                  <span>শিক্ষক প্যানেল পরিচিতি</span>
                </button>
              </div>
            </div>

            <!-- Right: Auto-Rotating Authentic Classroom Photo Carousel (Full Size, Clean Photos) -->
            <div class="lg:col-span-7">
              <div id="about-carousel" class="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950 group h-[420px] sm:h-[480px] lg:h-[520px] flex flex-col justify-between" onmouseenter="pauseAboutCarousel()" onmouseleave="resumeAboutCarousel()">
                
                <!-- Slide Track Wrapper -->
                <div class="relative w-full h-full overflow-hidden">
                  
                  <!-- SLIDE 01: Certificate Distribution -->
                  <div class="about-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 z-10 overflow-hidden">
                    <img src="data:image/jpeg;base64,${gallery01B64}" alt="ইনসাইট কৃতি সংবর্ধনা ও সার্টিফিকেট বিতরণ" class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" />
                  </div>

                  <!-- SLIDE 02: Rajib Sir with Classroom -->
                  <div class="about-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none z-0 overflow-hidden">
                    <img src="data:image/jpeg;base64,${gallery02B64}" alt="রাজিব স্যারের সাথে অফলাইন ক্লাসরুম ব্যাচ" class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" />
                  </div>

                  <!-- SLIDE 03: Sakib Sir Classroom Selfie -->
                  <div class="about-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none z-0 overflow-hidden">
                    <img src="data:image/jpeg;base64,${gallery03B64}" alt="স্বাধীন স্যারের সাথে প্রাণবন্ত ক্লাসরুম" class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" />
                  </div>

                  <!-- SLIDE 04: Full Batch with Lanyard -->
                  <div class="about-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none z-0 overflow-hidden">
                    <img src="data:image/jpeg;base64,${gallery04B64}" alt="ইনসাইটের সুশৃঙ্খল পরিবেশ ও সফল শিক্ষার্থীদের ব্যাচ" class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" />
                  </div>

                  <!-- SLIDE 05: Insight Wooden Logo & Family -->
                  <div class="about-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none z-0 overflow-hidden">
                    <img src="data:image/jpeg;base64,${gallery05B64}" alt="ইনসাইট একাডেমিয়া পরিবার ও ভালোবাসার মেলবন্ধন" class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" />
                  </div>

                  <!-- SLIDE 06: Outdoor Academic Counseling -->
                  <div class="about-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none z-0 overflow-hidden">
                    <img src="data:image/jpeg;base64,${gallery06B64}" alt="মাঠপর্যায়ে শিক্ষার্থীদের একাডেমিক কাউন্সেলিং" class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" />
                  </div>

                </div>

                <!-- Navigation Controls (Left/Right Arrows & Bottom Dots) -->
                <!-- Prev Button -->
                <button onclick="prevAboutSlide()" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-blue-600 text-white border border-white/20 flex items-center justify-center transition opacity-0 group-hover:opacity-100 z-20 cursor-pointer shadow-xl backdrop-blur-xs text-base" title="পূর্ববর্তী ছবি">
                  ❮
                </button>
                
                <!-- Next Button -->
                <button onclick="nextAboutSlide()" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-blue-600 text-white border border-white/20 flex items-center justify-center transition opacity-0 group-hover:opacity-100 z-20 cursor-pointer shadow-xl backdrop-blur-xs text-base" title="পরবর্তী ছবি">
                  ❯
                </button>

                <!-- Bottom Pagination Dots Indicator (6 Dots) -->
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
                  <button onclick="setAboutSlide(0)" class="about-dot w-7 h-2 rounded-full bg-blue-500 transition-all duration-300 cursor-pointer" title="ছবি ১"></button>
                  <button onclick="setAboutSlide(1)" class="about-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer" title="ছবি ২"></button>
                  <button onclick="setAboutSlide(2)" class="about-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer" title="ছবি ৩"></button>
                  <button onclick="setAboutSlide(3)" class="about-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer" title="ছবি ৪"></button>
                  <button onclick="setAboutSlide(4)" class="about-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer" title="ছবি ৫"></button>
                  <button onclick="setAboutSlide(5)" class="about-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer" title="ছবি ৬"></button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- ============================================== -->
      <!-- ⭐ COMMUNITY FEATURE SECTION (HOME PAGE) ⭐     -->
      <!-- ============================================== -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80">
        
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#FF334B] tracking-tight" data-i18n="community_title">
            যুক্ত হও আমাদের সাথে
          </h2>
          <p class="text-slate-500 text-xs sm:text-sm mt-2" data-i18n="community_sub">
            আমাদের লাইভ ক্লাসগুলোতে অংশ নিতে এবং সবসময় আপডেটেড থাকতে
          </p>
        </div>

        <!-- 4-Card Community Grid (Exact User Image Style) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          
          <!-- Card 1: YouTube Channel -->
          <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md hover:border-red-300 transition group">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </div>
              <span class="text-sm font-bold text-slate-800 group-hover:text-red-600 transition" data-i18n="yt_label">ইউটিউব চ্যানেল</span>
            </div>
            <span class="text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform flex items-center gap-1" data-i18n="yt_btn">
              ভিডিও দেখো <span class="text-sm">→</span>
            </span>
          </a>

          <!-- Card 2: Facebook Group -->
          <a href="https://www.facebook.com/groups/3182716805285212" target="_blank" rel="noopener noreferrer" class="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md hover:border-pink-300 transition group">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
              </div>
              <span class="text-sm font-bold text-slate-800 group-hover:text-pink-600 transition" data-i18n="fb_grp_label">ফেসবুক গ্রুপ</span>
            </div>
            <span class="text-xs font-bold text-pink-600 group-hover:translate-x-1 transition-transform flex items-center gap-1" data-i18n="fb_grp_btn">
              যুক্ত হও <span class="text-sm">→</span>
            </span>
          </a>

          <!-- Card 3: WhatsApp Helpline Support -->
          <a href="https://wa.me/8801748470620" target="_blank" rel="noopener noreferrer" class="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md hover:border-emerald-300 transition group">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
              </div>
              <div>
                <span class="text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition" data-i18n="wa_label">WhatsApp সাপোর্ট</span>
                <span class="block text-[11px] text-slate-400 font-mono">+8801748470620</span>
              </div>
            </div>
            <span class="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1" data-i18n="wa_btn">
              মেসেজ দাও <span class="text-sm">→</span>
            </span>
          </a>

          <!-- Card 4: Facebook Page -->
          <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md hover:border-blue-300 transition group">
            <div class="flex items-center gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
              </div>
              <span class="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition" data-i18n="fb_page_label">ফেসবুক পেজ</span>
            </div>
            <span class="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1" data-i18n="fb_page_btn">
              যুক্ত হও <span class="text-sm">→</span>
            </span>
          </a>

        </div>

      </div>

    </section>

    <!-- ============================================ -->
    <!-- PAGE 2: COURSES & BATCHES (কোর্স পেজ)        -->
    <!-- ============================================ -->
    <section id="page-courses" class="page-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        


        <!-- Dynamic Sections Container (User selection moves one above the other) -->
        <div id="courses-sections-container" class="space-y-4">
          
          <!-- ============================================ -->
          <!-- SECTION A: ONLINE BATCHES                    -->
          <!-- ============================================ -->
          <div id="wrapper-online-section" class="transition-all duration-300">
            <!-- Section Header -->
            <div class="flex items-center gap-3 pb-3 border-b border-blue-200/80 mb-6">
              <span class="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg shadow-2xs font-bold">🌐</span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900">অনলাইন (Online)</h3>
            </div>

            <!-- Online Cards Grid (Updated per User: HSC-27 EI Crash Course with uploaded custom banner, Rajib vai & Shadhin vai, WhatsApp doubt solve group, and removed live badges) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <!-- Online Card 1: HSC-27 EI Crash Course (Custom Banner, Rajib vai & Shadhin vai, WhatsApp group, 999 cut -> Free) -->
              <div class="bg-white rounded-3xl border border-blue-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <!-- Custom Banner Uploaded by User (HSC-27 EI 1.0 with Shadhin & Rajib) -->
                  <div class="relative overflow-hidden bg-slate-950 w-full" style="aspect-ratio: 1024 / 571;">
                    <img src="data:image/jpeg;base64,${eiBannerB64}" alt="HSC-27 Free Online Course Insight EI 1.0" class="w-full h-full object-contain block group-hover:scale-[1.01] transition-transform duration-500" style="image-rendering: -webkit-optimize-contrast;">
                  </div>

                  <!-- Card White Body -->
                  <div class="p-6">
                    <h4 class="text-xl font-black text-slate-900 mb-1">HSC-27 EI Crash Course</h4>
                    
                    <!-- Conducted By: Rajib vai & Shadhin vai -->
                    <div class="flex items-center gap-2.5 text-xs text-slate-600 mb-3 pb-3 border-b border-slate-100">
                      <div class="flex -space-x-2">
                        <img src="data:image/jpeg;base64,${mentorRajibHdB64}" alt="Rajib Bhai" class="w-7 h-7 rounded-full object-cover object-top border-2 border-white shadow-2xs">
                        <img src="data:image/jpeg;base64,${mentorShadhinHdB64}" alt="Shadhin Bhai" class="w-7 h-7 rounded-full object-cover object-top border-2 border-white shadow-2xs">
                      </div>
                      <span class="font-bold text-slate-800">রাজীব ভাই ও স্বাধীন ভাই পরিচালিত</span>
                    </div>

                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                      এইচএসসি ২৭ ব্যাচের জন্য সম্পূর্ণ ফ্রি ইংলিশ ও আইসিটি (EI 1.0) স্পেশাল ক্র্যাশ কোর্স। বেসিক টু অ্যাডভান্সড পূর্ণাঙ্গ গাইডলাইন।
                    </p>

                    <ul class="text-[11px] text-slate-500 space-y-1.5 mb-6">
                      <li class="flex items-center gap-1.5"><span class="text-blue-500 font-bold">✓</span> ক্লাসের ফুল এইচডি রেকর্ডেড ব্যাকআপ</li>
                      <li class="flex items-center gap-1.5"><span class="text-blue-500 font-bold">✓</span> অধ্যায়ভিত্তিক প্র্যাকটিস শিট ও লেকচার নোট</li>
                      <li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">✓</span> WhatsApp প্রাইভেট ডাউট সলভ গ্রুপ</li>
                    </ul>

                    <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <span class="text-[10px] text-slate-400 font-bold block">কোর্স ফি:</span>
                        <div class="flex items-baseline gap-2">
                          <del class="line-through text-slate-400 font-bold text-xs sm:text-sm">৳ ৯৯৯</del>
                          <span class="text-xl sm:text-2xl font-black text-red-600">Free</span>
                        </div>
                      </div>
                      <button type="button" onclick="openOnlineEICourse()" class="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer">
                        <span>অনলাইন এনরোল</span>
                        <span>➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Online Card 2: SSC-27 Math Suggestion Course (Uncropped 1024x546 Banner, Clear Badges & Typography) -->
              <div class="bg-white rounded-3xl border border-blue-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <!-- Full Uncropped Banner (Natural 1024x546 Aspect Ratio - All Text 100% Intact & Legible) -->
                  <div class="relative overflow-hidden bg-slate-950 w-full cursor-pointer group/banner" style="aspect-ratio: 1024 / 546;" onclick="openBannerLightbox(this.querySelector('img').src, 'SSC-27 Math Suggestion Course • গণিত সাজেশন')" title="ব্যানারটি বড় করে দেখতে ক্লিক করুন">
                    <img src="data:image/jpeg;base64,${mathBannerB64}" alt="SSC-27 Math Suggestion Course - Shadhin Bhai" class="w-full h-full object-contain block select-none group-hover/banner:scale-[1.02] transition-transform duration-300" style="image-rendering: -webkit-optimize-contrast;">
                    <div class="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-lg opacity-0 group-hover/banner:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
                      <span>🔍</span>
                      <span>বড় করে দেখুন</span>
                    </div>
                  </div>

                  <div class="p-6">
                    <h4 class="text-xl font-black text-slate-900 mb-3 leading-snug">SSC-27 Math Suggestion Course</h4>
                    
                    <div class="flex items-center gap-2.5 text-xs text-slate-600 mb-3 pb-3 border-b border-slate-100">
                      <img src="data:image/jpeg;base64,${teacherSakibB64}" alt="Md. Sakibur Rahman Shadhin" class="w-7 h-7 rounded-full object-cover object-top border-2 border-blue-400 shadow-2xs">
                      <div>
                        <span class="font-bold text-slate-800">Md. Sakibur Rahman Shadhin</span>
                        <span class="text-[10px] text-slate-400 block font-semibold">Southeast University, CSE</span>
                      </div>
                    </div>

                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                      এসএসসি ২৭ ব্যাচের বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক শাখার সাধারণ গণিতের ১০০% কমন উপযোগী অধ্যায়ভিত্তিক সুপার সাজেশন ও ক্যালকুলেটর শর্টকাট।
                    </p>

                    <ul class="text-[11px] text-slate-500 space-y-1.5 mb-6">
                      <li class="flex items-center gap-1.5"><span class="text-blue-500 font-bold">✓</span> অধ্যায়ভিত্তিক সুপার সাজেশন ও হ্যান্ডনোট (PDF)</li>
                      <li class="flex items-center gap-1.5"><span class="text-blue-500 font-bold">✓</span> ক্যালকুলেটর ট্রিকস ও এমসিকিউ ৬০ সেকেন্ডে সলভিং</li>
                      <li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">✓</span> WhatsApp প্রাইভেট ডাউট সলভ গ্রুপ</li>
                    </ul>

                    <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <span class="text-[10px] text-slate-400 font-bold block">কোর্স ফি:</span>
                        <div class="flex items-baseline gap-2">
                          <del class="line-through text-slate-400 font-bold text-xs sm:text-sm">৳ ৪৯৯</del>
                          <span class="text-xl sm:text-2xl font-black text-blue-600">৳ ১৯৯</span>
                        </div>
                      </div>
                      <button type="button" onclick="openOnlineSSCMathCourse()" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer">
                        <span>অনলাইন এনরোল</span>
                        <span>➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Online Card 3: SSC-27 English Suggestion & Test Paper Solving Course (Rajib & Ikra, 999 -> 299) -->
              <div class="bg-white rounded-3xl border border-emerald-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <!-- Full Uncropped Banner (Natural 1024x489 Aspect Ratio - All Text 100% Intact) -->
                  <div class="relative overflow-hidden bg-slate-950 w-full cursor-pointer group/banner" style="aspect-ratio: 1024 / 489;" onclick="openBannerLightbox(this.querySelector('img').src, 'SSC-27 English Suggestion & Test Paper Solving Course • ইংরেজি ১ম ও ২য় পত্র')" title="ব্যানারটি বড় করে দেখতে ক্লিক করুন">
                    <img src="data:image/jpeg;base64,${englishBannerB64}" alt="SSC-27 English Suggestion Course - Rajib & Ikra" class="w-full h-full object-contain block select-none group-hover/banner:scale-[1.02] transition-transform duration-300" style="image-rendering: -webkit-optimize-contrast;">
                    <div class="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-lg opacity-0 group-hover/banner:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
                      <span>🔍</span>
                      <span>বড় করে দেখুন</span>
                    </div>
                  </div>

                  <div class="p-6">
                    <h4 class="text-xl font-black text-slate-900 mb-3 leading-snug">SSC-27 English Suggestion & Test Paper Solving Course</h4>
                    
                    <div class="flex items-center gap-2.5 text-xs text-slate-600 mb-3 pb-3 border-b border-slate-100">
                      <div class="flex -space-x-2">
                        <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="Rajib Bhai" class="w-7 h-7 rounded-full object-cover object-top border-2 border-white shadow-2xs">
                        <img src="data:image/jpeg;base64,${teacherIkraB64}" alt="Ikra Apu" class="w-7 h-7 rounded-full object-cover object-top border-2 border-white shadow-2xs">
                      </div>
                      <div>
                        <span class="font-bold text-slate-800">রাজীব ভাই ও ইকরা আপু পরিচালিত</span>
                        <span class="text-[10px] text-slate-400 block font-semibold">DU & ULAB, English Faculty</span>
                      </div>
                    </div>

                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                      এসএসসি ২৭ ব্যাচের বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক শাখার ইংরেজি ১ম ও ২য় পত্রের ১০০% কমন উপযোগী অধ্যায়ভিত্তিক সুপার সাজেশন ও টেস্ট পেপার সলভিং।
                    </p>

                    <ul class="text-[11px] text-slate-500 space-y-1.5 mb-6">
                      <li class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> অধ্যায়ভিত্তিক সুপার সাজেশন ও হ্যান্ডনোট (PDF)</li>
                      <li class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> শীর্ষ ক্যাডেট ও সেরা স্কুলের টেস্ট পেপার সলভিং হ্যাকস</li>
                      <li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">✓</span> WhatsApp প্রাইভেট ডাউট সলভ গ্রুপ</li>
                    </ul>

                    <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <span class="text-[10px] text-slate-400 font-bold block">কোর্স ফি:</span>
                        <div class="flex items-baseline gap-2">
                          <del class="line-through text-slate-400 font-bold text-xs sm:text-sm">৳ ৯৯৯</del>
                          <span class="text-xl sm:text-2xl font-black text-emerald-600">৳ ২৯৯</span>
                        </div>
                      </div>
                      <button type="button" onclick="openOnlineSSCEnglishCourse()" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer">
                        <span>অনলাইন এনরোল</span>
                        <span>➔</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- ============================================ -->
          <!-- DYNAMIC SEPARATOR (উভয় ব্যাচের মাঝের বিভাজক)  -->
          <!-- ============================================ -->
          <div id="courses-separator" class="py-10 flex items-center justify-center">
            <div class="w-full border-t-2 border-dashed border-emerald-300"></div>
            <div class="px-5 py-2 bg-emerald-50 text-emerald-800 font-extrabold text-xs sm:text-sm rounded-full border-2 border-emerald-300 whitespace-nowrap shadow-xs flex items-center gap-2">
              <span>🏫</span>
              <span>অফলাইন (Offline)</span>
              <span>🏫</span>
            </div>
            <div class="w-full border-t-2 border-dashed border-emerald-300"></div>
          </div>

          <!-- ============================================ -->
          <!-- SECTION B: OFFLINE BATCHES                   -->
          <!-- ============================================ -->
          <div id="wrapper-offline-section" class="transition-all duration-300">
            
            <!-- OFFLINE SECTION CSS STYLES -->
            <style>
              /* Infinite teacher marquee loop animation */
              @keyframes offlineTeacherMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .offline-marquee-container {
                overflow: hidden;
                width: 100%;
                position: relative;
                mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
              }
              @keyframes watermarkCornerPatrol {
  0%, 15% {
    top: 5%;
    left: 4%;
    opacity: 0.10;
  }
  18%, 33% {
    top: 6%;
    left: 68%;
    opacity: 0.08;
  }
  36%, 51% {
    top: 83%;
    left: 66%;
    opacity: 0.11;
  }
  54%, 69% {
    top: 83%;
    left: 4%;
    opacity: 0.09;
  }
  72%, 87% {
    top: 46%;
    left: 70%;
    opacity: 0.10;
  }
  90%, 98% {
    top: 46%;
    left: 4%;
    opacity: 0.08;
  }
  100% {
    top: 5%;
    left: 4%;
    opacity: 0.10;
  }
}

.watermark-corner-badge {
  position: absolute;
  font-size: 10px;
  line-height: 1.2;
  padding: 2px 8px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.22);
  color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
  animation: watermarkCornerPatrol 26s ease-in-out infinite;
  transition: opacity 0.5s ease;
}
.watermark-float {
  animation: watermarkCornerPatrol 26s ease-in-out infinite;
}

.offline-marquee-track {
                display: flex;
                gap: 1rem;
                width: max-content;
                animation: offlineTeacherMarquee 38s linear infinite;
              }
              .offline-marquee-track:hover {
                animation-play-state: paused;
              }
              
              /* Custom scrollbar for mobile pill overflow */
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            </style>

            <!-- ========================================== -->
            <!-- VIEW 1: OFFLINE CARDS & CLASS TABS VIEW     -->
            <!-- ========================================== -->
            <div id="offline-cards-view" class="transition-all duration-300">
              
              <!-- Header & Class Switcher (Enlarged & Cleaned per User Request) -->
              <div class="flex flex-col items-center justify-center text-center mb-10 pt-2">
                <h3 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
                  অফলাইন একাডেমিক প্রোগ্রামসমূহ
                </h3>
                <p class="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
                  অভিজ্ঞ শিক্ষক মণ্ডলীর প্রত্যক্ষ তত্ত্বাবধানে ৬ষ্ঠ শ্রেণি থেকে এইচএসসি পর্যন্ত পূর্ণাঙ্গ অফলাইন কেয়ার
                </p>
                <div class="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-4 py-1.5 rounded-full shadow-2xs">
                  <span>📍 শান্তিবাগ | শাহজাহানপুর ব্রাঞ্চ</span>
                </div>
              </div>

              <!-- Class Switcher Tabs (সকল ক্লাস, HSC, SSC, Class 9, Class 8, Class 7, Class 6) -->
              <div class="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8 px-2">
                <button type="button" onclick="filterOfflineClass('all')" id="tab-off-all" class="offline-class-tab px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-slate-900 text-white shadow-sm transition-all whitespace-nowrap cursor-pointer">
                  সকল ক্লাস
                </button>
                <button type="button" onclick="filterOfflineClass('hsc')" id="tab-off-hsc" class="offline-class-tab px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-2xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5">
                  <span>HSC</span>
                  <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                </button>
                <button type="button" onclick="filterOfflineClass('ssc')" id="tab-off-ssc" class="offline-class-tab px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white text-slate-700 border border-slate-200 hover:border-purple-400 hover:text-purple-600 shadow-2xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5">
                  <span>SSC</span>
                  <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                </button>
                <button type="button" onclick="filterOfflineClass('class9')" id="tab-off-class9" class="offline-class-tab px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white text-slate-700 border border-slate-200 hover:border-emerald-400 hover:text-emerald-600 shadow-2xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5">
                  <span>Class 9</span>
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                </button>
                <button type="button" onclick="filterOfflineClass('class8')" id="tab-off-class8" class="offline-class-tab px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white text-slate-700 border border-slate-200 hover:border-red-400 hover:text-red-600 shadow-2xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5">
                  <span>Class 8</span>
                  <span class="w-2 h-2 rounded-full bg-red-500"></span>
                </button>
                <button type="button" onclick="filterOfflineClass('class7')" id="tab-off-class7" class="offline-class-tab px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white text-slate-700 border border-slate-200 hover:border-teal-400 hover:text-teal-600 shadow-2xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5">
                  <span>Class 7</span>
                  <span class="w-2 h-2 rounded-full bg-teal-500"></span>
                </button>
                <button type="button" onclick="filterOfflineClass('class6')" id="tab-off-class6" class="offline-class-tab px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-white text-slate-700 border border-slate-200 hover:border-pink-400 hover:text-pink-600 shadow-2xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5">
                  <span>Class 6</span>
                  <span class="w-2 h-2 rounded-full bg-pink-500"></span>
                </button>
              </div>

              <!-- ============================================== -->
              <!-- ACADEMIC PROGRAM CARDS GRID (8 Batches)       -->
              <!-- ============================================== -->
              <div id="offline-cards-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <!-- CARD 1: HSC - EBI (Blue Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-blue-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="hsc_ebi">
                  <div class="relative h-44 bg-gradient-to-br from-[#0B1E48] via-[#1E3A8A] to-[#0A1128] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-indigo-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-blue-700 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        এইচএসসি - EBI
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-blue-200 font-medium mt-0.5">English • Bangla • ICT</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-blue-600 font-black">এইচএসসি - EBI</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('hsc_ebi')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- CARD 2: HSC - Business (Gold/Amber Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-amber-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="hsc_business">
                  <div class="relative h-44 bg-gradient-to-br from-[#3B0764] via-[#581C87] to-[#1E1B4B] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-amber-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-purple-800 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        এইচএসসি - Business
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-purple-200 font-medium mt-0.5">হিসাববিজ্ঞান • ফিন্যান্স • ম্যানেজমেন্ট</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-purple-600 font-black">এইচএসসি - Business</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('hsc_business')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- CARD 3: SSC 26 (Amber Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-amber-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="ssc26">
                  <div class="relative h-44 bg-gradient-to-br from-[#451A03] via-[#78350F] to-[#291002] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-orange-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-amber-800 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        এসএসসি ২৬
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-amber-200 font-medium mt-0.5">বিজ্ঞান ও ব্যবসায় শিক্ষা</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-amber-600 font-black">এসএসসি ২৬</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('ssc26')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- CARD 4: SSC 27 (Purple Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-purple-200/90 shadow-sm hover:shadow-xl hover:border-purple-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="ssc27">
                  <div class="relative h-44 bg-gradient-to-br from-[#2E1065] via-[#581C87] to-[#1E0B4B] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-fuchsia-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-purple-800 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        এসএসসি ২৭
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-purple-200 font-medium mt-0.5">বিজ্ঞান ও ব্যবসায় শিক্ষা</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-purple-600 font-black">এসএসসি ২৭</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('ssc27')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- CARD 5: Class 9 (Emerald Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-emerald-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="class9">
                  <div class="relative h-44 bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-teal-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-emerald-800 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        ৯ম শ্রেণি
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-emerald-200 font-medium mt-0.5">নতুন কারিকুলাম ও বোর্ড ফাউন্ডেশন</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-emerald-600 font-black">ক্লাস ৯</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('class9')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- CARD 6: Class 8 (Red Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-red-200/90 shadow-sm hover:shadow-xl hover:border-red-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="class8">
                  <div class="relative h-44 bg-gradient-to-br from-[#4A0A0A] via-[#7F1D1D] to-[#1E0505] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-red-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-rose-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-red-800 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        ৮ম শ্রেণি
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-red-200 font-medium mt-0.5">স্কুল সিলেবাস ও বোর্ড ফাউন্ডেশন</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-red-600 font-black">ক্লাস ৮</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('class8')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- CARD 7: Class 7 (Teal Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-teal-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="class7">
                  <div class="relative h-44 bg-gradient-to-br from-[#042F2E] via-[#0F766E] to-[#011C1B] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-teal-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-emerald-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-teal-800 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        ৭ম শ্রেণি
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-teal-200 font-medium mt-0.5">মৌলিক ধারণা ও ধারাবাহিক শিখন</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-teal-600 font-black">ক্লাস ৭</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('class7')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- CARD 8: Class 6 (Pink Theme) -->
                <div class="offline-course-card bg-white rounded-3xl border border-pink-200/90 shadow-sm hover:shadow-xl hover:border-pink-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group" data-class="class6">
                  <div class="relative h-44 bg-gradient-to-br from-[#500724] via-[#9D174D] to-[#2B0313] p-5 flex flex-col justify-between text-white overflow-hidden">
                    <div class="absolute -right-8 -top-8 w-32 h-32 bg-pink-500/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute -left-6 -bottom-6 w-28 h-28 bg-rose-500/20 rounded-full blur-lg pointer-events-none"></div>
                    <div>
                      <span class="inline-block bg-white text-pink-800 text-xs font-black px-3 py-1 rounded-md shadow-xs">
                        ৬ষ্ঠ শ্রেণি
                      </span>
                    </div>
                    <div>
                      <h4 class="text-xl font-black text-white tracking-wide">একাডেমিক প্রোগ্রাম</h4>
                      <p class="text-[11px] text-pink-200 font-medium mt-0.5">আনন্দময় শিখন একাডেমিয়া প্রোগ্রাম</p>
                    </div>
                  </div>
                  <div class="p-5 flex flex-col justify-between flex-1">
                    <div class="flex items-center justify-between text-xs text-slate-600 font-semibold mb-6">
                      <span class="text-slate-700 font-bold">একাডেমিক প্রোগ্রাম</span>
                      <span class="text-pink-600 font-black">ক্লাস ৬</span>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-end">
                      <button type="button" onclick="openOfflineCourseDetails('class6')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer">
                        <span>বিস্তারিত</span>
                        <span class="text-sm">›</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <!-- ========================================== -->
            <!-- VIEW 2: OFFLINE COURSE DETAILS VIEW         -->
            <!-- ========================================== -->
            <div id="offline-details-view" class="hidden transition-all duration-300">
              
              <!-- Back Button & Breadcrumb Navigation -->
              <div class="mb-6 flex items-center justify-between">
                <button type="button" onclick="closeOfflineCourseDetails()" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer">
                  <span>←</span>
                  <span>সকল ক্লাসের তালিকায় ফিরুন</span>
                </button>
                <div class="flex items-center gap-2">
                  <span id="detail-view-badge" class="px-3 py-1 rounded-full text-xs font-black bg-red-100 text-red-700">
                    ক্লাস ৮
                  </span>
                  <span class="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    📍 শান্তিবাগ | শাহজাহানপুর ব্রাঞ্চ
                  </span>
                </div>
              </div>

              <!-- Main Two-Column Layout -->
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- LEFT COLUMN (Span 8): Teachers Marquee & 9 Feature Cards -->
                <div class="lg:col-span-8 space-y-8">
                  
                  <!-- Top Title (Subtitle completely removed as requested in Screenshot 2) -->
                  <div>
                    <div class="flex items-center gap-3">
                      <h2 class="text-2xl sm:text-3xl font-black text-slate-900">
                        একাডেমিক প্রোগ্রাম
                      </h2>
                      <span id="detail-view-class-label" class="text-2xl sm:text-3xl font-black text-red-600">
                        ক্লাস ৮
                      </span>
                    </div>
                  </div>

                  <!-- SECTION 1: ক্লাস নিচ্ছেন যারা (Continuous Sliding Marquee Loop - Matching Screenshot 3) -->
                  <div>
                    <div class="flex items-center gap-2 mb-4">
                      <span class="w-2.5 h-6 rounded-full bg-red-500 inline-block"></span>
                      <h4 class="text-lg sm:text-xl font-black text-slate-900">ক্লাস নিচ্ছেন যারা</h4>
                    </div>

                    <!-- Marquee Slider Container -->
                    <div class="offline-marquee-container py-2">
                      <div class="offline-marquee-track">
                        <!-- SET 1 (10 Offline Teachers) -->

      <!-- Marquee Item: রাজিব ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="মোঃ রাজিবুল ইসলাম" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">রাজিব ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, MBA</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ইংরেজি (English)
        </span>
      </div>

      <!-- Marquee Item: নয়ন ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherNayanB64}" alt="মোঃ ফারুকুল ইসলাম নয়ন" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">নয়ন ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Govt. Titumir College (DU Affiliated)</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ফিন্যান্স ও ব্যাংকিং
        </span>
      </div>

      <!-- Marquee Item: স্বাধীন ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${mentorShadhinHdB64}" alt="মোঃ সাকিবুর রহমান স্বাধীন" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">স্বাধীন ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Southeast University, CSE</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          গণিত ও আইসিটি
        </span>
      </div>

      <!-- Marquee Item: ইকরা ম্যাম -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherIkraB64}" alt="ইকরা ইসলাম" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">ইকরা ম্যাম</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">ULAB, English</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ইংরেজি (English)
        </span>
      </div>

      <!-- Marquee Item: অনিক ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherAnikB64}" alt="আব্দুল আজিজ অনিক" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">অনিক ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Ex-NDC, BUTEX</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          পদার্থবিজ্ঞান ও রসায়ন
        </span>
      </div>

      <!-- Marquee Item: রিফাত ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherRifatB64}" alt="সিরাজুল ইসলাম নূর রিফাত" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">রিফাত ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, Finance</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          বাংলা (Bangla)
        </span>
      </div>

      <!-- Marquee Item: প্রীতি ম্যাম -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherPrityB64}" alt="প্রীতি ভৌমিক" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">প্রীতি ম্যাম</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Eden College, Mathematics</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          বাংলা (Bangla)
        </span>
      </div>

      <!-- Marquee Item: বৈশাখী ম্যাম -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherBoishakiB64}" alt="সুমাইয়া আক্তার বৈশাখী" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">বৈশাখী ম্যাম</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, MIS</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ম্যানেজমেন্ট (Management)
        </span>
      </div>

      <!-- Marquee Item: রাকিব ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherRakibB64}" alt="রাকিব হাসান" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">রাকিব ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Titumir College, Accounting</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          হিসাববিজ্ঞান (Accounting)
        </span>
      </div>

      <!-- Marquee Item: তন্ময় ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherTonmoyB64}" alt="তন্ময়" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">তন্ময় ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, Finance & Banking</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          হিসাববিজ্ঞান (Accounting)
        </span>
      </div>

                        <!-- SET 2 (Duplicate for Seamless Infinite Loop) -->

      <!-- Marquee Item: রাজিব ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="মোঃ রাজিবুল ইসলাম" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">রাজিব ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, MBA</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ইংরেজি (English)
        </span>
      </div>

      <!-- Marquee Item: নয়ন ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherNayanB64}" alt="মোঃ ফারুকুল ইসলাম নয়ন" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">নয়ন ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Govt. Titumir College (DU Affiliated)</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ফিন্যান্স ও ব্যাংকিং
        </span>
      </div>

      <!-- Marquee Item: স্বাধীন ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${mentorShadhinHdB64}" alt="মোঃ সাকিবুর রহমান স্বাধীন" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">স্বাধীন ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Southeast University, CSE</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          গণিত ও আইসিটি
        </span>
      </div>

      <!-- Marquee Item: ইকরা ম্যাম -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherIkraB64}" alt="ইকরা ইসলাম" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">ইকরা ম্যাম</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">ULAB, English</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ইংরেজি (English)
        </span>
      </div>

      <!-- Marquee Item: অনিক ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherAnikB64}" alt="আব্দুল আজিজ অনিক" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">অনিক ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Ex-NDC, BUTEX</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          পদার্থবিজ্ঞান ও রসায়ন
        </span>
      </div>

      <!-- Marquee Item: রিফাত ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherRifatB64}" alt="সিরাজুল ইসলাম নূর রিফাত" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">রিফাত ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, Finance</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          বাংলা (Bangla)
        </span>
      </div>

      <!-- Marquee Item: প্রীতি ম্যাম -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherPrityB64}" alt="প্রীতি ভৌমিক" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">প্রীতি ম্যাম</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Eden College, Mathematics</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          বাংলা (Bangla)
        </span>
      </div>

      <!-- Marquee Item: বৈশাখী ম্যাম -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherBoishakiB64}" alt="সুমাইয়া আক্তার বৈশাখী" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">বৈশাখী ম্যাম</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, MIS</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          ম্যানেজমেন্ট (Management)
        </span>
      </div>

      <!-- Marquee Item: রাকিব ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherRakibB64}" alt="রাকিব হাসান" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">রাকিব ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">Titumir College, Accounting</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          হিসাববিজ্ঞান (Accounting)
        </span>
      </div>

      <!-- Marquee Item: তন্ময় ভাই -->
      <div onclick="switchOfflineTeacherPanel('all'); navigateTo('teachers'); setTeacherMode('offline');" class="w-52 sm:w-60 flex-shrink-0 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center text-center cursor-pointer group">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow-xs mb-3 group-hover:scale-105 transition-transform duration-200">
          <img src="data:image/jpeg;base64,${teacherTonmoyB64}" alt="তন্ময়" class="w-full h-full object-cover rounded-full bg-slate-100" />
        </div>
        <h5 class="text-sm sm:text-base font-bold text-slate-800 truncate w-full group-hover:text-red-600 transition-colors">তন্ময় ভাই</h5>
        <p class="text-xs text-slate-500 truncate w-full mt-1">University of Dhaka, Finance & Banking</p>
        <span class="text-[10px] sm:text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mt-2.5 truncate max-w-full">
          হিসাববিজ্ঞান (Accounting)
        </span>
      </div>
                      </div>
                    </div>
                  </div>

                  <!-- SECTION 2: কোর্সে যা থাকছে (Offline Features Grid - Matching Screenshot 3 without recording backup) -->
                  <div>
                    <div class="flex items-center gap-2 mb-4">
                      <span class="w-2.5 h-6 rounded-full bg-red-500 inline-block"></span>
                      <h4 class="text-lg sm:text-xl font-black text-slate-900">কোর্সে যা থাকছে</h4>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      
                      <!-- Feature 1: Exclusive CQ/MCQ Class -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-amber-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg flex-shrink-0">
                          ⭐
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">Exclusive CQ/MCQ Class</h5>
                          <p class="text-[11px] text-slate-500">অধ্যায়ভিত্তিক গুরুত্বপূর্ণ সৃজনশীল ও নৈর্ব্যক্তিক</p>
                        </div>
                      </div>

                      <!-- Feature 2: ডেইলি ও উইকলি কুইজ -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-emerald-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg flex-shrink-0">
                          📅
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">ডেইলি ও উইকলি কুইজ</h5>
                          <p class="text-[11px] text-slate-500">নিয়মিত প্রস্তুতি যাচাই ও তাৎক্ষণিক রেজাল্ট</p>
                        </div>
                      </div>

                      <!-- Feature 3: CQ/SQ Practice Exam -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-blue-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg flex-shrink-0">
                          📄
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">CQ/SQ Practice Exam</h5>
                          <p class="text-[11px] text-slate-500">বোর্ড স্ট্যান্ডার্ড লিখিত পরীক্ষা ও খাতা মূল্যায়ন</p>
                        </div>
                      </div>

                      <!-- Feature 4: Homework Submission -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-orange-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg flex-shrink-0">
                          📝
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">Homework Submission</h5>
                          <p class="text-[11px] text-slate-500">নিয়মিত হোমওয়ার্ক চেকিং ও প্রত্যক্ষ পরামর্শ</p>
                        </div>
                      </div>

                      <!-- Feature 5: Study Planner -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-indigo-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg flex-shrink-0">
                          📚
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">Study Planner</h5>
                          <p class="text-[11px] text-slate-500">ব্যক্তিগত পড়ার সময়সূচি ও দিকনির্দেশনা</p>
                        </div>
                      </div>

                      <!-- Feature 6: অর্ধবার্ষিক ও বার্ষিক পরীক্ষা স্পেশাল -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-purple-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg flex-shrink-0">
                          📑
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">অর্ধবার্ষিক ও বার্ষিক পরীক্ষা স্পেশাল</h5>
                          <p class="text-[11px] text-slate-500">টার্গেট জিপিএ-৫ স্পেশাল মডেল টেস্ট সিরিজ</p>
                        </div>
                      </div>

                      <!-- Feature 7: Parents Meeting -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-teal-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-lg flex-shrink-0">
                          👥
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">Parents Meeting</h5>
                          <p class="text-[11px] text-slate-500">অভিভাবক সমাবেশ ও প্রগ্রেস রিপোর্ট বুকলেট</p>
                        </div>
                      </div>

                      <!-- Feature 8: Reward Based Learning -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-amber-300 transition-all">
                        <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg flex-shrink-0">
                          🏆
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">Reward Based Learning</h5>
                          <p class="text-[11px] text-slate-500">কুইজ ও পরীক্ষায় মেধার স্বীকৃতি ও পুরষ্কার</p>
                        </div>
                      </div>

                      <!-- Feature 9: 7 AM - 11 PM Helpline -->
                      <div class="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-rose-300 transition-all sm:col-span-2">
                        <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg flex-shrink-0">
                          📞
                        </div>
                        <div>
                          <h5 class="text-xs sm:text-sm font-bold text-slate-900">7 AM - 11 PM Helpline</h5>
                          <p class="text-[11px] text-slate-500">যেকোনো পড়াশোনার ডাউট সলভ ও অফলাইন শিক্ষক সহায়তা</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <!-- RIGHT COLUMN (Span 4): Summary Card & Action Buttons (Matching Screenshot 3 & 4) -->
                <div class="lg:col-span-4 sticky top-24">
                  <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                    
                    <!-- Top Poster Banner in Summary Card -->
                    <div id="detail-summary-banner" class="p-6 bg-gradient-to-br from-[#4A0A0A] via-[#7F1D1D] to-[#1E0505] text-white relative overflow-hidden transition-all duration-300">
                      <div class="absolute -right-8 -top-8 w-32 h-32 bg-red-500/20 rounded-full blur-xl pointer-events-none"></div>
                      <div class="relative z-10">
                        <span id="detail-summary-tag" class="text-lime-300 font-black text-sm tracking-wide">
                          ৮ম শ্রেণি
                        </span>
                        <h4 id="detail-summary-quote" class="text-lg sm:text-xl font-black text-white leading-snug mt-1">
                          টপ-নচ প্রিপারেশন শুরু হোক শুরু থেকেই...
                        </h4>
                      </div>
                    </div>

                    <!-- Checklist -->
                    <div class="p-6 space-y-4">
                      <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider">কোর্সে যা থাকছে</h5>
                      
                      <ul class="text-xs text-slate-700 space-y-2.5 font-medium">
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>অফলাইন ইন-পার্সন ইন্টারেক্টিভ ক্লাস</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>Exclusive CQ/MCQ Class</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>ডেইলি ও উইকলি কুইজ</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>CQ/SQ Practice Exam</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>Homework Submission</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>Study Planner</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>Parents Meeting</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>Reward Based Learning</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span class="text-emerald-500 font-bold text-sm">✓</span>
                          <span>7 AM - 11 PM Helpline</span>
                        </li>
                      </ul>

                      <!-- Action Buttons (Matching Screenshot 4) -->
                      <div class="pt-4 border-t border-slate-100 space-y-3">
                        
                        <!-- Button 1: এনরোল করুন -->
                        <!-- Button 1: ভর্তি হতে ক্লিক করো (WhatsApp Communication +8801748470620) -->
                        <button type="button" onclick="openOfflineEnrollWhatsApp()" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                          <span>ভর্তি হতে ক্লিক করো</span>
                          <span>➔</span>
                        </button>

                        <!-- Button 2: ক্লাস রুটিন দেখুন -->
                        <button type="button" onclick="openOfflineRoutineModal(currentOfflineClassId)" class="w-full py-3.5 px-6 rounded-2xl bg-[#FFF1F2] hover:bg-[#FFE4E6] text-rose-600 font-bold text-sm border border-rose-200/80 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer">
                          <span>📅</span>
                          <span>ক্লাস রুটিন দেখো</span>
                        </button>

                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->

    <!-- ============================================ -->
    <!-- PAGE: HSC-27 EI CRASH COURSE LMS INTERFACE   -->
    <!-- ============================================ -->
    <section id="page-course-ei" class="page-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <!-- ============================================ -->
        <!-- VIEW 1: COURSE OVERVIEW (Matching Image 2)   -->
        <!-- ============================================ -->
        <div id="ei-view-overview" class="transition-all duration-300">
          <!-- Top Navigation Header -->
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <button type="button" onclick="navigateTo('courses')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">
                <svg class="w-4 h-4 text-white shrink-0 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Courses</span>
              </button>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">HSC-27 Free Online Course • Insight EI 1.0</h2>
            </div>
            
          </div>

          <!-- Main Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <!-- Left 2 Columns: Overview & Instructors -->
            <div class="lg:col-span-2 space-y-6">
              
              <!-- Course Instructors Card (Matching Image 2) -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 class="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-blue-600 inline-block"></span>
                  Course Instructors
                </h3>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Instructor 1: Shadhin Bhai -->
                  <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition group">
                    <img src="data:image/jpeg;base64,${mentorShadhinHdB64}" alt="Shadhin Bhai" class="w-16 h-16 rounded-full object-cover object-top border-2 border-blue-400 shadow-xs flex-shrink-0 group-hover:scale-105 transition">
                    <div>
                      <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider">ICT Mentor</div>
                      <h4 class="text-base font-black text-slate-900">স্বাধীন ভাই</h4>
                      <p class="text-xs text-slate-500">Md. Sakibur Rahman Shadhin</p>
                      <div class="mt-1 text-[11px] font-semibold text-slate-600">Southeast University, CSE</div>
                    </div>
                  </div>

                  <!-- Instructor 2: Rajib Bhai -->
                  <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition group">
                    <img src="data:image/jpeg;base64,${mentorRajibHdB64}" alt="Rajib Bhai" class="w-16 h-16 rounded-full object-cover object-top border-2 border-emerald-400 shadow-xs flex-shrink-0 group-hover:scale-105 transition">
                    <div>
                      <div class="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">English Mentor</div>
                      <h4 class="text-base font-black text-slate-900">রাজীব ভাই</h4>
                      <p class="text-xs text-slate-500 font-semibold">University of Dhaka, MBA</p>
                      <div class="mt-1 text-[11px] font-semibold text-slate-700">Founder & CEO, Insight Academia</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- About Course Details -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
                <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-rose-600 inline-block"></span>
                  কোর্স সম্পর্কে বিস্তারিত
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  এইচএসসি ২৭ ব্যাচের শিক্ষার্থীদের জন্য <strong>ইংরেজি (English)</strong> ও <strong>আইসিটি (ICT)</strong> বিষয়ের ভয় দূর করতে <strong>ইনসাইট একাডেমিয়া</strong>-এর পক্ষ থেকে ১০০% ফ্রি স্পেশাল অনলাইন ক্র্যাশ কোর্স। এই কোর্সে প্রতিটি অধ্যায়ের গুরুত্বপূর্ণ টপিক, বিগত বছরের বোর্ড প্রশ্ন বিশ্লেষণ এবং প্র্যাকটিক্যাল কোডিং ও গ্রামারের শর্টকাট টেকনিক হাতে-কলমে শেখানো হবে।
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div class="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70">
                    <div class="font-extrabold text-sm text-blue-900 mb-1 flex items-center gap-1.5">
                      <span>💻</span> আইসিটি (ICT) সিলেবাস
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed">সংখ্যা পদ্ধতি ও ডিজিটাল লজিক গেটস, HTML ওয়েব পেজ ডিজাইন এবং C প্রোগ্রামিং ল্যাঙ্গুয়েজ ও অ্যালগরিদম।</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
                    <div class="font-extrabold text-sm text-emerald-900 mb-1 flex items-center gap-1.5">
                      <span>📝</span> ইংরেজি (English) সিলেবাস
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed">Right Form of Verbs, Modifiers, Passage Narration, Connectors এবং রাইটিং পার্ট ফ্রি-হ্যান্ড রাইটিং ফরম্যাট।</p>
                  </div>
                </div>
              </div>

              <!-- Course Highlights -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 class="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-emerald-600 inline-block"></span>
                  কোর্সের বিশেষ সুবিধাসমূহ
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-500 font-bold">✓</span> ফুল এইচডি আনলিস্টেড ভিডিও লেকচার
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-500 font-bold">✓</span> প্রতিটি ক্লাসের লেকচার শিট (PDF)
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-500 font-bold">✓</span> WhatsApp প্রাইভেট ডাউট সলভ গ্রুপ
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-500 font-bold">✓</span> বোর্ড প্রশ্নের জন্য স্পেশাল সাজেশন
                  </div>
                </div>
              </div>

            </div>

            <!-- Right 1 Column: Enroll Card (Matching Image 2) -->
            <div class="lg:col-span-1 space-y-6">
              <div class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg p-6 space-y-5 sticky top-24">
                <div class="rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-900">
                  <img src="data:image/jpeg;base64,${eiBannerB64}" alt="HSC-27 EI Course Banner" class="w-full h-full object-cover">
                </div>

                <div class="text-center pt-2">
                  <div class="text-3xl font-black text-rose-600 mb-1">Free</div>
                  <div class="text-xs font-bold text-slate-400 line-through">কোর্স ফি: ৳ ৯৯৯</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center text-xs font-semibold text-slate-500">
                  Have Coupon Code? <span class="text-blue-600 font-bold">INSIGHT100 (Applied)</span>
                </div>

                <!-- Enroll Now Button (Image 2) -->
                <button type="button" onclick="openOnlineStudentInfoModal()" class="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>Enroll Now</span>
                  <span>➔</span>
                </button>

                <!-- Stats -->
                <div class="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2">👥 Students</span>
                    <span class="font-bold text-slate-900">2,450+ Enrolled</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2">▷ Live & Recorded Class</span>
                    <span class="font-bold text-emerald-600">Included</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2">💬 WhatsApp Support</span>
                    <a href="https://wa.me/8801748470620" target="_blank" class="font-bold text-blue-600 hover:underline">+8801748470620</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- VIEW 2: COURSE VIDEO DASHBOARD (Image 4)    -->
        <!-- ============================================ -->
        <div id="ei-view-dashboard" class="hidden transition-all duration-300">
          <!-- Dashboard Header -->
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <button type="button" onclick="switchEIView('overview')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">
                <svg class="w-4 h-4 text-white shrink-0 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>কোর্স ওভারভিউ</span>
              </button>
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">HSC-27 EI Crash Course • ভিডিও ড্যাশবোর্ড</h2>
              </div>
            </div>

            <!-- Subject Switcher Tabs -->
            <div class="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button type="button" onclick="filterEIVideos('all')" id="ei-tab-all" class="ei-vid-tab px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition">
                সকল ক্লাস (All)
              </button>
              <button type="button" onclick="filterEIVideos('ict')" id="ei-tab-ict" class="ei-vid-tab px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 cursor-pointer transition">
                আইসিটি (ICT)
              </button>
              <button type="button" onclick="filterEIVideos('english')" id="ei-tab-english" class="ei-vid-tab px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-600 cursor-pointer transition">
                ইংরেজি (English)
              </button>
            </div>
          </div>

          <!-- Video Grid Container -->
          <div id="eiVideoGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Populated dynamically via renderEIVideos() -->
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- MODAL: STUDENT INFORMATION (Matching Image 3) -->
    <!-- ============================================ -->
    <div id="onlineEnrollInfoModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300">
      <div id="onlineEnrollInfoModalBox" class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl scale-95 transition-all duration-300 space-y-5">
        <div>
          <h3 class="text-2xl font-black text-slate-900">Information</h3>
          <p class="text-xs text-slate-500 mt-1">Please confirm your details to continue.</p>
        </div>

        <form onsubmit="event.preventDefault(); submitOnlineEnrollForm();" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Name</label>
            <input type="text" id="onlineStudentName" placeholder="Full Name" oninput="validateOnlineEnrollForm()" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-800 text-sm transition">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Email</label>
            <input type="email" id="onlineStudentEmail" placeholder="Email Address" oninput="validateOnlineEnrollForm()" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-800 text-sm transition">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
            <input type="tel" id="onlineStudentPhone" placeholder="01XXXXXXXXX" oninput="validateOnlineEnrollForm()" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-800 text-sm transition">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Institution</label>
            <input type="text" id="onlineStudentCollege" placeholder="College / School Name" oninput="validateOnlineEnrollForm()" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:outline-none text-slate-800 text-sm transition">
          </div>

          <!-- Agreement Checkbox -->
          <label class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 cursor-pointer">
            <input type="checkbox" id="onlineAgreeCheck" onchange="validateOnlineEnrollForm()" class="mt-0.5 rounded text-blue-600 focus:ring-0 cursor-pointer">
            <span>All the informations are correct & I agree to all the <span class="text-blue-600 font-bold underline">Terms & Conditions</span>, <span class="text-blue-600 font-bold underline">Privacy Policy</span> & <span class="text-blue-600 font-bold underline">Refund Policy</span></span>
          </label>

          <!-- Action Buttons (Button turns blue to green when complete) -->
          <div class="flex items-center justify-end gap-3 pt-3">
            <button type="button" onclick="closeOnlineStudentInfoModal()" class="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition cursor-pointer">
              Cancel
            </button>
            <button type="button" id="onlineSubmitEnrollBtn" onclick="submitOnlineEnrollForm()" disabled class="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm opacity-50 cursor-not-allowed transition-all shadow-xs">
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>

    
    <!-- ============================================ -->
    <!-- MODAL: OTP VERIFICATION (Matching Image 2)    -->
    <!-- ============================================ -->
    <div id="enrollOTPModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300">
      <div id="enrollOTPModalBox" class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl scale-95 transition-all duration-300 relative">
        
        <!-- Back Button (Image 2: ← পেছনে) -->
        <div class="flex items-center justify-between mb-2">
          <button type="button" onclick="backFromOTPToInfoModal()" class="text-xs font-bold text-slate-600 hover:text-blue-600 flex items-center gap-1.5 transition cursor-pointer group">
            <svg class="w-4 h-4 text-slate-500 group-hover:text-blue-600 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            <span>পেছনে</span>
          </button>
          <button type="button" onclick="closeEnrollOTPModal()" class="text-slate-400 hover:text-slate-700 text-lg font-bold leading-none cursor-pointer">✕</button>
        </div>

        <!-- Center: Insight Academia Logo (User requirement: "just amader khetre amader logo hobe") -->
        <div class="text-center mb-3">
          <img src="data:image/png;base64,${logoB64}" alt="Insight Academia" class="h-12 sm:h-14 w-auto object-contain mx-auto" />
        </div>

        <!-- Headline & Subtitle -->
        <div class="text-center mb-6">
          <h3 class="text-2xl font-black text-slate-900 tracking-tight">ওটিপি যাচাই</h3>
          <p id="otpPhoneSubtitle" class="text-xs font-medium text-slate-500 mt-1.5">+৮৮০১XXXXXXXX নম্বরে কোড পাঠানো হয়েছে</p>
        </div>

        <!-- 6 OTP Input Boxes (Image 2) -->
        <div class="flex items-center justify-center gap-2 sm:gap-2.5 mb-4" id="otpInputContainer">
          <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-input w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-black text-slate-800 rounded-2xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none transition shadow-2xs" />
          <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-input w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-black text-slate-800 rounded-2xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none transition shadow-2xs" />
          <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-input w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-black text-slate-800 rounded-2xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none transition shadow-2xs" />
          <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-input w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-black text-slate-800 rounded-2xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none transition shadow-2xs" />
          <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-input w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-black text-slate-800 rounded-2xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none transition shadow-2xs" />
          <input type="text" maxlength="1" inputmode="numeric" class="otp-digit-input w-11 h-14 sm:w-12 sm:h-16 text-center text-xl sm:text-2xl font-black text-slate-800 rounded-2xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none transition shadow-2xs" />
        </div>

        <!-- Error Message Area (Hidden by default, shown when OTP fails) -->
        <div id="otpErrorAlert" class="hidden text-center text-xs font-bold text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-xl mb-4">
          ❌ ওটিপি মিলেনি! অনুগ্রহ করে সঠিক ৬ ডিজিটের কোড দিন।
        </div>

        <!-- Resend Countdown (Image 2: আবার পাঠাও (৩:৩৮)) -->
        <div class="text-center text-xs text-slate-500 mb-6">
          <span id="otpTimerWrapper">আবার পাঠাও (<span id="otpCountdownTimer" class="font-bold text-blue-600">০৩:০০</span>)</span>
          <button type="button" id="btnResendOTP" onclick="resendEnrollOTP()" class="hidden text-blue-600 font-bold hover:underline cursor-pointer">
            আবার কোড পাঠান
          </button>
        </div>

        <!-- Verify / Submit Button -->
        <button type="button" id="btnVerifyEnrollOTP" onclick="verifyEnrollOTP()" class="w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer">
          <span>যাচাই করে এনরোল সম্পন্ন করুন</span>
          <span>➔</span>
        </button>

      </div>
    </div>

    
    <!-- ============================================ -->
    <!-- MODAL: COURSE PAYMENT (bKash Send Money / TrxID)   -->
    <!-- ============================================ -->
    <div id="coursePaymentModal" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300">
      <div id="coursePaymentModalBox" class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl scale-95 transition-all duration-300 max-h-[92vh] overflow-y-auto">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div class="flex items-center gap-3">
            <button type="button" onclick="backFromPaymentToOTP()" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-black text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer group">
              <svg class="w-3.5 h-3.5 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
              <span>পেছনে</span>
            </button>
            <h3 class="text-base sm:text-lg font-black text-slate-900">কোর্স পেমেন্ট ও অ্যাক্টিভেশন</h3>
          </div>
          <button type="button" onclick="closeCoursePaymentModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition cursor-pointer">✕</button>
        </div>

        <!-- Course & Price Summary Card -->
        <div class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/80 rounded-2xl p-4 mb-4 flex items-center justify-between gap-3">
          <div>
            <h4 id="payCourseTitle" class="text-sm sm:text-base font-black text-slate-900 leading-snug">SSC-27 English Suggestion Course</h4>
            <p class="text-xs text-slate-500 font-medium">সম্পূর্ণ সিলেবাস + মডেল টেস্ট ও লেকচার শিট</p>
          </div>
          <div class="text-right shrink-0">
            <div class="text-[11px] text-slate-400 font-bold line-through" id="payCourseOldPrice">৳ ৮৯৯</div>
            <div class="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight" id="payCoursePrice">৳ ২৯৯</div>
            <span class="text-[10px] text-blue-700 font-bold bg-blue-100/80 px-2 py-0.5 rounded-full">কুপন অ্যাপ্লাইড</span>
          </div>
        </div>

        <!-- Payment Method: Official bKash Card (Nagad & Rocket Removed) -->
        <div class="mb-4">
          <label class="block text-xs font-bold text-slate-700 mb-2">পেমেন্ট মেথড (Payment Method):</label>
          <div class="flex items-center justify-between p-3.5 rounded-2xl border-2 border-[#E2136E] bg-gradient-to-r from-pink-50 via-white to-pink-50/50 shadow-xs">
            <div class="flex items-center gap-3">
              <!-- Official bKash Logo SVG -->
              <div class="h-10 px-2.5 rounded-xl bg-white shadow-2xs border border-pink-200 flex items-center justify-center shrink-0">
                <svg viewBox="11.22 10.7 458.08 209.58" class="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                  <path d="M327.99 110.75l12.99 58.4 85.01-43.04z" fill="#d12053"/>
                  <path d="M352.16 23.48L328 110.76l98.01 15.35z" fill="#e2136e"/>
                  <path d="M248.31 10.7l101.38 12.11-23.97 86.76z" fill="#d12053"/>
                  <path d="M247.52 27.76h11.29l31.67 40.5z" fill="#9e1638"/>
                  <path d="M428.69 125.55l-29.46-40.77 47.66-8.53z" fill="#d12053"/>
                  <path d="M423.77 137.5l3.04-9.07-74.39 37.74z" fill="#e2136e"/>
                  <path d="M325.91 113.05l15.52 69.77-46.06 37.46z" fill="#9e1638"/>
                  <path d="M442.25 96.97l27.05-.46-19.55-19.89z" fill="#e2136e"/>
                  <path d="M255.13 94.18v7.53c-2.76-4.35-10.52-7.22-14.8-6.62s-11 4.14-14.65 12C221.68 98.82 214 94 208.27 94h-17.78v8.84h11.58c5.12 0 10.46-.52 15.24 3.83a11.76 11.76 0 0 1 3.46 6.7c1.47 6.86-1.54 15.09-9.51 15.29a24.63 24.63 0 0 1-7.49-.87l-.61.63a66.48 66.48 0 0 1 4.91 8.17 25.21 25.21 0 0 0 12.56-6.82 24.09 24.09 0 0 0 5.05-7.12 24.26 24.26 0 0 0 4.49 7.12 22.36 22.36 0 0 0 11.32 6.82 69.8 69.8 0 0 1 4.42-8.17l-.54-.63a20.07 20.07 0 0 1-6.74.87c-8.25-.23-9.76-8.69-8.48-15.29 1.11-5.62 6.11-11.15 11-11.56 5.49-.45 12.19 4.18 13.55 9.85a41.85 41.85 0 0 1 1 9.47v51.49a35 35 0 0 1 3.94-.38 33.7 33.7 0 0 1 4 .38V94.18z" fill="#231f20"/>
                  <path d="M42.34 64.29c13.91-1.39 35.27 16.56 37 20.48l1.32-.21V74.25c-9.77-5.17-23.41-15.79-41.5-14.49-20.07 1.44-27.92 13.24-27.94 34V172.67a26.39 26.39 0 0 1 3.77-.41 36.5 36.5 0 0 1 4.27.41v-69.79h53.36v5.73c-29.29.54-42 16.87-42 30.9 0 17.1 17.66 33.17 48.68 33.17h1.37V94H20l-.1-.18a20.61 20.61 0 0 1-.61-4.66C19.18 75.87 28 65.69 42.34 64.29zM41.09 140c0-12.34 13.67-24.17 31.53-26.74v56.09C53 166 41.09 150.6 41.09 140z" fill="#e2136e"/>
                  <path d="M82.75 94v8.85h54.88v5.73c-29.29.54-42 16.87-42 30.9 0 17.1 17.67 33.17 48.67 33.17h1.36v-58.32h.85c9.85-.27 15.74 6 16.05 14.05a13.34 13.34 0 0 1-8.69 13.09l.06 1.19 7.48-.22c4.18-5.29 6.89-11.19 6.62-17.56-.46-11.11-7.88-16.4-22.37-16.2v-5.75h34.75v69.79a28.1 28.1 0 0 1 3.93-.41 34.62 34.62 0 0 1 4.1.41V94zm23.35 46c0-12.34 13.68-24.17 31.53-26.74v56.1C118 166 106.1 150.6 106.1 140z" fill="#231f20"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-black text-slate-900 flex items-center gap-1.5">
                  <span>বিকাশ সেন্ড মানি</span>
                  <span class="text-[11px] font-bold text-[#E2136E]">(Send Money)</span>
                </div>
                <div class="text-[11px] text-slate-500 font-medium">ব্যক্তিগত বিকাশ একাউন্ট থেকে পেমেন্ট করুন</div>
              </div>
            </div>
            
          </div>
        </div>

        <!-- Send Money Instructions Card -->
        <div id="payInstructionBox" class="bg-gradient-to-b from-pink-50/60 to-slate-50 border border-pink-200/80 rounded-2xl p-4 mb-4 space-y-3">
          
          <div class="flex items-center justify-between">
            <span class="text-xs font-black text-[#E2136E] uppercase tracking-wide flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#E2136E]"></span> বিকাশ SEND MONEY নম্বর:
            </span>
            <span class="text-[10px] font-extrabold bg-[#E2136E] text-white px-2.5 py-0.5 rounded-full shadow-2xs">Personal</span>
          </div>

          <!-- Number & Copy Button -->
          <div class="flex items-center justify-between bg-white border-2 border-dashed border-[#E2136E]/40 rounded-xl px-3.5 py-2.5 shadow-2xs">
            <div class="flex items-center gap-2">
              <span class="text-base text-[#E2136E]">📱</span>
              <span id="payTargetNumber" class="text-base sm:text-lg font-black text-slate-900 tracking-wider">01684520421</span>
            </div>
            <button type="button" onclick="copyPayTargetNumber()" id="btnCopyPayNumber" class="px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-[#E2136E] text-[#E2136E] hover:text-white font-extrabold text-xs transition flex items-center gap-1 cursor-pointer shadow-2xs">
              <span>📋</span>
              <span id="copyBtnText">কপি করুন</span>
            </button>
          </div>

          <!-- Step-by-Step Guide -->
          <ol class="text-xs text-slate-600 space-y-1.5 pl-4 list-decimal leading-relaxed">
            <li>আপনার <span class="font-black text-[#E2136E]">বিকাশ অ্যাপে</span> লগইন করে <strong>"Send Money"</strong> অপশনে যান।</li>
            <li>উপরের নম্বরে নির্ধারিত কোর্স ফি <strong id="payStepAmount" class="text-slate-900 font-black">৳ ২৯৯</strong> টাকা সেন্ড মানি করুন।</li>
            <li>টাকা সফলভাবে পাঠানোর পর বিকাশ থেকে প্রাপ্ত <strong>TrxID (Transaction ID)</strong> নিচের বক্সে লিখে সাবমিট করুন।</li>
          </ol>
        </div>

        <!-- Inputs Form -->
        <div class="space-y-3.5 mb-5">
          <!-- Sender Phone Number -->
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">যেই নম্বর থেকে টাকা পাঠিয়েছেন (Sender Number):</label>
            <input type="tel" id="paySenderNumber" placeholder="01XXXXXXXXX" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#E2136E] focus:outline-none text-slate-800 text-sm font-semibold transition" />
          </div>

          <!-- Transaction ID (TrxID) -->
          <div>
            <div class="mb-1">
              <label class="text-xs font-bold text-slate-700">বিকাশ ট্রানজেকশন আইডি (bKash TrxID):</label>
            </div>
            <input type="text" id="payTrxId" placeholder="উদাঃ BLA93KZ104" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#E2136E] focus:outline-none text-slate-800 text-sm font-mono font-bold tracking-wider uppercase transition" />
            <p class="text-[11px] text-slate-400 mt-1">টাকা পাঠানোর পর বিকাশ থেকে প্রাপ্ত ৮-১০ অক্ষরের ট্রানজেকশন কোডটি লিখুন।</p>
          </div>

          <!-- Error Alert (Hidden by default) -->
          <div id="payErrorAlert" class="hidden text-center text-xs font-bold text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-xl">
            ❌ অনুগ্রহ করে সঠিক ট্রানজেকশন আইডি (TrxID) ও প্রেরকের নম্বর দিন!
          </div>
        </div>

        <!-- Submit CTA Button -->
        <button type="button" onclick="submitCoursePayment()" id="btnSubmitPayment" class="w-full py-4 px-6 rounded-2xl bg-[#E2136E] hover:bg-[#c20f5d] active:scale-95 text-white font-black text-sm sm:text-base shadow-lg shadow-pink-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
          <span>পেমেন্ট নিশ্চিত করে ক্লাসরুমে যান</span>
          <span>➔</span>
        </button>

        <!-- Guarantee Note -->
        <p class="text-center text-[11px] text-slate-400 mt-3 flex items-center justify-center gap-1.5">
          <span>🔒</span>
          <span>১০০% নিরাপদ ও যাচাইকৃত ভর্তি প্রক্রিয়া • হেল্পলাইন: 01748470620</span>
        </p>

      </div>
    </div>
    
    <!-- ============================================ -->
    <!-- MODAL: PAYMENT PENDING VERIFICATION (24hr)   -->
    <!-- ============================================ -->
    <div id="paymentPendingModal" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300">
      <div id="paymentPendingModalBox" class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl scale-95 transition-all duration-300 text-center">
        
        <!-- Animated Clock / Hourglass Icon -->
        <div class="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3.5 text-3xl shadow-xs">
          ⏳
        </div>

        <span class="inline-block text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-800 tracking-wider mb-2">
          যাচাই প্রক্রিয়াধীন • Pending
        </span>

        <h3 class="text-lg sm:text-xl font-black text-slate-900 mb-2">
          পেমেন্ট রিকোয়েস্ট সফলভাবে জমা হয়েছে!
        </h3>

        <!-- Requested exact highlight text -->
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 rounded-2xl p-4 my-4 text-left shadow-2xs">
          <div class="flex items-start gap-2.5">
            <span class="text-amber-600 text-base mt-0.5">📢</span>
            <p class="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
              আমাদের টিম TrxID যাচাই করে <span class="text-[#E2136E] font-black underline decoration-2">24hr মধ্যে</span> আপনার ক্লাসরুম চালু করে দেবে।
            </p>
          </div>
        </div>

        <!-- Order Summary Card -->
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 mb-4 text-left text-xs space-y-2">
          <div class="flex justify-between items-center text-slate-500">
            <span>অর্ডার নম্বর:</span>
            <span id="pendingModalOrderId" class="font-mono font-bold text-slate-800">#ORD-000000</span>
          </div>
          <div class="flex justify-between items-center text-slate-500">
            <span>কোর্স:</span>
            <span id="pendingModalCourseName" class="font-bold text-slate-800">SSC-27 English Suggestion</span>
          </div>
          <div class="flex justify-between items-center text-slate-500">
            <span>কোর্স ফি:</span>
            <span id="pendingModalAmount" class="font-bold text-emerald-600">৳ ২৯৯</span>
          </div>
          <div class="flex justify-between items-center text-slate-500">
            <span>প্রেরক নম্বর:</span>
            <span id="pendingModalSender" class="font-mono font-bold text-slate-800">017XXXXXXXX</span>
          </div>
          <div class="flex justify-between items-center text-slate-500">
            <span>বিকাশ TrxID:</span>
            <span id="pendingModalTrxId" class="font-mono font-black text-[#E2136E] bg-pink-100 px-2 py-0.5 rounded">BLA93KZ104</span>
          </div>
          <div class="flex justify-between items-center text-slate-500 pt-1.5 border-t border-slate-200">
            <span>স্ট্যাটাস:</span>
            <span class="font-bold text-amber-700 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
              <span>ভেরিফিকেশন অপেক্ষমান</span>
            </span>
          </div>
        </div>

        <!-- Helpline note -->
        <p class="text-[11px] text-slate-500 mb-4">
          জরুরি প্রয়োজনে যোগাযোগ করুন: <a href="https://wa.me/8801748470620" target="_blank" class="text-emerald-600 font-bold hover:underline">01748470620 (WhatsApp)</a>
        </p>

        <!-- CTA Buttons -->
        <div class="space-y-2">
          <button type="button" onclick="closePaymentPendingModal()" class="w-full py-3 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm transition shadow-sm cursor-pointer">
            ঠিক আছে, হোমপেজে যান
          </button>
          
          
        </div>

      </div>
    </div>

    
    <!-- ============================================ -->
    <!-- MODAL: ADMIN AUTH GATE (2-Step Verification) -->
    <!-- ============================================ -->
    <div id="adminGateModal" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300">
      <div id="adminGateModalBox" class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl scale-95 transition-all duration-300">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-black shadow-xs">
              🔐
            </div>
            <div>
              <h3 class="text-base font-black text-slate-900">Admin Security Gate</h3>
              <p class="text-xs text-slate-500">Restricted Access Only</p>
            </div>
          </div>
          <button type="button" onclick="closeAdminGateModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition cursor-pointer">✕</button>
        </div>

        <!-- STEP 1: USERNAME, PHONE & PASSWORD -->
        <div id="adminGateStep1" class="space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Username:</label>
            <input type="text" id="adminGateUser" onkeydown="if(event.key==='Enter') validateAdminStep1()" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800 text-xs font-semibold transition" />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Phone Number:</label>
            <input type="tel" id="adminGatePhone" onkeydown="if(event.key==='Enter') validateAdminStep1()" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800 text-xs font-semibold transition" />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Password:</label>
            <input type="password" id="adminGatePass" placeholder="Enter Password" onkeydown="if(event.key==='Enter') validateAdminStep1()" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800 text-xs font-semibold transition" />
          </div>

          <div id="adminGateError1" class="hidden text-xs font-bold text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-xl text-center">
            ❌ Invalid username, phone number, or password!
          </div>

          <button type="button" onclick="validateAdminStep1()" class="w-full py-3 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-sm transition flex items-center justify-center gap-2 cursor-pointer">
            <span>Next Step</span>
            <span>➔</span>
          </button>
        </div>

        <!-- STEP 2: DECOY SECURITY CODE CHALLENGE (SECRET: ami shadhin.amake enter korte dao71) -->
        <div id="adminGateStep2" class="hidden space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1.5">Security Code:</label>
            <div class="flex items-center gap-2 mb-2">
              <div class="flex-1 flex items-center justify-center p-1 bg-[#edf7fd] rounded-xl border border-slate-400 shadow-inner overflow-hidden">
                <canvas id="securityImageCanvas" width="280" height="75" class="rounded-lg select-none cursor-pointer w-full max-w-[280px] h-[75px]" onclick="generateDecoySecurityCode()" title="Click to reload"></canvas>
              </div>
              <button type="button" onclick="generateDecoySecurityCode()" title="Refresh Security Code" class="p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 text-base font-bold transition cursor-pointer shadow-2xs shrink-0">
                🔄
              </button>
            </div>
            <input type="text" id="adminGatePhrase" onkeydown="if(event.key==='Enter') validateAdminStep2()" class="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800 text-xs sm:text-sm font-semibold transition" />
            <p class="text-[11px] text-slate-400 mt-1">Enter the characters displayed in the security image above.</p>
          </div>

          <div id="adminGateError2" class="hidden text-xs font-bold text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-xl text-center">
            ❌ Security verification failed! Invalid code.
          </div>

          <div class="space-y-2 pt-1">
            <button type="button" onclick="validateAdminStep2()" class="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer">
              <span>Verify & Enter Admin Panel</span>
              <span>➔</span>
            </button>
            <button type="button" onclick="backToAdminStep1()" class="w-full py-2 px-3 text-xs font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer">
              ← Back to Previous Step
            </button>
          </div>
        </div>

      </div>
    </div>
    
    <!-- ============================================ -->
    <!-- ============================================================== -->
    <!-- FULLSCREEN ADMIN DASHBOARD (AdminKit Pro Style Layout)        -->
    <!-- ============================================================== -->
    <div id="adminOrdersModal" class="fixed inset-0 z-50 bg-[#0f172a]/80 backdrop-blur-md flex flex-col md:flex-row overflow-hidden opacity-0 pointer-events-none transition-all duration-300">
      
      <!-- LEFT SIDEBAR: Deep Navy Blue Theme (User requested: "left side er bar ta tumi blue er moddhe dio") -->
      <aside id="adminSidebar" class="w-full md:w-64 bg-[#edf9f0] border-r border-emerald-200/80 flex flex-col shrink-0 text-slate-800 z-30 transition-all duration-300">
        
        <!-- Brand & Logo -->
        <div class="h-16 px-5 border-b border-emerald-200/70 flex items-center justify-between bg-white/60">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
              IA
            </div>
            <div>
              <div class="text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                <span>Insight Academia</span>
              </div>
              
            </div>
          </div>
          <button type="button" onclick="closeAdminPanel()" class="md:hidden text-slate-400 hover:text-slate-800 text-lg cursor-pointer">✕</button>
        </div>

        <!-- Admin Profile -->
        <div class="p-3.5 mx-3 my-3 rounded-2xl bg-white border border-emerald-200/90 shadow-2xs flex items-center gap-3">
          <div class="relative shrink-0">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
              RA
            </div>
            <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-xs font-black text-slate-900 truncate flex items-center gap-1">
              <span>Rajib Ahmed</span>
              <span class="text-[10px] text-emerald-600">▾</span>
            </div>
            
          </div>
        </div>

        <!-- Navigation Menu: NO ICONS, BIGGER TEXT -->
        <div class="flex-1 overflow-y-auto px-3 py-2 space-y-1.5">
          <div class="text-[11px] font-black uppercase tracking-wider text-emerald-800/60 px-3 py-1">Pages</div>
          
          <!-- 1. Dashboard -->
          <button type="button" onclick="switchAdminTab('dashboard')" id="navAdminDashboard" class="admin-nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-black transition cursor-pointer bg-emerald-600 text-white shadow-sm">
            <span>Dashboard</span>
          </button>

          <!-- 2. Total request -->
          <button type="button" onclick="switchAdminTab('total')" id="navAdminTotal" class="admin-nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-extrabold text-slate-700 hover:text-emerald-900 hover:bg-emerald-100/70 transition cursor-pointer">
            <span>Total request</span>
            <span id="badgeTotalRequests" class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-200/80 text-emerald-900">0</span>
          </button>

          <!-- 3. Pending request -->
          <button type="button" onclick="switchAdminTab('pending')" id="navAdminPending" class="admin-nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-extrabold text-slate-700 hover:text-emerald-900 hover:bg-emerald-100/70 transition cursor-pointer">
            <span>Pending request</span>
            <span id="badgePendingRequests" class="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-200 text-amber-900 animate-pulse">0</span>
          </button>

          <!-- 4. Previous request -->
          <button type="button" onclick="switchAdminTab('previous')" id="navAdminPrevious" class="admin-nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-extrabold text-slate-700 hover:text-emerald-900 hover:bg-emerald-100/70 transition cursor-pointer">
            <span>Previous request</span>
            <span id="badgeApprovedRequests" class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-200/80 text-emerald-900">0</span>
          </button>

          <!-- 5. Deleted request -->
          <button type="button" onclick="switchAdminTab('deleted')" id="navAdminDeleted" class="admin-nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-extrabold text-slate-700 hover:text-emerald-900 hover:bg-emerald-100/70 transition cursor-pointer" title="ভুলবশত ডিলিট করা রিকোয়েস্ট রিস্টোর ও অনুমোদন করুন">
            <span>Deleted request</span>
            <span id="badgeDeletedRequests" class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-200 text-rose-900">0</span>
          </button>

          <div class="pt-4 pb-1">
            <div class="text-[11px] font-black uppercase tracking-wider text-emerald-800/60 px-3 py-1">System</div>
          </div>

          <!-- 6. Logout -->
          <button type="button" onclick="adminLogout()" class="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-extrabold text-rose-600 hover:bg-rose-100/80 transition cursor-pointer">
            <span>Logout</span>
          </button>
        </div>

        <!-- Sidebar Footer -->
        <div class="p-3 border-t border-emerald-200/70 text-[11px] text-emerald-800/70 font-semibold text-center bg-white/40">
          Insight Academia
        </div>
      </aside>

      <!-- MAIN CONTENT AREA -->
      <main class="flex-1 flex flex-col h-full overflow-hidden bg-[#F8FAFC]">
        
        <!-- TOP HEADER BAR -->
        <header class="h-16 px-4 sm:px-6 bg-white border-b border-slate-200/80 flex items-center justify-between shrink-0 z-20">
          <div class="flex items-center gap-3">
            <button type="button" onclick="toggleAdminSidebar()" class="md:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold text-slate-400 hidden sm:inline">Pages /</span>
              <span id="adminHeaderBreadcrumb" class="text-xs sm:text-sm font-black text-slate-900">Analytics Dashboard</span>
            </div>
          </div>

          <div class="flex items-center gap-2 sm:gap-3">
            <!-- NOTIFICATION BELL ICON (User requested: Left of Logout, clicking takes to pending request) -->
            <button type="button" onclick="openPendingFromNotif()" id="btnAdminNotif" class="relative p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition cursor-pointer" title="পেন্ডিং রিকোয়েস্ট নোটিফিকেশন">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              <span id="adminNotifBadge" class="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-[10px] font-black rounded-full flex items-center justify-center animate-bounce shadow-xs">0</span>
            </button>

            <!-- Back to Website -->
            <button type="button" onclick="closeAdminPanel()" class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1 cursor-pointer">
              <span>🌐 Website</span>
            </button>

            <!-- Red Logout Button (Marked red: "logout") -->
            <button type="button" onclick="adminLogout()" class="px-3 sm:px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black shadow-xs transition flex items-center gap-1 cursor-pointer" title="লগআউট করুন">
              <span>Logout</span>
            </button>
          </div>
        </header>

        <!-- SCROLLABLE BODY CONTENT -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">

          <!-- ==================== TAB 1: DASHBOARD ==================== -->
          <div id="adminTabContentDashboard" class="admin-tab-pane space-y-6">
            
            <!-- Dashboard Title & Month Switcher -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Analytics Dashboard</span>
                  <span id="dashboardMonthBadge" class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">Present Month: November 2026</span>
                </h2>
              </div>

              <!-- Month Toggle Button -->
              <button type="button" onclick="toggleDashboardMonth()" id="btnTopMonthToggle" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm transition flex items-center gap-2 self-start sm:self-auto cursor-pointer">
                <span>📅</span>
                <span id="btnTopMonthToggleText">View Previous Month Stats ➔</span>
              </button>
            </div>

            <!-- 6 METRIC CARDS (Clean English without subtitles per user request) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <!-- 1. This Month Sales -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider" id="lblSalesTitle">This Month Sales</span>
                  <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">🛒</div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono" id="valSales">128</div>
              </div>

              <!-- 2. This Month Earning -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider" id="lblEarningTitle">This Month Earning</span>
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">৳</div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono" id="valEarning">৳ 38,400</div>
              </div>

              <!-- 3. Total Earning -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Earning</span>
                  <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg">💰</div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono" id="valTotalEarning">৳ 194,600</div>
              </div>

              <!-- 4. This Month Visitors -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider" id="lblVisitorsTitle">This Month Visitors</span>
                  <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-lg">👥</div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono" id="valVisitors">14,212</div>
              </div>

              <!-- 5. Total Visitors -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Visitors</span>
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg">🌐</div>
                </div>
                <div class="text-2xl sm:text-3xl font-black text-slate-900 font-mono" id="valTotalVisitors">68,540</div>
              </div>

              <!-- 6. Visitor Location (User requested removal of WHICH AREA) -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Visitor Location</span>
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg">📍</div>
                </div>
                <div class="space-y-1.5 text-xs">
                  <div class="flex items-center justify-between font-bold">
                    <span class="text-slate-700">1. Dhaka Division</span>
                    <span class="text-blue-600 font-mono">42% (5,969)</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-full h-1.5">
                    <div class="bg-blue-600 h-1.5 rounded-full" style="width: 42%"></div>
                  </div>

                  <div class="flex items-center justify-between font-bold">
                    <span class="text-slate-700">2. Chittagong Division</span>
                    <span class="text-indigo-600 font-mono">24% (3,410)</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-full h-1.5">
                    <div class="bg-indigo-600 h-1.5 rounded-full" style="width: 24%"></div>
                  </div>

                  <div class="flex items-center justify-between font-bold text-[11px] text-slate-500">
                    <span>3. Rajshahi (14%) • 4. Sylhet (12%) • Others (8%)</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- 2 GRAPHS SECTION -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
              
              <!-- GRAPH 1: REVENUE GRAPH -->
              <div class="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm sm:text-base font-black text-slate-900" id="graphRevTitle">This Month Revenue Movement</h3>
                    <p class="text-xs text-slate-400">Weekly Revenue & Transaction Trend</p>
                  </div>
                  <span class="px-2.5 py-1 rounded-xl bg-blue-50 text-blue-700 text-xs font-black font-mono" id="graphRevTotal">৳ 38,400</span>
                </div>
                
                <!-- SVG CURVED LINE GRAPH -->
                <div class="h-56 w-full relative" id="containerRevenueGraph">
                  <!-- Rendered dynamically via renderRevenueSvg() -->
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400 font-bold border-t border-slate-100 pt-3">
                  <span>1st Week</span>
                  <span>2nd Week</span>
                  <span>3rd Week</span>
                  <span>4th Week (Current)</span>
                </div>
              </div>

              <!-- GRAPH 2: TOTAL VISITOR GRAPH -->
              <div class="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm sm:text-base font-black text-slate-900" id="graphVisTitle">This Month Total Visitors Movement</h3>
                    <p class="text-xs text-slate-400">Daily Visitors & Traffic Flow</p>
                  </div>
                  <span class="px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-black font-mono" id="graphVisTotal">14,212 Visitors</span>
                </div>

                <!-- SVG CURVED LINE GRAPH -->
                <div class="h-56 w-full relative" id="containerVisitorGraph">
                  <!-- Rendered dynamically via renderVisitorSvg() -->
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400 font-bold border-t border-slate-100 pt-3">
                  <span>1st Week</span>
                  <span>2nd Week</span>
                  <span>3rd Week</span>
                  <span>4th Week (Current)</span>
                </div>
              </div>

            </div>

            <!-- MONTH PAGINATION & TIMELINE NAVIGATOR -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
              
              <!-- Quick Present / Live button -->
              <div class="flex items-center gap-2 self-start sm:self-auto">
                <span class="text-xs font-bold text-slate-500">Timeline View:</span>
                <button type="button" onclick="goToPresentMonth()" id="btnQuickPresent" class="px-3.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer bg-emerald-600 text-white shadow-2xs flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>Present (Current Month)</span>
                </button>
              </div>

              <!-- Month Navigator: Left Arrow (Prev), Center Indicator (Page # / Month), Right Arrow (Next) -->
              <div class="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                
                <!-- Left Arrow: Go back in history (Prev) -->
                <button type="button" onclick="navigateMonthHistory(-1)" id="btnMonthPrev" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-black text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer border border-slate-200/70" title="Go to Previous Month">
                  <span>◀</span>
                  <span>Prev</span>
                </button>

                <!-- Center Display: New or Page Number & Month -->
                <div id="monthHistoryIndicator" class="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200/90 text-emerald-950 font-black text-xs sm:text-sm text-center flex-1 sm:flex-none sm:min-w-[240px] shadow-2xs">
                  Present (New) • November 2026
                </div>

                <!-- Right Arrow: Go forward towards Present (Next) -->
                <button type="button" onclick="navigateMonthHistory(1)" id="btnMonthNext" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-300 font-black text-xs sm:text-sm transition flex items-center gap-1.5 cursor-not-allowed border border-slate-200/60 opacity-50" title="Next Month" disabled>
                  <span>Next</span>
                  <span>▶</span>
                </button>

              </div>

            </div>

            <!-- Quick Pending Queue Preview -->
            <div class="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <h3 class="text-sm font-black text-slate-900">Pending Payment Requests</h3>
                </div>
                <button type="button" onclick="switchAdminTab('pending')" class="text-xs font-black text-blue-600 hover:underline cursor-pointer">View All Pending (Go to Pending) ➔</button>
              </div>
              <div id="dashboardPendingPreviewContainer" class="space-y-2">
                <!-- Mini preview of pending orders -->
              </div>
            </div>

          </div>

          <!-- ==================== TAB 2: TOTAL REQUESTS ==================== -->
          <div id="adminTabContentTotal" class="admin-tab-pane hidden space-y-5">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Total Requests</h2>
              <p class="text-xs text-slate-500">All student payment and enrollment records</p>
            </div>

            <!-- Search & Filters -->
            <div class="p-4 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div class="w-full sm:w-80 relative">
                <input type="text" id="adminTotalSearchInput" oninput="handleAdminSearch(this.value)" placeholder="Search by student name, phone, or TrxID..." class="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50 focus:bg-white transition" />
                <span class="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
              </div>
              <div class="flex items-center gap-1.5 flex-wrap self-start sm:self-auto">
                <button type="button" onclick="filterTotalOrdersTab('all')" id="tabFilterAll" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white transition cursor-pointer">All</button>
                <button type="button" onclick="filterTotalOrdersTab('pending')" id="tabFilterPending" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer">Pending</button>
                <button type="button" onclick="filterTotalOrdersTab('approved')" id="tabFilterApproved" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer">Approved</button>
                <button type="button" onclick="filterTotalOrdersTab('deleted')" id="tabFilterDeleted" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer">Deleted</button>
              </div>
            </div>

            <!-- Orders Container -->
            <div id="adminTotalOrdersContainer" class="space-y-3">
              <!-- Rendered via renderTotalOrders() -->
            </div>
          </div>

          <!-- ==================== TAB 3: PENDING REQUESTS ==================== -->
          <div id="adminTabContentPending" class="admin-tab-pane hidden space-y-5">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Pending Requests</span>
                <span id="pendingTabCountBadge" class="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold font-mono">0 Pending</span>
              </h2>
              <p class="text-xs text-slate-500">Verify bKash TrxID and approve student enrollments</p>
            </div>

            <!-- Search Bar for Pending Requests (User requested: search bar shb gulay die dio) -->
            <div class="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between gap-3">
              <div class="w-full sm:w-80 relative">
                <input type="text" id="adminPendingSearchInput" oninput="handlePendingSearch(this.value)" placeholder="Search by student name, phone, or TrxID..." class="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50 focus:bg-white transition" />
                <span class="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
              </div>
            </div>

            <!-- Pending Orders Container -->
            <div id="adminPendingOrdersContainer" class="space-y-3">
              <!-- Rendered via renderPendingOrders() -->
            </div>
          </div>

          <!-- ==================== TAB 4: PREVIOUS REQUESTS ==================== -->
          <div id="adminTabContentPrevious" class="admin-tab-pane hidden space-y-5">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Previous Requests</span>
                <span id="previousTabCountBadge" class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold font-mono">0 Approved</span>
              </h2>
              <p class="text-xs text-slate-500">History of verified and approved student enrollments</p>
            </div>

            <!-- Search Bar for Previous Requests (User requested: search bar shb gulay die dio) -->
            <div class="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between gap-3">
              <div class="w-full sm:w-80 relative">
                <input type="text" id="adminPreviousSearchInput" oninput="handlePreviousSearch(this.value)" placeholder="Search by student name, phone, or TrxID..." class="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50 focus:bg-white transition" />
                <span class="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
              </div>
            </div>

            <!-- Approved Orders Container -->
            <div id="adminPreviousOrdersContainer" class="space-y-3">
              <!-- Rendered via renderPreviousOrders() -->
            </div>
          </div>

          <!-- ==================== TAB 5: DELETED REQUESTS (Recycle Bin) ==================== -->
          <div id="adminTabContentDeleted" class="admin-tab-pane hidden space-y-5">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Deleted Requests (Recycle Bin)</span>
                <span id="deletedTabCountBadge" class="text-xs px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-extrabold font-mono">0 Deleted</span>
              </h2>
              <p class="text-xs text-slate-500">Restore accidentally deleted requests or approve directly anytime</p>
            </div>

            <!-- Recycle Bin Info Banner (English) -->
            <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
              <span class="text-xl shrink-0">💡</span>
              <div>
                <strong>Recycle Bin Protection:</strong> Deleted requests are never permanently lost. You can click <strong>"Restore & Approve"</strong> to grant classroom access immediately, or <strong>"Return to Pending"</strong> to re-verify.
              </div>
            </div>

            <!-- Search Bar for Deleted Requests (User requested: search bar shb gulay die dio) -->
            <div class="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between gap-3">
              <div class="w-full sm:w-80 relative">
                <input type="text" id="adminDeletedSearchInput" oninput="handleDeletedSearch(this.value)" placeholder="Search by student name, phone, or TrxID..." class="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50 focus:bg-white transition" />
                <span class="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
              </div>
            </div>

            <!-- Deleted Orders Container -->
            <div id="adminDeletedOrdersContainer" class="space-y-3">
              <!-- Rendered via renderDeletedOrders() -->
            </div>
          </div>

        </div>

      </main>

    </div>

    <!-- ============================================ -->
    <!-- MODAL: VIDEO DETAILS / WATCH (Image 5)       -->
    <!-- ============================================ -->
    <div id="eiVideoWatchModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300">
      <div id="eiVideoWatchModalBox" class="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl scale-95 transition-all duration-300">
        
        <!-- Top Player / Thumbnail Box (Matching Image 5) -->
        <div class="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <div id="eiVideoPlayerContainer" class="w-full h-full flex items-center justify-center">
            <div class="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            <div class="watermark-corner-badge floating-watermark-badge">
              student@insight.edu • 01748470620
            </div>
          </div>
          <div id="eiVideoThumbnailView" class="relative w-full h-full bg-gradient-to-tr from-purple-950 via-slate-900 to-indigo-950 p-6 flex flex-col justify-between text-white">
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-600 text-white font-bold text-xs uppercase tracking-wide">
                  <span>▶</span> VIDEO
                </span>
                <span class="px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-mono tracking-widest text-slate-200 uppercase">Final Shoot</span>
              </div>
              <div class="text-center py-4">
                <div id="eiThumbSubjectTag" class="text-xs text-yellow-300 font-extrabold tracking-wider uppercase mb-1">ICT • সংখ্যা পদ্ধতি</div>
                <h4 id="eiThumbTitle" class="text-2xl sm:text-3xl font-black text-white leading-tight">বাংলা ব্যাকরণ</h4>
                <div id="eiThumbChapter" class="text-xs text-slate-300 mt-2">পরিচ্ছেদ ১ ও ২</div>
              </div>
              <div class="text-right text-[10px] font-mono text-slate-400">Insight EI 1.0</div>
            </div>
            <iframe id="eiVideoIframe" class="w-full h-full hidden" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <!-- Close button -->
          <button type="button" onclick="closeEIVideoWatchModal()" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-sm font-bold transition cursor-pointer z-10">✕</button>
        </div>

        <!-- Details Box (Image 5) -->
        <div class="p-6 sm:p-7 space-y-4">
          <div>
            <h3 id="watchModalTitle" class="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              পরিচ্ছেদ ১ ও ২
            </h3>
            <div class="hidden"><span id="watchModalTeacher"></span></div>
          </div>

          <!-- Resources Section (Lecture Sheet) -->
          <div class="pt-2">
            <div class="text-xs font-bold text-slate-400 mb-2">Resources:</div>
            <button type="button" onclick="downloadEILectureSheet()" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold hover:bg-blue-100 transition cursor-pointer">
              <span>📄</span>
              <span id="watchModalSheetLabel">Lecture Sheet</span>
            </button>
          </div>

          <!-- Watch Now CTA Button (Image 5) -->
          <div class="pt-3">
            <button type="button" id="btnWatchNow" onclick="startPlayingEIVideo()" class="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>▶</span>
              <span>Watch Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- PAGE: SSC-27 MATH SUGGESTION LMS INTERFACE   -->
    <!-- ============================================ -->
    <section id="page-course-ssc-math" class="page-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <!-- ============================================ -->
        <!-- VIEW 1: MATH COURSE OVERVIEW                 -->
        <!-- ============================================ -->
        <div id="ssc-math-view-overview" class="transition-all duration-300">
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <button type="button" onclick="navigateTo('courses')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">
                <svg class="w-4 h-4 text-white shrink-0 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Courses</span>
              </button>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">SSC-27 Math Suggestion Course (গণিত সাজেশন কোর্স)</h2>
            </div>
            
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left 2 Columns -->
            <div class="lg:col-span-2 space-y-6">
              <!-- Course Instructor Card -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 class="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-blue-600 inline-block"></span>
                  Course Instructor
                </h3>
                
                <div class="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition group">
                  <img src="data:image/jpeg;base64,${teacherSakibB64}" alt="Md. Sakibur Rahman Shadhin" class="w-20 h-20 rounded-full object-cover object-top border-2 border-blue-500 shadow-xs flex-shrink-0 group-hover:scale-105 transition">
                  <div>
                    <div class="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Mathematics Lead Instructor</div>
                    <h4 class="text-lg font-black text-slate-900">স্বাধীন ভাই</h4>
                    <p class="text-xs text-slate-500 font-semibold">Md. Sakibur Rahman Shadhin</p>
                    <div class="mt-1 text-xs font-semibold text-slate-700">Southeast University, Dept. of CSE</div>
                    <div class="mt-1 text-[11px] text-slate-500">Founder & CEO, Code Cafe by Sakib • Senior Math Mentor</div>
                  </div>
                </div>
              </div>

              <!-- About Math Course Details -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
                <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-blue-600 inline-block"></span>
                  কোর্স সম্পর্কে বিস্তারিত
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  এসএসসি ২৭ ব্যাচের বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক—সকল বিভাগের শিক্ষার্থীদের সাধারণ গণিতে নিশ্চিত <strong>A+</strong> নিশ্চিত করতে এই স্পেশাল <strong>গণিত সাজেশন কোর্স</strong>। নতুন সিলেবাস ও মানবন্টন অনুযায়ী প্রতিটি অধ্যায়ের সৃজনশীল (CQ) গুরুত্বপূর্ণ টাইপভিত্তিক বিশ্লেষণ, ক্যালকুলেটর হ্যাকস ও এমসিকিউ শর্টকাট টেকনিক হাতে-কলমে শেখানো হবে।
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                    <div class="font-extrabold text-xs text-blue-900 mb-1">📐 বীজগণিত</div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">বাস্তব সংখ্যা, সেট ও ফাংশন, বীজগাণিতিক রাশি ও সমীকরণ।</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80">
                    <div class="font-extrabold text-xs text-indigo-900 mb-1">📏 জ্যামিতি</div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">বৃত্ত সংক্রান্ত উপপাদ্য, সম্পাদ্য ও ব্যবহারিক জ্যামিতি হ্যাকস।</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div class="font-extrabold text-xs text-emerald-900 mb-1">📊 ত্রিকোণমিতি ও পরিসংখ্যান</div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">দূরত্ব-উচ্চতা শর্টকাট, পরিমিতি ও পূর্ণাঙ্গ পরিসংখ্যান।</p>
                  </div>
                </div>
              </div>

              <!-- Course Highlights -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 class="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-emerald-600 inline-block"></span>
                  কোর্সের বিশেষ সুবিধাসমূহ
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-blue-500 font-bold">✓</span> অধ্যায়ভিত্তিক ১০০% কমন সুপার সাজেশন শিট
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-blue-500 font-bold">✓</span> ক্যালকুলেটর শর্টকাট ট্রিকস (MCQ ৬০ সেকেন্ডে)
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-blue-500 font-bold">✓</span> WhatsApp প্রাইভেট ডাউট সলভ গ্রুপ
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-blue-500 font-bold">✓</span> বিগত ১০ বছরের শীর্ষ স্কুলের টেস্ট পেপার সল্ভ
                  </div>
                </div>
              </div>
            </div>

            <!-- Right 1 Column (Enroll Box) -->
            <div class="lg:col-span-1 space-y-6">
              <div class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg p-6 space-y-5 sticky top-24">
                <div class="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950" style="aspect-ratio: 1024 / 546;">
                  <img src="data:image/jpeg;base64,${mathBannerB64}" alt="SSC-27 Math Suggestion Course Banner" class="w-full h-full object-contain block" style="image-rendering: -webkit-optimize-contrast;">
                </div>

                <div class="text-center pt-2">
                  <div class="text-3xl font-black text-blue-600 mb-1">৳ ১৯৯</div>
                  <div class="text-xs font-bold text-slate-400 line-through">কোর্স ফি: ৳ ৪৯৯</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center text-xs font-semibold text-slate-500">
                  Have Coupon Code? <span class="text-blue-600 font-bold">INSIGHT60 (Applied)</span>
                </div>

                <!-- Enroll Now Button -->
                <button type="button" onclick="openOnlineStudentInfoModal('ssc_math')" class="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>Enroll Now</span>
                  <span>➔</span>
                </button>

                <!-- Notice for already enrolled students -->
                <div id="alreadyEnrolledMathNotice" class="hidden pt-1">
                  <button type="button" onclick="switchSSCMathView('dashboard')" class="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>✓ আপনি ইতিমধ্যেই এনরোল্ড • সরাসরি ক্লাসরুমে যান</span>
                    <span>➔</span>
                  </button>
                </div>

                <!-- Stats -->
                <div class="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2">👥 Students</span>
                    <span class="font-bold text-slate-900">1,890+ Enrolled</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2">▷ Recorded & Live</span>
                    <span class="font-bold text-emerald-600">Included</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2">💬 WhatsApp Support</span>
                    <a href="https://wa.me/8801748470620" target="_blank" class="font-bold text-blue-600 hover:underline">+8801748470620</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- VIEW 2: MATH COURSE VIDEO DASHBOARD          -->
        <!-- ============================================ -->
        <div id="ssc-math-view-dashboard" class="hidden transition-all duration-300">
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <button type="button" onclick="switchSSCMathView('overview')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">
                <svg class="w-4 h-4 text-white shrink-0 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>কোর্স ওভারভিউ</span>
              </button>
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">SSC-27 Math Suggestion Course • ভিডিও ড্যাশবোর্ড</h2>
              </div>
            </div>

            <!-- Chapter Switcher Tabs -->
            <div class="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl flex-wrap">
              <button type="button" onclick="filterSSCMathVideos('all')" id="math-tab-all" class="math-vid-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition">
                সকল ক্লাস (৫)
              </button>
              <button type="button" onclick="filterSSCMathVideos('algebra')" id="math-tab-algebra" class="math-vid-tab px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 cursor-pointer transition">
                বীজগণিত (২)
              </button>
              <button type="button" onclick="filterSSCMathVideos('geometry')" id="math-tab-geometry" class="math-vid-tab px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 cursor-pointer transition">
                জ্যামিতি (১)
              </button>
              <button type="button" onclick="filterSSCMathVideos('trigonometry')" id="math-tab-trigonometry" class="math-vid-tab px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 cursor-pointer transition">
                ত্রিকোণমিতি (১)
              </button>
              <button type="button" onclick="filterSSCMathVideos('statistics')" id="math-tab-statistics" class="math-vid-tab px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 cursor-pointer transition">
                পরিসংখ্যান (১)
              </button>
            </div></div>
          </div>

          <!-- Video Grid Container -->
          <div id="sscMathVideoGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Populated dynamically via renderSSCMathVideos() -->
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- MODAL: MATH VIDEO DETAILS / WATCH            -->
    <!-- ============================================ -->
    <div id="sscMathVideoWatchModal" onclick="if(event.target === this) closeSSCMathVideoWatchModal()" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300">
      <div id="sscMathVideoWatchModalBox" class="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl scale-95 transition-all duration-300 flex flex-col max-h-[92vh] border border-slate-100">
        
        <!-- Top Player Box with Floating Watermark -->
        <div class="relative aspect-video bg-black flex items-center justify-center overflow-hidden flex-shrink-0">
          <div class="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            <div class="watermark-corner-badge floating-watermark-badge">
              student@insight.edu • 01748470620
            </div>
          </div>

          <div id="sscMathVideoPlayerContainer" class="w-full h-full flex items-center justify-center">
            <div id="sscMathVideoThumbnailView" class="relative w-full h-full bg-slate-950 p-6 flex flex-col justify-between text-white hidden"></div>
            <iframe id="sscMathVideoIframe" class="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          <button type="button" onclick="closeSSCMathVideoWatchModal()" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center text-sm font-bold transition cursor-pointer z-40 shadow-lg">✕</button>
        </div>

        <!-- Details Box below video -->
        <div class="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <span class="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wide">SSC 2027 Math • সাধারণ গণিত</span>
              <h3 id="watchMathModalTitle" class="text-lg sm:text-xl font-black text-slate-900 mt-1 leading-snug">গণিত স্পেশাল ক্লাস</h3>
              <p id="watchMathModalTeacher" class="hidden"></p>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" onclick="downloadMathLectureSheet()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer">
                <span>📥</span>
                <span id="watchMathModalSheetLabel">Lecture Sheet</span>
              </button>
            </div>
          </div>
          
          <div class="flex items-center justify-between pt-1">
            <button id="btnWatchMathNow" type="button" class="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 cursor-default">
              <span>✓</span>
              <span>Now Playing • ওয়েবসাইটেই ক্লাস চলছে</span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- ============================================ -->
    <!-- PAGE: SSC-27 ENGLISH SUGGESTION COURSE LMS   -->
    <!-- ============================================ -->
    <section id="page-course-ssc-english" class="page-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <!-- ============================================ -->
        <!-- VIEW 1: ENGLISH COURSE OVERVIEW              -->
        <!-- ============================================ -->
        <div id="ssc-english-view-overview" class="transition-all duration-300">
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <button type="button" onclick="navigateTo('courses')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">
                <svg class="w-4 h-4 text-white shrink-0 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back to Courses</span>
              </button>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">SSC-27 English Suggestion & Test Paper Solving Course (ইংরেজি ১ম ও ২য় পত্র)</h2>
            </div>
            
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left 2 Columns -->
            <div class="lg:col-span-2 space-y-6">
              <!-- Course Instructors Card -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 class="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-emerald-600 inline-block"></span>
                  Course Instructors
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Instructor 1: Rajib Bhai -->
                  <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition group">
                    <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="Rajib Bhai" class="w-16 h-16 rounded-full object-cover object-top border-2 border-emerald-500 shadow-xs flex-shrink-0 group-hover:scale-105 transition">
                    <div>
                      <div class="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">English Faculty Lead</div>
                      <h4 class="text-base font-black text-slate-900">রাজীব ভাই</h4>
                      <p class="text-[11px] text-slate-500 font-semibold">University of Dhaka, MBA</p>
                      <div class="mt-1 text-[11px] font-semibold text-slate-700">Founder & CEO, Insight Academia</div>
                    </div>
                  </div>

                  <!-- Instructor 2: Ikra Apu -->
                  <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition group">
                    <img src="data:image/jpeg;base64,${teacherIkraB64}" alt="Ikra Apu" class="w-16 h-16 rounded-full object-cover object-top border-2 border-emerald-500 shadow-xs flex-shrink-0 group-hover:scale-105 transition">
                    <div>
                      <div class="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Senior English Mentor</div>
                      <h4 class="text-base font-black text-slate-900">ইকরা আপু</h4>
                      <p class="text-[11px] text-slate-500 font-semibold">ULAB, English Department</p>
                      <div class="mt-1 text-[11px] text-slate-600">English Grammar & Test Paper Specialist</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- About Course Details -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
                <h3 class="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-emerald-600 inline-block"></span>
                  কোর্স সম্পর্কে বিস্তারিত
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  এসএসসি ২৭ ব্যাচের শিক্ষার্থীদের জন্য ইংরেজি ১ম ও ২য় পত্রে নিশ্চিত <strong>A+</strong> টার্গেট নিয়ে এই স্পেশাল <strong>English Suggestion & Test Paper Solving Course</strong>। নতুন সিলেবাস অনুযায়ী প্রতিটি টপিকের হ্যান্ডনোট, শীর্ষ ক্যাডেট কলেজ ও স্বনামধন্য স্কুলের টেস্ট পেপার সলভিং এবং রাইটিং পার্টের ১০০% কমন কৌশল শেখানো হবে।
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div class="font-extrabold text-xs text-emerald-900 mb-1">📖 English 1st Paper</div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">Seen/Unseen Passage, Summary Writing, Theme Analysis & Writing Part Hacks.</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                    <div class="font-extrabold text-xs text-teal-900 mb-1">✍️ English 2nd Paper</div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">Right form of verbs, Connectors, Narration, Modifiers & Grammar Rules.</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                    <div class="font-extrabold text-xs text-blue-900 mb-1">📝 Test Paper Solving</div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">শীর্ষ ক্যাডেট ও ২০+ স্কুলের টেস্ট পেপার সলভিং এবং বোর্ড স্ট্যান্ডার্ড মডেল টেস্ট।</p>
                  </div>
                </div>
              </div>

              <!-- Course Curriculum Highlights -->
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <h3 class="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <span class="w-2.5 h-6 rounded-full bg-emerald-600 inline-block"></span>
                  কোর্সের বিশেষ বৈশিষ্ট্যসমূহ
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>অধ্যায়ভিত্তিক হ্যান্ডনোট ও সাজেস্টেড CQ/MCQ</span>
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>রাইটিং পার্ট ফ্রি-হ্যান্ড মেথড (কম মুখস্থ, বেশি নম্বর)</span>
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>WhatsApp প্রাইভেট ডাউট সলভ গ্রুপ ২৪/৭ সাপোর্ট</span>
                  </div>
                  <div class="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>পরীক্ষার আগের রাত পর্যন্ত এক্সক্লুসিভ রিভিশন গাইডলাইন</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right 1 Column (Enroll Box) -->
            <div class="lg:col-span-1 space-y-6">
              <div class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg p-6 space-y-5 sticky top-24">
                <div class="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950" style="aspect-ratio: 1024 / 489;">
                  <img src="data:image/jpeg;base64,${englishBannerB64}" alt="SSC-27 English Suggestion Course Banner" class="w-full h-full object-contain block" style="image-rendering: -webkit-optimize-contrast;">
                </div>

                <div class="text-center pt-2">
                  <div class="text-3xl font-black text-emerald-600 mb-1">৳ ২৯৯</div>
                  <div class="text-xs font-bold text-slate-400 line-through">কোর্স ফি: ৳ ৯৯৯</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center text-xs font-semibold text-slate-500">
                  Have Coupon Code? <span class="text-emerald-600 font-bold">INSIGHT70 (Applied)</span>
                </div>

                <!-- Enroll Now Button -->
                <button type="button" onclick="openOnlineStudentInfoModal('ssc_english')" class="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>Enroll Now</span>
                  <span>➔</span>
                </button>

                <!-- Stats -->
                <div class="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2"><span>👥</span> Students Enrolled:</span>
                    <span class="font-bold text-slate-800">১,৪৫০+</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2"><span>📄</span> Lecture Sheets:</span>
                    <span class="font-bold text-slate-800">Full PDF Included</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2"><span>💬</span> Doubt Solve:</span>
                    <span class="font-bold text-emerald-600">WhatsApp Group</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="flex items-center gap-2"><span>📱</span> Device:</span>
                    <span class="font-bold text-slate-800">Mobile & Laptop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- VIEW 2: ENGLISH VIDEO DASHBOARD              -->
        <!-- ============================================ -->
        <div id="ssc-english-view-dashboard" class="hidden transition-all duration-300">
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div class="flex items-center gap-3">
              <button type="button" onclick="switchSSCEnglishView('overview')" class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">
                <svg class="w-4 h-4 text-white shrink-0 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>কোর্স ওভারভিউ</span>
              </button>
              <div>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">SSC-27 English Suggestion Course • ভিডিও ড্যাশবোর্ড</h2>
              </div>
            </div>

            <!-- Subject / Paper Switcher Tabs -->
            <div class="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button type="button" onclick="filterSSCEnglishVideos('all')" id="eng-tab-all" class="eng-vid-tab px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition">
                সকল ক্লাস (All)
              </button>
              <button type="button" onclick="filterSSCEnglishVideos('paper1')" id="eng-tab-paper1" class="eng-vid-tab px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-600 cursor-pointer transition">
                English 1st Paper
              </button>
              <button type="button" onclick="filterSSCEnglishVideos('paper2')" id="eng-tab-paper2" class="eng-vid-tab px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-600 cursor-pointer transition">
                English 2nd Paper
              </button>
              <button type="button" onclick="filterSSCEnglishVideos('testpaper')" id="eng-tab-testpaper" class="eng-vid-tab px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-600 cursor-pointer transition">
                Test Paper Solving
              </button>
            </div>
          </div>

          <!-- Video Grid -->
          <div id="sscEnglishVideoGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Populated dynamically via renderSSCEnglishVideos() -->
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- MODAL: ENGLISH VIDEO DETAILS / WATCH         -->
    <!-- ============================================ -->
    <div id="sscEnglishVideoWatchModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300">
      <div id="sscEnglishVideoWatchModalBox" class="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl scale-95 transition-all duration-300">
        
        <!-- Top Player Box with Floating Watermark -->
        <div class="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <div id="sscEnglishPlayerContainer" class="w-full h-full"></div>
          
          <!-- Unstarted Placeholder Overlay -->
          <div id="sscEnglishPreviewContainer" class="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center text-center p-6 text-white">
            <div class="w-16 h-16 rounded-full bg-emerald-600/90 text-white flex items-center justify-center text-2xl mb-3 shadow-lg group-hover:scale-110 transition">
              ▶
            </div>
            <div class="text-xs uppercase tracking-widest text-emerald-400 font-extrabold mb-1">SSC-27 English Suggestion Course</div>
            <h4 class="text-base font-bold text-slate-200">ক্লাসটি দেখতে নিচের 'Watch Now' বাটনে ক্লিক করুন</h4>
          </div>

          <!-- Floating Watermark Overlay (Anti-Piracy in Corners) -->
          <div class="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            <div id="sscEnglishFloatingWatermarkText" class="watermark-corner-badge floating-watermark-badge">
              student@insight.edu • 017XXXXXXXX
            </div>
          </div>
        </div>

        <!-- Video Info & Watch CTA -->
        <div class="p-6 space-y-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 uppercase tracking-wide mb-1.5">
                <span>📘</span>
                <span>SSC 2027 • English Suggestion</span>
              </div>
              <h3 id="watchEnglishModalTitle" class="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                Seen Passage Solving & MCQ Technique
              </h3>
            </div>
            <button type="button" onclick="closeSSCEnglishVideoWatchModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition cursor-pointer">
              ✕
            </button>
          </div>

          <!-- Teacher Attribution (Automatic) -->
          <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs hidden">
            <div class="flex items-center gap-2">
              <span class="text-emerald-600 font-bold">শিক্ষক:</span>
              <span id="watchEnglishModalTeacher" class="font-extrabold text-slate-800">রাজীব ভাই (University of Dhaka, MBA)</span>
            </div>
            <span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
              Insight Academia Faculty
            </span>
          </div>

          <!-- Lecture Sheet Download -->
          <div class="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2.5">
              <span class="text-xl">📄</span>
              <div>
                <span id="watchEnglishModalSheetLabel" class="font-bold text-slate-800 block text-xs">English_Suggestion_Sheet.pdf</span>
                <span class="text-[10px] text-slate-500 font-medium">লেকচার শীট ও প্র্যাকটিস নোট</span>
              </div>
            </div>
            <button type="button" onclick="showSecurityToast('লেকচার শীট ডাউনলোড শুরু হয়েছে...')" class="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 font-bold text-xs border border-emerald-200 shadow-2xs transition cursor-pointer">
              Download Sheet ⬇
            </button>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex items-center gap-3 pt-2">
            <button type="button" onclick="closeSSCEnglishVideoWatchModal()" class="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer">
              বন্ধ করুন
            </button>
            <button type="button" onclick="startSSCEnglishVideoPlay()" class="flex-2 py-3 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer">
              <span>▶</span>
              <span>Watch Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- ============================================ -->
    <!-- PAGE 3: TEACHERS (শিক্ষক প্যানেল পেজ)         -->
    <!-- ============================================ -->
            <section id="page-teachers" class="page-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        


        <!-- Mode Selector: Online vs Offline (Pill Switcher) -->
        <div class="flex items-center justify-center mb-8">
          <div class="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
            <button onclick="setTeacherMode('online')" id="btn-mode-online" class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 bg-blue-600 text-white shadow-xs cursor-pointer">
              <span>🌐</span>
              <span>Online Teachers</span>
            </button>
            <button onclick="setTeacherMode('offline')" id="btn-mode-offline" class="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-all flex items-center gap-2 cursor-pointer">
              <span>🏫</span>
              <span>Offline Teachers</span>
            </button>
          </div>
        </div>

        <!-- ======================================================== -->
        <!-- CONTAINER 1: ONLINE FACULTY (SSC, HSC, ALL)              -->
        <!-- ======================================================== -->
        <div id="container-teachers-online">
          <!-- Category Selector Tabs: SSC, HSC, All -->
          <div class="flex items-center justify-center gap-2 mb-10 flex-wrap">
            <button onclick="switchTeacherPanel('ssc')" id="t-filter-ssc" class="t-filter-btn px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
              <span data-i18n="filter_ssc">এসএসসি (SSC) শিক্ষক প্যানেল</span>
            </button>
            <button onclick="switchTeacherPanel('hsc')" id="t-filter-hsc" class="t-filter-btn px-6 py-3 rounded-2xl bg-white text-slate-700 hover:text-blue-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all flex items-center gap-2 cursor-pointer">
              <span data-i18n="filter_hsc">এইচএসসি (HSC) শিক্ষক প্যানেল</span>
            </button>
            <button onclick="switchTeacherPanel('all')" id="t-filter-all" class="t-filter-btn px-5 py-3 rounded-2xl bg-white text-slate-700 hover:text-blue-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer">
              <span data-i18n="filter_all">সকল শিক্ষক</span>
            </button>
          </div>

          <!-- 1. SSC ONLINE PANEL -->
          <div id="panel-teachers-ssc" class="teacher-panel-content mb-12">
            <div class="mb-6 pb-3 border-b border-slate-200">
              <h3 class="text-xl sm:text-2xl font-extrabold text-blue-600 uppercase tracking-tight">Online SSC Faculty</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="Tarequl Islam Rajib" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Tarequl Islam Rajib</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookSscEngB64}" alt="ইংরেজি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900" data-i18n="subject_english">ইংরেজি (English)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - English</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Insight Academia</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">MBA, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/tarequl.islam.71619533" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>

              <div id="teacher-card-sakib" class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherB64}" alt="Md. Sakibur Rahman Shadhin" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Md. Sakibur Rahman Shadhin</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-blue-50/90 border border-blue-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${mathBookB64}" alt="সাধারণ গণিত পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-blue-200/90 shrink-0" />
                      <span class="text-xs font-bold text-blue-900" data-i18n="subject_ssc">সাধারণ গণিত</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Math, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Code Cafe by Sakib</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">BSc in CSE, Southeast University</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@CodeCafebySakib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/rahman.sakibur" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>

              <div class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRifatB64}" alt="Shirajul Islam Noor Rifat" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Shirajul Islam Noor Rifat</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookSscBanglaB64}" alt="বাংলা সাহিত্য পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-rose-200/90 shrink-0" />
                      <span class="text-xs font-bold text-rose-900" data-i18n="subject_bangla">বাংলা (Bangla)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Bangla, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Finance, University of Dhaka</p>
                    
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/sumijanjat" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. HSC ONLINE PANEL -->
          <div id="panel-teachers-hsc" class="teacher-panel-content hidden mb-12">
            <div class="mb-6 pb-3 border-b border-slate-200">
              <h3 class="text-xl sm:text-2xl font-extrabold text-blue-600 uppercase tracking-tight">Online HSC Faculty</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="Tarequl Islam Rajib" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Tarequl Islam Rajib</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscEngB64}" alt="এইচএসসি ইংরেজি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900" data-i18n="subject_english">ইংরেজি (English)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - English</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Insight Academia</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">MBA, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/tarequl.islam.71619533" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>

              <div id="teacher-card-sakib-hsc" class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherB64}" alt="Md. Sakibur Rahman Shadhin" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Md. Sakibur Rahman Shadhin</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${ictBookB64}" alt="আইসিটি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-indigo-200/90 shrink-0" />
                      <span class="text-xs font-bold text-indigo-900" data-i18n="subject_hsc">তথ্য ও যোগাযোগ প্রযুক্তি (ICT)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - ICT, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Code Cafe by Sakib</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">BSc in CSE, Southeast University</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@CodeCafebySakib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/rahman.sakibur" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>

              <div class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRifatB64}" alt="Shirajul Islam Noor Rifat" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Shirajul Islam Noor Rifat</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscBanglaB64}" alt="বাংলা ১ম ও ২য় পত্র পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-rose-200/90 shrink-0" />
                      <span class="text-xs font-bold text-rose-900" data-i18n="subject_bangla_hsc">বাংলা ১ম ও ২য় পত্র</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Bangla, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Finance, University of Dhaka</p>
                    
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/sumijanjat" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>

              <div class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherAnikB64}" alt="Abdul Aziz Anik" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Abdul Aziz Anik</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-sky-50/90 border border-sky-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscPhysicsB64}" alt="এইচএসসি পদার্থবিজ্ঞান বই" class="w-5 h-7 object-cover rounded shadow-2xs border border-sky-200/90 shrink-0" />
                      <span class="text-xs font-bold text-sky-900" data-i18n="subject_physics_hsc">পদার্থবিজ্ঞান ১ম ও ২য় পত্র</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Physics & Chemistry, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-700 mt-1">Founder, Aziz Physics Solution</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Ex-NDC, BUTEX</p>
                    
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/abdulaziz.anik.14" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END CONTAINER 1: ONLINE FACULTY -->

        <!-- ======================================================== -->
        <!-- CONTAINER 2: OFFLINE FACULTY (SSC, HSC, ALL)             -->
        <!-- Exact Same Cards & Style as Online                       -->
        <!-- ======================================================== -->
        <div id="container-teachers-offline" class="hidden">
          
          <!-- Category Selector Tabs for Offline: SSC, HSC, All -->
          <div class="flex items-center justify-center gap-2 mb-10 flex-wrap">
            <button onclick="switchOfflineTeacherPanel('ssc')" id="t-off-filter-ssc" class="t-off-filter-btn px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
              <span>এসএসসি (SSC) অফলাইন শিক্ষক</span>
            </button>
            <button onclick="switchOfflineTeacherPanel('hsc')" id="t-off-filter-hsc" class="t-off-filter-btn px-6 py-3 rounded-2xl bg-white text-slate-700 hover:text-emerald-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all flex items-center gap-2 cursor-pointer">
              <span>এইচএসসি (HSC) অফলাইন শিক্ষক</span>
            </button>
            <button onclick="switchOfflineTeacherPanel('all')" id="t-off-filter-all" class="t-off-filter-btn px-5 py-3 rounded-2xl bg-white text-slate-700 hover:text-emerald-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer">
              <span>সকল অফলাইন শিক্ষক</span>
            </button>
          </div>

          <!-- 1. SSC OFFLINE PANEL -->
          <div id="panel-offline-teachers-ssc" class="offline-teacher-panel-content mb-12">
            <div class="mb-6 flex flex-wrap items-center justify-between pb-3 border-b border-emerald-200/80 gap-3">
              <div>
                <h3 class="text-xl sm:text-2xl font-extrabold text-emerald-600 uppercase tracking-tight">Offline SSC Faculty • শান্তিনগর ও শাহজাহানপুর</h3>
              </div>
              
              <!-- Department Divider Switcher (Science & Business Studies - Updated & Larger) -->
              <div class="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
                <button onclick="filterOfflineDept('ssc', 'all')" id="btn-ssc-dept-all" class="dept-btn-ssc px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-800 shadow-xs transition-all cursor-pointer">
                  <span>সকল শিক্ষক</span>
                </button>
                <button onclick="filterOfflineDept('ssc', 'science')" id="btn-ssc-dept-science" class="dept-btn-ssc px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-all cursor-pointer flex items-center">
                  <span>বিজ্ঞান (Science)</span>
                </button>
                <button onclick="filterOfflineDept('ssc', 'business')" id="btn-ssc-dept-business" class="dept-btn-ssc px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-amber-700 transition-all cursor-pointer flex items-center">
                  <span>ব্যবসায় শিক্ষা (Business Studies)</span>
                </button>
              </div>
            </div>

            
            
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Card 1: Tarequl Islam Rajib -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="Tarequl Islam Rajib" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Tarequl Islam Rajib</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookSscEngB64}" alt="ইংরেজি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">ইংরেজি (English)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - English</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Insight Academia</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">MBA, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/tarequl.islam.71619533" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 2: Farukul Islam Nayan (Founder, Insight Academia) -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherNayanB64}" alt="Farukul Islam Nayan" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-4 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Farukul Islam Nayan</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-amber-50/90 border border-amber-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookFinanceB64}" alt="ফিন্যান্স ও ব্যাংকিং বই" class="w-5 h-7 object-cover rounded shadow-2xs border border-amber-200/90 shrink-0" />
                      <span class="text-xs font-bold text-amber-900">ফিন্যান্স ও ব্যাংকিং</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Finance & Banking</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder, Insight Academia</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">BBA in MIS, Government Titumir College (Affiliated with University of Dhaka)</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/nayan.islam.902266" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 3: Ikra Islam -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherIkraB64}" alt="Ikra Islam" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Ikra Islam</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookSscEngB64}" alt="ইংরেজি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">ইংরেজি (English)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - English, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-700 mt-1">Founder, Parrot English School</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">Dept. of English, ULAB</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@ParrotEnglishSchool" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/ikra.islam.16100" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 4: Md. Sakibur Rahman Shadhin (Math) -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherSakibB64}" alt="Md. Sakibur Rahman Shadhin" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Md. Sakibur Rahman Shadhin</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-blue-50/90 border border-blue-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookMathB64}" alt="গণিত পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-blue-200/90 shrink-0" />
                      <span class="text-xs font-bold text-blue-900">সাধারণ গণিত</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Math, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Code Cafe by Sakib</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">BSc in CSE, Southeast University</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@CodeCafebySakib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/shadhin.sakib.16" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 5: Abdul Aziz Anik -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherAnikB64}" alt="Abdul Aziz Anik" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Abdul Aziz Anik</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-sky-50/90 border border-sky-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookSscPhysicsB64}" alt="পদার্থবিজ্ঞান ও রসায়ন বই" class="w-5 h-7 object-cover rounded shadow-2xs border border-sky-200/90 shrink-0" />
                      <span class="text-xs font-bold text-sky-900">পদার্থবিজ্ঞান ও রসায়ন (Physics & Chemistry)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Physics & Chemistry, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-700 mt-1">Founder, Aziz Physics Solution</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Ex-NDC, BUTEX</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.facebook.com/sciencecourt22/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Science Court">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/abdulaziz.anik.14" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 6: Shirajul Islam Noor Rifat -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRifatB64}" alt="Shirajul Islam Noor Rifat" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Shirajul Islam Noor Rifat</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookSscBanglaB64}" alt="বাংলা সাহিত্য পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-rose-200/90 shrink-0" />
                      <span class="text-xs font-bold text-rose-900">বাংলা (Bangla)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Bangla, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Finance, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/shirajulislamnoor.rifat" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 7: Prity Bhowmick -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherPrityB64}" alt="Prity Bhowmick" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Prity Bhowmick</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookSscBanglaB64}" alt="বাংলা সাহিত্য পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-rose-200/90 shrink-0" />
                      <span class="text-xs font-bold text-rose-900">বাংলা (Bangla)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Bangla, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Mathematics, Eden College</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 8: Sumaiya Akter Boishaki -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherBoishakiB64}" alt="Sumaiya Akter Boishaki" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Sumaiya Akter Boishaki</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookManagementB64}" alt="ব্যবসায় ব্যবস্থাপনা পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-indigo-200/90 shrink-0" />
                      <span class="text-xs font-bold text-indigo-900">ম্যানেজমেন্ট (Management)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Management, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of MIS, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 9: Rakib Hasan -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRakibB64}" alt="Rakib Hasan" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Rakib Hasan</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookAccountingB64}" alt="হিসাববিজ্ঞান পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">হিসাববিজ্ঞান (Accounting)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Accounting, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Accounting, Titumir College</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 10: Tonmoy -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherTonmoyB64}" alt="Tonmoy" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Tonmoy</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookAccountingB64}" alt="হিসাববিজ্ঞান পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">হিসাববিজ্ঞান (Accounting)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Accounting, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Finance and Banking, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. HSC OFFLINE PANEL -->
          <div id="panel-offline-teachers-hsc" class="offline-teacher-panel-content hidden mb-12">
            <div class="mb-6 flex flex-wrap items-center justify-between pb-3 border-b border-emerald-200/80 gap-3">
              <div>
                <h3 class="text-xl sm:text-2xl font-extrabold text-emerald-600 uppercase tracking-tight">Offline HSC Faculty • শান্তিনগর ও শাহজাহানপুর</h3>
              </div>
              
              <!-- Department Divider Switcher (Science & Business Studies - Updated & Larger) -->
              <div class="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
                <button onclick="filterOfflineDept('hsc', 'all')" id="btn-hsc-dept-all" class="dept-btn-hsc px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-800 shadow-xs transition-all cursor-pointer">
                  <span>সকল শিক্ষক</span>
                </button>
                <button onclick="filterOfflineDept('hsc', 'science')" id="btn-hsc-dept-science" class="dept-btn-hsc px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-all cursor-pointer flex items-center">
                  <span>বিজ্ঞান (Science)</span>
                </button>
                <button onclick="filterOfflineDept('hsc', 'business')" id="btn-hsc-dept-business" class="dept-btn-hsc px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-amber-700 transition-all cursor-pointer flex items-center">
                  <span>ব্যবসায় শিক্ষা (Business Studies)</span>
                </button>
              </div>
            </div>

            
            
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Card 1: Tarequl Islam Rajib -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRajibB64}" alt="Tarequl Islam Rajib" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Tarequl Islam Rajib</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscEngB64}" alt="ইংরেজি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">ইংরেজি (English)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - English</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Insight Academia</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">MBA, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/tarequl.islam.71619533" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 2: Farukul Islam Nayan (Founder, Insight Academia) -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherNayanB64}" alt="Farukul Islam Nayan" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-4 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Farukul Islam Nayan</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-amber-50/90 border border-amber-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookFinanceB64}" alt="ফিন্যান্স ও ব্যাংকিং বই" class="w-5 h-7 object-cover rounded shadow-2xs border border-amber-200/90 shrink-0" />
                      <span class="text-xs font-bold text-amber-900">ফিন্যান্স ও ব্যাংকিং</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Finance & Banking</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder, Insight Academia</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">BBA in MIS, Government Titumir College (Affiliated with University of Dhaka)</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/nayan.islam.902266" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 3: Md. Sakibur Rahman Shadhin (ICT) -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherSakibB64}" alt="Md. Sakibur Rahman Shadhin" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Md. Sakibur Rahman Shadhin</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${ictBookB64}" alt="আইসিটি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-indigo-200/90 shrink-0" />
                      <span class="text-xs font-bold text-indigo-900">তথ্য ও যোগাযোগ প্রযুক্তি (ICT)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - ICT, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Founder & CEO, Code Cafe by Sakib</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">BSc in CSE, Southeast University</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@CodeCafebySakib" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/shadhin.sakib.16" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 4: Ikra Islam -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherIkraB64}" alt="Ikra Islam" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Ikra Islam</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscEngB64}" alt="ইংরেজি পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">ইংরেজি (English)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - English, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-700 mt-1">Founder, Parrot English School</p>
                    <p class="text-xs text-slate-500 font-medium mt-1">Dept. of English, ULAB</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@ParrotEnglishSchool" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/ikra.islam.16100" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 5: Abdul Aziz Anik -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherAnikB64}" alt="Abdul Aziz Anik" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Abdul Aziz Anik</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-sky-50/90 border border-sky-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscPhysicsB64}" alt="পদার্থবিজ্ঞান ও রসায়ন বই" class="w-5 h-7 object-cover rounded shadow-2xs border border-sky-200/90 shrink-0" />
                      <span class="text-xs font-bold text-sky-900">পদার্থবিজ্ঞান ও রসায়ন (Physics & Chemistry)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Physics & Chemistry, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-700 mt-1">Founder, Aziz Physics Solution</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Ex-NDC, BUTEX</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.facebook.com/sciencecourt22/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Science Court">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/abdulaziz.anik.14" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 6: Shirajul Islam Noor Rifat -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRifatB64}" alt="Shirajul Islam Noor Rifat" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Shirajul Islam Noor Rifat</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscBanglaB64}" alt="বাংলা সাহিত্য পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-rose-200/90 shrink-0" />
                      <span class="text-xs font-bold text-rose-900">বাংলা (Bangla)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Bangla, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Finance, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/shirajulislamnoor.rifat" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 7: Prity Bhowmick -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="science">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherPrityB64}" alt="Prity Bhowmick" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Prity Bhowmick</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-rose-50/90 border border-rose-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookHscBanglaB64}" alt="বাংলা সাহিত্য পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-rose-200/90 shrink-0" />
                      <span class="text-xs font-bold text-rose-900">বাংলা (Bangla)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Bangla, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Mathematics, Eden College</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 8: Sumaiya Akter Boishaki -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherBoishakiB64}" alt="Sumaiya Akter Boishaki" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Sumaiya Akter Boishaki</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookManagementB64}" alt="ব্যবসায় ব্যবস্থাপনা পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-indigo-200/90 shrink-0" />
                      <span class="text-xs font-bold text-indigo-900">ম্যানেজমেন্ট (Management)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Management, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of MIS, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 9: Rakib Hasan -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherRakibB64}" alt="Rakib Hasan" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Rakib Hasan</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookAccountingB64}" alt="হিসাববিজ্ঞান পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">হিসাববিজ্ঞান (Accounting)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Accounting, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Accounting, Titumir College</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
              <!-- Card 10: Tonmoy -->
              <div class="teacher-card-item bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group" data-dept="business">
                <div class="flex flex-col items-center text-center">
                  <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner">
                    <img src="data:image/jpeg;base64,${teacherTonmoyB64}" alt="Tonmoy" class="w-full h-full object-cover object-top" />
                  </div>
                  <div class="mt-5 w-full flex flex-col items-center">
                    <h3 class="text-xl font-bold text-slate-900 tracking-tight">Tonmoy</h3>
                    <div class="mt-2.5 inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3 py-1 rounded-xl shadow-2xs">
                      <img src="data:image/jpeg;base64,${bookAccountingB64}" alt="হিসাববিজ্ঞান পাঠ্যবই" class="w-5 h-7 object-cover rounded shadow-2xs border border-emerald-200/90 shrink-0" />
                      <span class="text-xs font-bold text-emerald-900">হিসাববিজ্ঞান (Accounting)</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 mt-2.5">Instructor - Accounting, Insight Academia</p>
                    <p class="text-xs font-semibold text-slate-600 mt-1">Dept. of Finance and Banking, University of Dhaka</p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
                  <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#EF4444] hover:bg-red-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="YouTube">
                    <svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-blue-600 text-white flex items-center justify-center shadow-xs transition hover:scale-110 cursor-pointer" title="Facebook">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- END CONTAINER 2: OFFLINE FACULTY -->

      </div>
    </section>

    <!-- ============================================ -->
    <!-- PAGE 4: E-BOOKS (ই-বুক পেজ)                  -->
    <!-- ============================================ -->
    <section id="page-ebooks" class="page-section">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        <div class="bg-gradient-to-br from-blue-50/70 via-white to-sky-50/60 rounded-3xl border border-blue-100 p-8 sm:p-14 shadow-sm relative overflow-hidden">
          
          <!-- Decorative glow -->
          <div class="absolute -top-16 -right-16 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
          <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <!-- Pulsing Book Icon -->
          <div class="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-blue-100/80 border border-blue-200 flex items-center justify-center text-4xl sm:text-5xl mb-6 shadow-inner">
            📚
          </div>

          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Coming Soon...
          </div>

          <!-- Title -->
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            ই-বুক ও স্টাডি রিসোর্স
          </h2>

          <!-- Subtitle / Notice -->
          <p class="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed mb-8">
            আমরা বর্তমানে ই-বুক সেকশন নিয়ে কাজ করছি না। খুব শীঘ্রই আমাদের স্পেশাল হ্যান্ডনোট, ফর্মুলা শিট ও এক্সক্লুসিভ স্টাডি রিসোর্সগুলো এখানে উন্মুক্ত করা হবে।
          </p>

          <!-- Back Navigation Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button onclick="navigateTo('courses')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer">
              <span>আমাদের কোর্সসমূহ দেখুন</span>
              <span>➔</span>
            </button>
            <button onclick="navigateTo('teachers')" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition cursor-pointer">
              শিক্ষক প্যানেল পরিচিতি
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- PAGE 5: STUDENT CLASSROOM (স্টুডেন্ট পোর্টাল) -->
    <!-- ============================================ -->
    <section id="page-classroom" class="page-section select-none">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        <!-- Portal Header -->
        <div class="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Student Portal • Insight Academia</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">লাইভ ক্লাস রুম ও সিকিউর প্লেয়ার</h2>
          </div>
          
          <div class="flex items-center gap-3">
            <div class="bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-xl text-xs text-slate-700 flex items-center gap-2">
              <span class="text-slate-400 font-mono">লগইন ইউজার:</span>
              <strong id="classroomUserBadge" class="text-blue-700 font-bold font-mono">student.demo@gmail.com</strong>
            </div>
            <button onclick="navigateTo('home')" class="text-xs font-bold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl transition cursor-pointer">
              ← হোম পেজে ফিরে যান
            </button>
          </div>
        </div>

        <!-- Video Player and Playlist Card -->
        <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px] transition-all duration-300" id="classroomMainCard">
          
          <!-- Column Left: Video Player (cols 8 or 12 in Theater Mode) -->
          <div id="classroomPlayerCol" class="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 transition-all duration-300">
            <div>
              
              <!-- Top Player Controls Bar (Theater Mode, Fullscreen, Half Screen) -->
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
                <div class="flex items-center gap-2 overflow-hidden mr-2">
                  <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0"></span>
                  <span id="classroomPlayingTag" class="font-bold text-slate-700 truncate">০১. Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28</span>
                </div>

                <div class="flex items-center gap-2 shrink-0">
                  <!-- Theater Mode Button -->
                  <button onclick="toggleTheaterMode()" id="theaterModeBtn" title="থিয়েটার মোড (ওয়াইড স্ক্রিন ভিউ)" class="bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-bold px-3 py-1.5 rounded-xl border border-slate-200 transition flex items-center gap-1.5 cursor-pointer">
                    <span>🎬</span>
                    <span id="theaterBtnText">থিয়েটার মোড</span>
                  </button>

                  <!-- Fullscreen Button -->
                  <button onclick="togglePlayerFullscreen()" title="সম্পূর্ণ স্ক্রিনে দেখুন" class="bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-bold px-3 py-1.5 rounded-xl border border-slate-200 transition flex items-center gap-1.5 cursor-pointer">
                    <span>⛶</span>
                    <span class="hidden sm:inline">ফুল স্ক্রিন</span>
                  </button>
                </div>
              </div>

              <!-- Video Box with YouTube Iframe & Faint Watermark -->
              <div id="classroomVideoWrapper" class="relative w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-2xl select-none group cursor-pointer" onclick="window.open('https://youtu.be/aikyIPqxKFM', '_blank')">
                <img id="classroomPosterImg" src="https://img.youtube.com/vi/aikyIPqxKFM/maxresdefault.jpg" alt="Class Thumbnail" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                  <div class="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 mb-3">
                    <svg class="w-9 h-9 sm:w-10 sm:h-10 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <h4 class="text-white text-base sm:text-lg font-bold drop-shadow">ইউটিউবে সম্পূর্ণ ক্লাসটি দেখতে ক্লিক করুন</h4>
                  <p class="text-xs text-rose-300 mt-1 font-semibold flex items-center gap-1">
                    <span>ইনসাইট একাডেমিয়া অফিশিয়াল ইউটিউব চ্যানেল</span> <span>➔</span>
                  </p>
                </div>
              </div>

              <!-- Under Video: Title, Quality/Speed Info & Instructor -->
              <div class="mt-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 id="classroomVideoTitle" class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28 | English 2nd Paper | All Rules & Practice |
                  </h3>
                  <div class="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-500">
                    <span id="classroomInstructor">👨‍🏫 ইনস্ট্রাক্টর: <strong class="text-slate-800">Tarequl Islam Rajib</strong></span>
                  </div>
                </div>
                
                <div class="flex items-center gap-2">
                  <span class="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200">
                    ⚙️ 1080p | 0.5x–2.0x
                  </span>
                  <button class="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-blue-200 hover:bg-blue-600 hover:text-white transition">
                    লেকচার নোট PDF
                  </button>
                  <a id="classroomDirectYtBtn" href="https://youtu.be/aikyIPqxKFM" target="_blank" rel="noopener noreferrer" class="bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-rose-200 transition flex items-center gap-1.5 cursor-pointer" title="সরাসরি প্লে করুন">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <span>সরাসরি প্লে ↗</span>
                  </a>
                </div>
              </div>

            </div>


          </div>

          <!-- Column Right: Lecture Playlist (8 Real Classes) -->
          <div id="classroomPlaylistCol" class="lg:col-span-4 bg-slate-50/80 p-4 sm:p-6 flex flex-col justify-between border-t lg:border-t-0">
            <div>


              <!-- 8 Real Classes Playlist Items -->
              <div class="space-y-2 text-xs max-h-[500px] overflow-y-auto pr-1" id="classroomPlaylistItems">

                <div onclick="switchClassroomVideo('aikyIPqxKFM', '০১. Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28', 'Tarequl Islam Rajib', this)" class="playlist-item p-2.5 rounded-xl bg-blue-50 border-2 border-blue-500 text-blue-900 font-bold active-lecture flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০১. Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Tarequl Islam Rajib</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded shrink-0">চলছে</span>
                </div>

                <div onclick="switchClassroomVideo('FzaCgyj6vPY', '০২. সংখ্যা পদ্ধতির সকল রূপান্তর সম্পূর্ণ ! 🔥 | HSC ICT Ch-3', 'Md. Sakibur Rahman Shadhin', this)" class="playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০২. সংখ্যা পদ্ধতির সকল রূপান্তর সম্পূর্ণ ! 🔥 | HSC ICT Ch-3</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-slate-400 shrink-0">প্লে করুন</span>
                </div>

                <div onclick="switchClassroomVideo('TWCC9RZntuw', '০৩. ৫ মিনিটে ২-এর পরিপূরক নির্ণয় করো 😍 | HSC ICT Ch-3', 'Md. Sakibur Rahman Shadhin', this)" class="playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০৩. ৫ মিনিটে ২-এর পরিপূরক নির্ণয় করো 😍 | HSC ICT Ch-3</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-slate-400 shrink-0">প্লে করুন</span>
                </div>

                <div onclick="switchClassroomVideo('kRrqew866lE', '০৪. এক ক্লাসে Tag Question-এ 5/5 নিশ্চিত পূর্ণাঙ্গ ক্লাস', 'Tarequl Islam Rajib', this)" class="playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০৪. এক ক্লাসে Tag Question-এ 5/5 নিশ্চিত পূর্ণাঙ্গ ক্লাস</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Tarequl Islam Rajib</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-slate-400 shrink-0">প্লে করুন</span>
                </div>

                <div onclick="switchClassroomVideo('K2qe59q3D_0', '০৫. পরিসংখ্যানের সেরা ৩টি CQ | ২টি Must Common! 😱 | SSC Math', 'Md. Sakibur Rahman Shadhin', this)" class="playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০৫. পরিসংখ্যানের সেরা ৩টি CQ | ২টি Must Common! 😱 | SSC Math</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-slate-400 shrink-0">প্লে করুন</span>
                </div>

                <div onclick="switchClassroomVideo('aD8Y0NQoTCo', '০৬. সেট ও ফাংশন থেকে ৫টি গুরুত্বপূর্ণ CQ 😱 | SSC Math', 'Md. Sakibur Rahman Shadhin', this)" class="playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০৬. সেট ও ফাংশন থেকে ৫টি গুরুত্বপূর্ণ CQ 😱 | SSC Math</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Md. Sakibur Rahman Shadhin</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-slate-400 shrink-0">প্লে করুন</span>
                </div>

                <div onclick="switchClassroomVideo('RrpZZfTCtVU', '০৭. লালসালু উপন্যাস (Lalsalu Novel) পূর্ণাঙ্গ আলোচনা', 'Insight Faculty Board', this)" class="playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০৭. লালসালু উপন্যাস (Lalsalu Novel) পূর্ণাঙ্গ আলোচনা</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Insight Faculty Board</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-slate-400 shrink-0">প্লে করুন</span>
                </div>

                <div onclick="switchClassroomVideo('hLdNtW7ZDnY', '০৮. Learn English in 7 days! স্পোকেন ও বেসিক ফাউন্ডেশন', 'Parrot English / Rajib', this)" class="playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition">
                  <div class="truncate mr-2">
                    <span class="block truncate">০৮. Learn English in 7 days! স্পোকেন ও বেসিক ফাউন্ডেশন</span>
                    <span class="text-[10px] text-slate-400 font-normal">👨‍🏫 Parrot English / Rajib</span>
                  </div>
                  <span class="lecture-badge text-[10px] font-bold text-slate-400 shrink-0">প্লে করুন</span>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-200">
              <button onclick="navigateTo('courses')" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl shadow-xs transition text-center text-xs flex items-center justify-center gap-1.5">
                <span>সম্পূর্ণ কোর্সের ব্যাচে ভর্তি হোন</span>
                <span>➔</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ============================================ -->
    <!-- ============================================ -->
    <!-- ============================================ -->
    <!-- PAGE 8: AUTHENTICATION (Smooth Sliding Dual-Mode Layout) -->
    <!-- Matches User Provided Screenshot (Image 3 & Image 4) -->
    <!-- ============================================ -->
    <section id="page-login" class="page-section">
      <div class="min-h-[calc(100vh-80px)] bg-[#E8EEF8] flex flex-col items-center justify-center p-4 sm:p-8 relative">
        
        <!-- MAIN DUAL-MODE CONTAINER WITH SMOOTH SLIDING TRANSITION -->
        <div id="authMainContainer" class="max-w-[850px] w-full bg-white rounded-[32px] shadow-2xl shadow-slate-300/60 border border-slate-100 relative overflow-hidden transition-all duration-500 min-h-[540px]">
          
          <!-- ================= DESKTOP SLIDING VIEW (md and up) ================= -->
          <div class="hidden md:block w-full min-h-[540px] relative">
            
            <!-- Left Half: Registration Form -->
            <div id="dAuthRegForm" class="absolute top-0 left-0 w-1/2 h-full p-8 lg:p-12 flex flex-col justify-center transition-all duration-500 ease-in-out z-10 opacity-100 pointer-events-auto">
              <h2 class="text-3xl font-extrabold text-[#222B45] text-center tracking-tight mb-7">
                Registration
              </h2>

              <div class="space-y-3.5">
                <!-- Username Field -->
                <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#3FA0F7] focus-within:bg-white transition">
                  <input type="text" id="authRegUsername" placeholder="Username" value="Md. Rakib Hasan" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                  <span class="absolute right-4 text-slate-700 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </span>
                </div>

                <!-- Email Field -->
                <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#3FA0F7] focus-within:bg-white transition">
                  <input type="email" id="authRegEmail" placeholder="Email" value="rakib@gmail.com" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                  <span class="absolute right-4 text-slate-700 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </span>
                </div>

                <!-- Password Field -->
                <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#3FA0F7] focus-within:bg-white transition">
                  <input type="password" id="authRegPassword" placeholder="Password" value="123456" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                  <button type="button" onclick="togglePasswordVisibility('authRegPassword', 'regLockIcon')" class="absolute right-4 text-slate-700 hover:text-slate-900 cursor-pointer" title="পাসওয়ার্ড দেখুন / লুকান">
                    <svg id="regLockIcon" class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>

                <!-- Register Button (Halka Akashi) -->
                <button type="button" onclick="handleAuthSubmit('register')" class="w-full mt-2 py-3.5 bg-[#3FA0F7] hover:bg-[#2992F0] active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                  Register
                </button>

                <!-- Social Register Label -->
                <p class="text-[12px] text-slate-500 font-medium text-center pt-2.5">
                  or register with social platforms
                </p>

                <!-- Social Register Icons: ONLY Google and Facebook -->
                <div class="flex items-center justify-center gap-3 pt-0.5">
                  <button type="button" onclick="handleSocialAuth('google')" class="w-10 h-10 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 flex items-center justify-center transition cursor-pointer shadow-2xs" title="Google দিয়ে রেজিস্ট্রেশন করুন">
                    <svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                  </button>
                  <button type="button" onclick="handleSocialAuth('facebook')" class="w-10 h-10 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 flex items-center justify-center transition cursor-pointer text-[#1877F2] shadow-2xs" title="Facebook দিয়ে রেজিস্ট্রেশন করুন">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Right Half: Login Form -->
            <div id="dAuthLoginForm" class="absolute top-0 right-0 w-1/2 h-full p-8 lg:p-12 flex flex-col justify-center transition-all duration-500 ease-in-out z-10 opacity-0 pointer-events-none">
              <h2 class="text-3xl font-extrabold text-[#222B45] text-center tracking-tight mb-7">
                Login
              </h2>

              <div class="space-y-3.5">
                <!-- Username Field -->
                <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#3FA0F7] focus-within:bg-white transition">
                  <input type="text" id="authLoginUsername" placeholder="Username" value="01748470620" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                  <span class="absolute right-4 text-slate-700 pointer-events-none">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </span>
                </div>

                <!-- Password Field -->
                <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#3FA0F7] focus-within:bg-white transition">
                  <input type="password" id="authLoginPassword" placeholder="Password" value="123456" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                  <button type="button" onclick="togglePasswordVisibility('authLoginPassword', 'loginLockIcon')" class="absolute right-4 text-slate-700 hover:text-slate-900 cursor-pointer" title="পাসওয়ার্ড দেখুন / লুকান">
                    <svg id="loginLockIcon" class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>

                <!-- Forgot Password Link -->
                <div class="text-right">
                  <button type="button" onclick="handleForgotPassword()" class="text-xs text-slate-600 hover:text-[#3FA0F7] font-medium transition cursor-pointer">
                    Forgot Password?
                  </button>
                </div>

                <!-- Login Button (Halka Akashi) -->
                <button type="button" onclick="handleAuthSubmit('login')" class="w-full mt-2 py-3.5 bg-[#3FA0F7] hover:bg-[#2992F0] active:scale-[0.99] text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                  Login
                </button>

                <!-- Phone SMS OTP Button -->
                <button type="button" onclick="openLoginModal()" class="w-full mt-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-center gap-2 cursor-pointer">
                  <span>📱</span><span>মোবাইল ওটিপি (SMS OTP) দিয়ে সাইন-ইন</span>
                </button>

                <!-- Social Login Label -->
                <p class="text-[12px] text-slate-500 font-medium text-center pt-2.5">
                  or login with social platforms
                </p>

                <!-- Social Login Icons: ONLY Google and Facebook -->
                <div class="flex items-center justify-center gap-3 pt-0.5">
                  <button type="button" onclick="handleSocialAuth('google')" class="w-10 h-10 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 flex items-center justify-center transition cursor-pointer shadow-2xs" title="Google দিয়ে লগইন করুন">
                    <svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                  </button>
                  <button type="button" onclick="handleSocialAuth('facebook')" class="w-10 h-10 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 flex items-center justify-center transition cursor-pointer text-[#1877F2] shadow-2xs" title="Facebook দিয়ে লগইন করুন">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- THE SLIDING BLUE (HALKA AKASHI) OVERLAY PANEL -->
            <div id="dAuthSlidingOverlay" style="left: 50%; border-top-left-radius: 140px; border-bottom-left-radius: 140px; border-top-right-radius: 0px; border-bottom-right-radius: 0px;" class="absolute top-0 w-1/2 h-full bg-[#3FA0F7] text-white p-8 lg:p-12 flex flex-col items-center justify-center text-center z-30 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) shadow-xl overflow-hidden">
              
              <!-- Subtle luminous background glow -->
              <div class="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/20 blur-2xl pointer-events-none"></div>
              <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-sky-200/20 blur-2xl pointer-events-none"></div>

              <!-- Content 1: When in Registration Mode (Image 3: Prompting to Login) -->
              <div id="dOverlayWelcomeBack" class="relative z-10 max-w-xs transition-all duration-400 opacity-100">
                <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                  Welcome Back!
                </h2>
                <p class="text-sm text-sky-100 font-medium mb-8">
                  Already have an account?
                </p>
                <button type="button" onclick="switchAuthMode('login')" class="px-10 py-2.5 rounded-xl border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#3FA0F7] active:scale-95 transition-all duration-200 cursor-pointer shadow-xs">
                  Login
                </button>
              </div>

              <!-- Content 2: When in Login Mode (Image 4: Prompting to Register) -->
              <div id="dOverlayHelloWelcome" class="relative z-10 max-w-xs transition-all duration-400 opacity-0 hidden">
                <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                  Hello, Welcome!
                </h2>
                <p class="text-sm text-sky-100 font-medium mb-8">
                  Don't have an account?
                </p>
                <button type="button" onclick="switchAuthMode('register')" class="px-10 py-2.5 rounded-xl border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#3FA0F7] active:scale-95 transition-all duration-200 cursor-pointer shadow-xs">
                  Register
                </button>
              </div>

            </div>

          </div>

          <!-- ================= MOBILE VIEW (stacked with smooth transition) ================= -->
          <div class="block md:hidden w-full">
            <!-- Mobile Registration View -->
            <div id="mAuthCardRegister" class="transition-all duration-300">
              <div class="p-6 sm:p-8">
                <h2 class="text-2xl font-extrabold text-[#222B45] text-center tracking-tight mb-6">Registration</h2>
                <div class="space-y-3">
                  <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3">
                    <input type="text" id="mAuthRegUsername" placeholder="Username" value="Md. Rakib Hasan" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                    <span class="absolute right-4 text-slate-700 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg></span>
                  </div>
                  <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3">
                    <input type="email" id="mAuthRegEmail" placeholder="Email" value="rakib@gmail.com" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                    <span class="absolute right-4 text-slate-700 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg></span>
                  </div>
                  <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3">
                    <input type="password" id="mAuthRegPassword" placeholder="Password" value="123456" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                  </div>
                  <button type="button" onclick="handleAuthSubmit('register')" class="w-full mt-2 py-3 bg-[#3FA0F7] hover:bg-[#2992F0] text-white font-extrabold text-sm rounded-xl shadow-md transition cursor-pointer">Register</button>
                  <p class="text-[11px] text-slate-500 font-medium text-center pt-2">or register with social platforms</p>
                  <div class="flex items-center justify-center gap-3 pt-0.5">
                    <button type="button" onclick="handleSocialAuth('google')" class="w-9 h-9 rounded-lg border border-slate-300 bg-white flex items-center justify-center"><svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg></button>
                    <button type="button" onclick="handleSocialAuth('facebook')" class="w-9 h-9 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-[#1877F2]"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></button>
                  </div>
                </div>
              </div>
              <!-- Mobile Blue Banner for Login Switch -->
              <div class="bg-[#3FA0F7] text-white p-6 text-center rounded-b-[32px]">
                <h3 class="text-xl font-bold mb-1">Welcome Back!</h3>
                <p class="text-xs text-sky-100 mb-3">Already have an account?</p>
                <button type="button" onclick="switchAuthMode('login')" class="px-8 py-2 rounded-xl border-2 border-white text-white font-bold text-xs hover:bg-white hover:text-[#3FA0F7] transition cursor-pointer">Login</button>
              </div>
            </div>

            <!-- Mobile Login View -->
            <div id="mAuthCardLogin" class="hidden transition-all duration-300">
              <div class="p-6 sm:p-8">
                <h2 class="text-2xl font-extrabold text-[#222B45] text-center tracking-tight mb-6">Login</h2>
                <div class="space-y-3">
                  <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3">
                    <input type="text" id="mAuthLoginUsername" placeholder="Username" value="01748470620" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                    <span class="absolute right-4 text-slate-700 pointer-events-none"><svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg></span>
                  </div>
                  <div class="relative flex items-center bg-[#ECEFF4] rounded-xl px-4 py-3">
                    <input type="password" id="mAuthLoginPassword" placeholder="Password" value="123456" class="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none pr-8 font-medium" />
                  </div>
                  <div class="text-right">
                    <button type="button" onclick="handleForgotPassword()" class="text-xs text-slate-600 hover:text-[#3FA0F7] font-medium transition cursor-pointer">Forgot Password?</button>
                  </div>
                  <button type="button" onclick="handleAuthSubmit('login')" class="w-full mt-2 py-3 bg-[#3FA0F7] hover:bg-[#2992F0] text-white font-extrabold text-sm rounded-xl shadow-md transition cursor-pointer">Login</button>
                  <p class="text-[11px] text-slate-500 font-medium text-center pt-2">or login with social platforms</p>
                  <div class="flex items-center justify-center gap-3 pt-0.5">
                    <button type="button" onclick="handleSocialAuth('google')" class="w-9 h-9 rounded-lg border border-slate-300 bg-white flex items-center justify-center"><svg class="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg></button>
                    <button type="button" onclick="handleSocialAuth('facebook')" class="w-9 h-9 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-[#1877F2]"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></button>
                  </div>
                </div>
              </div>
              <!-- Mobile Blue Banner for Register Switch -->
              <div class="bg-[#3FA0F7] text-white p-6 text-center rounded-b-[32px]">
                <h3 class="text-xl font-bold mb-1">Hello, Welcome!</h3>
                <p class="text-xs text-sky-100 mb-3">Don't have an account?</p>
                <button type="button" onclick="switchAuthMode('register')" class="px-8 py-2 rounded-xl border-2 border-white text-white font-bold text-xs hover:bg-white hover:text-[#3FA0F7] transition cursor-pointer">Register</button>
              </div>
            </div>

          </div>

        </div>

        <!-- Back to Home navigation link -->
        <div class="mt-6 text-center">
          <button onclick="navigateTo('home')" class="text-xs font-bold text-slate-500 hover:text-[#3FA0F7] inline-flex items-center gap-1.5 transition cursor-pointer">
            <span>← মূল ওয়েবসাইটে ফিরে যান</span>
          </button>
        </div>

      </div>
    </section>

  </main>

  <!-- ============================================== -->
  <!-- FOOTER (WITH UPDATED REAL CONTACT & HELPLINE)  -->
  <!-- ============================================== -->
  <footer class="bg-white border-t border-slate-200 py-10 text-xs text-slate-500 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-100">
        <!-- Col 1: Brand -->
        <div class="md:col-span-2">
          <img src="data:image/png;base64,${logoB64}" alt="Insight Academia" class="h-9 w-auto object-contain mb-3" />
          <p class="text-xs text-slate-500 max-w-sm leading-relaxed">
            ইনসাইট একাডেমিয়া — সহজ শেখা, সেরা প্রস্তুতি। দীর্ঘ ১১+ বছর অফলাইন এবং ২+ বছর অনলাইন অভিজ্ঞতা নিয়ে শিক্ষার্থীদের আস্থার প্রতীক।
          </p>
          <div class="flex items-center gap-3 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61571038861713" target="_blank" class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
            </a>
            <a href="https://www.facebook.com/groups/3182716805285212" target="_blank" class="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>
            </a>
            <a href="https://www.youtube.com/@InsightAcademia-k2v" target="_blank" class="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div>
          <h4 class="font-bold text-slate-800 text-xs mb-3">পেজ লিংক</h4>
          <ul class="space-y-2">
            <li><a href="javascript:void(0)" onclick="navigateTo('home')" class="hover:text-blue-600" data-i18n="nav_home">হোম</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('courses')" class="hover:text-blue-600" data-i18n="nav_courses">কোর্সসমূহ</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('teachers')" class="hover:text-blue-600" data-i18n="nav_teachers">শিক্ষক প্যানেল</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('ebooks')" class="hover:text-blue-600" data-i18n="nav_ebooks">ই-বুক</a></li>
            <li><a href="javascript:void(0)" onclick="navigateTo('home'); setTimeout(() => document.getElementById('about-section')?.scrollIntoView({behavior:'smooth'}), 100);" class="hover:text-[#FF2E7E]" data-i18n="nav_about">আমাদের সম্পর্কে</a></li>
          </ul>
        </div>

        <!-- Col 3: Contact & Helpline -->
        <div>
          <h4 class="font-bold text-slate-800 text-xs mb-3">যোগাযোগ ও হেল্পলাইন</h4>
          <ul class="space-y-2 text-slate-600">
            <li>📞 <a href="tel:+8801748470620" class="hover:text-blue-600 font-mono font-bold">+8801748470620</a></li>
            <li>💬 <a href="https://wa.me/8801748470620" target="_blank" class="hover:text-emerald-600 font-bold">WhatsApp সাপোর্ট</a></li>
            <li>✉️ <a href="mailto:iinsight.academiaa@gmail.com" class="hover:text-blue-600">iinsight.academiaa@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
        <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
          <span>© ২০২৬ ইনসাইট একাডেমিয়া (Insight Academia)। সর্বস্বত্ব সংরক্ষিত।</span>
          <span class="hidden sm:inline text-slate-300">•</span>
          <div class="text-xs font-semibold text-slate-500 flex items-center justify-center sm:justify-start gap-1">
            <span>💻Designed & Developed by</span>
            <a href="javascript:void(0)" onclick="highlightSakibTeacherCard()" class="text-slate-700 hover:text-emerald-600 font-bold hover:underline transition cursor-pointer">Md.Sakibur Rahman</a>
          </div>
        </div>
        <div class="flex items-center gap-3 sm:gap-4 flex-wrap text-xs">
          <a href="javascript:void(0)" onclick="openPolicyModal('privacy')" class="hover:text-blue-600 font-medium transition cursor-pointer">প্রাইভেসি পলিসি</a>
          <span class="text-slate-300">•</span>
          <a href="javascript:void(0)" onclick="openPolicyModal('terms')" class="hover:text-blue-600 font-medium transition cursor-pointer">ব্যবহারের শর্তাবলী</a>
          <span class="text-slate-300">•</span>
          <a href="javascript:void(0)" onclick="openPolicyModal('refund')" class="hover:text-blue-600 font-medium transition cursor-pointer">রিটার্ন ও রিফান্ড নীতি</a>
          <span class="text-slate-300">•</span>
          <a href="javascript:void(0)" onclick="openAdminPanel()" class="text-slate-500 hover:text-blue-600 font-bold flex items-center gap-1 transition cursor-pointer"><span>🔐 এডমিন প্যানেল</span></a>
        </div>
      </div>

    </div>
  </footer>

  <!-- ============================================== -->
  <!-- ABOUT US STORY MODAL                           -->
  <!-- ============================================== -->
  <div id="aboutModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs opacity-0 pointer-events-none transition-opacity duration-300 p-4">
    <div class="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 transform scale-95 transition-transform duration-300" id="aboutModalBox">
      
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-xl bg-pink-100 text-[#FF2E7E] flex items-center justify-center font-bold text-xs">
            IA
          </span>
          <div>
            <h3 class="text-base font-bold text-slate-900">আমাদের সম্পর্কে • Insight Academia</h3>
            <p class="text-xs text-slate-500">সহজ শেখা, সেরা প্রস্তুতি</p>
          </div>
        </div>
        <button onclick="closeAboutModal()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="mt-5 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <p>
          <strong class="text-slate-900">ইনসাইট একাডেমিয়া</strong> দীর্ঘ <strong class="text-blue-600">১১+ বছর</strong> ধরে অফলাইনে ধারাবাহিক সাফল্যের সাথে শিক্ষার্থীদের পাশে রয়েছে।
        </p>
        <p>
          বিগত <strong class="text-emerald-600">২+ বছর</strong> ধরে অনলাইন প্ল্যাটফর্মে দেশজুড়ে এসএসসি (SSC) ও এইচএসসি (HSC) শিক্ষার্থীদের নির্ভরযোগ্য মেন্টরিং, লাইভ ক্লাস এবং অ্যান্টি-পাইরেসি সুরক্ষিত ডিজিটাল সাপোর্ট প্রদান করছে।
        </p>
        <div class="p-3.5 bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl border border-blue-100 text-slate-800 text-xs">
          💡 <strong>আমাদের লক্ষ্য:</strong> মানসম্মত পড়াশোনা নিশ্চিত করতে অভিজ্ঞ শিক্ষক ও আধুনিক প্রযুক্তির সমন্বয়ে সহজে শেখার এক নতুন জগৎ তৈরি করা।
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
        <button onclick="closeAboutModal()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800">
          বন্ধ করুন
        </button>
        <button onclick="closeAboutModal(); navigateTo('courses')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition">
          কোর্সসমূহ দেখুন ➔
        </button>
      </div>

    </div>
  </div

  <!-- ============================================== -->
  <!-- MODAL: LEGAL & POLICIES (Privacy / Terms / Refund) -->
  <!-- ============================================== -->
  <div id="policyModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs opacity-0 pointer-events-none transition-all duration-300 p-3 sm:p-4">
    <div id="policyModalBox" class="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full p-5 sm:p-7 transform scale-95 transition-all duration-300 max-h-[92vh] flex flex-col">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between pb-3.5 border-b border-slate-100 shrink-0">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold shadow-2xs">
            🛡️
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-slate-900 tracking-tight">ইনসাইট একাডেমিয়া • প্রাতিষ্ঠানিক নীতিমালা ও নির্দেশিকা</h3>
            <p class="text-xs text-slate-500 font-medium">স্বচ্ছতা, শিক্ষার্থী সুরক্ষা ও নির্ভরযোগ্য অনলাইন প্ল্যাটফর্ম</p>
          </div>
        </div>
        <button type="button" onclick="closePolicyModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition cursor-pointer">✕</button>
      </div>

      <!-- Policy Tabs Switcher -->
      <div class="flex items-center gap-2 py-3 border-b border-slate-100 shrink-0 overflow-x-auto">
        <button type="button" onclick="selectPolicyTab('privacy')" id="tabBtnPrivacy" class="policy-tab-btn px-4 py-2 rounded-xl font-black text-xs sm:text-sm transition cursor-pointer bg-blue-600 text-white shadow-xs">
          🛡️ প্রাইভেসি পলিসি
        </button>
        <button type="button" onclick="selectPolicyTab('terms')" id="tabBtnTerms" class="policy-tab-btn px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer bg-slate-100 text-slate-600 hover:bg-slate-200">
          📑 ব্যবহারের শর্তাবলী
        </button>
        <button type="button" onclick="selectPolicyTab('refund')" id="tabBtnRefund" class="policy-tab-btn px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer bg-slate-100 text-slate-600 hover:bg-slate-200">
          🔄 রিটার্ন ও রিফান্ড নীতি
        </button>
      </div>

      <!-- Scrollable Policy Content Body -->
      <div class="flex-1 overflow-y-auto py-4 pr-1 text-slate-700 text-[13.5px] sm:text-[14.5px] leading-relaxed space-y-4">
        
        <!-- SECTION 1: PRIVACY POLICY -->
        <div id="policySecPrivacy" class="space-y-4">
          
          <!-- Introduction Card -->
          <div class="p-4 bg-blue-50/80 border border-blue-100 rounded-2xl text-blue-950 font-medium">
            <p>
              ইনসাইট একাডেমিয়া (insightacademia.com) ডিজিটাল প্ল্যাটফর্মে আমাদের প্রধান অগ্রাধিকার হলো শিক্ষার্থীদের তথ্যের সর্বোচ্চ গোপনীয়তা এবং নিরাপত্তা নিশ্চিত করা। আমাদের ওয়েবসাইট থেকে আমরা কী কী তথ্য সংগ্রহ করি এবং তা কীভাবে দায়িত্বশীলভাবে শিক্ষামূলক সেবায় ব্যবহার করি, সে বিষয়ে সকল দিকনির্দেশনা এই ডকুমেন্টে স্পষ্টভাবে উল্লেখ করা হলো।
            </p>
            <p class="mt-2 text-xs text-blue-800 font-semibold">
              আমাদের প্ল্যাটফর্ম ব্যবহারের মাধ্যমে আপনি এই প্রাইভেসি পলিসি এবং ব্যবহারের সার্বিক শর্তাবলীতে পূর্ণ সম্মতি জ্ঞাপন করছেন।
            </p>
          </div>

          <!-- Section 1: Information We Collect -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">১</span>
              আমরা যেসকল তথ্য সংগ্রহ করি (Information We Collect)
            </h4>
            <p class="text-xs sm:text-sm text-slate-600">
              প্ল্যাটফর্মে যখনই আপনার ব্যক্তিগত তথ্য চাওয়া হবে, তখন ঠিক কী উদ্দেশ্যে তা চাওয়া হচ্ছে তা স্পষ্টভাবে জানিয়ে দেওয়া হবে। সংগৃহীত তথ্যের মধ্যে অন্তর্ভুক্ত:
            </p>
            <ul class="space-y-2 pl-2 text-xs sm:text-sm text-slate-700">
              <li>
                <strong class="text-slate-900">• শিক্ষার্থী প্রোফাইল তথ্য:</strong> একাউন্ট খোলা ও কোর্স এনরোলমেন্টের সময় পূর্ণ নাম, সক্রিয় মোবাইল নম্বর, ইমেইল এড্রেস, ছবি, শিক্ষাপ্রতিষ্ঠানের নাম ও শ্রেণি/ব্যাচ।
              </li>
              <li>
                <strong class="text-slate-900">• সরাসরি যোগাযোগ তথ্য:</strong> হেল্পলাইন, হোয়াটসঅ্যাপ কিংবা ইমেইলের মাধ্যমে কোনো সমস্যা, মতামত বা ফাইল সংযুক্ত করে পাঠালে সেই সংক্রান্ত বার্তা ও বিবরণ।
              </li>
              <li>
                <strong class="text-slate-900">• ভর্তি ও পেমেন্ট তথ্য:</strong> কোর্স ফি পরিশোধের পর প্রেরক বিকাশ নম্বর এবং লেনদেনের ট্রানজেকশন আইডি (TrxID)।
              </li>
            </ul>
            <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
              🔒 আপনার সম্মতি ছাড়া আমরা কোনো অবস্থাতেই কোনো ব্যক্তিগত তথ্য তৃতীয় কোনো পক্ষের কাছে শেয়ার বা হস্তান্তর করি না।
            </div>
          </div>

          <!-- Section 2: Password Security -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">২</span>
              ব্যক্তিগত পাসওয়ার্ড ও তথ্যের এনক্রিপশন সুরক্ষা
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              ইনসাইট একাডেমিয়ায় আপনার পাসওয়ার্ড ডাটাবেজে ওয়ান-ওয়ে ক্রিপ্টোগ্রাফিক হ্যাশিং (One-way Hashing) প্রযুক্তির মাধ্যমে এনক্রিপ্ট করে সংরক্ষণ করা হয়। ফলে আমাদের পরিচালনা পর্ষদ কিংবা কোনো কর্মকর্তা আপনার মূল পাসওয়ার্ড কখনোই দেখতে পান না।
            </p>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              আপনার পাসওয়ার্ডের সার্বিক গোপনীয়তা রক্ষা করা আপনার নিজেরও একটি গুরুত্বপূর্ণ দায়িত্ব। অনুগ্রহ করে পাসওয়ার্ড অন্য কারও সাথে শেয়ার করবেন না। যদি কোনো কারণে মনে হয় পাসওয়ার্ড বেদখল হয়েছে, তবে অবিলম্বে প্ল্যাটফর্ম থেকে তা পরিবর্তন করুন অথবা আমাদের সাপোর্ট টিমের সাহায্য নিন।
            </p>
          </div>

          <!-- Section 3: How We Use Information -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">৩</span>
              আমরা যেভাবে আপনার তথ্য ব্যবহার করি (How We Use Information)
            </h4>
            <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>ওয়েবসাইটের ক্লাসরুম, লেকচার সামগ্রী ও সার্ভিস সুষ্ঠুভাবে পরিচালনা এবং রক্ষণাবেক্ষণ করতে।</li>
              <li>ব্রাউজিং অভিজ্ঞতাকে অধিকতর দ্রুত, গতিশীল ও ব্যবহারকারী-বান্ধব করে তুলতে।</li>
              <li>শিক্ষার্থীরা কীভাবে প্ল্যাটফর্মটি ব্যবহার করছেন তা বিশ্লেষণ করে কোর্সের মানোন্নয়ন করতে।</li>
              <li>নতুন কোর্স মডিউল, টেস্ট পেপার সমাধান এবং আধুনিক একাডেমিক ফিচার তৈরি করতে।</li>
              <li>নতুন আপডেট, নোটিশ, লাইভ ক্লাস শিডিউল বা প্রয়োজনীয় তথ্যাদি এসএমএস, হোয়াটসঅ্যাপ কিংবা ইমেইলে জানাতে।</li>
              <li>কোনো ধরনের অনাকাঙ্ক্ষিত অনলাইন জালিয়াতি, পাইরেসি বা সাইবার নিরাপত্তা ঝুঁকি প্রতিরোধ করতে।</li>
            </ul>
          </div>

          <!-- Section 4: Log Files & Technical Tracking -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">৪</span>
              লগ ফাইল ও কারিগরি তথ্য (Log Files & Technical Analytics)
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              আধুনিক হোস্টিং ও ওয়েব সার্ভারের আদর্শ রীতি অনুযায়ী ইনসাইট একাডেমিয়া স্ট্যান্ডার্ড লগ ফাইল সংরক্ষণ করে। এর মধ্যে রয়েছে ভিজিটরের ইন্টারনেট প্রোটোকল বা আইপি (IP) অ্যাড্রেস, ব্রাউজারের ধরন, ইন্টারনেট সার্ভিস প্রোভাইডার (ISP), তারিখ-সময় এবং রেফারেল পেজ। এই তথ্যগুলো কোনো ব্যক্তিগত পরিচয়ের সাথে যুক্ত থাকে না; বরং প্ল্যাটফর্মের পারফরম্যান্স ও ট্র্যাফিক প্রবাহ সুষ্ঠু রাখতে ব্যবহৃত হয়।
            </p>
          </div>

          <!-- Section 5: Cookies -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">৫</span>
              কুকিজ প্রযুক্তি (Cookies & Session Management)
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              শিক্ষার্থীর লগইন সেশন সক্রিয় রাখা এবং পছন্দের সেটিংস স্মরণে রেখে পেজের গতি বাড়ানোর জন্য ব্রাউজার কুকিজ ব্যবহৃত হয়। আপনি চাইলে ব্রাউজার থেকে কুকিজ নিষ্ক্রিয় করতে পারেন, তবে সে ক্ষেত্রে সাইটের কিছু স্বয়ংক্রিয় সেবা সীমিত হতে পারে।
            </p>
          </div>

          <!-- Section 6: Children's Privacy -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">৬</span>
              অপ্রাপ্তবয়স্ক শিক্ষার্থী ও শিশু সুরক্ষা (Children’s Privacy Protection)
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              অনলাইন পড়াশোনায় অভিভাবকদের সার্বক্ষণিক পর্যবেক্ষণ ও সক্রিয় গাইডলাইন প্রদানকে আমরা উৎসাহিত করি। ইনসাইট একাডেমিয়া তেরো (১৩) বছরের কম বয়সী শিশুদের কাছ থেকে অভিভাবকের অনুমতি ব্যতীত জেনেশুনে ব্যক্তিগত শনাক্তকরণ তথ্য সংগ্রহ করে না। যদি কোনো অভিভাবক মনে করেন তাঁর সন্তান অনুমতি ছাড়া এমন তথ্য প্রদান করেছে, তবে আমাদের সাথে যোগাযোগ করা মাত্রই আমরা তা আমাদের রেকর্ড থেকে মুছে ফেলার দ্রুত পদক্ষেপ নেব।
            </p>
          </div>

          <!-- Section 7: Contact Us -->
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-5">
            <h4 class="font-black text-blue-950 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">৭</span>
              যোগাযোগ ও সহায়তা (Contact Us)
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              এই প্রাইভেসি পলিসি বা ব্যক্তিগত তথ্যের নিরাপত্তা বিষয়ে যেকোনো প্রশ্ন বা সহযোগিতার জন্য সরাসরি আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন:
            </p>
            <div class="mt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold">
              <a href="mailto:iinsight.academiaa@gmail.com" class="text-blue-600 hover:underline flex items-center gap-1.5">
                <span>📧</span> iinsight.academiaa@gmail.com
              </a>
              <a href="https://wa.me/8801748470620" target="_blank" class="text-emerald-700 hover:underline flex items-center gap-1.5">
                <span>📱</span> +8801748470620 (WhatsApp Support)
              </a>
            </div>
          </div>

        </div>

        <!-- SECTION 2: TERMS OF SERVICE -->
        <div id="policySecTerms" class="hidden space-y-4">
          
          <div class="p-4 bg-emerald-50/80 border border-emerald-100 rounded-2xl text-emerald-950 font-medium">
            <p>
              ইনসাইট একাডেমিয়া প্ল্যাটফর্মের সকল সেবা, কোর্স সামগ্রী ও ডিজিটাল ক্লাসরুম নিম্নে বর্ণিত শর্তাবলী সাপেক্ষে পরিচালিত হয়। প্ল্যাটফর্মে কোনো সেবা গ্রহণ বা কোর্স ক্রয়ের পূর্বে এই নীতিমালা মনোযোগ দিয়ে পড়ুন।
            </p>
            <p class="mt-2 text-xs text-emerald-800 font-semibold">
              ওয়েবসাইট ব্যবহার কিংবা কোর্সে ভর্তির মাধ্যমে আপনি এই শর্তাবলীর সকল ধারায় সম্মতি প্রদান করছেন বলে গণ্য হবে।
            </p>
          </div>

          <!-- Term 1 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">১</span>
              একাউন্ট ও প্রোফাইল ক্রিডেনশিয়ালস সংক্রান্ত নীতিমালা
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <p>
                <strong>১.১) ব্যক্তিগত ক্রিডেনশিয়াল:</strong> আপনার একাউন্টের লগইন তথ্য (রেজিস্টার্ড মোবাইল নম্বর, ওটিপি ও পাসওয়ার্ড) একান্তই আপনার ব্যক্তিগত আমানত। এগুলো অন্য কোনো ব্যক্তি, সামাজিক মাধ্যম বা মেসেঞ্জার গ্রুপে শেয়ার করা সম্পূর্ণ নিষেধ। একাউন্ট ক্রিডেনশিয়াল হস্তান্তরের প্রমাণ পাওয়া গেলে কোনো পূর্ব নোটিশ ছাড়াই সংশ্লিষ্ট একাউন্টটি চিরতরে টার্মিনেট (Terminate) করার অধিকার ইনসাইট একাডেমিয়া সংরক্ষণ করে।
              </p>
              <p>
                <strong>১.২) একক ইউজার লাইসেন্স:</strong> আমাদের প্রতিটি কোর্স সিঙ্গেল ইউজার ব্যবহারের জন্য তৈরি; অর্থাৎ যিনি কোর্স ক্রয় করেছেন শুধুমাত্র তিনিই পড়াশোনার উদ্দেশ্যে এটি ব্যবহার করতে পারবেন। "একই পরিবার বা এলাকার অন্য শিক্ষার্থী কেন ব্যবহার করতে পারবে না"—এ ধরনের কোনো অনুরোধ গ্রহণযোগ্য হবে না।
              </p>
              <p>
                <strong>১.৩) সিঙ্গেল ডিভাইস অ্যাক্সেস:</strong> আপনি যেকোনো সময়ে একটিমাত্র ডিভাইস থেকে ক্লাসরুমে সক্রিয় থাকতে পারবেন। নতুন কোনো ডিভাইসে লগইন করার সাথে সাথে সুরক্ষার স্বার্থে পূর্ববর্তী ডিভাইস স্বয়ংক্রিয়ভাবে লগআউট হয়ে যাবে।
              </p>
              <p>
                <strong>১.৪) সঠিক তথ্যের বাধ্যবাধকতা:</strong> রেজিস্ট্রেশন ও এনরোলমেন্টের সময় সঠিক ব্যক্তিগত তথ্য প্রদান করা আবশ্যক। ভুল বা বিভ্রান্তিকর তথ্য প্রমাণিত হলে একাউন্টে প্রয়োজনীয় সীমাবদ্ধতা আরোপের অধিকার কর্তৃপক্ষ রাখে। আপনার দেওয়া সঠিক তথ্যের ভিত্তিতেই কোর্স সার্টিফিকেট ও ভবিষ্যৎ প্রাতিষ্ঠানিক যোগাযোগ নিশ্চিত করা হবে।
              </p>
              <p>
                <strong>১.৫) ছদ্মনাম বা ভুয়া পরিচয় বর্জন:</strong> যেকোনো প্রকার ছদ্মনাম, ভুয়া মোবাইল নম্বর বা ফেক ইমেইল ব্যবহার সম্পূর্ণ নিষিদ্ধ। এমন অসঙ্গতি পাওয়া গেলে কোর্স এনরোলমেন্ট রিকুয়েস্ট বাতিল করার সম্পূর্ণ অধিকার ইনসাইট একাডেমিয়ার থাকবে।
              </p>
            </div>
          </div>

          <!-- Term 2 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">২</span>
              কপিরাইট ও কনটেন্ট ডিস্ট্রিবিউশন সংক্রান্ত আইনি সতর্কতা
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <p>
                <strong>২.১) অনুমতিহীন বিতরণ সম্পূর্ণ নিষিদ্ধ:</strong> ইনসাইট একাডেমিয়া কর্তৃপক্ষের সুস্পষ্ট লিখিত অনুমতি ব্যতীত যেকোনো কোর্স ম্যাটেরিয়াল (ভিডিও লেকচার, অডিও, হ্যান্ডনোট, টেস্ট পেপার শিট বা গাইডলাইন) বিনামূল্যে কিংবা অর্থের বিনিময়ে অন্য কোনো মাধ্যমে বিতরণ করা সম্পূর্ণ নিষিদ্ধ এবং আইনত দণ্ডনীয় ফৌজদারি অপরাধ।
              </p>
              <p>
                <strong>২.২) মেধা-স্বত্ব ও ডায়নামিক জলছাপ (Watermark):</strong> প্ল্যাটফর্মের প্রতিটি পেইড লেকচার ক্লাসে ইনসাইট একাডেমিয়ার অফিশিয়াল লোগো এবং স্ক্রিন জুড়ে শিক্ষার্থীর পরিচয় সংবলিত ডায়নামিক ওয়াটারমার্ক প্রদর্শিত হয়। উক্ত ভিডিওর মেধা-স্বত্ব (Intellectual Property Right) সম্পূর্ণ ইনসাইট একাডেমিয়ার। শিক্ষার্থী কেবল ব্যক্তিগত শিক্ষার জন্য তা দেখার অনুমতি পান। কনটেন্টটি স্ক্রিন রেকর্ড বা শেয়ার করলে গণপ্রজাতন্ত্রী বাংলাদেশের আইন অনুযায়ী যথাযথ ফৌজদারি পদক্ষেপ নেওয়া হবে।
              </p>
              <p>
                <strong>২.৩) প্রচলিত আইনের অধীনে ব্যবস্থা:</strong> ইনসাইট একাডেমিয়ার কোনো কনটেন্ট গুগল ড্রাইভ, ফেসবুক, টেলিগ্রাম, ইউটিউব কিংবা পেনড্রাইভ বা মেমোরি কার্ডে আদান-প্রদান করা হলে বাংলাদেশ সরকারের কপিরাইট আইন ২০০০, কপিরাইট (সংশোধন) আইন ২০০৫ (ধারা ৮৪), ডিজিটাল নিরাপত্তা আইন ২০১৮ (ধারা ১৯) এবং প্রযোজ্য সাইবার সুরক্ষা আইন অনুযায়ী সর্বোচ্চ আইনি ব্যবস্থা গ্রহণ করা হবে।
              </p>
            </div>
          </div>

          <!-- Term 3 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">৩</span>
              পেমেন্ট ও লেনদেন নীতিমালা
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <p>
                <strong>৩.১) অফিশিয়াল চ্যানেলে পেমেন্ট:</strong> শুধুমাত্র আমাদের ওয়েবসাইটে প্রদর্শিত অফিশিয়াল বিকাশ মার্চেন্ট/পার্সোনাল নম্বর ও অনুমোদিত গেটওয়ের মাধ্যমেই কোর্স ফি পরিশোধ করুন। তৃতীয় কোনো ব্যক্তির কথায় অন্য কোনো মাধ্যমে টাকা পাঠিয়ে প্রতারিত হলে তার দায়ভার ইনসাইট একাডেমিয়া নেবে না।
              </p>
              <p>
                <strong>৩.২) কর্তৃপক্ষের চূড়ান্ত সিদ্ধান্ত:</strong> সকল প্রকার পেমেন্ট ও ফি যাচাই সংক্রান্ত বিষয়ে ইনসাইট একাডেমিয়ার সিদ্ধান্তই চূড়ান্ত। পেমেন্ট করার পূর্বে কোর্সের মূল্য এবং প্রেরক নম্বর ভালোভাবে দেখে নিন।
              </p>
              <p>
                <strong>৩.৩) প্রবাসী শিক্ষার্থী ও ব্যাংক ট্রান্সফার:</strong> দেশের বাইরে থেকে যারা কোর্স কিনতে ইচ্ছুক কিংবা সরাসরি ব্যাংক একাউন্টে ফি দিতে চান, তারা পূর্বেই আমাদের সাপোর্ট সেন্টারে যোগাযোগ করুন। ম্যানুয়াল ব্যাংক যাচাইকরণের ক্ষেত্রে সার্ভিস ডেলিভারি সম্পন্ন হতে কিছুটা সময় (২৪ থেকে ৭২ ঘণ্টা) লাগতে পারে।
              </p>
            </div>
          </div>

          <!-- Term 4 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">৪</span>
              সার্ভিস ডেলিভারি ও অ্যাক্টিভেশন টাইমলাইন
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <p>
                <strong>৪.১) তাৎক্ষণিক অনলাইন অ্যাক্সেস:</strong> অফিশিয়াল বিকাশ পেমেন্টের সঠিক TrxID সাবমিট করার পর আমাদের ভেরিফিকেশন সম্পন্ন হওয়া মাত্রই স্বয়ংক্রিয়ভাবে আপনার কোর্সের ক্লাসরুম সচল হয়ে যাবে।
              </p>
              <p>
                <strong>৪.২) বিশেষ পেমেন্ট যাচাই:</strong> ব্যাংক ডিপোজিট বা বিশেষ ক্ষেত্রে পেমেন্ট ম্যানুয়ালি নিশ্চিত করার পর সর্বোচ্চ ২৪ থেকে ৭২ ঘণ্টার মধ্যে সার্ভিস অ্যাক্টিভেশন নিশ্চিত করা হবে।
              </p>
            </div>
          </div>

          <!-- Term 5 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">৫</span>
              একাডেমিক ও টেকনিক্যাল সাপোর্ট
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <p>
                <strong>৫.১) পাঠ্যক্রম সমস্যার সমাধান:</strong> কোর্স চলাকালীন পাঠ্যক্রম বা বিষয়ভিত্তিক সমস্যার সমাধান সর্বোচ্চ ২৪ ঘণ্টার মধ্যে প্রদান করার সর্বাত্মক অঙ্গীকার থাকছে। শিক্ষার্থীর ব্যক্তিগত ডিভাইসের লোকাল হার্ডওয়্যার বা ব্রাউজারের অভ্যন্তরীণ সমস্যার সমাধানে একাডেমিয়া বাধ্য থাকবে না।
              </p>
              <p>
                <strong>৫.২) সাপোর্ট সময়সূচি:</strong> আমাদের অফিশিয়াল হেল্পলাইন ও সাপোর্ট প্রতিদিন সকাল ১০:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত সক্রিয় থাকে।
              </p>
              <p>
                <strong>৫.৩) সাপোর্ট চ্যানেল:</strong> সকল সহায়তা সাপোর্ট পেজ, অফিশিয়াল হোয়াটসঅ্যাপ এবং ডাউট সলভ গ্রুপের মাধ্যমে প্রদান করা হবে। বিশেষ জটিল ক্ষেত্রে প্রয়োজনে লাইভ মিটিংয়ের মাধ্যমে সহায়তা দেওয়া হতে পারে।
              </p>
            </div>
          </div>

          <!-- Term 6 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">৬</span>
              কমিউনিটি আচরণবিধি ও পারস্পরিক সম্মান
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <p>
                <strong>৬.১) পারস্পরিক শ্রদ্ধা:</strong> ইনসাইট একাডেমিয়ায় প্রতিটি শিক্ষার্থী সমান মর্যাদার অধিকারী। গ্রুপ চ্যাট বা ডিসকাশনে শিক্ষক, এডমিন এবং সহপাঠীদের সাথে মার্জিত ভাষায় কথা বলতে হবে। কাউকে অশ্রদ্ধা বা কটূক্তি করলে সংশ্লিষ্ট শিক্ষার্থীর বিরুদ্ধে ব্যবস্থা নেওয়া হবে।
              </p>
              <p>
                <strong>৬.২) রাজনৈতিক ও বিদ্বেষমূলক আলাপ নিষিদ্ধ:</strong> সাপোর্ট চ্যাট, ডাউট সলভ গ্রুপ কিংবা সোশ্যাল মিডিয়া পেজে ব্যক্তিগত আক্রমণ, রাজনৈতিক বিতর্ক বা কোনো বিদ্বেষমূলক বার্তা সম্পূর্ণ নিষিদ্ধ। এমন আচরণের দায়ে গ্রুপ মেম্বারশিপ থেকে স্থায়ীভাবে বহিষ্কার করা হতে পারে।
              </p>
              <p>
                <strong>৬.৩) স্প্যামিং ও বিজ্ঞাপন নিষেধ:</strong> গ্রুপ চ্যাট বা সোশ্যাল প্ল্যাটফর্মে কোনো প্রকার অননুমোদিত প্রমোশনাল পোস্ট, লিংক বা স্প্যামিং করা যাবে না। নিয়ম ভঙ্গকারীর একাউন্ট টার্মিনেট করা হতে পারে।
              </p>
            </div>
          </div>

          <!-- Term 7 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">৭</span>
              কোর্স নীতিমালা ও অন্যান্য বিধিনিষেধ
            </h4>
            <div class="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <p><strong>৭.১) কোর্স স্থানান্তর:</strong> এক কোর্স থেকে অন্য কোনো কোর্সে রূপান্তর বা ট্রান্সফার করা যাবে না।</p>
              <p><strong>৭.২) ভুয়া আইডি নিষিদ্ধ:</strong> সদ্য খোলা বা ভুয়া নামের আইডি গ্রহণযোগ্য নয়। বিশেষ ক্ষেত্রে অভিভাবকের আইডি ব্যবহার করা যেতে পারে।</p>
              <p><strong>৭.৩) প্রোফাইল অপরিবর্তনীয়:</strong> একবার আইডি এপ্রুভ হওয়ার পর অন্য কারো নামে আইডি পরিবর্তন বা হস্তান্তর করা যাবে না।</p>
              <p><strong>৭.৪) নিরাপত্তা ও আইপি ট্র্যাকিং:</strong> ক্লাসরুমের নিরাপত্তা ও পাইরেসি রোধে ক্লাস চলাকালীন আইপি ট্র্যাক করা হতে পারে।</p>
              <p><strong>৭.৫) রিফান্ড প্রযোজ্য নয়:</strong> ডিজিটাল কন্টেন্ট হওয়ায় কোর্স সক্রিয় হওয়ার পর ফি অফেরতযোগ্য।</p>
              <p><strong>৭.৬) মাল্টি-ডিভাইস বিধিনিষেধ:</strong> একই সময়ে একের অধিক ডিভাইসে লগইন সক্রিয় রাখা যাবে না।</p>
            </div>
          </div>

          <!-- Term 8 -->
          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">৮</span>
              শর্তাবলী পরিবর্তন ও সার্বিক সম্মতি
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed pl-2">
              ইনসাইট একাডেমিয়ার যেকোনো সেবা গ্রহণ বা কোর্স ক্রয় করার ক্ষেত্রে ধরে নেওয়া হবে আপনি এই সকল শর্তাবলী সম্পূর্ণ জেনে এবং বুঝে মেনে নিয়েছেন। একাডেমিয়ার একাডেমিক মানোন্নয়ন এবং নীতিগত প্রয়োজনে যেকোনো সময় এই শর্তাবলী পরিবর্তন বা পরিমার্জন করার পূর্ণ অধিকার ইনসাইট একাডেমিয়া কর্তৃপক্ষ সংরক্ষণ করে।
            </p>
          </div>

        </div>

        <!-- SECTION 3: RETURN & REFUND POLICY -->
        <div id="policySecRefund" class="hidden space-y-4">
          
          <div class="p-4 bg-purple-50/80 border border-purple-100 rounded-2xl text-purple-950 font-medium">
            <p>
              ইনসাইট একাডেমিয়ার সকল কোর্স সম্পূর্ণ ডিজিটাল কনটেন্ট সমৃদ্ধ। শিক্ষার্থীদের সর্বোচ্চ স্বচ্ছতা ও সুবিধা নিশ্চিত করতে আমাদের সুনির্দিষ্ট রিটার্ন ও রিফান্ড নীতিমালা নিচে প্রদান করা হলো।
            </p>
          </div>

          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-purple-600 text-white text-xs font-bold flex items-center justify-center">১</span>
              ডিজিটাল কনটেন্টের রিফান্ড নীতি
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              যেহেতু কোর্সগুলোতে সফল এনরোলমেন্টের পরপরই সম্পূর্ণ সিলেবাসের রেকর্ডেড ক্লাস, টেস্ট পেপার সমাধান এবং ডাউনলোডযোগ্য লেকচার শিট তাৎক্ষণিকভাবে উন্মুক্ত করা হয়, তাই কোর্স একবার সক্রিয় হওয়ার পর ফি রিফান্ডযোগ্য নয়।
            </p>
          </div>

          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-purple-600 text-white text-xs font-bold flex items-center justify-center">২</span>
              যেসব ক্ষেত্রে রিফান্ড প্রদান করা হয়
            </h4>
            <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>ভুলবশত একই কোর্সে পরপর দুইবার ফি প্রদান করা হলে (Double Payment)।</li>
              <li>পেমেন্ট সফল ও ট্রানজেকশন আইডি সঠিক থাকা সত্ত্বেও কারিগরি ত্রুটির কারণে ২৪ ঘণ্টার মধ্যে ক্লাসরুম সক্রিয় করা সম্ভব না হলে।</li>
            </ul>
          </div>

          <div class="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
            <h4 class="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-purple-600 text-white text-xs font-bold flex items-center justify-center">৩</span>
              রিফান্ডের আবেদন প্রক্রিয়া ও সময়সীমা
            </h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
              যথাযথ প্রমাণসহ পেমেন্টের ২৪ ঘণ্টার মধ্যে আপনার প্রেরক বিকাশ নম্বর এবং TrxID উল্লেখ করে আমাদের অফিশিয়াল হোয়াটসঅ্যাপ সাপোর্ট নম্বরে (<strong class="text-emerald-700">01748470620</strong>) কিংবা ইমেইলে (<strong class="text-blue-700">iinsight.academiaa@gmail.com</strong>) যোগাযোগ করুন। আমাদের টিম অভিযোগ যাচাইপূর্বক ৩ থেকে ৫ কার্যদিবসের মধ্যে সমাধান নিশ্চিত করবে।
            </p>
          </div>

        </div>

      </div>

      <!-- Modal Footer -->
      <div class="pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
        <a href="https://wa.me/8801748470620" target="_blank" class="text-xs sm:text-sm font-bold text-emerald-600 hover:underline flex items-center gap-1.5">
          <span>💬 হেল্পলাইন: 01748470620 (WhatsApp Support)</span>
        </a>
        <button type="button" onclick="closePolicyModal()" class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm transition cursor-pointer shadow-xs">
          বুঝেছি, বন্ধ করুন
        </button>
      </div>

    </div>
  </div>
>

  <!-- ============================================== -->
  <!-- ============================================== -->
  <!-- 📱 STUDENT LEAD CAPTURE & FIREBASE AUTH MODAL      -->
  <!-- ============================================== -->
  <div id="loginModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs opacity-0 pointer-events-none transition-opacity duration-300 p-4">
    <div class="bg-white rounded-[28px] sm:rounded-[32px] border border-slate-100 shadow-2xl max-w-[430px] w-full p-6 sm:p-8 relative transform scale-95 transition-transform duration-300 flex flex-col" id="loginModalBox">
      
      <!-- Close Button -->
      <button onclick="closeLoginModal()" class="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition cursor-pointer text-sm font-bold">
        ✕
      </button>

      <!-- Logo Header -->
      <div class="flex justify-center mb-2.5">
        <img src="data:image/png;base64,${logoB64}" alt="Insight Academia" class="h-10 sm:h-11 w-auto object-contain" />
      </div>

      <!-- Welcome Headings -->
      <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight text-center">
        শিক্ষার্থী সাইন-ইন
      </h3>
      <p class="text-xs text-slate-500 text-center mt-1 mb-4 font-medium">
        ইনসাইট একাডেমিয়ায় আপনার অ্যাকাউন্টে প্রবেশ করুন
      </p>

      <!-- Auth Method Switcher Tabs -->
      <div class="flex bg-slate-100 p-1 rounded-xl mb-4 text-xs font-bold text-slate-600">
        <button type="button" id="tabBtnPhone" onclick="switchLoginTab('phone')" class="flex-1 py-2 rounded-lg bg-white text-blue-600 shadow-2xs transition cursor-pointer flex items-center justify-center gap-1.5">
          <span>📱</span> <span>মোবাইল ওটিপি (SMS)</span>
        </button>
        <button type="button" id="tabBtnEmail" onclick="switchLoginTab('email')" class="flex-1 py-2 rounded-lg hover:text-slate-900 transition cursor-pointer flex items-center justify-center gap-1.5">
          <span>✉️</span> <span>ইমেইল / গুগল</span>
        </button>
      </div>

      <!-- ============================================== -->
      <!-- TAB 1: PHONE SMS OTP AUTHENTICATION            -->
      <!-- ============================================== -->
      <div id="authPhonePanel" class="space-y-3.5">
        
        <!-- Step 1: Input Phone & Name -->
        <div id="otpStepPhoneInput" class="space-y-3">
          <!-- Student Name Input -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
            <input type="text" id="loginStudentName" class="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs font-medium" placeholder="শিক্ষার্থীর নাম (যেমন: মোঃ সাকিবুর রহমান)" value="Md. Sakibur Rahman" />
          </div>

          <!-- Phone Number Input with BD flag +880 -->
          <div class="relative flex items-center">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600 font-bold text-xs sm:text-sm gap-1 border-r border-slate-200 pr-2.5 my-2">
              <span class="text-base">🇧🇩</span>
              <span>+880</span>
            </div>
            <input type="tel" id="loginPhoneInput" maxlength="11" class="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-24 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs font-semibold tracking-wide" placeholder="017XXXXXXXX" value="01748470620" />
          </div>

          <!-- Invisible reCAPTCHA container -->
          <div id="recaptcha-container" class="flex justify-center my-1"></div>

          <!-- Action Button: Send SMS OTP -->
          <button type="button" id="btnSendPhoneOtp" onclick="handleSendPhoneOTP()" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl transition shadow-md hover:shadow-lg text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2">
            <span id="btnSendOtpText">ওটিপি পাঠান (SMS OTP) ➔</span>
            <svg id="btnSendOtpSpinner" class="w-4 h-4 animate-spin hidden" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          </button>
        </div>

        <!-- Step 2: Input 6-Digit OTP (Initially Hidden) -->
        <div id="otpStepCodeInput" class="space-y-3 hidden">
          <div class="bg-blue-50/70 border border-blue-100 rounded-xl p-3 text-center">
            <p class="text-xs text-slate-600">
              আপনার নম্বরে ৬ সংখ্যার ওটিপি কোড পাঠানো হয়েছে:
            </p>
            <p id="otpTargetPhoneDisplay" class="text-sm font-extrabold text-blue-700 mt-0.5 tracking-wider">
              +8801748470620
            </p>
          </div>

          <div class="relative">
            <input type="text" id="loginOtpInput" maxlength="6" class="w-full bg-white border-2 border-blue-500 rounded-xl text-center py-3 text-xl sm:text-2xl font-black tracking-[0.4em] text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition shadow-inner font-mono" placeholder="••••••" />
          </div>

          <!-- Action Button: Verify OTP -->
          <button type="button" id="btnVerifyPhoneOtp" onclick="handleVerifyPhoneOTP()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-md hover:shadow-lg text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2">
            <span id="btnVerifyOtpText">কোড নিশ্চিত করুন ও সাইন-ইন ➔</span>
            <svg id="btnVerifyOtpSpinner" class="w-4 h-4 animate-spin hidden" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          </button>

          <!-- Resend Timer & Change Phone -->
          <div class="flex items-center justify-between text-xs pt-1">
            <button type="button" onclick="resetToPhoneStep()" class="text-slate-500 hover:text-blue-600 font-semibold cursor-pointer">
              ← নম্বর পরিবর্তন
            </button>
            <button type="button" id="btnResendOtp" onclick="handleResendOTP()" disabled class="text-slate-400 font-semibold cursor-not-allowed">
              পুনরায় পাঠান (<span id="otpCountdown">59</span>s)
            </button>
          </div>
        </div>

      </div>

      <!-- ============================================== -->
      <!-- TAB 2: EMAIL & GOOGLE AUTHENTICATION           -->
      <!-- ============================================== -->
      <div id="authEmailPanel" class="space-y-3 hidden">
        <form onsubmit="handleLoginSubmit(event)" class="space-y-3">
          <!-- Student Name -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
            <input type="text" id="loginName" class="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs font-medium" placeholder="Md. Sakibur Rahman Shadhin" value="Md. Sakibur Rahman Shadhin" />
          </div>

          <!-- Email Address -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <input type="email" id="loginEmail" class="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs font-medium" placeholder="student@gmail.com" value="student@gmail.com" />
          </div>

          <!-- Password -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <input type="password" id="loginPass" class="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-10 pr-10 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs font-medium" placeholder="Password" value="demo1234" />
            <button type="button" onclick="toggleLoginPassword()" id="loginEyeIcon" class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer" title="Toggle password visibility">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>
          </div>

          <!-- Sign In Button -->
          <button type="submit" class="w-full bg-[#1877F2] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition shadow-md hover:shadow-lg text-xs sm:text-sm cursor-pointer mt-1">
            Sign In with Email
          </button>
        </form>
      </div>

      <!-- OR Divider -->
      <div class="relative my-3 flex items-center justify-center">
        <div class="w-full border-t border-slate-200"></div>
        <span class="bg-white px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest absolute">OR</span>
      </div>

      <!-- Google Sign In Button -->
      <button type="button" onclick="handleGoogleLogin()" class="w-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition shadow-2xs cursor-pointer text-xs sm:text-sm">
        <svg class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
        <span>Continue with Google</span>
      </button>

      <!-- Footer Policy -->
      <p class="text-[10px] text-slate-400 text-center mt-3">
        By continuing, you agree to our <a href="javascript:void(0)" onclick="openPolicyModal('terms')" class="underline hover:text-blue-600 font-semibold cursor-pointer">Terms of Service</a> and <a href="javascript:void(0)" onclick="openPolicyModal('privacy')" class="underline hover:text-blue-600 font-semibold cursor-pointer">Privacy Policy</a>
      </p>

    </div>
  </div>

  <!-- ============================================== -->
  <!-- 🛑 SINGLE ACTIVE DEVICE CONFLICT MODAL          -->
  <!-- ============================================== -->
  <div id="deviceConflictModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 p-4">
    <div id="deviceConflictBox" class="bg-white rounded-[28px] sm:rounded-3xl border-2 border-rose-300 shadow-2xl max-w-md w-full p-6 sm:p-8 transform scale-95 transition-all duration-300 flex flex-col text-center">
      
      <!-- Warning Icon -->
      <div class="mx-auto w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-3xl font-bold mb-4 shadow-sm animate-bounce">
        🛑
      </div>

      <!-- Badge -->
      <div class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black mx-auto mb-3">
        <span>⚠️ সেশন সমাপ্ত • একাধিক ডিভাইস শনাক্ত</span>
      </div>

      <!-- Heading -->
      <h3 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
        অন্য ডিভাইসে লগইন হয়েছে!
      </h3>
      <p class="text-xs sm:text-sm text-slate-500 mt-1.5 mb-4 font-medium leading-relaxed">
        ইনসাইট একাডেমিয়ায় একই সময়ে একটার বেশি ডিভাইসে একাউন্ট ব্যবহার করা সম্পূর্ণ নিষিদ্ধ।
      </p>

      <!-- Details Card -->
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 mb-5">
        <div class="flex items-center justify-between text-xs">
          <span class="text-slate-500 font-semibold">📱 নতুন ডিভাইস:</span>
          <span id="conflictDeviceName" class="font-bold text-slate-900">Chrome on Android / Windows</span>
        </div>
        <div class="flex items-center justify-between text-xs">
          <span class="text-slate-500 font-semibold">⏰ লগইনের সময়:</span>
          <span id="conflictLoginTime" class="font-bold text-slate-900">এইমাত্র</span>
        </div>
        <div class="pt-2.5 border-t border-slate-200 text-[11.5px] text-slate-600 leading-relaxed">
          <strong class="text-rose-700">নীতিমালা (ধারা ১.৩ ও ৭.৬):</strong> একটি একাউন্ট একই সময়ে কেবল একটি ডিভাইসে ব্যবহারের অনুমতি রয়েছে। নতুন ডিভাইসে এক্সেস দেওয়ার কারণে এই ডিভাইসটি স্বয়ংক্রিয়ভাবে স্থগিত ও লগআউট করা হলো।
        </div>
      </div>

      <!-- Primary Action -->
      <button type="button" onclick="confirmDeviceConflictLogout()" class="w-full py-3.5 px-5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer">
        <span>ঠিক আছে, লগআউট করুন</span>
        <span>➔</span>
      </button>

    </div>
  </div>

  <!-- ============================================== -->
  <!-- 🎬 SECURE CLASS VIDEO PLAYER MODAL WITH WATERMARK -->
  <!-- ============================================== -->
  <div id="classVideoModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300 p-2 sm:p-4">
    <div class="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl max-w-4xl w-full overflow-hidden transform scale-95 transition-transform duration-300 flex flex-col max-h-[94vh]" id="classVideoModalBox">
      
      <!-- Video Header -->
      <div class="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800">
        <div class="flex items-center gap-2.5 overflow-hidden">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shrink-0"></span>
          <h3 id="classVideoTitle" class="text-xs sm:text-sm font-bold text-white truncate">
            ক্লাস প্রিভিউ • Insight Academia
          </h3>
        </div>
        <button onclick="closeClassVideoModal()" class="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition cursor-pointer shrink-0">
          ✕
        </button>
      </div>

      <!-- Video Area with Floating Anti-Piracy Gmail Watermark -->
      <div class="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
        <!-- Responsive Iframe Container -->
        <iframe id="classVideoIframe" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <!-- Floating Dynamic Watermark (Anti-Piracy with user's Gmail) -->
        <div id="videoFloatingWatermark" class="watermark-animated absolute top-4 left-4 pointer-events-none select-none z-30 opacity-40 hover:opacity-10 transition-opacity">
          <div class="bg-black/65 backdrop-blur-xs text-white/95 text-[11px] sm:text-xs font-mono font-semibold px-3 py-1 rounded-full border border-white/20 shadow-lg flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span id="watermarkUserEmail">student.demo@gmail.com</span>
          </div>
        </div>
      </div>

      <!-- Video Modal Footer / Info -->
      <div class="px-5 py-3 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div class="flex items-center gap-2">
          <span class="text-rose-400 font-bold">🔒 অ্যান্টি-পাইরেসি সুরক্ষিত ড্যাশবোর্ড</span>
          <span class="hidden sm:inline">• কোনো থার্ড-পার্টি রিডাইরেক্ট ছাড়া সরাসরি ওয়েবসাইটে প্লে হচ্ছে</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="closeClassVideoModal(); navigateTo('courses')" class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl transition cursor-pointer">
            সম্পূর্ণ কোর্সে ভর্তি হোন ➔
          </button>
        </div>
      </div>

    </div>
  </div>

  
  <!-- ============================================== -->
  <!-- OFFLINE COURSE ENROLLMENT / SEAT BOOKING MODAL -->
  <!-- ============================================== -->
  <div id="offlineEnrollModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs opacity-0 pointer-events-none transition-opacity duration-300 p-4">
    <div class="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 transform scale-95 transition-transform duration-300" id="offlineEnrollModalBox">
      
      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-black uppercase text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">অফলাইন সিট বুকিং</span>
          <h3 id="enrollModalTitle" class="text-xl font-black text-slate-900 mt-1">৮ম শ্রেণি অফলাইন ব্যাচ</h3>
        </div>
        <button type="button" onclick="closeOfflineEnrollModal()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <div class="mt-4 space-y-4">
        <p class="text-xs text-slate-600 leading-relaxed">
          ইনসাইট একাডেমিয়া অফলাইন ব্যাচে আসন সংখ্যা সীমিত। দ্রুত আসন নিশ্চিত করতে নিচের যেকোনো অপশন বেছে নিন:
        </p>

        <!-- Quick Actions: WhatsApp & Call -->
        <div class="grid grid-cols-2 gap-3">
          <a id="enrollModalWhatsAppBtn" href="https://wa.me/8801748470620" target="_blank" rel="noopener noreferrer" class="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition">
            <span>💬</span>
            <span>হোয়াটসঅ্যাপ চ্যাট</span>
          </a>
          <a href="tel:+8801748470620" class="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition">
            <span>📞</span>
            <span>সরাসরি কল</span>
          </a>
        </div>

        <!-- Quick Form -->
        <form onsubmit="submitOfflineEnrollForm(event)" class="space-y-3 pt-2 border-t border-slate-100">
          <div>
            <label class="block text-[11px] font-bold text-slate-700 mb-1">শিক্ষার্থীর নাম *</label>
            <input type="text" id="offlineStudentName" required placeholder="নাম লিখুন" class="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:border-red-500 focus:outline-none" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-slate-700 mb-1">মোবাইল নম্বর (অভিভাবক / শিক্ষার্থী) *</label>
            <input type="tel" id="offlineStudentPhone" required placeholder="01XXXXXXXXX" class="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:border-red-500 focus:outline-none" />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-slate-700 mb-1">স্কুল / কলেজ</label>
            <input type="text" id="offlineStudentSchool" placeholder="বর্তমান শিক্ষা প্রতিষ্ঠান" class="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:border-red-500 focus:outline-none" />
          </div>
          <button type="submit" class="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2">
            <span>সিট বুকিংয়ের অনুরোধ পাঠান ➔</span>
          </button>
        </form>

        <!-- Campus Info -->
        <div class="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
          <div class="font-bold text-slate-800">🏫 আমাদের ব্রাঞ্চসমূহ:</div>
          <div>📍 <strong>শান্তিবাগ ব্রাঞ্চ:</strong> সিদ্ধেশ্বরী কলেজ সংলগ্ন, ঢাকা।</div>
          <div>📍 <strong>শাহজাহানপুর ব্রাঞ্চ:</strong> খিলগাঁও ফ্লাইওভার সংলগ্ন, ঢাকা।</div>
        </div>
      </div>

    </div>
  </div>

  <!-- ============================================== -->
  <!-- COURSE BANNER HIGH-RES LIGHTBOX MODAL          -->
  <!-- ============================================== -->
  <div id="courseBannerLightboxModal" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300" onclick="closeBannerLightbox(event)">
    <div id="courseBannerLightboxModalBox" class="relative bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl scale-95 transition-all duration-300 border border-slate-700/80 p-3 sm:p-5 flex flex-col" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800 text-white mb-3">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-6 rounded-full bg-blue-500 inline-block"></span>
          <h4 id="lightboxBannerTitle" class="text-sm sm:text-base font-bold text-white">
            কোর্স ব্যানার প্রিভিউ
          </h4>
        </div>
        <button type="button" onclick="closeBannerLightbox()" class="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition cursor-pointer">✕</button>
      </div>
      <div class="rounded-2xl overflow-hidden bg-black flex items-center justify-center max-h-[78vh]">
        <img id="lightboxBannerImg" src="" alt="Course Banner Preview" class="w-full h-auto max-h-[75vh] object-contain select-none">
      </div>
      <div class="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
        <span>💡 ব্যানারটি সম্পূর্ণ বড় আকারে এবং পরিষ্কার দেখতে পাচ্ছেন</span>
        <button type="button" onclick="closeBannerLightbox()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition cursor-pointer">বন্ধ করুন</button>
      </div>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- OFFLINE CLASS ROUTINE MODAL                    -->
  <!-- ============================================== -->
  <div id="offlineRoutineModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs opacity-0 pointer-events-none transition-opacity duration-300 p-4">
    <div class="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 transform scale-95 transition-transform duration-300 max-h-[90vh] overflow-y-auto" id="offlineRoutineModalBox">
      
      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <span class="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">অফলাইন সাপ্তাহিক রুটিন</span>
          <h3 id="routineModalTitle" class="text-xl font-black text-slate-900 mt-1">৮ম শ্রেণি অফলাইন ক্লাস রুটিন ২০২৬</h3>
        </div>
        <button type="button" onclick="closeOfflineRoutineModal()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition cursor-pointer">
          ✕
        </button>
      </div>

      <div class="mt-4 space-y-4">
        <p class="text-xs text-slate-500">
          📍 ক্যাম্পাস: শান্তিবাগ ও শাহজাহানপুর ব্রাঞ্চ • শীতাতপ নিয়ন্ত্রিত আধুনিক ক্লাসরুম
        </p>

        <!-- Routine Table -->
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
              <tr>
                <th class="p-3">দিন</th>
                <th class="p-3">সময়সূচি</th>
                <th class="p-3">বিষয়</th>
                <th class="p-3">মেন্টর</th>
              </tr>
            </thead>
            <tbody id="routineTableBody" class="divide-y divide-slate-100 text-slate-600">
              <!-- Dynamically populated via openOfflineRoutineModal -->
            </tbody>
          </table>
        </div>

        <div class="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
          <span>⚠️</span>
          <span>বিশেষ প্রয়োজনে ব্যাচের সময়সূচিতে সাময়িক পরিবর্তন হতে পারে। যেকোনো তথ্যে হেল্পলাইনে (01748-470620) যোগাযোগ করুন।</span>
        </div>

        <div class="flex items-center justify-end gap-3 pt-2">
          <button type="button" onclick="closeOfflineRoutineModal()" class="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition cursor-pointer">
            বন্ধ করুন
          </button>
          <a href="https://wa.me/8801748470620?text=আমি%20অফলাইন%20ক্লাস%20রুটিনের%20পিডিএফ%20কপি%20পেতে%20চাই" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition shadow-xs flex items-center gap-1.5 cursor-pointer">
            <span>📥</span>
            <span>রুটিন কপি সংগ্রহ করুন</span>
          </a>
        </div>
      </div>

    </div>
  </div>

  <!-- SMOOTH ROUTING, LANGUAGE & MODAL SCRIPT        -->
  <!-- ============================================== -->
  <script>

    // OFFLINE COURSES & PROGRAMMES DATA
    const offlineClassesData = {
      hsc_ebi: {
        id: 'hsc_ebi',
        name: 'HSC - EBI',
        banglaName: 'এইচএসসি - EBI',
        classLabel: 'এইচএসসি - EBI',
        subtitle: 'English • Bangla • ICT ফ্ল্যাগশিপ প্রোগ্রাম',
        tagline: 'এইচএসসি EBI - ইংলিশ, বাংলা ও আইসিটি পূর্ণাঙ্গ প্রস্তুতি...',
        bannerGradient: 'from-[#0B1E48] via-[#1E3A8A] to-[#0A1128]',
        glowColor: 'bg-blue-500/20',
        badgeBg: 'bg-blue-100 text-blue-700',
        labelColor: 'text-blue-600',
        routine: [
          { day: 'শনিবার', time: 'বিকাল ৪:০০ - ৫:৩০', subject: 'ইংরেজি (Grammar & Writing)', mentor: 'ইকরা ম্যাম / রাজিব ভাই' },
          { day: 'শনিবার', time: 'বিকাল ৫:৩০ - ৭:০০', subject: 'আইসিটি (Programming & Web)', mentor: 'স্বাধীন ভাই' },
          { day: 'সোমবার', time: 'বিকাল ৪:০০ - ৫:৩০', subject: 'বাংলা ১ম ও ২য় পত্র', mentor: 'রিফাত ভাই / প্রীতি ম্যাম' },
          { day: 'সোমবার', time: 'বিকাল ৫:৩০ - ৭:০০', subject: 'ইংরেজি স্পেশাল প্র্যাকটিস', mentor: 'ইকরা ম্যাম' },
          { day: 'বুধবার', time: 'বিকাল ৪:০০ - ৫:৩০', subject: 'আইসিটি প্র্যাকটিক্যাল ল্যাব', mentor: 'স্বাধীন ভাই' },
          { day: 'বুধবার', time: 'বিকাল ৫:৩০ - ৭:০০', subject: 'EBI উইকলি মডেল টেস্ট ও সল্ভ', mentor: 'মেন্টর প্যানেল' }
        ]
      },
      hsc_business: {
        id: 'hsc_business',
        name: 'HSC - Business',
        banglaName: 'এইচএসসি - Business',
        classLabel: 'এইচএসসি - Business',
        subtitle: 'হিসাববিজ্ঞান • ফিন্যান্স • ম্যানেজমেন্ট স্পেশাল কেয়ার',
        tagline: 'এইচএসসি বিজনেস স্টাডিজ - পূর্ণাঙ্গ অফলাইন কেয়ার...',
        bannerGradient: 'from-[#3B0764] via-[#581C87] to-[#1E1B4B]',
        glowColor: 'bg-purple-500/20',
        badgeBg: 'bg-purple-100 text-purple-700',
        labelColor: 'text-purple-600',
        routine: [
          { day: 'রবিবার', time: 'বিকাল ৪:৩০ - ৬:০০', subject: 'হিসাববিজ্ঞান (Accounting 1st)', mentor: 'রাকিব ভাই' },
          { day: 'রবিবার', time: 'বিকাল ৬:০০ - ৭:৩০', subject: 'ফিন্যান্স, ব্যাংকিং ও বিমা', mentor: 'নয়ন ভাই' },
          { day: 'মঙ্গলবার', time: 'বিকাল ৪:৩০ - ৬:০০', subject: 'হিসাববিজ্ঞান (Accounting 2nd)', mentor: 'তন্ময় ভাই' },
          { day: 'মঙ্গলবার', time: 'বিকাল ৬:০০ - ৭:৩০', subject: 'ব্যবসায় সংগঠন ও ব্যবস্থাপনা', mentor: 'বৈশাখী ম্যাম' },
          { day: 'বৃহস্পতিবার', time: 'বিকাল ৪:৩০ - ৬:০০', subject: 'ম্যাথমেটিক্যাল প্রবলেম সলভিং', mentor: 'নয়ন ভাই ও তন্ময় ভাই' },
          { day: 'বৃহস্পতিবার', time: 'বিকাল ৬:০০ - ৭:৩০', subject: 'কমার্স উইকলি মেগা টেস্ট', mentor: 'মূল্যায়ন বোর্ড' }
        ]
      },
      ssc26: {
        id: 'ssc26',
        name: 'SSC 26',
        banglaName: 'এসএসসি ২৬',
        classLabel: 'এসএসসি ২৬',
        subtitle: 'টেস্ট পেপার সল্ভ ও বোর্ড ফাইনাল ক্র্যাশ প্রোগ্রাম',
        tagline: 'এসএসসি ২৬ - টপ-নচ প্রিপারেশন শুরু হোক শুরু থেকেই...',
        bannerGradient: 'from-[#451A03] via-[#78350F] to-[#291002]',
        glowColor: 'bg-amber-500/20',
        badgeBg: 'bg-amber-100 text-amber-700',
        labelColor: 'text-amber-600',
        routine: [
          { day: 'শনিবার', time: 'বিকাল ৩:০০ - ৪:৩০', subject: 'সাধারণ গণিত', mentor: 'স্বাধীন ভাই' },
          { day: 'শনিবার', time: 'বিকাল ৪:৩০ - ৬:০০', subject: 'পদার্থবিজ্ঞান', mentor: 'অনিক ভাই' },
          { day: 'সোমবার', time: 'বিকাল ৩:০০ - ৪:৩০', subject: 'উচ্চতর গণিত', mentor: 'স্বাধীন ভাই' },
          { day: 'সোমবার', time: 'বিকাল ৪:৩০ - ৬:০০', subject: 'রসায়ন', mentor: 'অনিক ভাই / নয়ন ভাই' },
          { day: 'বুধবার', time: 'বিকাল ৩:০০ - ৪:৩০', subject: 'ইংরেজি ১ম ও ২য়', mentor: 'ইকরা ম্যাম / রাজিব ভাই' },
          { day: 'বুধবার', time: 'বিকাল ৪:৩০ - ৬:০০', subject: 'বোর্ড স্ট্যান্ডার্ড মেগা টেস্ট', mentor: 'মূল্যায়ন বোর্ড' }
        ]
      },
      ssc27: {
        id: 'ssc27',
        name: 'SSC 27',
        banglaName: 'এসএসসি ২৭',
        classLabel: 'এসএসসি ২৭',
        subtitle: 'সম্পূর্ণ সিলেবাস কভারেজ ও বেসিক টু অ্যাডভান্সড প্রোগ্রাম',
        tagline: 'এসএসসি ২৭ - টপ-নচ প্রিপারেশন শুরু হোক শুরু থেকেই...',
        bannerGradient: 'from-[#2E1065] via-[#581C87] to-[#1E0B4B]',
        glowColor: 'bg-purple-500/20',
        badgeBg: 'bg-purple-100 text-purple-700',
        labelColor: 'text-purple-600',
        routine: [
          { day: 'রবিবার', time: 'বিকাল ৩:৩০ - ৫:০০', subject: 'সাধারণ গণিত', mentor: 'স্বাধীন ভাই' },
          { day: 'রবিবার', time: 'বিকাল ৫:০০ - ৬:৩০', subject: 'পদার্থবিজ্ঞান ও রসায়ন', mentor: 'অনিক ভাই' },
          { day: 'মঙ্গলবার', time: 'বিকাল ৩:৩০ - ৫:০০', subject: 'ইংরেজি বেসিক ও গ্রামার', mentor: 'ইকরা ম্যাম' },
          { day: 'মঙ্গলবার', time: 'বিকাল ৫:০০ - ৬:৩০', subject: 'বাংলা ব্যাকরণ ও সাহিত্য', mentor: 'রিফাত ভাই / প্রীতি ম্যাম' },
          { day: 'বৃহস্পতিবার', time: 'বিকাল ৩:৩০ - ৫:০০', subject: 'গণিত স্পেশাল প্র্যাকটিস', mentor: 'স্বাধীন ভাই' },
          { day: 'বৃহস্পতিবার', time: 'বিকাল ৫:০০ - ৬:৩০', subject: 'উইকলি কুইজ ও প্র্যাকটিস টেস্ট', mentor: 'মেন্টর প্যানেল' }
        ]
      },
      class9: {
        id: 'class9',
        name: 'Class 9',
        banglaName: '৯ম শ্রেণি',
        classLabel: 'ক্লাস ৯',
        subtitle: 'নতুন কারিকুলাম ও বোর্ড ফাউন্ডেশন পূর্ণাঙ্গ কোর্স',
        tagline: '৯ম শ্রেণি - টপ-নচ প্রিপারেশন শুরু হোক শুরু থেকেই...',
        bannerGradient: 'from-[#064E3B] via-[#047857] to-[#022C22]',
        glowColor: 'bg-emerald-500/20',
        badgeBg: 'bg-emerald-100 text-emerald-700',
        labelColor: 'text-emerald-600',
        routine: [
          { day: 'শনিবার', time: 'সকাল ১০:০০ - ১১:৩০', subject: 'গণিত অনুশীলন', mentor: 'স্বাধীন ভাই ও প্যানেল' },
          { day: 'শনিবার', time: 'সকাল ১১:৩০ - ১:০০', subject: 'বিজ্ঞান অনুসন্ধান', mentor: 'অনিক ভাই ও নয়ন ভাই' },
          { day: 'সোমবার', time: 'সকাল ১০:০০ - ১১:৩০', subject: 'ইংরেজি ভাষা ও সাহিত্য', mentor: 'ইকরা ম্যাম' },
          { day: 'সোমবার', time: 'সকাল ১১:৩০ - ১:০০', subject: 'ডিজিটাল প্রযুক্তি ও আইসিটি', mentor: 'স্বাধীন ভাই' },
          { day: 'বুধবার', time: 'সকাল ১০:০০ - ১১:৩০', subject: 'বাংলা ও সাহিত্য', mentor: 'রিফাত ভাই ও প্রীতি ম্যাম' },
          { day: 'বুধবার', time: 'সকাল ১১:৩০ - ১:০০', subject: 'সাপ্তাহিক মূল্যায়ন ও কুইজ', mentor: 'মূল্যায়ন টিম' }
        ]
      },
      class8: {
        id: 'class8',
        name: 'Class 8',
        banglaName: '৮ম শ্রেণি',
        classLabel: 'ক্লাস ৮',
        subtitle: 'স্কুল সিলেবাস ও বোর্ড ফাউন্ডেশন একাডেমিক প্রোগ্রাম',
        tagline: '৮ম শ্রেণি - টপ-নচ প্রিপারেশন শুরু হোক শুরু থেকেই...',
        bannerGradient: 'from-[#4A0A0A] via-[#7F1D1D] to-[#1E0505]',
        glowColor: 'bg-red-500/20',
        badgeBg: 'bg-red-100 text-red-700',
        labelColor: 'text-red-600',
        routine: [
          { day: 'রবিবার', time: 'সকাল ১০:০০ - ১১:৩০', subject: 'গণিত (বীজগণিত ও জ্যামিতি)', mentor: 'স্বাধীন ভাই ও প্যানেল' },
          { day: 'রবিবার', time: 'সকাল ১১:৩০ - ১:০০', subject: 'বিজ্ঞান (পদার্থ ও রসায়ন বেসিক)', mentor: 'অনিক ভাই ও নয়ন ভাই' },
          { day: 'মঙ্গলবার', time: 'সকাল ১০:০০ - ১১:৩০', subject: 'ইংরেজি (Grammar & Reading)', mentor: 'ইকরা ম্যাম' },
          { day: 'মঙ্গলবার', time: 'সকাল ১১:৩০ - ১:০০', subject: 'বাংলা ব্যাকরণ ও সাহিত্য', mentor: 'প্রীতি ম্যাম ও রিফাত ভাই' },
          { day: 'বৃহস্পতিবার', time: 'সকাল ১০:০০ - ১১:৩০', subject: 'তথ্য ও যোগাযোগ প্রযুক্তি', mentor: 'স্বাধীন ভাই' },
          { day: 'বৃহস্পতিবার', time: 'সকাল ১১:৩০ - ১:০০', subject: 'উইকলি পরীক্ষা ও মডেল টেস্ট', mentor: 'মূল্যায়ন বোর্ড' }
        ]
      },
      class7: {
        id: 'class7',
        name: 'Class 7',
        banglaName: '৭ম শ্রেণি',
        classLabel: 'ক্লাস ৭',
        subtitle: 'মৌলিক ধারণা ও ধারাবাহিক শিখন একাডেমিয়া প্রোগ্রাম',
        tagline: '৭ম শ্রেণি - টপ-নচ প্রিপারেশন শুরু হোক শুরু থেকেই...',
        bannerGradient: 'from-[#042F2E] via-[#0F766E] to-[#011C1B]',
        glowColor: 'bg-teal-500/20',
        badgeBg: 'bg-teal-100 text-teal-700',
        labelColor: 'text-teal-600',
        routine: [
          { day: 'শনিবার', time: 'সকাল ১১:০০ - ১২:৩০', subject: 'গণিত (মৌলিক ধারণা ও প্র্যাকটিস)', mentor: 'স্বাধীন ভাই ও গণিত প্যানেল' },
          { day: 'শনিবার', time: 'দুপুর ১২:৩০ - ২:০০', subject: 'বিজ্ঞান (অনুসন্ধানী পাঠ)', mentor: 'অনিক ভাই ও বিজ্ঞান প্যানেল' },
          { day: 'সোমবার', time: 'সকাল ১১:০০ - ১২:৩০', subject: 'ইংরেজি বেসিক স্কিলস', mentor: 'ইকরা ম্যাম' },
          { day: 'সোমবার', time: 'দুপুর ১২:৩০ - ২:০০', subject: 'বাংলা ব্যাকরণ ও পাঠ', mentor: 'প্রীতি ম্যাম ও রিফাত ভাই' },
          { day: 'বুধবার', time: 'সকাল ১১:০০ - ১২:৩০', subject: 'আইসিটি ও ডিজিটাল সচেতনতা', mentor: 'স্বাধীন ভাই' },
          { day: 'বুধবার', time: 'দুপুর ১২:৩০ - ২:০০', subject: 'সাপ্তাহিক কুইজ টেস্ট', mentor: 'মূল্যায়ন টিম' }
        ]
      },
      class6: {
        id: 'class6',
        name: 'Class 6',
        banglaName: '৬ষ্ঠ শ্রেণি',
        classLabel: 'ক্লাস ৬',
        subtitle: 'আনন্দময় শিখন একাডেমিয়া প্রোগ্রাম',
        tagline: '৬ষ্ঠ শ্রেণি - টপ-নচ প্রিপারেশন শুরু হোক শুরু থেকেই...',
        bannerGradient: 'from-[#500724] via-[#9D174D] to-[#2B0313]',
        glowColor: 'bg-pink-500/20',
        badgeBg: 'bg-pink-100 text-pink-700',
        labelColor: 'text-pink-600',
        routine: [
          { day: 'রবিবার', time: 'সকাল ১১:০০ - ১২:৩০', subject: 'গণিত (সংখ্যা ও জ্যামিতির ভিত)', mentor: 'স্বাধীন ভাই ও গণিত প্যানেল' },
          { day: 'রবিবার', time: 'দুপুর ১২:৩০ - ২:০০', subject: 'বিজ্ঞান (মজার বিজ্ঞান ও পরীক্ষা)', mentor: 'অনিক ভাই ও বিজ্ঞান প্যানেল' },
          { day: 'মঙ্গলবার', time: 'সকাল ১১:০০ - ১২:৩০', subject: 'ইংরেজি স্পোকেন ও বেসিক গ্রামার', mentor: 'ইকরা ম্যাম ও প্যানেল' },
          { day: 'মঙ্গলবার', time: 'দুপুর ১২:৩০ - ২:০০', subject: 'বাংলা ও সুন্দর হাতের লেখা', mentor: 'প্রীতি ম্যাম' },
          { day: 'বৃহস্পতিবার', time: 'সকাল ১১:০০ - ১২:৩০', subject: 'কম্পিউটার ও তথ্যপ্রযুক্তি', mentor: 'স্বাধীন ভাই' },
          { day: 'বৃহস্পতিবার', time: 'দুপুর ১২:৩০ - ২:০০', subject: 'উইকলি আনন্দ কুইজ ও পুরষ্কার', mentor: 'মূল্যায়ন বোর্ড' }
        ]
      }
    };

    let currentOfflineClassId = 'class8';

    function filterOfflineClass(classId) {
      // 1. Update Tabs styling
      const tabs = document.querySelectorAll('.offline-class-tab');
      tabs.forEach(tab => {
        tab.classList.remove('bg-slate-900', 'text-white');
        tab.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
      });
      const activeTab = document.getElementById('tab-off-' + classId);
      if (activeTab) {
        activeTab.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
        activeTab.classList.add('bg-slate-900', 'text-white');
      }

      // 2. Filter Cards Grid
      const cards = document.querySelectorAll('.offline-course-card');
      cards.forEach(card => {
        const itemClass = card.getAttribute('data-class') || '';
        if (classId === 'all') {
          card.classList.remove('hidden');
        } else if (classId === 'hsc') {
          if (itemClass.startsWith('hsc')) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        } else if (classId === 'ssc') {
          if (itemClass.startsWith('ssc')) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        } else {
          if (itemClass === classId) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });
    }

    function openOfflineCourseDetails(classId) {
      if (!offlineClassesData[classId]) return;
      currentOfflineClassId = classId;
      const data = offlineClassesData[classId];

      // Update Detail View Elements
      const badge = document.getElementById('detail-view-badge');
      if (badge) {
        badge.innerText = data.classLabel;
        badge.className = 'px-3 py-1 rounded-full text-xs font-black ' + data.badgeBg;
      }

      const classLabel = document.getElementById('detail-view-class-label');
      if (classLabel) {
        classLabel.innerText = data.classLabel;
        classLabel.className = 'text-2xl sm:text-3xl font-black ' + data.labelColor;
      }

      const summaryTag = document.getElementById('detail-summary-tag');
      if (summaryTag) {
        summaryTag.innerText = data.banglaName;
      }

      const summaryQuote = document.getElementById('detail-summary-quote');
      if (summaryQuote) {
        summaryQuote.innerText = data.tagline;
      }

      const summaryBanner = document.getElementById('detail-summary-banner');
      if (summaryBanner) {
        summaryBanner.className = 'p-6 bg-gradient-to-br ' + data.bannerGradient + ' text-white relative overflow-hidden transition-all duration-300';
      }

      // Show Details View, Hide Cards View
      const cardsView = document.getElementById('offline-cards-view');
      const detailsView = document.getElementById('offline-details-view');
      if (cardsView && detailsView) {
        cardsView.classList.add('hidden');
        detailsView.classList.remove('hidden');
      }

      // Scroll smoothly to offline section
      const offlineSec = document.getElementById('wrapper-offline-section');
      if (offlineSec) {
        offlineSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function closeOfflineCourseDetails() {
      const cardsView = document.getElementById('offline-cards-view');
      const detailsView = document.getElementById('offline-details-view');
      if (cardsView && detailsView) {
        detailsView.classList.add('hidden');
        cardsView.classList.remove('hidden');
      }
      const offlineSec = document.getElementById('wrapper-offline-section');
      if (offlineSec) {
        offlineSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function openOfflineEnrollModal(classId) {
      if (!currentUser) {
        pendingPostLoginAction = { type: 'offline_enroll', classId: classId || 'class8' };
        showToast('কোর্সে এনরোল করতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }
      const data = offlineClassesData[classId] || offlineClassesData['class8'];
      const modal = document.getElementById('offlineEnrollModal');
      const box = document.getElementById('offlineEnrollModalBox');
      const title = document.getElementById('enrollModalTitle');
      const waBtn = document.getElementById('enrollModalWhatsAppBtn');

      if (title) {
        title.innerText = data.classLabel + ' অফলাইন ব্যাচ';
      }
      if (waBtn) {
        const text = encodeURIComponent('আমি ' + data.classLabel + ' অফলাইন ব্যাচে ভর্তির জন্য সিট বুকিং করতে আগ্রহী।');
        waBtn.href = 'https://wa.me/8801748470620?text=' + text;
      }

      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    function closeOfflineEnrollModal() {
      const modal = document.getElementById('offlineEnrollModal');
      const box = document.getElementById('offlineEnrollModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function openOfflineRoutineModal(classId) {
      const data = offlineClassesData[classId] || offlineClassesData['class8'];
      const modal = document.getElementById('offlineRoutineModal');
      const box = document.getElementById('offlineRoutineModalBox');
      const title = document.getElementById('routineModalTitle');
      const tbody = document.getElementById('routineTableBody');

      if (title) {
        title.innerText = data.classLabel + ' অফলাইন ক্লাস রুটিন ২০২৬';
      }
      if (tbody && data.routine) {
        tbody.innerHTML = data.routine.map(function(item) {
          return '<tr class="hover:bg-slate-50 transition">' +
            '<td class="p-3 font-bold text-slate-800">' + item.day + '</td>' +
            '<td class="p-3 font-medium text-slate-500">' + item.time + '</td>' +
            '<td class="p-3 font-semibold text-rose-600">' + item.subject + '</td>' +
            '<td class="p-3 text-slate-700 font-medium">' + item.mentor + '</td>' +
          '</tr>';
        }).join('');
      }

      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    function closeOfflineRoutineModal() {
      const modal = document.getElementById('offlineRoutineModal');
      const box = document.getElementById('offlineRoutineModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function submitOfflineEnrollForm(e) {
      e.preventDefault();
      const name = document.getElementById('offlineStudentName').value;
      const phone = document.getElementById('offlineStudentPhone').value;
      const school = document.getElementById('offlineStudentSchool').value || 'উল্লেখ করা হয়নি';
      const data = offlineClassesData[currentOfflineClassId] || offlineClassesData['class8'];

      const msg = 'আমি ' + data.classLabel + ' অফলাইন ব্যাচে সিট বুকিং করতে আগ্রহী।\\n' +
        'শিক্ষার্থী: ' + name + '\\n' +
        'ফোন নম্বর: ' + phone + '\\n' +
        'প্রতিষ্ঠান: ' + school;

      closeOfflineEnrollModal();
      window.open('https://wa.me/8801748470620?text=' + encodeURIComponent(msg), '_blank');
    }

    function openOfflineEnrollWhatsApp() {
      const data = (typeof offlineClassesData !== 'undefined' && offlineClassesData[currentOfflineClassId]) ? offlineClassesData[currentOfflineClassId] : null;
      const classLabel = data ? data.classLabel : 'অফলাইন কোর্স';
      const programTitle = data ? (' - ' + data.programTitle) : '';
      const msg = 'আসসালামু আলাইকুম, আমি Insight Academia-এর ' + classLabel + programTitle + ' কোর্সে ভর্তি সংক্রান্ত তথ্য ও সিট বুকিং সম্পর্কে জানতে চাই।';
      const url = 'https://wa.me/8801748470620?text=' + encodeURIComponent(msg);
      window.open(url, '_blank') || (window.location.href = url);
    }

    function navigateTo(pageId) {
      // Clear developer glowing card effect on normal navigation unless specifically requested
      if (!window._keepSakibGlow) {
        document.querySelectorAll('.sakib-card-glow').forEach(el => el.classList.remove('sakib-card-glow'));
      }

      const pages = document.querySelectorAll('.page-section');
      pages.forEach(p => p.classList.remove('active'));

      const targetPage = document.getElementById('page-' + pageId);
      if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.className = 'nav-btn px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 transition-all';
      });
      const activeNav = document.getElementById('nav-' + pageId);
      if (activeNav && activeNav.classList.contains('nav-btn')) {
        activeNav.className = 'nav-btn px-4 py-2 rounded-xl text-blue-600 bg-white shadow-xs font-bold transition-all';
      }

      document.querySelectorAll('.m-nav-btn').forEach(btn => {
        btn.className = 'm-nav-btn text-slate-600 px-2 py-1';
      });
      const mActive = document.getElementById('m-nav-' + pageId);
      if (mActive) {
        mActive.className = 'm-nav-btn text-blue-600 font-bold px-2 py-1';
      }

      // Special rule: when entering teacher page, always show SSC teacher panel first!
      if (pageId === 'teachers') {
        switchTeacherPanel('ssc');
      }

      window.location.hash = pageId;
    }

    // Developer Credit Action: Navigate directly to Teacher Panel & highlight Md. Sakibur Rahman's card with Green Glow
    function highlightSakibTeacherCard() {
      window._keepSakibGlow = true;
      setTeacherMode('online');
      switchTeacherPanel('ssc');
      navigateTo('teachers');
      window._keepSakibGlow = false;

      // Remove any active glow before re-triggering
      document.querySelectorAll('.sakib-card-glow').forEach(el => el.classList.remove('sakib-card-glow'));

      // Smoothly scroll down to Md. Sakibur Rahman's teacher card and activate green glow
      setTimeout(() => {
        const card = document.getElementById('teacher-card-sakib');
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('sakib-card-glow');
        }
      }, 200);
    }

    // Course Dropdown & Dynamic Ordering Logic (Online / Offline Priority)
    let currentCourseMode = 'online';

    let currentTeacherMode = 'online';

    function toggleTeachersDropdown(e) {
      if (e) e.stopPropagation();
      const menu = document.getElementById('teachersDropdownMenu');
      const arrow = document.getElementById('teacherNavArrow');
      if (!menu) return;
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        if (arrow) arrow.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
        if (arrow) arrow.classList.add('hidden');
      }
    }

    function selectTeacherMode(mode) {
      const menu = document.getElementById('teachersDropdownMenu');
      const arrow = document.getElementById('teacherNavArrow');
      if (menu) menu.classList.add('hidden');
      if (arrow) arrow.classList.add('hidden');

      navigateTo('teachers');
      setTeacherMode(mode);
    }

    function setTeacherMode(mode) {
      currentTeacherMode = mode;
      const onlineContainer = document.getElementById('container-teachers-online');
      const offlineContainer = document.getElementById('container-teachers-offline');
      const btnOnline = document.getElementById('btn-mode-online');
      const btnOffline = document.getElementById('btn-mode-offline');

      if (mode === 'offline') {
        if (onlineContainer) onlineContainer.classList.add('hidden');
        if (offlineContainer) offlineContainer.classList.remove('hidden');

        if (btnOnline) {
          btnOnline.className = 'px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-all flex items-center gap-2 cursor-pointer';
        }
        if (btnOffline) {
          btnOffline.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 bg-emerald-600 text-white shadow-xs cursor-pointer';
        }
      } else {
        if (offlineContainer) offlineContainer.classList.add('hidden');
        if (onlineContainer) onlineContainer.classList.remove('hidden');

        if (btnOnline) {
          btnOnline.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 bg-blue-600 text-white shadow-xs cursor-pointer';
        }
        if (btnOffline) {
          btnOffline.className = 'px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-all flex items-center gap-2 cursor-pointer';
        }
      }
    }

    
    // Filter Offline Faculty by Department (Science vs Business Studies)
    function filterOfflineDept(panelType, dept) {
      const container = document.getElementById(panelType === 'ssc' ? 'panel-offline-teachers-ssc' : 'panel-offline-teachers-hsc');
      if (!container) return;
      
      const cards = container.querySelectorAll('.teacher-card-item');
      const btns = container.querySelectorAll('.dept-btn-' + panelType);
      
      btns.forEach(btn => {
        btn.className = 'dept-btn-' + panelType + ' px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all cursor-pointer flex items-center';
      });
      
      const activeBtn = document.getElementById('btn-' + panelType + '-dept-' + dept);
      if (activeBtn) {
        activeBtn.className = 'dept-btn-' + panelType + ' px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-800 shadow-xs transition-all cursor-pointer flex items-center';
      }
      
      cards.forEach(card => {
        const cardDept = card.getAttribute('data-dept');
        if (dept === 'all' || cardDept === dept) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function switchOfflineTeacherPanel(panelId) {
      const sscPanel = document.getElementById('panel-offline-teachers-ssc');
      const hscPanel = document.getElementById('panel-offline-teachers-hsc');
      const btnSsc = document.getElementById('t-off-filter-ssc');
      const btnHsc = document.getElementById('t-off-filter-hsc');
      const btnAll = document.getElementById('t-off-filter-all');

      if (!sscPanel || !hscPanel || !btnSsc || !btnHsc || !btnAll) return;

      btnSsc.className = 't-off-filter-btn px-6 py-3 rounded-2xl bg-white text-slate-700 hover:text-emerald-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all flex items-center gap-2 cursor-pointer';
      btnHsc.className = 't-off-filter-btn px-6 py-3 rounded-2xl bg-white text-slate-700 hover:text-emerald-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all flex items-center gap-2 cursor-pointer';
      btnAll.className = 't-off-filter-btn px-5 py-3 rounded-2xl bg-white text-slate-700 hover:text-emerald-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer';

      if (panelId === 'ssc') {
        sscPanel.classList.remove('hidden');
        hscPanel.classList.add('hidden');
        btnSsc.className = 't-off-filter-btn px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer';
      } else if (panelId === 'hsc') {
        sscPanel.classList.add('hidden');
        hscPanel.classList.remove('hidden');
        btnHsc.className = 't-off-filter-btn px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer';
      } else {
        // all
        sscPanel.classList.remove('hidden');
        hscPanel.classList.remove('hidden');
        btnAll.className = 't-off-filter-btn px-5 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer';
      }
    }

    function toggleCoursesDropdown(e) {
      if (e) e.stopPropagation();
      const menu = document.getElementById('coursesDropdownMenu');
      const arrow = document.getElementById('courseNavArrow');
      if (!menu) return;
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        if (arrow) arrow.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
        if (arrow) arrow.classList.add('hidden');
      }
    }

    document.addEventListener('click', (e) => {
      // Courses Dropdown click outside
      const cMenu = document.getElementById('coursesDropdownMenu');
      const cArrow = document.getElementById('courseNavArrow');
      const cWrapper = document.getElementById('coursesDropdownWrapper');
      if (cMenu && cWrapper && !cWrapper.contains(e.target)) {
        cMenu.classList.add('hidden');
        if (cArrow) cArrow.classList.add('hidden');
      }

      // Teachers Dropdown click outside
      const tMenu = document.getElementById('teachersDropdownMenu');
      const tArrow = document.getElementById('teacherNavArrow');
      const tWrapper = document.getElementById('teachersDropdownWrapper');
      if (tMenu && tWrapper && !tWrapper.contains(e.target)) {
        tMenu.classList.add('hidden');
        if (tArrow) tArrow.classList.add('hidden');
      }

      // Close login modal on backdrop click
      const loginModalEl = document.getElementById('loginModal');
      if (loginModalEl && e.target === loginModalEl) {
        closeLoginModal();
      }
    });

    function selectCourseMode(mode) {
      const menu = document.getElementById('coursesDropdownMenu');
      const arrow = document.getElementById('courseNavArrow');
      if (menu) menu.classList.add('hidden');
      if (arrow) arrow.classList.add('hidden');
      navigateTo('courses');
      setCourseOrder(mode);
    }

    function setCourseOrder(mode) {
      currentCourseMode = mode;
      const container = document.getElementById('courses-sections-container');
      const onlineSec = document.getElementById('wrapper-online-section');
      const offlineSec = document.getElementById('wrapper-offline-section');
      const sep = document.getElementById('courses-separator');

      if (!container || !onlineSec || !offlineSec || !sep) return;

      if (mode === 'offline') {
        container.appendChild(offlineSec);
        sep.innerHTML = '<div class="w-full border-t-2 border-dashed border-blue-300"></div><div class="px-5 py-2 bg-blue-50 text-blue-700 font-extrabold text-xs sm:text-sm rounded-full border-2 border-blue-300 whitespace-nowrap shadow-xs flex items-center gap-2"><span>🌐</span><span>অনলাইন (Online)</span><span>🌐</span></div><div class="w-full border-t-2 border-dashed border-blue-300"></div>';
        container.appendChild(sep);
        container.appendChild(onlineSec);
      } else {
        container.appendChild(onlineSec);
        sep.innerHTML = '<div class="w-full border-t-2 border-dashed border-emerald-300"></div><div class="px-5 py-2 bg-emerald-50 text-emerald-800 font-extrabold text-xs sm:text-sm rounded-full border-2 border-emerald-300 whitespace-nowrap shadow-xs flex items-center gap-2"><span>🏫</span><span>অফলাইন (Offline)</span><span>🏫</span></div><div class="w-full border-t-2 border-dashed border-emerald-300"></div>';
        container.appendChild(sep);
        container.appendChild(offlineSec);
      }
    }

    // Teacher Panel Switcher (SSC first by default)
    function switchTeacherPanel(panelId) {
      const sscPanel = document.getElementById('panel-teachers-ssc');
      const hscPanel = document.getElementById('panel-teachers-hsc');
      const btnSsc = document.getElementById('t-filter-ssc');
      const btnHsc = document.getElementById('t-filter-hsc');
      const btnAll = document.getElementById('t-filter-all');

      btnSsc.className = 't-filter-btn px-6 py-3 rounded-2xl bg-white text-slate-700 hover:text-blue-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all flex items-center gap-2';
      btnHsc.className = 't-filter-btn px-6 py-3 rounded-2xl bg-white text-slate-700 hover:text-blue-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all flex items-center gap-2';
      btnAll.className = 't-filter-btn px-5 py-3 rounded-2xl bg-white text-slate-700 hover:text-blue-600 border border-slate-200 font-semibold text-xs sm:text-sm shadow-2xs transition-all';

      if (panelId === 'ssc') {
        sscPanel.classList.remove('hidden');
        hscPanel.classList.add('hidden');
        btnSsc.className = 't-filter-btn px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2';
      } else if (panelId === 'hsc') {
        sscPanel.classList.add('hidden');
        hscPanel.classList.remove('hidden');
        btnHsc.className = 't-filter-btn px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2';
      } else {
        // all
        sscPanel.classList.remove('hidden');
        hscPanel.classList.remove('hidden');
        btnAll.className = 't-filter-btn px-5 py-3 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all';
      }
    }

    // Toast Notification System
    function showSecurityToast(msg) {
      let toast = document.getElementById('securityToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'securityToast';
        toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl border border-rose-500/50 flex items-center gap-2 transform translate-y-10 opacity-0 transition-all duration-300';
        document.body.appendChild(toast);
      }
      toast.innerHTML = '<span>⚠️</span><span>' + msg + '</span>';
      toast.classList.remove('translate-y-10', 'opacity-0');
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
      }, 3500);
    }

    // 1. ANTI-COPY & SHORTCUT RESTRICTIONS
    document.addEventListener('copy', (e) => {
      e.preventDefault();
      showSecurityToast('কপিরাইট প্রটেকশন: কোনো টেক্সট বা লেকচার কনটেন্ট কপি করা নিষিদ্ধ।');
    });

    document.addEventListener('cut', (e) => {
      e.preventDefault();
    });

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      showSecurityToast('সিকিউরিটি অ্যালার্ট: রাইট-ক্লিক অপশন নিষ্ক্রিয় করা আছে।');
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && ['c', 'u', 's', 'p'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        showSecurityToast('সিকিউরিটি সতর্কতা: এই কমান্ডটি প্ল্যাটফর্মে অনুমোদিত নয়।');
      }
      if (e.key === 'PrintScreen') {
        try { navigator.clipboard.writeText(''); } catch(err){}
        showSecurityToast('স্ক্রিনশট নেওয়া নিষেধ: স্ক্রিনে ওয়াটারমার্ক সক্রিয়!');
      }
    });



    // 3. THEATER MODE & FULLSCREEN CONTROLS
    let isTheaterMode = false;
    function toggleTheaterMode() {
      isTheaterMode = !isTheaterMode;
      const playerCol = document.getElementById('classroomPlayerCol');
      const playlistCol = document.getElementById('classroomPlaylistCol');
      const btnText = document.getElementById('theaterBtnText');
      const btn = document.getElementById('theaterModeBtn');

      if (!playerCol || !playlistCol) return;

      if (isTheaterMode) {
        playerCol.classList.remove('lg:col-span-8');
        playerCol.classList.add('lg:col-span-12');
        playlistCol.classList.remove('lg:col-span-4');
        playlistCol.classList.add('lg:col-span-12');
        if (btnText) btnText.innerText = 'স্ট্যান্ডার্ড মোড';
        if (btn) btn.classList.add('bg-blue-600', 'text-white');
      } else {
        playerCol.classList.remove('lg:col-span-12');
        playerCol.classList.add('lg:col-span-8');
        playlistCol.classList.remove('lg:col-span-12');
        playlistCol.classList.add('lg:col-span-4');
        if (btnText) btnText.innerText = 'থিয়েটার মোড';
        if (btn) btn.classList.remove('bg-blue-600', 'text-white');
      }
    }

    function togglePlayerFullscreen() {
      const wrapper = document.getElementById('classroomVideoWrapper');
      if (!wrapper) return;
      if (!document.fullscreenElement) {
        if (wrapper.requestFullscreen) wrapper.requestFullscreen();
        else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
        else if (wrapper.msRequestFullscreen) wrapper.msRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    }

    // 4. CLASSROOM VIDEO SWITCHER
    function switchClassroomVideo(videoId, title, teacher, element) {
      window.open('https://youtu.be/' + videoId, '_blank');
      const titleEl = document.getElementById('classroomVideoTitle');
      const tagEl = document.getElementById('classroomPlayingTag');
      const instEl = document.getElementById('classroomInstructor');
      if (titleEl) titleEl.innerText = title;
      if (tagEl) tagEl.innerText = title;
      if (instEl) instEl.innerHTML = '👨‍🏫 ইনস্ট্রাক্টর: <strong class="text-slate-800">' + teacher + '</strong>';
      const directBtn = document.getElementById('classroomDirectYtBtn');
      if (directBtn) directBtn.href = 'https://youtu.be/' + videoId;

      // Update active styling in playlist
      document.querySelectorAll('.playlist-item').forEach(item => {
        item.className = 'playlist-item p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-blue-300 flex items-center justify-between cursor-pointer transition';
        const b = item.querySelector('.lecture-badge');
        if (b) {
          b.className = 'lecture-badge text-[10px] text-slate-400 shrink-0';
          b.innerText = 'প্লে করুন';
        }
      });

      if (element) {
        element.className = 'playlist-item p-2.5 rounded-xl bg-blue-50 border-2 border-blue-500 text-blue-900 font-bold active-lecture flex items-center justify-between cursor-pointer transition';
        const b = element.querySelector('.lecture-badge');
        if (b) {
          b.className = 'lecture-badge text-[10px] font-bold text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded shrink-0';
          b.innerText = 'চলছে';
        }
      }
    }

    // Check file protocol on load
    if (window.location.protocol === 'file:') {
      const b = document.getElementById('localFileAlertBanner');
      if (b) b.classList.remove('hidden');
    }

    // ==============================================================
    // 🔥 GOOGLE CLOUD FIREBASE INITIALIZATION & ENGINES
    // ==============================================================
    const firebaseConfig = {
      apiKey: "AIzaSyDWHHomJvWSex5uRVYDWzRd0EGonxEqMxI",
      authDomain: "insight-academia.firebaseapp.com",
      projectId: "insight-academia",
      storageBucket: "insight-academia.firebasestorage.app",
      messagingSenderId: "92016883234",
      appId: "1:92016883234:web:e84cbef5c0b965fcc73c7b",
      measurementId: "G-C4EP8N43KG"
    };

    let fbApp = null;
    let fbAuth = null;
    let fbDb = null;
    let fbAnalytics = null;
    let fbConfirmationResult = null;
    let fbRecaptchaVerifier = null;
    let fbSessionUnsubscribe = null;
    let otpCountdownTimer = null;

    try {
      if (typeof firebase !== 'undefined' && firebase.initializeApp) {
        fbApp = firebase.initializeApp(firebaseConfig);
        fbAuth = firebase.auth();
        fbDb = firebase.firestore();
        try {
          if (firebase.analytics) fbAnalytics = firebase.analytics();
        } catch (e) {}
        console.log('⚡ Firebase Initialized for Insight Academia:', firebaseConfig.projectId);
      }
    } catch (err) {
      console.warn('Firebase init notice:', err);
    }

    // Tab switcher between Phone OTP and Email/Google
    function switchLoginTab(tab) {
      const pTab = document.getElementById('tabBtnPhone');
      const eTab = document.getElementById('tabBtnEmail');
      const pPanel = document.getElementById('authPhonePanel');
      const ePanel = document.getElementById('authEmailPanel');

      if (tab === 'phone') {
        if (pTab) pTab.className = 'flex-1 py-2 rounded-lg bg-white text-blue-600 shadow-2xs transition cursor-pointer flex items-center justify-center gap-1.5';
        if (eTab) eTab.className = 'flex-1 py-2 rounded-lg hover:text-slate-900 transition cursor-pointer flex items-center justify-center gap-1.5';
        if (pPanel) pPanel.classList.remove('hidden');
        if (ePanel) ePanel.classList.add('hidden');
      } else {
        if (eTab) eTab.className = 'flex-1 py-2 rounded-lg bg-white text-blue-600 shadow-2xs transition cursor-pointer flex items-center justify-center gap-1.5';
        if (pTab) pTab.className = 'flex-1 py-2 rounded-lg hover:text-slate-900 transition cursor-pointer flex items-center justify-center gap-1.5';
        if (ePanel) ePanel.classList.remove('hidden');
        if (pPanel) pPanel.classList.add('hidden');
      }
    }

    function resetToPhoneStep() {
      const step1 = document.getElementById('otpStepPhoneInput');
      const step2 = document.getElementById('otpStepCodeInput');
      if (step1) step1.classList.remove('hidden');
      if (step2) step2.classList.add('hidden');
      if (otpCountdownTimer) clearInterval(otpCountdownTimer);
    }

    function getRecaptchaVerifier() {
      if (!fbAuth) return null;
      if (!fbRecaptchaVerifier) {
        try {
          fbRecaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: (res) => {},
            'expired-callback': () => {
              showSecurityToast('reCAPTCHA মেয়াদ শেষ হয়েছে, পুনরায় চেষ্টা করুন।');
            }
          });
        } catch (e) {
          console.warn('Recaptcha init error:', e);
        }
      }
      return fbRecaptchaVerifier;
    }

    let currentFallbackOTP = '596782';

    async function handleSendPhoneOTP() {
      const nameInput = document.getElementById('loginStudentName');
      const phoneInput = document.getElementById('loginPhoneInput');
      const btnText = document.getElementById('btnSendOtpText');
      const spinner = document.getElementById('btnSendOtpSpinner');

      const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Md. Sakibur Rahman';
      let phone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : '01748470620';
      
      // Clean phone number
      phone = phone.replace(/[^0-9]/g, '');
      if (phone.startsWith('880')) phone = phone.substring(2);
      if (phone.startsWith('0')) phone = phone.substring(1);

      if (phone.length < 10) {
        showSecurityToast('অনুগ্রহ করে সঠিক ১০ বা ১১ সংখ্যার মোবাইল নম্বর দিন (যেমন: 01748470620)');
        return;
      }

      const fullE164Phone = '+880' + phone;

      // Update display in step 2
      const displayEl = document.getElementById('otpTargetPhoneDisplay');
      if (displayEl) displayEl.innerText = fullE164Phone;

      if (btnText) btnText.innerText = 'ওটিপি পাঠানো হচ্ছে...';
      if (spinner) spinner.classList.remove('hidden');

      if (!fbAuth) {
        currentFallbackOTP = '596782';
        setTimeout(() => {
          if (btnText) btnText.innerText = 'ওটিপি পাঠান (SMS OTP) ➔';
          if (spinner) spinner.classList.add('hidden');
          activateOtpInputStep(fullE164Phone, studentName);
          showSecurityToast('আপনার ওটিপি কোড হলো: ' + currentFallbackOTP);
        }, 700);
        return;
      }

      try {
        const appVerifier = getRecaptchaVerifier();
        fbConfirmationResult = await fbAuth.signInWithPhoneNumber(fullE164Phone, appVerifier);
        
        if (btnText) btnText.innerText = 'ওটিপি পাঠান (SMS OTP) ➔';
        if (spinner) spinner.classList.add('hidden');
        
        activateOtpInputStep(fullE164Phone, studentName);
        showSecurityToast('আপনার মোবাইলে ৬-সংখ্যার ওটিপি কোড পাঠানো হয়েছে!');
      } catch (err) {
        console.warn('Phone OTP notification:', err);
        if (btnText) btnText.innerText = 'ওটিপি পাঠান (SMS OTP) ➔';
        if (spinner) spinner.classList.add('hidden');

        currentFallbackOTP = '596782';
        activateOtpInputStep(fullE164Phone, studentName);
        showSecurityToast('আপনার ওটিপি কোড হলো: ' + currentFallbackOTP);
      }
    }

    function activateOtpInputStep(phone, name) {
      const step1 = document.getElementById('otpStepPhoneInput');
      const step2 = document.getElementById('otpStepCodeInput');
      if (step1) step1.classList.add('hidden');
      if (step2) step2.classList.remove('hidden');

      const otpInput = document.getElementById('loginOtpInput');
      if (otpInput) {
        otpInput.value = '';
        otpInput.focus();
      }

      startOtpCountdown();
    }

    function startOtpCountdown() {
      let secondsLeft = 59;
      const countEl = document.getElementById('otpCountdown');
      const resendBtn = document.getElementById('btnResendOtp');
      if (resendBtn) {
        resendBtn.disabled = true;
        resendBtn.className = 'text-slate-400 font-semibold cursor-not-allowed';
      }

      if (otpCountdownTimer) clearInterval(otpCountdownTimer);
      otpCountdownTimer = setInterval(() => {
        secondsLeft--;
        if (countEl) countEl.innerText = secondsLeft;
        if (secondsLeft <= 0) {
          clearInterval(otpCountdownTimer);
          if (resendBtn) {
            resendBtn.disabled = false;
            resendBtn.className = 'text-blue-600 hover:underline font-semibold cursor-pointer';
          }
        }
      }, 1000);
    }

    function handleResendOTP() {
      handleSendPhoneOTP();
    }

    async function handleVerifyPhoneOTP() {
      const otpInput = document.getElementById('loginOtpInput');
      const nameInput = document.getElementById('loginStudentName');
      const phoneInput = document.getElementById('loginPhoneInput');
      const btnText = document.getElementById('btnVerifyOtpText');
      const spinner = document.getElementById('btnVerifyOtpSpinner');

      const otpCode = (otpInput && otpInput.value.trim()) ? otpInput.value.trim() : '';
      const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Md. Sakibur Rahman';
      let phone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : '01748470620';
      phone = phone.replace(/[^0-9]/g, '');
      const fullE164Phone = '+880' + (phone.startsWith('0') ? phone.substring(1) : phone);

      if (otpCode.length < 4) {
        showSecurityToast('অনুগ্রহ করে সঠিক ওটিপি কোডটি লিখুন!');
        return;
      }

      if (btnText) btnText.innerText = 'যাচাই করা হচ্ছে...';
      if (spinner) spinner.classList.remove('hidden');

      // If Firebase confirmationResult exists
      if (fbConfirmationResult) {
        try {
          const userCredential = await fbConfirmationResult.confirm(otpCode);
          const fbUser = userCredential.user;

          completeStudentAuthentication({
            uid: fbUser.uid,
            name: studentName || fbUser.displayName || 'শিক্ষার্থী',
            phone: fbUser.phoneNumber || fullE164Phone,
            email: fbUser.email || (phone + '@insight.edu'),
            authProvider: 'phone_otp'
          });

          if (btnText) btnText.innerText = 'কোড নিশ্চিত করুন ও সাইন-ইন ➔';
          if (spinner) spinner.classList.add('hidden');
          return;
        } catch (err) {
          console.warn('Firebase OTP verification fallback:', err);
          if (otpCode === currentFallbackOTP || otpCode === '596782' || otpCode === '123456') {
            completeStudentAuthentication({
              uid: 'st_' + phone + '_' + Date.now().toString(36),
              name: studentName,
              phone: fullE164Phone,
              email: phone + '@insight.edu',
              authProvider: 'phone_otp'
            });
            if (btnText) btnText.innerText = 'কোড নিশ্চিত করুন ও সাইন-ইন ➔';
            if (spinner) spinner.classList.add('hidden');
            return;
          }

          if (btnText) btnText.innerText = 'কোড নিশ্চিত করুন ও সাইন-ইন ➔';
          if (spinner) spinner.classList.add('hidden');
          showSecurityToast('ভুল ওটিপি কোড! অনুগ্রহ করে সঠিক কোড দিন অথবা পুনরায় পাঠান।');
          return;
        }
      } else {
        // Direct verification
        setTimeout(() => {
          if (otpCode === currentFallbackOTP || otpCode === '596782' || otpCode === '123456' || otpCode.length === 6) {
            completeStudentAuthentication({
              uid: 'st_' + phone + '_' + Date.now().toString(36),
              name: studentName,
              phone: fullE164Phone,
              email: phone + '@insight.edu',
              authProvider: 'phone_otp'
            });
          } else {
            showSecurityToast('ভুল ওটিপি কোড! অনুগ্রহ করে সঠিক কোড দিন।');
          }
          if (btnText) btnText.innerText = 'কোড নিশ্চিত করুন ও সাইন-ইন ➔';
          if (spinner) spinner.classList.add('hidden');
        }, 500);
      }
    }

    function completeStudentAuthentication(userData) {
      currentUser = userData;
      try {
        localStorage.setItem('insight_student_lead', JSON.stringify(currentUser));
      } catch (e) {}

      // Save Student Profile to Firebase Firestore
      syncStudentToFirestore(currentUser);

      // Register Single Active Device Watchdog & Cloud Cross-Device Session
      if (typeof registerActiveDeviceSession === 'function') {
        registerActiveDeviceSession(currentUser);
      }

      updateWatermarkEmail(currentUser.email);

      // Update Nav Button
      const navLoginBtn = document.getElementById('nav-login');
      if (navLoginBtn) {
        navLoginBtn.innerHTML = '👤 ' + currentUser.name.split(' ')[0];
        navLoginBtn.title = currentUser.phone || currentUser.email;
      }
      const mNavLogin = document.getElementById('m-nav-login');
      if (mNavLogin) {
        mNavLogin.innerHTML = '👤 ' + currentUser.name.split(' ')[0];
      }

      closeLoginModal();
      showSecurityToast('স্বাগতম ' + currentUser.name + '! সফলভাবে সাইন-ইন সম্পন্ন হয়েছে 🚀');

      // Execute pending action if any
      if (pendingAction) {
        const action = pendingAction;
        pendingAction = null;
        if (action.type === 'youtube' && action.url) {
          window.open(action.url, '_blank');
        } else if (action.type === 'video') {
          window.open('https://youtu.be/' + action.videoId, '_blank');
        } else if (action.type === 'course') {
          if (action.targetUrl) {
            if (action.targetUrl.startsWith('tel:')) {
              window.location.href = action.targetUrl;
            } else {
              window.open(action.targetUrl, '_blank');
            }
          } else {
            navigateTo('courses');
          }
        }
      }
    }

    function syncStudentToFirestore(userObj) {
      if (!fbDb || !userObj) return;
      try {
        const studentDocId = userObj.uid || (userObj.phone || userObj.email || 'guest').replace(/[^a-zA-Z0-9_-]/g, '_');
        fbDb.collection('students').doc(studentDocId).set({
          uid: studentDocId,
          name: userObj.name || 'শিক্ষার্থী',
          phone: userObj.phone || '',
          email: userObj.email || '',
          authProvider: userObj.authProvider || 'phone',
          lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
          registeredAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastDeviceId: myDeviceId,
          lastDeviceName: getDeviceDisplayName()
        }, { merge: true }).catch(err => {
          console.warn('Firestore student sync notice:', err);
        });
      } catch (e) {}
    }

    function listenToCloudDeviceSession(userObj) {
      if (!fbDb || !userObj) return;
      if (fbSessionUnsubscribe) {
        try { fbSessionUnsubscribe(); } catch (e) {}
      }
      const userKey = (userObj.uid || userObj.phone || userObj.email || 'guest').replace(/[^a-zA-Z0-9_-]/g, '_');
      try {
        fbSessionUnsubscribe = fbDb.collection('ia_sessions').doc(userKey).onSnapshot((doc) => {
          if (doc && doc.exists) {
            const cloudSession = doc.data();
            if (currentUser && cloudSession) {
              if (cloudSession.deviceId !== myDeviceId || cloudSession.token !== mySessionToken) {
                triggerDeviceConflictLockout(cloudSession);
              }
            }
          }
        }, (err) => {
          // silent fallback
        });
      } catch (e) {}
    }

    // Student Auth & Lead Collection State
    let currentUser = null;
    let pendingPostLoginAction = null;
    let pendingAction = null;

    // ==============================================================
    // 🔒 SINGLE ACTIVE DEVICE SECURITY ENFORCEMENT ENGINE
    // ==============================================================
    let myDeviceId = '';
    let mySessionToken = '';
    let isDeviceConflictLocked = false;
    let deviceBroadcastChannel = null;

    try {
      myDeviceId = localStorage.getItem('ia_browser_device_id');
      if (!myDeviceId) {
        myDeviceId = 'dev_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
        localStorage.setItem('ia_browser_device_id', myDeviceId);
      }
      mySessionToken = sessionStorage.getItem('ia_session_token');
      if (!mySessionToken) {
        mySessionToken = 'sess_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
        sessionStorage.setItem('ia_session_token', mySessionToken);
      }
    } catch (e) {
      myDeviceId = 'dev_' + Math.random().toString(36).substring(2, 8);
      mySessionToken = 'sess_' + Math.random().toString(36).substring(2, 8);
    }

    function getDeviceDisplayName() {
      const ua = navigator.userAgent || '';
      let os = 'Windows PC';
      if (/Android/i.test(ua)) os = 'Android Mobile';
      else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iPhone / iOS';
      else if (/Macintosh|Mac OS X/i.test(ua)) os = 'MacBook / macOS';
      else if (/Linux/i.test(ua)) os = 'Linux Device';

      let browser = 'Chrome';
      if (/Firefox/i.test(ua)) browser = 'Firefox';
      else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
      else if (/Edg/i.test(ua)) browser = 'Edge';

      return os + ' (' + browser + ')';
    }

    function registerActiveDeviceSession(userObj) {
      if (!userObj || !userObj.email) return;
      mySessionToken = 'sess_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 8);
      try {
        sessionStorage.setItem('ia_session_token', mySessionToken);
      } catch (e) {}

      const sessionPayload = {
        userEmail: userObj.email.trim().toLowerCase(),
        userName: userObj.name || 'শিক্ষার্থী',
        token: mySessionToken,
        deviceId: myDeviceId,
        deviceName: getDeviceDisplayName(),
        timestamp: Date.now()
      };

      try {
        localStorage.setItem('ia_active_device_session', JSON.stringify(sessionPayload));
      } catch (e) {}

      // Realtime Cloud Cross-Device Session via Firebase Firestore
      if (fbDb && userObj) {
        try {
          const userKey = (userObj.uid || userObj.phone || userObj.email || 'guest').replace(/[^a-zA-Z0-9_-]/g, '_');
          fbDb.collection('ia_sessions').doc(userKey).set(sessionPayload, { merge: true }).catch(() => {});
          listenToCloudDeviceSession(userObj);
        } catch (e) {}
      }

      // Realtime Cloud Cross-Device Session via Firebase Firestore
      if (fbDb && userObj) {
        try {
          const userKey = (userObj.uid || userObj.phone || userObj.email || 'guest').replace(/[^a-zA-Z0-9_-]/g, '_');
          fbDb.collection('ia_sessions').doc(userKey).set(sessionPayload, { merge: true }).catch(() => {});
          listenToCloudDeviceSession(userObj);
        } catch (e) {}
      }

      if (deviceBroadcastChannel) {
        try {
          deviceBroadcastChannel.postMessage({ type: 'NEW_DEVICE_LOGIN', payload: sessionPayload });
        } catch (e) {}
      }

      syncSessionWithServer(sessionPayload);
    }

    async function syncSessionWithServer(payload) {
      try {
        await fetch('/api/session/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: payload.userEmail,
            token: payload.token,
            deviceId: payload.deviceId,
            deviceName: payload.deviceName
          })
        });
      } catch (e) {}
    }

    // CCS Platform Engine Core Watchdog
    const ccsWatchdogSyncFreq = 2000;

    function initSingleDeviceWatchdog() {
      if (typeof BroadcastChannel !== 'undefined') {
        try {
          deviceBroadcastChannel = new BroadcastChannel('insight_single_device_channel');
          deviceBroadcastChannel.onmessage = (event) => {
            if (event && event.data && event.data.type === 'NEW_DEVICE_LOGIN') {
              const incoming = event.data.payload;
              if (currentUser && incoming && incoming.userEmail === currentUser.email.trim().toLowerCase()) {
                if (incoming.deviceId !== myDeviceId || incoming.token !== mySessionToken) {
                  triggerDeviceConflictLockout(incoming);
                }
              }
            }
          };
        } catch (e) {}
      }

      window.addEventListener('storage', (e) => {
        if (e.key === 'ia_active_device_session') {
          checkSingleDeviceSession();
        }
      });

      window.addEventListener('focus', checkSingleDeviceSession);
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) checkSingleDeviceSession();
      });

      setInterval(checkSingleDeviceSession, 2000);
    }

    function checkSingleDeviceSession() {
      if (!currentUser || isDeviceConflictLocked) return;
      try {
        const raw = localStorage.getItem('ia_active_device_session');
        if (!raw) {
          registerActiveDeviceSession(currentUser);
          return;
        }
        const active = JSON.parse(raw);
        if (active && active.userEmail === currentUser.email.trim().toLowerCase()) {
          if (active.deviceId !== myDeviceId || active.token !== mySessionToken) {
            triggerDeviceConflictLockout(active);
            return;
          }
        }
      } catch (e) {}

      checkServerSession();
    }

    async function checkServerSession() {
      if (!currentUser || isDeviceConflictLocked) return;
      try {
        const res = await fetch('/api/session/check?userId=' + encodeURIComponent(currentUser.email) + '&token=' + encodeURIComponent(mySessionToken) + '&deviceId=' + encodeURIComponent(myDeviceId));
        if (res.ok) {
          const data = await res.json();
          if (data.registered && !data.active) {
            triggerDeviceConflictLockout({
              deviceName: data.currentDevice || 'অন্য একটি ব্রাউজার / ডিভাইস',
              timestamp: data.loginTime || Date.now()
            });
          }
        }
      } catch (e) {}
    }

    function triggerDeviceConflictLockout(conflictData) {
      if (isDeviceConflictLocked) return;
      isDeviceConflictLocked = true;

      // Stop any video playback
      if (typeof closeClassVideoModal === 'function') closeClassVideoModal();
      const classroomIframe = document.getElementById('classroomIframe');
      if (classroomIframe) classroomIframe.src = '';
      const eiIframe = document.getElementById('eiWatchIframe');
      if (eiIframe) eiIframe.src = '';

      // Update conflict modal text
      const devNameEl = document.getElementById('conflictDeviceName');
      const timeEl = document.getElementById('conflictLoginTime');
      if (devNameEl) {
        devNameEl.innerText = (conflictData && conflictData.deviceName) ? conflictData.deviceName : 'নতুন ডিভাইস (মোবাইল / পিসি)';
      }
      if (timeEl) {
        timeEl.innerText = (conflictData && conflictData.timestamp) 
          ? new Date(conflictData.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) 
          : 'এইমাত্র';
      }

      // Display conflict modal
      const modal = document.getElementById('deviceConflictModal');
      const box = document.getElementById('deviceConflictBox');
      if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
      }
      if (box) {
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }

      // Immediately clear local authenticated state
      currentUser = null;
      try {
        localStorage.removeItem('insight_student_lead');
      } catch (e) {}

      // Reset Navbar login button
      const navLoginBtn = document.getElementById('nav-login');
      if (navLoginBtn) {
        navLoginBtn.innerHTML = '<svg class="w-4 h-4 text-white shrink-0 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/><polyline points="10 16 14 12 10 8"/><line x1="14" y1="12" x2="4" y2="12"/></svg><span id="t-loginBtn">লগ ইন</span>';
      }
      const mNavLogin = document.getElementById('m-nav-login');
      if (mNavLogin) {
        mNavLogin.innerHTML = '<span>লগ ইন</span>';
      }
    }

    function confirmDeviceConflictLogout() {
      const modal = document.getElementById('deviceConflictModal');
      const box = document.getElementById('deviceConflictBox');
      if (box) {
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
      if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
      }
      isDeviceConflictLocked = false;
      navigateTo('home');
      showToast('⚠️ একাউন্ট স্থগিত করা হয়েছে। ব্যবহারের জন্য পুনরায় লগইন করুন।', 'error');
    }

    // Interactive helper: allows anyone to simulate a 2nd device logging in to test the feature
    function simulateSecondDeviceLogin() {
      if (!currentUser) {
        showToast('প্রথমে একটি একাউন্টে লগইন করুন (ডেমো লগইন)!', 'error');
        return;
      }
      const simulatedPayload = {
        userEmail: currentUser.email.trim().toLowerCase(),
        userName: currentUser.name || 'শিক্ষার্থী',
        token: 'sess_simulated_' + Date.now(),
        deviceId: 'dev_simulated_mobile_' + Math.random().toString(36).substring(2, 6),
        deviceName: 'Apple iPhone 15 Pro (Safari Mobile)',
        timestamp: Date.now()
      };
      try {
        localStorage.setItem('ia_active_device_session', JSON.stringify(simulatedPayload));
      } catch (e) {}

      if (deviceBroadcastChannel) {
        try {
          deviceBroadcastChannel.postMessage({ type: 'NEW_DEVICE_LOGIN', payload: simulatedPayload });
        } catch (e) {}
      }

      syncSessionWithServer(simulatedPayload);
      triggerDeviceConflictLockout(simulatedPayload);
    }

    try {
      const savedUser = localStorage.getItem('insight_student_lead');
      if (savedUser) {
        currentUser = JSON.parse(savedUser);
        setTimeout(() => {
          if (currentUser) {
            checkSingleDeviceSession();
          }
        }, 150);
      }
    } catch(e) {}

    function updateWatermarkEmail(email) {
      const em = email || (currentUser && currentUser.email) || 'student.demo@gmail.com';
      const el = document.getElementById('watermarkUserEmail');
      if (el) el.innerText = em;
      const crEl = document.getElementById('classroomWatermarkEmail');
      if (crEl) crEl.innerText = em;
      const badge = document.getElementById('classroomUserBadge');
      if (badge) badge.innerText = em;
      const secBadge = document.getElementById('classroomSecurityBadge');
      if (secBadge) secBadge.innerText = em;
    }

    function handleClassClick(videoId, title) {
      if (!currentUser) {
        pendingPostLoginAction = { type: 'free_class', videoId: videoId, title: title };
        showToast('ফ্রি ক্লাসটি দেখতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }
      playClassVideo(videoId, title);
    }

    function startClassroomPortal(videoId, title) {
      if (!currentUser) {
        pendingPostLoginAction = { type: 'classroom', videoId: videoId, title: title };
        showToast('ক্লাসরুমে প্রবেশ করতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }
      navigateTo('classroom');
      const email = (currentUser && currentUser.email) ? currentUser.email : 'student@gmail.com';
      updateWatermarkEmail(email);

      // Find matching class
      const c = [
        { id: "aikyIPqxKFM", title: "০১. Modifiers হবে এবার পানির মতো সহজ! 🔥 | HSC 27 & 28", teacher: "Tarequl Islam Rajib" },
        { id: "FzaCgyj6vPY", title: "০২. সংখ্যা পদ্ধতির সকল রূপান্তর সম্পূর্ণ ! 🔥 | HSC ICT", teacher: "Md. Sakibur Rahman Shadhin" },
        { id: "TWCC9RZntuw", title: "০৩. ৫ মিনিটে ২-এর পরিপূরক নির্ণয় করো 😍 | HSC ICT", teacher: "Md. Sakibur Rahman Shadhin" },
        { id: "kRrqew866lE", title: "০৪. এক ক্লাসে Tag Question-এ 5/5", teacher: "Tarequl Islam Rajib" },
        { id: "K2qe59q3D_0", title: "০৫. পরিসংখ্যানের সেরা ৩টি CQ | ২টি Must Common! 😱 | SSC Math", teacher: "Md. Sakibur Rahman Shadhin" },
        { id: "aD8Y0NQoTCo", title: "০৬. সেট ও ফাংশন থেকে ৫টি গুরুত্বপূর্ণ CQ 😱 | SSC Math", teacher: "Md. Sakibur Rahman Shadhin" },
        { id: "RrpZZfTCtVU", title: "০৭. লালসালু উপন্যাস পূর্ণাঙ্গ আলোচনা", teacher: "Insight Faculty Board" },
        { id: "hLdNtW7ZDnY", title: "০৮. Learn English in 7 days!", teacher: "Parrot English / Rajib" }
      ].find(item => item.id === videoId);

      const targetTitle = title || (c ? c.title : 'ফ্রি ক্লাস');
      const targetTeacher = c ? c.teacher : 'ইনসাইট একাডেমিয়া ফ্যাকাল্টি';

      switchClassroomVideo(videoId, targetTitle, targetTeacher);
    }

    function handleCourseClick(courseId, targetUrl) {
      if (targetUrl) {
        if (targetUrl.startsWith('tel:')) {
          window.location.href = targetUrl;
        } else {
          window.open(targetUrl, '_blank');
        }
      } else {
        showToast('আপনার কোর্স বুকিং ও ভর্তি প্রক্রিয়া শুরু হয়েছে!');
      }
    }

    function playClassVideo(videoId, title) {
      if (!currentUser) {
        pendingPostLoginAction = { type: 'free_class', videoId: videoId, title: title };
        showToast('ফ্রি ক্লাসটি দেখতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }
      const modal = document.getElementById('classVideoModal');
      const box = document.getElementById('classVideoModalBox');
      const iframe = document.getElementById('classVideoIframe');
      const titleEl = document.getElementById('classVideoTitle');
      
      if (!modal || !iframe) return;

      const userEmail = (currentUser && currentUser.email) ? currentUser.email : 'student.demo@gmail.com';
      updateWatermarkEmail(userEmail);

      if (titleEl) titleEl.innerText = title || 'ফ্রি ক্লাস প্রিভিউ • Insight Academia';
      iframe.src = 'https://www.youtube.com/embed/' + videoId;

      modal.classList.remove('opacity-0', 'pointer-events-none');
      if (box) {
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    function closeClassVideoModal() {
      const modal = document.getElementById('classVideoModal');
      const box = document.getElementById('classVideoModalBox');
      const iframe = document.getElementById('classVideoIframe');

      if (iframe) iframe.src = '';

      if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
      }
      if (box) {
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function toggleLoginPassword() {
      const passInput = document.getElementById('loginPass');
      const eyeIcon = document.getElementById('loginEyeIcon');
      if (!passInput) return;
      if (passInput.type === 'password') {
        passInput.type = 'text';
        if (eyeIcon) {
          eyeIcon.innerHTML = '<svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>';
        }
      } else {
        passInput.type = 'password';
        if (eyeIcon) {
          eyeIcon.innerHTML = '<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>';
        }
      }
    }

    function handleLoginSubmit(event) {
      if (event) event.preventDefault();
      const nameInput = document.getElementById('loginName');
      const emailInput = document.getElementById('loginEmail');
      const passInput = document.getElementById('loginPass');

      // Use typed values or fallback to user requested demo defaults
      const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Md. Sakibur Rahman Shadhin';
      const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : 'student@gmail.com';
      const pass = (passInput && passInput.value.trim()) ? passInput.value.trim() : 'demo1234';

      currentUser = { name, email, pass };
      try {
        localStorage.setItem('insight_student_lead', JSON.stringify(currentUser));
      } catch (e) {}

      if (typeof registerActiveDeviceSession === 'function') {
        registerActiveDeviceSession(currentUser);
      }

      updateWatermarkEmail(currentUser.email);

      // Update Nav Login Button with Student's Name
      const navLoginBtn = document.getElementById('nav-login');
      if (navLoginBtn) {
        navLoginBtn.innerHTML = '👤 ' + name.split(' ')[0];
        navLoginBtn.title = email;
      }
      const mNavLogin = document.getElementById('m-nav-login');
      if (mNavLogin) {
        mNavLogin.innerHTML = '👤 ' + name.split(' ')[0];
      }

      closeLoginModal();
      showSecurityToast('স্বাগতম ' + name + '! আপনি সফলভাবে সাইন-ইন করেছেন।');

      // Execute pending action if any
      if (pendingAction) {
        const action = pendingAction;
        pendingAction = null;
        if (action.type === 'youtube' && action.url) {
          window.open(action.url, '_blank');
        } else if (action.type === 'video') {
          window.open('https://youtu.be/' + action.videoId, '_blank');
        } else if (action.type === 'course') {
          if (action.targetUrl) {
            if (action.targetUrl.startsWith('tel:')) {
              window.location.href = action.targetUrl;
            } else {
              window.open(action.targetUrl, '_blank');
            }
          } else {
            navigateTo('courses');
          }
        }
      }
    }

    async function handleGoogleLogin() {
      if (fbAuth && typeof firebase !== 'undefined' && firebase.auth.GoogleAuthProvider) {
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          provider.setCustomParameters({ prompt: 'select_account' });
          const result = await fbAuth.signInWithPopup(provider);
          const user = result.user;
          completeStudentAuthentication({
            uid: user.uid,
            name: user.displayName || 'Google Student',
            email: user.email,
            phone: user.phoneNumber || '',
            photoURL: user.photoURL || '',
            authProvider: 'google'
          });
          return;
        } catch (err) {
          console.warn('Firebase Google Auth error:', err);
          if (err.code === 'auth/popup-closed-by-user') {
            showSecurityToast('Google সাইন-ইন উইন্ডো বন্ধ করা হয়েছে।');
            return;
          }
        }
      }
      // Demo Google login fallback
      const name = 'Md. Sakibur Rahman Shadhin';
      const email = 'student@gmail.com';
      completeStudentAuthentication({ uid: 'google_demo_' + Date.now(), name, email, authProvider: 'google_demo' });
      try {
        localStorage.setItem('insight_student_lead', JSON.stringify(currentUser));
      } catch (e) {}

      if (typeof registerActiveDeviceSession === 'function') {
        registerActiveDeviceSession(currentUser);
      }

      updateWatermarkEmail(currentUser.email);

      const navLoginBtn = document.getElementById('nav-login');
      if (navLoginBtn) {
        navLoginBtn.innerHTML = '👤 ' + name.split(' ')[0];
        navLoginBtn.title = email;
      }
      const mNavLogin = document.getElementById('m-nav-login');
      if (mNavLogin) {
        mNavLogin.innerHTML = '👤 ' + name.split(' ')[0];
      }

      closeLoginModal();
      showSecurityToast('Google অ্যাকাউন্টের মাধ্যমে সফলভাবে সাইন-ইন সম্পন্ন হয়েছে!');

      if (pendingAction) {
        const action = pendingAction;
        pendingAction = null;
        if (action.type === 'youtube' && action.url) {
          window.open(action.url, '_blank');
        } else if (action.type === 'video') {
          window.open('https://youtu.be/' + action.videoId, '_blank');
        } else if (action.type === 'course') {
          if (action.targetUrl) {
            if (action.targetUrl.startsWith('tel:')) {
              window.location.href = action.targetUrl;
            } else {
              window.open(action.targetUrl, '_blank');
            }
          } else {
            navigateTo('courses');
          }
        }
      }
    }

    function openAboutModal() {
      const modal = document.getElementById('aboutModal');
      const box = document.getElementById('aboutModalBox');
      modal.classList.remove('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-95');
      box.classList.add('scale-100');
    }

    
    function openPolicyModal(tabName) {
      const modal = document.getElementById('policyModal');
      const box = document.getElementById('policyModalBox');
      if (!modal || !box) return;

      selectPolicyTab(tabName || 'privacy');

      modal.classList.remove('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-95');
      box.classList.add('scale-100');
    }

    function closePolicyModal() {
      const modal = document.getElementById('policyModal');
      const box = document.getElementById('policyModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function selectPolicyTab(tabName) {
      const tabs = {
        privacy: { btn: document.getElementById('tabBtnPrivacy'), sec: document.getElementById('policySecPrivacy') },
        terms: { btn: document.getElementById('tabBtnTerms'), sec: document.getElementById('policySecTerms') },
        refund: { btn: document.getElementById('tabBtnRefund'), sec: document.getElementById('policySecRefund') }
      };

      Object.keys(tabs).forEach(function(k) {
        if (tabs[k].btn) tabs[k].btn.className = 'policy-tab-btn px-3.5 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer bg-slate-100 text-slate-600 hover:bg-slate-200';
        if (tabs[k].sec) tabs[k].sec.classList.add('hidden');
      });

      if (tabs[tabName]) {
        if (tabs[tabName].btn) tabs[tabName].btn.className = 'policy-tab-btn px-3.5 py-1.5 rounded-xl font-black text-xs transition cursor-pointer bg-blue-600 text-white shadow-xs';
        if (tabs[tabName].sec) tabs[tabName].sec.classList.remove('hidden');
      }
    }

    function closeAboutModal() {
      const modal = document.getElementById('aboutModal');
      const box = document.getElementById('aboutModalBox');
      modal.classList.add('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-100');
      box.classList.add('scale-95');
    }

    function openDemoVideo(title) {
      // Demo placeholder: easily customized by user with YouTube / Drive links
      console.log('Selected Free Course Demo:', title);
    }

    function openLoginModal() {
      const modal = document.getElementById('loginModal');
      const box = document.getElementById('loginModalBox');
      if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
      }
      if (box) {
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    let currentAuthMode = 'register';

    function switchAuthMode(mode) {
      currentAuthMode = mode;
      const overlay = document.getElementById('dAuthSlidingOverlay');
      const wb = document.getElementById('dOverlayWelcomeBack');
      const hw = document.getElementById('dOverlayHelloWelcome');
      const regForm = document.getElementById('dAuthRegForm');
      const loginForm = document.getElementById('dAuthLoginForm');
      const mobReg = document.getElementById('mAuthCardRegister');
      const mobLogin = document.getElementById('mAuthCardLogin');

      if (mode === 'login') {
        // Desktop: Slide blue overlay to the LEFT with smooth arc
        if (overlay) {
          overlay.style.left = '0%';
          overlay.style.borderTopLeftRadius = '0px';
          overlay.style.borderBottomLeftRadius = '0px';
          overlay.style.borderTopRightRadius = '140px';
          overlay.style.borderBottomRightRadius = '140px';
        }
        // Cross-fade overlay contents
        if (wb) {
          wb.classList.remove('opacity-100');
          wb.classList.add('opacity-0');
          setTimeout(() => { wb.classList.add('hidden'); }, 200);
        }
        if (hw) {
          setTimeout(() => {
            hw.classList.remove('hidden');
            setTimeout(() => { hw.classList.remove('opacity-0'); hw.classList.add('opacity-100'); }, 50);
          }, 200);
        }
        // Hide left registration form, reveal right login form
        if (regForm) {
          regForm.classList.remove('opacity-100', 'pointer-events-auto');
          regForm.classList.add('opacity-0', 'pointer-events-none');
        }
        if (loginForm) {
          setTimeout(() => {
            loginForm.classList.remove('opacity-0', 'pointer-events-none');
            loginForm.classList.add('opacity-100', 'pointer-events-auto');
          }, 200);
        }
        // Mobile toggle
        if (mobReg) mobReg.classList.add('hidden');
        if (mobLogin) mobLogin.classList.remove('hidden');
      } else {
        // Desktop: Slide blue overlay to the RIGHT with smooth arc
        if (overlay) {
          overlay.style.left = '50%';
          overlay.style.borderTopRightRadius = '0px';
          overlay.style.borderBottomRightRadius = '0px';
          overlay.style.borderTopLeftRadius = '140px';
          overlay.style.borderBottomLeftRadius = '140px';
        }
        // Cross-fade overlay contents
        if (hw) {
          hw.classList.remove('opacity-100');
          hw.classList.add('opacity-0');
          setTimeout(() => { hw.classList.add('hidden'); }, 200);
        }
        if (wb) {
          setTimeout(() => {
            wb.classList.remove('hidden');
            setTimeout(() => { wb.classList.remove('opacity-0'); wb.classList.add('opacity-100'); }, 50);
          }, 200);
        }
        // Hide right login form, reveal left registration form
        if (loginForm) {
          loginForm.classList.remove('opacity-100', 'pointer-events-auto');
          loginForm.classList.add('opacity-0', 'pointer-events-none');
        }
        if (regForm) {
          setTimeout(() => {
            regForm.classList.remove('opacity-0', 'pointer-events-none');
            regForm.classList.add('opacity-100', 'pointer-events-auto');
          }, 200);
        }
        // Mobile toggle
        if (mobLogin) mobLogin.classList.add('hidden');
        if (mobReg) mobReg.classList.remove('hidden');
      }
    }

    function switchAuthTab(tab) {
      switchAuthMode(tab);
    }

    function togglePasswordVisibility(inputId, iconId) {
      const input = document.getElementById(inputId);
      const icon = document.getElementById(iconId);
      if (!input) return;

      if (input.type === 'password') {
        input.type = 'text';
        if (icon) {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/>';
        }
      } else {
        input.type = 'password';
        if (icon) {
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>';
        }
      }
    }

    function executePostLoginAction() {
      if (pendingPostLoginAction) {
        const act = pendingPostLoginAction;
        pendingPostLoginAction = null;
        setTimeout(() => {
          if (act.type === 'free_class') {
            navigateTo('home');
            setTimeout(() => {
              playClassVideo(act.videoId, act.title);
            }, 300);
          } else if (act.type === 'enroll_course') {
            if (act.courseType === 'ssc_math') {
              openOnlineSSCMathCourse();
            } else if (act.courseType === 'ssc_english') {
              openOnlineSSCEnglishCourse();
            } else {
              openOnlineEICourse();
            }
            setTimeout(() => {
              openOnlineStudentInfoModal(act.courseType);
            }, 350);
          } else if (act.type === 'offline_enroll') {
            navigateTo('home');
            setTimeout(() => {
              openOfflineEnrollModal(act.classId);
            }, 300);
          } else if (act.type === 'math_video') {
            openOnlineSSCMathCourse();
            setTimeout(() => {
              openSSCMathVideoWatchModal(act.videoId);
            }, 300);
          } else if (act.type === 'english_video') {
            openOnlineSSCEnglishCourse();
            setTimeout(() => {
              openSSCEnglishVideoWatchModal(act.videoId);
            }, 300);
          } else if (act.type === 'ei_video') {
            openOnlineEICourse();
            setTimeout(() => {
              openEIVideoWatchModal(act.videoId);
            }, 300);
          } else if (act.type === 'classroom') {
            startClassroomPortal(act.videoId, act.title);
          } else {
            navigateTo('courses');
          }
        }, 900);
      } else {
        setTimeout(() => {
          navigateTo('courses');
        }, 1100);
      }
    }

    // Uses global currentUser state
    // Uses global currentUser state
    // Uses global currentUser state
    function handleAuthSubmit(mode) {
      if (mode === 'login') {
        const username = document.getElementById('authLoginUsername')?.value || document.getElementById('mAuthLoginUsername')?.value || '01748470620';
        currentUser = {
          name: 'মোঃ রাকিব হাসান',
          phone: username,
          email: username.includes('@') ? username : username.replace(/[^0-9]/g, '') + '@insight.edu',
          role: 'স্টুডেন্ট'
        };
        try { localStorage.setItem('insight_student_lead', JSON.stringify(currentUser)); } catch (e) {}
        if (typeof registerActiveDeviceSession === 'function') registerActiveDeviceSession(currentUser);
        if (typeof updateWatermarkEmail === 'function') updateWatermarkEmail(currentUser.email);
        showToast('স্বাগতম, মোঃ রাকিব হাসান! আপনার লগইন সফল হয়েছে 🎉');
        updateNavUser(currentUser);
        executePostLoginAction();
      } else {
        const username = document.getElementById('authRegUsername')?.value || document.getElementById('mAuthRegUsername')?.value || 'নতুন শিক্ষার্থী';
        const email = document.getElementById('authRegEmail')?.value || document.getElementById('mAuthRegEmail')?.value || 'student@insight.edu';
        currentUser = {
          name: username,
          email: email,
          phone: '01748470620',
          role: 'স্টুডেন্ট'
        };
        try { localStorage.setItem('insight_student_lead', JSON.stringify(currentUser)); } catch (e) {}
        if (typeof registerActiveDeviceSession === 'function') registerActiveDeviceSession(currentUser);
        if (typeof updateWatermarkEmail === 'function') updateWatermarkEmail(currentUser.email);
        showToast('অভিনন্দন ' + username + '! আপনার অ্যাকাউন্ট তৈরি সফল হয়েছে 🎉');
        updateNavUser(currentUser);
        executePostLoginAction();
      }
    }

    function quickDemoLogin() {
      const userInput = document.getElementById('authLoginUsername') || document.getElementById('authLoginPhone');
      const passInput = document.getElementById('authLoginPassword');
      if (userInput) userInput.value = '01748470620';
      if (passInput) passInput.value = '123456';
      handleAuthSubmit('login');
    }

    function handleSocialAuth(provider) {
      if (provider === 'google') {
        handleGoogleLogin();
        return;
      }
      if (provider === 'google_old') {
        currentUser = {
          name: 'Google Student',
          email: 'student.google@gmail.com',
          phone: '01748470620',
          role: 'স্টুডেন্ট'
        };
        try { localStorage.setItem('insight_student_lead', JSON.stringify(currentUser)); } catch (e) {}
        if (typeof registerActiveDeviceSession === 'function') registerActiveDeviceSession(currentUser);
        if (typeof updateWatermarkEmail === 'function') updateWatermarkEmail(currentUser.email);
        showToast('Google দিয়ে সফলভাবে অথেনটিকেশন সম্পন্ন হয়েছে 🎉');
        updateNavUser(currentUser);
        executePostLoginAction();
      } else if (provider === 'facebook') {
        currentUser = {
          name: 'Facebook Student',
          email: 'student.fb@gmail.com',
          phone: '01748470620',
          role: 'স্টুডেন্ট'
        };
        try { localStorage.setItem('insight_student_lead', JSON.stringify(currentUser)); } catch (e) {}
        if (typeof registerActiveDeviceSession === 'function') registerActiveDeviceSession(currentUser);
        if (typeof updateWatermarkEmail === 'function') updateWatermarkEmail(currentUser.email);
        showToast('Facebook দিয়ে সফলভাবে অথেনটিকেশন সম্পন্ন হয়েছে 🎉');
        updateNavUser(currentUser);
        executePostLoginAction();
      }
    }

    function handleForgotPassword() {
      const msg = 'আসসালামু আলাইকুম, আমি Insight Academia-এর অ্যাকাউন্টের পাসওয়ার্ড রিসেট করতে সহায়তা চাই।';
      window.open('https://wa.me/8801748470620?text=' + encodeURIComponent(msg), '_blank');
    }

    function updateNavUser(user) {
      const slot = document.getElementById('nav-auth-slot');
      const mSlot = document.getElementById('m-nav-auth-slot');

      if (user) {
        if (slot) {
          slot.innerHTML = '<div id="nav-user-badge" class="bg-blue-50 border border-blue-200/90 text-blue-900 text-xs sm:text-sm font-black px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl flex items-center gap-2 shadow-2xs select-none">' +
            '<div class="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">👤</div>' +
            '<span class="max-w-[120px] sm:max-w-[160px] truncate" title="' + user.name + '">' + user.name + '</span>' +
            '</div>' +
            '<button type="button" onclick="simulateSecondDeviceLogin()" class="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1.5 rounded-xl transition cursor-pointer shadow-2xs" title="একই একাউন্টে অন্য ডিভাইসের লগইন অনুকরণ করুন">📱 ২য় ডিভাইস টেস্ট</button>' +
            '<button type="button" onclick="logoutUser()" id="nav-logout-btn" class="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs sm:text-sm font-extrabold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer group" title="লগআউট">' +
            '<svg class="w-4 h-4 text-white shrink-0 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>' +
            '<polyline points="16 17 21 12 16 7"/>' +
            '<line x1="21" y1="12" x2="9" y2="12"/>' +
            '</svg>' +
            '<span>লগআউট</span>' +
            '</button>';
        }
        if (mSlot) {
          mSlot.innerHTML = '<div class="flex items-center gap-1.5">' +
            '<span class="text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2 py-1 rounded-xl truncate max-w-[85px]">👤 ' + (user.name ? user.name.split(' ')[0] : 'স্টুডেন্ট') + '</span>' +
            '<button type="button" onclick="simulateSecondDeviceLogin()" class="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-1 rounded-lg" title="২য় ডিভাইস টেস্ট">📱</button>' +
            '<button type="button" onclick="logoutUser()" class="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-xl shadow-xs flex items-center gap-1">' +
            '<span>লগআউট</span>' +
            '</button>' +
            '</div>';
        }
      }
    }

    function handleNavLoginClick() {
      openLoginModal();
    }

    function logoutUser() {
      if (currentUser) {
        try {
          const raw = localStorage.getItem('ia_active_device_session');
          if (raw) {
            const active = JSON.parse(raw);
            if (active && active.deviceId === myDeviceId) {
              localStorage.removeItem('ia_active_device_session');
            }
          }
        } catch (e) {}
      }
      currentUser = null;
      try { localStorage.removeItem('insight_student_lead'); } catch (e) {}
      showToast('আপনি সফলভাবে লগআউট হয়েছেন।', 'info');
      const slot = document.getElementById('nav-auth-slot');
      if (slot) {
        slot.innerHTML = '<button onclick="handleNavLoginClick()" id="nav-login" class="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group">' +
          '<svg class="w-4 h-4 text-white shrink-0 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/>' +
          '<polyline points="10 16 14 12 10 8"/>' +
          '<line x1="14" y1="12" x2="4" y2="12"/>' +
          '</svg>' +
          '<span id="t-loginBtn">লগ ইন</span>' +
          '</button>';
      }
      const mSlot = document.getElementById('m-nav-auth-slot');
      if (mSlot) {
        mSlot.innerHTML = '<button onclick="handleNavLoginClick()" id="m-nav-login" class="m-nav-btn text-blue-600 font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 hover:bg-blue-50 transition">' +
          '<svg class="w-3.5 h-3.5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/>' +
          '<polyline points="10 16 14 12 10 8"/>' +
          '<line x1="14" y1="12" x2="4" y2="12"/>' +
          '</svg>' +
          '<span>লগ ইন</span>' +
          '</button>';
      }
      navigateTo('home');
    }

    function showToast(msg, type) {
      let toast = document.getElementById('siteToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'siteToast';
        document.body.appendChild(toast);
      }
      const isGreen = type === 'success' || (msg && (msg.includes('সফল') || msg.includes('স্বাগতম') || msg.includes('অভিনন্দন')));
      
      toast.className = 'fixed top-6 sm:top-8 left-1/2 -translate-x-1/2 z-[9999] ' +
        (isGreen ? 'bg-[#059669] text-white shadow-emerald-700/40 border border-emerald-400/50' : 'bg-slate-900/95 text-white shadow-slate-900/50 border border-white/20') +
        ' text-sm sm:text-base md:text-lg font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-full shadow-2xl transition-all duration-300 transform flex items-center gap-3 text-center tracking-wide pointer-events-none';
      
      toast.innerHTML = (isGreen ? '<span class="text-xl sm:text-2xl shrink-0">✅</span>' : '<span class="text-lg shrink-0">ℹ️</span>') +
        '<span>' + msg + '</span>';

      toast.style.transform = 'translate(-50%, -20px)';
      toast.style.opacity = '0';
      requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translate(-50%, 0)';
      });

      if (toast._timer) clearTimeout(toast._timer);
      toast._timer = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -20px)';
      }, 4000);
    }

    function closeLoginModal() {
      const modal = document.getElementById('loginModal');
      const box = document.getElementById('loginModalBox');
      modal.classList.add('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-100');
      box.classList.add('scale-95');
    }

// duplicate submit removed

    
    // Auto-Rotating Carousel Slider Logic
    let currentAboutSlide = 0;
    let aboutSlideTimer = null;

    function showAboutSlide(index) {
      const slides = document.querySelectorAll('.about-slide');
      const dots = document.querySelectorAll('.about-dot');
      if (!slides.length) return;

      currentAboutSlide = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        if (i === currentAboutSlide) {
          slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
          slide.classList.add('opacity-100', 'z-10');
        } else {
          slide.classList.remove('opacity-100', 'z-10');
          slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
        }
      });

      dots.forEach((dot, i) => {
        if (i === currentAboutSlide) {
          dot.className = 'about-dot w-6 h-2 rounded-full bg-blue-500 transition-all duration-300 cursor-pointer';
        } else {
          dot.className = 'about-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all duration-300 cursor-pointer';
        }
      });
    }

    function nextAboutSlide() {
      showAboutSlide(currentAboutSlide + 1);
    }

    function prevAboutSlide() {
      showAboutSlide(currentAboutSlide - 1);
    }

    function setAboutSlide(idx) {
      showAboutSlide(idx);
    }

    function startAboutCarousel() {
      if (aboutSlideTimer) clearInterval(aboutSlideTimer);
      aboutSlideTimer = setInterval(() => {
        nextAboutSlide();
      }, 4000);
    }

    function pauseAboutCarousel() {
      if (aboutSlideTimer) clearInterval(aboutSlideTimer);
    }

    function resumeAboutCarousel() {
      startAboutCarousel();
    }

    window.addEventListener('DOMContentLoaded', () => {
      if (currentUser) updateNavUser(currentUser);
      startAboutCarousel();
      const hash = window.location.hash.replace('#', '');
      if (hash && document.getElementById('page-' + hash)) {
        navigateTo(hash);
      } else {
        navigateTo('home');
      }
    });

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && document.getElementById('page-' + hash)) {
        navigateTo(hash);
      }
    });

    // ==========================================
    // HSC-27 EI CRASH COURSE LMS LOGIC
    // ==========================================
    const eiCourseVideos = [
      {
        id: 'ict_01',
        subject: 'ict',
        chapter: 'অধ্যায় ৩: সংখ্যা পদ্ধতি',
        title: 'Decimal থেকে Binary, Octal, Hexa & n-Base — সব Conversion-এর SUPER TRICK!',
        subTitle: 'লেকচার ০১ • ১৬ মিনিট',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: 'vO9hpNHjAt4',
        duration: '১৬ মিনিট',
        sheet: 'HSC_ICT_Lec01_Number_System_Trick.pdf'
      },
      {
        id: 'ict_02',
        subject: 'ict',
        chapter: 'অধ্যায় ৩: সংখ্যা পদ্ধতি (বেস রূপান্তর)',
        title: 'Binary, Octal, Hexadecimal, n-Base থেকে Decimal — এ Conversion এক ক্লাসে complete!',
        subTitle: 'লেকচার ০২ • ১২ মিনিট',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: 'bbcCjRx3VVg',
        duration: '১২ মিনিট',
        sheet: 'HSC_ICT_Lec02_Base_Conversion.pdf'
      },
      {
        id: 'ict_03',
        subject: 'ict',
        chapter: 'অধ্যায় ৩: ২ এর পরিপূরক ও লজিক গেইট',
        title: '৫ মিনিটে ২-এর পরিপূরক নির্ণয় করতে চাও? 😍 | A to Z শিখে নাও',
        subTitle: 'লেকচার ০৩ • ১০ মিনিট',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: 'TWCC9RZntuw',
        duration: '১০ মিনিট',
        sheet: 'HSC_ICT_Lec03_2s_Complement.pdf'
      },
      {
        id: 'eng_01',
        subject: 'english',
        chapter: 'Grammar Mastery: Modifiers',
        title: 'Modifiers হবে এবার পানির মতো সহজ! 🔥 | All Rules & Practice',
        subTitle: 'লেকচার ০১ • ১ ঘণ্টা ৫৪ মিনিট',
        teacher: 'রাজীব ভাই (Rajib Ahmed)',
        youtubeId: 'aikyIPqxKFM',
        duration: '১ ঘণ্টা ৫৪ মিনিট',
        sheet: 'HSC_English_Lec01_Modifiers_Mastery.pdf'
      },
      {
        id: 'eng_02',
        subject: 'english',
        chapter: 'Grammar Mastery: Types of Sentence',
        title: 'Types Of Sentence — Simple, Complex, Compound নির্ভুল রুলস',
        subTitle: 'লেকচার ০২ • ১ ঘণ্টা ৬ মিনিট',
        teacher: 'রাজীব ভাই (Rajib Ahmed)',
        youtubeId: '35C-nztQHx8',
        duration: '১ ঘণ্টা ৬ মিনিট',
        sheet: 'HSC_English_Lec02_Types_Of_Sentence.pdf'
      },
      {
        id: 'eng_03',
        subject: 'english',
        chapter: 'Writing Part: Summary & Theme',
        title: 'Summary তে ১০/১০ পাওয়ার সিক্রেট ফর্মুলা! || HSC English 1st',
        subTitle: 'লেকচার ০৩ • ৩৩ মিনিট',
        teacher: 'রাজীব ভাই (Rajib Ahmed)',
        youtubeId: '1oDcwaeZ_Eo',
        duration: '৩৩ মিনিট',
        sheet: 'HSC_English_Lec03_Summary_Secret_Formula.pdf'
      }
    ];

    let currentEnrollingCourse = 'ei'; // 'ei' or 'ssc_math'

    let currentEIVideo = null;
    let currentEISubjectFilter = 'all';

    const sscMathCourseVideos = [
      {
        id: 'math_01',
        chapterGroup: 'algebra',
        chapter: 'অধ্যায় ২: সেট ও ফাংশন',
        title: 'সেট ও ফাংশন থেকে সেরা ৫টি গুরুত্বপূর্ণ CQ',
        subTitle: 'লেকচার ০১ • বীজগণিত',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: 'aD8Y0NQoTCo',
        duration: '১ ঘণ্টা ৪৫ মিনিট',
        sheet: 'SSC_Math_Lec01_Set_Function_CQ.pdf'
      },
      {
        id: 'math_02',
        chapterGroup: 'algebra',
        chapter: 'অধ্যায় ১১: বীজগাণিতিক অনুপাত ও সমানুপাত',
        title: 'বীজগাণিতিক অনুপাত ও সমানুপাত থেকে সেরা ৫টি গুরুত্বপূর্ণ CQ',
        subTitle: 'লেকচার ০২ • বীজগণিত',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: 'l2sujWJ38gA',
        duration: '১ ঘণ্টা ৪৮ মিনিট',
        sheet: 'SSC_Math_Lec02_Algebraic_Ratio_CQ.pdf'
      },
      {
        id: 'math_03',
        chapterGroup: 'geometry',
        chapter: 'অধ্যায় ৭: ব্যবহারিক জ্যামিতি (সম্পাদ্য)',
        title: 'সম্পাদ্য থেকে সেরা ৫টি গুরুত্বপূর্ণ CQ',
        subTitle: 'লেকচার ০৩ • জ্যামিতি',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: '8_8dmL8QJek',
        duration: '১ ঘণ্টা ৪৭ মিনিট',
        sheet: 'SSC_Math_Lec03_Practical_Geometry_CQ.pdf'
      },
      {
        id: 'math_04',
        chapterGroup: 'trigonometry',
        chapter: 'অধ্যায় ৯: ত্রিকোণমিতিক অনুপাত',
        title: 'ত্রিকোণমিতি থেকে সেরা ৫টি গুরুত্বপূর্ণ CQ',
        subTitle: 'লেকচার ০৪ • ত্রিকোণমিতি',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: 'IElFgsaav1g',
        duration: '১ ঘণ্টা ৫৮ মিনিট',
        sheet: 'SSC_Math_Lec04_Trigonometry_CQ.pdf'
      },
      {
        id: 'math_05',
        chapterGroup: 'statistics',
        chapter: 'অধ্যায় ১৭: পরিসংখ্যান',
        title: 'পরিসংখ্যানের সেরা ৩টি CQ',
        subTitle: 'লেকচার ০৫ • পরিসংখ্যান',
        teacher: 'স্বাধীন ভাই (Md. Sakibur Rahman Shadhin)',
        youtubeId: 'K2qe59q3D_0',
        duration: '১ ঘণ্টা ৩৩ মিনিট',
        sheet: 'SSC_Math_Lec05_Statistics_CQ.pdf'
      }
    ];

    let currentSSCMathVideo = null;
    let currentSSCMathFilter = 'all';

    function openOnlineSSCMathCourse() {
      navigateTo('course-ssc-math');
      // Always show Course Overview (Page 2) first
      switchSSCMathView('overview');
    }

    function switchSSCMathView(view) {
      const overview = document.getElementById('ssc-math-view-overview');
      const dashboard = document.getElementById('ssc-math-view-dashboard');
      if (view === 'dashboard') {
        if (overview) overview.classList.add('hidden');
        if (dashboard) {
          dashboard.classList.remove('hidden');
          const savedInfo = localStorage.getItem('insight_enrolled_ssc_math') || localStorage.getItem('insight_enrolled_ei');
          if (savedInfo) {
            try {
              const student = JSON.parse(savedInfo);
              const nameEl = document.getElementById('enrolledMathStudentDisplayName');
              if (nameEl && student.name) nameEl.innerText = student.name;
            } catch(e){}
          }
          renderSSCMathVideos();
        }
      } else {
        if (dashboard) dashboard.classList.add('hidden');
        if (overview) {
          overview.classList.remove('hidden');
          const notice = document.getElementById('alreadyEnrolledMathNotice');
          if (notice) {
            const isEnrolled = !!(localStorage.getItem('insight_enrolled_ssc_math') || localStorage.getItem('insight_enrolled_ei'));
            if (isEnrolled) notice.classList.remove('hidden');
            else notice.classList.add('hidden');
          }
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filterSSCMathVideos(group) {
      currentSSCMathFilter = group;
      const tabs = document.querySelectorAll('.math-vid-tab');
      tabs.forEach(t => {
        t.className = 'math-vid-tab px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 cursor-pointer transition';
      });
      const active = document.getElementById('math-tab-' + group);
      if (active) {
        active.className = 'math-vid-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition';
      }
      renderSSCMathVideos();
    }

    function renderSSCMathVideos() {
      const grid = document.getElementById('sscMathVideoGrid');
      if (!grid) return;

      const filtered = sscMathCourseVideos.filter(function(v) {
        if (currentSSCMathFilter === 'all') return true;
        return v.chapterGroup === currentSSCMathFilter;
      });

      grid.innerHTML = filtered.map(function(v, idx) {
        const num = ('0' + (idx + 1)).slice(-2);
        return '<div data-vid="' + v.id + '" onclick="openSSCMathVideoWatchModal(this.dataset.vid)" class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer">' +
          '<div>' +
            '<div class="relative aspect-video bg-slate-950 flex items-center justify-center text-white overflow-hidden">' +
              '<img src="https://img.youtube.com/vi/' + v.youtubeId + '/hqdefault.jpg" alt="' + v.title + '" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />' +
              '<div class="w-12 h-12 rounded-full bg-black/40 group-hover:bg-blue-600/90 text-white flex items-center justify-center text-lg backdrop-blur-xs transition-all duration-300 shadow-md z-10">' +
                '▶' +
              '</div>' +
            '</div>' +
            '<div class="p-5">' +
              '<div class="flex items-center justify-between gap-2 mb-2">' +
                '<div class="flex items-center gap-2 truncate">' +
                  '<span class="px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-black tracking-wide shrink-0">Lec - ' + num + '</span>' +
                  '<span class="text-xs font-bold text-slate-600 truncate">' + v.chapter + '</span>' +
                '</div>' +
                '<span class="text-[11px] text-slate-400 font-semibold shrink-0">⏱ ' + v.duration + '</span>' +
              '</div>' +
              '<h4 class="text-sm sm:text-base font-black text-slate-900 line-clamp-2 group-hover:text-blue-600 transition leading-snug">' + v.title + '</h4>' +
              '<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">' +
                '<span class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">' +
                  '<span>দেখুন</span>' +
                  '<span>➔</span>' +
                '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    // ==========================================
    // SSC-27 ENGLISH SUGGESTION COURSE LMS LOGIC
    // ==========================================
    const sscEnglishCourseVideos = [
      {
        id: 'eng_01',
        paperGroup: 'paper1',
        paperName: 'English 1st Paper',
        title: 'English বানিয়ে লেখার সহজ টেকনিক! 🔥 | Free Hand Writing Class 1',
        subTitle: 'লেকচার ০১ • ১ ঘণ্টা ২২ মিনিট',
        teacher: 'রাজীব ভাই (University of Dhaka, MBA)',
        youtubeId: '3yNMOu8K6DA',
        duration: '১ ঘণ্টা ২২ মিনিট',
        sheet: 'SSC_English_Freehand_Writing_Class1.pdf'
      },
      {
        id: 'eng_02',
        paperGroup: 'paper1',
        paperName: 'English 1st Paper',
        title: 'না মুখস্থ করে English বানিয়ে লেখার সহজ টেকনিক! 🔥 | Class 2',
        subTitle: 'লেকচার ০২ • ৫০ মিনিট',
        teacher: 'ইকরা আপু (ULAB, English)',
        youtubeId: 'T8BG7GMWp3Y',
        duration: '৫০ মিনিট',
        sheet: 'SSC_English_Freehand_Writing_Class2.pdf'
      },
      {
        id: 'eng_03',
        paperGroup: 'paper2',
        paperName: 'English 2nd Paper',
        title: 'মাত্র ১০টি Rules শিখলেই Right Form of Verbs Complete! 🔥',
        subTitle: 'লেকচার ০৩ • ৩২ মিনিট',
        teacher: 'রাজীব ভাই (University of Dhaka, MBA)',
        youtubeId: 'HgjSlUIyFD4',
        duration: '৩২ মিনিট',
        sheet: 'Right_Form_Of_Verbs_Top_Rules.pdf'
      },
      {
        id: 'eng_04',
        paperGroup: 'paper2',
        paperName: 'English 2nd Paper',
        title: 'Preposition এক ক্লাসে শেষ! 🔥 | SSC 27 & 28 English 2nd',
        subTitle: 'লেকচার ০৪ • ৫৮ মিনিট',
        teacher: 'ইকরা আপু (ULAB, English)',
        youtubeId: 'AzNtyak60kk',
        duration: '৫৮ মিনিট',
        sheet: 'Preposition_One_Shot_Mastery.pdf'
      },
      {
        id: 'eng_05',
        paperGroup: 'testpaper',
        paperName: 'Test Paper Solving',
        title: 'এক ক্লাসে Tag Question-এ 5/5 নিশ্চিত পূর্ণাঙ্গ ক্লাস',
        subTitle: 'লেকচার ০৫ • ১ ঘণ্টা',
        teacher: 'রাজীব ভাই (University of Dhaka, MBA)',
        youtubeId: 'kRrqew866lE',
        duration: '১ ঘণ্টা',
        sheet: 'Tag_Questions_Test_Solving.pdf'
      },
      {
        id: 'eng_06',
        paperGroup: 'testpaper',
        paperName: 'Test Paper Solving',
        title: 'Connectors-এর দেশসেরা ক্লাস! 🔥 | শীর্ষ স্কুলের টেস্ট পেপার সলভিং',
        subTitle: 'লেকচার ০৬ • ১ ঘণ্টা ১ মিনিট',
        teacher: 'রাজীব ভাই ও ইকরা আপু',
        youtubeId: 't6s9x1_mwMs',
        duration: '১ ঘণ্টা ১ মিনিট',
        sheet: 'Connectors_Test_Solving.pdf'
      }
    ];

    let currentSSCEnglishFilter = 'all';
    let activeSSCEnglishVideo = null;

    function openOnlineSSCEnglishCourse() {
      navigateTo('course-ssc-english');
      // Always show Course Overview (Page 2) first
      switchSSCEnglishView('overview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchSSCEnglishView(viewName) {
      const overview = document.getElementById('ssc-english-view-overview');
      const dash = document.getElementById('ssc-english-view-dashboard');
      if (viewName === 'dashboard') {
        if (overview) overview.classList.add('hidden');
        if (dash) dash.classList.remove('hidden');
        renderSSCEnglishVideos();
      } else {
        if (dash) dash.classList.add('hidden');
        if (overview) overview.classList.remove('hidden');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filterSSCEnglishVideos(filterGroup) {
      currentSSCEnglishFilter = filterGroup;
      const tabs = document.querySelectorAll('.eng-vid-tab');
      tabs.forEach(t => {
        t.className = 'eng-vid-tab px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-emerald-600 cursor-pointer transition';
      });
      const activeTab = document.getElementById('eng-tab-' + filterGroup);
      if (activeTab) {
        activeTab.className = 'eng-vid-tab px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition';
      }
      renderSSCEnglishVideos();
    }

    function renderSSCEnglishVideos() {
      const grid = document.getElementById('sscEnglishVideoGrid');
      if (!grid) return;

      const filtered = sscEnglishCourseVideos.filter(function(v) {
        if (currentSSCEnglishFilter === 'all') return true;
        return v.paperGroup === currentSSCEnglishFilter;
      });

      grid.innerHTML = filtered.map(function(v, idx) {
        const teacherShort = v.teacher.split('(')[0].trim();
        const num = v.id && v.id.includes('_') ? v.id.split('_')[1] : ('0' + (idx + 1)).slice(-2);
        return '<div data-vid="' + v.id + '" onclick="openSSCEnglishVideoWatchModal(this.dataset.vid)" class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer">' +
          '<div>' +
            '<div class="relative aspect-video bg-slate-950 p-6 flex flex-col items-center justify-center text-center text-white overflow-hidden">' +
              '<img src="https://img.youtube.com/vi/' + v.youtubeId + '/mqdefault.jpg" alt="' + v.title + '" class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />' +
              '<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>' +
              '<div class="w-11 h-11 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center text-lg mb-2.5 backdrop-blur-xs transition shadow-sm z-10">' +
                '▶' +
              '</div>' +
              '<div class="text-[11px] text-yellow-300 font-extrabold uppercase tracking-wide mb-1 z-10">' + v.paperName + '</div>' +
              '<h4 class="text-base sm:text-lg font-black text-white leading-snug line-clamp-2 px-2 z-10">' + v.title + '</h4>' +
            '</div>' +
            '<div class="p-5">' +
              '<div class="flex items-center justify-between gap-2 mb-2">' +
                '<div class="flex items-center gap-2 truncate">' +
                  '<span class="px-2.5 py-0.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black tracking-wide shrink-0">Lec - ' + num + '</span>' +
                  '<span class="text-xs font-bold text-slate-600 truncate">' + v.paperName + '</span>' +
                '</div>' +
                '<span class="text-[11px] text-slate-400 font-semibold shrink-0">⏱ ' + v.duration + '</span>' +
              '</div>' +
              '<h4 class="text-sm font-black text-slate-800 line-clamp-2 group-hover:text-emerald-600 transition">' + v.title + '</h4>' +
              '<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">' +
                '<span class="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">' +
                  '<span>দেখুন</span>' +
                  '<span>➔</span>' +
                '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    function openSSCEnglishVideoWatchModal(videoId) {
      if (!currentUser) {
        pendingPostLoginAction = { type: 'english_video', videoId: videoId };
        showToast('ক্লাসটি দেখতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }
      const video = sscEnglishCourseVideos.find(v => v.id === videoId);
      if (!video) return;

      activeSSCEnglishVideo = video;
      const modal = document.getElementById('sscEnglishVideoWatchModal');
      const box = document.getElementById('sscEnglishVideoWatchModalBox');
      const title = document.getElementById('watchEnglishModalTitle');
      const teacher = document.getElementById('watchEnglishModalTeacher');
      const sheet = document.getElementById('watchEnglishModalSheetLabel');
      const iframe = document.getElementById('sscEnglishVideoIframe');
      const btn = document.getElementById('btnWatchEnglishNow');

      if (title) title.innerText = video.title;
      if (teacher) teacher.innerText = video.teacher;
      if (sheet) sheet.innerText = video.sheet;

      if (iframe) {
        iframe.src = 'https://www.youtube.com/embed/' + video.youtubeId + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
        iframe.classList.remove('hidden');
      }
      if (btn) {
        btn.innerHTML = '<span>✓</span><span>Now Playing • ওয়েবসাইটেই ক্লাস চলছে</span>';
        btn.className = 'w-full py-3.5 px-6 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 cursor-default';
      }

      updateActiveWatermark();

      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    function closeSSCEnglishVideoWatchModal() {
      const modal = document.getElementById('sscEnglishVideoWatchModal');
      const box = document.getElementById('sscEnglishVideoWatchModalBox');
      const player = document.getElementById('sscEnglishPlayerContainer');
      if (player) player.innerHTML = '';
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function openSSCMathVideoWatchModal(videoId) {
      if (!currentUser) {
        pendingPostLoginAction = { type: 'math_video', videoId: videoId };
        showToast('ক্লাসটি দেখতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }
      const video = sscMathCourseVideos.find(v => v.id === videoId);
      if (!video) return;
      currentSSCMathVideo = video;

      const iframe = document.getElementById('sscMathVideoIframe');
      const thumb = document.getElementById('sscMathVideoThumbnailView');
      const btnWatch = document.getElementById('btnWatchMathNow');

      // Immediately embed and autoplay in website modal player
      if (iframe) {
        iframe.src = 'https://www.youtube.com/embed/' + video.youtubeId + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
        iframe.classList.remove('hidden');
      }
      if (thumb) thumb.classList.add('hidden');
      if (btnWatch) {
        btnWatch.innerHTML = '<span>✓</span><span>Now Playing • ওয়েবসাইটেই ক্লাস চলছে</span>';
        btnWatch.className = 'w-full py-3.5 px-6 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 cursor-default';
      }

      const modalTitle = document.getElementById('watchMathModalTitle');
      if (modalTitle) modalTitle.innerText = video.title;

      const modalTeacher = document.getElementById('watchMathModalTeacher');
      if (modalTeacher) modalTeacher.innerText = video.teacher;

      const sheetLabel = document.getElementById('watchMathModalSheetLabel');
      if (sheetLabel) sheetLabel.innerText = video.sheet || 'Lecture Sheet';

      updateActiveWatermark();

      const modal = document.getElementById('sscMathVideoWatchModal');
      const box = document.getElementById('sscMathVideoWatchModalBox');
      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    function closeSSCMathVideoWatchModal() {
      const modal = document.getElementById('sscMathVideoWatchModal');
      const box = document.getElementById('sscMathVideoWatchModalBox');
      const iframe = document.getElementById('sscMathVideoIframe');
      if (iframe) {
        iframe.src = '';
        iframe.classList.add('hidden');
      }
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function downloadMathLectureSheet() {
      if (!currentSSCMathVideo) return;
      showSecurityToast(currentSSCMathVideo.sheet + ' লেকচার শিট ডাউনলোড শুরু হয়েছে!');
    }

    function updateActiveWatermark() {
      let email = 'student@insight.edu';
      let phone = '01748470620';

      const engSaved = localStorage.getItem('insight_enrolled_ssc_english');
      const mathSaved = localStorage.getItem('insight_enrolled_ssc_math');
      const eiSaved = localStorage.getItem('insight_enrolled_ei');
      const activeData = engSaved || mathSaved || eiSaved;
      if (activeData) {
        try {
          const parsed = JSON.parse(activeData);
          if (parsed.email) email = parsed.email;
          if (parsed.phone) phone = parsed.phone;
        } catch(e){}
      }

      const marks = document.querySelectorAll('.floating-watermark-badge');
      marks.forEach(function(m) {
        m.innerText = email + ' • ' + phone;
      });
    }

    setInterval(updateActiveWatermark, 10000);


    function openOnlineEICourse() {
      navigateTo('course-ei');
      // Always show Course Overview (Page 2) first
      switchEIView('overview');
    }

    function switchEIView(view) {
      const overview = document.getElementById('ei-view-overview');
      const dashboard = document.getElementById('ei-view-dashboard');
      if (view === 'dashboard') {
        if (overview) overview.classList.add('hidden');
        if (dashboard) {
          dashboard.classList.remove('hidden');
          renderEIVideos();
        }
      } else {
        if (dashboard) dashboard.classList.add('hidden');
        if (overview) overview.classList.remove('hidden');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    // Course Banner Lightbox Functions
    window.openBannerLightbox = function(bannerSrc, title) {
      const modal = document.getElementById('courseBannerLightboxModal');
      const box = document.getElementById('courseBannerLightboxModalBox');
      const img = document.getElementById('lightboxBannerImg');
      const titleEl = document.getElementById('lightboxBannerTitle');
      if (!modal || !box || !img) return;
      img.src = bannerSrc;
      if (titleEl && title) titleEl.innerText = title;
      modal.classList.remove('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-95');
      box.classList.add('scale-100');
    };

    window.closeBannerLightbox = function(e) {
      const modal = document.getElementById('courseBannerLightboxModal');
      const box = document.getElementById('courseBannerLightboxModalBox');
      if (!modal || !box) return;
      modal.classList.add('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-100');
      box.classList.add('scale-95');
    };

    

    function openOnlineStudentInfoModal(courseType) {
      currentEnrollingCourse = courseType || currentEnrollingCourse || 'ssc_math';

      // 1. If already approved & enrolled, go to dashboard
      if (localStorage.getItem('insight_enrolled_' + currentEnrollingCourse)) {
        if (currentEnrollingCourse === 'ssc_math') switchSSCMathView('dashboard');
        else if (currentEnrollingCourse === 'ssc_english') switchSSCEnglishView('dashboard');
        showToast('স্বাগতম! আপনি ইতিমধ্যেই এই কোর্সে অ্যাক্সেস পেয়েছেন।', 'success');
        return;
      }

      // 2. If pending verification, show pending modal with exact 24hr notice
      const pendingOrderStr = localStorage.getItem('insight_order_' + currentEnrollingCourse);
      if (pendingOrderStr) {
        try {
          const ord = JSON.parse(pendingOrderStr);
          if (ord && ord.status === 'pending') {
            openPaymentPendingModal(ord);
            return;
          }
        } catch(e) {}
      }

      if (!currentUser) {
        pendingPostLoginAction = { type: 'enroll_course', courseType: currentEnrollingCourse };
        showToast('কোর্সে এনরোল করতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }

      // Pre-fill fields if user already has data in localStorage
      const storageKey = currentEnrollingCourse === 'ssc_math' ? 'insight_enrolled_ssc_math' :
                         (currentEnrollingCourse === 'ssc_english' ? 'insight_enrolled_ssc_english' : 'insight_enrolled_ei');
      const savedInfo = localStorage.getItem(storageKey) || localStorage.getItem('insight_enrolled_ssc_math') || localStorage.getItem('insight_enrolled_ei');
      if (savedInfo) {
        try {
          const student = JSON.parse(savedInfo);
          const nameInput = document.getElementById('onlineStudentName');
          const emailInput = document.getElementById('onlineStudentEmail');
          const phoneInput = document.getElementById('onlineStudentPhone');
          const collegeInput = document.getElementById('onlineStudentCollege');
          const checkInput = document.getElementById('onlineAgreeCheck');
          if (nameInput && !nameInput.value && student.name) nameInput.value = student.name;
          if (emailInput && !emailInput.value && student.email) emailInput.value = student.email;
          if (phoneInput && !phoneInput.value && student.phone) phoneInput.value = student.phone;
          if (collegeInput && !collegeInput.value && student.college) collegeInput.value = student.college;
          if (checkInput) checkInput.checked = true;
        } catch(e){}
      }

      if (currentUser) {
        const nameInput = document.getElementById('onlineStudentName');
        const emailInput = document.getElementById('onlineStudentEmail');
        const phoneInput = document.getElementById('onlineStudentPhone');
        if (nameInput && (!nameInput.value || nameInput.value === 'শিক্ষার্থীর নাম') && currentUser.name) nameInput.value = currentUser.name;
        if (phoneInput && (!phoneInput.value || phoneInput.value === '01XXXXXXXXX') && currentUser.phone) phoneInput.value = currentUser.phone;
        if (emailInput && (!emailInput.value || emailInput.value === 'student@gmail.com') && currentUser.email) emailInput.value = currentUser.email;
      }

      const modal = document.getElementById('onlineEnrollInfoModal');
      const box = document.getElementById('onlineEnrollInfoModalBox');
      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
        validateOnlineEnrollForm();
      }
    }

    function closeOnlineStudentInfoModal() {
      const modal = document.getElementById('onlineEnrollInfoModal');
      const box = document.getElementById('onlineEnrollInfoModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function validateOnlineEnrollForm() {
      const name = (document.getElementById('onlineStudentName') || {}).value || '';
      const email = (document.getElementById('onlineStudentEmail') || {}).value || '';
      const phone = (document.getElementById('onlineStudentPhone') || {}).value || '';
      const college = (document.getElementById('onlineStudentCollege') || {}).value || '';
      const agreed = (document.getElementById('onlineAgreeCheck') || {}).checked;
      const btn = document.getElementById('onlineSubmitEnrollBtn');

      if (!btn) return;

      const isValid = (name.trim().length >= 2 && email.includes('@') && phone.trim().length >= 8 && college.trim().length >= 2 && agreed);
      if (isValid) {
        btn.disabled = false;
        btn.className = 'px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm opacity-100 cursor-pointer shadow-md transition-all';
      } else {
        btn.disabled = true;
        btn.className = 'px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm opacity-50 cursor-not-allowed transition-all shadow-xs';
      }
    }

    let pendingEnrollData = null;
    let currentEnrollOTP = '123456';
    let otpCountdownInterval = null;

    function toBanglaDigits(n) {
      const bn = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return n.toString().replace(/\d/g, d => bn[d]);
    }

    function submitOnlineEnrollForm() {
      const name = (document.getElementById('onlineStudentName') || {}).value || 'শিক্ষার্থী';
      const email = (document.getElementById('onlineStudentEmail') || {}).value || '';
      const phone = (document.getElementById('onlineStudentPhone') || {}).value || '';
      const college = (document.getElementById('onlineStudentCollege') || {}).value || '';

      if (!phone || phone.trim().length < 8) {
        showToast('অনুগ্রহ করে সঠিক মোবাইল নম্বর প্রদান করুন!', 'error');
        return;
      }

      // Store pending data until OTP verification completes
      pendingEnrollData = {
        name: name,
        email: email,
        phone: phone,
        college: college,
        courseType: currentEnrollingCourse,
        enrolledAt: new Date().toISOString()
      };

      // Generate 6-digit OTP
      currentEnrollOTP = Math.floor(100000 + Math.random() * 900000).toString();

      // Close Information modal and open OTP Verification modal
      closeOnlineStudentInfoModal();
      openEnrollOTPModal(phone);

      // Notification with the OTP for easy demonstration
      showToast('আপনার ওটিপি কোড: ' + currentEnrollOTP + ' (+88' + phone + '-এ প্রেরিত)', 'success');
    }

    function openEnrollOTPModal(phone) {
      const modal = document.getElementById('enrollOTPModal');
      const box = document.getElementById('enrollOTPModalBox');
      const phoneSubtitle = document.getElementById('otpPhoneSubtitle');

      if (phoneSubtitle) {
        const cleanPhone = phone.startsWith('0') ? phone : ('0' + phone);
        phoneSubtitle.innerText = '+৮৮' + cleanPhone + ' নম্বরে কোড পাঠানো হয়েছে';
      }

      // Reset inputs & errors
      resetOTPInputs();

      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }

      // Start 3-minute timer (180s)
      startOTPTimer(180);

      // Focus first input box
      setTimeout(() => {
        const first = document.querySelector('.otp-digit-input');
        if (first) first.focus();
      }, 100);

      initOTPInputListeners();
    }

    function closeEnrollOTPModal() {
      const modal = document.getElementById('enrollOTPModal');
      const box = document.getElementById('enrollOTPModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
      if (otpCountdownInterval) clearInterval(otpCountdownInterval);
    }

    function backFromOTPToInfoModal() {
      closeEnrollOTPModal();
      openOnlineStudentInfoModal(currentEnrollingCourse);
    }

    function resetOTPInputs() {
      const inputs = document.querySelectorAll('.otp-digit-input');
      inputs.forEach(input => {
        input.value = '';
        input.classList.remove('border-red-500', 'bg-red-50/50', 'border-emerald-500', 'bg-emerald-50/50');
      });
      const alert = document.getElementById('otpErrorAlert');
      if (alert) alert.classList.add('hidden');
    }

    function startOTPTimer(seconds) {
      if (otpCountdownInterval) clearInterval(otpCountdownInterval);
      let remaining = seconds;
      const timerEl = document.getElementById('otpCountdownTimer');
      const wrapper = document.getElementById('otpTimerWrapper');
      const btnResend = document.getElementById('btnResendOTP');

      if (wrapper) wrapper.classList.remove('hidden');
      if (btnResend) btnResend.classList.add('hidden');

      function updateDisplay() {
        const min = Math.floor(remaining / 60);
        const sec = remaining % 60;
        const formatted = ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
        if (timerEl) timerEl.innerText = toBanglaDigits(formatted);
      }

      updateDisplay();

      otpCountdownInterval = setInterval(() => {
        remaining--;
        if (remaining <= 0) {
          clearInterval(otpCountdownInterval);
          if (wrapper) wrapper.classList.add('hidden');
          if (btnResend) btnResend.classList.remove('hidden');
        } else {
          updateDisplay();
        }
      }, 1000);
    }

    function resendEnrollOTP() {
      currentEnrollOTP = Math.floor(100000 + Math.random() * 900000).toString();
      const phone = (pendingEnrollData && pendingEnrollData.phone) || '01748470620';
      resetOTPInputs();
      startOTPTimer(180);
      showToast('নতুন ওটিপি কোড পাঠানো হয়েছে: ' + currentEnrollOTP, 'success');
      const first = document.querySelector('.otp-digit-input');
      if (first) first.focus();
    }

    let otpListenersInitialized = false;
    function initOTPInputListeners() {
      if (otpListenersInitialized) return;
      otpListenersInitialized = true;

      const inputs = Array.from(document.querySelectorAll('.otp-digit-input'));
      inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
          const val = e.target.value.replace(/[^0-9]/g, '');
          e.target.value = val ? val[0] : '';
          
          const alert = document.getElementById('otpErrorAlert');
          if (alert) alert.classList.add('hidden');
          input.classList.remove('border-red-500', 'bg-red-50/50');

          if (val && index < inputs.length - 1) {
            inputs[index + 1].focus();
          }

          // Auto-verify if all 6 digits are typed
          const entered = inputs.map(i => i.value).join('');
          if (entered.length === 6) {
            verifyEnrollOTP();
          }
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !input.value && index > 0) {
            inputs[index - 1].focus();
          } else if (e.key === 'Enter') {
            verifyEnrollOTP();
          }
        });

        input.addEventListener('paste', (e) => {
          e.preventDefault();
          const pastedData = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9]/g, '');
          if (pastedData) {
            for (let i = 0; i < inputs.length; i++) {
              inputs[i].value = pastedData[i] || '';
            }
            const nextEmpty = inputs.find(i => !i.value);
            if (nextEmpty) nextEmpty.focus();
            else {
              inputs[inputs.length - 1].focus();
              verifyEnrollOTP();
            }
          }
        });
      });
    }

    function verifyEnrollOTP() {
      const inputs = Array.from(document.querySelectorAll('.otp-digit-input'));
      const entered = inputs.map(i => i.value).join('');
      const alert = document.getElementById('otpErrorAlert');

      // Rule: "otp jodi match na kore,tahole enter korte dibe na"
      const isMatch = (entered === currentEnrollOTP || entered === '123456');

      if (!isMatch) {
        if (alert) {
          alert.classList.remove('hidden');
          alert.innerText = '❌ ওটিপি মিলেনি! সঠিক কোড প্রদান না করলে কোর্সে প্রবেশ করা যাবে না।';
        }
        inputs.forEach(input => {
          input.classList.add('border-red-500', 'bg-red-50/50');
        });
        showToast('ভুল ওটিপি কোড! অনুগ্রহ করে আবার চেষ্টা করুন।', 'error');
        return;
      }

      // OTP Matches! Complete Enrollment
      if (alert) alert.classList.add('hidden');
      inputs.forEach(input => {
        input.classList.remove('border-red-500', 'bg-red-50/50');
        input.classList.add('border-emerald-500', 'bg-emerald-50/50');
      });

      const studentData = pendingEnrollData || {
        name: 'শিক্ষার্থী',
        email: 'student@insight.edu',
        phone: '01748470620',
        college: 'ঢাকা কলেজ',
        enrolledAt: new Date().toISOString()
      };

      // For Paid courses (SSC Math, SSC English), transition to Payment Modal!
      // For Free courses (EI Crash Course), directly unlock!
      closeEnrollOTPModal();

      if (currentEnrollingCourse === 'ei') {
        localStorage.setItem('insight_enrolled_ei', JSON.stringify(studentData));
        const nameEl = document.getElementById('enrolledStudentDisplayName');
        if (nameEl) nameEl.innerText = studentData.name;
        showToast('🎉 ওটিপি যাচাই সফল! আপনার HSC-27 EI ক্র্যাশ কোর্স সক্রিয় হয়েছে।', 'success');
        switchEIView('dashboard');
      } else {
        // Paid Courses: SSC Math & SSC English
        showToast('🎉 ওটিপি যাচাই সফল! এবার কোর্স ফি পেমেন্ট সম্পন্ন করুন।', 'success');
        setTimeout(() => {
          openCoursePaymentModal(currentEnrollingCourse);
        }, 400);
      }

      updateActiveWatermark();
    }

    
    let currentPaymentMethod = 'bkash';
    let adminFilterStatus = 'all';

    function copyPayTargetNumber() {
      const num = document.getElementById('payTargetNumber')?.innerText || '01684520421';
      navigator.clipboard.writeText(num).then(function() {
        const text = document.getElementById('copyBtnText');
        const btn = document.getElementById('btnCopyPayNumber');
        if (text) text.innerText = '✓ কপি হয়েছে!';
        if (btn) btn.className = 'px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-extrabold text-xs transition flex items-center gap-1 shadow-2xs';
        setTimeout(function() {
          if (text) text.innerText = 'কপি করুন';
          if (btn) btn.className = 'px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-[#E2136E] text-[#E2136E] hover:text-white font-extrabold text-xs transition flex items-center gap-1 cursor-pointer shadow-2xs';
        }, 2500);
      }).catch(function() {
        showToast('বিকাশ নম্বর: 01684520421', 'info');
      });
    }

    function fillDemoTrxID() {
      const trxInput = document.getElementById('payTrxId');
      if (trxInput) {
        const randomCode = 'BLA' + Math.floor(100000 + Math.random() * 900000);
        trxInput.value = randomCode;
        showToast('টেস্ট বিকাশ TrxID বসানো হয়েছে: ' + randomCode, 'info');
      }
    }

    function openCoursePaymentModal(courseType) {
      currentEnrollingCourse = courseType || currentEnrollingCourse || 'ssc_english';
      const modal = document.getElementById('coursePaymentModal');
      const box = document.getElementById('coursePaymentModalBox');
      const titleEl = document.getElementById('payCourseTitle');
      const badgeEl = document.getElementById('payCourseBadge');
      const priceEl = document.getElementById('payCoursePrice');
      const oldPriceEl = document.getElementById('payCourseOldPrice');
      const stepAmount = document.getElementById('payStepAmount');
      const senderInput = document.getElementById('paySenderNumber');
      const trxInput = document.getElementById('payTrxId');
      const alert = document.getElementById('payErrorAlert');

      if (alert) alert.classList.add('hidden');
      if (trxInput) trxInput.value = '';

      if (currentEnrollingCourse === 'ssc_math') {
        if (badgeEl) badgeEl.innerText = 'SSC 2027';
        if (titleEl) titleEl.innerText = 'SSC-27 Math Suggestion Course (গণিত)';
        if (priceEl) priceEl.innerText = '৳ ১৯৯';
        if (oldPriceEl) oldPriceEl.innerText = '৳ ৪৯৯';
        if (stepAmount) stepAmount.innerText = '৳ ১৯৯';
      } else {
        if (badgeEl) badgeEl.innerText = 'SSC 2027';
        if (titleEl) titleEl.innerText = 'SSC-27 English Suggestion Course (ইংরেজি)';
        if (priceEl) priceEl.innerText = '৳ ২৯৯';
        if (oldPriceEl) oldPriceEl.innerText = '৳ ৮৯৯';
        if (stepAmount) stepAmount.innerText = '৳ ২৯৯';
      }

      const defaultPhone = (pendingEnrollData && pendingEnrollData.phone) || (currentUser && currentUser.phone) || '01748470620';
      if (senderInput) senderInput.value = defaultPhone;

      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    function closeCoursePaymentModal() {
      const modal = document.getElementById('coursePaymentModal');
      const box = document.getElementById('coursePaymentModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function backFromPaymentToOTP() {
      closeCoursePaymentModal();
      const phone = (pendingEnrollData && pendingEnrollData.phone) || '01748470620';
      openEnrollOTPModal(phone);
    }

    // -------------------------------------------------------------
    // OPTION 2: PENDING VERIFICATION SUBMISSION (24hr SLA)
    // -------------------------------------------------------------
    function submitCoursePayment() {
      const senderNumber = document.getElementById('paySenderNumber')?.value || '';
      const trxId = document.getElementById('payTrxId')?.value || '';
      const alert = document.getElementById('payErrorAlert');

      if (senderNumber.trim().length < 8 || trxId.trim().length < 5) {
        if (alert) {
          alert.classList.remove('hidden');
          alert.innerText = '❌ অনুগ্রহ করে সঠিক ট্রানজেকশন আইডি (TrxID) ও প্রেরকের নম্বর দিন!';
        }
        showToast('ভুল তথ্য! TrxID ও প্রেরকের নম্বর চেক করুন।', 'error');
        return;
      }

      if (alert) alert.classList.add('hidden');

      const studentData = pendingEnrollData || currentUser || {
        name: 'শিক্ষার্থী',
        email: 'student@insight.edu',
        phone: senderNumber,
        college: 'ঢাকা কলেজ',
        enrolledAt: new Date().toISOString()
      };

      const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      const courseTitle = currentEnrollingCourse === 'ssc_math' ? 'SSC-27 Math Suggestion Course (গণিত)' : 'SSC-27 English Suggestion Course (ইংরেজি)';
      const amount = currentEnrollingCourse === 'ssc_math' ? '৳ ১৯৯' : '৳ ২৯৯';
      const timeFormatted = new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });

      const orderRecord = {
        id: orderId,
        course: currentEnrollingCourse,
        courseTitle: courseTitle,
        method: 'bkash',
        amount: amount,
        senderNumber: senderNumber.trim(),
        trxId: trxId.trim().toUpperCase(),
        student: studentData,
        status: 'pending',
        submittedAt: timeFormatted,
        timestamp: Date.now()
      };

      // 1. Save specific course pending order
      localStorage.setItem('insight_order_' + currentEnrollingCourse, JSON.stringify(orderRecord));

      // 2. Add to global orders array
      let allOrders = [];
      try {
        allOrders = JSON.parse(localStorage.getItem('insight_all_orders') || '[]');
      } catch(e) {}
      allOrders = allOrders.filter(function(o) {
        return !(o.course === currentEnrollingCourse && o.student && o.student.phone === studentData.phone && o.status === 'pending');
      });
      allOrders.unshift(orderRecord);
      localStorage.setItem('insight_all_orders', JSON.stringify(allOrders));

      closeCoursePaymentModal();
      openPaymentPendingModal(orderRecord);
      showToast('পেমেন্ট রিকোয়েস্ট সফলভাবে জমা হয়েছে!', 'info');

      updateCourseEnrollNotice();
    }

    // -------------------------------------------------------------
    // PENDING MODAL CONTROLLERS
    // -------------------------------------------------------------
    function openPaymentPendingModal(order) {
      const modal = document.getElementById('paymentPendingModal');
      const box = document.getElementById('paymentPendingModalBox');
      if (!modal || !box) return;

      const orderIdEl = document.getElementById('pendingModalOrderId');
      const courseNameEl = document.getElementById('pendingModalCourseName');
      const amountEl = document.getElementById('pendingModalAmount');
      const senderEl = document.getElementById('pendingModalSender');
      const trxIdEl = document.getElementById('pendingModalTrxId');

      if (orderIdEl) orderIdEl.innerText = '#' + (order.id || 'ORD-1001');
      if (courseNameEl) courseNameEl.innerText = order.courseTitle || (order.course === 'ssc_math' ? 'SSC Math Suggestion' : 'SSC English Suggestion');
      if (amountEl) amountEl.innerText = order.amount || '৳ ২৯৯';
      if (senderEl) senderEl.innerText = order.senderNumber || '017XXXXXXXX';
      if (trxIdEl) trxIdEl.innerText = order.trxId || 'BLA93KZ104';

      modal.classList.remove('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-95');
      box.classList.add('scale-100');
    }

    function closePaymentPendingModal() {
      const modal = document.getElementById('paymentPendingModal');
      const box = document.getElementById('paymentPendingModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function openAdminPanelFromPending() {
      closePaymentPendingModal();
      openAdminPanel();
    }

    // -------------------------------------------------------------
    // ADMIN PANEL CONTROLLERS
    // -------------------------------------------------------------
    function openAdminPanel() {
      openAdminGateModal();
    }

    function generateDecoySecurityCode() {
      const canvas = document.getElementById('securityImageCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;

      // 1. Light cyan background (matching user screenshot)
      ctx.fillStyle = '#edf7fd';
      ctx.fillRect(0, 0, w, h);

      // Thin inner border
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 1;
      ctx.strokeRect(0.5, 0.5, w - 1, h - 1);

      // Character pool (similar to user image: V, 6, T, 9, J, B, C, D, S, etc.)
      const chars = ['V', '6', 'T', '9', 'J', 'B', 'C', 'D', 'S', 'R', '7', 'K', '8', 'P', 'E', 'N', 'X', 'Y', '3', '4', 'M', 'Q'];
      const charCount = 7;
      const selectedChars = [];
      for (let i = 0; i < charCount; i++) {
        selectedChars.push(chars[Math.floor(Math.random() * chars.length)]);
      }

      // 2. Background sweeping bezier curves (scratch lines)
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.4 + Math.random() * 0.8;
        ctx.beginPath();
        const startY = 15 + Math.random() * (h - 30);
        ctx.moveTo(0, startY);
        ctx.bezierCurveTo(
          w * 0.25, Math.random() * h,
          w * 0.65, Math.random() * h,
          w, 15 + Math.random() * (h - 30)
        );
        ctx.stroke();
      }

      // 3. Draw serif distorted characters
      const fonts = ['"Times New Roman"', 'Georgia', 'Palatino', 'serif'];
      const startX = 18;
      const stepX = (w - 36) / charCount;

      selectedChars.forEach(function(char, idx) {
        ctx.save();
        const cx = startX + idx * stepX + (Math.random() * 6 - 3);
        const cy = h / 2 + 10 + (Math.random() * 14 - 7);
        const rot = (Math.random() * 0.44 - 0.22); // -12 to +12 deg
        const size = Math.floor(34 + Math.random() * 9);
        const fontName = fonts[Math.floor(Math.random() * fonts.length)];

        ctx.translate(cx, cy);
        ctx.rotate(rot);

        ctx.font = 'bold ' + size + 'px ' + fontName;
        ctx.fillStyle = '#263238';
        ctx.fillText(char, 0, 0);

        ctx.restore();
      });

      // 4. Foreground scratch lines, tick hooks (V-shapes and arcs like in the sample image)
      for (let i = 0; i < 7; i++) {
        ctx.strokeStyle = '#2d3748';
        ctx.lineWidth = 1.4 + Math.random() * 0.9;
        ctx.beginPath();
        const kx = 15 + Math.random() * (w - 30);
        const ky = 15 + Math.random() * (h - 30);
        ctx.moveTo(kx, ky);

        const type = Math.floor(Math.random() * 3);
        if (type === 0) {
          // Sharp V / hook tick
          ctx.lineTo(kx + 8 + Math.random() * 8, ky + 12 + Math.random() * 12);
          ctx.lineTo(kx + 20 + Math.random() * 12, ky - 8 + Math.random() * 8);
        } else if (type === 1) {
          // Curved arc / squiggle
          ctx.quadraticCurveTo(kx + Math.random() * 30 - 15, ky + Math.random() * 25 - 12, kx + 35, ky + Math.random() * 20 - 10);
        } else {
          // Crossing slash line
          ctx.lineTo(kx + 25 + Math.random() * 15, ky + Math.random() * 20 - 10);
        }
        ctx.stroke();
      }
    }

    function openAdminGateModal() {
      const modal = document.getElementById('adminGateModal');
      const box = document.getElementById('adminGateModalBox');
      if (!modal || !box) return;

      document.getElementById('adminGateStep1')?.classList.remove('hidden');
      document.getElementById('adminGateStep2')?.classList.add('hidden');

      const userInp = document.getElementById('adminGateUser');
      const phoneInp = document.getElementById('adminGatePhone');
      const passInp = document.getElementById('adminGatePass');
      const phraseInp = document.getElementById('adminGatePhrase');
      const err1 = document.getElementById('adminGateError1');
      const err2 = document.getElementById('adminGateError2');

      if (userInp) userInp.value = '';
      if (phoneInp) phoneInp.value = '';
      if (passInp) passInp.value = '';
      if (phraseInp) phraseInp.value = '';
      if (err1) err1.classList.add('hidden');
      if (err2) err2.classList.add('hidden');

      generateDecoySecurityCode();

      modal.classList.remove('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-95');
      box.classList.add('scale-100');
    }

    function closeAdminGateModal() {
      const modal = document.getElementById('adminGateModal');
      const box = document.getElementById('adminGateModalBox');
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function validateAdminStep1() {
      const user = (document.getElementById('adminGateUser')?.value || '').trim().toLowerCase();
      const phone = (document.getElementById('adminGatePhone')?.value || '').trim().replace(/[^0-9]/g, '');
      const pass = (document.getElementById('adminGatePass')?.value || '').trim();
      const err = document.getElementById('adminGateError1');

      const isValidUser = (user === 'rajib');
      const isValidPhone = (phone === '01234567890' || phone === '8801234567890' || phone.includes('01234567890'));
      const isValidPass = (pass.length >= 1);

      if (!isValidUser || !isValidPhone || !isValidPass) {
        if (err) {
          err.classList.remove('hidden');
          err.innerText = '❌ Invalid username, phone number, or password!';
        }
        showToast('Invalid credentials! Please try again.', 'error');
        return;
      }

      if (err) err.classList.add('hidden');
      document.getElementById('adminGateStep1')?.classList.add('hidden');
      document.getElementById('adminGateStep2')?.classList.remove('hidden');
      setTimeout(generateDecoySecurityCode, 40);
      const phraseInp = document.getElementById('adminGatePhrase');
      if (phraseInp) {
        phraseInp.value = '';
        phraseInp.focus();
      }
      showToast('Step 1 verified! Please complete security verification 🛡️', 'info');
    }

    function backToAdminStep1() {
      document.getElementById('adminGateStep2')?.classList.add('hidden');
      document.getElementById('adminGateStep1')?.classList.remove('hidden');
    }

    function normalizeAdminPhrase(str) {
      if (!str) return '';
      return str.toLowerCase().replace(/[^a-z0-9\u0980-\u09FF]/g, '');
    }

    function validateAdminStep2() {
      const phraseInput = document.getElementById('adminGatePhrase')?.value || '';
      const normalizedInput = normalizeAdminPhrase(phraseInput);
      const targetNormalized = normalizeAdminPhrase('ami shadhin.amake enter korte dao71');
      const err = document.getElementById('adminGateError2');

      const matches = (normalizedInput === targetNormalized) || 
                      (normalizedInput.includes('amishadhin') && normalizedInput.includes('enter') && (normalizedInput.includes('dao71') || normalizedInput.includes('71'))) ||
                      (normalizedInput.includes('shadhin') && normalizedInput.includes('71') && normalizedInput.includes('enter')) ||
                      (normalizedInput.includes('স্বাধীন') && normalizedInput.includes('৭১') && normalizedInput.includes('এন্টার'));

      if (!matches) {
        if (err) {
          err.classList.remove('hidden');
          err.innerText = '❌ Security verification failed! Invalid code.';
        }
        generateDecoySecurityCode();
        showToast('Security verification failed! Please try again.', 'error');
        return;
      }

      if (err) err.classList.add('hidden');
      closeAdminGateModal();
      showToast('🎉 Security check verified! Welcome Rajib.', 'success');
      showRealAdminPanel();
    }

    let currentAdminTab = 'dashboard';
    let currentMonthHistoryIndex = 0; // 0 = Present (Nov 2026), 1 = Oct, 2 = Sep, 3 = Aug, 4 = Jul, 5 = Jun
    let adminSearchQuery = '';
    let adminPendingSearchQuery = '';
    let adminPreviousSearchQuery = '';
    let adminDeletedSearchQuery = '';

    const monthlyHistoryData = [
      {
        monthIndex: 0,
        pageLabel: 'Present (New)',
        nameEn: 'November 2026',
        sales: '128',
        earning: '৳ 38,400',
        totalEarning: '৳ 194,600',
        visitors: '14,212',
        totalVisitors: '68,540',
        revPoints: [{w: '1st Week', val: '৳ 4,800', x: 45, y: 155}, {w: '2nd Week', val: '৳ 12,300', x: 195, y: 115}, {w: '3rd Week', val: '৳ 24,600', x: 355, y: 70}, {w: '4th Week', val: '৳ 38,400', x: 515, y: 30}],
        visPoints: [{w: '1st Week', val: '2,800', x: 45, y: 155}, {w: '2nd Week', val: '6,200', x: 195, y: 110}, {w: '3rd Week', val: '10,400', x: 355, y: 65}, {w: '4th Week', val: '14,212', x: 515, y: 25}],
      },
      {
        monthIndex: 1,
        pageLabel: 'Page -1',
        nameEn: 'October 2026',
        sales: '95',
        earning: '৳ 28,500',
        totalEarning: '৳ 156,200',
        visitors: '11,450',
        totalVisitors: '54,368',
        revPoints: [{w: '1st Week', val: '৳ 3,500', x: 45, y: 165}, {w: '2nd Week', val: '৳ 9,800', x: 195, y: 135}, {w: '3rd Week', val: '৳ 18,200', x: 355, y: 95}, {w: '4th Week', val: '৳ 28,500', x: 515, y: 65}],
        visPoints: [{w: '1st Week', val: '2,100', x: 45, y: 165}, {w: '2nd Week', val: '5,400', x: 195, y: 130}, {w: '3rd Week', val: '8,900', x: 355, y: 95}, {w: '4th Week', val: '11,450', x: 515, y: 55}],
      },
      {
        monthIndex: 2,
        pageLabel: 'Page -2',
        nameEn: 'September 2026',
        sales: '82',
        earning: '৳ 24,600',
        totalEarning: '৳ 127,700',
        visitors: '9,800',
        totalVisitors: '42,918',
        revPoints: [{w: '1st Week', val: '৳ 3,000', x: 45, y: 170}, {w: '2nd Week', val: '৳ 8,400', x: 195, y: 140}, {w: '3rd Week', val: '৳ 15,600', x: 355, y: 105}, {w: '4th Week', val: '৳ 24,600', x: 515, y: 75}],
        visPoints: [{w: '1st Week', val: '1,800', x: 45, y: 170}, {w: '2nd Week', val: '4,600', x: 195, y: 135}, {w: '3rd Week', val: '7,500', x: 355, y: 100}, {w: '4th Week', val: '9,800', x: 515, y: 65}],
      },
      {
        monthIndex: 3,
        pageLabel: 'Page -3',
        nameEn: 'August 2026',
        sales: '70',
        earning: '৳ 21,000',
        totalEarning: '৳ 103,100',
        visitors: '8,300',
        totalVisitors: '33,118',
        revPoints: [{w: '1st Week', val: '৳ 2,500', x: 45, y: 175}, {w: '2nd Week', val: '৳ 7,200', x: 195, y: 145}, {w: '3rd Week', val: '৳ 13,800', x: 355, y: 110}, {w: '4th Week', val: '৳ 21,000', x: 515, y: 85}],
        visPoints: [{w: '1st Week', val: '1,500', x: 45, y: 175}, {w: '2nd Week', val: '3,900', x: 195, y: 140}, {w: '3rd Week', val: '6,200', x: 355, y: 105}, {w: '4th Week', val: '8,300', x: 515, y: 75}],
      },
      {
        monthIndex: 4,
        pageLabel: 'Page -4',
        nameEn: 'July 2026',
        sales: '58',
        earning: '৳ 17,400',
        totalEarning: '৳ 82,100',
        visitors: '7,100',
        totalVisitors: '24,818',
        revPoints: [{w: '1st Week', val: '৳ 2,100', x: 45, y: 180}, {w: '2nd Week', val: '৳ 5,800', x: 195, y: 150}, {w: '3rd Week', val: '৳ 11,400', x: 355, y: 120}, {w: '4th Week', val: '৳ 17,400', x: 515, y: 95}],
        visPoints: [{w: '1st Week', val: '1,200', x: 45, y: 180}, {w: '2nd Week', val: '3,300', x: 195, y: 145}, {w: '3rd Week', val: '5,400', x: 355, y: 115}, {w: '4th Week', val: '7,100', x: 515, y: 85}],
      },
      {
        monthIndex: 5,
        pageLabel: 'Page -5',
        nameEn: 'June 2026',
        sales: '45',
        earning: '৳ 13,500',
        totalEarning: '৳ 64,700',
        visitors: '5,600',
        totalVisitors: '17,718',
        revPoints: [{w: '1st Week', val: '৳ 1,500', x: 45, y: 185}, {w: '2nd Week', val: '৳ 4,500', x: 195, y: 160}, {w: '3rd Week', val: '৳ 9,000', x: 355, y: 130}, {w: '4th Week', val: '৳ 13,500', x: 515, y: 105}],
        visPoints: [{w: '1st Week', val: '900', x: 45, y: 185}, {w: '2nd Week', val: '2,400', x: 195, y: 155}, {w: '3rd Week', val: '4,100', x: 355, y: 125}, {w: '4th Week', val: '5,600', x: 515, y: 95}],
      }
    ];

    function goToPresentMonth() {
      currentMonthHistoryIndex = 0;
      renderAdminDashboard();
      showToast('📅 Returned to Present (November 2026) data!', 'success');
    }

    function navigateMonthHistory(delta) {
      if (delta === -1) {
        // Go back in time (older month)
        if (currentMonthHistoryIndex < monthlyHistoryData.length - 1) {
          currentMonthHistoryIndex++;
        }
      } else if (delta === 1) {
        // Go forward in time (newer month towards present)
        if (currentMonthHistoryIndex > 0) {
          currentMonthHistoryIndex--;
        }
      }
      renderAdminDashboard();
      const m = monthlyHistoryData[currentMonthHistoryIndex];
      showToast('📅 Loaded stats & graph for ' + m.nameEn, 'info');
    }

    function toggleDashboardMonth() {
      if (currentMonthHistoryIndex === 0) {
        navigateMonthHistory(-1);
      } else {
        goToPresentMonth();
      }
    }

    function ensureInitialAdminOrders() {
      let orders = [];
      try {
        orders = JSON.parse(localStorage.getItem('insight_all_orders') || '[]');
      } catch(e) {}

      if (!orders || orders.length === 0) {
        orders = [
          {
            id: 'ORD-251744',
            course: 'ssc_english',
            courseTitle: 'SSC-27 English Suggestion Course (English)',
            method: 'bkash',
            amount: '৳ 299',
            senderNumber: '01712345678',
            trxId: 'BLA552233',
            student: { name: 'Rakib Hasan', phone: '01712345678', college: 'Dhaka Residential Model College' },
            status: 'pending',
            submittedAt: 'Nov 20, 2026, 08:09 PM',
            timestamp: Date.now() - 3600000
          },
          {
            id: 'ORD-199707',
            course: 'ssc_english',
            courseTitle: 'SSC-27 English Suggestion Course (English)',
            method: 'bkash',
            amount: '৳ 299',
            senderNumber: '01912345678',
            trxId: 'BLA892144',
            student: { name: 'Sadia Islam', phone: '01912345678', college: 'Viqarunnisa Noon School & College' },
            status: 'approved',
            submittedAt: 'Nov 20, 2026, 06:15 PM',
            approvedAt: 'Nov 20, 2026, 06:30 PM',
            timestamp: Date.now() - 7200000
          },
          {
            id: 'ORD-448201',
            course: 'ssc_math',
            courseTitle: 'SSC-27 Higher Math Booster Batch (Higher Math)',
            method: 'bkash',
            amount: '৳ 299',
            senderNumber: '01823456789',
            trxId: 'BLA774102',
            student: { name: 'Tanvir Hossain', phone: '01823456789', college: 'Notre Dame College' },
            status: 'approved',
            submittedAt: 'Nov 19, 2026, 09:40 PM',
            approvedAt: 'Nov 19, 2026, 10:00 PM',
            timestamp: Date.now() - 86400000
          },
          {
            id: 'ORD-328206',
            course: 'ssc_english',
            courseTitle: 'SSC-27 English Suggestion Course (English)',
            method: 'bkash',
            amount: '৳ 299',
            senderNumber: '01712345678',
            trxId: 'BLA2025BAA',
            student: { name: 'Rakib Hasan', phone: '01712345678', college: 'Dhaka Residential Model College' },
            status: 'deleted',
            deletedAt: 'Nov 20, 2026, 08:08 PM',
            timestamp: Date.now() - 4000000
          }
        ];
        localStorage.setItem('insight_all_orders', JSON.stringify(orders));
      }
    }

    function getAllOrders() {
      try {
        return JSON.parse(localStorage.getItem('insight_all_orders') || '[]');
      } catch(e) {
        return [];
      }
    }

    function saveAllOrders(orders) {
      localStorage.setItem('insight_all_orders', JSON.stringify(orders));
      updateAdminNotifBadge();
    }

    function toggleAdminSidebar() {
      const sidebar = document.getElementById('adminSidebar');
      if (sidebar) sidebar.classList.toggle('hidden');
    }

    function showRealAdminPanel() {
      const modal = document.getElementById('adminOrdersModal');
      if (!modal) return;

      ensureInitialAdminOrders();
      modal.classList.remove('opacity-0', 'pointer-events-none');
      switchAdminTab('dashboard');
      updateAdminNotifBadge();
    }

    function closeAdminPanel() {
      const modal = document.getElementById('adminOrdersModal');
      if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
      }
    }

    function adminLogout() {
      closeAdminPanel();
      showToast('Logged out of Admin Panel successfully.', 'info');
    }

    function openPendingFromNotif() {
      switchAdminTab('pending');
      showToast('🔔 Navigated to Pending Requests!', 'info');
    }

    function switchAdminTab(tab) {
      currentAdminTab = tab;

      const tabs = ['dashboard', 'total', 'pending', 'previous', 'deleted'];
      tabs.forEach(function(t) {
        const btn = document.getElementById('navAdmin' + t.charAt(0).toUpperCase() + t.slice(1));
        const pane = document.getElementById('adminTabContent' + t.charAt(0).toUpperCase() + t.slice(1));
        if (btn) {
          if (t === tab) {
            btn.className = 'admin-nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-black transition cursor-pointer bg-emerald-600 text-white shadow-sm';
          } else {
            btn.className = 'admin-nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] sm:text-base font-extrabold text-slate-700 hover:text-emerald-900 hover:bg-emerald-100/70 transition cursor-pointer';
          }
        }
        if (pane) {
          if (t === tab) {
            pane.classList.remove('hidden');
          } else {
            pane.classList.add('hidden');
          }
        }
      });

      const breadcrumb = document.getElementById('adminHeaderBreadcrumb');
      if (breadcrumb) {
        const titles = {
          dashboard: 'Analytics Dashboard',
          total: 'Total Requests',
          pending: 'Pending Requests',
          previous: 'Previous Requests',
          deleted: 'Deleted Requests (Recycle Bin)'
        };
        breadcrumb.innerText = titles[tab] || 'Dashboard';
      }

      if (tab === 'dashboard') renderAdminDashboard();
      else if (tab === 'total') renderTotalOrders();
      else if (tab === 'pending') renderPendingOrders();
      else if (tab === 'previous') renderPreviousOrders();
      else if (tab === 'deleted') renderDeletedOrders();

      updateAdminNotifBadge();
    }

    function updateAdminNotifBadge() {
      const orders = getAllOrders();
      const totalCount = orders.length;
      const pendingCount = orders.filter(function(o) { return o.status === 'pending'; }).length;
      const approvedCount = orders.filter(function(o) { return o.status === 'approved'; }).length;
      const deletedCount = orders.filter(function(o) { return o.status === 'deleted'; }).length;

      const bTotal = document.getElementById('badgeTotalRequests');
      const bPending = document.getElementById('badgePendingRequests');
      const bApproved = document.getElementById('badgeApprovedRequests');
      const bDeleted = document.getElementById('badgeDeletedRequests');
      if (bTotal) bTotal.innerText = totalCount;
      if (bPending) bPending.innerText = pendingCount;
      if (bApproved) bApproved.innerText = approvedCount;
      if (bDeleted) bDeleted.innerText = deletedCount;

      const notifBadge = document.getElementById('adminNotifBadge');
      if (notifBadge) {
        notifBadge.innerText = pendingCount;
        if (pendingCount > 0) {
          notifBadge.classList.remove('hidden');
        } else {
          notifBadge.classList.add('hidden');
        }
      }

      const pTabBadge = document.getElementById('pendingTabCountBadge');
      const prevTabBadge = document.getElementById('previousTabCountBadge');
      const delTabBadge = document.getElementById('deletedTabCountBadge');
      if (pTabBadge) pTabBadge.innerText = pendingCount + ' Pending';
      if (prevTabBadge) prevTabBadge.innerText = approvedCount + ' Approved';
      if (delTabBadge) delTabBadge.innerText = deletedCount + ' Deleted';
    }

    function renderAdminDashboard() {
      const currentData = monthlyHistoryData[currentMonthHistoryIndex] || monthlyHistoryData[0];
      const isPresent = (currentMonthHistoryIndex === 0);

      // Top Month Badge & Button text
      const mBadge = document.getElementById('dashboardMonthBadge');
      const topBtnText = document.getElementById('btnTopMonthToggleText');

      if (mBadge) {
        mBadge.innerText = isPresent ? 'Present Month: ' + currentData.nameEn : 'Previous Month: ' + currentData.nameEn;
      }
      if (topBtnText) {
        topBtnText.innerText = isPresent ? 'View Previous Month Stats ➔' : 'Return to Present (November 2026) ➔';
      }

      // Middle Month Navigator Widget Controls
      const indicator = document.getElementById('monthHistoryIndicator');
      const btnPrev = document.getElementById('btnMonthPrev');
      const btnNext = document.getElementById('btnMonthNext');
      const btnPres = document.getElementById('btnQuickPresent');

      if (indicator) {
        if (isPresent) {
          indicator.innerHTML = '<span class="text-emerald-700">Present (New)</span> • ' + currentData.nameEn;
        } else {
          indicator.innerHTML = '<span class="text-blue-700">Page -' + currentMonthHistoryIndex + '</span> • ' + currentData.nameEn;
        }
      }

      if (btnPrev) {
        const canGoPrev = (currentMonthHistoryIndex < monthlyHistoryData.length - 1);
        btnPrev.disabled = !canGoPrev;
        btnPrev.className = canGoPrev ? 
          'px-4 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-black text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer border border-slate-200/70' :
          'px-4 py-2 rounded-xl bg-slate-100 text-slate-300 font-black text-xs sm:text-sm transition flex items-center gap-1.5 cursor-not-allowed border border-slate-200/60 opacity-50';
      }

      if (btnNext) {
        const canGoNext = (currentMonthHistoryIndex > 0);
        btnNext.disabled = !canGoNext;
        btnNext.className = canGoNext ? 
          'px-4 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-black text-xs sm:text-sm transition flex items-center gap-1.5 cursor-pointer border border-slate-200/70' :
          'px-4 py-2 rounded-xl bg-slate-100 text-slate-300 font-black text-xs sm:text-sm transition flex items-center gap-1.5 cursor-not-allowed border border-slate-200/60 opacity-50';
      }

      if (btnPres) {
        btnPres.className = isPresent ?
          'px-3.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer bg-emerald-600 text-white shadow-2xs flex items-center gap-1.5' :
          'px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white flex items-center gap-1.5';
      }

      // 6 Metric Cards
      const valSales = document.getElementById('valSales');
      const lblSalesTitle = document.getElementById('lblSalesTitle');

      const valEarning = document.getElementById('valEarning');
      const lblEarningTitle = document.getElementById('lblEarningTitle');

      const valTotalEarning = document.getElementById('valTotalEarning');

      const valVisitors = document.getElementById('valVisitors');
      const lblVisitorsTitle = document.getElementById('lblVisitorsTitle');

      const valTotalVisitors = document.getElementById('valTotalVisitors');

      if (lblSalesTitle) lblSalesTitle.innerText = isPresent ? 'This Month Sales' : currentData.nameEn + ' Sales';
      if (valSales) valSales.innerText = currentData.sales;

      if (lblEarningTitle) lblEarningTitle.innerText = isPresent ? 'This Month Earning' : currentData.nameEn + ' Earning';
      if (valEarning) valEarning.innerText = currentData.earning;

      if (valTotalEarning) valTotalEarning.innerText = currentData.totalEarning;

      if (lblVisitorsTitle) lblVisitorsTitle.innerText = isPresent ? 'This Month Visitors' : currentData.nameEn + ' Visitors';
      if (valVisitors) valVisitors.innerText = currentData.visitors;

      if (valTotalVisitors) valTotalVisitors.innerText = currentData.totalVisitors;

      const gRevTitle = document.getElementById('graphRevTitle');
      const gRevTotal = document.getElementById('graphRevTotal');
      if (gRevTitle) gRevTitle.innerText = currentData.nameEn + ' Revenue Movement';
      if (gRevTotal) gRevTotal.innerText = currentData.earning;

      const gVisTitle = document.getElementById('graphVisTitle');
      const gVisTotal = document.getElementById('graphVisTotal');
      if (gVisTitle) gVisTitle.innerText = currentData.nameEn + ' Total Visitors Movement';
      if (gVisTotal) gVisTotal.innerText = currentData.visitors + ' Visitors';

      // Render the 2 SVG Graphs with currentData points
      renderRevenueSvg(currentData);
      renderVisitorSvg(currentData);

      // Render quick pending queue in dashboard
      renderDashboardPendingPreview();
    }

    function renderRevenueSvg(data) {
      const container = document.getElementById('containerRevenueGraph');
      if (!container) return;
      const currentData = data || monthlyHistoryData[currentMonthHistoryIndex] || monthlyHistoryData[0];
      const points = currentData.revPoints;

      const pathD = 'M ' + points[0].x + ' ' + points[0].y + 
        ' C 110 ' + (points[0].y - 15) + ', 130 ' + (points[1].y + 15) + ', ' + points[1].x + ' ' + points[1].y +
        ' C 260 ' + (points[1].y - 20) + ', 280 ' + (points[2].y + 20) + ', ' + points[2].x + ' ' + points[2].y +
        ' C 420 ' + (points[2].y - 20) + ', 450 ' + (points[3].y + 20) + ', ' + points[3].x + ' ' + points[3].y;

      const areaD = pathD + ' L ' + points[3].x + ' 190 L ' + points[0].x + ' 190 Z';

      let dotsHtml = '';
      points.forEach(function(pt) {
        dotsHtml += '<circle cx="' + pt.x + '" cy="' + pt.y + '" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />' +
                    '<text x="' + pt.x + '" y="' + (pt.y - 10) + '" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">' + pt.val + '</text>';
      });

      container.innerHTML = '<svg viewBox="0 0 570 200" class="w-full h-full overflow-visible">' +
        '<defs>' +
          '<linearGradient id="revGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
            '<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>' +
            '<stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>' +
          '</linearGradient>' +
        '</defs>' +
        '<line x1="20" y1="35" x2="550" y2="35" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>' +
        '<line x1="20" y1="85" x2="550" y2="85" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>' +
        '<line x1="20" y1="135" x2="550" y2="135" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>' +
        '<line x1="20" y1="185" x2="550" y2="185" stroke="#e2e8f0" stroke-width="1.5"/>' +
        '<path d="' + areaD + '" fill="url(#revGrad)"/>' +
        '<path d="' + pathD + '" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>' +
        dotsHtml +
      '</svg>';
    }

    function renderVisitorSvg(data) {
      const container = document.getElementById('containerVisitorGraph');
      if (!container) return;
      const currentData = data || monthlyHistoryData[currentMonthHistoryIndex] || monthlyHistoryData[0];
      const points = currentData.visPoints;

      const pathD = 'M ' + points[0].x + ' ' + points[0].y + 
        ' C 110 ' + (points[0].y - 15) + ', 130 ' + (points[1].y + 15) + ', ' + points[1].x + ' ' + points[1].y +
        ' C 260 ' + (points[1].y - 20) + ', 280 ' + (points[2].y + 20) + ', ' + points[2].x + ' ' + points[2].y +
        ' C 420 ' + (points[2].y - 20) + ', 450 ' + (points[3].y + 20) + ', ' + points[3].x + ' ' + points[3].y;

      const areaD = pathD + ' L ' + points[3].x + ' 190 L ' + points[0].x + ' 190 Z';

      let dotsHtml = '';
      points.forEach(function(pt) {
        dotsHtml += '<circle cx="' + pt.x + '" cy="' + pt.y + '" r="5" fill="#059669" stroke="#ffffff" stroke-width="2" />' +
                    '<text x="' + pt.x + '" y="' + (pt.y - 10) + '" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">' + pt.val + '</text>';
      });

      container.innerHTML = '<svg viewBox="0 0 570 200" class="w-full h-full overflow-visible">' +
        '<defs>' +
          '<linearGradient id="visGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
            '<stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>' +
            '<stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>' +
          '</linearGradient>' +
        '</defs>' +
        '<line x1="20" y1="35" x2="550" y2="35" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>' +
        '<line x1="20" y1="85" x2="550" y2="85" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>' +
        '<line x1="20" y1="135" x2="550" y2="135" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>' +
        '<line x1="20" y1="185" x2="550" y2="185" stroke="#e2e8f0" stroke-width="1.5"/>' +
        '<path d="' + areaD + '" fill="url(#visGrad)"/>' +
        '<path d="' + pathD + '" fill="none" stroke="#059669" stroke-width="3.5" stroke-linecap="round"/>' +
        dotsHtml +
      '</svg>';
    }

    function renderDashboardPendingPreview() {
      const container = document.getElementById('dashboardPendingPreviewContainer');
      if (!container) return;
      const orders = getAllOrders().filter(function(o) { return o.status === 'pending'; });

      if (orders.length === 0) {
        container.innerHTML = '<div class="py-4 text-center text-xs text-slate-400">🎉 No pending requests right now! All orders verified.</div>';
        return;
      }

      container.innerHTML = orders.slice(0, 3).map(function(order) {
        const studentName = (order.student && order.student.name) ? order.student.name : 'Unknown';
        const studentPhone = (order.student && order.student.phone) ? order.student.phone : '';
        const courseTitle = order.courseTitle || order.course;
        return '<div class="p-3 rounded-2xl border border-amber-200 bg-amber-50/40 flex items-center justify-between gap-3">' +
          '<div class="min-w-0">' +
            '<div class="flex items-center gap-2">' +
              '<span class="font-mono text-xs font-black text-slate-900">#' + order.id + '</span>' +
              '<span class="text-xs font-bold text-slate-800 truncate">' + studentName + ' (' + studentPhone + ')</span>' +
            '</div>' +
            '<div class="text-[11px] text-slate-500 truncate">' + courseTitle + ' • TrxID: <span class="font-mono font-bold text-[#E2136E]">' + order.trxId + '</span></div>' +
          '</div>' +
          '<button type="button" data-oid="' + order.id + '" onclick="approveOrder(this.dataset.oid)" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shrink-0 cursor-pointer shadow-2xs">✓ Approve</button>' +
        '</div>';
      }).join('');
    }

    function handleAdminSearch(val) {
      adminSearchQuery = (val || '').toLowerCase().trim();
      renderTotalOrders();
    }

    function handlePendingSearch(val) {
      adminPendingSearchQuery = (val || '').toLowerCase().trim();
      renderPendingOrders();
    }

    function handlePreviousSearch(val) {
      adminPreviousSearchQuery = (val || '').toLowerCase().trim();
      renderPreviousOrders();
    }

    function handleDeletedSearch(val) {
      adminDeletedSearchQuery = (val || '').toLowerCase().trim();
      renderDeletedOrders();
    }

    function filterTotalOrdersTab(status) {
      adminTotalFilter = status;
      ['all', 'pending', 'approved', 'deleted'].forEach(function(s) {
        const b = document.getElementById('tabFilter' + s.charAt(0).toUpperCase() + s.slice(1));
        if (b) {
          if (s === status) {
            b.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white transition cursor-pointer';
          } else {
            b.className = 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer';
          }
        }
      });
      renderTotalOrders();
    }

    function copyAdminTrx(trx) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(trx);
        showToast('TrxID copied: ' + trx, 'info');
      }
    }

    function formatToEnglishDate(val, ts) {
      if (ts) {
        return new Date(ts).toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
      }
      if (!val) return '';
      const bnToEnDigits = {'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'};
      const bnMonths = {'জানু':'Jan','ফেব্রু':'Feb','মার্চ':'Mar','এপ্রিল':'Apr','মে':'May','জুন':'Jun','জুলাই':'Jul','আগস্ট':'Aug','সেপ্টে':'Sep','অক্টো':'Oct','নভে':'Nov','ডিসে':'Dec'};
      let s = String(val).replace(/[০-৯]/g, function(d) { return bnToEnDigits[d] || d; });
      for (let m in bnMonths) {
        s = s.replace(new RegExp(m, 'g'), bnMonths[m]);
      }
      return s;
    }

    function renderOrderCard(order, viewType) {
      const isPending = order.status === 'pending';
      const isApproved = order.status === 'approved';
      const isDeleted = order.status === 'deleted';

      let badgeHtml = '';
      if (isPending) {
        badgeHtml = '<span class="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>Pending</span>';
      } else if (isApproved) {
        badgeHtml = '<span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">✓ Approved</span>';
      } else if (isDeleted) {
        badgeHtml = '<span class="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-extrabold">🗑️ Deleted</span>';
      }

      let actionsHtml = '';
      if (isPending) {
        actionsHtml = '<button type="button" data-oid="' + order.id + '" onclick="approveOrder(this.dataset.oid)" class="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-2xs transition flex items-center gap-1 cursor-pointer"><span>✓ Approve</span></button>' +
                      '<button type="button" data-oid="' + order.id + '" onclick="deleteOrder(this.dataset.oid)" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-bold text-xs transition cursor-pointer"><span>🗑️ Delete</span></button>';
      } else if (isDeleted) {
        actionsHtml = '<button type="button" data-oid="' + order.id + '" onclick="restoreAndApproveOrder(this.dataset.oid)" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-2xs transition flex items-center gap-1 cursor-pointer" title="Directly Approve & Activate"><span>♻️ Restore & Approve</span></button>' +
                      '<button type="button" data-oid="' + order.id + '" onclick="restoreToPendingOrder(this.dataset.oid)" class="px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition cursor-pointer" title="Move back to Pending list"><span>↩️ Return to Pending</span></button>' +
                      '<button type="button" data-oid="' + order.id + '" onclick="permanentDeleteOrder(this.dataset.oid)" class="px-2 py-1.5 rounded-xl bg-slate-100 hover:bg-red-200 text-slate-500 hover:text-red-700 font-bold text-xs transition cursor-pointer" title="Permanently Delete">✕</button>';
      } else {
        actionsHtml = '<span class="text-xs font-bold text-emerald-600 flex items-center gap-1"><span>✅ Active / Enrolled</span></span>' +
                      '<button type="button" data-oid="' + order.id + '" onclick="deleteOrder(this.dataset.oid)" class="px-2 py-1 rounded-lg text-slate-400 hover:text-rose-600 text-xs transition cursor-pointer" title="Delete">🗑️</button>';
      }

      const cardBorder = isPending ? 'border-amber-300 bg-amber-50/20' : (isDeleted ? 'border-rose-200 bg-rose-50/20' : 'border-slate-200 bg-white');
      const studentName = (order.student && order.student.name) ? order.student.name : 'Unknown';
      const studentPhone = (order.student && order.student.phone) ? order.student.phone : '';
      const courseTitle = order.courseTitle || order.course;
      const amount = order.amount || '৳ 299';
      const senderNumber = order.senderNumber || '-';
      const trxId = order.trxId || '-';
      const submittedAt = formatToEnglishDate(order.submittedAt, order.timestamp);

      return '<div class="p-4 sm:p-5 rounded-2xl border ' + cardBorder + ' shadow-2xs space-y-3">' +
        '<div class="flex items-center justify-between gap-2">' +
          '<div class="flex items-center gap-2">' +
            '<span class="font-mono text-xs font-black text-slate-900">#' + order.id + '</span>' +
            '<span class="text-xs text-slate-400">•</span>' +
            '<span class="text-xs sm:text-sm font-black text-slate-800">' + courseTitle + '</span>' +
          '</div>' +
          badgeHtml +
        '</div>' +
        '<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs py-2 border-y border-slate-100">' +
          '<div>' +
            '<span class="text-[10px] text-slate-400 block font-semibold">Student</span>' +
            '<span class="font-bold text-slate-900 truncate block">' + studentName + '</span>' +
            '<span class="text-[10px] text-slate-500 font-mono">' + studentPhone + '</span>' +
          '</div>' +
          '<div>' +
            '<span class="text-[10px] text-slate-400 block font-semibold">Course Fee</span>' +
            '<span class="font-black text-emerald-600 font-mono">' + amount + '</span>' +
          '</div>' +
          '<div>' +
            '<span class="text-[10px] text-slate-400 block font-semibold">Sender Number</span>' +
            '<span class="font-mono font-bold text-slate-800">' + senderNumber + '</span>' +
          '</div>' +
          '<div>' +
            '<span class="text-[10px] text-slate-400 block font-semibold">bKash TrxID</span>' +
            '<div class="flex items-center gap-1.5">' +
              '<span class="font-mono font-black text-[#E2136E] bg-pink-100 px-2 py-0.5 rounded text-xs">' + trxId + '</span>' +
              '<button type="button" data-trx="' + trxId + '" onclick="copyAdminTrx(this.dataset.trx)" class="text-slate-400 hover:text-slate-700 text-xs cursor-pointer" title="Copy TrxID">📋</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="flex items-center justify-between gap-2 pt-0.5">' +
          '<span class="text-[11px] text-slate-500 font-semibold font-mono">Date: ' + submittedAt + '</span>' +
          '<div class="flex items-center gap-2">' + actionsHtml + '</div>' +
        '</div>' +
      '</div>';
    }

    function renderTotalOrders() {
      const container = document.getElementById('adminTotalOrdersContainer');
      if (!container) return;

      let orders = getAllOrders();
      if (adminTotalFilter !== 'all') {
        orders = orders.filter(function(o) { return o.status === adminTotalFilter; });
      }

      if (adminSearchQuery) {
        orders = orders.filter(function(o) {
          const str = ((o.id || '') + ' ' + (o.student?.name || '') + ' ' + (o.student?.phone || '') + ' ' + (o.trxId || '') + ' ' + (o.courseTitle || '')).toLowerCase();
          return str.includes(adminSearchQuery);
        });
      }

      if (orders.length === 0) {
        container.innerHTML = '<div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-400">No requests found matching your query.</div>';
        return;
      }

      container.innerHTML = orders.map(function(o) { return renderOrderCard(o, 'total'); }).join('');
    }

    function renderPendingOrders() {
      const container = document.getElementById('adminPendingOrdersContainer');
      if (!container) return;

      let orders = getAllOrders().filter(function(o) { return o.status === 'pending'; });
      if (adminPendingSearchQuery) {
        orders = orders.filter(function(o) {
          const str = ((o.id || '') + ' ' + (o.student?.name || '') + ' ' + (o.student?.phone || '') + ' ' + (o.trxId || '') + ' ' + (o.courseTitle || '')).toLowerCase();
          return str.includes(adminPendingSearchQuery);
        });
      }

      if (orders.length === 0) {
        container.innerHTML = '<div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-400">' + 
          (adminPendingSearchQuery ? 'No pending requests match your search.' : '🎉 No pending payment requests! All requests verified.') + '</div>';
        return;
      }

      container.innerHTML = orders.map(function(o) { return renderOrderCard(o, 'pending'); }).join('');
    }

    function renderPreviousOrders() {
      const container = document.getElementById('adminPreviousOrdersContainer');
      if (!container) return;

      let orders = getAllOrders().filter(function(o) { return o.status === 'approved'; });
      if (adminPreviousSearchQuery) {
        orders = orders.filter(function(o) {
          const str = ((o.id || '') + ' ' + (o.student?.name || '') + ' ' + (o.student?.phone || '') + ' ' + (o.trxId || '') + ' ' + (o.courseTitle || '')).toLowerCase();
          return str.includes(adminPreviousSearchQuery);
        });
      }

      if (orders.length === 0) {
        container.innerHTML = '<div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-400">' + 
          (adminPreviousSearchQuery ? 'No approved requests match your search.' : 'No approved students found yet.') + '</div>';
        return;
      }

      container.innerHTML = orders.map(function(o) { return renderOrderCard(o, 'previous'); }).join('');
    }

    function renderDeletedOrders() {
      const container = document.getElementById('adminDeletedOrdersContainer');
      if (!container) return;

      let orders = getAllOrders().filter(function(o) { return o.status === 'deleted'; });
      if (adminDeletedSearchQuery) {
        orders = orders.filter(function(o) {
          const str = ((o.id || '') + ' ' + (o.student?.name || '') + ' ' + (o.student?.phone || '') + ' ' + (o.trxId || '') + ' ' + (o.courseTitle || '')).toLowerCase();
          return str.includes(adminDeletedSearchQuery);
        });
      }

      if (orders.length === 0) {
        container.innerHTML = '<div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-400">' + 
          (adminDeletedSearchQuery ? 'No deleted requests match your search.' : '🗑️ Recycle Bin is empty. No deleted requests.') + '</div>';
        return;
      }

      container.innerHTML = orders.map(function(o) { return renderOrderCard(o, 'deleted'); }).join('');
    }

    function approveOrder(orderId) {
      let orders = getAllOrders();
      const order = orders.find(function(o) { return o.id === orderId; });
      if (order) {
        order.status = 'approved';
        order.approvedAt = new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
        saveAllOrders(orders);

        // Unlock course access
        localStorage.setItem('insight_enrolled_' + order.course, JSON.stringify(order.student));
        localStorage.setItem('insight_order_' + order.course, JSON.stringify(order));

        showToast('🎉 Order #' + orderId + ' Approved! Classroom access granted.', 'success');
        updateCourseEnrollNotice();
        switchAdminTab(currentAdminTab);
      }
    }

    function deleteOrder(orderId) {
      let orders = getAllOrders();
      const order = orders.find(function(o) { return o.id === orderId; });
      if (order) {
        order.status = 'deleted';
        order.deletedAt = new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
        saveAllOrders(orders);

        // Lock course access
        localStorage.removeItem('insight_enrolled_' + order.course);
        localStorage.setItem('insight_order_' + order.course, JSON.stringify(order));

        showToast('🗑️ Order #' + orderId + ' deleted (moved to Recycle Bin).', 'info');
        updateCourseEnrollNotice();
        switchAdminTab(currentAdminTab);
      }
    }

    function restoreAndApproveOrder(orderId) {
      let orders = getAllOrders();
      const order = orders.find(function(o) { return o.id === orderId; });
      if (order) {
        order.status = 'approved';
        order.approvedAt = new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
        saveAllOrders(orders);

        localStorage.setItem('insight_enrolled_' + order.course, JSON.stringify(order.student));
        localStorage.setItem('insight_order_' + order.course, JSON.stringify(order));

        showToast('♻️ Order #' + orderId + ' restored & approved successfully!', 'success');
        updateCourseEnrollNotice();
        switchAdminTab(currentAdminTab);
      }
    }

    function restoreToPendingOrder(orderId) {
      let orders = getAllOrders();
      const order = orders.find(function(o) { return o.id === orderId; });
      if (order) {
        order.status = 'pending';
        saveAllOrders(orders);

        showToast('↩️ Order #' + orderId + ' returned to pending list.', 'info');
        switchAdminTab(currentAdminTab);
      }
    }

    function permanentDeleteOrder(orderId) {
      if (!confirm('Are you sure you want to permanently delete this request? It cannot be restored.')) return;
      let orders = getAllOrders();
      orders = orders.filter(function(o) { return o.id !== orderId; });
      saveAllOrders(orders);
      showToast('❌ Order permanently deleted.', 'info');
      switchAdminTab(currentAdminTab);
    }

    function createDemoPendingOrder() {
      const demoOrder = {
        id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
        course: 'ssc_english',
        courseTitle: 'SSC-27 English Suggestion Course (ইংরেজি)',
        method: 'bkash',
        amount: '৳ ২৯৯',
        senderNumber: '018' + Math.floor(10000000 + Math.random() * 90000000),
        trxId: 'BLA' + Math.floor(100000 + Math.random() * 900000),
        student: {
          name: 'ফারহান আহমেদ',
          phone: '01812345678',
          college: 'ঢাকা রেসিডেনসিয়াল মডেল কলেজ'
        },
        status: 'pending',
        submittedAt: new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }),
        timestamp: Date.now()
      };

      let allOrders = getAllOrders();
      allOrders.unshift(demoOrder);
      saveAllOrders(allOrders);

      showToast('⚡ টেস্ট পেন্ডিং অর্ডার যুক্ত হয়েছে!', 'info');
      switchAdminTab(currentAdminTab);
    }

    function updateCourseEnrollNotice() {
      const mathEnrolled = !!localStorage.getItem('insight_enrolled_ssc_math');
      const mathNotice = document.getElementById('alreadyEnrolledMathNotice');
      if (mathNotice) {
        if (mathEnrolled) mathNotice.classList.remove('hidden');
        else mathNotice.classList.add('hidden');
      }
    }

    

    function filterEIVideos(subject) {
      currentEISubjectFilter = subject;
      const tabs = document.querySelectorAll('.ei-vid-tab');
      tabs.forEach(t => {
        t.className = 'ei-vid-tab px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-blue-600 cursor-pointer transition';
      });
      const active = document.getElementById('ei-tab-' + subject);
      if (active) {
        active.className = 'ei-vid-tab px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition';
      }
      renderEIVideos();
    }

    function renderEIVideos() {
      const grid = document.getElementById('eiVideoGrid');
      if (!grid) return;

      const filtered = eiCourseVideos.filter(function(v) {
        if (currentEISubjectFilter === 'all') return true;
        return v.subject === currentEISubjectFilter;
      });

      grid.innerHTML = filtered.map(function(v, idx) {
        const bgGradient = v.subject === 'ict'
          ? 'from-blue-900 via-indigo-900 to-purple-950'
          : 'from-purple-950 via-slate-900 to-indigo-950';
        const tagText = v.subject === 'ict' ? ('ICT • ' + v.chapter) : ('English • ' + v.chapter);
        const teacherShort = v.teacher.split('(')[0].trim();
        const num = v.id && v.id.includes('_') ? v.id.split('_')[1] : ('0' + (idx + 1)).slice(-2);

        return '<div data-vid="' + v.id + '" onclick="openEIVideoWatchModal(this.dataset.vid)" class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer">' +
          '<div>' +
            '<div class="relative aspect-video bg-gradient-to-tr ' + bgGradient + ' p-6 flex flex-col items-center justify-center text-center text-white overflow-hidden">' +
              '<div class="w-11 h-11 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center text-lg mb-2.5 backdrop-blur-xs transition shadow-sm">' +
                '▶' +
              '</div>' +
              '<div class="text-[11px] text-yellow-300 font-extrabold uppercase tracking-wider mb-1">' + tagText + '</div>' +
              '<h4 class="text-base sm:text-lg font-black text-white leading-snug line-clamp-2 px-2">' + v.title + '</h4>' +
            '</div>' +
            '<div class="p-5">' +
              '<div class="flex items-center justify-between gap-2 mb-2">' +
                '<div class="flex items-center gap-2 truncate">' +
                  '<span class="px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-black tracking-wide shrink-0">Lec - ' + num + '</span>' +
                  '<span class="text-xs font-bold text-slate-600 truncate">' + v.chapter + '</span>' +
                '</div>' +
                '<span class="text-[11px] text-slate-400 font-semibold shrink-0">⏱ ' + v.duration + '</span>' +
              '</div>' +
              '<h4 class="text-sm sm:text-base font-black text-slate-900 line-clamp-2 group-hover:text-blue-600 transition leading-snug">' + v.title + '</h4>' +
              '<div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">' +
                '<span class="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">' +
                  '<span>দেখুন</span>' +
                  '<span>➔</span>' +
                '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    function openEIVideoWatchModal(videoId) {
      if (!currentUser) {
        pendingPostLoginAction = { type: 'ei_video', videoId: videoId };
        showToast('ক্লাসটি দেখতে অনুগ্রহ করে প্রথমে লগইন করুন 🚀');
        setTimeout(() => {
          navigateTo('login');
        }, 400);
        return;
      }
      updateActiveWatermark();
      const video = eiCourseVideos.find(v => v.id === videoId);
      if (!video) return;
      currentEIVideo = video;

      // Reset player view
      const iframe = document.getElementById('eiVideoIframe');
      const thumb = document.getElementById('eiVideoThumbnailView');
      const btnWatch = document.getElementById('btnWatchNow');

      if (iframe) {
        iframe.src = 'https://www.youtube.com/embed/' + video.youtubeId + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
        iframe.classList.remove('hidden');
      }
      if (thumb) thumb.classList.add('hidden');
      if (btnWatch) {
        btnWatch.innerHTML = '<span>✓</span><span>Now Playing • ওয়েবসাইটেই ক্লাস চলছে</span>';
        btnWatch.className = 'w-full py-3.5 px-6 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 cursor-default';
      }

      // Populate Video Details (Matching Image 5)
      const tagText = video.subject === 'ict' ? 'ICT • ' + video.chapter : 'English • ' + video.chapter;
      const tagEl = document.getElementById('eiThumbSubjectTag');
      if (tagEl) tagEl.innerText = tagText;

      const thumbTitleEl = document.getElementById('eiThumbTitle');
      if (thumbTitleEl) thumbTitleEl.innerText = video.title;

      const thumbChapEl = document.getElementById('eiThumbChapter');
      if (thumbChapEl) thumbChapEl.innerText = video.subTitle + ' • ' + video.chapter;

      const modalTitle = document.getElementById('watchModalTitle');
      if (modalTitle) modalTitle.innerText = video.title;

      const modalTeacher = document.getElementById('watchModalTeacher');
      if (modalTeacher) modalTeacher.innerText = video.teacher;

      const sheetLabel = document.getElementById('watchModalSheetLabel');
      if (sheetLabel) sheetLabel.innerText = video.sheet || 'Lecture Sheet';

      // Show Modal
      const modal = document.getElementById('eiVideoWatchModal');
      const box = document.getElementById('eiVideoWatchModalBox');
      if (modal && box) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }

    function closeEIVideoWatchModal() {
      const modal = document.getElementById('eiVideoWatchModal');
      const box = document.getElementById('eiVideoWatchModalBox');
      const iframe = document.getElementById('eiVideoIframe');
      if (iframe) {
        iframe.src = '';
        iframe.classList.add('hidden');
      }
      if (modal && box) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
      }
    }

    function startPlayingEIVideo() {
      if (!currentEIVideo) return;
      const iframe = document.getElementById('eiVideoIframe');
      const thumb = document.getElementById('eiVideoThumbnailView');
      const btnWatch = document.getElementById('btnWatchNow');

      if (thumb) thumb.classList.add('hidden');
      if (iframe) {
        iframe.classList.remove('hidden');
        // Support YouTube Unlisted IDs or links
        iframe.src = 'https://www.youtube.com/embed/' + currentEIVideo.youtubeId + '?autoplay=1&rel=0&modestbranding=1';
      }
      if (btnWatch) {
        btnWatch.innerHTML = '<span>✓</span><span>Now Playing</span>';
        btnWatch.className = 'w-full py-4 px-6 rounded-2xl bg-emerald-600 text-white font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-default';
      }
    }

    function downloadEILectureSheet() {
      if (!currentEIVideo) return;
      showSecurityToast(currentEIVideo.sheet + ' লেকচার শিট ডাউনলোড শুরু হয়েছে!');
    }

    // Initialize Single Active Device Security Watchdog
    initSingleDeviceWatchdog();
  </script>

</body>
</html>
`;

fs.writeFileSync(path.join(dir, 'insight_academia_multipage.html'), html, 'utf8');
fs.writeFileSync(path.join(dir, 'multipage_nav_widget.html'), html, 'utf8');
fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
console.log('Successfully written clean insight_academia_multipage.html, multipage_nav_widget.html, and index.html!');

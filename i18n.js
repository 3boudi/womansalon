/* ==========================================================================
   Maison de Beauté — Multilingual Translation System (EN / FR / AR)
   ========================================================================== */

const translations = {
  en: {
    // Nav
    nav_home: "Home", nav_philosophy: "Philosophy", nav_services: "Services",
    nav_atelier: "Atelier", nav_reviews: "Reviews", nav_contact: "Contact",
    nav_book: "Book Appointment", nav_book_mobile: "Book on WhatsApp",
    // Hero
    hero_overline: "Maison de Beauté / Atelier",
    hero_title: 'Curated <span class="italic-accent">*Excellence*</span><br>For The <span class="italic-accent">*Modern*</span> Soul.',
    hero_desc: "A serene sanctuary crafted for those who value understated elegance. We refine beauty through architectural precision, slow care rituals, and high-end botanical formulations.",
    hero_btn_primary: "Reserve Session", hero_btn_secondary: "Explore Services",
    // Philosophy
    phil_overline: "Philosophy",
    phil_title: 'We believe that luxury lies in the <span class="italic-accent">details</span>. It is not about adding decoration, but perfecting the essentials that define you.',
    phil_desc: "Every haircut, skincare therapy, and makeup detail we design is treated as a piece of architectural art. We respect the natural canvas, using nourishing organic essences and modern styling methodologies to bring forth a clean, quiet luxury.",
    phil_link: "Learn about our bespoke rituals",
    // Services
    svc_title: 'Our <span class="italic-accent">Bespoke</span> Rituals',
    svc_desc: "A tailored menu of specialized beauty treatments designed around organic curation and structural precision.",
    svc1_name: "Hairstyling", svc1_price: "From $95",
    svc1_desc: "Precision cuts, dimensional luxury coloring, and deep reconstruction treatments that respect hair integrity.",
    svc1_d1: "Editorial Haircut & Blowout", svc1_d2: "Balayage & Dimensional Color", svc1_d3: "Organic Keratin Treatment",
    svc2_name: "Skincare", svc2_price: "From $120",
    svc2_desc: "Immersive facial treatments combining manual lymphatic drainage, clean cosmetics, and advanced microcurrents.",
    svc2_d1: "Atelier Signature Facial (75 mins)", svc2_d2: "Sculpting Lymphatic Therapy", svc2_d3: "Oxygen Infusion Radiance Ritual",
    svc3_name: "Makeup Artistry", svc3_price: "From $110",
    svc3_desc: "Clean-beauty applications focusing on radiant skin finish, graphic alignments, and editorial portrait formatting.",
    svc3_d1: "Minimalist Editorial Makeup", svc3_d2: "Bridal Consultation & Artistry", svc3_d3: "Private Makeup Masterclass",
    svc_book: "Book Your Ritual",
    // Atelier
    atl_overline: "The Space",
    atl_title: 'A Sanctuary of <span class="italic-accent">Quiet Luxury</span>',
    atl_desc: "Designed by award-winning architects, our space features neutral travertine stone, raw linen draperies, and natural sunwells. It is an acoustic haven created to silence the city's noise, offering you pure architectural tranquility while we focus on your care.",
    atl_stat1: "12", atl_stat1_label: "Expert Stylists",
    atl_stat2: "100%", atl_stat2_label: "Organic Products",
    atl_stat3: "1-on-1", atl_stat3_label: "Dedicated Care",
    // Testimonials
    test_title: 'The Atelier <span class="italic-accent">Journal</span>',
    test1_text: '"The atmosphere here is pure tranquility. From the soft linen textures to the meticulous care during my color treatment, the entire experience felt completely custom and incredibly relaxing. My hair has never felt healthier."',
    test1_name: "Charlotte Dubois", test1_role: "Art Director",
    test2_text: '"Maison de Beauté is my ultimate escape. The signature facial is more than a treatment; it is a ritual of pure rejuvenation. Their organic formulations left my skin radiant and healthy. An absolute masterpiece of service."',
    test2_name: "Helena Rostova", test2_role: "Classical Pianist",
    // FAQ
    faq_overline: "F.A.Q.", faq_title: 'The <span class="italic-accent">Details</span>',
    faq_desc: "Everything you need to know about preparing for your visit to the Atelier.",
    faq1_q: "How do I book an appointment?",
    faq1_a: "You can book directly using our website contact form, which pre-fills a booking text on WhatsApp. Alternatively, you can click any of our WhatsApp buttons or call us directly.",
    faq2_q: "What products do you use?",
    faq2_a: "We partner exclusively with certified organic, biodynamic skin and haircare brands. Our products are free of parabens, synthetic sulfates, and chemical fragrances to ensure clean, natural health.",
    faq3_q: "What is your cancellation policy?",
    faq3_a: "We value our stylists' dedicated one-on-one time. We kindly request cancellations or rescheduling adjustments be made at least 24 hours prior to your scheduled session.",
    // Contact
    ct_title: 'Begin Your <br><span class="italic-accent">Transformation</span>',
    ct_loc_label: "Atelier Location", ct_loc: "18 Rue Didouche Mourad, Algiers, Algeria",
    ct_phone_label: "Contact Direct", ct_email_label: "Email Inquiries",
    ct_desc: "Our booking process is direct and personal. Choose to chat with our automated booking assistant on WhatsApp, or call our Atelier directly to speak with an assistant.",
    ct_btn_wa: "Book via WhatsApp Chatbot", ct_btn_call: "Call Atelier",
    // Footer
    ft_desc: "An editorial sanctuary focused on architectural beauty, curated organic wellness, and high-contrast personal elegance.",
    ft_explore: "Explore", ft_hours_title: "Atelier Hours", ft_connect: "Connect",
    ft_link_home: "Home", ft_link_phil: "Philosophy", ft_link_svc: "Bespoke Rituals",
    ft_link_atl: "The Atelier Space", ft_link_journal: "Client Journal",
    ft_mon: "Monday — Friday", ft_sat: "Saturday", ft_sun: "Sunday",
    ft_sun_val: "Closed (By Appointment Only)",
    ft_copy: "© 2026 Maison de Beauté. All Rights Reserved.",
    ft_privacy: "Privacy Policy", ft_terms: "Terms of Service", ft_credits: "Site Credits",
    // Floating
    float_book: "حجز سريع / BOOK NOW"
  },

  fr: {
    nav_home: "Accueil", nav_philosophy: "Philosophie", nav_services: "Services",
    nav_atelier: "L'Atelier", nav_reviews: "Avis", nav_contact: "Contact",
    nav_book: "Réserver", nav_book_mobile: "Réserver via WhatsApp",
    hero_overline: "Maison de Beauté / Atelier",
    hero_title: 'L\'Excellence <span class="italic-accent">*Raffinée*</span><br>Pour L\'Âme <span class="italic-accent">*Moderne*</span>.',
    hero_desc: "Un sanctuaire serein conçu pour celles qui apprécient l'élégance discrète. Nous sublissons la beauté grâce à une précision architecturale, des rituels de soins lents et des formulations botaniques haut de gamme.",
    hero_btn_primary: "Réserver une Séance", hero_btn_secondary: "Nos Services",
    phil_overline: "Philosophie",
    phil_title: 'Nous croyons que le luxe réside dans les <span class="italic-accent">détails</span>. Il ne s\'agit pas d\'ajouter des ornements, mais de perfectionner l\'essentiel qui vous définit.',
    phil_desc: "Chaque coupe de cheveux, soin de la peau et maquillage que nous concevons est traité comme une pièce d'art architectural. Nous respectons le canevas naturel, utilisant des essences organiques nourrissantes et des méthodologies de coiffure modernes.",
    phil_link: "Découvrir nos rituels sur mesure",
    svc_title: 'Nos Rituels <span class="italic-accent">Sur Mesure</span>',
    svc_desc: "Un menu personnalisé de soins de beauté spécialisés, conçu autour de la curation organique et de la précision structurelle.",
    svc1_name: "Coiffure", svc1_price: "À partir de 95$",
    svc1_desc: "Coupes de précision, coloration dimensionnelle de luxe et traitements de reconstruction profonde qui respectent l'intégrité des cheveux.",
    svc1_d1: "Coupe & Brushing Éditorial", svc1_d2: "Balayage & Couleur Dimensionnelle", svc1_d3: "Traitement Kératine Bio",
    svc2_name: "Soins de la Peau", svc2_price: "À partir de 120$",
    svc2_desc: "Soins du visage immersifs combinant drainage lymphatique manuel, cosmétiques propres et micro-courants avancés.",
    svc2_d1: "Soin Signature Atelier (75 min)", svc2_d2: "Thérapie Lymphatique Sculptante", svc2_d3: "Rituel Éclat Infusion d'Oxygène",
    svc3_name: "Maquillage Artistique", svc3_price: "À partir de 110$",
    svc3_desc: "Applications de beauté propre axées sur un fini de peau radieux, des alignements graphiques et un formatage de portrait éditorial.",
    svc3_d1: "Maquillage Éditorial Minimaliste", svc3_d2: "Consultation & Art Nuptial", svc3_d3: "Masterclass Maquillage Privée",
    svc_book: "Réserver Votre Rituel",
    atl_overline: "L'Espace",
    atl_title: 'Un Sanctuaire de <span class="italic-accent">Luxe Discret</span>',
    atl_desc: "Conçu par des architectes primés, notre espace présente de la pierre de travertin neutre, des draperies en lin brut et des puits de lumière naturelle. C'est un havre acoustique créé pour faire taire le bruit de la ville.",
    atl_stat1: "12", atl_stat1_label: "Stylistes Experts",
    atl_stat2: "100%", atl_stat2_label: "Produits Bio",
    atl_stat3: "1-à-1", atl_stat3_label: "Soins Dédiés",
    test_title: 'Le Journal de <span class="italic-accent">l\'Atelier</span>',
    test1_text: '"L\'atmosphère ici est une pure tranquillité. Des textures de lin douces aux soins méticuleux pendant mon traitement couleur, toute l\'expérience était entièrement personnalisée et incroyablement relaxante."',
    test1_name: "Charlotte Dubois", test1_role: "Directrice Artistique",
    test2_text: '"Maison de Beauté est mon évasion ultime. Le soin signature est plus qu\'un traitement ; c\'est un rituel de pure régénération. Leurs formulations bio ont laissé ma peau rayonnante et saine."',
    test2_name: "Helena Rostova", test2_role: "Pianiste Classique",
    faq_overline: "F.A.Q.", faq_title: 'Les <span class="italic-accent">Détails</span>',
    faq_desc: "Tout ce que vous devez savoir pour préparer votre visite à l'Atelier.",
    faq1_q: "Comment réserver un rendez-vous ?",
    faq1_a: "Vous pouvez réserver directement en utilisant notre formulaire de contact, qui pré-remplit un texte de réservation sur WhatsApp. Vous pouvez également cliquer sur nos boutons WhatsApp ou nous appeler directement.",
    faq2_q: "Quels produits utilisez-vous ?",
    faq2_a: "Nous travaillons exclusivement avec des marques de soins certifiées biologiques et biodynamiques. Nos produits sont exempts de parabènes, sulfates synthétiques et fragrances chimiques.",
    faq3_q: "Quelle est votre politique d'annulation ?",
    faq3_a: "Nous apprécions le temps dédié de nos stylistes. Nous vous demandons de faire les annulations ou les ajustements au moins 24 heures avant votre séance prévue.",
    ct_title: 'Commencez Votre <br><span class="italic-accent">Transformation</span>',
    ct_loc_label: "Adresse de l'Atelier", ct_loc: "18 Rue Didouche Mourad, Alger, Algérie",
    ct_phone_label: "Téléphone Direct", ct_email_label: "Email",
    ct_desc: "Notre processus de réservation est direct et personnel. Choisissez de discuter avec notre assistant de réservation automatisé sur WhatsApp, ou appelez notre Atelier directement.",
    ct_btn_wa: "Réserver via WhatsApp", ct_btn_call: "Appeler l'Atelier",
    ft_desc: "Un sanctuaire éditorial dédié à la beauté architecturale, au bien-être organique et à l'élégance personnelle raffinée.",
    ft_explore: "Explorer", ft_hours_title: "Horaires de l'Atelier", ft_connect: "Suivez-nous",
    ft_link_home: "Accueil", ft_link_phil: "Philosophie", ft_link_svc: "Rituels Sur Mesure",
    ft_link_atl: "L'Espace Atelier", ft_link_journal: "Journal des Clientes",
    ft_mon: "Lundi — Vendredi", ft_sat: "Samedi", ft_sun: "Dimanche",
    ft_sun_val: "Fermé (Sur Rendez-vous)",
    ft_copy: "© 2026 Maison de Beauté. Tous droits réservés.",
    ft_privacy: "Politique de Confidentialité", ft_terms: "Conditions Générales", ft_credits: "Crédits",
    float_book: "حجز سريع / RÉSERVER"
  },

  ar: {
    nav_home: "الرئيسية", nav_philosophy: "الفلسفة", nav_services: "الخدمات",
    nav_atelier: "الأتيليه", nav_reviews: "التقييمات", nav_contact: "اتصل بنا",
    nav_book: "احجز موعد", nav_book_mobile: "احجز عبر واتساب",
    hero_overline: "ميزون دو بوتيه / أتيليه",
    hero_title: 'التميّز <span class="italic-accent">*الراقي*</span><br>للروح <span class="italic-accent">*العصرية*</span>.',
    hero_desc: "ملاذ هادئ صُمم لمن يقدّرن الأناقة الرفيعة. نحن نصقل الجمال بدقة معمارية، وطقوس عناية بطيئة، وتركيبات نباتية فاخرة.",
    hero_btn_primary: "احجزي جلستك", hero_btn_secondary: "استكشفي الخدمات",
    phil_overline: "الفلسفة",
    phil_title: 'نؤمن بأن الفخامة تكمن في <span class="italic-accent">التفاصيل</span>. ليس الأمر إضافة زخرفة، بل إتقان الأساسيات التي تعرّفك.',
    phil_desc: "كل قصة شعر وعناية بالبشرة ومكياج نصممه يُعامل كقطعة فنية معمارية. نحترم اللوحة الطبيعية باستخدام خلاصات عضوية مغذية ومنهجيات تصفيف حديثة.",
    phil_link: "اكتشفي طقوسنا الخاصة",
    svc_title: 'طقوسنا <span class="italic-accent">المخصصة</span>',
    svc_desc: "قائمة مخصصة من علاجات التجميل المتخصصة المصممة حول التنظيم العضوي والدقة البنيوية.",
    svc1_name: "تصفيف الشعر", svc1_price: "يبدأ من 95$",
    svc1_desc: "قصات دقيقة، وتلوين فاخر متعدد الأبعاد، وعلاجات إعادة بناء عميقة تحترم سلامة الشعر.",
    svc1_d1: "قص وتجفيف تحريري", svc1_d2: "بالاياج وتلوين متعدد الأبعاد", svc1_d3: "علاج كيراتين عضوي",
    svc2_name: "العناية بالبشرة", svc2_price: "يبدأ من 120$",
    svc2_desc: "علاجات وجه غامرة تجمع بين التصريف اللمفاوي اليدوي ومستحضرات التجميل النظيفة والتيارات الدقيقة المتقدمة.",
    svc2_d1: "علاج الوجه المميز (75 دقيقة)", svc2_d2: "علاج النحت اللمفاوي", svc2_d3: "طقوس إشراق بالأكسجين",
    svc3_name: "فن المكياج", svc3_price: "يبدأ من 110$",
    svc3_desc: "تطبيقات الجمال النظيف تركز على لمسة بشرة مشرقة وتنسيقات رسومية وتنسيق بورتريه تحريري.",
    svc3_d1: "مكياج تحريري بسيط", svc3_d2: "استشارة وفن العروس", svc3_d3: "دورة مكياج خاصة",
    svc_book: "احجزي طقسك",
    atl_overline: "المكان",
    atl_title: 'ملاذ من <span class="italic-accent">الفخامة الهادئة</span>',
    atl_desc: "صممه مهندسون معماريون حائزون على جوائز، يتميز فضاؤنا بحجر الترافرتين المحايد وستائر الكتان الخام وآبار الضوء الطبيعي. إنه ملاذ صوتي يوفر لك هدوءً معمارياً نقياً.",
    atl_stat1: "١٢", atl_stat1_label: "مصففة خبيرة",
    atl_stat2: "١٠٠٪", atl_stat2_label: "منتجات عضوية",
    atl_stat3: "١-١", atl_stat3_label: "عناية مخصصة",
    test_title: 'مجلة <span class="italic-accent">الأتيليه</span>',
    test1_text: '"الأجواء هنا هدوء خالص. من أنسجة الكتان الناعمة إلى العناية الدقيقة أثناء علاج اللون، كانت التجربة بأكملها مخصصة تمامًا ومريحة بشكل لا يصدق."',
    test1_name: "شارلوت دوبوا", test1_role: "مديرة فنية",
    test2_text: '"ميزون دو بوتيه هو ملاذي المفضل. العلاج المميز للوجه أكثر من مجرد علاج؛ إنه طقس تجديد خالص. تركيباتهم العضوية تركت بشرتي مشرقة وصحية."',
    test2_name: "هيلينا روستوفا", test2_role: "عازفة بيانو كلاسيكية",
    faq_overline: "الأسئلة الشائعة", faq_title: '<span class="italic-accent">التفاصيل</span>',
    faq_desc: "كل ما تحتاجين معرفته للتحضير لزيارتك للأتيليه.",
    faq1_q: "كيف أحجز موعداً؟",
    faq1_a: "يمكنك الحجز مباشرة عبر نموذج الاتصال الخاص بنا الذي يملأ نص حجز مسبقاً على واتساب. يمكنك أيضاً النقر على أزرار واتساب أو الاتصال بنا مباشرة.",
    faq2_q: "ما المنتجات التي تستخدمونها؟",
    faq2_a: "نتعامل حصرياً مع ماركات عناية بالبشرة والشعر عضوية معتمدة. منتجاتنا خالية من البارابين والسلفات الاصطناعية والعطور الكيميائية.",
    faq3_q: "ما هي سياسة الإلغاء؟",
    faq3_a: "نقدر وقت مصففاتنا المخصص. نطلب بلطف إجراء الإلغاءات أو التعديلات قبل 24 ساعة على الأقل من موعدك المحدد.",
    ct_title: 'ابدئي <br><span class="italic-accent">تحولك</span>',
    ct_loc_label: "عنوان الأتيليه", ct_loc: "18 شارع ديدوش مراد، الجزائر العاصمة",
    ct_phone_label: "الهاتف المباشر", ct_email_label: "البريد الإلكتروني",
    ct_desc: "عملية الحجز لدينا مباشرة وشخصية. اختاري الدردشة مع مساعد الحجز الآلي على واتساب، أو اتصلي بالأتيليه مباشرة.",
    ct_btn_wa: "احجزي عبر واتساب", ct_btn_call: "اتصلي بالأتيليه",
    ft_desc: "ملاذ تحريري يركز على الجمال المعماري والعافية العضوية والأناقة الشخصية الراقية.",
    ft_explore: "استكشفي", ft_hours_title: "ساعات العمل", ft_connect: "تواصلي معنا",
    ft_link_home: "الرئيسية", ft_link_phil: "الفلسفة", ft_link_svc: "الطقوس المخصصة",
    ft_link_atl: "فضاء الأتيليه", ft_link_journal: "مجلة العميلات",
    ft_mon: "الإثنين — الجمعة", ft_sat: "السبت", ft_sun: "الأحد",
    ft_sun_val: "مغلق (بموعد فقط)",
    ft_copy: "© 2026 ميزون دو بوتيه. جميع الحقوق محفوظة.",
    ft_privacy: "سياسة الخصوصية", ft_terms: "شروط الاستخدام", ft_credits: "الاعتمادات",
    float_book: "احجزي الآن / BOOK NOW"
  }
};

/* --- Translation Engine --- */
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update all data-i18n elements (text content)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Update all data-i18n-html elements (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) el.innerHTML = t[key];
  });

  // Handle RTL for Arabic
  const htmlEl = document.documentElement;
  if (lang === 'ar') {
    htmlEl.setAttribute('dir', 'rtl');
    htmlEl.setAttribute('lang', 'ar');
    document.body.classList.add('lang-ar');
    document.body.classList.remove('lang-fr');
  } else if (lang === 'fr') {
    htmlEl.setAttribute('dir', 'ltr');
    htmlEl.setAttribute('lang', 'fr');
    document.body.classList.remove('lang-ar');
    document.body.classList.add('lang-fr');
  } else {
    htmlEl.setAttribute('dir', 'ltr');
    htmlEl.setAttribute('lang', 'en');
    document.body.classList.remove('lang-ar', 'lang-fr');
  }

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Save preference
  localStorage.setItem('preferred-lang', lang);
}

/* --- Init on Load --- */
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Load saved language or default to English
  const savedLang = localStorage.getItem('preferred-lang') || 'en';
  setLanguage(savedLang);
});

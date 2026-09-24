(function () {
  var T = {
    en: {
      /* ── Nav ── */
      'nav.about':    'about',
      'nav.research': 'research',
      'nav.moments':  'moments',
      'nav.background': 'background',
      'nav.cv':       'cv',

      /* ── About – main bio ── */
      'about.bio1': 'I am a third-year PhD candidate at <a href="https://mila.quebec/en/" rel="external nofollow noopener" target="_blank">Mila</a> and <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a>, advised by <a href="https://scholar.google.com/citations?user=km6CP8cAAAAJ&amp;hl=en" rel="external nofollow noopener" target="_blank">Aaron Courville</a> and <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>. My research explores the intersection of scale and sample efficiency in reinforcement learning (RL), with the goal of making RL systems more practical for real-world applications. I am particularly interested in developing scalable RL post-training methods that enable models to continually learn, reason, and act over extended horizons. <strong>Currently, I am a Student Researcher at Google DeepMind in London, working on deep RL and LLM-guided evolutionary search for scientific discovery in nuclear fusion energy.</strong>',

      'about.bio2': 'I spent three years as a Student Researcher at <a href="https://research.google.com/teams/brain/" rel="external nofollow noopener" target="_blank">Google Brain</a> and <a href="https://deepmind.google/" rel="external nofollow noopener" target="_blank">DeepMind</a> working on deep RL. I hold an M.Sc. in Machine Learning from <a href="https://mila.quebec/en/" rel="external nofollow noopener" target="_blank">Mila</a> &amp; <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a> (co-supervised by <a href="https://scholar.google.com/citations?hl=en&amp;user=uyYPun0AAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Marc Bellemare</a>), and an M.Sc. in Engineering Science and a B.Sc. in Mechatronics Engineering from <a href="https://www.uao.edu.co/" rel="external nofollow noopener" target="_blank">Universidad Autónoma de Occidente</a>.',

      'about.bio3': 'Outside of research, I enjoy football, swimming, drawing, and dancing. I also enjoy building and supporting spaces that broaden access to AI education and research through initiatives and communities such as <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a>, and <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a>.',

      'about.more-label': '<i class="fas fa-user-circle"></i> More about me',

      'about.more1': 'I grew up in El Rodeo, a working-class neighborhood in <a href="https://es.wikipedia.org/wiki/Cali" rel="external nofollow noopener" target="_blank">Cali</a>, <a href="https://es.wikipedia.org/wiki/Colombia" rel="external nofollow noopener" target="_blank">Colombia</a> 🇨🇴. During high school, I attended Industrial Antonio José Camacho, a public technical school in the city center, where I was first exposed to electronics and programming and earned a <a href="https://es.wikipedia.org/wiki/Servicio_Nacional_de_Aprendizaje" rel="external nofollow noopener" target="_blank">SENA</a>-certified technical degree. Those early experiences introduced me to problem solving, technology, and the idea that education could open opportunities beyond what I had imagined. My parents, who worked hard to support our family, taught me that goals become achievable through discipline, perseverance, and consistency. Their support encouraged me to think beyond my immediate surroundings, dream big, and believe that opportunities can be created, not only found.',

      'about.more2': 'My journey into research began during my undergraduate years through student research groups and early research experiences. Through projects in areas such as computer vision, robotics, and intelligent systems, I realized that research is not only about finding answers — it is about learning to ask meaningful questions and building solutions with real impact. Over time, those experiences opened opportunities I had never imagined and eventually led me to continue my academic journey internationally, first through an exchange experience in Brazil and later through graduate studies abroad. These experiences shaped how I think about research today: as a collaborative process that connects people, ideas, and real-world challenges.',

      'about.more3': 'Beyond research, I care deeply about building communities and expanding access to AI education and research. Through initiatives such as <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a>, and <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a>, I contribute to connecting students and researchers across Latin America and supporting broader participation in international research communities. Whenever I return to Colombia, I enjoy sharing experiences with students and staying connected to where I come from. I strongly believe that talent is widely distributed, even when opportunities are not.',

      'about.job-market': '<strong>Open to opportunities</strong> — I\'m on the job market for full-time research roles in ML &amp; RL. <a href="mailto:jobando0730@gmail.com">Let\'s talk</a>.',

      'about.contact': 'Feel free to reach out via email (jobando0730 AT gmail DOT com) — I\'m always happy to chat about research or collaboration.',

      /* ── Research ── */
      'research.hero-light': 'Ideas',
      'research.hero-bold':  'in Motion',
      'research.hero-desc':  'A visual journey through my research — figures, results, and moments from the work. Much of this grew out of collaborations with brilliant peers, and I\'ve learned as much from those people as from the research itself. Click any image to zoom in. For a full list of publications, visit my <a href="https://scholar.google.com/citations?user=KViAb3EAAAAJ" rel="external nofollow noopener" target="_blank">Google Scholar</a>.',
      'research.filter-all': 'All',

      /* ── Moments ── */
      'moments.hero-light': 'Beyond',
      'moments.hero-bold':  'the Lab',
      'moments.hero-desc':  'Snapshots from conferences, research visits, and the cities in between. For more snapshots, check my <a href="https://www.instagram.com/johanobandoc" rel="external nofollow noopener" target="_blank">Instagram</a> :)',

      /* ── CV ── */
      'cv.hero-light':    'Curriculum',
      'cv.hero-bold':     'Vitae',
      'cv.hero-desc':     'PhD student at Mila and Université de Montréal, building efficient deep reinforcement learning algorithms.',
      'cv.download-btn':  '<i class="fas fa-download"></i> Download PDF',
      'cv.download-note': 'Full CV &mdash; last updated June 2026',
      'cv.mobile-hint':   'Tap the button above to open the full CV in Google Drive.',

      /* ── Background ── */
      'bg.hero-light': 'The Path',
      'bg.hero-bold': 'So Far',
      'bg.hero-desc': 'Education and experience at a glance. For the full details, see my <a href="../cv/index.html">CV</a>.',
      'bg.education': 'Education',
      'bg.experience': 'Experience',
      'bg.phd.title': 'PhD in Machine Learning',
      'bg.phd.date': 'Sep 2023 – Present',
      'bg.phd.detail': 'Advised by <a href="https://scholar.google.com/citations?user=km6CP8cAAAAJ&amp;hl=en" rel="external nofollow noopener" target="_blank">Aaron Courville</a> and <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>.',
      'bg.msc.title': 'M.Sc. in Machine Learning',
      'bg.msc.date': 'Sep 2021 – Sep 2023',
      'bg.msc.detail': 'Advised by <a href="https://scholar.google.com/citations?hl=en&amp;user=uyYPun0AAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Marc G. Bellemare</a> and <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>. GPA 4.3/4.3, <a class="bg-honor" href="https://esp.umontreal.ca/les-esp/liste-dhonneur-du-recteur/#c710155:~:text=Johan%20Samir%20Obando%20Ceron%20%2D%20Ma%C3%AEtrise%20en%20informatique" rel="external nofollow noopener" target="_blank">Rector’s Honor List</a>.',
      'bg.msceng.title': 'M.Sc. in Engineering Science',
      'bg.msceng.date': 'Jul 2018 – Jun 2021',
      'bg.msceng.detail': 'Thesis: a probabilistic perception system for camera–LiDAR sensor fusion.',
      'bg.bsc.title': 'B.Sc. in Mechatronics Engineering',
      'bg.bsc.date': 'Jan 2012 – Jun 2017',
      'bg.bsc.detail': 'Including an exchange semester at Universidade Federal de Pelotas, Brazil (Aug – Dec 2015).',
      'bg.gdm2.title': 'Student Researcher',
      'bg.gdm2.date': 'Jul 2026 – Present',
      'bg.gdm1.title': 'Student Researcher',
      'bg.gdm1.date': 'Jul 2023 – Aug 2024',
      'bg.brain.title': 'Student Researcher',
      'bg.brain.date': 'Feb 2022 – Jul 2023',
      'bg.ta-udem.title': 'Teaching Assistant, IFT 6135 Representation Learning',
      'bg.ta-udem.date': 'Winter 2023, 2024, 2025',
    },

    es: {
      /* ── Nav ── */
      'nav.about':    'sobre mí',
      'nav.research': 'investigación',
      'nav.moments':  'momentos',
      'nav.background': 'trayectoria',
      'nav.cv':       'cv',

      /* ── About – main bio ── */
      'about.bio1': 'Soy candidato doctoral de tercer año en <a href="https://mila.quebec/en/" rel="external nofollow noopener" target="_blank">Mila</a> y la <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a>, bajo la asesoría de <a href="https://scholar.google.com/citations?user=km6CP8cAAAAJ&amp;hl=en" rel="external nofollow noopener" target="_blank">Aaron Courville</a> y <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>. Mi investigación explora la intersección entre la escala y la eficiencia de muestras en el aprendizaje por refuerzo (RL), con el objetivo de hacer los sistemas de RL más prácticos para aplicaciones del mundo real. Me interesa especialmente desarrollar métodos escalables de post-entrenamiento por RL (RL post-training) que permitan a los modelos aprender de forma continua, razonar y actuar en horizontes extendidos. <strong>Actualmente, soy Investigador Estudiantil en Google DeepMind en Londres, donde trabajo en RL profundo (deep RL) y en búsqueda evolutiva guiada por LLMs para el descubrimiento científico en energía de fusión nuclear.</strong>',

      'about.bio2': 'Trabajé tres años como Investigador Estudiantil en <a href="https://research.google.com/teams/brain/" rel="external nofollow noopener" target="_blank">Google Brain</a> y <a href="https://deepmind.google/" rel="external nofollow noopener" target="_blank">DeepMind</a> trabajando en RL profundo. Tengo una M.Sc. en Aprendizaje Automático de <a href="https://mila.quebec/en/" rel="external nofollow noopener" target="_blank">Mila</a> &amp; <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a> (co-supervisado por <a href="https://scholar.google.com/citations?hl=en&amp;user=uyYPun0AAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Marc Bellemare</a>), y una M.Sc. en Ciencias de la Ingeniería y una B.Sc. en Ingeniería Mecatrónica de la <a href="https://www.uao.edu.co/" rel="external nofollow noopener" target="_blank">Universidad Autónoma de Occidente</a>.',

      'about.bio3': 'Fuera de la investigación, disfruto del fútbol, la natación, el dibujo y el baile. También me gusta construir y apoyar espacios que amplíen el acceso a la educación e investigación en IA a través de iniciativas y comunidades como <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a> y <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a>.',

      'about.more-label': '<i class="fas fa-user-circle"></i> Más sobre mí',

      'about.more1': 'Crecí en El Rodeo, un barrio popular de <a href="https://es.wikipedia.org/wiki/Cali" rel="external nofollow noopener" target="_blank">Cali</a>, <a href="https://es.wikipedia.org/wiki/Colombia" rel="external nofollow noopener" target="_blank">Colombia</a> 🇨🇴. Durante el bachillerato, estudié en el Industrial Antonio José Camacho, un colegio técnico público del centro de la ciudad, donde tuve mi primer contacto con la electrónica y la programación, y obtuve un título técnico certificado por el <a href="https://es.wikipedia.org/wiki/Servicio_Nacional_de_Aprendizaje" rel="external nofollow noopener" target="_blank">SENA</a>. Esas experiencias tempranas me introdujeron a la resolución de problemas, la tecnología y la idea de que la educación podía abrir puertas más allá de lo que había imaginado. Mis padres, quienes trabajaron duro para sacar adelante a la familia, me enseñaron que las metas se logran con disciplina, perseverancia y constancia. Su apoyo me animó a pensar más allá de mi entorno inmediato, soñar en grande y creer que las oportunidades se pueden crear, no solo encontrar.',

      'about.more2': 'Mi camino hacia la investigación comenzó durante mi pregrado, a través de grupos de investigación estudiantil y experiencias tempranas en laboratorios. Mediante proyectos en áreas como visión por computador, robótica y sistemas inteligentes, comprendí que investigar no se trata solo de encontrar respuestas, sino de aprender a formular preguntas significativas y construir soluciones con impacto real. Con el tiempo, esas experiencias me abrieron puertas que nunca imaginé y me llevaron a continuar mi trayectoria académica a nivel internacional: primero con un intercambio en Brasil y luego con estudios de posgrado en el exterior. Estas vivencias moldearon mi forma de concebir la investigación hoy: como un proceso colaborativo que conecta personas, ideas y retos del mundo real.',

      'about.more3': 'Más allá de la investigación, me importa profundamente construir comunidades y ampliar el acceso a la educación e investigación en IA. A través de iniciativas como <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a> y <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a>, contribuyo a conectar estudiantes e investigadores de toda América Latina y a fomentar una participación más amplia en comunidades de investigación internacionales. Cuando regreso a Colombia, disfruto compartir experiencias con estudiantes y mantenerme conectado con mis raíces. Creo firmemente que el talento está ampliamente distribuido, aunque las oportunidades no lo estén.',

      'about.job-market': '<strong>Disponible para nuevas oportunidades</strong> — Estoy en búsqueda activa de roles de tiempo completo en investigación de ML e IA. <a href="mailto:jobando0730@gmail.com">Hablemos</a>.',

      'about.contact': 'No dudes en escribirme por correo (jobando0730 AT gmail DOT com) — siempre estoy dispuesto a conversar sobre investigación o colaboración.',

      /* ── Research ── */
      'research.hero-light': 'Ideas',
      'research.hero-bold':  'en movimiento',
      'research.hero-desc':  'Un recorrido visual por mi investigación — figuras, resultados y momentos del trabajo. Gran parte de esto surgió de colaboraciones con compañeros brillantes, y he aprendido tanto de esas personas como de la investigación misma. Haz clic en cualquier imagen para ampliarla. Para una lista completa de publicaciones, visita mi <a href="https://scholar.google.com/citations?user=KViAb3EAAAAJ" rel="external nofollow noopener" target="_blank">Google Scholar</a>.',
      'research.filter-all': 'Todos',

      /* ── Moments ── */
      'moments.hero-light': 'Fuera',
      'moments.hero-bold':  'del laboratorio',
      'moments.hero-desc':  'Fotos de conferencias, visitas de investigación y las ciudades del camino. Para ver más, visita mi <a href="https://www.instagram.com/johanobandoc" rel="external nofollow noopener" target="_blank">Instagram</a> :)',

      /* ── CV ── */
      'cv.hero-light':    'Currículum',
      'cv.hero-bold':     'Vítae',
      'cv.hero-desc':     'Estudiante de doctorado en Mila y la Université de Montréal, desarrollando algoritmos eficientes de aprendizaje por refuerzo profundo.',
      'cv.download-btn':  '<i class="fas fa-download"></i> Descargar PDF',
      'cv.download-note': 'CV completo &mdash; última actualización: junio 2026',
      'cv.mobile-hint':   'Toca el botón de arriba para abrir el CV completo en Google Drive.',

      /* ── Background ── */
      'bg.hero-light': 'El Camino',
      'bg.hero-bold': 'Recorrido',
      'bg.hero-desc': 'Formación y experiencia de un vistazo. Para más detalles, consulta mi <a href="../cv/index.html">CV</a>.',
      'bg.education': 'Formación',
      'bg.experience': 'Experiencia',
      'bg.phd.title': 'Doctorado en Aprendizaje Automático',
      'bg.phd.date': 'sep. 2023 – actualidad',
      'bg.phd.detail': 'Bajo la asesoría de <a href="https://scholar.google.com/citations?user=km6CP8cAAAAJ&amp;hl=en" rel="external nofollow noopener" target="_blank">Aaron Courville</a> y <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>.',
      'bg.msc.title': 'M.Sc. en Aprendizaje Automático',
      'bg.msc.date': 'sep. 2021 – sep. 2023',
      'bg.msc.detail': 'Bajo la asesoría de <a href="https://scholar.google.com/citations?hl=en&amp;user=uyYPun0AAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Marc G. Bellemare</a> y <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>. Promedio 4.3/4.3, <a class="bg-honor" href="https://esp.umontreal.ca/les-esp/liste-dhonneur-du-recteur/#c710155:~:text=Johan%20Samir%20Obando%20Ceron%20%2D%20Ma%C3%AEtrise%20en%20informatique" rel="external nofollow noopener" target="_blank">Cuadro de Honor del Rector</a>.',
      'bg.msceng.title': 'M.Sc. en Ciencias de la Ingeniería',
      'bg.msceng.date': 'jul. 2018 – jun. 2021',
      'bg.msceng.detail': 'Tesis: un sistema de percepción probabilística para la fusión de sensores cámara–LiDAR.',
      'bg.bsc.title': 'B.Sc. en Ingeniería Mecatrónica',
      'bg.bsc.date': 'ene. 2012 – jun. 2017',
      'bg.bsc.detail': 'Incluye un semestre de intercambio en la Universidade Federal de Pelotas, Brasil (ago. – dic. 2015).',
      'bg.gdm2.title': 'Investigador Estudiantil',
      'bg.gdm2.date': 'jul. 2026 – actualidad',
      'bg.gdm1.title': 'Investigador Estudiantil',
      'bg.gdm1.date': 'jul. 2023 – ago. 2024',
      'bg.brain.title': 'Investigador Estudiantil',
      'bg.brain.date': 'feb. 2022 – jul. 2023',
      'bg.ta-udem.title': 'Asistente de Docencia, IFT 6135 Aprendizaje de Representaciones',
      'bg.ta-udem.date': 'invierno 2023, 2024, 2025',
    }
  };

  function setLang(lang) {
    var t = T[lang] || T.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.innerHTML = lang === 'en'
      ? '<i class="fas fa-language"></i> español'
      : '<i class="fas fa-language"></i> english';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var cur = localStorage.getItem('lang') || 'en';
        setLang(cur === 'en' ? 'es' : 'en');
      });
    }
    var saved = localStorage.getItem('lang') || 'en';
    setLang(saved);
  });

  window.setLang = setLang;
})();

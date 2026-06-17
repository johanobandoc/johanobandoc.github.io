(function () {
  var T = {
    en: {
      /* ── Nav ── */
      'nav.about':    'about',
      'nav.research': 'research',
      'nav.moments':  'moments',
      'nav.cv':       'cv',

      /* ── About – main bio ── */
      'about.bio1': 'I am a third-year PhD candidate at <a href="https://mila.quebec/en/" rel="external nofollow noopener" target="_blank">Mila</a> and <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a>, advised by <a href="https://scholar.google.com/citations?user=km6CP8cAAAAJ&amp;hl=en" rel="external nofollow noopener" target="_blank">Aaron Courville</a> and <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>. My research focuses on improving sample efficiency in reinforcement learning (RL), with the broader goal of making RL systems more practical and applicable to real-world problems. More generally, I am interested in machine learning and neural networks, particularly topics related to reasoning, world models, continual learning, and LLMs.',

      'about.bio2': 'Previously, I spent three years as a Student Researcher at <a href="https://research.google.com/teams/brain/" rel="external nofollow noopener" target="_blank">Google Brain</a> and <a href="https://deepmind.google/" rel="external nofollow noopener" target="_blank">DeepMind</a>, conducting research in deep reinforcement learning. I hold a Master\'s degree in Machine Learning from <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a>, where I was co-supervised by <a href="https://scholar.google.com/citations?hl=en&amp;user=uyYPun0AAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Marc Bellemare</a>, and a Master\'s degree in Engineering Science and Robotics and a Bachelor\'s degree in Mechatronics Engineering from <a href="https://www.uao.edu.co/" rel="external nofollow noopener" target="_blank">Universidad Autónoma de Occidente</a>.',

      'about.bio3': 'Outside of research, I enjoy football, swimming, drawing, and dancing. I also enjoy building and supporting spaces that broaden access to AI education and research through initiatives and communities such as <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a>, and <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a>.',

      'about.more-label': '<i class="fas fa-user-circle"></i> More about me',

      'about.more1': 'I grew up in El Rodeo, a working-class neighborhood in <a href="https://es.wikipedia.org/wiki/Cali" rel="external nofollow noopener" target="_blank">Cali</a>, <a href="https://es.wikipedia.org/wiki/Colombia" rel="external nofollow noopener" target="_blank">Colombia</a> 🇨🇴. During high school, I attended Industrial Antonio José Camacho, a public technical school in the city center, where I was first exposed to electronics and programming and earned a <a href="https://es.wikipedia.org/wiki/Servicio_Nacional_de_Aprendizaje" rel="external nofollow noopener" target="_blank">SENA</a>-certified technical degree. Those early experiences introduced me to problem solving, technology, and the idea that education could open opportunities beyond what I had imagined. My parents, who worked hard to support our family, taught me that goals become achievable through discipline, perseverance, and consistency. Their support encouraged me to think beyond my immediate surroundings, dream big, and believe that opportunities can be created, not only found.',

      'about.more2': 'My journey into research began during my undergraduate years through student research groups and early research experiences. Through projects in areas such as computer vision, robotics, and intelligent systems, I realized that research is not only about finding answers — it is about learning to ask meaningful questions and building solutions with real impact. Over time, those experiences opened opportunities I had never imagined and eventually led me to continue my academic journey internationally, first through an exchange experience in Brazil and later through graduate studies abroad. These experiences shaped how I think about research today: as a collaborative process that connects people, ideas, and real-world challenges.',

      'about.more3': 'Beyond research, I care deeply about building communities and expanding access to AI education and research. Through initiatives such as <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a>, and <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a>, I contribute to connecting students and researchers across Latin America and supporting broader participation in international research communities. Whenever I return to Colombia, I enjoy sharing experiences with students and staying connected to where I come from. I strongly believe that talent is widely distributed, even when opportunities are not.',

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
    },

    es: {
      /* ── Nav ── */
      'nav.about':    'sobre mí',
      'nav.research': 'investigación',
      'nav.moments':  'momentos',
      'nav.cv':       'cv',

      /* ── About – main bio ── */
      'about.bio1': 'Soy candidato doctoral de tercer año en <a href="https://mila.quebec/en/" rel="external nofollow noopener" target="_blank">Mila</a> y la <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a>, bajo la asesoría de <a href="https://scholar.google.com/citations?user=km6CP8cAAAAJ&amp;hl=en" rel="external nofollow noopener" target="_blank">Aaron Courville</a> y <a href="https://scholar.google.ca/citations?hl=en&amp;user=jn5r6TsAAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Pablo Samuel Castro</a>. Mi investigación se centra en mejorar la eficiencia de muestras en el aprendizaje por refuerzo (RL), con el objetivo más amplio de hacer los sistemas de RL más prácticos y aplicables a problemas del mundo real. En general, me interesan el aprendizaje automático y las redes neuronales, en especial temas relacionados con razonamiento, modelos del mundo, aprendizaje continuo y LLMs.',

      'about.bio2': 'Anteriormente, trabajé durante tres años como Investigador Estudiantil en <a href="https://research.google.com/teams/brain/" rel="external nofollow noopener" target="_blank">Google Brain</a> y <a href="https://deepmind.google/" rel="external nofollow noopener" target="_blank">DeepMind</a>, realizando investigación en aprendizaje por refuerzo profundo. Tengo una Maestría en Aprendizaje Automático de la <a href="https://diro.umontreal.ca/english/home/" rel="external nofollow noopener" target="_blank">Université de Montréal</a>, donde fui co-supervisado por <a href="https://scholar.google.com/citations?hl=en&amp;user=uyYPun0AAAAJ&amp;view_op=list_works&amp;sortby=pubdate" rel="external nofollow noopener" target="_blank">Marc Bellemare</a>, y una Maestría en Ciencias de la Ingeniería y Robótica y un título de Ingeniería Mecatrónica de la <a href="https://www.uao.edu.co/" rel="external nofollow noopener" target="_blank">Universidad Autónoma de Occidente</a>.',

      'about.bio3': 'Fuera de la investigación, disfruto del fútbol, la natación, el dibujo y el baile. También me gusta construir y apoyar espacios que amplíen el acceso a la educación e investigación en IA a través de iniciativas y comunidades como <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a> y <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a>.',

      'about.more-label': '<i class="fas fa-user-circle"></i> Más sobre mí',

      'about.more1': 'Crecí en El Rodeo, un barrio popular de <a href="https://es.wikipedia.org/wiki/Cali" rel="external nofollow noopener" target="_blank">Cali</a>, <a href="https://es.wikipedia.org/wiki/Colombia" rel="external nofollow noopener" target="_blank">Colombia</a> 🇨🇴. Durante el bachillerato, estudié en el Industrial Antonio José Camacho, un colegio técnico público del centro de la ciudad, donde tuve mi primer contacto con la electrónica y la programación, y obtuve un título técnico certificado por el <a href="https://es.wikipedia.org/wiki/Servicio_Nacional_de_Aprendizaje" rel="external nofollow noopener" target="_blank">SENA</a>. Esas experiencias tempranas me introdujeron a la resolución de problemas, la tecnología y la idea de que la educación podía abrir puertas más allá de lo que había imaginado. Mis padres, quienes trabajaron duro para sacar adelante a la familia, me enseñaron que las metas se logran con disciplina, perseverancia y constancia. Su apoyo me animó a pensar más allá de mi entorno inmediato, soñar en grande y creer que las oportunidades se pueden crear, no solo encontrar.',

      'about.more2': 'Mi camino hacia la investigación comenzó durante mi pregrado, a través de grupos de investigación estudiantil y experiencias tempranas en laboratorios. Mediante proyectos en áreas como visión por computador, robótica y sistemas inteligentes, comprendí que investigar no se trata solo de encontrar respuestas, sino de aprender a formular preguntas significativas y construir soluciones con impacto real. Con el tiempo, esas experiencias me abrieron puertas que nunca imaginé y me llevaron a continuar mi trayectoria académica a nivel internacional: primero con un intercambio en Brasil y luego con estudios de posgrado en el exterior. Estas vivencias moldearon mi forma de concebir la investigación hoy: como un proceso colaborativo que conecta personas, ideas y retos del mundo real.',

      'about.more3': 'Más allá de la investigación, me importa profundamente construir comunidades y ampliar el acceso a la educación e investigación en IA. A través de iniciativas como <a href="https://khipu.ai/" rel="external nofollow noopener" target="_blank">Khipu</a>, <a href="https://lasala.ai/" rel="external nofollow noopener" target="_blank">SALA</a> y <a href="https://www.latinxinai.org/" rel="external nofollow noopener" target="_blank">LatinX in AI</a>, contribuyo a conectar estudiantes e investigadores de toda América Latina y a fomentar una participación más amplia en comunidades de investigación internacionales. Cuando regreso a Colombia, disfruto compartir experiencias con estudiantes y mantenerme conectado con mis raíces. Creo firmemente que el talento está ampliamente distribuido, aunque las oportunidades no lo estén.',

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

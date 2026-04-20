
/* ════════════════════════════════════════
   LINGUABLOOM — APP LOGIC
   Complete Language Learning Application
════════════════════════════════════════ */

// ─────────────────────────────────────────
// LANGUAGE DATA
// ─────────────────────────────────────────
const LANG_DATA = {
  japanese: {
    label: 'Japanese', flag: '🇯🇵', code: 'JA', voiceLang: 'ja-JP',
    words: [
      { foreign: '桜', reading: 'Sakura', english: 'Cherry Blossom', example: '桜がきれいです。 (The cherry blossoms are beautiful.)', tip: '🌸 Sakura is the symbol of spring in Japan.' },
      { foreign: '猫', reading: 'Neko', english: 'Cat', example: '猫がいます。 (There is a cat.)', tip: '🐱 Japanese loves cats — neko cafes are popular!' },
      { foreign: '空', reading: 'Sora', english: 'Sky', example: '空が青いです。 (The sky is blue.)', tip: '☁️ Also used in names.' },
      { foreign: '夢', reading: 'Yume', english: 'Dream', example: '夢を見ました。 (I had a dream.)', tip: '✨ Yume can mean both sleep-dream and life-dream.' },
      { foreign: '水', reading: 'Mizu', english: 'Water', example: '水をください。 (Water, please.)', tip: '💧 One of the most useful words!' },
      { foreign: '山', reading: 'Yama', english: 'Mountain', example: '富士山は高いです。 (Mt. Fuji is tall.)', tip: '⛰️ Japan has many iconic mountains.' },
      { foreign: '花', reading: 'Hana', english: 'Flower', example: '花が好きです。 (I like flowers.)', tip: '🌺 Hana is also a popular name.' },
      { foreign: '星', reading: 'Hoshi', english: 'Star', example: '星がきれいです。 (The stars are beautiful.)', tip: '⭐ Hoshi is used in many poetic contexts.' },
    ],
    phrases: [
      { foreign: 'おはようございます', reading: 'Ohayou Gozaimasu', english: 'Good Morning', example: 'Used until around 10–11 AM.', tip: '🌅 The polite form. Ohayou alone is casual.' },
      { foreign: 'ありがとうございます', reading: 'Arigatou Gozaimasu', english: 'Thank you very much', example: 'Most polite form of thanks.', tip: '🙏 Arigatou alone is casual.' },
      { foreign: 'すみません', reading: 'Sumimasen', english: 'Excuse me / Sorry', example: 'すみません、どこですか？ (Excuse me, where is it?)', tip: '👋 Very versatile — used to get attention too.' },
      { foreign: 'どうぞよろしく', reading: 'Douzo Yoroshiku', english: 'Nice to meet you / Please treat me well', example: 'Used when introducing yourself.', tip: '🤝 Said at end of self-introductions.' },
      { foreign: 'お元気ですか？', reading: 'Ogenki Desu Ka?', english: 'How are you?', example: 'はい、元気です。 (Yes, I am fine.)', tip: '😊 Formal check-in phrase.' },
      { foreign: 'いただきます', reading: 'Itadakimasu', english: 'Let\'s eat / I humbly receive', example: 'Said before every meal in Japan.', tip: '🍱 A beautiful expression of gratitude.' },
    ],
    sentences: [
      {
        foreign: '私は日本語を勉強しています。', reading: 'Watashi wa Nihongo wo benkyou shite imasu.',
        english: 'I am studying Japanese.',
        breakdown: [
          { word: '私', reading: 'Watashi', meaning: 'I / Me' },
          { word: 'は', reading: 'wa', meaning: 'topic marker' },
          { word: '日本語', reading: 'Nihongo', meaning: 'Japanese language' },
          { word: 'を', reading: 'wo', meaning: 'object marker' },
          { word: '勉強', reading: 'benkyou', meaning: 'study' },
          { word: 'しています', reading: 'shite imasu', meaning: 'is doing (present continuous)' },
        ]
      },
      {
        foreign: '今日はとても良い天気です。', reading: 'Kyou wa totemo ii tenki desu.',
        english: 'Today the weather is very nice.',
        breakdown: [
          { word: '今日', reading: 'Kyou', meaning: 'Today' },
          { word: 'とても', reading: 'totemo', meaning: 'very' },
          { word: '良い', reading: 'ii', meaning: 'good' },
          { word: '天気', reading: 'tenki', meaning: 'weather' },
        ]
      },
      {
        foreign: '東京に行きたいです。', reading: 'Tokyo ni ikitai desu.',
        english: 'I want to go to Tokyo.',
        breakdown: [
          { word: '東京', reading: 'Tokyo', meaning: 'Tokyo (city)' },
          { word: 'に', reading: 'ni', meaning: 'destination marker' },
          { word: '行きたい', reading: 'ikitai', meaning: 'want to go' },
        ]
      },
      {
        foreign: '日本の食べ物が大好きです。', reading: 'Nihon no tabemono ga daisuki desu.',
        english: 'I love Japanese food.',
        breakdown: [
          { word: '日本', reading: 'Nihon', meaning: 'Japan' },
          { word: 'の', reading: 'no', meaning: 'possessive particle' },
          { word: '食べ物', reading: 'tabemono', meaning: 'food' },
          { word: '大好き', reading: 'daisuki', meaning: 'love / really like' },
        ]
      },
    ]
  },

  spanish: {
    label: 'Spanish', flag: '🇪🇸', code: 'ES', voiceLang: 'es-ES',
    words: [
      { foreign: 'Mariposa', reading: '', english: 'Butterfly', example: 'La mariposa es hermosa. (The butterfly is beautiful.)', tip: '🦋 One of the prettiest words in Spanish!' },
      { foreign: 'Serenidad', reading: '', english: 'Serenity / Calmness', example: 'Siento serenidad aquí. (I feel serenity here.)', tip: '☮️ A deep, peaceful word.' },
      { foreign: 'Lluvia', reading: '', english: 'Rain', example: 'Me gusta la lluvia. (I like the rain.)', tip: '🌧️ The double-L (ll) is pronounced like Y.' },
      { foreign: 'Corazón', reading: '', english: 'Heart', example: 'Te doy mi corazón. (I give you my heart.)', tip: '❤️ Don\'t forget the accent on ó!' },
      { foreign: 'Esperanza', reading: '', english: 'Hope', example: 'Hay esperanza. (There is hope.)', tip: '🌟 Also a popular name.' },
      { foreign: 'Tranquilo', reading: '', english: 'Calm / Relax', example: '¡Tranquilo! (Calm down!)', tip: '😌 Very common in everyday speech.' },
    ],
    phrases: [
      { foreign: '¿Cómo estás?', reading: '', english: 'How are you?', example: 'Estoy bien, gracias. (I\'m well, thank you.)', tip: '👋 Informal. Use ¿Cómo está usted? formally.' },
      { foreign: 'Mucho gusto', reading: '', english: 'Nice to meet you', example: 'Used when meeting someone new.', tip: '🤝 Short for "Mucho gusto en conocerte."' },
      { foreign: '¿Dónde está el baño?', reading: '', english: 'Where is the bathroom?', example: 'The most useful travel phrase!', tip: '🚻 Essential everywhere you go.' },
      { foreign: 'Que tengas un buen día', reading: '', english: 'Have a good day', example: 'Said when parting ways.', tip: '☀️ Very warm and friendly expression.' },
      { foreign: 'Lo siento mucho', reading: '', english: 'I\'m very sorry', example: 'Said when apologising deeply.', tip: '😔 "Lo siento" alone is lighter.' },
    ],
    sentences: [
      {
        foreign: 'Estoy aprendiendo español cada día.',
        reading: '', english: 'I am learning Spanish every day.',
        breakdown: [
          { word: 'Estoy', reading: '', meaning: 'I am (temporary state)' },
          { word: 'aprendiendo', reading: '', meaning: 'learning' },
          { word: 'español', reading: '', meaning: 'Spanish' },
          { word: 'cada día', reading: '', meaning: 'every day' },
        ]
      },
      {
        foreign: 'Me gusta mucho la música latina.',
        reading: '', english: 'I really like Latin music.',
        breakdown: [
          { word: 'Me gusta', reading: '', meaning: 'I like' },
          { word: 'mucho', reading: '', meaning: 'a lot / very much' },
          { word: 'la música', reading: '', meaning: 'the music' },
          { word: 'latina', reading: '', meaning: 'Latin' },
        ]
      },
    ]
  },

  french: {
    label: 'French', flag: '🇫🇷', code: 'FR', voiceLang: 'fr-FR',
    words: [
      { foreign: 'Papillon', reading: '', english: 'Butterfly', example: 'Le papillon est beau. (The butterfly is beautiful.)', tip: '🦋 Also means "bow tie"!' },
      { foreign: 'Lumière', reading: '', english: 'Light', example: 'La lumière est belle. (The light is beautiful.)', tip: '💡 City of Light — Paris!' },
      { foreign: 'Douceur', reading: '', english: 'Gentleness / Sweetness', example: 'Avec douceur. (With gentleness.)', tip: '🍬 One of the softest-sounding words.' },
      { foreign: 'Flâner', reading: '', english: 'To stroll / wander aimlessly', example: 'J\'aime flâner dans Paris. (I love wandering in Paris.)', tip: '🚶 A uniquely French concept.' },
      { foreign: 'Bonheur', reading: '', english: 'Happiness', example: 'Le bonheur est partout. (Happiness is everywhere.)', tip: '😊 Bon (good) + heur (hour/time).' },
      { foreign: 'Étoile', reading: '', english: 'Star', example: 'Les étoiles brillent. (The stars shine.)', tip: '⭐ Place de l\'Étoile — famous square!' },
    ],
    phrases: [
      { foreign: 'Bonjour, comment allez-vous?', reading: '', english: 'Hello, how are you? (formal)', example: 'Très bien, merci. (Very well, thank you.)', tip: '🎩 Use "tu vas bien?" for friends.' },
      { foreign: 'Enchantée', reading: '', english: 'Delighted to meet you', example: 'Enchantée de faire votre connaissance.', tip: '✨ Very French and elegant!' },
      { foreign: 'S\'il vous plaît', reading: '', english: 'Please (formal)', example: 'Un café, s\'il vous plaît. (A coffee, please.)', tip: '☕ Literally "if it pleases you."' },
      { foreign: 'Je ne comprends pas', reading: '', english: 'I don\'t understand', example: 'Essential phrase for beginners!', tip: '🤔 Pouvez-vous répéter? = Can you repeat?' },
    ],
    sentences: [
      {
        foreign: 'J\'apprends le français tous les jours.',
        reading: '', english: 'I learn French every day.',
        breakdown: [
          { word: 'J\'apprends', reading: '', meaning: 'I learn / I am learning' },
          { word: 'le français', reading: '', meaning: 'French (language)' },
          { word: 'tous les jours', reading: '', meaning: 'every day' },
        ]
      },
      {
        foreign: 'Paris est la ville de l\'amour.',
        reading: '', english: 'Paris is the city of love.',
        breakdown: [
          { word: 'Paris', reading: '', meaning: 'Paris' },
          { word: 'est', reading: '', meaning: 'is' },
          { word: 'la ville', reading: '', meaning: 'the city' },
          { word: 'de l\'amour', reading: '', meaning: 'of love' },
        ]
      },
    ]
  },

  korean: {
    label: 'Korean', flag: '🇰🇷', code: 'KO', voiceLang: 'ko-KR',
    words: [
      { foreign: '사랑', reading: 'Sarang', english: 'Love', example: '사랑해요. (I love you.)', tip: '💕 One of the most beautiful Korean words.' },
      { foreign: '하늘', reading: 'Haneul', english: 'Sky / Heaven', example: '하늘이 파래요. (The sky is blue.)', tip: '☁️ Also used as a name meaning sky.' },
      { foreign: '바다', reading: 'Bada', english: 'Sea / Ocean', example: '바다가 좋아요. (I like the sea.)', tip: '🌊 Korea has stunning coastlines.' },
      { foreign: '꿈', reading: 'Kkum', english: 'Dream', example: '꿈을 꿔요. (I dream.)', tip: '✨ Used for both sleep-dreams and aspirations.' },
      { foreign: '행복', reading: 'Haengbok', english: 'Happiness', example: '행복해요! (I\'m happy!)', tip: '😊 Very commonly used expression.' },
      { foreign: '봄', reading: 'Bom', english: 'Spring', example: '봄이 왔어요. (Spring has come.)', tip: '🌸 Korean spring is famous for cherry blossoms.' },
    ],
    phrases: [
      { foreign: '안녕하세요', reading: 'Annyeonghaseyo', english: 'Hello (formal)', example: 'Universal greeting for all situations.', tip: '👋 Annyeong alone is casual.' },
      { foreign: '감사합니다', reading: 'Gamsahamnida', english: 'Thank you (formal)', example: 'Used in formal situations.', tip: '🙏 고마워요 (Gomawoyo) is more casual.' },
      { foreign: '괜찮아요?', reading: 'Gwaenchanayo?', english: 'Are you okay?', example: '네, 괜찮아요. (Yes, I\'m okay.)', tip: '😊 Also used to mean "It\'s alright."' },
      { foreign: '잘 부탁드립니다', reading: 'Jal butak deurimnida', english: 'Please take care of me', example: 'Used when starting something new together.', tip: '🤝 Deep cultural phrase — very important!' },
    ],
    sentences: [
      {
        foreign: '저는 매일 한국어를 공부해요.',
        reading: 'Jeoneun maeil hangukeoreul gongbuhaeyo.',
        english: 'I study Korean every day.',
        breakdown: [
          { word: '저는', reading: 'Jeoneun', meaning: 'I (topic)' },
          { word: '매일', reading: 'maeil', meaning: 'every day' },
          { word: '한국어를', reading: 'hangukeoreul', meaning: 'Korean (object)' },
          { word: '공부해요', reading: 'gongbuhaeyo', meaning: 'study (polite)' },
        ]
      },
    ]
  },

  german: {
    label: 'German', flag: '🇩🇪', code: 'DE', voiceLang: 'de-DE',
    words: [
      { foreign: 'Fernweh', reading: '', english: 'Longing for distant places', example: 'Ich habe Fernweh. (I have wanderlust.)', tip: '✈️ Fern (far) + Weh (ache). Unique concept!' },
      { foreign: 'Weltschmerz', reading: '', english: 'World-weariness / World pain', example: 'Ein Gefühl von Weltschmerz. (A feeling of world-weariness.)', tip: '🌍 Deep emotional word adopted worldwide.' },
      { foreign: 'Gemütlichkeit', reading: '', english: 'Cosiness / Warmth', example: 'Die Gemütlichkeit des Hauses. (The cosiness of the house.)', tip: '🏡 A feeling of comfort and belonging.' },
      { foreign: 'Schadenfreude', reading: '', english: 'Joy from others\' misfortune', example: 'Known worldwide as a loan word!', tip: '😈 Schaden (damage) + Freude (joy).' },
      { foreign: 'Frühling', reading: '', english: 'Spring (season)', example: 'Der Frühling kommt. (Spring is coming.)', tip: '🌸 Früh = early. Spring = early (season).' },
      { foreign: 'Dankbarkeit', reading: '', english: 'Gratitude', example: 'Ich fühle Dankbarkeit. (I feel gratitude.)', tip: '🙏 Dank (thanks) + barkeit (ability).' },
    ],
    phrases: [
      { foreign: 'Guten Morgen!', reading: '', english: 'Good Morning!', example: 'Used until noon.', tip: '🌅 Guten Tag = Good Day; Guten Abend = Good Evening.' },
      { foreign: 'Wie geht es Ihnen?', reading: '', english: 'How are you? (formal)', example: 'Danke, gut. (Thank you, well.)', tip: '😊 "Wie geht\'s?" is casual.' },
      { foreign: 'Ich verstehe nicht', reading: '', english: 'I don\'t understand', example: 'Könnten Sie das wiederholen? (Could you repeat that?)', tip: '🤔 Very useful for beginners!' },
      { foreign: 'Entschuldigung', reading: '', english: 'Excuse me / Sorry', example: 'Entschuldigung, wo ist der Bahnhof? (Excuse me, where is the station?)', tip: '🚉 A long word but used constantly!' },
    ],
    sentences: [
      {
        foreign: 'Ich lerne jeden Tag Deutsch.',
        reading: '', english: 'I learn German every day.',
        breakdown: [
          { word: 'Ich', reading: '', meaning: 'I' },
          { word: 'lerne', reading: '', meaning: 'learn' },
          { word: 'jeden Tag', reading: '', meaning: 'every day' },
          { word: 'Deutsch', reading: '', meaning: 'German' },
        ]
      },
    ]
  },

  mandarin: {
    label: 'Mandarin', flag: '🇨🇳', code: 'ZH', voiceLang: 'zh-CN',
    words: [
      { foreign: '美丽', reading: 'Měilì', english: 'Beautiful', example: '这里很美丽。 (It\'s beautiful here.)', tip: '💫 美 (měi) = beauty; 丽 (lì) = gorgeous.' },
      { foreign: '快乐', reading: 'Kuàilè', english: 'Happy / Happiness', example: '我很快乐。 (I am very happy.)', tip: '😊 Used in 生日快乐 (Happy Birthday)!' },
      { foreign: '智慧', reading: 'Zhìhuì', english: 'Wisdom', example: '智慧是宝贵的。 (Wisdom is precious.)', tip: '📚 Very profound word in Chinese culture.' },
      { foreign: '缘分', reading: 'Yuánfèn', english: 'Fate / Destiny', example: '我们有缘分。 (We have fate/destiny between us.)', tip: '🌟 A deeply philosophical concept.' },
      { foreign: '希望', reading: 'Xīwàng', english: 'Hope / Wish', example: '我希望你幸福。 (I hope you are happy.)', tip: '🌈 Both noun and verb.' },
      { foreign: '茶', reading: 'Chá', english: 'Tea', example: '我喝茶。 (I drink tea.)', tip: '🍵 The English word "tea" comes from Chinese!' },
    ],
    phrases: [
      { foreign: '你好！', reading: 'Nǐ hǎo!', english: 'Hello!', example: 'Universal greeting in Mandarin.', tip: '👋 你好吗？(Nǐ hǎo ma?) = How are you?' },
      { foreign: '谢谢你', reading: 'Xièxiè nǐ', english: 'Thank you', example: '谢谢你的帮助。 (Thank you for your help.)', tip: '🙏 Xièxie alone is more casual.' },
      { foreign: '对不起', reading: 'Duìbuqǐ', english: 'I\'m sorry', example: '对不起，我迟到了。 (Sorry, I\'m late.)', tip: '😔 Literally: "I cannot face you."' },
      { foreign: '你吃了吗？', reading: 'Nǐ chī le ma?', english: 'Have you eaten?', example: 'Chinese way of saying "How are you?"', tip: '🍜 A warm greeting showing care.' },
    ],
    sentences: [
      {
        foreign: '我每天都在学习中文。',
        reading: 'Wǒ měitiān dōu zài xuéxí Zhōngwén.',
        english: 'I study Chinese every day.',
        breakdown: [
          { word: '我', reading: 'Wǒ', meaning: 'I / Me' },
          { word: '每天', reading: 'měitiān', meaning: 'every day' },
          { word: '都', reading: 'dōu', meaning: 'all / always' },
          { word: '在', reading: 'zài', meaning: 'currently doing' },
          { word: '学习', reading: 'xuéxí', meaning: 'study / learn' },
          { word: '中文', reading: 'Zhōngwén', meaning: 'Chinese language' },
        ]
      },
    ]
  }
};

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let state = {
  language: 'japanese',
  learnCat: 'words',
  learnIndex: 0,
  flashCat: 'words',
  flashIndex: 0,
  flashFlipped: false,
  flashRatings: { easy: 0, ok: 0, hard: 0 },
  quizMode: null,
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswers: [],
  matchSelected: null,
  matchPairs: [],
  matchMatched: [],
  xp: 0,
  streak: 0,
  lastActive: null,
  wordsLearned: [],
  phrasesLearned: [],
  sentencesLearned: [],
  quizHistory: [],
  activity: [],
  dailyGoal: { words: 0, phrases: 0, quizDone: false },
  streakDays: [],
};

// ─────────────────────────────────────────
// LOCALSTORAGE
// ─────────────────────────────────────────
function saveState() {
  const toSave = {
    language: state.language,
    xp: state.xp,
    streak: state.streak,
    lastActive: state.lastActive,
    wordsLearned: state.wordsLearned,
    phrasesLearned: state.phrasesLearned,
    sentencesLearned: state.sentencesLearned,
    quizHistory: state.quizHistory,
    activity: state.activity.slice(0, 30),
    dailyGoal: state.dailyGoal,
    streakDays: state.streakDays,
    flashRatings: state.flashRatings,
  };
  localStorage.setItem('linguabloom', JSON.stringify(toSave));
}

function loadState() {
  const saved = localStorage.getItem('linguabloom');
  if (!saved) return;
  const data = JSON.parse(saved);
  Object.assign(state, data);
  // Set language select
  document.getElementById('langSelect').value = state.language;
  changeLanguage(state.language, true);
}

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
function navigateTo(page, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // Page-specific init
  if (page === 'dashboard') refreshDashboard();
  if (page === 'learn') renderLearnCard();
  if (page === 'flashcards') renderFlashcard();
  if (page === 'quiz') renderQuizHistory();
  if (page === 'progress') renderProgress();
  // Close mobile sidebar
  closeSidebar();
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  sb.classList.toggle('open');
  let ov = document.querySelector('.sidebar-overlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.className = 'sidebar-overlay';
    ov.onclick = closeSidebar;
    document.body.appendChild(ov);
  }
  ov.classList.toggle('show', sb.classList.contains('open'));
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  const ov = document.querySelector('.sidebar-overlay');
  if (ov) ov.classList.remove('show');
}

// ─────────────────────────────────────────
// LANGUAGE CHANGE
// ─────────────────────────────────────────
function changeLanguage(lang, silent = false) {
  state.language = lang;
  const data = LANG_DATA[lang];
  document.getElementById('learnLangLabel').textContent = data.label;
  state.learnIndex = 0;
  state.flashIndex = 0;
  if (!silent) {
    saveState();
    showToast(`🌏 Switched to ${data.flag} ${data.label}!`);
    renderLearnCard();
    renderFlashcard();
  }
}

// ─────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────
function refreshDashboard() {
  const w = state.wordsLearned.length;
  const p = state.phrasesLearned.length;
  const s = state.sentencesLearned.length;
  const q = state.quizHistory.length;

  animateNum('statWords', w);
  animateNum('statPhrases', p);
  animateNum('statSentences', s);

  const avgScore = q > 0
    ? Math.round(state.quizHistory.reduce((a, b) => a + b.pct, 0) / q)
    : 0;
  document.getElementById('statQuiz').textContent = avgScore + '%';
  document.getElementById('catWordCount').textContent = w + ' learned';
  document.getElementById('catPhraseCount').textContent = p + ' learned';
  document.getElementById('catSentenceCount').textContent = s + ' learned';
  document.getElementById('catQuizCount').textContent = q + ' taken';

  // XP
  document.getElementById('xpCount').textContent = state.xp;
  document.getElementById('topbarXP').textContent = '⭐ ' + state.xp + ' XP';
  document.getElementById('sideStreakNum').textContent = state.streak;

  // Daily progress
  const dg = state.dailyGoal;
  const wDone = dg.words >= 5;
  const pDone = dg.phrases >= 3;
  const qzDone = dg.quizDone;
  const pct = Math.round(([wDone, pDone, qzDone].filter(Boolean).length / 3) * 100);

  animateBar('dailyBar', pct);
  animateBar('dailyGlow', pct);
  document.getElementById('dailyPct').textContent = pct + '%';

  ['stepWords', 'stepPhrases', 'stepQuiz'].forEach((id, i) => {
    const el = document.getElementById(id);
    const done = [wDone, pDone, qzDone][i];
    el.classList.toggle('done', done);
    el.querySelector('.step-dot').style.background = done ? 'var(--accent)' : '';
  });

  renderActivity();
  updateStreak();
}

function animateNum(id, target) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent) || 0;
  const steps = 30;
  const inc = (target - start) / steps;
  let cur = start;
  const t = setInterval(() => {
    cur = Math.min(cur + inc, target);
    el.textContent = Math.round(cur);
    if (Math.round(cur) >= target) clearInterval(t);
  }, 20);
}

function animateBar(id, pct) {
  const el = document.getElementById(id);
  if (el) setTimeout(() => { el.style.width = pct + '%'; }, 100);
}

function renderActivity() {
  const list = document.getElementById('activityList');
  if (!state.activity.length) {
    list.innerHTML = `<div class="activity-empty"><i class="fas fa-seedling"></i><p>Start learning to see your activity here!</p></div>`;
    return;
  }
  const iconMap = { word: '📖', phrase: '💬', sentence: '📝', quiz: '🎯' };
  const colorMap = { word: '#f5f3ff', phrase: '#fce7f3', sentence: '#ecfdf5', quiz: '#fffbeb' };
  list.innerHTML = state.activity.slice(0, 8).map(a => `
    <div class="activity-item">
      <div class="act-icon" style="background:${colorMap[a.type] || '#f5f3ff'}">${iconMap[a.type] || '✨'}</div>
      <div class="act-text">${a.text}</div>
      <div class="act-time">${a.time}</div>
    </div>`).join('');
}

function addActivity(type, text) {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  state.activity.unshift({ type, text, time });
  if (state.activity.length > 30) state.activity.pop();
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastActive !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastActive === yesterday) {
      state.streak++;
    } else if (state.lastActive !== today) {
      // Don't break streak on same day
      if (state.lastActive && state.lastActive !== yesterday) {
        state.streak = 1;
      } else {
        state.streak = Math.max(1, state.streak);
      }
    }
    state.lastActive = today;
    if (!state.streakDays.includes(today)) {
      state.streakDays.push(today);
    }
    saveState();
  }
  document.getElementById('sideStreakNum').textContent = state.streak;
}

// ─────────────────────────────────────────
// LEARN PAGE
// ─────────────────────────────────────────
function selectLearnCat(cat, btn) {
  state.learnCat = cat;
  state.learnIndex = 0;
  document.querySelectorAll('#page-learn .lcat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderLearnCard();
}

function getCurrentItems() {
  const d = LANG_DATA[state.language];
  if (state.learnCat === 'words') return d.words;
  if (state.learnCat === 'phrases') return d.phrases;
  if (state.learnCat === 'sentences') return d.sentences;
  return d.words;
}

function renderLearnCard() {
  const items = getCurrentItems();
  if (!items || !items.length) return;
  const idx = state.learnIndex;
  const item = items[idx];
  const lang = LANG_DATA[state.language];
  const isSentence = state.learnCat === 'sentences';
  const isWord = state.learnCat === 'words';

  const catLabels = { words: '📖 New Word', phrases: '💬 New Phrase', sentences: '📝 New Sentence' };

  document.getElementById('learnCardInner').innerHTML = `
    <div class="lc-category">${catLabels[state.learnCat] || ''}</div>
    <div class="lc-foreign">${item.foreign}</div>
    ${item.reading ? `<div class="lc-reading">${item.reading}</div>` : ''}
    <div class="lc-english">${item.english}</div>
    ${item.example ? `<div class="lc-example">💬 ${item.example}</div>` : ''}
    ${item.tip ? `<div class="lc-tip">💡 ${item.tip}</div>` : ''}
  `;

  // Animate card
  const card = document.getElementById('learnCard');
  card.style.opacity = '0'; card.style.transform = 'scale(.95)';
  setTimeout(() => { card.style.transition = 'all .35s cubic-bezier(.2,2,.4,1)'; card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);

  // Mark learned button state
  const btn = document.getElementById('markLearnedBtn');
  const learnedSet = state.learnCat === 'words' ? state.wordsLearned
    : state.learnCat === 'phrases' ? state.phrasesLearned
    : state.sentencesLearned;
  const alreadyLearned = learnedSet.includes(`${state.language}_${idx}`);
  btn.innerHTML = alreadyLearned ? '<i class="fas fa-check-double"></i> Learned!' : '<i class="fas fa-check"></i> Mark as Learned';
  btn.classList.toggle('marked', alreadyLearned);

  // Counter
  document.getElementById('learnCounter').textContent = `${idx + 1} / ${items.length}`;

  // Breakdown (sentences)
  const bd = document.getElementById('breakdownArea');
  const grid = document.getElementById('breakdownGrid');
  if (isSentence && item.breakdown && item.breakdown.length) {
    bd.style.display = 'block';
    grid.innerHTML = item.breakdown.map(b => `
      <div class="breakdown-chip">
        <div class="bc-word">${b.word}</div>
        ${b.reading ? `<div class="bc-reading">${b.reading}</div>` : ''}
        <div class="bc-meaning">${b.meaning}</div>
      </div>`).join('');
  } else {
    bd.style.display = 'none';
  }
}

function nextLearnItem() {
  const items = getCurrentItems();
  state.learnIndex = (state.learnIndex + 1) % items.length;
  renderLearnCard();
}

function prevLearnItem() {
  const items = getCurrentItems();
  state.learnIndex = (state.learnIndex - 1 + items.length) % items.length;
  renderLearnCard();
}

function markAsLearned() {
  const items = getCurrentItems();
  const key = `${state.language}_${state.learnIndex}`;
  let arr, type, goal;

  if (state.learnCat === 'words') { arr = state.wordsLearned; type = 'word'; goal = 'words'; }
  else if (state.learnCat === 'phrases') { arr = state.phrasesLearned; type = 'phrase'; goal = 'phrases'; }
  else { arr = state.sentencesLearned; type = 'sentence'; goal = null; }

  if (arr.includes(key)) { showToast('Already marked as learned!', '⭐'); return; }

  arr.push(key);
  state.xp += type === 'word' ? 5 : type === 'phrase' ? 8 : 12;
  if (goal) state.dailyGoal[goal] = (state.dailyGoal[goal] || 0) + 1;

  const item = items[state.learnIndex];
  addActivity(type, `Learned: ${item.foreign} — ${item.english}`);
  saveState();
  renderLearnCard();
  refreshDashboard();
  showToast(`✅ Marked as learned! +${type === 'word' ? 5 : type === 'phrase' ? 8 : 12} XP`);

  checkAchievements();
}

function pronounceItem() {
  const items = getCurrentItems();
  const item = items[state.learnIndex];
  const lang = LANG_DATA[state.language];
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(item.foreign);
    utter.lang = lang.voiceLang;
    utter.rate = 0.85;
    window.speechSynthesis.speak(utter);
    showToast('🔊 Playing pronunciation...', '🎵');
  } else {
    showToast('Speech not supported in this browser.', '⚠️');
  }
}

// ─────────────────────────────────────────
// FLASHCARDS
// ─────────────────────────────────────────
function selectFlashCat(cat, btn) {
  state.flashCat = cat;
  state.flashIndex = 0;
  state.flashFlipped = false;
  document.querySelectorAll('#page-flashcards .lcat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderFlashcard();
}

function getFlashItems() {
  const d = LANG_DATA[state.language];
  if (state.flashCat === 'all') return [...d.words, ...d.phrases, ...d.sentences];
  if (state.flashCat === 'words') return d.words;
  if (state.flashCat === 'phrases') return d.phrases;
  return d.sentences;
}

function renderFlashcard() {
  const items = getFlashItems();
  const item = items[state.flashIndex] || items[0];
  const lang = LANG_DATA[state.language];

  document.getElementById('flashFront').querySelector('.flash-content').textContent = item.foreign;
  document.getElementById('flashLangTag').textContent = lang.code;
  document.getElementById('flashBack').querySelector('.flash-content').textContent = item.english;
  document.getElementById('flashCounter').textContent = `${state.flashIndex + 1} / ${items.length}`;
  document.getElementById('fpEasy').textContent = state.flashRatings.easy;
  document.getElementById('fpOk').textContent = state.flashRatings.ok;
  document.getElementById('fpHard').textContent = state.flashRatings.hard;

  // Reset flip
  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');
  state.flashFlipped = false;
  document.getElementById('flashRating').style.display = 'none';
}

function flipCard() {
  const fc = document.getElementById('flashcard');
  state.flashFlipped = !state.flashFlipped;
  fc.classList.toggle('flipped', state.flashFlipped);
  document.getElementById('flashRating').style.display = state.flashFlipped ? 'flex' : 'none';
}

function rateCard(rating) {
  state.flashRatings[rating]++;
  saveState();
  renderFlashcard();
  nextFlashcard();
}

function nextFlashcard() {
  const items = getFlashItems();
  state.flashIndex = (state.flashIndex + 1) % items.length;
  state.flashFlipped = false;
  renderFlashcard();
}

function prevFlashcard() {
  const items = getFlashItems();
  state.flashIndex = (state.flashIndex - 1 + items.length) % items.length;
  state.flashFlipped = false;
  renderFlashcard();
}

// ─────────────────────────────────────────
// QUIZ
// ─────────────────────────────────────────
let currentQuizMode = null;

function startQuiz(mode) {
  currentQuizMode = mode;
  state.quizMode = mode;
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = [];

  document.getElementById('quizStart').style.display = 'none';
  document.getElementById('quizResults').style.display = 'none';
  document.getElementById('quizActive').style.display = 'block';

  const modeLabels = { mcq: '🔤 Multiple Choice', match: '🔗 Word Match', sentence: '📜 Sentence Quiz' };
  document.getElementById('quizModeLabel').textContent = modeLabels[mode];

  if (mode === 'match') {
    startMatchMode();
  } else {
    state.quizQuestions = buildQuestions(mode, 8);
    renderQuestion();
  }
}

function buildQuestions(mode, count) {
  const d = LANG_DATA[state.language];
  const pool = mode === 'sentence' ? d.sentences : d.words;
  const shuffled = [...pool].sort(() => Math.random() - .5).slice(0, count);

  return shuffled.map(item => {
    const allAnswers = pool.map(p => p.english).filter(e => e !== item.english);
    const wrong = allAnswers.sort(() => Math.random() - .5).slice(0, 3);
    const options = [...wrong, item.english].sort(() => Math.random() - .5);

    return {
      question: mode === 'sentence'
        ? `What does this sentence mean?\n"${item.foreign}"`
        : `What does "${item.foreign}" mean?`,
      correct: item.english,
      options,
      item
    };
  });
}

function renderQuestion() {
  const qs = state.quizQuestions;
  if (state.quizIndex >= qs.length) { showQuizResults(); return; }

  const q = qs[state.quizIndex];
  const pct = (state.quizIndex / qs.length) * 100;

  document.getElementById('quizProgFill').style.width = pct + '%';
  document.getElementById('quizQNum').textContent = `Q ${state.quizIndex + 1} / ${qs.length}`;
  document.getElementById('quizScoreLive').textContent = `Score: ${state.quizScore}`;
  document.getElementById('quizQuestion').textContent = q.question;
  document.getElementById('quizCard').style.display = 'block';
  document.getElementById('matchArea').style.display = 'none';

  const answersEl = document.getElementById('quizAnswers');
  answersEl.innerHTML = q.options.map(opt => `
    <button class="quiz-opt" onclick="answerQuestion(this,'${opt.replace(/'/g, "\\'")}')">
      ${opt}
    </button>`).join('');
}

function answerQuestion(btn, answer) {
  const q = state.quizQuestions[state.quizIndex];
  const correct = answer === q.correct;

  // Disable all
  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    if (b.textContent.trim() === q.correct) b.classList.add('correct');
  });
  if (!correct) btn.classList.add('wrong');

  state.quizAnswers.push({ question: q.question, correct: q.correct, given: answer, isCorrect: correct });
  if (correct) {
    state.quizScore++;
    showToast('✅ Correct! +10 XP', '🎉');
    state.xp += 10;
  } else {
    showToast(`❌ Correct: ${q.correct}`, '💭');
  }

  setTimeout(() => {
    state.quizIndex++;
    renderQuestion();
  }, 1200);
}

// ─── MATCH MODE ───
function startMatchMode() {
  document.getElementById('quizCard').style.display = 'none';
  document.getElementById('matchArea').style.display = 'flex';

  const d = LANG_DATA[state.language];
  const pool = d.words.slice(0, 5);
  state.matchPairs = pool.map(w => ({ foreign: w.foreign, english: w.english }));
  state.matchMatched = [];
  state.matchSelected = null;

  document.getElementById('quizQNum').textContent = `Match the words!`;

  renderMatchBoard();
}

function renderMatchBoard() {
  const lefts = state.matchPairs.map((p, i) => ({ text: p.foreign, id: 'L' + i, pair: i }));
  const rights = state.matchPairs.map((p, i) => ({ text: p.english, id: 'R' + i, pair: i })).sort(() => Math.random() - .5);

  document.getElementById('matchLeft').innerHTML = lefts.map(l => `
    <div class="match-item ${state.matchMatched.includes(l.pair) ? 'matched' : ''}"
      data-id="${l.id}" data-pair="${l.pair}" data-side="L"
      onclick="matchClick(this)">${l.text}</div>`).join('');

  document.getElementById('matchRight').innerHTML = rights.map(r => `
    <div class="match-item ${state.matchMatched.includes(r.pair) ? 'matched' : ''}"
      data-id="${r.id}" data-pair="${r.pair}" data-side="R"
      onclick="matchClick(this)">${r.text}</div>`).join('');
}

function matchClick(el) {
  if (el.classList.contains('matched')) return;
  const pair = parseInt(el.dataset.pair);
  const side = el.dataset.side;

  if (!state.matchSelected) {
    state.matchSelected = el;
    el.classList.add('selected');
  } else {
    const prev = state.matchSelected;
    const prevSide = prev.dataset.side;
    const prevPair = parseInt(prev.dataset.pair);

    if (side === prevSide) {
      prev.classList.remove('selected');
      state.matchSelected = el;
      el.classList.add('selected');
      return;
    }

    if (pair === prevPair) {
      // Match!
      el.classList.add('matched'); prev.classList.add('matched');
      el.classList.remove('selected');
      state.matchMatched.push(pair);
      state.quizScore++;
      state.xp += 15;
      showToast('✅ Match! +15 XP', '🎉');
      state.matchSelected = null;

      if (state.matchMatched.length === state.matchPairs.length) {
        setTimeout(showQuizResults, 800);
      }
    } else {
      el.classList.add('wrong-match'); prev.classList.add('wrong-match');
      state.matchSelected = null;
      setTimeout(() => {
        el.classList.remove('wrong-match', 'selected');
        prev.classList.remove('wrong-match', 'selected');
      }, 600);
      showToast('❌ Not a match, try again!', '💭');
    }
  }
}

function showQuizResults() {
  document.getElementById('quizActive').style.display = 'none';
  document.getElementById('quizResults').style.display = 'block';

  const total = currentQuizMode === 'match' ? state.matchPairs.length : state.quizQuestions.length;
  const score = state.quizScore;
  const pct = Math.round((score / total) * 100);
  const xpEarned = score * (currentQuizMode === 'match' ? 15 : currentQuizMode === 'sentence' ? 20 : 10);

  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '😊' : '📚';
  const title = pct >= 90 ? 'Amazing!' : pct >= 70 ? 'Great Job!' : pct >= 50 ? 'Good Effort!' : 'Keep Practicing!';

  document.getElementById('resultsEmoji').textContent = emoji;
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('resultsScore').textContent = `${score} / ${total}`;
  document.getElementById('resultsPct').textContent = pct + '%';
  document.getElementById('resultsXP').textContent = `+${xpEarned} XP Earned!`;

  // Breakdown
  const bd = document.getElementById('resultsBreakdown');
  if (state.quizAnswers.length > 0) {
    bd.innerHTML = state.quizAnswers.map(a => `
      <div class="rb-item">
        <div class="rb-q">${a.question.substring(0, 50)}...</div>
        <div class="${a.isCorrect ? 'rb-correct' : 'rb-wrong'}">${a.isCorrect ? '✅' : '❌'}</div>
      </div>`).join('');
  } else { bd.innerHTML = ''; }

  // Save history
  const modeLabels = { mcq: 'Multiple Choice', match: 'Word Match', sentence: 'Sentence Quiz' };
  state.quizHistory.unshift({
    mode: modeLabels[currentQuizMode],
    score, total, pct,
    date: new Date().toLocaleDateString()
  });
  state.dailyGoal.quizDone = true;
  addActivity('quiz', `Quiz (${modeLabels[currentQuizMode]}): ${score}/${total} — ${pct}%`);
  saveState();

  // Confetti for high scores
  if (pct >= 70) launchConfetti();
  checkAchievements();
  refreshDashboard();
}

function retryQuiz() {
  document.getElementById('quizResults').style.display = 'none';
  document.getElementById('quizStart').style.display = 'block';
}

function renderQuizHistory() {
  const list = document.getElementById('lastScoresList');
  if (!state.quizHistory.length) {
    list.innerHTML = '<p class="no-scores">No quizzes taken yet. Start playing!</p>';
    return;
  }
  list.innerHTML = state.quizHistory.slice(0, 5).map(h => `
    <div class="score-item">
      <div class="score-mode">${h.mode}</div>
      <div class="text-right">
        <div style="font-size:.75rem;color:var(--muted)">${h.date}</div>
        <div class="score-val ${h.pct >= 80 ? 'score-hi' : h.pct >= 50 ? 'score-mid' : 'score-lo'}">
          ${h.score}/${h.total} (${h.pct}%)
        </div>
      </div>
    </div>`).join('');
}

// ─────────────────────────────────────────
// PROGRESS PAGE
// ─────────────────────────────────────────
function renderProgress() {
  // Numbers
  const w = state.wordsLearned.length;
  const p = state.phrasesLearned.length;
  const s = state.sentencesLearned.length;
  const maxW = Object.values(LANG_DATA).reduce((a, d) => a + d.words.length, 0);
  const maxP = Object.values(LANG_DATA).reduce((a, d) => a + d.phrases.length, 0);
  const maxS = Object.values(LANG_DATA).reduce((a, d) => a + d.sentences.length, 0);

  document.getElementById('poNumWords').textContent = w;
  document.getElementById('poNumPhrases').textContent = p;
  document.getElementById('poNumSents').textContent = s;

  // SVG circles (circumference = 2 * pi * 40 ≈ 251)
  const circ = 251;
  setTimeout(() => {
    setCircle('poFillWords', w, 50, circ);
    setCircle('poFillPhrases', p, 30, circ);
    setCircle('poFillSents', s, 20, circ);
  }, 200);

  // Streak
  document.getElementById('streakBigNum').textContent = state.streak;
  document.getElementById('sideStreakNum').textContent = state.streak;
  renderStreakCalendar();

  // Quiz history
  const qList = document.getElementById('quizHistoryList');
  if (!state.quizHistory.length) {
    qList.innerHTML = '<div class="activity-empty"><i class="fas fa-chart-bar"></i><p>No quizzes taken yet.</p></div>';
  } else {
    qList.innerHTML = state.quizHistory.map(h => `
      <div class="qh-item">
        <div class="qh-icon">${h.pct >= 80 ? '🏆' : h.pct >= 60 ? '🎯' : '📝'}</div>
        <div class="qh-info">
          <div class="qh-mode">${h.mode}</div>
          <div class="qh-date">${h.date}</div>
        </div>
        <div class="qh-score ${h.pct >= 80 ? 'score-hi' : h.pct >= 50 ? 'score-mid' : 'score-lo'}">
          ${h.score}/${h.total} · ${h.pct}%
        </div>
      </div>`).join('');
  }

  renderAchievements();
}

function setCircle(id, val, max, circ) {
  const el = document.getElementById(id);
  if (!el) return;
  const pct = Math.min(val / max, 1);
  const dash = pct * circ;
  el.setAttribute('stroke-dasharray', `${dash} ${circ}`);
}

function renderStreakCalendar() {
  const cal = document.getElementById('streakCalendar');
  const today = new Date();
  const days = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today - i * 86400000);
    days.push({ date: d.toDateString(), label: d.getDate() });
  }
  cal.innerHTML = days.map(d => {
    const isToday = d.date === today.toDateString();
    const active = state.streakDays.includes(d.date);
    const cls = isToday ? 'today' : active ? 'active' : 'inactive';
    return `<div class="streak-day ${cls}" title="${d.date}">${d.label}</div>`;
  }).join('');
}

// ─────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────
const ACHIEVEMENTS = [
  { id: 'first_word', icon: '🌱', name: 'First Word', desc: 'Learn your first word', check: () => state.wordsLearned.length >= 1 },
  { id: 'five_words', icon: '📖', name: 'Word Collector', desc: 'Learn 5 words', check: () => state.wordsLearned.length >= 5 },
  { id: 'first_phrase', icon: '💬', name: 'Phrase Learner', desc: 'Learn your first phrase', check: () => state.phrasesLearned.length >= 1 },
  { id: 'first_quiz', icon: '🎯', name: 'Quiz Starter', desc: 'Complete your first quiz', check: () => state.quizHistory.length >= 1 },
  { id: 'quiz_ace', icon: '🏆', name: 'Quiz Ace', desc: 'Score 100% on a quiz', check: () => state.quizHistory.some(h => h.pct === 100) },
  { id: 'streak_3', icon: '🔥', name: 'Hot Streak', desc: '3-day learning streak', check: () => state.streak >= 3 },
  { id: 'streak_7', icon: '⚡', name: 'Lightning Learner', desc: '7-day streak', check: () => state.streak >= 7 },
  { id: 'xp_100', icon: '⭐', name: 'XP Hunter', desc: 'Earn 100 XP', check: () => state.xp >= 100 },
  { id: 'polyglot', icon: '🌍', name: 'Polyglot', desc: 'Learn 20+ words total', check: () => state.wordsLearned.length >= 20 },
  { id: 'sentence_master', icon: '📜', name: 'Sentence Master', desc: 'Learn 5 sentences', check: () => state.sentencesLearned.length >= 5 },
];

function checkAchievements() {
  let newUnlocks = [];
  const unlocked = JSON.parse(localStorage.getItem('lb_achievements') || '[]');
  ACHIEVEMENTS.forEach(a => {
    if (!unlocked.includes(a.id) && a.check()) {
      unlocked.push(a.id);
      newUnlocks.push(a);
    }
  });
  if (newUnlocks.length) {
    localStorage.setItem('lb_achievements', JSON.stringify(unlocked));
    newUnlocks.forEach(a => setTimeout(() => showToast(`🏅 Achievement: ${a.name}!`, a.icon), 500));
  }
}

function renderAchievements() {
  const unlocked = JSON.parse(localStorage.getItem('lb_achievements') || '[]');
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const isUnlocked = unlocked.includes(a.id) || a.check();
    return `<div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
      <div class="ach-badge ${isUnlocked ? 'unlocked-b' : 'locked-b'}">${isUnlocked ? '✅ Unlocked' : '🔒 Locked'}</div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────
// QUICK START (from dashboard)
// ─────────────────────────────────────────
function quickStart(cat) {
  if (cat === 'grammar' || cat === 'conversation') {
    showToast('🚧 Coming soon! Stay tuned.', '✨');
    return;
  }
  // Navigate to learn page with category
  const catMap = { words: 'words', phrases: 'phrases', sentences: 'sentences' };
  const mapped = catMap[cat] || 'words';
  state.learnCat = mapped;
  state.learnIndex = 0;

  const learnBtn = document.querySelector('[data-page="learn"]');
  navigateTo('learn', learnBtn);

  // Activate the right tab
  setTimeout(() => {
    const tabs = document.querySelectorAll('#page-learn .lcat-btn');
    tabs.forEach(t => {
      t.classList.toggle('active', t.dataset.cat === mapped);
    });
    renderLearnCard();
  }, 100);
}

// ─────────────────────────────────────────
// TOAST NOTIFICATION
// ─────────────────────────────────────────
let toastTimer;
function showToast(msg, icon = '✅') {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIcon').textContent = icon;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    r: Math.random() * 8 + 4,
    d: Math.random() * 80 + 20,
    color: ['#a855f7','#f472b6','#34d399','#fbbf24','#60a5fa','#fb923c'][Math.floor(Math.random()*6)],
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    speed: Math.random() * 3 + 2,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.tiltAngle += 0.1;
      p.y += p.speed;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      if (p.y > canvas.height) { p.y = -20; p.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt, p.y);
      ctx.lineTo(p.x, p.y + p.r * 2);
      ctx.stroke();
    });
    frame++;
    if (frame < 200) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStreak();
  refreshDashboard();
  renderLearnCard();
  renderFlashcard();
  renderQuizHistory();

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    const active = document.querySelector('.page.active')?.id;
    if (active === 'page-learn') {
      if (e.key === 'ArrowRight') nextLearnItem();
      if (e.key === 'ArrowLeft') prevLearnItem();
      if (e.key === 'p' || e.key === 'P') pronounceItem();
    }
    if (active === 'page-flashcards') {
      if (e.key === 'ArrowRight') nextFlashcard();
      if (e.key === 'ArrowLeft') prevFlashcard();
      if (e.key === ' ') { e.preventDefault(); flipCard(); }
    }
  });

  // Responsive resize
  window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});

/* =========================================================
   NOTEBOOK DATA
   ========================================================= */

const pages = [
{ layout: "dedication", chapter: "Dedication", title: "For Cupcake.",
  body: `Why and what is this?<br><br>
         Well, you like reading novels, and I like playing games.
         So I thought... why not bring these two completely different things together
         and use them to tell our story this time?<br><br>
         Maybe this is my little way of making something you'd enjoy reading,
         while adding a little bit of the kind of adventure I enjoy too.<br><br>
         So, welcome to this little story of us.`,
  sign: "— Icecream" },
  { layout: "letter", chapter: "Chapter I", title: "KM and The First Spark",
handwritten: `I don't really remember when you became someone important to me.<br><br>
           We just kept talking, kept coming back to each other, and somewhere along the way, you became a part of my everyday life. Now, that is the best part of my everyday.<br><br>`,
    memory: "Maybe that's the nicest thing about some stories. They don't announce themselves when they begin.",
    secret: "one" },
  
  { layout: "timeline", chapter: "Chapter II", title: "KM and The Little Things",
    intro: "Little things stay more than any of the big gestures.",
    items: [
      { label: "a joke", text: "And then there's the elite humour. Out of all our inside jokes, I think that's probably the one I love the most." },
      { label: "a habit", text: "Checking discord a little too quickly when I know it might be you." },
      { label: "a random", text: "You had this little heart on your purse and sent me a photo of it once. I don't even know why I remember it, but I do. I just liked that you shared that little moment with me." },
    ],
    memory: "Maybe it's the little things about you that stay with me the longest.",
    secret: "three" },

  { layout: "photo", chapter: "Chapter III", title: "KM and the Reason You Matter So Much",

    body: `I think somewhere along the way,
          talking to you stopped being just something I did
          and became something I genuinely wanted to do.<br><br>
          You became one of those people I could tell things to,
          laugh with, annoy, and just be myself around.`,

    photo: "assets/photos/p1.jpeg",

    photoCaption: "somewhere along the way",

    memory: "I don't think I realised it at the time, but having you in my life had slowly become something I never wanted to take for granted.",

    secret: "two" },
    
  { layout: "ticket", chapter: "Chapter IV", title: "KM and the Nights I Want to Remember",
    body: `There were movies, of course.<br><br>
           Sometimes we watched them.<br>
           Sometimes we talked through half of them.<br>
           And sometimes the movie was almost beside the point.`,
    ticketTitle: "Admit Two", ticketRowLeft: "Row: Us", ticketRowRight: "Seat: KM Sitting",
    memory: "Because apparently the best part of movie night wasn't always the movie.",
    secret: "four" },

  { layout: "pressed", chapter: "Chapter V", title: "KM and the Words I Kept to Myself",
    body: `
          There are moments when I randomly catch myself thinking about you.<br><br>
          Sometimes it's because of something you said, sometimes because something reminded me of you,
          and sometimes for absolutely no reason at all.<br><br>
          I'm really glad you became part of my life.`,
    memory: "Maybe I've been thinking about you a little more than I let you know.",
    secret: "five" },

  { layout: "future", chapter: "Chapter VI", title: "KM and All the Things We Still Have to Do",
    body: `Seven months already feels like a lot of memories,
          and somehow it still feels like we've barely started.<br><br>
          There are still so many things I want to do with you
          from our endless conversations
          to things we've never even gotten the chance to experience together yet.`,

    items: [
      { label: "MORE MOVIE NIGHTS", text: "More Discord movie nights, and probably more moments where I pause the movie to make sure my Cupcake is okay." },
      { label: "MORE LATE NIGHTS", text: "The kind where we somehow keep talking long after we should be asleep and neither of us really wants to say goodnight." }
    ],

    memory: "I can't wait for all the things that are still going to become 'remember when we...' moments."
  },

  { layout: "future-pages", chapter: "Chapter VII", title: "KM and the Pages Yet to Be Written",
    body: `Seven months ago, we couldn't have known that we'd end up here.
          And honestly, I don't think either of us knows what the next pages will look like either.<br><br>
          But there are a few things I already know I want to find somewhere in them.`,

    prompts: [
      "The first time I finally get to see my Cupcake in person",
      "A beach day, a coffee, and a whole day where we don't have to say goodbye through a screen",
      "All the ordinary days that somehow become our favourite memories"
    ],

    memory: "Here's to the pages we haven't written yet — and to whatever comes next for us."
  },

{ layout: "interlude", chapter: "Chapter VII½", title: "The Chapter Between Chapters",
body: `And that's the thing about stories.<br><br>
         You never really know which moments will become your favourites.<br><br>
         Sometimes it's the big ones.<br>
         Sometimes it's the completely ordinary ones.<br><br>
         Sometimes it's a random day, a stupid joke,
         a conversation that went on too long,
         or a moment neither of us thought we'd remember.<br><br>
         But somehow, those are the things that stay.<br><br>          <strong>So here's to all the pages we've already written.</strong><br><br>          <strong>And all the ones we haven't yet.</strong>`,
        secret: "six",
         memory: "Maybe that's okay. Some chapters are better written while you're living them."
},

  { layout: "closing", chapter: "Chapter VIII", title: "KM and The Story Still Being Written",
    body: `And so, this is where I'll stop writing for now.<br><br>
           Not with an ending, but with a blank page.`,
    
    closing: true }
];

const hiddenNotes = {
  one: { title: "A Small Beginning",
    text: "One of our earliest memories, my daily dose of apologies and that question I framed so terribly when I was actually trying to ask something completely different. Lmao!",
    signature: "— something worth remembering" },
  two: { title: "The Part I Kept",
    text: "I keep every little moment of yours with me, and I never want to let any of them go.",
    signature: "— Icecream" },
  three: { title: "One Of Those Things",
    text: "Your random pagal moments after a sugar rush, or when you're overwhelmed, are honestly lethally cute. I don't think you realise how adorable you are in those moments.",
    signature: "— saved quietly" },
  four: { title: "Movie Ticket",
    text: "A movie on one screen and my Cupcake on the other — what better way to watch a movie? Oh wait… IRL, us in KM sitting. That's better.",
    signature: "— scene remembered" },
  five: { title: "If I Could Add One More Thing",
    text: "If there's one thing I hope you never have to doubt, it's how much I want you in my life. I know I won't always get everything right, and I know I'll probably mess up sometimes. But I'll always want to make things right, make you smile, and be someone you can count on.",
    signature: "— Icecream" },
  six: { title: "Will you?",
    text: "Will you let me keep trying to make you the happiest, and will you keep being the person I get to make these silly little things for every month?",
    signature: "— Cupcake" }
};

let current = 0;
let busy = false;

function marker(page) {
  return page.secret ? `
    <button class="interactive-marker" data-memory="${page.secret}" aria-label="Open hidden note">♡</button>
    <span class="interactive-label">a note was left here</span>` : "";
}

function photoFallbackDataUri(label = "A little memory") {
  const safe = String(label).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8c7a7"/><stop offset="1" stop-color="#8b6e59"/></linearGradient></defs><rect width="640" height="420" fill="url(#g)"/><circle cx="510" cy="92" r="54" fill="#f4e5b7" opacity=".65"/><path d="M0 330 Q150 250 290 330 T640 300 V420 H0Z" fill="#4f6850" opacity=".75"/><text x="320" y="215" text-anchor="middle" font-family="Georgia,serif" font-size="30" fill="#fff5df">${safe}</text><text x="320" y="250" text-anchor="middle" font-family="system-ui,sans-serif" font-size="15" fill="#fff5df" opacity=".78">photo placeholder</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function attachPhotoFallback(img, label) {
  if (!img) return;
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "1";
    img.src = photoFallbackDataUri(label);
  }, { once: true });
}

function pageMarkup(page, number) {
  const num = `<div class="page-number">${String(number).padStart(2,"0")}</div>`;
  if (page.layout === "closing") {
    return `<div class="content centered reveal"><div class="closing">
      <div class="chapter">${page.chapter}</div><strong>${page.title}</strong>
      <div class="body">${page.body}</div><div class="script">— Icecream</div></div>${num}</div>`;
  }
  if (page.layout === "dedication") {
    return `<div class="content centered reveal">
      <div class="wax-seal">I♡C</div><div class="chapter">${page.chapter}</div>
      <h2>${page.title}</h2><div class="body">${page.body}</div>
      <div class="script">${page.sign || ""}</div>${num}</div>`;
  }
  if (page.layout === "letter") {
    return `<div class="content reveal"><div class="chapter">${page.chapter}</div><h2>${page.title}</h2>
      <div class="letter-sheet"><div class="tape"></div><div class="handwritten">${page.handwritten}</div></div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  if (page.layout === "photo") {
    return `<div class="content reveal"><div class="chapter">${page.chapter}</div><h2>${page.title}</h2>
      <div class="photo-layout"><div class="polaroid">
        <img src="${page.photo}" alt="${page.photoCaption || 'photo'}" style="width:100%;height:145px;object-fit:cover;display:block;">
        <small>${page.photoCaption || ""}</small></div>
        <div class="caption-side body">${page.body}</div></div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  if (page.layout === "timeline") {
    const items = (page.items || []).map(it => `<div class="timeline-item"><span class="t-label">${it.label}</span>${it.text}</div>`).join("");
    return `<div class="content reveal"><div class="chapter">${page.chapter}</div><h2>${page.title}</h2>
      <div class="body">${page.intro || ""}</div><div class="timeline">${items}</div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  if (page.layout === "ticket") {
    return `<div class="content reveal"><div class="chapter">${page.chapter}</div><h2>${page.title}</h2>
      <div class="body">${page.body}</div>
      <div class="ticket"><div class="ticket-main"><div class="film-title">${page.ticketTitle || "Admit Two"}</div>
      <div class="ticket-row"><span>${page.ticketRowLeft || ""}</span><span>${page.ticketRowRight || ""}</span></div></div>
      <div class="ticket-stub">TICKET</div></div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  if (page.layout === "pressed") {
    return `<div class="content reveal"><div class="chapter">${page.chapter}</div>
      <svg class="pressed-flower" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#a9824a" stroke-width="1.2" opacity=".8">
          <path d="M32 32 C 20 20, 8 22, 10 12 C 20 10, 26 20, 32 32 Z" fill="rgba(181,118,106,.28)"/>
          <path d="M32 32 C 44 20, 56 22, 54 12 C 44 10, 38 20, 32 32 Z" fill="rgba(181,118,106,.28)"/>
          <path d="M32 32 C 20 44, 8 42, 10 52 C 20 54, 26 44, 32 32 Z" fill="rgba(124,135,104,.28)"/>
          <path d="M32 32 C 44 44, 56 42, 54 52 C 44 54, 38 44, 32 32 Z" fill="rgba(124,135,104,.28)"/>
          <circle cx="32" cy="32" r="4" fill="#c99a52" stroke="none"/>
        </g></svg>
      <h2>${page.title}</h2><div class="body">${page.body}</div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  if (page.layout === "future") {
    const items = (page.items || []).map(it => `<div class="future-card"><span>${it.label}</span><strong>${it.text}</strong></div>`).join("");
    return `<div class="content special-page future-page reveal">
      <div class="chapter">${page.chapter}</div><h2>${page.title}</h2>
      <div class="future-intro body">${page.body}</div>
      <div class="future-cards">${items}</div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  if (page.layout === "future-pages") {
    const prompts = (page.prompts || []).map((text, i) => `<div class="future-prompt"><span>0${i + 1}</span><div><b>${text}</b><i></i><i></i></div></div>`).join("");
    return `<div class="content special-page pages-page reveal">
      <div class="chapter">${page.chapter}</div><h2>${page.title}</h2>
      <div class="pages-intro body">${page.body}</div>
      <div class="future-prompts">${prompts}</div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  if (page.layout === "interlude") {
    return `<div class="content special-page interlude-page reveal"><div class="interlude-ornament">✦</div><div class="chapter">${page.chapter}</div>
      <h2>${page.title}</h2><div class="interlude-copy body">${page.body}</div>
      ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
  }
  return `<div class="content reveal"><div class="chapter">${page.chapter}</div><h2>${page.title}</h2>
    <div class="body">${page.body || ""}</div>
    ${page.memory ? `<div class="memory">${page.memory}</div>` : ""}${marker(page)}${num}</div>`;
}

function renderStatic() {
  const left = pages[current - 1];
  const right = pages[current];
  document.getElementById("leftPage").innerHTML = left ? pageMarkup(left, current) : `
    <div class="content centered"><div class="chapter">The Little Chronicles</div>
    <h3>Somewhere between<br>then and now.</h3></div>`;
  document.getElementById("rightPage").innerHTML = right ? pageMarkup(right, current + 1) : "";
  document.querySelectorAll("img[src=\"assets/photo1.jpg\"], img[src=\"assets/photo2.jpg\"]").forEach(img => attachPhotoFallback(img, img.alt || "A little memory"));
  document.getElementById("counter").textContent = `${String(current + 1).padStart(2,"0")} / ${String(pages.length).padStart(2,"0")}`;
  document.getElementById("prev").disabled = current === 0;
  document.getElementById("next").disabled = current >= pages.length - 1;
}

let soundOn = false;
let audioCtx = null;

function pageSound() {
  if (!soundOn) return;
  playGameAudio("pageTurn", .7);
  audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
  const duration = 0.16;
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * duration, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    const t = i / data.length;
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3) * 0.045;
  }
  const source = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();
  filter.type = "bandpass"; filter.frequency.value = 1700; filter.Q.value = 0.7;
  gain.gain.value = 0.7;
  source.buffer = buffer;
  source.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
  source.start();
}

function turn(direction) {
  if (busy) return;
  const nextIndex = current + direction;
  if (nextIndex < 0 || nextIndex >= pages.length) return;

  pageSound();
  busy = true;
  document.getElementById("controls").classList.add("locked");

  const book = document.querySelector(".book");
  const left = document.getElementById("leftPage");
  const right = document.getElementById("rightPage");

  const outgoing = direction > 0 ? right : left;
  outgoing.classList.remove("turning-out", "turning-in");
  void outgoing.offsetWidth;
  outgoing.classList.add("turning-out");

  const incoming = direction > 0 ? left : right;
  const incomingPage = direction > 0 ? pages[nextIndex - 1] : pages[nextIndex + 1];
  incoming.innerHTML = incomingPage
    ? pageMarkup(incomingPage, direction > 0 ? nextIndex : nextIndex + 1)
    : `<div class="content centered"><div class="chapter">Private Archive</div><h3>Somewhere between<br>then and now.</h3></div>`;
  incoming.querySelectorAll("img[src=\"assets/photo1.jpg\"], img[src=\"assets/photo2.jpg\"]").forEach(img => attachPhotoFallback(img, img.alt || "A little memory"));
  incoming.classList.remove("turning-out", "turning-in");
  void incoming.offsetWidth;
  incoming.classList.add("turning-in");

  const flash = document.createElement("div");
  flash.className = "page-flash";
  book.appendChild(flash);

  setTimeout(() => {
    current = nextIndex;
    renderStatic();
    book.classList.add("opening");
    setTimeout(() => book.classList.remove("opening"), 850);
  }, 400);

  setTimeout(() => {
    outgoing.classList.remove("turning-out");
    incoming.classList.remove("turning-in");
    flash.remove();
    busy = false;
    document.getElementById("controls").classList.remove("locked");
  }, 850);
}

document.getElementById("next").addEventListener("click", () => turn(1));
document.getElementById("prev").addEventListener("click", () => turn(-1));

document.addEventListener("keydown", e => {
  if (document.getElementById("gameWorld").classList.contains("active")) return;
  if (document.getElementById("memoryOverlay").classList.contains("open")) return;
  if (e.key === "ArrowRight") turn(1);
  if (e.key === "ArrowLeft") turn(-1);
});

document.getElementById("bookStage").addEventListener("click", e => {
  if (busy || window.innerWidth <= 720) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if (x < rect.width * .23) turn(-1);
  else if (x > rect.width * .77) turn(1);
});

document.getElementById("soundToggle").addEventListener("click", async () => {
  soundOn = !soundOn;
  gameAudioEnabled = soundOn;
  const btn = document.getElementById("soundToggle");
  btn.classList.toggle("on", soundOn);
  btn.textContent = soundOn ? "♫" : "♪";
  if (soundOn) {
    playGameAudio("notebookOpen", .8);
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext);
    if (audioCtx.state === "suspended") await audioCtx.resume();
  }
});

const stage = document.getElementById("bookStage");
let pointerStartX = null, pointerStartY = null, pointerActive = false;

stage.addEventListener("pointerdown", e => {
  if (busy || !stage.classList.contains("active")) return;
  pointerStartX = e.clientX; pointerStartY = e.clientY; pointerActive = true;
});
stage.addEventListener("pointerup", e => {
  if (!pointerActive || pointerStartX === null || busy) return;
  const dx = e.clientX - pointerStartX;
  const dy = e.clientY - pointerStartY;
  pointerActive = false;
  if (Math.abs(dx) < Math.abs(dy) * 1.25) return;
  const threshold = Math.max(70, stage.clientWidth * 0.16);
  if (dx < -threshold) turn(1);
  else if (dx > threshold) turn(-1);
  pointerStartX = null; pointerStartY = null;
});
stage.addEventListener("pointercancel", () => { pointerActive = false; pointerStartX = null; pointerStartY = null; });

function openMemory(key) {
  const note = hiddenNotes[key];
  if (!note) return;
  const extra = key === "four" ? `<div class="polaroid">
      <img src="assets/photos/p2.jpeg" alt="movie memory" style="width:100%;height:145px;object-fit:cover;display:block;">
      <small>cupcake,icecream and movie</small></div>` : "";
  const memoryContent = document.getElementById("memoryContent");
  memoryContent.innerHTML = `
    <div class="chapter">Private Annotation</div><h3>${note.title}</h3><p>${note.text}</p>${extra}
    <div class="signature">${note.signature}</div>`;
  memoryContent.querySelectorAll("img[src=\"assets/photo1.jpg\"], img[src=\"assets/photo2.jpg\"]").forEach(img => attachPhotoFallback(img, img.alt || "A little memory"));
  document.getElementById("memoryOverlay").classList.add("open");
}

document.addEventListener("click", e => {
  const mk = e.target.closest(".interactive-marker");
  if (mk) { e.stopPropagation(); openMemory(mk.dataset.memory); }
});
document.getElementById("memoryClose").addEventListener("click", () => document.getElementById("memoryOverlay").classList.remove("open"));
document.getElementById("memoryOverlay").addEventListener("click", e => {
  if (e.target.id === "memoryOverlay") document.getElementById("memoryOverlay").classList.remove("open");
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") document.getElementById("memoryOverlay").classList.remove("open");
});

(function initMotes() {
  const container = document.getElementById("motes");
  const count = window.innerWidth < 720 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const m = document.createElement("div");
    m.className = "mote";
    m.style.left = Math.random() * 100 + "vw";
    m.style.top = 40 + Math.random() * 55 + "vh";
    m.style.animationDuration = 9 + Math.random() * 10 + "s";
    m.style.animationDelay = Math.random() * 10 + "s";
    container.appendChild(m);
  }
})();

/* =========================================================
   COZY GAME
   ========================================================= */

const gameIntro = document.getElementById("gameIntro");
const gameWorld = document.getElementById("gameWorld");
const startGame = document.getElementById("startGame");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gameProgressEl = document.getElementById("gameProgress");
const gameInteractHint = document.getElementById("interactionHint");
const gameMessage = document.getElementById("gameMessage");

const discoveryOverlay = document.getElementById("discoveryOverlay");
const discoveryNumber = document.getElementById("discoveryNumber");
const discoveryLabel = document.getElementById("discoveryLabel");
const discoveryTitle = document.getElementById("discoveryTitle");
const discoveryText = document.getElementById("discoveryText");
const closeDiscovery = document.getElementById("closeDiscovery");

const memoryPuzzle = document.getElementById("memoryPuzzle");
const puzzleCard = document.getElementById("puzzleCard");
const puzzleStatus = document.getElementById("puzzleStatus");
const closePuzzle = document.getElementById("closePuzzle");

const quietMode = document.getElementById("quietMode");


let gameRunning = false;
const TOTAL_PIECES = 7;
const keys = {};

/* Discovery card copy for each of the six pieces */
const discoveryCopy = {
  1: { label: "first little piece", title: "Adventure Begins.",
    text: "Seven months already.<br><br>And somehow, I still like the simple things most, opening a call and knowing you're there, even when we have absolutely nothing important to say.",
  },
  2: { label: "the second little piece", title: "Coffee and a movie?",
    text: "You call me Icecream. I call you Cupcake. Somewhere between those two cute names, coffee, and another movie on Discord, an ordinary night stopped feeling ordinary.<br><br>And yes... I still remember our first movie together: <em>Gone Girl</em>.",
  },
  3: { label: "another little piece", title: "After the credits.",
    text: "The best thing about our movie nights is that the movie isn't really the ending.<br><br>The credits roll, we say we're going to sleep, and then somehow we keep talking. A little longer. Then a little longer again.",
  },
  4: { label: "the things I notice", title: "I like watching you chase your dreams.",
    text: "I really like how committed you are to your studies. I like being the person who gets to support you, cheer you on, and remind you that you can do it.<br><br>Even from a screen, being there for you matters to me.",
  },
  5: { label: "the quiet things", title: "A night I don't want to end.",
    text: "There are nights when I don't want the call to end at all.<br><br>Maybe that's why the quiet feels different now. It isn't empty. It is full of all the little conversations we haven't finished yet.",
  },
  6: { label: "almost seven months", title: "From our screens to somewhere real.",
    text: "Right now, our little world mostly fits inside calls, messages, Discord movie nights, coffee talks, and those ridiculous late hours.<br><br>But I can't wait for the day we don't have to meet through a screen, especially somewhere with a beach, a coffee, and you beside me.",
  },
  7: { label: "the last little piece", title: "For my Cupcake.",
    text: "Seven months with you.<br><br>I don't ever want to lose what we have. I want to keep making you happy, keep being happy with you, and keep choosing you in all the small ways that matter.<br><br>And for the times I've hurt you without meaning to: I'm sorry. I never want my careless moments to make you doubt how much you mean to me.",
  }
};

const cozyGame = {
  worldWidth: 2400,
  worldHeight: 1600,
  found: 0,
  player: { x: 1050, y: 900, speed: 200, direction: "down", moving: false, frame: 0, stepClock: 0 },
  camera: { x: 0, y: 0 },
  trees: [
    { x: 250, y: 250 }, { x: 390, y: 190 }, { x: 540, y: 270 }, { x: 720, y: 180 },
    { x: 1700, y: 220 }, { x: 1850, y: 290 }, { x: 2020, y: 180 }, { x: 2170, y: 330 },
    { x: 300, y: 1200 }, { x: 460, y: 1300 }, { x: 680, y: 1230 },
    { x: 1780, y: 1250 }, { x: 1970, y: 1340 }, { x: 2180, y: 1210 }
  ],
  rocks: [
    { x: 360, y: 700, scale: 1 }, { x: 760, y: 860, scale: .8 }, { x: 1800, y: 760, scale: 1.1 },
    { x: 2040, y: 900, scale: .8 }, { x: 930, y: 480, scale: .7 }
  ],
  flowers: [],
  pond: { x: 400, y: 550, width: 470, height: 280 },
  house: { x: 1450, y: 470, width: 360, height: 270 },

  /* piece 1: envelope by the house, always visible */
  firstPiece: { x: 1410, y: 790, found: false },

  /* piece 2: integrated three-stage memory-box puzzle, unlocked once piece 1 is found */
  secondPiece: { x: 1990, y: 820, unlocked: false, puzzleSolved: false, found: false },

  /* piece 3: appears along a little path once piece 2 is found */
  thirdPiece: { x: 1120, y: 735, unlocked: false, found: false },

  /* piece 4: "investigation" mini-game near the house door */
  fourthPiece: { x: 1490, y: 700, unlocked: false, found: false, investigationStarted: false },

  /* piece 5: hidden, guided by a proximity "quiet mode" pulse */
  fifthPiece: { x: 760, y: 1120, unlocked: false, found: false, soundProgress: 0 },

  /* piece 6: final exploration piece, unlocked once piece 5 is found */
  sixthPiece: { x: 1210, y: 820, unlocked: false, found: false, constellationSolved: false },
  seventhPiece: { x: 1780, y: 1060, unlocked: false, found: false },
  // A purely optional little character: never part of the seven clues.
};

updateProgress();

for (let i = 0; i < 90; i++) {
  cozyGame.flowers.push({
    x: 100 + Math.random() * (cozyGame.worldWidth - 200),
    y: 100 + Math.random() * (cozyGame.worldHeight - 200),
    size: 2 + Math.random() * 2
  });
}

/* ---------- resize ---------- */

let canvasDpr = 1;
let gameFrameId = 0;
let gameLoopActive = false;
let lastGameRender = 0;
let renderNow = 0;
const GAME_FRAME_MS = 1000 / 50; // Stable 50 FPS is smoother than an overloaded 60 FPS loop.

function resizeGameCanvas() {
  const area = window.innerWidth * window.innerHeight;
  const maxDpr = area > 1800000 ? 1.15 : 1.35;
  canvasDpr = Math.min(window.devicePixelRatio || 1, maxDpr);
  const width = Math.max(1, Math.floor(window.innerWidth));
  const height = Math.max(1, Math.floor(window.innerHeight));

  canvas.width = Math.floor(width * canvasDpr);
  canvas.height = Math.floor(height * canvasDpr);
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(canvasDpr, 0, 0, canvasDpr, 0, 0);

  if (gameRunning) {
    updateCamera();
    renderGame();
  }
}
window.addEventListener("resize", resizeGameCanvas);
resizeGameCanvas();

/* ---------- input ---------- */

let eKeyHeld = false;

window.addEventListener("keydown", e => {
  const k = e.key.toLowerCase();

  if (k === "e") {
    e.preventDefault();
    if (e.repeat || eKeyHeld || !gameRunning) return;
    eKeyHeld = true;
    interactWithWorld();
    return;
  }

  keys[k] = true;
  if (gameRunning && ["arrowup","arrowdown","arrowleft","arrowright"," "].includes(k)) e.preventDefault();
});

window.addEventListener("keyup", e => {
  const k = e.key.toLowerCase();
  if (k === "e") {
    eKeyHeld = false;
    return;
  }
  keys[k] = false;
});
window.addEventListener("blur", () => {
  Object.keys(keys).forEach(k => { keys[k] = false; });
  eKeyHeld = false;
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    Object.keys(keys).forEach(k => { keys[k] = false; });
    eKeyHeld = false;
    document.querySelectorAll(".mobile-controls button.pressed").forEach(b => b.classList.remove("pressed"));
  }
});

document.querySelectorAll(".mobile-controls button").forEach(button => {
  const key = button.dataset.key;
  const press = e => { e.preventDefault(); keys[key] = true; button.classList.add("pressed"); };
  const release = e => { e.preventDefault(); keys[key] = false; button.classList.remove("pressed"); };

  button.addEventListener("pointerdown", press);
  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("pointerleave", release);
  button.addEventListener("contextmenu", e => e.preventDefault());
});
document.getElementById("mobileInteract").addEventListener("click", () => interactWithWorld());

/* ---------- helpers ---------- */

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function distanceBetween(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function getPlayerBounds(x, y) { return { left: x - 11, right: x + 11, top: y - 3, bottom: y + 15 }; }
function rectanglesOverlap(a, b) { return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top; }

function circleRectangleCollision(circleX, circleY, radius, rect) {
  const closestX = clamp(circleX, rect.x - rect.width / 2, rect.x + rect.width / 2);
  const closestY = clamp(circleY, rect.y - rect.height / 2, rect.y + rect.height / 2);
  const dx = circleX - closestX, dy = circleY - closestY;
  return dx * dx + dy * dy < radius * radius;
}

function collidesWithWorld(x, y) {
  const bounds = getPlayerBounds(x, y);
  const houseBox = {
    left: cozyGame.house.x, right: cozyGame.house.x + cozyGame.house.width,
    top: cozyGame.house.y + 65, bottom: cozyGame.house.y + cozyGame.house.height
  };
  if (rectanglesOverlap(bounds, houseBox)) return true;

  if (circleRectangleCollision(x, y, 22, {
    x: cozyGame.pond.x + cozyGame.pond.width / 2,
    y: cozyGame.pond.y + cozyGame.pond.height / 2,
    width: cozyGame.pond.width - 60, height: cozyGame.pond.height - 40
  })) return true;

  for (const tree of cozyGame.trees) if (Math.hypot(x - tree.x, y - (tree.y - 10)) < 26) return true;
  for (const rock of cozyGame.rocks) if (Math.hypot(x - rock.x, y - rock.y) < 20 * rock.scale) return true;
  return false;
}

/* ---------- player update ---------- */

function getMovementInput() {
  let horizontal = 0, vertical = 0;
  if (keys["w"] || keys["arrowup"]) vertical -= 1;
  if (keys["s"] || keys["arrowdown"]) vertical += 1;
  if (keys["a"] || keys["arrowleft"]) horizontal -= 1;
  if (keys["d"] || keys["arrowright"]) horizontal += 1;
  return { horizontal, vertical };
}

function updatePlayer(delta) {
  const input = getMovementInput();
  const magnitude = Math.hypot(input.horizontal, input.vertical);
  cozyGame.player.moving = magnitude > 0;
  if (!magnitude) return;

  const horizontal = input.horizontal / magnitude;
  const vertical = input.vertical / magnitude;
  const distance = cozyGame.player.speed * delta;

  const nextX = cozyGame.player.x + horizontal * distance;
  const nextY = cozyGame.player.y + vertical * distance;

  if (!collidesWithWorld(nextX, cozyGame.player.y)) cozyGame.player.x = nextX;
  if (!collidesWithWorld(cozyGame.player.x, nextY)) cozyGame.player.y = nextY;

  cozyGame.player.x = clamp(cozyGame.player.x, 35, cozyGame.worldWidth - 35);
  cozyGame.player.y = clamp(cozyGame.player.y, 45, cozyGame.worldHeight - 45);

  if (Math.abs(horizontal) > Math.abs(vertical)) cozyGame.player.direction = horizontal > 0 ? "right" : "left";
  else if (vertical !== 0) cozyGame.player.direction = vertical > 0 ? "down" : "up";

  cozyGame.player.frame += delta * 8;
  cozyGame.player.stepClock += delta;
  if (cozyGame.player.stepClock > .28) {
    cozyGame.player.stepClock = 0;
    playGameAudio((Math.floor(cozyGame.player.frame / 2) % 2) ? "footstep1" : "footstep2", .34);
  }
}

function updateQuietGuidance() {
  // The quiet-mode hint is a world-space guidance pulse for the fifth memory.
  // Keep it purely visual and non-blocking so it can never stop player movement.
  if (!quietMode) return;
  const item = cozyGame.fifthPiece;
  if (!item || !item.unlocked || item.found) {
    quietMode.classList.remove("active");
    return;
  }
  const distance = distanceBetween(cozyGame.player, item);
  const near = distance < 360;
  quietMode.classList.toggle("near", near);
  if (near) {
    const strength = clamp(1 - distance / 360, 0, 1);
    item.soundProgress = strength;
  } else {
    item.soundProgress = Math.max(0, item.soundProgress - 0.018);
  }
}

function updateCamera() {
  const sw = window.innerWidth, sh = window.innerHeight;
  cozyGame.camera.x = clamp(cozyGame.player.x - sw / 2, 0, Math.max(0, cozyGame.worldWidth - sw));
  cozyGame.camera.y = clamp(cozyGame.player.y - sh / 2, 0, Math.max(0, cozyGame.worldHeight - sh));
}

/* ---------- progress / messages / discovery ---------- */

function updateProgress() {
  gameProgressEl.textContent = `${cozyGame.found} / ${TOTAL_PIECES}`;
  const segments = document.querySelectorAll('#questBar i');
  segments.forEach((seg, i) => {
    seg.classList.toggle('complete', i < cozyGame.found);
    seg.classList.toggle('current', i === cozyGame.found && cozyGame.found < TOTAL_PIECES);
  });

  const title = document.getElementById('questTitle');
  const sub = document.getElementById('questSub');
  if (!title || !sub) return;
  const objectives = [
    ['Find the missing pieces', 'Wander, explore, and follow anything that feels familiar.'],
    ['Follow the fireflies', 'Something is hiding beside the water. The lights may remember the way.'],
    ['Keep wandering', 'The path has changed. Look for the next little piece.'],
    ['Return to the house', 'Something familiar was left near the door. Take a closer look.'],
    ['Listen to the quiet', 'The night is trying to guide you. Follow the feeling, not the map.'],
    ['Find the next little piece', 'The clearing has gone quiet. Wander until something familiar catches the light.'],
    ['Find the last memory', 'One final piece is waiting somewhere in the night.'],
    ['Adventure complete', 'You found all seven pieces. Some memories stay with us.']
  ];
  const current = objectives[Math.min(cozyGame.found, objectives.length - 1)];
  title.textContent = current[0];
  sub.textContent = current[1];
}

function showGameMessage(text, duration) {
  gameMessage.textContent = text;
  gameMessage.classList.add("visible");
  clearTimeout(showGameMessage._t);
  showGameMessage._t = setTimeout(() => gameMessage.classList.remove("visible"), duration || 3000);
}
const setGameMessage = showGameMessage;

/* ---------- game audio ---------- */
const GAME_AUDIO={ambient:"assets/audio/game_ambient.mp3",footstep1:"assets/audio/footstep_01.mp3",footstep2:"assets/audio/footstep_02.mp3",interact:"assets/audio/interact.mp3",clue1:"assets/audio/clue_01.mp3",clue2:"assets/audio/clue_02.mp3",clue3:"assets/audio/clue_03.mp3",clue4:"assets/audio/clue_04.mp3",clue5:"assets/audio/clue_05.mp3",clue6:"assets/audio/clue_06.mp3",clue7:"assets/audio/clue_07.mp3",fireflies:"assets/audio/puzzle_fireflies.mp3",puzzleSuccess:"assets/audio/puzzle_success.mp3",investigation:"assets/audio/investigation_open.mp3",investigationSuccess:"assets/audio/investigation_success.mp3",quiet:"assets/audio/quiet_mode.mp3",constellation:"assets/audio/constellation.mp3",constellationSuccess:"assets/audio/constellation_success.mp3",transition:"assets/audio/notebook_transition.mp3",notebookOpen:"assets/audio/page_turn.mp3",pageTurn:"assets/audio/page_turn.mp3",uiClick:"assets/audio/interact.mp3"};
const gameAudio={};
const gameAudioPools={};
let gameAudioEnabled=true;
const AMBIENT_VOLUME=.34;
/* Sounds that mark an important beat: the ambient bed ducks briefly so they read clearly. */
const AUDIO_DUCK_KEYS=new Set(["clue1","clue2","clue3","clue4","clue5","clue6","clue7","puzzleSuccess","investigationSuccess","constellationSuccess","transition","notebookOpen"]);
/* Minimum gap (ms) between two plays of the same sound, so rapid input can't stack duplicate copies. */
const AUDIO_MIN_INTERVAL={footstep1:130,footstep2:130,fireflies:180,pageTurn:150,uiClick:120,interact:120};
const DEFAULT_AUDIO_MIN_INTERVAL=60;
const audioLastPlayed={};
let ambientDuckTimer=null;

function loadGameAudio(){
  Object.entries(GAME_AUDIO).forEach(([key,src])=>{
    const a=new Audio(src);
    a.preload=key==="ambient"?"auto":"metadata";
    a.volume=key==="ambient"?AMBIENT_VOLUME:.8;
    if(key==="ambient") a.loop=true;
    gameAudio[key]=a;
    gameAudioPools[key]=[a];
  });
}

function getAudioInstance(key){
  const pool=gameAudioPools[key]||(gameAudioPools[key]=[]);
  let audio=pool.find(a=>a.paused||a.ended);
  if(!audio && pool.length<3){
    const base=gameAudio[key];
    audio=new Audio(base.src);
    audio.preload="metadata";
    audio.volume=base.volume||.8;
    pool.push(audio);
  }
  return audio||pool[0];
}

/* Smoothly ramp an element's volume instead of snapping it, so plays/pauses/ducking never pop or jump. */
function fadeAudioVolume(audio,target,duration){
  if(!audio) return;
  target=Math.max(0,Math.min(1,target));
  if(audio._fadeRaf) cancelAnimationFrame(audio._fadeRaf);
  const start=audio.volume,startTime=performance.now();
  if(duration<=0||Math.abs(target-start)<0.01){ audio.volume=target; return; }
  const step=now=>{
    const t=Math.min(1,(now-startTime)/duration);
    audio.volume=start+(target-start)*t;
    if(t<1) audio._fadeRaf=requestAnimationFrame(step);
    else audio._fadeRaf=null;
  };
  audio._fadeRaf=requestAnimationFrame(step);
}

/* Gently lower the ambient bed while an important one-shot plays, then bring it back up. */
function duckAmbient(duration){
  const ambient=gameAudio.ambient;
  if(!ambient||ambient.paused) return;
  clearTimeout(ambientDuckTimer);
  fadeAudioVolume(ambient,AMBIENT_VOLUME*.4,90);
  ambientDuckTimer=setTimeout(()=>fadeAudioVolume(ambient,AMBIENT_VOLUME,500),duration);
}

function playGameAudio(key,volume=1){
  if(!gameAudioEnabled||!gameAudio[key]) return;
  const now=performance.now();
  const minInterval=AUDIO_MIN_INTERVAL[key]!==undefined?AUDIO_MIN_INTERVAL[key]:DEFAULT_AUDIO_MIN_INTERVAL;
  if(audioLastPlayed[key]!==undefined && now-audioLastPlayed[key]<minInterval) return;
  audioLastPlayed[key]=now;
  try{
    const a=getAudioInstance(key);
    if(!a) return;
    const targetVolume=Math.min(1,(gameAudio[key].volume||.8)*volume);
    if(a._fadeRaf) cancelAnimationFrame(a._fadeRaf);
    if(!a.paused) a.currentTime=0;
    a.volume=0;
    const promise=a.play();
    if(promise) promise.catch(()=>{});
    /* A short fade-in masks the retrigger and any decode click, so it always sounds intentional. */
    fadeAudioVolume(a,targetVolume,55);
    if(AUDIO_DUCK_KEYS.has(key)) duckAmbient(900);
  }catch(e){}
}

function startGameAudio(){
  if(!gameAudio.ambient) return;
  const ambient=gameAudio.ambient;
  if(!ambient.paused && ambient.volume>=AMBIENT_VOLUME-0.01) return;
  ambient.volume=0;
  const promise=ambient.play();
  if(promise) promise.catch(()=>{});
  fadeAudioVolume(ambient,AMBIENT_VOLUME,1200);
}

/* Fade the ambient bed out before pausing it, instead of cutting it off mid-note. */
function stopGameAudio(fadeDuration){
  const ambient=gameAudio.ambient;
  if(!ambient||ambient.paused) return;
  const duration=fadeDuration===undefined?700:fadeDuration;
  fadeAudioVolume(ambient,0,duration);
  setTimeout(()=>{ if(ambient.volume<=0.02) ambient.pause(); },duration+60);
}
loadGameAudio();
let glitchTimer = null;

// The archive does not contain separate memory_01..memory_07 files.
// Generate a tiny soft motif instead of requesting missing files. This keeps the
// memory-glitch audio working offline and avoids failed network requests.
function playMemoryTone(pieceNumber, volume = 0.5) {
  try {
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
    const now = audioCtx.currentTime;
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25];
    const base = notes[Math.max(0, Math.min(6, pieceNumber - 1))];
    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(base, now);
    oscillator.frequency.exponentialRampToValueAtTime(base * 1.018, now + 0.42);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.001, volume * 0.055), now + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);
    oscillator.connect(gain);
    gain.connect(audioCtx.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.54);
  } catch (_) {}
}

function triggerMemoryGlitch(pieceNumber,finalGlitch=false){
  if(notebookTransitioning)return Promise.resolve();
  /* Memory shimmer: pause the world while the memory settles in. */
  stopGameLoop();
  const overlay=document.getElementById("memoryGlitch"),caption=document.getElementById("glitchCaption");
  const captions={1:"something was left behind",2:"you remember the light",3:"the path remembers",4:"a familiar feeling",5:"listen — it is still here",6:"the memories are finding each other",7:"and now it feels like home"};
  const intensity=Math.min(7,Math.max(1,pieceNumber));
  const duration=finalGlitch?2300+intensity*110:850+intensity*125;
  const glow=.08+intensity*.035;
  clearTimeout(glitchTimer);
  overlay.style.setProperty("--glitch-duration",duration+"ms");
  overlay.style.setProperty("--glow-level",glow.toFixed(2));
  caption.textContent=captions[pieceNumber]||"a little memory shimmered";
  /* One soft memory tone replaces the harsher glitch sound. Later memories gently echo earlier motifs. */
  playMemoryTone(intensity, finalGlitch?0.82:0.62);
  if(intensity>=3)setTimeout(()=>playMemoryTone(Math.max(1,intensity-2),0.22),Math.round(duration*.42));
  document.body.classList.add("memory-glitch","memory-level-"+intensity);
  overlay.classList.remove("active");void overlay.offsetWidth;overlay.classList.add("active");
  return new Promise(resolve=>{glitchTimer=setTimeout(()=>{
    overlay.classList.remove("active");
    for(let i=1;i<=7;i++)document.body.classList.remove("memory-level-"+i);
    document.body.classList.remove("memory-glitch");
    resolve();
  },duration);});
}



function showDiscovery(pieceNumber) {
  const copy = discoveryCopy[pieceNumber];
  if (!copy) return;
  stopGameLoop();
  discoveryNumber.textContent = `${String(pieceNumber).padStart(2, "0")} / ${String(TOTAL_PIECES).padStart(2, "0")}`;
  discoveryLabel.textContent = copy.label;
  discoveryTitle.textContent = copy.title;
  discoveryText.innerHTML = copy.text;
  closeDiscovery.textContent = pieceNumber === TOTAL_PIECES ? "Every little piece led you here. One final story is waiting to be found" : "Keep looking";
  discoveryOverlay.classList.add("visible");
}

closeDiscovery.addEventListener("click", () => {
  discoveryOverlay.classList.remove("visible");

  if (cozyGame.found >= TOTAL_PIECES) {
    transitionToNotebook();
  } else {
    /* Every earlier discovery returns cleanly to the game. */
    startGameLoop();
  }
});

/* ---------- interaction routing ---------- */

function isNearCollectible() {
  const p = cozyGame.player;

  if (!cozyGame.firstPiece.found && distanceBetween(p, cozyGame.firstPiece) < 75) return "first";

  if (cozyGame.secondPiece.unlocked && !cozyGame.secondPiece.found && distanceBetween(p, cozyGame.secondPiece) < 90) return "second";

  if (cozyGame.thirdPiece.unlocked && !cozyGame.thirdPiece.found && distanceBetween(p, cozyGame.thirdPiece) < 75) return "third";

  if (cozyGame.fourthPiece.unlocked && !cozyGame.fourthPiece.found && distanceBetween(p, cozyGame.fourthPiece) < 80) return "fourth";

  if (cozyGame.fifthPiece.unlocked && !cozyGame.fifthPiece.found && distanceBetween(p, cozyGame.fifthPiece) < 65) return "fifth";

  if (cozyGame.sixthPiece.unlocked && !cozyGame.sixthPiece.found && distanceBetween(p, cozyGame.sixthPiece) < 75) return "sixth";
  /* The seventh clue becomes available only after clue 6 is collected. */
  if (cozyGame.found >= 6) cozyGame.seventhPiece.unlocked = true;
  if (cozyGame.seventhPiece.unlocked && !cozyGame.seventhPiece.found && distanceBetween(p, cozyGame.seventhPiece) < 85) return "seventh";

  return null;
}

function interactWithCollectible() {
  const target = isNearCollectible();
  if (!target) return;

  if (target === "first") {
    cozyGame.firstPiece.found = true;
    cozyGame.found = 1;
    updateProgress();
    playGameAudio("clue1");
    triggerMemoryGlitch(1).then(() => showDiscovery(1));
    cozyGame.secondPiece.unlocked = true;
    createFireflies();
    createMemoryEvolution(1);
    setGameMessage("Wait... did you see those lights?", 3500);
    return;
  }

  if (target === "second") {
    if (!cozyGame.secondPiece.puzzleSolved) {
      openMemoryPuzzle();
      return;
    }
    cozyGame.secondPiece.found = true;
    cozyGame.found = 2;
    updateProgress();
    playGameAudio("clue2");
    hideFireflies();
    triggerMemoryGlitch(2).then(() => showDiscovery(2));
    cozyGame.thirdPiece.unlocked = true;
    createMemoryEvolution(2);
    setGameMessage("There's a path I don't remember seeing before...", 3500);
    return;
  }

  if (target === "third") {
    cozyGame.thirdPiece.found = true;
    cozyGame.found = 3;
    updateProgress();
    playGameAudio("clue3");
    triggerMemoryGlitch(3).then(() => showDiscovery(3));
    cozyGame.fourthPiece.unlocked = true;
    createMemoryEvolution(3);
    setGameMessage("The house door doesn't look quite as closed anymore...", 3500);
    return;
  }

  if (target === "fourth") {
    if (!cozyGame.fourthPiece.found) openGlitchHunt();
    return;
  }

  if (target === "fifth") {
    cozyGame.fifthPiece.found = true;
    cozyGame.found = 5;
    updateProgress();
    quietMode.classList.remove("active");
    createMemoryEvolution(5);
    playGameAudio("clue5");
    triggerMemoryGlitch(5).then(() => {
      showDiscovery(5);
      cozyGame.sixthPiece.unlocked = true;
    });
    return;
  }

  if (target === "sixth") {
    openFinalLock();
    return;
  }

  if (target === "seventh") {
    cozyGame.seventhPiece.found = true;
    cozyGame.found = 7;
    updateProgress();
    playGameAudio("clue7");
    triggerMemoryGlitch(7, true).then(() => showDiscovery(7));
    createMemoryEvolution(7);
    return;
  }
}
function interactWithWorld() {
  const target = isNearCollectible();
  if (target) {
    interactWithCollectible();
  }
}

/* ---------- activity 1: constellation ---------- */
function createFireflies() {
  document.querySelectorAll('.firefly').forEach(f => f.remove());
  const positions=[
    {x:55,y:55},{x:62,y:48},{x:69,y:52},{x:75,y:45},{x:81,y:50},{x:87,y:46}
  ];
  positions.forEach((position,index)=>{
    const firefly=document.createElement('div');
    firefly.className='firefly';
    firefly.style.left=`${position.x}%`; firefly.style.top=`${position.y}%`;
    firefly.style.animationDelay=`${index*.25}s`; gameWorld.appendChild(firefly);
  });
}
function hideFireflies(){ document.querySelectorAll('.firefly').forEach(f=>f.remove()); }

const constellationState={active:false,index:0,points:[],solved:false};
const constellationSequence=[0,1,2,4,5,3,6];
const constellationPoints=[
  {x:.16,y:.28,r:13,label:'coffee',icon:'coffee'},
  {x:.31,y:.52,r:11,label:'movie',icon:'movie'},
  {x:.46,y:.34,r:12,label:'late night',icon:'moon'},
  {x:.62,y:.57,r:14,label:'icecream',icon:'icecream'},
  {x:.68,y:.20,r:11,label:'study',icon:'study'},
  {x:.83,y:.43,r:10,label:'beach',icon:'beach'},
  {x:.47,y:.75,r:13,label:'cupcake',icon:'cupcake'},
  {x:.82,y:.76,r:9,label:'decoy',icon:'decoy'}
];
const constellationClues=[
  'What do we usually have in our hands before the night really begins?',
  'Okay, Cupcake. Now find what we put on the screen together.',
  'And when the credits roll... what usually happens next?',
  'One more thing I love: what do I get to watch you work so hard at?',
  'Where do we both want to end up together someday?',
  'You call me this. Find the little frozen treat.',
  'And finally... what do I call you?',
];
const constellationStatusLines=[
  'Look for the little cup-shaped glow.',
  'Nice. Now find our movie-night star.',
  'Exactly. Find the star that stays awake after the credits.',
  'That one feels familiar. Find the study star.',
  'You found it. Now follow the beach.',
  'One more memory: the name you gave me.',
  'And the last one is the name I gave you.'
];
const constellationBoard=document.getElementById('constellationBoard');
const personalClue=document.getElementById('personalClue');
const constellationCounterNumber=document.getElementById('constellationCounterNumber');
function resetConstellation(){
  constellationState.index=0; constellationState.solved=false;
  constellationState.points=constellationPoints.map((p,i)=>({...p,id:i,lit:false}));
  renderConstellation();
  puzzleStatus.textContent=constellationStatusLines[0];
  if(personalClue) personalClue.querySelector('strong').textContent=constellationClues[0];
}
function appendConstellationIcon(parent, type, x, y, scale){
  // Purpose-built 16px pixel-art glyphs. No native emoji: they render consistently
  // across Windows, macOS, Android and small screens.
  const ns='http://www.w3.org/2000/svg';
  const g=document.createElementNS(ns,'g');
  g.setAttribute('transform',`translate(${x} ${y}) scale(${scale})`);
  g.setAttribute('class','constellation-icon constellation-icon-'+type);
  g.setAttribute('pointer-events','none');
  const ink='#fff1c4', soft='#d9bd7b', dark='#17232a';
  const rect=(x,y,w,h,fill=ink)=>{const e=document.createElementNS(ns,'rect'); e.setAttribute('x',x);e.setAttribute('y',y);e.setAttribute('width',w);e.setAttribute('height',h);e.setAttribute('fill',fill);g.appendChild(e);};
  const poly=(pts,fill=ink)=>{const e=document.createElementNS(ns,'polygon');e.setAttribute('points',pts);e.setAttribute('fill',fill);g.appendChild(e);};
  const line=(x1,y1,x2,y2,stroke=ink,sw=1)=>{const e=document.createElementNS(ns,'line');e.setAttribute('x1',x1);e.setAttribute('y1',y1);e.setAttribute('x2',x2);e.setAttribute('y2',y2);e.setAttribute('stroke',stroke);e.setAttribute('stroke-width',sw);e.setAttribute('shape-rendering','crispEdges');g.appendChild(e);};
  if(type==='coffee'){
    rect(-5,-4,8,7,soft); rect(-4,-3,6,5,dark); rect(-5,3,8,1,ink); rect(3,-2,2,3,soft); rect(-2,-6,1,2,ink); rect(0,-7,1,3,ink);
  } else if(type==='movie'){
    rect(-6,-5,12,9,soft); rect(-4,-3,8,5,dark); rect(-6,-6,12,1,ink); rect(-4,-6,2,2,soft); rect(0,-6,2,2,soft); rect(4,-6,2,2,soft); poly('-2,-2 1,0 -2,2',ink);
  } else if(type==='moon'){
    poly('3,-7 -1,-6 -4,-3 -4,1 -2,5 2,7 6,5 3,4 1,1 1,-2',soft); poly('2,-5 -1,-4 -2,-2 -2,1 0,4 3,4 1,1 1,-2',dark); rect(4,-1,1,1,ink); rect(2,3,1,1,ink);
  } else if(type==='icecream'){
    poly('-4,0 4,0 0,7',soft); rect(-4,-1,8,2,ink); rect(-3,-4,6,4,soft); rect(-2,-5,4,1,ink); rect(-1,-6,2,1,soft); rect(-1,2,1,1,dark); rect(1,4,1,1,dark);
  } else if(type==='study'){
    poly('-7,-2 0,-5 7,-2 0,1',soft); poly('-6,0 0,3 6,0 6,4 0,7 -6,4',ink); line(0,-4,0,0,dark,1); rect(7,-3,1,8,ink);
  } else if(type==='beach'){
    rect(-1,-6,1,8,soft); rect(0,-5,5,1,soft); rect(0,-3,3,1,soft); poly('1,2 5,2 3,0',ink); poly('-7,4 -4,2 -1,4 2,2 5,4 8,2 8,5 -7,5',soft);
  } else if(type==='cupcake'){
    rect(-5,0,10,2,ink); poly('-4,2 4,2 3,7 -3,7',soft); rect(-2,3,1,3,dark); rect(0,4,1,2,dark); rect(2,3,1,3,dark); rect(-4,-3,8,3,soft); rect(-2,-5,4,2,ink); rect(-1,-6,2,1,soft); rect(-5,-2,1,1,ink); rect(4,-2,1,1,ink);
  } else {
    rect(-5,-1,10,2,'#c98989'); rect(-1,-5,2,10,'#c98989');
  }
  parent.appendChild(g);
}
function renderConstellation(){
  if(!constellationBoard)return;
  constellationBoard.innerHTML='';
  const svgNS='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(svgNS,'svg');
  svg.setAttribute('viewBox','0 0 100 100');
  svg.setAttribute('role','img');
  svg.setAttribute('aria-label','Seven memory stars');
  const bg=document.createElementNS(svgNS,'rect');
  bg.setAttribute('width','100'); bg.setAttribute('height','100'); bg.setAttribute('rx','5'); bg.setAttribute('fill','#0c1825'); svg.appendChild(bg);
  // layered, calm star field rather than a noisy random-looking background
  const stars=[['7','15','.45'],['22','9','.3'],['39','17','.38'],['55','8','.28'],['72','13','.5'],['91','21','.35'],['12','39','.3'],['37','30','.25'],['58','27','.34'],['76','35','.28'],['91','49','.45'],['7','63','.25'],['25','83','.38'],['62','87','.28'],['88','69','.34'],['95','88','.25']];
  stars.forEach(([x,y,r])=>{const c=document.createElementNS(svgNS,'circle');c.setAttribute('cx',x);c.setAttribute('cy',y);c.setAttribute('r',r);c.setAttribute('fill','#d9e4d0');c.setAttribute('opacity','.32');svg.appendChild(c);});
  for(let i=0;i<constellationState.index-1;i++){
    const a=constellationPoints[constellationSequence[i]],b=constellationPoints[constellationSequence[i+1]];
    const line=document.createElementNS(svgNS,'line');
    line.setAttribute('x1',a.x*100); line.setAttribute('y1',a.y*100); line.setAttribute('x2',b.x*100); line.setAttribute('y2',b.y*100);
    line.setAttribute('stroke','#f3d991'); line.setAttribute('stroke-width','1'); line.setAttribute('opacity','.9');
    svg.appendChild(line);
  }
  constellationState.points.forEach((p,i)=>{
    const g=document.createElementNS(svgNS,'g');
    g.classList.add('constellation-node'); g.dataset.index=i; g.setAttribute('role','button'); g.setAttribute('tabindex','0');
    g.setAttribute('aria-label',p.label); g.setAttribute('aria-current',i===constellationSequence[constellationState.index]?'true':'false');
    const cx=p.x*100, cy=p.y*100;
    const isNext=i===constellationSequence[constellationState.index], isLit=p.lit;
    const halo=document.createElementNS(svgNS,'circle'); halo.setAttribute('cx',cx);halo.setAttribute('cy',cy);halo.setAttribute('r',isNext?'6.4':isLit?'5.7':'4.8');halo.setAttribute('fill',isNext?'#f6d98f':'#cbd8d0');halo.setAttribute('opacity',isNext?'.22':isLit?'.16':'.08');g.appendChild(halo);
    const ring=document.createElementNS(svgNS,'circle'); ring.setAttribute('cx',cx);ring.setAttribute('cy',cy);ring.setAttribute('r',isNext?'4.6':'4.0');ring.setAttribute('fill',isLit?'#f5d98f':'#162838');ring.setAttribute('stroke',isNext?'#f7dda0':isLit?'#e6cb89':'#536878');ring.setAttribute('stroke-width',isNext?'0.7':'0.45');g.appendChild(ring);
    const core=document.createElementNS(svgNS,'circle');core.setAttribute('cx',cx);core.setAttribute('cy',cy);core.setAttribute('r',isNext?'1.6':'1.15');core.setAttribute('fill',isLit||isNext?'#fff4c9':'#dfe8db');g.appendChild(core);
    // Clear text labels are more legible than tiny icon art and remain consistent on every OS.
    const labelBg=document.createElementNS(svgNS,'rect');
    const labelText=p.label.toUpperCase(); const labelW=Math.max(9,Math.min(18,labelText.length*1.18));
    let ly=cy+7.2; if(ly>94) ly=cy-7.2;
    labelBg.setAttribute('x',cx-labelW/2); labelBg.setAttribute('y',ly-3.1); labelBg.setAttribute('width',labelW); labelBg.setAttribute('height','5.2'); labelBg.setAttribute('rx','1.8'); labelBg.setAttribute('fill','#09131d'); labelBg.setAttribute('opacity',isNext||isLit?'.88':'.7'); labelBg.setAttribute('pointer-events','none');g.appendChild(labelBg);
    const text=document.createElementNS(svgNS,'text'); text.setAttribute('x',cx);text.setAttribute('y',ly);text.setAttribute('text-anchor','middle');text.setAttribute('font-family','Inter,system-ui,sans-serif');text.setAttribute('font-size',labelText.length>9?'1.9':'2.2');text.setAttribute('font-weight','700');text.setAttribute('letter-spacing','.08em');text.setAttribute('fill',isNext?'#ffe8ad':isLit?'#ead9ae':'#aebdc0');text.setAttribute('pointer-events','none');text.textContent=labelText;g.appendChild(text);
    const title=document.createElementNS(svgNS,'title'); title.textContent=p.label; g.appendChild(title);
    svg.appendChild(g);
  });
  svg.addEventListener('click',e=>{const node=e.target.closest?.('.constellation-node');if(node)chooseConstellationStar(Number(node.dataset.index));});
  svg.addEventListener('keydown',e=>{const node=e.target.closest?.('.constellation-node');if(node&&(e.key==='Enter'||e.key===' ')){e.preventDefault();chooseConstellationStar(Number(node.dataset.index));}});
  constellationBoard.appendChild(svg);
  if(constellationCounterNumber) constellationCounterNumber.textContent=Math.min(constellationState.index+1,7);
}
function chooseConstellationStar(index){
  if(!constellationState.active||constellationState.solved)return;
  const expected=constellationSequence[constellationState.index];
  if(index!==expected){
    puzzleStatus.textContent='Not that one — but you are close. Follow the clue, not the brightest glow.';
    constellationBoard.classList.remove('constellation-wrong');void constellationBoard.offsetWidth;constellationBoard.classList.add('constellation-wrong');playGameAudio('interact',.28);return;
  }
  constellationState.points[index].lit=true;constellationState.index++;playGameAudio('interact',.55);renderConstellation();
  if(constellationState.index<constellationSequence.length){
    puzzleStatus.textContent=constellationStatusLines[constellationState.index];
    if(personalClue)personalClue.querySelector('strong').textContent=constellationClues[constellationState.index];
  }else finishConstellation();
}
function finishConstellation(){
  constellationState.solved=true;puzzleStatus.textContent='Seven months. Seven little lights. And somehow, they look like us.';
  playGameAudio('constellationSuccess',.9);constellationBoard.classList.add('constellation-complete');
  setTimeout(()=>{
    if(!memoryPuzzle.classList.contains('visible'))return;
    closePuzzle.disabled=true;memoryPuzzle.classList.remove('visible');memoryPuzzle.setAttribute('aria-hidden','true');closePuzzle.disabled=false;
    cozyGame.secondPiece.puzzleSolved=true;cozyGame.secondPiece.found=true;cozyGame.found=2;updateProgress();hideFireflies();cozyGame.thirdPiece.unlocked=true;playGameAudio('clue2');triggerMemoryGlitch(2).then(()=>showDiscovery(2));createMemoryEvolution(2);
  },900);
}
function openMemoryPuzzle(){stopGameLoop();constellationState.active=true;resetConstellation();playGameAudio('constellation',.55);memoryPuzzle.classList.add('visible');memoryPuzzle.setAttribute('aria-hidden','false');}
function closeConstellation(){if(constellationState.solved)return;constellationState.active=false;memoryPuzzle.classList.remove('visible');memoryPuzzle.setAttribute('aria-hidden','true');startGameLoop();}
document.getElementById('closePuzzle').addEventListener('click',closeConstellation);

/* ---------- activity 2: memory glitch hunt ---------- */
const glitchHunt=document.getElementById('glitchHunt');
const glitchStatus=document.getElementById('glitchStatus');
const glitchHint=document.getElementById('glitchHint');
const glitchAnomalies=new Set(['clock','movie','coffee','study','call']);
let glitchFound=new Set(), glitchActive=false, glitchHintTimer=null, glitchCompletionTimer=null;
function resetGlitchHunt(){
  clearTimeout(glitchHintTimer); clearTimeout(glitchCompletionTimer);
  glitchFound=new Set(); glitchActive=true;
  document.querySelectorAll('.glitch-object').forEach(el=>{el.classList.remove('found','wrong');el.disabled=false;});
  glitchStatus.textContent='0 / 5 found · Something feels familiar...';
  glitchStatus.setAttribute('aria-live','polite');
  glitchHint.textContent='Hint: remember the nights that lasted longer than the movie.';
  clearTimeout(glitchHintTimer);
  glitchHintTimer=setTimeout(()=>{if(glitchActive)glitchHint.textContent='The odd details are the ones that quietly break the story.';},8000);
}
function openGlitchHunt(){stopGameLoop();resetGlitchHunt();playGameAudio('investigation',.55);glitchHunt.classList.add('active');glitchHunt.setAttribute('aria-hidden','false');}
function closeGlitch(){if(!glitchActive)return;glitchActive=false;clearTimeout(glitchHintTimer);clearTimeout(glitchCompletionTimer);glitchHunt.classList.remove('active');glitchHunt.setAttribute('aria-hidden','true');startGameLoop();}
document.getElementById('closeGlitchHunt').addEventListener('click',closeGlitch);
document.querySelectorAll('.glitch-object').forEach(button=>button.addEventListener('click',()=>{
  if(!glitchActive)return; const key=button.dataset.anomaly; if(glitchFound.has(key))return;
  if(glitchAnomalies.has(key)){
    glitchFound.add(key);button.classList.add('found');button.disabled=true;playGameAudio('interact',.65);
    const glitchNotes={clock:'2:15 PM? No. Our best conversations are the ones that somehow become 2:15 AM.',movie:'That movie is wrong. Our first movie together was Gone Girl — that one belongs here.',coffee:'Tea? Absolutely not. Coffee belongs here. ☕',study:'The books are closed? I like seeing you work hard. This memory forgot that.',call:'Goodnight at 8 PM is the funniest mistake here. We both know our calls last much later.',beach:'The beach is right. Some memories know exactly where we both want to be.'};
    glitchHint.textContent=glitchNotes[key]||'That detail does not belong.';
    glitchStatus.textContent=`${glitchFound.size} / 5 found · ${glitchNotes[key]||'The memory is starting to settle...'}`;
    if(glitchFound.size===5){
      clearTimeout(glitchHintTimer);playGameAudio('investigationSuccess',.9);glitchStatus.textContent='Five little wrong things. One very familiar feeling.';
      glitchCompletionTimer=setTimeout(()=>{if(!glitchActive)return;completeGlitchHunt();},850);
    }
  }else{
    button.classList.remove('wrong');void button.offsetWidth;button.classList.add('wrong');playGameAudio('interact',.25);
    setTimeout(()=>button.classList.remove('wrong'),320);
    glitchHint.textContent='Not quite. Look for something that contradicts what you remember.';
  }
}));
function completeGlitchHunt(){
  glitchHunt.classList.remove('active');glitchHunt.setAttribute('aria-hidden','true');
  cozyGame.fourthPiece.found=true;cozyGame.found=4;updateProgress();cozyGame.fifthPiece.unlocked=true;
  playGameAudio('clue4');triggerMemoryGlitch(4).then(()=>showDiscovery(4));
  createMemoryEvolution(4);
  setTimeout(()=>{quietMode.classList.add('active');setGameMessage('The night feels a little quieter now...',3000);},700);
}

/* ---------- activity 3: final memory lock ---------- */
const finalLock=document.getElementById('finalLock');
const finalLockStatus=document.getElementById('finalLockStatus');
const finalDials=[...document.querySelectorAll('.final-dial')];
const dialOptions=document.getElementById('dialOptions');
const finalLockState={active:false,selected:0,values:['beach','cupcake','icecream'],locked:false};
const finalSymbols={coffee:'C',movie:'M',moon:'N',beach:'B',cupcake:'CUP',icecream:'I'};
const finalSymbolNames={coffee:'coffee',movie:'movie',moon:'late night',beach:'beach',cupcake:'cupcake',icecream:'icecream'};
function randomizeFinalLock(){
  const pool=['coffee','movie','moon','beach','cupcake','icecream'];
  do {
    for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
    finalLockState.values=pool.slice(0,3);
  } while(finalLockState.values[0]==='coffee'&&finalLockState.values[1]==='movie'&&finalLockState.values[2]==='moon');
}
function renderFinalLock(){
  finalDials.forEach((d,i)=>{
    const value=finalLockState.values[i];
    d.dataset.value=value;
    d.classList.toggle('selected',i===finalLockState.selected); d.setAttribute('aria-pressed',String(i===finalLockState.selected));
    const strong=d.querySelector('strong');
    strong.innerHTML='<span class=\"memory-glyph glyph-'+value+'\" aria-hidden=\"true\"></span>';
    d.querySelector('small').textContent=['FIRST MEMORY','SECOND MEMORY','THIRD MEMORY'][i]+' · '+finalSymbolNames[value];
    d.setAttribute('aria-label','Slot '+(i+1)+': '+finalSymbolNames[value]);
  });
  [...dialOptions.querySelectorAll('[data-symbol]')].forEach(option=>option.setAttribute('aria-pressed',String(option.dataset.symbol===finalLockState.values[finalLockState.selected])));
}
function openFinalLock(){
  stopGameLoop();finalLockState.active=true;finalLockState.selected=0;randomizeFinalLock();finalLockState.locked=false;renderFinalLock();
  finalLockStatus.textContent='Coffee first. Movie second. Then the late-night talks that never seem to know when to end.';
  finalLock.classList.add('active');finalLock.setAttribute('aria-hidden','false');playGameAudio('puzzleSuccess',.35);
}
function closeFinal(){if(finalLockState.locked)return;finalLockState.active=false;finalLock.classList.remove('active');finalLock.setAttribute('aria-hidden','true');startGameLoop();}
finalDials.forEach((d,i)=>d.addEventListener('click',()=>{if(finalLockState.active&&!finalLockState.locked){finalLockState.selected=i;renderFinalLock();}}));
dialOptions.addEventListener('click',e=>{
  const option=e.target.closest('[data-symbol]');if(!option||!finalLockState.active||finalLockState.locked)return;
  finalLockState.values[finalLockState.selected]=option.dataset.symbol;playGameAudio('interact',.5);renderFinalLock();
  if(finalLockState.values.every((v,i)=>v===['coffee','movie','moon'][i])) finishFinalLock();
  else finalLockStatus.textContent='That fits... but something is still out of place.';
});
document.getElementById('closeFinalLock').addEventListener('click',closeFinal);
function finishFinalLock(){
  finalLockState.locked=true;finalLockStatus.textContent='Click. The whole little world remembers.';playGameAudio('puzzleSuccess',1);finalLock.classList.add('puzzle-success');
  setTimeout(()=>{
    finalLock.classList.remove('active','puzzle-success');finalLock.setAttribute('aria-hidden','true');
    cozyGame.sixthPiece.constellationSolved=true;cozyGame.sixthPiece.found=true;cozyGame.found=6;updateProgress();cozyGame.seventhPiece.unlocked=true;
    playGameAudio('clue6');triggerMemoryGlitch(6).then(()=>showDiscovery(6));createMemoryEvolution(6);finalLockState.active=false;finalLockState.locked=false;
  },1100);
}

/* ---------- shared keyboard/touch safety ---------- */
window.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(finalLock.classList.contains('active'))closeFinal();
    else if(glitchHunt.classList.contains('active'))closeGlitch();
    else if(memoryPuzzle.classList.contains('visible'))closeConstellation();
  }
});

/* ---------- evolving world: memories visibly change the map ---------- */
function createMemoryEvolution(stage){
  const next=Math.max(Number(document.body.dataset.memoryStage||0), Number(stage)||0);
  document.body.dataset.memoryStage=String(next);
  if(next>=1) createFireflies();
}

function drawMemoryEvolution(){
  const stage=Number(document.body.dataset.memoryStage||0),t=renderNow*.001;
  const drawGlow=(x,y,r,alpha=.12)=>{
    const g=ctx.createRadialGradient(x,y,0,x,y,r);
    g.addColorStop(0,`rgba(247,222,130,${alpha})`); g.addColorStop(1,'rgba(247,222,130,0)');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
  };

  // Memory 1: the first little warmth — fireflies gather near the pond.
  if(stage>=1){
    const [x,y]=worldToScreen(640,500);
    ctx.save();
    drawGlow(x,y,120,.11);
    for(let i=0;i<12;i++){
      const a=t*.38+i*.72,r=34+(i%4)*15;
      const sx=x+Math.cos(a)*r,sy=y+Math.sin(a)*r*.55;
      ctx.shadowBlur=12;ctx.shadowColor='rgba(238,221,139,.75)';ctx.fillStyle='rgba(247,222,130,.9)';
      ctx.beginPath();ctx.arc(sx,sy,2+(i%2)*.7,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
  }

  // Memory 2: the little path lights up, gently steering the player forward.
  if(stage>=2){
    ctx.save();
    const path=[{x:910,y:650},{x:1010,y:690},{x:1110,y:720},{x:1210,y:760}];
    path.forEach((pt,i)=>{
      const [x,y]=worldToScreen(pt.x,pt.y),pulse=1+Math.sin(t*2+i)*.16;
      ctx.shadowBlur=18;ctx.shadowColor='rgba(246,205,119,.45)';ctx.fillStyle='rgba(247,220,151,.55)';
      ctx.beginPath();ctx.arc(x,y,2.2*pulse,0,Math.PI*2);ctx.fill();
    });ctx.restore();
  }

  // Memory 3: a small study corner appears — a quiet nod to her dedication.
  if(stage>=3){
    const [x,y]=worldToScreen(1010,690);
    ctx.save();ctx.globalAlpha=.94;
    ctx.fillStyle='rgba(69,48,37,.72)';ctx.fillRect(x-48,y-10,96,7);ctx.fillRect(x-39,y-3,7,30);ctx.fillRect(x+32,y-3,7,30);
    ctx.fillStyle='#eadfc6';ctx.fillRect(x-30,y-34,42,24);ctx.fillStyle='rgba(100,78,55,.42)';
    for(let i=0;i<3;i++)ctx.fillRect(x-25,y-29+i*6,31,1.4);
    ctx.fillStyle='rgba(255,220,136,.82)';ctx.shadowBlur=16;ctx.shadowColor='rgba(255,210,120,.55)';ctx.beginPath();ctx.arc(x+25,y-30,5+Math.sin(t*2)*.5,0,Math.PI*2);ctx.fill();ctx.restore();
  }

  // Memory 4: movie night — a tiny projector glow appears by the house.
  if(stage>=4){
    const [x,y]=worldToScreen(1810,570);
    ctx.save();
    const beam=ctx.createLinearGradient(x,y-30,x-150,y-100);beam.addColorStop(0,'rgba(255,224,160,.17)');beam.addColorStop(1,'rgba(255,224,160,0)');ctx.fillStyle=beam;
    ctx.beginPath();ctx.moveTo(x,y-30);ctx.lineTo(x-190,y-120);ctx.lineTo(x-190,y-70);ctx.closePath();ctx.fill();
    ctx.fillStyle='rgba(74,51,43,.72)';ctx.fillRect(x-20,y-4,40,25);ctx.fillStyle='rgba(247,224,165,.8)';ctx.fillRect(x-13,y+1,26,12);
    ctx.shadowBlur=18;ctx.shadowColor='rgba(255,219,133,.6)';ctx.fillStyle='rgba(255,229,174,.72)';ctx.beginPath();ctx.arc(x,y-10,5+Math.sin(t*2.4)*.5,0,Math.PI*2);ctx.fill();ctx.restore();
  }

  // Memory 5: the world gets quieter — stars become more visible overhead.
  if(stage>=5){
    ctx.save();ctx.globalAlpha=.72;
    for(let i=0;i<22;i++){
      const wx=260+(i*173)%1880, wy=90+(i*71)%390;
      const [x,y]=worldToScreen(wx,wy),tw=.65+.35*Math.sin(t*1.4+i);
      if(x<-10||x>innerWidth+10||y<-10||y>innerHeight+10)continue;
      ctx.fillStyle=`rgba(242,226,180,${.24*tw})`;ctx.beginPath();ctx.arc(x,y,1+(i%2)*.5,0,Math.PI*2);ctx.fill();
    }ctx.restore();
  }

  // Memory 6: the beach starts feeling like a destination rather than scenery.
  if(stage>=6){
    const [x,y]=worldToScreen(300,1450);
    ctx.save();ctx.globalAlpha=.9;
    for(let i=0;i<5;i++){
      const lx=x+Math.sin(t*.25+i)*12+i*72,ly=y+Math.cos(t*.3+i)*6;drawLantern(lx,ly,.42,i);
    }
    // A tiny pair of footprints leading toward the water.
    ctx.globalAlpha=.38;ctx.fillStyle='#8d765d';
    for(let i=0;i<7;i++){const px=x+15+i*24,py=y+24-i*4+(i%2)*5;ctx.beginPath();ctx.ellipse(px,py,3.2,5,-.25+(i%2)*.5,0,Math.PI*2);ctx.fill();}
    ctx.restore();
  }

  // Memory 7: a warm heart of light appears only when everything is found.
  if(stage>=7){
    const [x,y]=worldToScreen(1710,920),pulse=1+Math.sin(t*2.2)*.06;
    ctx.save();ctx.translate(x,y);ctx.scale(pulse,pulse);ctx.globalCompositeOperation='screen';ctx.shadowBlur=35;ctx.shadowColor='rgba(255,181,153,.72)';ctx.fillStyle='rgba(255,201,170,.7)';
    ctx.beginPath();ctx.moveTo(0,20);ctx.bezierCurveTo(-45,-8,-28,-38,0,-16);ctx.bezierCurveTo(28,-38,45,-8,0,20);ctx.fill();ctx.restore();
  }
}

function drawSoundPulse() {
  if (!cozyGame.fifthPiece.unlocked || cozyGame.fifthPiece.found) return;
  const strength = cozyGame.fifthPiece.soundProgress;
  if (strength <= 0) return;

  const target = cozyGame.fifthPiece;
  const x = target.x - cozyGame.camera.x, y = target.y - cozyGame.camera.y;

  ctx.save();
  ctx.globalAlpha = 0.08 + strength * 0.18;
  ctx.strokeStyle = "#f1d9a5";
  ctx.lineWidth = 2;
  const pulse = (performance.now() * 0.025) % 80;
  ctx.beginPath();
  ctx.arc(x, y, 20 + pulse * strength, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

/* ---------- drawing: world ---------- */

const VISUAL = {
  grass: ['#526f50','#5f7b56','#6b855e','#789069'],
  deepGrass: '#405d46',
  soil: '#7a684f',
  bark: '#594638',
  barkLight: '#80624a',
  leafDark: '#294c3b',
  leaf: '#3d6247',
  leafLight: '#5f7a52',
  moon: '#e9e0c2',
  gold: '#e8c985',
  paper: '#f1e5c9'
};

function hash2(x, y) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function worldToScreen(x, y) { return [x - cozyGame.camera.x, y - cozyGame.camera.y]; }

function drawGrassTuft(x, y, scale=1, alpha=.35, tint=VISUAL.deepGrass) {
  ctx.save(); ctx.globalAlpha=alpha; ctx.strokeStyle=tint; ctx.lineWidth=Math.max(1,scale);
  ctx.beginPath();
  ctx.moveTo(x,y+5*scale); ctx.quadraticCurveTo(x-2*scale,y-2*scale,x-5*scale,y-7*scale);
  ctx.moveTo(x,y+5*scale); ctx.quadraticCurveTo(x+1*scale,y-4*scale,x+2*scale,y-9*scale);
  ctx.moveTo(x+1*scale,y+5*scale); ctx.quadraticCurveTo(x+5*scale,y-1*scale,x+7*scale,y-5*scale);
  ctx.stroke(); ctx.restore();
}

function drawGround() {
  const w=innerWidth,h=innerHeight, camX=cozyGame.camera.x, camY=cozyGame.camera.y;
  const g=ctx.createLinearGradient(0,0,0,h);
  g.addColorStop(0,'#7e9270'); g.addColorStop(.28,'#718866'); g.addColorStop(.7,'#617b5b'); g.addColorStop(1,'#4b674d');
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);

  // Distant rolling meadow silhouettes.
  ctx.save();
  ctx.globalAlpha=.24;
  for(let layer=0;layer<3;layer++){
    const yy=h*(.16+layer*.15) - (camY*.035)%90;
    ctx.fillStyle=['#8ea07b','#6f8967','#587454'][layer];
    ctx.beginPath(); ctx.moveTo(-40,yy+65);
    for(let x=-40;x<=w+80;x+=130){ const wave=Math.sin((x+camX*.03)/145+layer)*24; ctx.quadraticCurveTo(x+65,yy+wave,x+130,yy+55+wave*.35); }
    ctx.lineTo(w+80,h);ctx.lineTo(-40,h);ctx.closePath();ctx.fill();
  }
  ctx.restore();

  // Soft painterly meadow patches.
  for(let x=-120;x<cozyGame.worldWidth+160;x+=190){
    for(let y=-120;y<cozyGame.worldHeight+160;y+=175){
      const sx=x-camX, sy=y-camY, r=hash2(x,y);
      if(sx<-160||sx>w+160||sy<-160||sy>h+160) continue;
      ctx.save(); ctx.globalAlpha=.035+.025*r; ctx.fillStyle=r>.5?'#d8d9a7':'#294b3b';
      ctx.beginPath(); ctx.ellipse(sx,sy,95+35*r,45+20*r,r*2,0,Math.PI*2);ctx.fill();ctx.restore();
    }
  }

  // Illustrated winding path.
  const px=1060-camX;
  ctx.save();
  ctx.globalAlpha=.22; ctx.fillStyle='#cbb98e';
  ctx.beginPath(); ctx.moveTo(px-95,h+30);ctx.bezierCurveTo(px-20,h*.78,px+75,h*.58,px-15,-30);ctx.lineTo(px+92,-30);ctx.bezierCurveTo(px+140,h*.56,px+38,h*.8,px+30,h+30);ctx.closePath();ctx.fill();
  ctx.globalAlpha=.16; ctx.fillStyle='#f0e1b8'; ctx.beginPath();ctx.moveTo(px-54,h+30);ctx.bezierCurveTo(px+4,h*.76,px+93,h*.54,px+24,-30);ctx.lineTo(px+58,-30);ctx.bezierCurveTo(px+112,h*.56,px+22,h*.78,px+3,h+30);ctx.closePath();ctx.fill();
  ctx.restore();

  // Hundreds of tiny hand-drawn grass strokes, culled to the viewport.
  const step=80;
  for(let x=Math.floor(camX/step)*step-100;x<camX+w+100;x+=step){
    for(let y=Math.floor(camY/step)*step-100;y<camY+h+100;y+=step){
      const r=hash2(x,y); if(r<.48) continue;
      const sx=x-camX+(r-.5)*45, sy=y-camY+(hash2(y,x)-.5)*42;
      drawGrassTuft(sx,sy,.7+r*1.5,.16+r*.16,r>.72?'#d0d39c':'#355842');
    }
  }
}

function drawFlowers(){
  const t=renderNow*.001;
  for(const f of cozyGame.flowers){
    const [x,y]=worldToScreen(f.x,f.y); if(x<-30||x>innerWidth+30||y<-30||y>innerHeight+30)continue;
    const sway=Math.sin(t*1.5+f.x*.014)*1.4;
    ctx.save();ctx.translate(sway,0);
    ctx.strokeStyle='rgba(49,83,55,.55)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y+6);ctx.quadraticCurveTo(x,y,x-1,y-f.size*1.5);ctx.stroke();
    for(let i=0;i<5;i++){const a=i*Math.PI*2/5;ctx.fillStyle=i%2?'rgba(245,238,213,.78)':'rgba(224,229,190,.68)';ctx.beginPath();ctx.ellipse(x+Math.cos(a)*f.size*.7,y+Math.sin(a)*f.size*.7,f.size*.72,f.size*.42,a,0,Math.PI*2);ctx.fill();}
    ctx.fillStyle='#e5bd67';ctx.beginPath();ctx.arc(x,y,f.size*.35,0,Math.PI*2);ctx.fill();ctx.restore();
  }
}

function drawPond(){
  const [x,y]=worldToScreen(cozyGame.pond.x,cozyGame.pond.y),w=cozyGame.pond.width,h=cozyGame.pond.height,t=performance.now()*.001;
  ctx.save();
  ctx.fillStyle='rgba(22,39,31,.28)';ctx.beginPath();ctx.ellipse(x+w/2,y+h/2+16,w/2+22,h/2+15,0,0,Math.PI*2);ctx.fill();
  const water=ctx.createLinearGradient(x,y,x,y+h);water.addColorStop(0,'#507d78');water.addColorStop(.5,'#426e6d');water.addColorStop(1,'#315a5c');ctx.fillStyle=water;
  ctx.beginPath();ctx.ellipse(x+w/2,y+h/2,w/2,h/2,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(214,231,211,.22)';ctx.lineWidth=2;
  for(let i=0;i<7;i++){const yy=y+55+i*31+Math.sin(t+i)*3;ctx.beginPath();ctx.moveTo(x+55,yy);ctx.quadraticCurveTo(x+125,yy-9,x+210,yy+1);ctx.stroke();}
  ctx.fillStyle='rgba(228,239,201,.24)';for(let i=0;i<7;i++){const lx=x+35+(i*71)%w,ly=y+30+(i*43)%h;ctx.beginPath();ctx.ellipse(lx,ly,11,4,.2,0,Math.PI*2);ctx.fill();}
  ctx.restore();
}

function drawHouse(){
  const [x,y]=worldToScreen(cozyGame.house.x,cozyGame.house.y),w=cozyGame.house.width,h=cozyGame.house.height,t=performance.now()*.001;
  ctx.save();
  ctx.fillStyle='rgba(20,29,22,.28)';ctx.beginPath();ctx.ellipse(x+w/2,y+h+9,w*.63,20,0,0,Math.PI*2);ctx.fill();
  // wall
  const wall=ctx.createLinearGradient(x,y,x,y+h);wall.addColorStop(0,'#dfcfac');wall.addColorStop(1,'#bda985');ctx.fillStyle=wall;ctx.fillRect(x,y+60,w,h-60);
  // planks
  ctx.strokeStyle='rgba(91,69,52,.16)';ctx.lineWidth=2;for(let yy=y+76;yy<y+h;yy+=28){ctx.beginPath();ctx.moveTo(x+5,yy);ctx.lineTo(x+w-5,yy+2);ctx.stroke();}
  // roof shadow + roof
  ctx.fillStyle='rgba(33,31,25,.25)';ctx.beginPath();ctx.moveTo(x-43,y+76);ctx.lineTo(x+w/2,y-72);ctx.lineTo(x+w+43,y+76);ctx.closePath();ctx.fill();
  ctx.fillStyle='#5c473b';ctx.beginPath();ctx.moveTo(x-35,y+67);ctx.lineTo(x+w/2,y-62);ctx.lineTo(x+w+35,y+67);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#86624b';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(x+w/2,y-56);ctx.lineTo(x+w+28,y+65);ctx.moveTo(x+w/2,y-56);ctx.lineTo(x-28,y+65);ctx.stroke();
  // chimney
  ctx.fillStyle='#624c40';ctx.fillRect(x+w*.68,y-75,24,58);ctx.fillStyle='rgba(210,220,193,.16)';ctx.fillRect(x+w*.68+4,y-70,16,8);
  // door
  ctx.fillStyle='#55443b';ctx.fillRect(x+w/2-29,y+h-110,58,110);ctx.fillStyle='#6d5748';ctx.fillRect(x+w/2-22,y+h-101,44,91);ctx.fillStyle='#d9bd75';ctx.beginPath();ctx.arc(x+w/2+14,y+h-54,3,0,Math.PI*2);ctx.fill();
  // glowing windows
  for(const wx of [x+48,x+w-118]){
    ctx.shadowBlur=24;ctx.shadowColor='rgba(255,211,117,.55)';ctx.fillStyle='rgba(244,203,121,.72)';ctx.fillRect(wx,y+111,70,64);ctx.shadowBlur=0;
    ctx.fillStyle='rgba(119,91,57,.7)';ctx.fillRect(wx+33,y+111,5,64);ctx.fillRect(wx,y+140,70,5);
    ctx.fillStyle='rgba(255,236,170,.18)';ctx.fillRect(wx+5,y+116,23,18);
  }
  // porch
  ctx.fillStyle='#8a6d55';ctx.fillRect(x+w/2-50,y+h-10,100,10);ctx.fillStyle='#6b5345';ctx.fillRect(x+w/2-43,y+h-2,7,23);ctx.fillRect(x+w/2+36,y+h-2,7,23);
  // smoke
  ctx.globalAlpha=.14;ctx.fillStyle='#eee8d3';for(let i=0;i<3;i++){const sx=x+w*.75+Math.sin(t*.35+i)*7,sy=y-83-i*17;ctx.beginPath();ctx.arc(sx,sy,7+i*2,0,Math.PI*2);ctx.fill();}
  ctx.restore();
}

function drawRock(rock){
  const [x,y]=worldToScreen(rock.x,rock.y),s=rock.scale;
  ctx.save();ctx.fillStyle='rgba(20,30,24,.25)';ctx.beginPath();ctx.ellipse(x,y+11*s,19*s,7*s,0,0,Math.PI*2);ctx.fill();
  const rg=ctx.createLinearGradient(x-10*s,y-10*s,x+8*s,y+10*s);rg.addColorStop(0,'#aaa895');rg.addColorStop(1,'#676d62');ctx.fillStyle=rg;
  ctx.beginPath();ctx.moveTo(x-17*s,y+4*s);ctx.quadraticCurveTo(x-14*s,y-10*s,x-2*s,y-13*s);ctx.quadraticCurveTo(x+14*s,y-10*s,x+17*s,y+2*s);ctx.quadraticCurveTo(x+7*s,y+13*s,x-7*s,y+11*s);ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.2)';ctx.beginPath();ctx.ellipse(x-6*s,y-6*s,7*s,3*s,-.4,0,Math.PI*2);ctx.fill();ctx.restore();
}

function drawTree(tree){
  const [x,y]=worldToScreen(tree.x,tree.y),s=tree.scale||1,t=performance.now()*.001;
  const sway=Math.sin(t*.8+tree.x*.018)*1.5*s;
  ctx.save();
  ctx.fillStyle='rgba(18,29,21,.26)';ctx.beginPath();ctx.ellipse(x,y+31*s,34*s,12*s,0,0,Math.PI*2);ctx.fill();
  ctx.translate(sway,0);
  // exposed roots
  ctx.fillStyle=VISUAL.bark;ctx.beginPath();ctx.moveTo(x-8*s,y+26*s);ctx.lineTo(x-24*s,y+39*s);ctx.lineTo(x-7*s,y+34*s);ctx.lineTo(x,y+42*s);ctx.lineTo(x+7*s,y+34*s);ctx.lineTo(x+24*s,y+38*s);ctx.lineTo(x+8*s,y+25*s);ctx.closePath();ctx.fill();
  // trunk with highlight
  const tg=ctx.createLinearGradient(x-8*s,y,x+9*s,y);tg.addColorStop(0,'#493a31');tg.addColorStop(.55,'#71513d');tg.addColorStop(1,'#46372f');ctx.fillStyle=tg;ctx.beginPath();ctx.moveTo(x-8*s,y+29*s);ctx.quadraticCurveTo(x-5*s,y+4*s,x-4*s,y-3*s);ctx.lineTo(x+6*s,y-3*s);ctx.quadraticCurveTo(x+8*s,y+14*s,x+9*s,y+31*s);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(215,170,112,.24)';ctx.lineWidth=1.5*s;ctx.beginPath();ctx.moveTo(x-2*s,y+18*s);ctx.lineTo(x+1*s,y-1*s);ctx.stroke();
  // irregular canopy clusters
  const blobs=[[-24,-5,23],[0,-22,31],[25,-3,25],[-10,2,26],[12,4,28],[0,-43,18]];
  blobs.forEach((b,i)=>{ctx.fillStyle=i%3===0?VISUAL.leafDark:(i%3===1?VISUAL.leaf:VISUAL.leafLight);ctx.beginPath();ctx.arc(x+b[0]*s,y+b[1]*s,b[2]*s,0,Math.PI*2);ctx.fill();});
  // canopy rim light
  ctx.fillStyle='rgba(214,224,177,.13)';ctx.beginPath();ctx.arc(x-12*s,y-38*s,10*s,0,Math.PI*2);ctx.arc(x+9*s,y-25*s,8*s,0,Math.PI*2);ctx.fill();
  // a few leaves
  ctx.fillStyle='rgba(221,224,172,.18)';for(let i=0;i<4;i++){const lx=x+Math.sin(i*4.2+tree.x)*25*s,ly=y-10*s-Math.abs(Math.cos(i*3.1))*30*s;ctx.beginPath();ctx.ellipse(lx,ly,5*s,2*s,.4,0,Math.PI*2);ctx.fill();}
  ctx.restore();
}

/* ---------- drawing: story pieces ---------- */

function drawSparkles(x,y,color='rgba(255,224,154,.8)',count=6,radius=24){
  const t=renderNow*.001;ctx.save();
  for(let i=0;i<count;i++){const a=i*Math.PI*2/count+t*.25, r=radius+(i%2)*7;const sx=x+Math.cos(a)*r,sy=y+Math.sin(a)*r*.7;const al=.22+.18*Math.sin(t*2+i);ctx.globalAlpha=Math.max(.08,al);ctx.fillStyle=color;ctx.beginPath();ctx.arc(sx,sy,1.3+(i%2),0,Math.PI*2);ctx.fill();}
  ctx.restore();
}
function drawEnvelope(item,rotation,fillStyle){
  const t=performance.now()*.001,pulse=Math.sin(t*2.1)*2.5;const [x,y0]=worldToScreen(item.x,item.y);const y=y0-pulse;
  ctx.save();ctx.shadowBlur=26;ctx.shadowColor='rgba(245,203,119,.38)';ctx.fillStyle='rgba(255,224,155,.11)';ctx.beginPath();ctx.arc(x,y,30+pulse,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
  ctx.translate(x,y);ctx.rotate(rotation);ctx.fillStyle='rgba(40,33,26,.18)';ctx.fillRect(-21, -10,42,29);ctx.fillStyle=fillStyle;ctx.fillRect(-20,-15,40,29);ctx.fillStyle='rgba(255,255,255,.18)';ctx.beginPath();ctx.moveTo(-20,-15);ctx.lineTo(0,1);ctx.lineTo(20,-15);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(110,82,54,.32)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-20,-15);ctx.lineTo(0,2);ctx.lineTo(20,-15);ctx.moveTo(-20,14);ctx.lineTo(-5,0);ctx.moveTo(20,14);ctx.lineTo(5,0);ctx.stroke();ctx.fillStyle='#bd805d';ctx.beginPath();ctx.arc(0,2,3.5,0,Math.PI*2);ctx.fill();ctx.restore();drawSparkles(x,y);
}
function drawFirstPiece(){if(!cozyGame.firstPiece.found)drawEnvelope(cozyGame.firstPiece,-.06,'#eee1c6');}
function drawSecondPiece(){const i=cozyGame.secondPiece;if(!i.unlocked||i.found)return;drawEnvelope(i,.08,i.puzzleSolved?'#eee1c6':'rgba(234,223,199,.4)');}
function drawThirdPiece(){const i=cozyGame.thirdPiece;if(!i.unlocked||i.found)return;const [x,y]=worldToScreen(i.x,i.y),t=performance.now()*.001;ctx.save();ctx.translate(x,y+Math.sin(t*2)*2);ctx.shadowBlur=28;ctx.shadowColor='rgba(255,215,127,.75)';ctx.fillStyle=VISUAL.paper;ctx.rotate(-.08);ctx.fillRect(-18,-24,36,48);ctx.shadowBlur=0;ctx.strokeStyle='rgba(74,56,40,.28)';ctx.strokeRect(-18,-24,36,48);ctx.fillStyle='rgba(102,75,52,.12)';for(let ly=-12;ly<16;ly+=8){ctx.fillRect(-11,ly,22,1.2);}ctx.fillStyle='rgba(218,169,85,.45)';ctx.beginPath();ctx.arc(0,-8,4,0,Math.PI*2);ctx.fill();ctx.restore();drawSparkles(x,y,'rgba(255,221,155,.65)',8,28);}
function drawFourthPiece(){const i=cozyGame.fourthPiece;if(!i.unlocked||i.found)return;const [x,y]=worldToScreen(i.x,i.y),t=performance.now()*.001;ctx.save();ctx.translate(x,y-Math.sin(t*2)*2);ctx.shadowBlur=22;ctx.shadowColor='rgba(255,216,139,.65)';ctx.fillStyle='rgba(255,225,176,.14)';ctx.beginPath();ctx.arc(0,0,29,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#eadcc1';ctx.beginPath();ctx.moveTo(-15,-11);ctx.lineTo(15,-11);ctx.lineTo(11,12);ctx.lineTo(-11,12);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(73,54,39,.3)';ctx.stroke();ctx.fillStyle='rgba(190,139,72,.25)';ctx.beginPath();ctx.arc(0,0,6,0,Math.PI*2);ctx.fill();ctx.restore();drawSparkles(x,y,'rgba(255,224,157,.6)',7,25);}
function drawFifthPiece(){const i=cozyGame.fifthPiece;if(!i.unlocked||i.found)return;const [x,y]=worldToScreen(i.x,i.y),t=performance.now()*.001,p=Math.sin(t*2)*2;ctx.save();ctx.translate(x,y-p);ctx.fillStyle='rgba(17,24,19,.23)';ctx.beginPath();ctx.ellipse(0,17,23,7,0,0,Math.PI*2);ctx.fill();ctx.shadowBlur=26;ctx.shadowColor='rgba(255,215,135,.55)';ctx.fillStyle='#efe1c6';ctx.beginPath();ctx.moveTo(-20,-13);ctx.lineTo(19,-11);ctx.lineTo(16,14);ctx.lineTo(-17,12);ctx.closePath();ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle='rgba(73,54,39,.3)';ctx.stroke();ctx.fillStyle='rgba(205,156,82,.25)';ctx.beginPath();ctx.arc(0,0,8+p,0,Math.PI*2);ctx.fill();ctx.restore();drawSparkles(x,y,'rgba(255,221,151,.6)',9,29);}
function drawSixthPiece(){const i=cozyGame.sixthPiece;if(!i.unlocked||i.found)return;const [x,y]=worldToScreen(i.x,i.y),t=performance.now()*.001,bob=Math.sin(t*2)*2;ctx.save();ctx.translate(x,y-bob);ctx.shadowBlur=i.constellationSolved?30:20;ctx.shadowColor=i.constellationSolved?'rgba(255,226,151,.95)':'rgba(226,210,168,.45)';ctx.fillStyle='#eadfc7';ctx.beginPath();ctx.moveTo(-17,-22);ctx.lineTo(11,-22);ctx.lineTo(17,-16);ctx.lineTo(17,22);ctx.lineTo(-17,22);ctx.closePath();ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#d6c7aa';ctx.beginPath();ctx.moveTo(11,-22);ctx.lineTo(11,-16);ctx.lineTo(17,-16);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(73,54,39,.34)';ctx.lineWidth=1;ctx.stroke();ctx.fillStyle='rgba(101,78,54,.48)';for(let ly=-8;ly<=8;ly+=7){ctx.fillRect(-10,ly,20,1.5);}ctx.fillStyle=i.constellationSolved?'#e8c985':'rgba(198,165,100,.55)';ctx.beginPath();ctx.arc(0,-1,4.5+Math.sin(t*3)*.6,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(255,226,155,.45)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(0,-1,7,0,Math.PI*2);ctx.stroke();ctx.restore();drawSparkles(x,y,'rgba(255,224,157,.72)',i.constellationSolved?10:6,i.constellationSolved?34:24);}

function drawSeventhPiece(){const i=cozyGame.seventhPiece;if(!i.unlocked||i.found)return;const [x,y]=worldToScreen(i.x,i.y),t=performance.now()*.001,pulse=1+Math.sin(t*2.4)*.08;ctx.save();ctx.translate(x,y-Math.sin(t*2)*2);ctx.scale(pulse,pulse);ctx.shadowBlur=30;ctx.shadowColor='rgba(255,190,135,.9)';ctx.fillStyle='#6b3b2a';ctx.beginPath();ctx.arc(0,2,13,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#f0d1a5';ctx.beginPath();ctx.moveTo(-12,-2);ctx.lineTo(12,-2);ctx.lineTo(8,13);ctx.lineTo(-8,13);ctx.closePath();ctx.fill();ctx.fillStyle='#fff0d2';ctx.beginPath();ctx.arc(-4,-5,4,0,Math.PI*2);ctx.arc(4,-5,4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#8b4b35';ctx.beginPath();ctx.arc(-4,-5,1.4,0,Math.PI*2);ctx.arc(4,-5,1.4,0,Math.PI*2);ctx.fill();ctx.restore();drawSparkles(x,y,'rgba(255,203,151,.9)',12,40);}

/* ---------- player ---------- */
function drawPlayer(){
  const [x,y]=worldToScreen(cozyGame.player.x,cozyGame.player.y),p=cozyGame.player,t=performance.now()*.001;
  const bob=p.moving?Math.sin(p.frame*2)*2:Math.sin(t*2)*.55,step=p.moving?Math.sin(p.frame*2)*2:0;
  ctx.save();ctx.translate(x,y+bob);
  ctx.fillStyle='rgba(19,27,21,.30)';ctx.beginPath();ctx.ellipse(0,24,18,7,0,0,Math.PI*2);ctx.fill();
  const wrapper=ctx.createLinearGradient(-15,0,15,25);wrapper.addColorStop(0,'#c8896b');wrapper.addColorStop(.5,'#a85f48');wrapper.addColorStop(1,'#733a2d');ctx.fillStyle=wrapper;ctx.beginPath();ctx.moveTo(-14,-2);ctx.lineTo(14,-2);ctx.lineTo(11,24);ctx.quadraticCurveTo(0,28,-11,24);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(255,222,182,.22)';ctx.lineWidth=1.5;for(let i=-9;i<=9;i+=6){ctx.beginPath();ctx.moveTo(i,-1);ctx.lineTo(i*.78,22);ctx.stroke();}
  ctx.fillStyle='#4a241b';ctx.beginPath();ctx.moveTo(-16,-3);ctx.bezierCurveTo(-15,-12,-8,-10,-7,-16);ctx.bezierCurveTo(-5,-24,5,-25,7,-17);ctx.bezierCurveTo(9,-12,15,-14,16,-4);ctx.bezierCurveTo(14,3,-13,4,-16,-3);ctx.closePath();ctx.fill();
  ctx.fillStyle='#6b3828';ctx.beginPath();ctx.arc(-7,-10,3,0,Math.PI*2);ctx.arc(6,-14,2.5,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#d59a68';[[-9,-5],[0,-9],[9,-4],[-4,-16],[5,-18]].forEach(([sx,sy])=>ctx.fillRect(sx-1,sy-1,2,3));
  ctx.fillStyle='#f7dfc4';ctx.beginPath();ctx.arc(-5,-2,1.7,0,Math.PI*2);ctx.arc(5,-2,1.7,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#29140f';ctx.beginPath();ctx.arc(-5,-2,.8,0,Math.PI*2);ctx.arc(5,-2,.8,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#f1c7a0';ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(0,2,4,.15,Math.PI-.15);ctx.stroke();
  ctx.strokeStyle='#3d241d';ctx.lineWidth=4;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-6,23);ctx.lineTo(-7-step,30);ctx.moveTo(6,23);ctx.lineTo(7+step,30);ctx.stroke();
  ctx.font='700 11px Inter,system-ui,sans-serif';ctx.textAlign='center';ctx.textBaseline='bottom';ctx.lineWidth=4;ctx.strokeStyle='rgba(14,20,16,.65)';ctx.strokeText('cupcake',0,-31);ctx.fillStyle='#fff1d2';ctx.fillText('cupcake',0,-31);
  ctx.restore();
}

const worldMotes=Array.from({length:40},(_,i)=>({x:(i*173)%cozyGame.worldWidth,y:(i*97)%cozyGame.worldHeight,phase:i*.73,size:1+(i%4)*.45,depth:i%3}));
const depthObjectsStatic=[
  ...cozyGame.trees.map(tree=>({y:tree.y,kind:"tree",object:tree})),
  ...cozyGame.rocks.map(rock=>({y:rock.y,kind:"rock",object:rock}))
].sort((a,b)=>a.y-b.y);
function drawWorldAtmosphere(){
  const now=renderNow*.001,w=innerWidth,h=innerHeight;
  // Far haze
  ctx.save();const haze=ctx.createLinearGradient(0,0,0,h);haze.addColorStop(0,'rgba(213,222,190,.10)');haze.addColorStop(.45,'rgba(160,181,147,.02)');haze.addColorStop(1,'rgba(19,39,29,.12)');ctx.fillStyle=haze;ctx.fillRect(0,0,w,h);ctx.restore();
  // drifting pollen / moon motes
  ctx.save();for(const m of worldMotes){const drift=10*(m.depth+1),x=m.x-cozyGame.camera.x+Math.sin(now*.22+m.phase)*drift,y=m.y-cozyGame.camera.y-((now*(4+m.depth*2)+m.phase*30)%100);if(x<-20||x>w+20||y<-20||y>h+20)continue;ctx.globalAlpha=.055+(Math.sin(now*1.7+m.phase)+1)*.035;ctx.fillStyle=m.depth===2?'#e9e2b8':'#f3dfae';ctx.beginPath();ctx.arc(x,y,m.size*(1+m.depth*.25),0,Math.PI*2);ctx.fill();}ctx.restore();
  // moonlight pool following the upper-right corner
  const moon=ctx.createRadialGradient(w*.78,h*.12,5,w*.78,h*.12,Math.max(w,h)*.6);moon.addColorStop(0,'rgba(236,229,190,.16)');moon.addColorStop(.22,'rgba(213,221,183,.06)');moon.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=moon;ctx.fillRect(0,0,w,h);
  // foreground mist ribbons
  ctx.save();ctx.globalAlpha=.045;ctx.fillStyle='#e2dfc2';for(let i=0;i<3;i++){const yy=h*(.62+i*.11)+Math.sin(now*.15+i)*16;ctx.beginPath();ctx.ellipse(w*.52,yy,w*.75,34,0,0,Math.PI*2);ctx.fill();}ctx.restore();
  const vignette=ctx.createRadialGradient(w*.5,h*.45,Math.min(w,h)*.2,w*.5,h*.5,Math.max(w,h)*.78);vignette.addColorStop(0,'rgba(0,0,0,0)');vignette.addColorStop(.7,'rgba(5,10,7,.08)');vignette.addColorStop(1,'rgba(5,10,7,.38)');ctx.fillStyle=vignette;ctx.fillRect(0,0,w,h);
}

function drawForegroundDepth(){
  const t=performance.now()*.001,w=innerWidth,h=innerHeight;
  ctx.save();ctx.globalAlpha=.38;
  for(let i=0;i<28;i++){const x=(i*97%w),y=h-(i*43%95);const sway=Math.sin(t*1.2+i)*3;ctx.strokeStyle=i%3?'#294b3a':'#526d4b';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(x,y+8);ctx.quadraticCurveTo(x+sway,y-6,x+4+sway,y-15-(i%4)*2);ctx.stroke();}
  ctx.restore();
}


function drawAurora() {
  const w=innerWidth,h=innerHeight,t=performance.now()*.00035;
  ctx.save(); ctx.globalCompositeOperation='screen';
  const bands=[['rgba(91,210,177,.11)',.15],['rgba(112,151,255,.08)',.23],['rgba(194,110,220,.07)',.31]];
  bands.forEach((b,bi)=>{
    ctx.beginPath(); ctx.moveTo(-40,h*.08+bi*12);
    for(let x=-40;x<=w+60;x+=55){
      const y=h*(.08+bi*.06)+Math.sin(x*.006+t+bi)*24+Math.sin(x*.013-t*1.7)*10;
      ctx.lineTo(x,y);
    }
    ctx.lineTo(w+60,h*.42);ctx.lineTo(-40,h*.42);ctx.closePath();
    const g=ctx.createLinearGradient(0,0,w*.7,h*.35);g.addColorStop(0,b[0]);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fill();
  });
  ctx.restore();
}
function drawLantern(x,y,scale=1,phase=0){
  const t=performance.now()*.001, sway=Math.sin(t*.65+phase)*7, bob=Math.sin(t*1.15+phase)*5;
  ctx.save();ctx.translate(x+sway,y+bob);ctx.scale(scale,scale);ctx.globalCompositeOperation='screen';
  ctx.shadowBlur=24;ctx.shadowColor='rgba(255,174,82,.65)';ctx.fillStyle='rgba(255,185,96,.78)';
  ctx.beginPath();ctx.moveTo(-7,-10);ctx.quadraticCurveTo(0,-15,7,-10);ctx.lineTo(6,6);ctx.quadraticCurveTo(0,11,-6,6);ctx.closePath();ctx.fill();
  ctx.shadowBlur=0;ctx.strokeStyle='rgba(255,239,184,.65)';ctx.lineWidth=1;ctx.stroke();
  ctx.fillStyle='rgba(255,245,198,.95)';ctx.beginPath();ctx.arc(0,-1,2.4,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(255,215,145,.35)';ctx.beginPath();ctx.moveTo(-4,8);ctx.lineTo(-2,13);ctx.moveTo(4,8);ctx.lineTo(2,13);ctx.stroke();ctx.restore();
}
function drawBeachCove(){
  const [x,y]=worldToScreen(70,1370),t=performance.now()*.001;
  ctx.save();ctx.globalAlpha=.92;
  ctx.fillStyle='rgba(220,197,142,.34)';ctx.beginPath();ctx.ellipse(x+210,y+20,245,120,-.08,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(87,137,140,.38)';ctx.beginPath();ctx.ellipse(x+225,y-8,215,86,-.08,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(225,240,220,.42)';ctx.lineWidth=3;for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(x+120+i*60,y-5+i*2,105-i*10,25,0,0,Math.PI);ctx.stroke();}
  ctx.fillStyle='rgba(246,226,177,.65)';for(let i=0;i<15;i++){const px=x+45+(i*67)%310,py=y-35+(i*29)%80;ctx.beginPath();ctx.arc(px,py,1.6+(i%3),0,Math.PI*2);ctx.fill();}
  // tiny driftwood / shells
  ctx.strokeStyle='rgba(102,78,54,.45)';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x+115,y+35);ctx.lineTo(x+150,y+27);ctx.stroke();
  ctx.fillStyle='rgba(255,244,211,.65)';ctx.beginPath();ctx.arc(x+285,y+45+Math.sin(t)*2,3,0,Math.PI*2);ctx.fill();
  ctx.restore();
}

function renderGame(now=performance.now()){
  renderNow=now;
  const w=innerWidth, h=innerHeight;
  ctx.clearRect(0,0,w,h);
  drawGround();
  drawBeachCove();
  drawFlowers();
  drawPond();
  drawHouse();
  drawAurora();
  drawMemoryEvolution();

  // Keep distant lanterns cheap; they are decorative, not gameplay-critical.
  for(let i=0;i<6;i++){
    const lx=((i*287 + now*.012*(1+i*.06)) % (cozyGame.worldWidth+300))-150;
    const ly=150+(i*97)%430;
    const [sx,sy]=worldToScreen(lx,ly);
    if(sx>-50&&sx<w+50&&sy>-50&&sy<h+50){
      drawLantern(sx,sy,.55+(i%3)*.09,i*1.7);
    }
  }

  drawWorldAtmosphere();
  drawSoundPulse();
  drawFirstPiece();
  drawSecondPiece();
  drawThirdPiece();
  drawFourthPiece();
  drawFifthPiece();
  drawSixthPiece();
  drawSeventhPiece();

  // Static scenery is already sorted; only the player changes depth every frame.
  for(const item of depthObjectsStatic){
    if(item.kind==="tree") drawTree(item.object);
    else drawRock(item.object);
  }
  drawPlayer();
  drawForegroundDepth();
}

let lastTime = performance.now();

function stopGameLoop(){
  gameRunning=false;
  gameLoopActive=false;
  if(gameFrameId){
    cancelAnimationFrame(gameFrameId);
    gameFrameId=0;
  }
}

function startGameLoop(){
  if(document.body.classList.contains("game-complete")) return;
  if(gameLoopActive) return;
  gameRunning=true;
  gameLoopActive=true;
  lastTime=performance.now();
  gameWorld.classList.add("active");
  gameFrameId=requestAnimationFrame(gameLoop);
}

function gameLoop(now){
  if(!gameRunning){
    gameLoopActive=false;
    gameFrameId=0;
    return;
  }

  gameFrameId=0;
  const elapsed=now-lastTime;
  if(elapsed < GAME_FRAME_MS){
    gameFrameId=requestAnimationFrame(gameLoop);
    return;
  }

  const delta=Math.min(elapsed/1000,0.05);
  lastTime=now;

  try {
    updatePlayer(delta);
    updateCamera();
    updateQuietGuidance();
    renderGame(now);
  } catch (error) {
    // Keep the animation/input loop alive if a non-critical visual element fails.
    // Log once for debugging without allowing a single frame to soft-lock movement.
    if (!gameLoop._reportedError) {
      gameLoop._reportedError = true;
      console.error("Game frame recovered from an error:", error);
    }
  }

  const near=!!isNearCollectible();
  if(gameInteractHint.classList.contains("visible")!==near){
    gameInteractHint.classList.toggle("visible",near);
  }

  gameFrameId=requestAnimationFrame(gameLoop);
}

/* ---------- flow: intro -> game intro -> game world ---------- */


let gameStarted = false;
let openingCutsceneTimer = null;
let openingCutsceneIndex = 0;
let openingCutsceneFinished = false;

const openingCutscene = document.getElementById("openingCutscene");
const cutsceneSub = document.getElementById("cutsceneSub");
const cutsceneSkip = document.getElementById("cutsceneSkip");
const cutsceneLines = [...openingCutscene.querySelectorAll(".cutscene-line")];
const cutsceneDots = [...openingCutscene.querySelectorAll(".cutscene-progress i")];

function finishOpeningCutscene(){
  if (openingCutsceneFinished || !openingCutscene.classList.contains("active")) return;
  openingCutsceneFinished = true;
  clearTimeout(openingCutsceneTimer);
  openingCutscene.classList.add("leaving");
  openingCutscene.setAttribute("aria-hidden","true");
  setTimeout(()=>{
    openingCutscene.classList.remove("active","leaving");
    gameIntro.classList.remove("active","leaving");
    gameIntro.classList.add("started");
    gameWorld.classList.add("active");
    showGameMessage("Cupcake, the night is yours to wander.",3600);
    updateCamera();
    renderGame(performance.now());
    startGameLoop();
  },850);
}

function advanceOpeningCutscene(){
  openingCutsceneIndex++;
  if(openingCutsceneIndex >= cutsceneLines.length){ finishOpeningCutscene(); return; }
  cutsceneLines.forEach((line,i)=>line.classList.toggle("active",i===openingCutsceneIndex));
  cutsceneDots.forEach((dot,i)=>dot.classList.toggle("active",i===openingCutsceneIndex));
  cutsceneSub.classList.toggle("show",openingCutsceneIndex===2);
  openingCutscene.dataset.cut=String(openingCutsceneIndex);
  openingCutsceneTimer=setTimeout(advanceOpeningCutscene,4000);
}

function beginOpeningCutscene(){
  clearTimeout(openingCutsceneTimer);
  openingCutsceneFinished=false;
  openingCutsceneIndex=0;
  cutsceneLines.forEach((line,i)=>line.classList.toggle("active",i===0));
  cutsceneDots.forEach((dot,i)=>dot.classList.toggle("active",i===0));
  cutsceneSub.classList.remove("show");
  openingCutscene.dataset.cut="0";
  openingCutscene.classList.add("active");
  openingCutscene.setAttribute("aria-hidden","false");
  openingCutsceneTimer=setTimeout(advanceOpeningCutscene,4000);
}

function beginAdventure(){
  if(gameStarted || notebookTransitioning) return;
  gameStarted=true;
  startGame.disabled=true;
  startGameAudio();
  playGameAudio("uiClick");
  gameIntro.classList.add("leaving");
  setTimeout(()=>{
    gameIntro.classList.remove("active","leaving");
    gameIntro.classList.add("started");
    beginOpeningCutscene();
  },520);
}

cutsceneSkip.addEventListener("click",finishOpeningCutscene);
window.addEventListener("keydown",e=>{
  if(openingCutscene.classList.contains("active") && e.code==="Space"){ e.preventDefault(); finishOpeningCutscene(); }
});

startGame.addEventListener("click",beginAdventure);

/* ---------- game -> notebook cinematic transition ---------- */
let notebookTransitioning = false;
let notebookTransitionTimer = null;

function transitionToNotebook() {
  if (notebookTransitioning || document.body.classList.contains("game-complete")) return;
  notebookTransitioning = true;
  playGameAudio("transition",.9);
  stopGameAudio(900);
  gameRunning = false;
  busy = true;

  clearTimeout(notebookTransitionTimer);
  clearTimeout(showGameMessage._t);
  gameInteractHint.classList.remove("visible");
  gameMessage.classList.remove("visible");
  discoveryOverlay.classList.remove("visible");
  memoryPuzzle.classList.remove("visible");
  quietMode.classList.remove("active");

  const transition = document.getElementById("notebookTransition");
  const bookStage = document.getElementById("bookStage");
  const book = document.querySelector(".book");
  const controls = document.getElementById("controls");
  const hint = document.getElementById("hint");
  const soundToggle = document.getElementById("soundToggle");

  /* Make the final state irreversible: the home/start screen is hidden forever. */
  document.body.classList.add("game-complete");
  gameIntro.classList.remove("active", "leaving");
  gameIntro.classList.add("started");
  gameWorld.classList.remove("active");

  transition.classList.add("active");
  transition.setAttribute("aria-hidden", "false");
  bookStage.classList.add("transition-hidden");
  bookStage.classList.add("active");
  controls.classList.add("active", "locked");
  hint.classList.add("active");
  soundToggle.classList.add("active");

  /* Always begin the notebook at its first spread. */
  current = 0;
  busy = false;
  renderStatic();
  book.classList.remove("opening", "notebook-entering");

  /* Swap screens while the transition is covering the frame. */
  setTimeout(() => {
    bookStage.classList.remove("transition-hidden");
    book.classList.add("notebook-entering");
    requestAnimationFrame(() => book.classList.remove("notebook-entering"));
  }, 1150);

  /* Fade the cinematic overlay away only after the book is already visible. */
  notebookTransitionTimer = setTimeout(() => {
    transition.classList.remove("active");
    transition.setAttribute("aria-hidden", "true");
    controls.classList.remove("locked");
    notebookTransitioning = false;
  }, 2350);
}

/* Kept as a safe compatibility entry point for older code. */
function openNotebook() {
  if (cozyGame.found >= TOTAL_PIECES) transitionToNotebook();
}

window.addEventListener("load", () => {
    if (new URLSearchParams(window.location.search).has("notebook")) {
        transitionToNotebook();
    }
});
const form = document.querySelector("#paceForm");
const targetTime = document.querySelector("#targetTime");
const raceProfile = document.querySelector("#raceProfile");
const trainingFocus = document.querySelector("#trainingFocus");
const standardGender = document.querySelector("#standardGender");
const plannerForm = document.querySelector("#plannerForm");
const athleteLevel = document.querySelector("#athleteLevel");
const seasonPhase = document.querySelector("#seasonPhase");
const sessionsPerWeek = document.querySelector("#sessionsPerWeek");
const weekPlan = document.querySelector("#weekPlan");
const warmupForm = document.querySelector("#warmupForm");
const raceStartTime = document.querySelector("#raceStartTime");
const warmupType = document.querySelector("#warmupType");
const warmupPlan = document.querySelector("#warmupPlan");
const raceChecklist = document.querySelector("#raceChecklist");
const workoutGrid = document.querySelector("#workoutGrid");
const testPredictorForm = document.querySelector("#testPredictorForm");
const testType = document.querySelector("#testType");
const testTime = document.querySelector("#testTime");
const personalStrategy = document.querySelector("#personalStrategy");
const filterButtons = document.querySelectorAll(".filter");
const copyPace = document.querySelector("#copyPace");
const sharePace = document.querySelector("#sharePace");
const copyPlan = document.querySelector("#copyPlan");
const copyWarmup = document.querySelector("#copyWarmup");
const copyChecklist = document.querySelector("#copyChecklist");
const resetChecklist = document.querySelector("#resetChecklist");
const copyTestEstimate = document.querySelector("#copyTestEstimate");
const paceStatus = document.querySelector("#paceStatus");
const planStatus = document.querySelector("#planStatus");
const warmupStatus = document.querySelector("#warmupStatus");
const checklistStatus = document.querySelector("#checklistStatus");
const testStatus = document.querySelector("#testStatus");
let stateSyncEnabled = window.location.search.length > 0;

const fields = {
  heroTarget: document.querySelector("#heroTarget"),
  pacePer200: document.querySelector("#pacePer200"),
  split200: document.querySelector("#split200"),
  split400: document.querySelector("#split400"),
  split600: document.querySelector("#split600"),
  split800: document.querySelector("#split800"),
  projection400: document.querySelector("#projection400"),
  projection600: document.querySelector("#projection600"),
  projection1000: document.querySelector("#projection1000"),
  workoutSuggestion: document.querySelector("#workoutSuggestion"),
  performanceLevel: document.querySelector("#performanceLevel"),
  nextBenchmark: document.querySelector("#nextBenchmark"),
  zoneSpeed: document.querySelector("#zoneSpeed"),
  zoneSpecific: document.querySelector("#zoneSpecific"),
  zoneEndurance: document.querySelector("#zoneEndurance"),
  zoneTempo: document.querySelector("#zoneTempo"),
  zoneEasy: document.querySelector("#zoneEasy"),
  checklistProgress: document.querySelector("#checklistProgress"),
  checklistNext: document.querySelector("#checklistNext"),
  estimated800: document.querySelector("#estimated800"),
  estimateConfidence: document.querySelector("#estimateConfidence"),
  estimateAdvice: document.querySelector("#estimateAdvice")
};

const workouts = [
  {
    title: "5 x 200 m la ritm de cursa",
    category: "specific",
    load: "mediu",
    text: "Pauza 3-4 min. Scopul este repetabilitatea: aceeasi tehnica si acelasi ritm, fara ultimul interval alergat haotic."
  },
  {
    title: "3 x 300 m + 2 x 150 m",
    category: "specific",
    load: "ridicat",
    text: "300 m la ritm apropiat de cursa, pauza 6 min, apoi 150 m relaxat rapid. Bun pentru zona 500-700 m."
  },
  {
    title: "6 x 150 m relaxat rapid",
    category: "speed",
    load: "mediu",
    text: "Recuperare completa. Se urmareste alergare fluida, frecventa si postura, nu epuizare."
  },
  {
    title: "4 x 60 m accelerari",
    category: "speed",
    load: "mic",
    text: "Accelerari progresive dupa incalzire sau dupa alergare usoara. Opreste seria cand tehnica scade."
  },
  {
    title: "25-45 min usor + 6 linii",
    category: "aerobic",
    load: "mic",
    text: "Construieste baza si ajuta recuperarea. Liniile mentin contactul cu viteza fara stres metabolic mare."
  },
  {
    title: "Tempo fragmentat 3 x 6 min",
    category: "aerobic",
    load: "mediu",
    text: "Ritm controlat, pauza 2 min usor. Util in baza si in perioadele cu volum mai mare."
  },
  {
    title: "Drill-uri + 8 x 100 m tehnic",
    category: "technique",
    load: "mic",
    text: "Genunchi, pendulare, skipping si 100 m cu accent pe contact scurt si brate. Fara fortare."
  },
  {
    title: "2 x 500 m controlat",
    category: "specific",
    load: "ridicat",
    text: "Pauza 8-10 min. Sedinta serioasa pentru rezistenta specifica; nu se foloseste prea aproape de concurs."
  },
  {
    title: "Circuit forta generala 25 min",
    category: "technique",
    load: "mediu",
    text: "Trunchi, sold, glezna si stabilitate. Alergatorul de 800 m are nevoie de postura solida sub oboseala."
  }
];

const dayNames = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];

const checklistItems = [
  { id: "gear", title: "Echipament verificat", text: "Cuie/pantofi, sosete, sort, tricou, numar de concurs si ace." },
  { id: "logistics", title: "Logistica clara", text: "Ora startului, camera de apel, traseul pana la pista si locul de incalzire." },
  { id: "fuel", title: "Hidratare si gustare", text: "Apa in inghitituri mici si gustare cunoscuta, fara experimente in ziua cursei." },
  { id: "warmup", title: "Incalzire planificata", text: "Jogging, mobilitate, drill-uri si accelerari sincronizate cu startul." },
  { id: "tactics", title: "Plan tactic scurt", text: "Primii 200 m, pozitia la 400 m si decizia din zona 500-700 m." },
  { id: "focus", title: "Cuvinte-cheie", text: "Doua repere simple: postura inalta si brate active cand apare oboseala." },
  { id: "recovery", title: "Dupa cursa", text: "Revenire usoara, haine uscate, hidratare si notite despre senzatii." },
  { id: "feedback", title: "Feedback notat", text: "Ce a mers, ce trebuie ajustat si o singura prioritate pentru urmatoarea saptamana." }
];

const checklistStorageKey = "800mRaceChecklist";

const planTemplates = {
  base: {
    junior: ["Alergare usoara + tehnica", "Forta generala", "Tempo controlat", "Odihna activa", "Viteza relaxata", "Alergare usoara", "Liber"],
    club: ["Alergare usoara + linii", "Tempo fragmentat", "Forta + mobilitate", "Alergare usoara", "Viteza relaxata", "Alergare mai lunga usoara", "Liber"],
    advanced: ["Alergare usoara + linii", "Tempo / prag controlat", "Forta generala", "Alergare usoara", "Viteza + tehnica", "Volum aerobic", "Recuperare"]
  },
  specific: {
    junior: ["Usor + drill-uri", "200 m ritm controlat", "Recuperare", "Forta scurta", "300 m tehnic", "Usor + linii", "Liber"],
    club: ["Usor + linii", "5 x 200 m specific", "Recuperare", "Forta + mobilitate", "3 x 300 m", "Alergare usoara", "Liber"],
    advanced: ["Usor + linii", "Specific 800 m", "Recuperare", "Viteza scurta", "Rezistenta specifica", "Usor", "Recuperare"]
  },
  race: {
    junior: ["Usor + 4 linii", "Ritm 2 x 200 m", "Recuperare", "Activare scurta", "Odihna", "Concurs", "Revenire"],
    club: ["Usor + linii", "2-3 x 200 m ritm", "Recuperare", "Activare", "Odihna", "Concurs", "Revenire"],
    advanced: ["Usor + linii", "Ritm specific scurt", "Recuperare", "Activare neuromusculara", "Odihna", "Concurs", "Revenire"]
  }
};

function parseTime(value) {
  const clean = value.trim().replace(",", ".");
  if (!clean) return null;

  if (clean.includes(":")) {
    const parts = clean.split(":").map(Number);
    if (parts.length !== 2 || parts.some(Number.isNaN)) return null;
    return parts[0] * 60 + parts[1];
  }

  const seconds = Number(clean);
  return Number.isFinite(seconds) ? seconds : null;
}

function formatTime(seconds, decimals = 1) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds - minutes * 60;
  if (minutes <= 0) return rest.toFixed(decimals);
  const width = decimals > 0 ? 3 + decimals : 2;
  return `${minutes}:${rest.toFixed(decimals).padStart(width, "0")}`;
}

function manualCopyBoxFor(statusElement) {
  const id = `${statusElement.id}ManualCopy`;
  let box = document.querySelector(`#${id}`);
  if (!box) {
    box = document.createElement("textarea");
    box.id = id;
    box.className = "manual-copy";
    box.setAttribute("readonly", "");
    box.setAttribute("aria-label", "Text pentru copiere manuala");
    statusElement.insertAdjacentElement("afterend", box);
  }
  return box;
}

function setStatus(element, message, options = {}) {
  element.textContent = message;
  window.clearTimeout(element.dataset.timerId);

  if (!options.persistent) {
    element.dataset.timerId = window.setTimeout(() => {
      element.textContent = "";
    }, 2600);
  }
}

async function copyText(text, statusElement, successMessage) {
  const manualBox = manualCopyBoxFor(statusElement);
  manualBox.hidden = true;
  manualBox.value = "";

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.append(area);
      area.select();
      const copied = document.execCommand("copy");
      area.remove();
      if (!copied) throw new Error("execCommand copy failed");
    }
    setStatus(statusElement, successMessage);
  } catch (error) {
    manualBox.hidden = false;
    manualBox.value = text;
    manualBox.focus();
    manualBox.select();
    setStatus(statusElement, "Nu am putut copia automat. Textul este afisat mai jos pentru copiere manuala.", { persistent: true });
  }
}

function buildSettingsUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("t", targetTime.value.trim());
  url.searchParams.set("profil", raceProfile.value);
  url.searchParams.set("focus", trainingFocus.value);
  url.searchParams.set("gen", standardGender.value);
  url.searchParams.set("nivel", athleteLevel.value);
  url.searchParams.set("perioada", seasonPhase.value);
  url.searchParams.set("sedinte", sessionsPerWeek.value);
  url.searchParams.set("start", raceStartTime.value);
  url.searchParams.set("incalzire", warmupType.value);
  url.searchParams.set("test", testType.value);
  url.searchParams.set("testt", testTime.value.trim());
  url.hash = window.location.hash || "calculator";
  return url;
}

function syncUrlState() {
  if (!stateSyncEnabled || !window.history?.replaceState) return;
  window.history.replaceState({}, "", buildSettingsUrl());
}

function restoreFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const values = {
    targetTime: params.get("t"),
    raceProfile: params.get("profil"),
    trainingFocus: params.get("focus"),
    standardGender: params.get("gen"),
    athleteLevel: params.get("nivel"),
    seasonPhase: params.get("perioada"),
    sessionsPerWeek: params.get("sedinte"),
    raceStartTime: params.get("start"),
    warmupType: params.get("incalzire"),
    testType: params.get("test"),
    testTime: params.get("testt")
  };

  if (values.targetTime) targetTime.value = values.targetTime;
  if ([...raceProfile.options].some((option) => option.value === values.raceProfile)) raceProfile.value = values.raceProfile;
  if ([...trainingFocus.options].some((option) => option.value === values.trainingFocus)) trainingFocus.value = values.trainingFocus;
  if ([...standardGender.options].some((option) => option.value === values.standardGender)) standardGender.value = values.standardGender;
  if ([...athleteLevel.options].some((option) => option.value === values.athleteLevel)) athleteLevel.value = values.athleteLevel;
  if ([...seasonPhase.options].some((option) => option.value === values.seasonPhase)) seasonPhase.value = values.seasonPhase;
  if (values.sessionsPerWeek) sessionsPerWeek.value = values.sessionsPerWeek;
  if (/^\d{2}:\d{2}$/.test(values.raceStartTime || "")) raceStartTime.value = values.raceStartTime;
  if ([...warmupType.options].some((option) => option.value === values.warmupType)) warmupType.value = values.warmupType;
  if ([...testType.options].some((option) => option.value === values.testType)) testType.value = values.testType;
  if (values.testTime) testTime.value = values.testTime;
}

function splitPlan(totalSeconds, profile) {
  const average = totalSeconds / 4;

  if (profile === "positive") {
    return [average - 0.45, average - 0.18, average + 0.2, average + 0.43];
  }

  if (profile === "negative") {
    return [average + 0.34, average + 0.14, average - 0.12, average - 0.36];
  }

  return [average - 0.24, average - 0.06, average + 0.1, average + 0.2];
}

function workoutFor(totalSeconds, focus) {
  const pace200 = totalSeconds / 4;
  const pace300 = pace200 * 1.5;
  const pace500 = pace200 * 2.5 + 2;
  const easyMinutePace = formatTime(Math.max(210, totalSeconds * 2.15), 0);

  if (focus === "speed") {
    return `6 x 150 m in ${formatTime(pace200 * 0.74)}-${formatTime(pace200 * 0.78)}`;
  }

  if (focus === "endurance") {
    return `2-3 x 500 m in ${formatTime(pace500)}, pauza 6-8 min`;
  }

  if (focus === "aerobic") {
    return `30 min usor in jur de ${easyMinutePace}/km + 6 linii`;
  }

  return `5 x 200 m in ${formatTime(pace200)} sau 3 x 300 m in ${formatTime(pace300)}`;
}

function trainingZones(totalSeconds) {
  const pace200 = totalSeconds / 4;
  return {
    speed: `150 m: ${formatTime(pace200 * 0.74)}-${formatTime(pace200 * 0.78)}`,
    specific: `200 m: ${formatTime(pace200)} | 300 m: ${formatTime(pace200 * 1.5)}`,
    endurance: `500 m: ${formatTime(pace200 * 2.5 + 2)}`,
    tempo: `1000 m: ${formatTime(totalSeconds * 1.55)}`,
    easy: `1 km: ${formatTime(Math.max(210, totalSeconds * 2.15), 0)}`
  };
}

function performanceBenchmark(totalSeconds, gender) {
  const standards = {
    male: [
      { label: "Avansat", threshold: 118, next: "mentine sub 1:58", note: "detalii individuale, recuperare, curse" },
      { label: "Competitiv", threshold: 130, next: "sub 1:58", note: "viteza specifica si tactica" },
      { label: "Club", threshold: 155, next: "sub 2:10", note: "ritm, forta generala, baza aerobica" },
      { label: "Incepator", threshold: Infinity, next: "sub 2:35", note: "tehnica, continuitate, placerea alergarii" }
    ],
    female: [
      { label: "Avansat", threshold: 138, next: "mentine sub 2:18", note: "detalii individuale, recuperare, curse" },
      { label: "Competitiv", threshold: 155, next: "sub 2:18", note: "viteza specifica si tactica" },
      { label: "Club", threshold: 185, next: "sub 2:35", note: "ritm, forta generala, baza aerobica" },
      { label: "Incepator", threshold: Infinity, next: "sub 3:05", note: "tehnica, continuitate, placerea alergarii" }
    ]
  };

  return standards[gender].find((standard) => totalSeconds < standard.threshold);
}

function strategyAdvice(profile) {
  if (profile === "positive") {
    return [
      "Pornire ferma, dar fara sprint lung; cauta culoarul si pozitia inainte de 200 m.",
      "Controleaza primul tur: nu mai accelera daca ai deja pozitie buna.",
      "Accepta ca ritmul devine greu; mentine bratele active si evita pasii laterali.",
      "Finish-ul vine din economie: creste presiunea treptat, nu astepta ultimii 50 m."
    ];
  }

  if (profile === "negative") {
    return [
      "Pleaca ordonat si relaxat; lasa loc pentru progresie fara sa ramai blocat.",
      "Pastreaza contactul cu grupul potrivit si pregateste mutarea dupa primul tur.",
      "Incepe cresterea controlata: postura inalta, cadenta stabila, privire inainte.",
      "Ultimul 200 m trebuie lansat devreme; foloseste bratele si alege culoarul clar."
    ];
  }

  return [
    "Plecare controlata: viteza utila, fara consum inutil in primele secunde.",
    "Primul tur trebuie sa para sustenabil; evita franarile si schimbarile dese.",
    "Zona 400-600 m cere disciplina: mentine ritmul chiar cand senzatia se schimba.",
    "Finish progresiv: ridica frecventa si pastreaza postura pana la linie."
  ];
}

function renderStrategy(cumulative, profile) {
  const labels = ["0-200 m", "200-400 m", "400-600 m", "600-800 m"];
  const splitLabels = [
    `pana la ${formatTime(cumulative[0])}`,
    `${formatTime(cumulative[0])} - ${formatTime(cumulative[1])}`,
    `${formatTime(cumulative[1])} - ${formatTime(cumulative[2])}`,
    `${formatTime(cumulative[2])} - ${formatTime(cumulative[3])}`
  ];
  const advice = strategyAdvice(profile);

  personalStrategy.innerHTML = labels.map((label, index) => `
    <article>
      <span>${label}</span>
      <strong>${splitLabels[index]}</strong>
      <p>${advice[index]}</p>
    </article>
  `).join("");
}

function paceSummary() {
  const strategy = [...personalStrategy.querySelectorAll("article")].map((item) => {
    const segment = item.querySelector("span").textContent;
    const time = item.querySelector("strong").textContent;
    const advice = item.querySelector("p").textContent;
    return `${segment}: ${time} — ${advice}`;
  });

  return [
    `800 m tinta: ${fields.split800.textContent}`,
    `Ritm mediu / 200 m: ${fields.pacePer200.textContent}`,
    `Splituri: 200 m ${fields.split200.textContent}, 400 m ${fields.split400.textContent}, 600 m ${fields.split600.textContent}, 800 m ${fields.split800.textContent}`,
    `Proiectii: 400 m ${fields.projection400.textContent}, 600 m ${fields.projection600.textContent}, 1000 m ${fields.projection1000.textContent}`,
    `Reper performanta (${standardGender.selectedOptions[0].textContent}): ${fields.performanceLevel.textContent}; reper cheie ${fields.nextBenchmark.textContent}`,
    `Zone: ${fields.zoneSpeed.textContent}; ${fields.zoneSpecific.textContent}; ${fields.zoneEndurance.textContent}; ${fields.zoneTempo.textContent}; ${fields.zoneEasy.textContent}`,
    `Sesiune sugerata: ${fields.workoutSuggestion.textContent}`,
    "Strategie personalizata:",
    ...strategy
  ].join("\n");
}

function planSummary() {
  const rows = [...weekPlan.querySelectorAll(".day-row")].map((row) => {
    const day = row.querySelector("strong").textContent;
    const text = row.querySelector("p").textContent;
    return `${day}: ${text}`;
  });

  return [
    `Plan 800 m: ${athleteLevel.selectedOptions[0].textContent}, ${seasonPhase.selectedOptions[0].textContent}, ${sessionsPerWeek.value} sedinte/saptamana`,
    ...rows
  ].join("\n");
}

function updateCalculator() {
  const total = parseTime(targetTime.value);
  if (!total || total < 60 || total > 360) {
    targetTime.setAttribute("aria-invalid", "true");
    return;
  }

  targetTime.removeAttribute("aria-invalid");

  const splits = splitPlan(total, raceProfile.value);
  const cumulative = splits.reduce((acc, split, index) => {
    acc.push((acc[index - 1] || 0) + split);
    return acc;
  }, []);

  fields.heroTarget.textContent = formatTime(total);
  fields.pacePer200.textContent = (total / 4).toFixed(2);
  fields.split200.textContent = formatTime(cumulative[0]);
  fields.split400.textContent = formatTime(cumulative[1]);
  fields.split600.textContent = formatTime(cumulative[2]);
  fields.split800.textContent = formatTime(total);
  fields.projection400.textContent = formatTime(total * 0.48);
  fields.projection600.textContent = formatTime(total * 0.725);
  fields.projection1000.textContent = formatTime(total * 1.29);
  fields.workoutSuggestion.textContent = workoutFor(total, trainingFocus.value);

  const benchmark = performanceBenchmark(total, standardGender.value);
  fields.performanceLevel.textContent = benchmark.label;
  fields.nextBenchmark.textContent = `${benchmark.next} — ${benchmark.note}`;

  const zones = trainingZones(total);
  fields.zoneSpeed.textContent = zones.speed;
  fields.zoneSpecific.textContent = zones.specific;
  fields.zoneEndurance.textContent = zones.endurance;
  fields.zoneTempo.textContent = zones.tempo;
  fields.zoneEasy.textContent = zones.easy;

  renderStrategy(cumulative, raceProfile.value);

  syncUrlState();
}

function timeOffset(timeValue, minutesDelta) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  const total = (hours * 60 + minutes + minutesDelta + 24 * 60) % (24 * 60);
  const hh = String(Math.floor(total / 60)).padStart(2, "0");
  const mm = String(total % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

function warmupSteps(type) {
  const plans = {
    race: [
      [-55, "Sosire si verificare", "Numar, pantofi, hidratare mica, fara stat inutil in picioare."],
      [-45, "Jogging usor", "10-14 min progresiv, respiratie linistita."],
      [-30, "Mobilitate + drill-uri", "Sold, glezna, skipping, pendulari, 2-3 exercitii bine cunoscute."],
      [-18, "Accelerari", "3-4 x 60-80 m progresiv, ultima aproape de ritmul de cursa."],
      [-10, "Camera de apel / zona start", "Bluza pe tine, respiratie, scenariu tactic in 2 propozitii."],
      [-3, "Activare finala", "2 porniri scurte, postura inalta, primii 200 m clari in minte."]
    ],
    test: [
      [-45, "Jogging usor", "8-12 min, suficient cat sa intri cald fara consum."],
      [-30, "Mobilitate dinamica", "Drill-uri simple si 2 linii relaxate."],
      [-18, "Ritm de control", "2 x 80 m progresiv, pauza completa."],
      [-8, "Pregatire start", "Noteaza obiectivul testului: ritm, tehnica sau toleranta."],
      [-2, "Pornire", "O singura intentie: executie curata, nu sprint din primul pas."]
    ],
    workout: [
      [-35, "Jogging + mobilitate", "10 min usor, apoi glezna/sold/spate."],
      [-22, "Drill-uri", "Skipping, pendulari, alergare cu genunchiul jos, contact scurt."],
      [-12, "Linii", "3 x 80 m progresiv, revenire completa."],
      [-5, "Pauza activa", "Verifica ritmul primei repetari si durata pauzelor."],
      [0, "Prima repetare", "Incepe controlat: calitatea decide sedinta." ]
    ]
  };
  return plans[type];
}

function updateWarmup() {
  const start = raceStartTime.value || "18:30";
  const steps = warmupSteps(warmupType.value);
  warmupPlan.innerHTML = steps.map(([offset, title, text]) => `
    <div class="warmup-row">
      <strong>${timeOffset(start, offset)}</strong>
      <div><span>${title}</span><p>${text}</p></div>
    </div>
  `).join("");
  syncUrlState();
}

function warmupSummary() {
  const rows = [...warmupPlan.querySelectorAll(".warmup-row")].map((row) => {
    const time = row.querySelector("strong").textContent;
    const title = row.querySelector("span").textContent;
    const text = row.querySelector("p").textContent;
    return `${time} — ${title}: ${text}`;
  });

  return [
    `Incalzire 800 m: ${warmupType.selectedOptions[0].textContent}, start ${raceStartTime.value}`,
    ...rows
  ].join("\n");
}

function readChecklistState() {
  try {
    return JSON.parse(window.localStorage.getItem(checklistStorageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function saveChecklistState(state) {
  try {
    window.localStorage.setItem(checklistStorageKey, JSON.stringify(state));
  } catch (error) {
    // Local storage can be unavailable in private contexts; the checklist still works during the session.
  }
}

function updateChecklistProgress() {
  const checked = [...raceChecklist.querySelectorAll("input[type='checkbox']")].filter((item) => item.checked);
  const next = [...raceChecklist.querySelectorAll("input[type='checkbox']")].find((item) => !item.checked);

  fields.checklistProgress.textContent = `${checked.length}/${checklistItems.length}`;
  fields.checklistNext.textContent = next
    ? `Urmatorul pas: ${next.closest("label").querySelector("strong").textContent}.`
    : "Checklist complet. Ramane doar executia cursei si feedback-ul.";
}

function renderChecklist() {
  const state = readChecklistState();
  raceChecklist.innerHTML = checklistItems.map((item) => `
    <label class="checklist-item">
      <input type="checkbox" value="${item.id}" ${state[item.id] ? "checked" : ""}>
      <span><strong>${item.title}</strong><em>${item.text}</em></span>
    </label>
  `).join("");
  updateChecklistProgress();
}

function checklistSummary() {
  const lines = [...raceChecklist.querySelectorAll(".checklist-item")].map((item) => {
    const marker = item.querySelector("input").checked ? "[x]" : "[ ]";
    const title = item.querySelector("strong").textContent;
    const text = item.querySelector("em").textContent;
    return `${marker} ${title}: ${text}`;
  });

  return ["Checklist ziua cursei 800 m", ...lines].join("\n");
}

function resetChecklistState() {
  saveChecklistState({});
  const manualBox = document.querySelector("#checklistStatusManualCopy");
  if (manualBox) {
    manualBox.hidden = true;
    manualBox.value = "";
  }
  renderChecklist();
  setStatus(checklistStatus, "Checklistul a fost resetat.");
}

function testEstimateConfig(type) {
  return {
    300: {
      factor: 2.95,
      confidence: "medie",
      min: 32,
      max: 58,
      advice: "Testul de 300 m arata viteza utilizabila. Daca estimarea pare optimista, lipseste probabil rezistenta specifica pe 500-700 m."
    },
    500: {
      factor: 1.56,
      confidence: "buna",
      min: 65,
      max: 105,
      advice: "500 m controlat este un reper bun pentru zona grea a cursei. Urmareste daca tehnica ramane stabila dupa 350 m."
    },
    600: {
      factor: 1.36,
      confidence: "buna",
      min: 78,
      max: 135,
      advice: "600 m este aproape de specificul probei. Daca ultimii 150 m cad mult, obiectivul de 800 m trebuie ajustat conservator."
    },
    1000: {
      factor: 0.76,
      confidence: "medie",
      min: 145,
      max: 230,
      advice: "1000 m arata sprijinul aerob si controlul. Pentru 800 m mai conteaza viteza si toleranta la schimbari de ritm."
    }
  }[type];
}

function updateTestEstimate() {
  const seconds = parseTime(testTime.value);
  const config = testEstimateConfig(testType.value);

  if (!seconds || seconds < config.min || seconds > config.max) {
    testTime.setAttribute("aria-invalid", "true");
    fields.estimated800.textContent = "--";
    fields.estimateConfidence.textContent = "verifica timpul";
    fields.estimateAdvice.textContent = `Pentru testul selectat, introdu un timp realist intre ${formatTime(config.min)} si ${formatTime(config.max)}.`;
    syncUrlState();
    return;
  }

  testTime.removeAttribute("aria-invalid");
  const estimate = seconds * config.factor;
  fields.estimated800.textContent = formatTime(estimate);
  fields.estimateConfidence.textContent = config.confidence;
  fields.estimateAdvice.textContent = config.advice;
  syncUrlState();
}

function testEstimateSummary() {
  return [
    `Estimator 800 m din test: ${testType.selectedOptions[0].textContent}`,
    `Timp test: ${testTime.value}`,
    `Estimare 800 m: ${fields.estimated800.textContent}`,
    `Incredere: ${fields.estimateConfidence.textContent}`,
    `Interpretare: ${fields.estimateAdvice.textContent}`
  ].join("\n");
}

function updatePlan() {
  const level = athleteLevel.value;
  const phase = seasonPhase.value;
  const sessions = Math.max(3, Math.min(7, Number(sessionsPerWeek.value) || 5));
  sessionsPerWeek.value = sessions;

  const basePlan = planTemplates[phase][level];
  const activeDays = new Set();
  const dayOrder = [0, 1, 2, 3, 4, 5, 6].slice(0, sessions);
  dayOrder.forEach((day) => activeDays.add(day));

  weekPlan.innerHTML = dayNames.map((day, index) => {
    const text = activeDays.has(index) ? basePlan[index] : "Liber / recuperare";
    return `<div class="day-row"><strong>${day}</strong><p>${text}</p></div>`;
  }).join("");
  syncUrlState();
}

function renderWorkouts(filter = "all") {
  const visible = filter === "all" ? workouts : workouts.filter((workout) => workout.category === filter);
  workoutGrid.innerHTML = visible.map((workout) => `
    <article class="workout">
      <h3>${workout.title}</h3>
      <p>${workout.text}</p>
      <div class="workout-meta">
        <span>${workout.category}</span>
        <span>incarcare ${workout.load}</span>
      </div>
    </article>
  `).join("");
}

function enableUrlSync(callback) {
  return (event) => {
    stateSyncEnabled = true;
    callback(event);
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  stateSyncEnabled = true;
  updateCalculator();
});

targetTime.addEventListener("input", enableUrlSync(updateCalculator));
raceProfile.addEventListener("change", enableUrlSync(updateCalculator));
trainingFocus.addEventListener("change", enableUrlSync(updateCalculator));
standardGender.addEventListener("change", enableUrlSync(updateCalculator));
plannerForm.addEventListener("input", enableUrlSync(updatePlan));
plannerForm.addEventListener("change", enableUrlSync(updatePlan));
warmupForm.addEventListener("input", enableUrlSync(updateWarmup));
warmupForm.addEventListener("change", enableUrlSync(updateWarmup));
testPredictorForm.addEventListener("input", enableUrlSync(updateTestEstimate));
testPredictorForm.addEventListener("change", enableUrlSync(updateTestEstimate));
copyPace.addEventListener("click", () => copyText(paceSummary(), paceStatus, "Rezultatul a fost copiat."));
sharePace.addEventListener("click", () => copyText(buildSettingsUrl().toString(), paceStatus, "Linkul cu setarile a fost copiat."));
copyPlan.addEventListener("click", () => copyText(planSummary(), planStatus, "Planul saptamanal a fost copiat."));
copyWarmup.addEventListener("click", () => copyText(warmupSummary(), warmupStatus, "Incalzirea a fost copiata."));
copyChecklist.addEventListener("click", () => copyText(checklistSummary(), checklistStatus, "Checklistul a fost copiat."));
resetChecklist.addEventListener("click", resetChecklistState);
copyTestEstimate.addEventListener("click", () => copyText(testEstimateSummary(), testStatus, "Estimarea a fost copiata."));
raceChecklist.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;
  const state = readChecklistState();
  state[event.target.value] = event.target.checked;
  saveChecklistState(state);
  updateChecklistProgress();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderWorkouts(button.dataset.filter);
  });
});

restoreFromUrl();
updateCalculator();
updatePlan();
updateWarmup();
renderChecklist();
updateTestEstimate();
renderWorkouts();

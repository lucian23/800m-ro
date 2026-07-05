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
const goalLadderForm = document.querySelector("#goalLadderForm");
const currentSeasonTime = document.querySelector("#currentSeasonTime");
const goalWeeks = document.querySelector("#goalWeeks");
const goalMilestones = document.querySelector("#goalMilestones");
const loadMonitorForm = document.querySelector("#loadMonitorForm");
const easyKm = document.querySelector("#easyKm");
const qualityKm = document.querySelector("#qualityKm");
const hardSessions = document.querySelector("#hardSessions");
const strengthSessions = document.querySelector("#strengthSessions");
const sleepHours = document.querySelector("#sleepHours");
const warmupForm = document.querySelector("#warmupForm");
const raceStartTime = document.querySelector("#raceStartTime");
const warmupType = document.querySelector("#warmupType");
const warmupPlan = document.querySelector("#warmupPlan");
const fuelPlanForm = document.querySelector("#fuelPlanForm");
const athleteWeight = document.querySelector("#athleteWeight");
const raceTemperature = document.querySelector("#raceTemperature");
const stomachSensitivity = document.querySelector("#stomachSensitivity");
const raceChecklist = document.querySelector("#raceChecklist");
const athleteSheetForm = document.querySelector("#athleteSheetForm");
const athleteName = document.querySelector("#athleteName");
const competitionName = document.querySelector("#competitionName");
const sheetPreview = document.querySelector("#sheetPreview");
const workoutGrid = document.querySelector("#workoutGrid");
const testPredictorForm = document.querySelector("#testPredictorForm");
const testType = document.querySelector("#testType");
const testTime = document.querySelector("#testTime");
const raceReviewForm = document.querySelector("#raceReviewForm");
const actualResult = document.querySelector("#actualResult");
const raceSplit400 = document.querySelector("#raceSplit400");
const recoveryPlanForm = document.querySelector("#recoveryPlanForm");
const sorenessLevel = document.querySelector("#sorenessLevel");
const postRaceSleep = document.querySelector("#postRaceSleep");
const nextRaceDays = document.querySelector("#nextRaceDays");
const nextSessionForm = document.querySelector("#nextSessionForm");
const nextSessionPriority = document.querySelector("#nextSessionPriority");
const daysAfterRace = document.querySelector("#daysAfterRace");
const personalStrategy = document.querySelector("#personalStrategy");
const pacingScenarioForm = document.querySelector("#pacingScenarioForm");
const pacingScenarioType = document.querySelector("#pacingScenarioType");
const firstLapTarget = document.querySelector("#firstLapTarget");
const filterButtons = document.querySelectorAll(".filter");
const copyPace = document.querySelector("#copyPace");
const sharePace = document.querySelector("#sharePace");
const copyPlan = document.querySelector("#copyPlan");
const copyGoalLadder = document.querySelector("#copyGoalLadder");
const copyLoadMonitor = document.querySelector("#copyLoadMonitor");
const copyWarmup = document.querySelector("#copyWarmup");
const copyFuelPlan = document.querySelector("#copyFuelPlan");
const copyChecklist = document.querySelector("#copyChecklist");
const resetChecklist = document.querySelector("#resetChecklist");
const copyAthleteSheet = document.querySelector("#copyAthleteSheet");
const printAthleteSheet = document.querySelector("#printAthleteSheet");
const copyPacingScenario = document.querySelector("#copyPacingScenario");
const copyTestEstimate = document.querySelector("#copyTestEstimate");
const copyRaceReview = document.querySelector("#copyRaceReview");
const copyRecoveryPlan = document.querySelector("#copyRecoveryPlan");
const copyNextSession = document.querySelector("#copyNextSession");
const paceStatus = document.querySelector("#paceStatus");
const planStatus = document.querySelector("#planStatus");
const goalStatus = document.querySelector("#goalStatus");
const loadStatus = document.querySelector("#loadStatus");
const warmupStatus = document.querySelector("#warmupStatus");
const fuelStatus = document.querySelector("#fuelStatus");
const checklistStatus = document.querySelector("#checklistStatus");
const sheetStatus = document.querySelector("#sheetStatus");
const pacingScenarioStatus = document.querySelector("#pacingScenarioStatus");
const testStatus = document.querySelector("#testStatus");
const raceReviewStatus = document.querySelector("#raceReviewStatus");
const recoveryStatus = document.querySelector("#recoveryStatus");
const nextSessionStatus = document.querySelector("#nextSessionStatus");
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
  goalGap: document.querySelector("#goalGap"),
  weeklyGain: document.querySelector("#weeklyGain"),
  goalAdvice: document.querySelector("#goalAdvice"),
  totalKm: document.querySelector("#totalKm"),
  qualityShare: document.querySelector("#qualityShare"),
  loadRisk: document.querySelector("#loadRisk"),
  loadAdvice: document.querySelector("#loadAdvice"),
  mainMealTime: document.querySelector("#mainMealTime"),
  mainMealText: document.querySelector("#mainMealText"),
  snackTime: document.querySelector("#snackTime"),
  snackText: document.querySelector("#snackText"),
  waterTarget: document.querySelector("#waterTarget"),
  waterText: document.querySelector("#waterText"),
  fuelAdvice: document.querySelector("#fuelAdvice"),
  checklistProgress: document.querySelector("#checklistProgress"),
  checklistNext: document.querySelector("#checklistNext"),
  estimated800: document.querySelector("#estimated800"),
  estimateConfidence: document.querySelector("#estimateConfidence"),
  estimateAdvice: document.querySelector("#estimateAdvice"),
  raceDelta: document.querySelector("#raceDelta"),
  lapBalance: document.querySelector("#lapBalance"),
  raceReviewAdvice: document.querySelector("#raceReviewAdvice"),
  recoveryDay1: document.querySelector("#recoveryDay1"),
  recoveryDay1Text: document.querySelector("#recoveryDay1Text"),
  recoveryDay2: document.querySelector("#recoveryDay2"),
  recoveryDay2Text: document.querySelector("#recoveryDay2Text"),
  nextQualityDay: document.querySelector("#nextQualityDay"),
  nextQualityText: document.querySelector("#nextQualityText"),
  recoveryAdvice: document.querySelector("#recoveryAdvice"),
  nextSessionTitle: document.querySelector("#nextSessionTitle"),
  nextSessionDetails: document.querySelector("#nextSessionDetails"),
  nextSessionVolume: document.querySelector("#nextSessionVolume"),
  nextSessionVolumeText: document.querySelector("#nextSessionVolumeText"),
  nextSessionAdvice: document.querySelector("#nextSessionAdvice"),
  scenarioFirstLap: document.querySelector("#scenarioFirstLap"),
  scenarioSecondLap: document.querySelector("#scenarioSecondLap"),
  scenarioBalance: document.querySelector("#scenarioBalance"),
  scenarioAdvice: document.querySelector("#scenarioAdvice"),
  scenarioSegments: document.querySelector("#scenarioSegments")
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
  url.searchParams.set("actual", currentSeasonTime.value.trim());
  url.searchParams.set("sapt", goalWeeks.value);
  url.searchParams.set("easy", easyKm.value);
  url.searchParams.set("quality", qualityKm.value);
  url.searchParams.set("hard", hardSessions.value);
  url.searchParams.set("strength", strengthSessions.value);
  url.searchParams.set("sleep", sleepHours.value);
  url.searchParams.set("start", raceStartTime.value);
  url.searchParams.set("incalzire", warmupType.value);
  url.searchParams.set("kg", athleteWeight.value);
  url.searchParams.set("temp", raceTemperature.value);
  url.searchParams.set("stomac", stomachSensitivity.value);
  url.searchParams.set("test", testType.value);
  url.searchParams.set("testt", testTime.value.trim());
  url.searchParams.set("rezultat", actualResult.value.trim());
  url.searchParams.set("s400", raceSplit400.value.trim());
  url.searchParams.set("oboseala", sorenessLevel.value);
  url.searchParams.set("somnpost", postRaceSleep.value);
  url.searchParams.set("urmator", nextRaceDays.value);
  url.searchParams.set("prioritate", nextSessionPriority.value);
  url.searchParams.set("dupa", daysAfterRace.value);
  url.searchParams.set("sportiv", athleteName.value.trim());
  url.searchParams.set("concurs", competitionName.value.trim());
  url.searchParams.set("pacing", pacingScenarioType.value);
  url.searchParams.set("p400", firstLapTarget.value.trim());
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
    currentSeasonTime: params.get("actual"),
    goalWeeks: params.get("sapt"),
    easyKm: params.get("easy"),
    qualityKm: params.get("quality"),
    hardSessions: params.get("hard"),
    strengthSessions: params.get("strength"),
    sleepHours: params.get("sleep"),
    raceStartTime: params.get("start"),
    warmupType: params.get("incalzire"),
    athleteWeight: params.get("kg"),
    raceTemperature: params.get("temp"),
    stomachSensitivity: params.get("stomac"),
    testType: params.get("test"),
    testTime: params.get("testt"),
    actualResult: params.get("rezultat"),
    raceSplit400: params.get("s400"),
    sorenessLevel: params.get("oboseala"),
    postRaceSleep: params.get("somnpost"),
    nextRaceDays: params.get("urmator"),
    nextSessionPriority: params.get("prioritate"),
    daysAfterRace: params.get("dupa"),
    athleteName: params.get("sportiv"),
    competitionName: params.get("concurs"),
    pacingScenarioType: params.get("pacing"),
    firstLapTarget: params.get("p400")
  };

  if (values.targetTime) targetTime.value = values.targetTime;
  if ([...raceProfile.options].some((option) => option.value === values.raceProfile)) raceProfile.value = values.raceProfile;
  if ([...trainingFocus.options].some((option) => option.value === values.trainingFocus)) trainingFocus.value = values.trainingFocus;
  if ([...standardGender.options].some((option) => option.value === values.standardGender)) standardGender.value = values.standardGender;
  if ([...athleteLevel.options].some((option) => option.value === values.athleteLevel)) athleteLevel.value = values.athleteLevel;
  if ([...seasonPhase.options].some((option) => option.value === values.seasonPhase)) seasonPhase.value = values.seasonPhase;
  if (values.sessionsPerWeek) sessionsPerWeek.value = values.sessionsPerWeek;
  if (values.currentSeasonTime) currentSeasonTime.value = values.currentSeasonTime;
  if (values.goalWeeks) goalWeeks.value = values.goalWeeks;
  if (values.easyKm) easyKm.value = values.easyKm;
  if (values.qualityKm) qualityKm.value = values.qualityKm;
  if (values.hardSessions) hardSessions.value = values.hardSessions;
  if (values.strengthSessions) strengthSessions.value = values.strengthSessions;
  if (values.sleepHours) sleepHours.value = values.sleepHours;
  if (/^\d{2}:\d{2}$/.test(values.raceStartTime || "")) raceStartTime.value = values.raceStartTime;
  if ([...warmupType.options].some((option) => option.value === values.warmupType)) warmupType.value = values.warmupType;
  if (values.athleteWeight) athleteWeight.value = values.athleteWeight;
  if (values.raceTemperature) raceTemperature.value = values.raceTemperature;
  if ([...stomachSensitivity.options].some((option) => option.value === values.stomachSensitivity)) stomachSensitivity.value = values.stomachSensitivity;
  if ([...testType.options].some((option) => option.value === values.testType)) testType.value = values.testType;
  if (values.testTime) testTime.value = values.testTime;
  if (values.actualResult) actualResult.value = values.actualResult;
  if (values.raceSplit400) raceSplit400.value = values.raceSplit400;
  if ([...sorenessLevel.options].some((option) => option.value === values.sorenessLevel)) sorenessLevel.value = values.sorenessLevel;
  if (values.postRaceSleep) postRaceSleep.value = values.postRaceSleep;
  if (values.nextRaceDays) nextRaceDays.value = values.nextRaceDays;
  if ([...nextSessionPriority.options].some((option) => option.value === values.nextSessionPriority)) nextSessionPriority.value = values.nextSessionPriority;
  if (values.daysAfterRace) daysAfterRace.value = values.daysAfterRace;
  if (values.athleteName) athleteName.value = values.athleteName;
  if (values.competitionName) competitionName.value = values.competitionName;
  if ([...pacingScenarioType.options].some((option) => option.value === values.pacingScenarioType)) pacingScenarioType.value = values.pacingScenarioType;
  if (values.firstLapTarget) firstLapTarget.value = values.firstLapTarget;
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

function updateFuelPlan() {
  const weight = clampNumber(athleteWeight, 35, 110, 65);
  const temperature = clampNumber(raceTemperature, 0, 42, 24);
  const sensitive = stomachSensitivity.value === "sensitive";
  const hotWeather = temperature >= 27;
  const veryHotWeather = temperature >= 32;
  const baseWater = Math.round((weight * (hotWeather ? 8 : 6)) / 50) * 50;
  const water = Math.max(300, Math.min(900, baseWater + (veryHotWeather ? 150 : 0)));

  fields.mainMealTime.textContent = timeOffset(raceStartTime.value || "18:30", sensitive ? -240 : -210);
  fields.snackTime.textContent = timeOffset(raceStartTime.value || "18:30", sensitive ? -100 : -75);
  fields.waterTarget.textContent = `${water} ml`;
  fields.mainMealText.textContent = sensitive
    ? "Masa foarte simpla: orez/paste/paine, putina proteina, fara grasimi multe si fara fibre."
    : "Carbohidrati simpli, proteina usoara, putine grasimi si fara experimente.";
  fields.snackText.textContent = sensitive
    ? "Gustare mica si testata: banana sau cateva guri de baton simplu. Evita lactatele."
    : "Banana, baton simplu, paine cu miere sau covrig; doar variante deja testate.";
  fields.waterText.textContent = hotWeather
    ? "In inghitituri mici. Include electroliti daca transpiri mult sau este soare puternic."
    : "In inghitituri mici, nu tot odata. Ultimele guri cu 10-15 min inainte de start.";
  fields.fuelAdvice.textContent = veryHotWeather
    ? "Temperatura ridicata: cauta umbra, racire usoara si nu creste incalzirea peste necesar."
    : sensitive
      ? "Cu stomac sensibil, prioritatea este simplitatea: mai putin, mai devreme, doar alimente cunoscute."
      : "Pastreaza doar alimente testate anterior si evita bauturile foarte dulci chiar inainte de start.";
  syncUrlState();
}

function fuelPlanSummary() {
  return [
    "Plan hidratare si alimentatie 800 m",
    `Start: ${raceStartTime.value}`,
    `Greutate: ${athleteWeight.value} kg`,
    `Temperatura: ${raceTemperature.value} °C`,
    `Sensibilitate stomac: ${stomachSensitivity.selectedOptions[0].textContent}`,
    `Masa principala (${fields.mainMealTime.textContent}): ${fields.mainMealText.textContent}`,
    `Gustare (${fields.snackTime.textContent}): ${fields.snackText.textContent}`,
    `Apa pana la start: ${fields.waterTarget.textContent} — ${fields.waterText.textContent}`,
    `Atentie: ${fields.fuelAdvice.textContent}`
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

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function athleteSheetSummary() {
  const checkedCount = [...raceChecklist.querySelectorAll("input[type='checkbox']")].filter((item) => item.checked).length;
  const milestoneText = [...goalMilestones.querySelectorAll("div")].map((item) => `${item.querySelector("strong").textContent} ${item.querySelector("span").textContent}`);
  return [
    `Fisa 800 m — ${athleteName.value.trim() || "Sportiv"}`,
    `Concurs / obiectiv: ${competitionName.value.trim() || "Obiectiv sezon"}`,
    `Tinta: ${targetTime.value} | ritm mediu 200 m: ${fields.pacePer200.textContent}`,
    `Splituri: 200 m ${fields.split200.textContent}, 400 m ${fields.split400.textContent}, 600 m ${fields.split600.textContent}, 800 m ${fields.split800.textContent}`,
    `Nivel estimat: ${fields.performanceLevel.textContent} | ${fields.nextBenchmark.textContent}`,
    `Scara sezonului: actual ${currentSeasonTime.value}, ${goalWeeks.value} saptamani, ${fields.weeklyGain.textContent}`,
    ...milestoneText,
    `Incarcare saptamanala: ${fields.totalKm.textContent}, calitate ${fields.qualityShare.textContent}, risc ${fields.loadRisk.textContent}`,
    `Plan saptamana: ${athleteLevel.selectedOptions[0].textContent}, ${seasonPhase.selectedOptions[0].textContent}, ${sessionsPerWeek.value} sedinte`,
    `Incalzire: ${warmupType.selectedOptions[0].textContent}, start ${raceStartTime.value}`,
    `Hidratare/alimentatie: masa ${fields.mainMealTime.textContent}, gustare ${fields.snackTime.textContent}, apa ${fields.waterTarget.textContent}`,
    `Checklist: ${checkedCount}/${checklistItems.length} bifate`,
    `Pacing: primul 400 m ${fields.scenarioFirstLap.textContent}, turul doi ${fields.scenarioSecondLap.textContent}, balans ${fields.scenarioBalance.textContent}`,
    `Analiza cursa: ${fields.raceDelta.textContent}; ${fields.lapBalance.textContent}`,
    `Recuperare: ${fields.recoveryDay1.textContent}, ${fields.recoveryDay2.textContent}, prima calitate ${fields.nextQualityDay.textContent}`,
    `Urmatoarea sedinta: ${fields.nextSessionTitle.textContent} — ${fields.nextSessionDetails.textContent}`,
    `Concluzie: ${fields.raceReviewAdvice.textContent}`
  ].join("\n");
}

function renderAthleteSheet() {
  const lines = athleteSheetSummary().split("\n");
  sheetPreview.innerHTML = `
    <h3>${escapeHtml(lines[0])}</h3>
    <p>${escapeHtml(lines[1])}</p>
    <ul>${lines.slice(2).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
  `;
  syncUrlState();
}

function printSheet() {
  renderAthleteSheet();
  window.print();
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

function signedSeconds(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}s`;
}

function scenarioFirstLapFor(total, type) {
  const factors = {
    balanced: 0.495,
    aggressive: 0.485,
    conservative: 0.505
  };
  return total * (factors[type] || 0.495);
}

function pacingScenarioAdvice(balance, firstLap, total) {
  const firstLapPercent = firstLap / total;
  if (balance > 5) return "Scenariu foarte agresiv: primul tur consuma mult. Foloseste-l doar daca forma este confirmata si pozitia cere acest risc.";
  if (balance > 2.2) return "Prim tur rapid: realist pentru multi alergatori de 800 m, dar zona 500-700 m devine decisiva.";
  if (balance >= 0) return "Balans realist pentru 800 m: primul tur pune pozitie, dar lasa loc pentru executie.";
  if (firstLapPercent > 0.51) return "Scenariu conservator: bun pentru finish progresiv, dar exista risc sa ramai blocat sau prea departe la 400 m.";
  return "Finish foarte progresiv: ai nevoie de incredere, spatiu si schimbare de ritm devreme dupa 500 m.";
}

function updatePacingScenario() {
  const target = parseTime(targetTime.value);
  if (!target || target < 60 || target > 360) {
    firstLapTarget.setAttribute("aria-invalid", "true");
    fields.scenarioFirstLap.textContent = "--";
    fields.scenarioSecondLap.textContent = "--";
    fields.scenarioBalance.textContent = "verifica tinta";
    fields.scenarioAdvice.textContent = "Introdu o tinta valida in calculatorul principal.";
    fields.scenarioSegments.innerHTML = "";
    syncUrlState();
    return;
  }

  let firstLap = pacingScenarioType.value === "custom"
    ? parseTime(firstLapTarget.value)
    : scenarioFirstLapFor(target, pacingScenarioType.value);

  if (pacingScenarioType.value !== "custom") {
    firstLapTarget.value = formatTime(firstLap);
  }

  if (!firstLap || firstLap < target * 0.43 || firstLap > target * 0.57) {
    firstLapTarget.setAttribute("aria-invalid", "true");
    fields.scenarioFirstLap.textContent = "--";
    fields.scenarioSecondLap.textContent = "--";
    fields.scenarioBalance.textContent = "verifica splitul";
    fields.scenarioAdvice.textContent = "Splitul de 400 m trebuie sa fie compatibil cu tinta finala.";
    fields.scenarioSegments.innerHTML = "";
    syncUrlState();
    return;
  }

  firstLapTarget.removeAttribute("aria-invalid");
  const secondLap = target - firstLap;
  const balance = secondLap - firstLap;
  const first200 = firstLap / 2 - 0.25;
  const second200 = firstLap;
  const third200 = firstLap + secondLap / 2 - 0.15;
  const finish = target;

  fields.scenarioFirstLap.textContent = formatTime(firstLap);
  fields.scenarioSecondLap.textContent = formatTime(secondLap);
  fields.scenarioBalance.textContent = signedSeconds(balance);
  fields.scenarioAdvice.textContent = pacingScenarioAdvice(balance, firstLap, target);
  fields.scenarioSegments.innerHTML = [
    ["200 m", formatTime(first200), "pozitie fara sprint prelungit"],
    ["400 m", formatTime(second200), "control si economie"],
    ["600 m", formatTime(third200), "decizie tactica"],
    ["800 m", formatTime(finish), "finish complet"]
  ].map(([label, time, note]) => `<div><strong>${label}</strong><span>${time}</span><em>${note}</em></div>`).join("");
  syncUrlState();
}

function pacingScenarioSummary() {
  const segments = [...fields.scenarioSegments.querySelectorAll("div")].map((item) => {
    const label = item.querySelector("strong").textContent;
    const time = item.querySelector("span").textContent;
    const note = item.querySelector("em").textContent;
    return `${label}: ${time} — ${note}`;
  });

  return [
    "Simulator pacing 800 m",
    `Tinta: ${targetTime.value}`,
    `Model: ${pacingScenarioType.selectedOptions[0].textContent}`,
    `Primul 400 m: ${fields.scenarioFirstLap.textContent}`,
    `Turul doi necesar: ${fields.scenarioSecondLap.textContent}`,
    `Balans: ${fields.scenarioBalance.textContent}`,
    `Citire tactica: ${fields.scenarioAdvice.textContent}`,
    ...segments
  ].join("\n");
}

function raceReviewAdvice(delta, balance) {
  const resultPart = delta <= -0.2
    ? "Ai alergat sub tinta; pastreaza structura si cauta ajustari mici, nu schimbari radicale."
    : delta <= 0.5
      ? "Ai fost practic pe tinta; prioritatea este repetabilitatea si executia sub presiune."
      : delta <= 2.5
        ? "Ai fost aproape de tinta; cauta 1-2 secunde prin pacing mai curat si final mai devreme pregatit."
        : "Tinta a fost peste forma zilei; recalibreaza obiectivul sau construieste inca 2-3 saptamani de specific.";

  const pacingPart = balance > 5
    ? "Turul doi a cazut mult: primul 400 m a fost probabil prea agresiv pentru ziua respectiva."
    : balance > 2
      ? "Pacing usor pozitiv: acceptabil la 800 m, dar zona 500-700 m trebuie pregatita mai bine."
      : balance < -1
        ? "Finish progresiv: ai avut rezerve; poti testa o lansare mai ferma sau o mutare mai devreme."
        : "Balans bun intre tururi: executia a fost controlata si usor de repetat.";

  return `${resultPart} ${pacingPart}`;
}

function updateRaceReview() {
  const target = parseTime(targetTime.value);
  const actual = parseTime(actualResult.value);
  const firstLap = parseTime(raceSplit400.value);

  if (!target || !actual || !firstLap || actual < 60 || actual > 360 || firstLap < actual * 0.42 || firstLap > actual * 0.62) {
    if (!actual || actual < 60 || actual > 360) {
      actualResult.setAttribute("aria-invalid", "true");
    } else {
      actualResult.removeAttribute("aria-invalid");
    }
    if (!firstLap || !actual || firstLap < actual * 0.42 || firstLap > actual * 0.62) {
      raceSplit400.setAttribute("aria-invalid", "true");
    } else {
      raceSplit400.removeAttribute("aria-invalid");
    }
    fields.raceDelta.textContent = "--";
    fields.lapBalance.textContent = "verifica datele";
    fields.raceReviewAdvice.textContent = "Introdu un rezultat final realist si un split de 400 m compatibil cu timpul total.";
    syncUrlState();
    return;
  }

  actualResult.removeAttribute("aria-invalid");
  raceSplit400.removeAttribute("aria-invalid");
  const secondLap = actual - firstLap;
  const delta = actual - target;
  const balance = secondLap - firstLap;
  fields.raceDelta.textContent = signedSeconds(delta);
  fields.lapBalance.textContent = `${formatTime(firstLap)} / ${formatTime(secondLap)} (${signedSeconds(balance)})`;
  fields.raceReviewAdvice.textContent = raceReviewAdvice(delta, balance);
  syncUrlState();
}

function raceReviewSummary() {
  return [
    `Analiza cursa 800 m`,
    `Tinta: ${targetTime.value}`,
    `Rezultat: ${actualResult.value}`,
    `Split 400 m: ${raceSplit400.value}`,
    `Abatere: ${fields.raceDelta.textContent}`,
    `Balans tururi: ${fields.lapBalance.textContent}`,
    `Concluzie: ${fields.raceReviewAdvice.textContent}`
  ].join("\n");
}

function updateRecoveryPlan() {
  const sleep = clampNumber(postRaceSleep, 4, 10, 7.5);
  const days = clampNumber(nextRaceDays, 1, 28, 7);
  const highStressRace = fields.raceDelta.textContent.startsWith("+") && parseFloat(fields.raceDelta.textContent) > 2.5;
  const soreness = sorenessLevel.value;
  let qualityDelay = soreness === "high" ? 5 : soreness === "medium" ? 4 : 3;

  if (sleep < 6.5) qualityDelay += 1;
  if (highStressRace) qualityDelay += 1;
  if (days <= 4) qualityDelay = Math.min(qualityDelay, 3);

  fields.recoveryDay1.textContent = soreness === "high" ? "Revenire pasiva" : "Revenire activa";
  fields.recoveryDay1Text.textContent = soreness === "high"
    ? "Mers, mobilitate usoara, hidratare si masa completa; evita alergarea daca pasul este rigid."
    : "10-20 min foarte usor sau mers, mobilitate, hidratare si masa completa.";
  fields.recoveryDay2.textContent = sleep < 6.5 ? "Somn + usor" : "Usor + mobilitate";
  fields.recoveryDay2Text.textContent = sleep < 6.5
    ? "Prioritizeaza somnul. Alergare scurta doar daca pulsul si picioarele sunt normale."
    : "Alergare usoara si cateva linii relaxate daca picioarele raspund bine.";
  fields.nextQualityDay.textContent = days <= 3 ? "Doar activare" : `Ziua ${qualityDelay}`;
  fields.nextQualityText.textContent = days <= 3
    ? "Urmatorul concurs este aproape: pastreaza doar activare scurta si prospetime."
    : "Ritm controlat, volum redus, fara test maxim si fara repetari pana la epuizare.";
  fields.recoveryAdvice.textContent = soreness === "high" || sleep < 6.5
    ? "Semnele de oboseala sunt mari: urmatoarea sedinta grea trebuie castigata prin rabdare, nu fortata."
    : highStressRace
      ? "Cursa a fost solicitanta fata de tinta: recupereaza 48 h inainte de orice specific serios."
      : "Nu transforma revenirea in al doilea concurs; calitatea revine cand picioarele sunt elastice.";
  syncUrlState();
}

function nextSessionTemplates(priority) {
  return {
    pacing: {
      title: "Ritm controlat",
      details: "4 x 200 m la ritm de 800 m, pauza 3-4 min, toate repetarile egale.",
      volume: "mediu",
      volumeText: "Suficient pentru simtul ritmului, fara sa transformi sedinta in test."
    },
    speed: {
      title: "Viteza relaxata",
      details: "6 x 120-150 m progresiv, recuperare completa, accent pe postura si elasticitate.",
      volume: "mic-mediu",
      volumeText: "Pastreaza viteza nervoasa, nu oboseala metabolica."
    },
    endurance: {
      title: "Rezistenta specifica",
      details: "2 x 500 m controlat sau 3 x 300 m, pauza mare, doar daca recuperarea este buna.",
      volume: "ridicat",
      volumeText: "Sedinta serioasa; foloseste-o rar si departe de urmatorul concurs."
    },
    recovery: {
      title: "Recuperare activa",
      details: "20-30 min foarte usor + mobilitate + 4 linii relaxate daca picioarele raspund bine.",
      volume: "mic",
      volumeText: "Scopul este sa iesi mai proaspat decat ai intrat."
    }
  }[priority];
}

function updateNextSession() {
  const days = clampNumber(daysAfterRace, 1, 14, 4);
  const sleep = Number(postRaceSleep.value) || 7.5;
  const soreness = sorenessLevel.value;
  const daysToRace = Number(nextRaceDays.value) || 7;
  const highRisk = soreness === "high" || sleep < 6.5 || days <= 2;
  const nearRace = daysToRace <= 4;
  let template = nextSessionTemplates(nextSessionPriority.value);

  if (highRisk) template = nextSessionTemplates("recovery");
  if (nearRace && nextSessionPriority.value === "endurance") template = nextSessionTemplates("pacing");

  fields.nextSessionTitle.textContent = template.title;
  fields.nextSessionDetails.textContent = template.details;
  fields.nextSessionVolume.textContent = highRisk ? "redus" : template.volume;
  fields.nextSessionVolumeText.textContent = highRisk
    ? "Semnele de oboseala cer volum redus si iesire din sedinta cu senzatie buna."
    : template.volumeText;
  fields.nextSessionAdvice.textContent = highRisk
    ? "Recuperarea dicteaza sedinta: daca incalzirea nu devine usoara dupa 10-12 minute, opreste calitatea."
    : nearRace
      ? "Concursul este aproape: cauta prospetime, cateva atingeri de ritm si zero repetari duse la limita."
      : "Opreste sedinta daca tehnica scade sau picioarele raman grele la incalzire.";
  syncUrlState();
}

function nextSessionSummary() {
  return [
    "Urmatoarea sedinta 800 m",
    `Prioritate: ${nextSessionPriority.selectedOptions[0].textContent}`,
    `Zile dupa cursa: ${daysAfterRace.value}`,
    `Oboseala: ${sorenessLevel.selectedOptions[0].textContent}; somn ${postRaceSleep.value} h; urmatorul concurs in ${nextRaceDays.value} zile`,
    `Sedinta: ${fields.nextSessionTitle.textContent}`,
    `Detalii: ${fields.nextSessionDetails.textContent}`,
    `Volum: ${fields.nextSessionVolume.textContent} — ${fields.nextSessionVolumeText.textContent}`,
    `Regula: ${fields.nextSessionAdvice.textContent}`
  ].join("\n");
}

function recoveryPlanSummary() {
  return [
    "Plan recuperare dupa cursa 800 m",
    `Oboseala musculara: ${sorenessLevel.selectedOptions[0].textContent}`,
    `Somn dupa cursa: ${postRaceSleep.value} h/noapte`,
    `Zile pana la urmatorul concurs: ${nextRaceDays.value}`,
    `Primele 24 h: ${fields.recoveryDay1.textContent} — ${fields.recoveryDay1Text.textContent}`,
    `48-72 h: ${fields.recoveryDay2.textContent} — ${fields.recoveryDay2Text.textContent}`,
    `Prima calitate: ${fields.nextQualityDay.textContent} — ${fields.nextQualityText.textContent}`,
    `Atentie: ${fields.recoveryAdvice.textContent}`
  ].join("\n");
}

function goalAdviceFor(gap, weeklyGain) {
  if (gap <= 0) return "Tinta este deja atinsa sau mai lenta decat timpul actual. Alege o tinta mai ambitioasa sau foloseste scara pentru mentinere.";
  if (weeklyGain <= 0.35) return "Obiectiv conservator: prioritizeaza continuitatea, tehnica si evitarea accidentarilor.";
  if (weeklyGain <= 0.9) return "Obiectiv realizabil daca progresul vine din consistenta, nu din sedinte fortate.";
  if (weeklyGain <= 1.4) return "Obiectiv ambitios: cere recuperare buna, teste rare si ajustare daca oboseala se acumuleaza.";
  return "Obiectiv foarte agresiv: trateaza-l ca reper motivational si seteaza o tinta intermediara mai sigura.";
}

function updateGoalLadder() {
  const current = parseTime(currentSeasonTime.value);
  const target = parseTime(targetTime.value);
  const weeks = Math.max(4, Math.min(24, Number(goalWeeks.value) || 12));
  goalWeeks.value = weeks;

  if (!current || !target || current < 60 || current > 420 || target < 60 || target > 360) {
    currentSeasonTime.setAttribute("aria-invalid", "true");
    fields.goalGap.textContent = "--";
    fields.weeklyGain.textContent = "verifica datele";
    fields.goalAdvice.textContent = "Introdu un timp actual realist si o tinta valida in calculator.";
    goalMilestones.innerHTML = "";
    syncUrlState();
    return;
  }

  currentSeasonTime.removeAttribute("aria-invalid");
  const gap = current - target;
  const weeklyGain = gap / weeks;
  fields.goalGap.textContent = gap > 0 ? `${gap.toFixed(1)}s` : `+${Math.abs(gap).toFixed(1)}s fata de tinta`;
  fields.weeklyGain.textContent = gap > 0 ? `${weeklyGain.toFixed(2)}s/sapt.` : "mentinere";
  fields.goalAdvice.textContent = goalAdviceFor(gap, weeklyGain);

  const checkpoints = [0.25, 0.5, 0.75, 1].map((portion) => {
    const week = Math.max(1, Math.round(weeks * portion));
    const checkpointTime = current - gap * portion;
    return { week, checkpointTime };
  });

  goalMilestones.innerHTML = checkpoints.map(({ week, checkpointTime }) => `
    <div><strong>Sapt. ${week}:</strong><span>${formatTime(checkpointTime)}</span></div>
  `).join("");
  syncUrlState();
}

function goalLadderSummary() {
  const milestones = [...goalMilestones.querySelectorAll("div")].map((item) => {
    const week = item.querySelector("strong").textContent;
    const time = item.querySelector("span").textContent;
    return `${week}: ${time}`;
  });
  return [
    "Scara obiectivului 800 m",
    `Timp actual: ${currentSeasonTime.value}`,
    `Tinta: ${targetTime.value}`,
    `Saptamani: ${goalWeeks.value}`,
    `Diferenta: ${fields.goalGap.textContent}`,
    `Ritm progres: ${fields.weeklyGain.textContent}`,
    `Evaluare: ${fields.goalAdvice.textContent}`,
    ...milestones
  ].join("\n");
}

function clampNumber(input, min, max, fallback) {
  const value = Number(input.value);
  const clamped = Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : fallback;
  input.value = clamped;
  return clamped;
}

function loadAdviceFor(total, qualityPercent, hard, strength, sleep) {
  if (total < 18) return "Volumul este mic: potrivit pentru revenire, incepatori sau saptamana de descarcare.";
  if (qualityPercent > 28 || hard >= 4) return "Risc ridicat: prea multa calitate pentru 800 m. Redu o sedinta grea sau mareste revenirea.";
  if (sleep < 6.5 && hard >= 2) return "Somnul este limita principala. Pastreaza calitatea, dar scade volumul pana revine recuperarea.";
  if (strength === 0) return "Adauga cel putin o sedinta scurta de forta/mobilitate pentru postura si preventie.";
  if (qualityPercent < 12 && hard <= 1) return "Saptamana este usor aerobica. Buna pentru baza, dar include linii sau ritm controlat daca esti in perioada specifica.";
  return "Saptamana este echilibrata daca zilele grele sunt separate de revenire.";
}

function updateLoadMonitor() {
  const easy = clampNumber(easyKm, 0, 120, 28);
  const quality = clampNumber(qualityKm, 0, 40, 7);
  const hard = clampNumber(hardSessions, 0, 5, 2);
  const strength = clampNumber(strengthSessions, 0, 5, 2);
  const sleep = clampNumber(sleepHours, 4, 10, 8);
  const total = easy + quality;
  const qualityPercent = total > 0 ? (quality / total) * 100 : 0;
  let riskScore = 0;

  if (qualityPercent > 18) riskScore += 1;
  if (qualityPercent > 28) riskScore += 1;
  if (hard >= 3) riskScore += 1;
  if (hard >= 4) riskScore += 1;
  if (sleep < 7) riskScore += 1;
  if (sleep < 6) riskScore += 1;
  if (strength === 0) riskScore += 1;

  const risk = riskScore <= 1 ? "scazut" : riskScore <= 3 ? "moderat" : "ridicat";
  fields.totalKm.textContent = `${total.toFixed(total % 1 ? 1 : 0)} km`;
  fields.qualityShare.textContent = `${qualityPercent.toFixed(0)}%`;
  fields.loadRisk.textContent = risk;
  fields.loadAdvice.textContent = loadAdviceFor(total, qualityPercent, hard, strength, sleep);
  syncUrlState();
}

function loadMonitorSummary() {
  return [
    "Monitor incarcare saptamanala 800 m",
    `Km usori: ${easyKm.value}`,
    `Km calitate: ${qualityKm.value}`,
    `Sedinte intense: ${hardSessions.value}`,
    `Forta/mobilitate: ${strengthSessions.value}`,
    `Somn mediu: ${sleepHours.value} h/noapte`,
    `Volum total: ${fields.totalKm.textContent}`,
    `Pondere calitate: ${fields.qualityShare.textContent}`,
    `Scor risc: ${fields.loadRisk.textContent}`,
    `Recomandare: ${fields.loadAdvice.textContent}`
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
    renderAthleteSheet();
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  stateSyncEnabled = true;
  updateCalculator();
});

targetTime.addEventListener("input", enableUrlSync(updateCalculator));
targetTime.addEventListener("input", enableUrlSync(updateRaceReview));
targetTime.addEventListener("input", enableUrlSync(updateRecoveryPlan));
targetTime.addEventListener("input", enableUrlSync(updateNextSession));
targetTime.addEventListener("input", enableUrlSync(updateGoalLadder));
targetTime.addEventListener("input", enableUrlSync(updatePacingScenario));
raceStartTime.addEventListener("input", enableUrlSync(updateFuelPlan));
raceStartTime.addEventListener("change", enableUrlSync(updateFuelPlan));
raceProfile.addEventListener("change", enableUrlSync(updateCalculator));
trainingFocus.addEventListener("change", enableUrlSync(updateCalculator));
standardGender.addEventListener("change", enableUrlSync(updateCalculator));
plannerForm.addEventListener("input", enableUrlSync(updatePlan));
plannerForm.addEventListener("change", enableUrlSync(updatePlan));
goalLadderForm.addEventListener("input", enableUrlSync(updateGoalLadder));
goalLadderForm.addEventListener("change", enableUrlSync(updateGoalLadder));
loadMonitorForm.addEventListener("input", enableUrlSync(updateLoadMonitor));
loadMonitorForm.addEventListener("change", enableUrlSync(updateLoadMonitor));
warmupForm.addEventListener("input", enableUrlSync(updateWarmup));
warmupForm.addEventListener("change", enableUrlSync(updateWarmup));
fuelPlanForm.addEventListener("input", enableUrlSync(updateFuelPlan));
fuelPlanForm.addEventListener("change", enableUrlSync(updateFuelPlan));
testPredictorForm.addEventListener("input", enableUrlSync(updateTestEstimate));
testPredictorForm.addEventListener("change", enableUrlSync(updateTestEstimate));
raceReviewForm.addEventListener("input", enableUrlSync(updateRaceReview));
raceReviewForm.addEventListener("input", enableUrlSync(updateRecoveryPlan));
raceReviewForm.addEventListener("input", enableUrlSync(updateNextSession));
raceReviewForm.addEventListener("change", enableUrlSync(updateRaceReview));
raceReviewForm.addEventListener("change", enableUrlSync(updateRecoveryPlan));
raceReviewForm.addEventListener("change", enableUrlSync(updateNextSession));
recoveryPlanForm.addEventListener("input", enableUrlSync(updateRecoveryPlan));
recoveryPlanForm.addEventListener("input", enableUrlSync(updateNextSession));
recoveryPlanForm.addEventListener("change", enableUrlSync(updateRecoveryPlan));
recoveryPlanForm.addEventListener("change", enableUrlSync(updateNextSession));
nextSessionForm.addEventListener("input", enableUrlSync(updateNextSession));
nextSessionForm.addEventListener("change", enableUrlSync(updateNextSession));
athleteSheetForm.addEventListener("input", enableUrlSync(renderAthleteSheet));
athleteSheetForm.addEventListener("change", enableUrlSync(renderAthleteSheet));
pacingScenarioForm.addEventListener("input", enableUrlSync(updatePacingScenario));
pacingScenarioForm.addEventListener("change", enableUrlSync(updatePacingScenario));
copyPace.addEventListener("click", () => copyText(paceSummary(), paceStatus, "Rezultatul a fost copiat."));
sharePace.addEventListener("click", () => copyText(buildSettingsUrl().toString(), paceStatus, "Linkul cu setarile a fost copiat."));
copyPlan.addEventListener("click", () => copyText(planSummary(), planStatus, "Planul saptamanal a fost copiat."));
copyGoalLadder.addEventListener("click", () => copyText(goalLadderSummary(), goalStatus, "Scara obiectivului a fost copiata."));
copyLoadMonitor.addEventListener("click", () => copyText(loadMonitorSummary(), loadStatus, "Incarcarea saptamanala a fost copiata."));
copyWarmup.addEventListener("click", () => copyText(warmupSummary(), warmupStatus, "Incalzirea a fost copiata."));
copyFuelPlan.addEventListener("click", () => copyText(fuelPlanSummary(), fuelStatus, "Planul de hidratare a fost copiat."));
copyChecklist.addEventListener("click", () => copyText(checklistSummary(), checklistStatus, "Checklistul a fost copiat."));
resetChecklist.addEventListener("click", () => {
  resetChecklistState();
  renderAthleteSheet();
});
copyAthleteSheet.addEventListener("click", () => copyText(athleteSheetSummary(), sheetStatus, "Fisa a fost copiata."));
printAthleteSheet.addEventListener("click", printSheet);
copyPacingScenario.addEventListener("click", () => copyText(pacingScenarioSummary(), pacingScenarioStatus, "Scenariul de pacing a fost copiat."));
copyTestEstimate.addEventListener("click", () => copyText(testEstimateSummary(), testStatus, "Estimarea a fost copiata."));
copyRaceReview.addEventListener("click", () => copyText(raceReviewSummary(), raceReviewStatus, "Analiza a fost copiata."));
copyRecoveryPlan.addEventListener("click", () => copyText(recoveryPlanSummary(), recoveryStatus, "Planul de recuperare a fost copiat."));
copyNextSession.addEventListener("click", () => copyText(nextSessionSummary(), nextSessionStatus, "Sedinta urmatoare a fost copiata."));
raceChecklist.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;
  const state = readChecklistState();
  state[event.target.value] = event.target.checked;
  saveChecklistState(state);
  updateChecklistProgress();
  renderAthleteSheet();
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
updateGoalLadder();
updateLoadMonitor();
updateWarmup();
updateFuelPlan();
updatePacingScenario();
renderChecklist();
updateTestEstimate();
updateRaceReview();
updateRecoveryPlan();
updateNextSession();
renderAthleteSheet();
renderWorkouts();

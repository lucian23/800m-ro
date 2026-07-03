const form = document.querySelector("#paceForm");
const targetTime = document.querySelector("#targetTime");
const raceProfile = document.querySelector("#raceProfile");
const trainingFocus = document.querySelector("#trainingFocus");
const plannerForm = document.querySelector("#plannerForm");
const athleteLevel = document.querySelector("#athleteLevel");
const seasonPhase = document.querySelector("#seasonPhase");
const sessionsPerWeek = document.querySelector("#sessionsPerWeek");
const weekPlan = document.querySelector("#weekPlan");
const workoutGrid = document.querySelector("#workoutGrid");
const filterButtons = document.querySelectorAll(".filter");

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
  workoutSuggestion: document.querySelector("#workoutSuggestion")
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
  return `${minutes}:${rest.toFixed(decimals).padStart(3 + decimals, "0")}`;
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCalculator();
});

targetTime.addEventListener("input", updateCalculator);
raceProfile.addEventListener("change", updateCalculator);
trainingFocus.addEventListener("change", updateCalculator);
plannerForm.addEventListener("input", updatePlan);
plannerForm.addEventListener("change", updatePlan);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderWorkouts(button.dataset.filter);
  });
});

updateCalculator();
updatePlan();
renderWorkouts();

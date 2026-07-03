const form = document.querySelector("#paceForm");
const targetTime = document.querySelector("#targetTime");
const raceProfile = document.querySelector("#raceProfile");
const trainingFocus = document.querySelector("#trainingFocus");

const fields = {
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
    return [
      average - 0.45,
      average - 0.2,
      average + 0.2,
      average + 0.45
    ];
  }

  if (profile === "negative") {
    return [
      average + 0.35,
      average + 0.15,
      average - 0.1,
      average - 0.4
    ];
  }

  return [
    average - 0.25,
    average - 0.05,
    average + 0.1,
    average + 0.2
  ];
}

function workoutFor(totalSeconds, focus) {
  const pace200 = totalSeconds / 4;
  const pace300 = pace200 * 1.5;
  const pace500 = pace200 * 2.5 + 2;

  if (focus === "speed") {
    return `6 x 150 m in ${formatTime(pace200 * 0.74)}-${formatTime(pace200 * 0.78)}`;
  }

  if (focus === "endurance") {
    return `3 x 500 m in ${formatTime(pace500)}, pauza 6 min`;
  }

  return `5 x 200 m in ${formatTime(pace200)} sau 3 x 300 m in ${formatTime(pace300)}`;
}

function updateCalculator() {
  const total = parseTime(targetTime.value);
  if (!total || total < 60 || total > 300) {
    targetTime.setAttribute("aria-invalid", "true");
    return;
  }

  targetTime.removeAttribute("aria-invalid");

  const splits = splitPlan(total, raceProfile.value);
  const cumulative = splits.reduce((acc, split, index) => {
    acc.push((acc[index - 1] || 0) + split);
    return acc;
  }, []);

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCalculator();
});

targetTime.addEventListener("input", updateCalculator);
raceProfile.addEventListener("change", updateCalculator);
trainingFocus.addEventListener("change", updateCalculator);
updateCalculator();

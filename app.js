const form = document.querySelector("#paceForm");
const targetTime = document.querySelector("#targetTime");
const raceProfile = document.querySelector("#raceProfile");

const fields = {
  pacePer200: document.querySelector("#pacePer200"),
  split200: document.querySelector("#split200"),
  split400: document.querySelector("#split400"),
  split600: document.querySelector("#split600"),
  split800: document.querySelector("#split800")
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

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds - minutes * 60;
  if (minutes <= 0) return rest.toFixed(1);
  return `${minutes}:${rest.toFixed(1).padStart(4, "0")}`;
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
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCalculator();
});

targetTime.addEventListener("input", updateCalculator);
raceProfile.addEventListener("change", updateCalculator);
updateCalculator();

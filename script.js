const levelText = document.getElementById("level");
const slider = document.getElementById("intensity");

// Slider text change
slider.addEventListener("input", () => {
  if (slider.value == 1) levelText.innerText = "Friendly 😌";
  if (slider.value == 2) levelText.innerText = "Savage 😏";
  if (slider.value == 3) levelText.innerText = "Brutal 💀";
});

// SOUND FUNCTION
function playSound(type) {
  const sound = document.getElementById("sound");

  sound.pause();
  sound.currentTime = 0;

  if (type === "friendly") {
    sound.src = "assets/sounds/clap.mp3";
  } else if (type === "savage") {
    sound.src = "assets/sounds/sad.mp3";
  } else {
    sound.src = "assets/sounds/dramatic.mp3";
  }

  sound.load();
  sound.play().catch(e => console.log(e));
}

// TYPING EFFECT
function typeText(text) {
  let i = 0;
  const output = document.getElementById("output");
  output.innerHTML = "";

  function typing() {
    if (i < text.length) {
      output.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 20);
    }
  }

  typing();
}

// MAIN FUNCTION
function startRoast() {
  const loading = document.getElementById("loading");

  // PLAY SOUND IMMEDIATELY (IMPORTANT)
  if (slider.value == 1) playSound("friendly");
  else if (slider.value == 2) playSound("savage");
  else playSound("brutal");

  loading.innerText = "Analyzing code...\nConsulting planets...\nThis is bad...";

  setTimeout(() => {
    loading.innerText = "";

    let roast = "";
    let horoscope = "";

    if (slider.value == 1) {
      roast = "Hmm... your code needs some love 😊";
    } else if (slider.value == 2) {
      roast = "This code is confusing 😏";
    } else {
      roast = "This code is a disaster 💀";
    }

    const planets = ["Mercury", "Saturn", "Mars", "Jupiter"];
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];

    horoscope =
      "\n\n🔮 Horoscope:\n" +
      randomPlanet + " is in retrograde.\n" +
      "Bug luck: Extremely high.\n" +
      "Lucky fix: Restart your life.";

    typeText(roast + horoscope);

  }, 2000);
}
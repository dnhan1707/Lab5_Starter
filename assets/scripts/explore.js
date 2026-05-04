// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const textArea = document.querySelector("textarea");
  const buttonTag = document.querySelector("button");
  let voices = [];

  function loadVoices() {
    voices = synth.getVoices();
    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) option.textContent += " — DEFAULT";
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  }

  synth.onvoiceschanged = loadVoices;

  buttonTag.addEventListener("click", function () {
    const textvalue = textArea.value;
    const utterThis = new SpeechSynthesisUtterance(textvalue);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  })
}
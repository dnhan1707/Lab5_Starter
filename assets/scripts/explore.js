// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const textArea = document.querySelector("textarea");
  const buttonTag = document.querySelector("button");
  const smilingFace = document.querySelector("img");
  const smilingFaceLink = "assets/images/smiling.png";
  const smilingFaceLinkOpen = "assets/images/smiling-open.png";

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
    if (!textvalue) return;
    
    const utterThis = new SpeechSynthesisUtterance(textvalue);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    utterThis.onstart = function () {
      smilingFace.src = smilingFaceLinkOpen;
    }

    utterThis.onend = function () {
      smilingFace.src = smilingFaceLink;
    }

    synth.speak(utterThis);
  })
}
// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const baseImagesLink = "assets/images/";
  const baseIconLink = "assets/icons/"
  const baseAudioLink = "assets/audio/"

  // Image
  const hornSelectTag = document.getElementById("horn-select");
  const imageTag = document.querySelector("img");

  // Sound
  const volumeInput = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const buttonTag = document.querySelector("button");
  const audioTag = document.querySelector("audio");

  hornSelectTag.addEventListener("change", function () {
    const selectedValue = this.value;
    
    // set image
    switch(selectedValue) {
      case "air-horn":
        imageTag.src = baseImagesLink + "air-horn.svg";
        imageTag.alt = "air horn pic";
        audioTag.src = baseAudioLink + "air-horn.mp3"
        break;

      case "car-horn":
        imageTag.src = baseImagesLink + "car-horn.svg";
        imageTag.alt = "car horn pic";
        audioTag.src = baseAudioLink + "car-horn.mp3"
        break;
      
      case "party-horn":
        imageTag.src = baseImagesLink + "party-horn.svg";
        imageTag.alt = "party horn pic";
        audioTag.src = baseAudioLink + "party-horn.mp3"
        break;
      
      default:
        imageTag.src = baseImagesLink + "no-image.png";
        imageTag.alt = "no image pic";
        break;
    }
  })


  volumeInput.addEventListener("input", function () {
    const volumeValue = this.value;
    audioTag.volume = volumeValue / 100;
    if (volumeValue == 0) {
      volumeImage.src = baseIconLink + "volume-level-0.svg";
    } else if (volumeValue < 33) {
      volumeImage.src = baseIconLink + "volume-level-1.svg";
    } else if (volumeValue < 67) {
      volumeImage.src = baseIconLink + "volume-level-2.svg";
    } else {
      volumeImage.src = baseIconLink + "volume-level-3.svg";
    }
  })

  buttonTag.addEventListener("click", function () {
    audioTag.volume = volumeInput.value / 100;
    audioTag.play()
  })
}
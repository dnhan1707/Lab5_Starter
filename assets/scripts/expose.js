// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const baseImagesLink = "assets/images/";

  // Make image changing based one selected Horn
  const hornSelectTag = document.getElementById("horn-select");
  const imageTag = document.querySelector("img");

  hornSelectTag.addEventListener("change", function () {
    const selectedValue = this.value;
    
    // set image
    switch(selectedValue) {
      case "air-horn":
        imageTag.src = baseImagesLink + "air-horn.svg";
        imageTag.alt = "air horn pic";
        break;

      case "car-horn":
        imageTag.src = baseImagesLink + "car-horn.svg";
        imageTag.alt = "car horn pic";
        break;
      
      case "party-horn":
        imageTag.src = baseImagesLink + "party-horn.svg";
        imageTag.alt = "party horn pic";
        break;
      
      default:
        imageTag.src = baseImagesLink + "no-image.png";
        imageTag.alt = "no image pic";
        break;
    }
  })
}
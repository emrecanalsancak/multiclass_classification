function handleDogImageUpload() {
  const input = document.querySelector(".fileInputDog");
  const uploadedImage = document.querySelector(".uploadedImageDog");
  const uploadButton = document.getElementById("dog-breed-button");
  const resultContainer = document.querySelector(".resultContainerDog");
  const resultText = document.querySelector(".resultDog");
  const infoContainer = document.querySelector(".infoDog");

  // Clear previous prediction text
  resultText.innerText = "";
  infoContainer.innerHTML = "";

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }

  // Hide the upload button and show the result container
  uploadButton.style.display = "none";
  resultContainer.style.display = "flex";
}

function handleVeggieImageUpload() {
  const input = document.querySelector(".fileInputVeggie");
  const uploadedImage = document.querySelector(".uploadedImageVeggie");
  const uploadButton = document.getElementById("veggie-button");
  const resultContainer = document.querySelector(".resultContainerVeggie");
  const resultText = document.querySelector(".resultVeggie");
  const infoContainer = document.querySelector(".infoVeggie");

  // Clear previous prediction text
  resultText.innerText = "";
  infoContainer.innerHTML = "";

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }

  // Hide the upload button and show the result container
  uploadButton.style.display = "none";
  resultContainer.style.display = "flex";
}

function generateToxicityHtml(toxicityResults) {
  const toxicRes = document.querySelector(".toxicity-results");
  const resCon = document.querySelector(".resultContainerToxicity");
  const resultContainer = document.querySelector(".infoToxicity");
  resultContainer.innerHTML = ""; // Clear previous content

  const tox = [
    "Toxicity",
    "Severe toxicity",
    "Obscene",
    "Threat",
    "Insult",
    "Identity hate",
  ];
  resCon.style.display = "flex";
  resCon.style.color = "#ffffff";

  if (toxicityResults["Toxicity"][1] > 50) {
    toxicRes.innerText = "TOXIC";

    const img = document.createElement("img");
    img.src = "imgs/50toxic.jpg"; // Replace with the path to your image
    img.alt = "Toxic Image";
    img.style.maxWidth = "30%"
    img.style.maxHeight = "20%"
    resultContainer.appendChild(img);

  } else {
    toxicRes.innerText = "NON TOXIC";

    const img = document.createElement("img");
    img.src = "imgs/angel.jpg"; // Replace with the path to your image
    img.alt = "Non Toxic Image";
    img.style.maxWidth = "30%"
    img.style.maxHeight = "20%"
    resultContainer.appendChild(img);
  }

  // Sort the entries based on the order of the 'tox' array
  const sortedResults = Object.entries(toxicityResults).sort(
    ([category1], [category2]) =>
      tox.indexOf(category1) - tox.indexOf(category2),
  );

  for (const [category, [isToxic, confidence]] of sortedResults) {
    const htmlContent = `
      <p><strong>${category}:</strong> <span> ${
      String(isToxic)[0].toUpperCase() + String(isToxic).substring(1)
    }, <strong>${category} Level:</strong> %${confidence}</span></p>
    `;

    resultContainer.innerHTML += htmlContent; // Append HTML content to the container
  }
}

function classifyToxicityText() {
  const textInput = document.getElementById("textInputToxicity").value;
  const resultContainer = document.querySelector(".infoToxicity");

  fetch("https://multiclass-backend.vercel.app/toxicity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment: textInput }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if ("toxicity_results" in data) {
        const toxicityResults = data.toxicity_results;
        generateToxicityHtml(toxicityResults);
        // resultContainer.innerHTML = tox_results // Use the new function
        resultContainer.style.display = "flex";
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function classifyDogImage() {
  var fileInput = document.getElementById("fileInputDog");
  var file = fileInput.files[0];
  const resultText = document.querySelector(".resultDog");

  if (file) {
    var formData = new FormData();
    formData.append("image", file);

    fetch("https://multiclass-backend.vercel.app/classify", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the prediction text aligned with the image
        resultText.innerText = data.predicted_breed
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        // Update the info-container with dog facts
        const infoContainer = document.querySelector(".infoDog");

        // Example: You can replace this with actual facts based on the predicted breed
        const dogFacts = getDogFacts(data.predicted_breed);

        // Update the content of the info-container
        infoContainer.innerHTML = dogFacts;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please choose an image first.");
  }
}

function classifyVeggieImage() {
  var fileInput = document.getElementById("fileInputVeggie");
  var file = fileInput.files[0];
  const resultText = document.querySelector(".resultVeggie");

  if (file) {
    var formData = new FormData();
    formData.append("image", file);

    fetch("https://multiclass-backend.vercel.app/classifyveggie", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the prediction text aligned with the image
        resultText.innerText = data.predicted_veggie
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        // Update the info-container with veggie facts
        const infoContainer = document.querySelector(".infoVeggie");

        // Example: You can replace this with actual facts based on the predicted veggie
        const veggieFacts = generateVeggieFactsHTML(
          data.predicted_veggie,
          veggieFactsDict[data.predicted_veggie],
        );

        // Update the content of the info-container
        infoContainer.innerHTML = veggieFacts;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Please choose an image first.");
  }
}

let dogSection = document.getElementById("dog-breed-section"); // Fix the id
let veggieSection = document.getElementById("veggie-section");
let toxicitySection = document.getElementById("toxicity-expression-section");
let dogModal = document.querySelector(".dog-breed-modal");
let veggieModal = document.querySelector(".veggie-modal");
let toxicityModal = document.querySelector(".toxicity-modal");
let dogModalContent = document.querySelector(".dog-breed-modal-overlay");
let veggieModalContent = document.querySelector(".veggie-modal-overlay");
let toxicityModalContent = document.querySelector(".toxicity-modal-overlay");
let dogModalClose = document.querySelector(".close-dog-breed-modal"); // Fix the typo
let veggieModalClose = document.querySelector(".close-veggie-modal");
let toxicityModalClose = document.querySelector(".close-toxicity-modal");
let dogModalOverlay = document.getElementById("dogModalOverlay");
body = document.body;

dogSection.addEventListener("click", openModal);
veggieSection.addEventListener("click", openVeggieModal);
toxicitySection.addEventListener("click", openToxicityModal);

dogModalClose.addEventListener("click", closeModal);
veggieModalClose.addEventListener("click", closeVeggieModal);
toxicityModalClose.addEventListener("click", closeToxicityModal);

body.addEventListener("mousedown", function (event) {
  if (!dogModal.contains(event.target)) {
    closeModal();
  }

  if (!veggieModal.contains(event.target)) {
    closeVeggieModal();
  }

  if (!toxicityModal.contains(event.target)) {
    closeToxicityModal();
  }
});

function closeModal() {
  dogModal.classList.remove("active");
  dogModalContent.classList.remove("active");
  body.classList.remove("modal-open");
}

function closeVeggieModal() {
  veggieModal.classList.remove("active");
  veggieModalContent.classList.remove("active");
  body.classList.remove("modal-veggie-open");
}

function closeToxicityModal() {
  toxicityModal.classList.remove("active");
  toxicityModalContent.classList.remove("active");
  body.classList.remove("modal-toxicity-open");
}

function openModal() {
  dogModal.classList.add("active");
  dogModalContent.classList.add("active");
  body.classList.add("modal-open");
}

function openVeggieModal() {
  veggieModal.classList.add("active");
  dogModalContent.classList.add("active");
  body.classList.add("modal-veggie-open");
}

function openToxicityModal() {
  toxicityModal.classList.add("active");
  toxicityModalContent.classList.add("active");
  body.classList.add("modal-toxicity-open");
}

function getDogFacts(predictedBreed) {
  const breedLowerCase = predictedBreed.toLowerCase();

  if (dogFactsDict[breedLowerCase]) {
    const facts = dogFactsDict[breedLowerCase];
    return generateDogFactsHTML(predictedBreed, facts);
  } else {
    return `<p>No facts available for ${predictedBreed
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())}.</p>`;
  }
}

function generateDogFactsHTML(breed, facts) {
  const htmlContent = `
      <h2><strong>About ${breed
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())}</strong></h2>
      <p><strong>Characteristics:</strong> <span> ${
        facts.characteristics
      }</span></p>
      <p><strong>Likes:</strong> <span> ${facts.likes}</span></p>
      <p><strong>Dislikes:</strong> <span> ${facts.dislikes}</span></p>
      <p><strong>Origin:</strong> <span> ${facts.origin}</span></p>
      <p><strong>Lifespan:</strong> <span> ${facts.lifespan}</span></p>
      <p><strong>Information:</strong> <span> ${facts.information}</span></p>
    `;

  return htmlContent;
}

function generateVeggieFactsHTML(veggie, facts) {
  // const resultContainer = document.querySelector('.infoToxicity');
  // resultContainer.innerHTML = ''; // Clear previous content

  const htmlContent = `
      <h2>About ${veggie
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())}</h2>
      <p><strong>Type:</strong> <span> ${facts.type}</span></p>
      <p><strong>Colors:</strong> <span> ${facts.colors}</span></p>
      <p><strong>Taste:</strong> <span> ${facts.taste}</span></p>
      <p><strong>Nutrients:</strong> <span> ${facts.nutrients}</span></p>
      <p><strong>Origin:</strong> <span> ${facts.origin}</span></p>
      <p><strong>Seasons:</strong> <span> ${facts.seasons}</span></p>
      <p><strong>Information:</strong> <span> ${facts.information}</span></p>
    `;

  // resultContainer.innerHTML = htmlContent;
  return htmlContent;
}

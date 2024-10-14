function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generatePoem(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "f675a384aa40tc5a0420348fddabad0o";
    let prompt = `User Instructions: Generate a short poem about ${instructionsInput.value}`;
    let context =
      "You are a romantic poem expert and love to write short poems. Your missions is to generate a four-line poem in basic HTML. Make sure to follow the user instructions. Delete the ```html.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating a poem about ${instructionsInput.value}...`;
  
    axios.get(apiUrl).then(displayPoem);
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);
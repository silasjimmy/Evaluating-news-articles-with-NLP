// Handles the form submission
function handleSubmit(e) {
    e.preventDefault();

    // Function variables
    const polarity = {
      "P+": "Strong positive",
      "P": "Positive",
      "NEU": "Neutral",
      "N": "Negative",
      "N+": "Strong negative",
      "NONE": "Text has no polarity"
    }

    const subject = {
      "OBJECTIVE": "The text does not have any subjectivity marks",
      "SUBJECTIVE": "The text has subjective marks"
    }

    const irony = {
      "NONIRONIC": "The text does not contain any ironic marks",
      "IRONIC": "The text contains ironic marks"
    }

    const resultsContainer = document.querySelector("#results");

    // Get the text that was put into the form field
    let formText = document.getElementById('name').value

    // Get the appropriate url for fetching the api key
    const url = window.location.href.includes("localhost") ?
      'http://localhost:8080/' : 'http://127.0.0.1:8080/';

    // Fetch the api key details object
    fetch(`${url}getKey`)
    .then(response => {
      let data = response.json();
      return data
    })
    .then(apiDetails => {
      if (Client.checkForName(formText)) {
        return Client.evaluateArticle(apiDetails.key, formText)
      }
    })
    .then(data => {
      if (data !== undefined) {
        resultsContainer.querySelector("#form-text").innerHTML = formText;
        resultsContainer.querySelector("#message").innerHTML = "Analysis successfull!";
        resultsContainer.querySelector("#message").style.color = "green";
        resultsContainer.querySelector("#score-tag").innerHTML = polarity[data.score_tag];
        resultsContainer.querySelector("#subjectivity").innerHTML = subject[data.subjectivity];
        resultsContainer.querySelector("#irony").innerHTML = irony[data.irony];
      }
    })
    .catch(error => console.log(error))
}

export { handleSubmit }

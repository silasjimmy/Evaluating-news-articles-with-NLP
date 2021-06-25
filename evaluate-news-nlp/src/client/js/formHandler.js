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

    // Client.checkForName(formText)

    // Fetch the api key
    fetch('http://localhost:8080/getKey')
    .then(response => {
      let data = response.json();
      return data
    })
    .then(apiDetails => {
      return Client.evaluateArticle(apiDetails.key, formText)
    })
    .then(data => {
      resultsContainer.querySelector("#form-text").innerHTML = formText;

      resultsContainer.querySelector("#message").innerHTML =
        data.status.code === "200" ? data.status.msg : "Analysis successfull!";

      resultsContainer.querySelector("#message").style.color =
        data.status.code === "200" ? "red" : "green";

      resultsContainer.querySelector("#score-tag").innerHTML =
        data.status.code === "200" ? "" : polarity[data.score_tag];

      resultsContainer.querySelector("#subjectivity").innerHTML =
        data.status.code === "200" ? "" : subject[data.subjectivity];

      resultsContainer.querySelector("#irony").innerHTML =
        data.status.code === "200" ? "" : irony[data.irony];
    })
    .catch(error => console.log(error))
}

export { handleSubmit }

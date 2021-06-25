function handleSubmit(e) {
    e.preventDefault();

    // Get the text that was put into the form field
    let formText = document.getElementById('name').value

    // Client.checkForName(formText)

    // Fetch the api key
    fetch('http://127.0.0.1:8080/getKey')
    .then(response => {
      let data = response.json();
      return data
    })
    .then(apiDetails => {
      return Client.evaluateArticle(apiDetails.key, formText)
    })
    .then(evaluation => {
      // let evaluationData = evaluation.json();
      console.log(evaluation);
    })
    .catch(error => console.log(error))

    // console.log("::: Form Submitted :::")
    // fetch('http://127.0.0.1:8080/getKey')
    // .then(res => res.json())
    // .then(function(res) {
    //   let resultsContainer = document.getElementById('results');
    //   resultsContainer.innerHTML = res.key;
    // })
}

export { handleSubmit }

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://127.0.0.1:8080/test')
    .then(res => res.json())
    .then(function(res) {
      let resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = res.message;
    })
}

export { handleSubmit }

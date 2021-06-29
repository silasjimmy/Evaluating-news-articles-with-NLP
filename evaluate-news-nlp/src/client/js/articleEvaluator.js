// Fetches the results from the NLP API
const evaluateArticle = async (apiKey, formText) => {
  // API url
  let baseUrl = "https://api.meaningcloud.com/sentiment-2.1?";
  
  // Create a fetch url for the API
  const apiUrl = `${baseUrl}key=${apiKey}&url=${formText}&lang=en`

  const response = await fetch(apiUrl);

  if(response.ok) {
    try {
      const responseData = await response.json();
      return responseData
    } catch (e) {
      console.log(e);
    }
  }
  else {
    alert("Something is not right with your input.")
  }
}

export { evaluateArticle }

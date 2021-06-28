// Fetches the results from the NLP API
const evaluateArticle = async (apiKey, formText) => {

  // Create a data object for the fetch operation
  const data = new FormData();
  data.append('key', apiKey);
  data.append('txt', formText);
  data.append('lang', 'en');

  const requestOptions = {
    method: 'POST',
    body: data,
    redirect: 'follow'
  };

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)

  if(response.ok) {
    try {
      const responseData = await response.json()
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

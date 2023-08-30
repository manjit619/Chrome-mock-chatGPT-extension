document.addEventListener('DOMContentLoaded', function() {
    const questionInput = document.getElementById('questionInput');
    const askButton = document.getElementById('askButton');
    const responseArea = document.getElementById('responseArea');
  
    askButton.addEventListener('click', async function() {
      const question = questionInput.value;
      if (question) {
        const response = await fetchMockAPI(question);
        responseArea.textContent = response;
      }
    });
  });
  
  async function fetchMockAPI(question) {
    const response = await fetch('http://localhost:3000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });
    const data = await response.json();
    return data.response;
  }
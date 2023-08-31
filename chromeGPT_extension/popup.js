document.addEventListener('DOMContentLoaded', function() {
  const questionInput = document.getElementById('questionInput');
  const askButton = document.getElementById('askButton');
  const responseArea = document.getElementById('responseArea');

  askButton.addEventListener('click', async function() {
    const question = questionInput.value;
    if (!question) {
      responseArea.textContent = 'Please enter a question!';
      responseArea.style.color = '#d11515';
    } else {
      try {
        const response = await fetchMockAPI(question);
        responseArea.textContent = response;
        responseArea.style.color = 'black';
      } catch (error) {
        handleAPIError(error, responseArea);
      }
    }
  });
});

async function fetchMockAPI(question) {
  try {
    const response = await fetch('http://localhost:3000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Unable to fetch data. Please try again!');
  }
}

function handleAPIError(error, responseArea) {
  console.error('API request error:', error);
  responseArea.textContent = 'An error occurred. Please try again later.';
}
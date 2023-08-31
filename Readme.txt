**Running the Chrome Extension Locally**:

This documentation provides step-by-step instructions on how to run the "ChatGPT Extension" Chrome extension locally on your computer and also the different design decisions that I have taken. The extension allows you to input a question and receive a predefined response from the mock ChatGPT API.

**Prerequisites**:
Before you begin, make sure you have the following software and tools installed on your computer:

a. Google Chrome Browser
b. Node.js (Version 18.17.1 or higher)

**Installation**:

1. Clone the repository to your local machine using Git or use "Download ZIP" frome "Code" to download the repository as a compressed ZIP file.

2. Navigate to the project directory using a terminal:

    cd chromeGPT_extension

3. Install the required Node.js dependencies:
    a) Express
    b) cors

    npm install

4. Start the mock API server: 
    node index.js
    You should see a message indicating that the mock API is running on a specific port (e.g., mock API is running on     port 3000)

**Running the Extension**:

1. Open your Google Chrome browser.

2. In the address bar, enter chrome://extensions/ and press Enter.

3. Enable "Developer mode" by toggling the switch in the top-right corner.

4. Click the "Load unpacked" button.

5. Select the chromeGPT_extension folder from the repository directory and click "Select Folder."

    The "ChatGPT Extension" extension will now appear in the list of installed extensions.

6. Click the extension icon in the Chrome toolbar to open the popup.

**Using the Extension**:

1. In the popup, you'll see a text input field.

2. Type a question you'd like to ask the mock ChatGPT API and press Enter.

3. The predefined response will be displayed in the popup.

**Design decisions**:

Technology Stack:

For the Chrome extension and the mock API, the following technologies and languages were used:

Chrome Extension:

1. HTML: Used for creating the user interface structure of the extension's popup.
2. CSS: Styled the extension's popup to ensure a visually appealing and user-friendly design.
3. JavaScript: Implemented the functionality of capturing user input, making API requests, and updating the UI dynamically.

Mock API:

1. Node.js: Chosen as the backend technology to create the mock API due to its lightweight and event-driven     nature, making it suitable for handling HTTP requests.
2. Express.js: Used to build the API quickly and efficiently with its robust routing and middleware capabilities.
3. JavaScript: Used to implement the logic of the mock API, handling incoming requests and generating     predefined responses.

Architecture:

The architecture of the project involves two main components: the Chrome extension and the mock API.

Chrome Extension:

1. The extension's popup consists of an HTML input element for user questions, a button to initiate the question     submission, and a response area to display the AI-generated response.
2. JavaScript is used to capture user input, trigger API requests, and dynamically update the UI with responses.
3. When the user clicks the "Ask" button, an API request is made to the mock API with the user's question.
   
Mock API:

1. The mock API is a simple Node.js server built using Express.js.
2. It exposes an endpoint that accepts POST requests with user questions.
3. Upon receiving a request, the API generates a predefined response, simulating the behavior of a real AI API.
    The API response is sent back to the extension.

**Challenges Faced**:

CORS Issue:
In the development of the Chrome extension and interaction with the mock API, CORS (Cross-Origin Resource Sharing) issue arised due to security restrictions that prevented requests from one domain to another. Due to this the predefined message was not being displayed. Addressing this challenge is crucial to ensure smooth communication between the extension and the API.

To resolve CORS issues:
Installing the cors dependecny resolved this issue for me.

**Conclusion**:

In conclusion, the development of the Chrome Mock ChatGPT Extension has been an engaging and insightful project. Through the utilization of HTML, CSS, JavaScript, Node.js, and Express.js, we successfully created an interactive extension that simulates interaction with a mock ChatGPT API. This project aimed to provide a practical hands-on experience in building a Chrome extension and showcasing how a frontend UI can communicate with a backend API.

Project Completed By:
Manjit Kalita
Email: manjit19-317@aec.ac.in
31/08/2023

Feedback and Issues
If you encounter any issues or have feedback about the extension, please open an issue in the GitHub repository.
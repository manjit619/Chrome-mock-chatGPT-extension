const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 

app.post('/ask', (req, res) => {
  const question = req.body.question;
  const response = "Hello from Mock GPT! This is a pre-defined message for you. Hope you're doing well!";
  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Mock API is running on port ${PORT}`);
});
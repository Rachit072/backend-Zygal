const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = data.find(u => u.email_id === email && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
module.exports = app;
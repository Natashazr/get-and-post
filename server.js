const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public_html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'index.html'));
});

// Handle GET request
app.get('/getData', (req, res) => {
    try {
        const getData = req.query.getData;
        console.log('GET Data received:', getData);
        res.send(`GET Data received: ${getData}`);
    } catch (error) {
        console.error('Error handling GET request:', error);
        res.status(500).send('Some terrible HORROR occurred!');
    }
});

// Handle POST request
app.post('/submitData', (req, res) => {
    try {
        const postData = req.body.postData;
        console.log('Received POST data:', postData);
        res.send('POST Data received successfully!');
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).send('Some terrible HORROR occurred!');
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const payload = req.body;

    // Log the push event
    console.log('Received push event:', payload);

    // Execute the deployment script
    exec('deploy.bat', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
            return res.status(500).send('Deployment failed');
        }
        console.log(`Output: ${stdout}`);
        console.error(`Error Output: ${stderr}`);
        res.send('Deployment succeeded');
    });
});

const PORT = 3000; // Customize the port if necessary
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

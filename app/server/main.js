const express = require('express');
const app = express();

app.use(express.static('./app/public'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Listening on port 3000!');
});

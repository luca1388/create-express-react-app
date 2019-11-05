const express = require('express');
const app = express();

const SERVER_PORT = process.env.PORT || 3000;
const STATIC_DIR = 'dist';

app.use(express.static(STATIC_DIR));

app.get('/', (req, res) => 
    res.send('Hello world')
);

app.get("/api/hello", (req, res) => 
    res.send({ data: "world!" })
);

app.listen(SERVER_PORT, () => {
    console.log('Server running on port ' + SERVER_PORT);
});

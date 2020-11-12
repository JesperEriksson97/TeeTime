const express = require('express')
const app = express();
const DEVELOPMENT_PORT = 8080

app.listen(DEVELOPMENT_PORT, () => {
    console.log(`Server up and running on port ${DEVELOPMENT_PORT}`)
})
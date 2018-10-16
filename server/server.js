const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '/../public');
const app = express();

app.use(express.static(publicPath));
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up on port : 3000");
})
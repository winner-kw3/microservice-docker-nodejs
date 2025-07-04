require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');
const payementRouter = require('./routes/payement.route');

const app = express();
const port = process.env.PORT || 5008;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/payement', payementRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

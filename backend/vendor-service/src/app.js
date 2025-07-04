require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const vendorRoutes = require('./routes/vendor.route');

const app = express();
const port = process.env.PORT || 5006;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/vendors', vendorRoutes);
app.use('/auth', authRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de données synchronisée (tables créées/mises à jour)');
    app.listen(port, () => {
      console.log(`Vendor service running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });

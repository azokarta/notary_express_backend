const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const countryRoutes = require('./src/routes/countryRoutes');
const currencyRoutes = require('./src/routes/currencyRoutes');
const actionStatusRoutes = require('./src/routes/actionStatusRoutes');
const mandatoryRoutes = require('./src/routes/mandatoryRoutes');
const logTypeRoutes = require('./src/routes/logTypeRoutes');
const docTypeRoutes = require('./src/routes/docTypeRoutes');
const businessProcessTypeRoutes = require('./src/routes/businessProcessTypeRoutes');
const businessProcessStepRoutes = require('./src/routes/businessProcessStepRoutes');
const businessProcessFormRoutes = require('./src/routes/businessProcessFormRoutes');

// const authRoutes = require('./routes/authRoutes');

// const categoryRoutes = require('./routes/categoryRoutes');
// const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const orderStatusRoutes = require('./routes/orderStatusRoutes');
// const userRoutes = require('./routes/userRoutes');
// const companyRoutes = require('./routes/CompanyRoutes');
// const roleRoutes = require('./routes/roleRoutes');
// const addressRoutes = require('./routes/addressRoutes');
// const imageRoutes = require('./routes/imageRoutes');
// const popularDishRoutes = require('./routes/popularDishRoutes');
// const commentRoutes = require('./routes/commentRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const uri =
  'mongodb+srv://user-notary:PmDu6gEd7uDLOAKz@cluster0-t2ilo.gcp.mongodb.net/notarydb?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.once('open', (err) => {
  if (err) {
    console.log(err, 'err');
  } else {
    console.log('Mongoose database connection established succesfully');
  }
});

app.use(countryRoutes);
app.use(currencyRoutes);
app.use(actionStatusRoutes);
app.use(mandatoryRoutes);
app.use(logTypeRoutes);
app.use(docTypeRoutes);
app.use(businessProcessTypeRoutes);
app.use(businessProcessStepRoutes);
app.use(businessProcessFormRoutes);

// app.use(errors);
// app.use(productRoutes);
// app.use(orderRoutes);
// app.use(orderStatusRoutes);
// app.use(userRoutes);
// app.use(companyRoutes);
// app.use(roleRoutes);
// app.use(addressRoutes);
// app.use(imageRoutes);
// app.use(popularDishRoutes);
// app.use(commentRoutes);

var server = app.listen(process.env.PORT || 4000, () => {
  var port = server.address().port;
  console.log('Express is working on port ' + port);
});

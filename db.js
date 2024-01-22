const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://sohaibafzal:M90nSfPxSrDMbOJ3@cluster0.2ufk0nv.mongodb.net/your-database-name',
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log('Database Connected')
);

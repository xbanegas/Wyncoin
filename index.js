const express = require('express');
const path = require('path');
const vendor = require('./utils/vendors');
const route = require('./utils/route');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/users', (req,res)=>{
  console.log('hello');
});


app.get('/vendors', async (req, res)=>{
  console.log('getting vendors');
  let featureCollection = await vendor.genFeatureCollection(req.query);
  res.send(featureCollection);
});

app.get('/route', async(req, res)=>{
  console.log('routing');
  let routeData = await route.getRoute(req.query);
  res.send(routeData);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);


console.log(`listening on ${port}`);
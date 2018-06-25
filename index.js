const express = require('express');
const path = require('path');
const url = require('url');
const axios = require('axios');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/users', (req,res)=>{
  console.log('hello');
});

const getCoinmapVendors = async (query) => {
  let lat1 = query.lat + 10
  let lat2 =  query.lat - 10
  let lon1 = query.long + 10
  let lon2 = query.long - 10
  let coinmapParams = `?lat1=${lat1}&lat2=${lat2}&lon1=${lon1}&lon2=${lon2}`;
  let coinmapUrl = "https://coinmap.org/api/v1/venues/";
  let res = await axios.get(coinmapUrl + coinmapParams);
  return res.data
}

app.get('/vendors', async (req, res)=>{
  console.log('getting vendors');
  console.log(await getCoinmapVendors(req.query));
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);


console.log(`listening on ${port}`);
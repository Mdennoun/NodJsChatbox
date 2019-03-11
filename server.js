const express = require('express')
const app = express()

app.use(express.json());

app.get('/hello', function (req, res) 
{
  res.send('Hello World!')
})

app.post('/chat', function (req, res)
{
	if(req.body.msg === 'ville') {
		res.send("Nous somme à Paris");
	}
	if(req.body.msg === 'météo') {
		res.send("Il fait beau");
	}
})



const port = process.env.PORT || 3000;
app.listen(port, function () 
{
  console.log('Example app listening on port ' + port)
})


/*

console.log(portport, hostname, );
*/

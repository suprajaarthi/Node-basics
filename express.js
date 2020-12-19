var express=require('express');
var app=express();
app.set('view ','ejs');
app.get('/',function(req,res)
{
	res.sendFile(__dirname+'/hello.html');
});

app.get('/contact',function(req,res)
{
	res.send(__dirname+'/contact.html');
});


app.get('/profile/:id',function(req,res)
{
	res.render('profile');
	// res.send('Your request for the profile with the id of yeah' + req.params.id);
});

app.listen(3000);
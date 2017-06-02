var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var bcrypt = require("bcryptjs");

var path = require("path");
var Register = require("./model/logReg");

app.use(express.static(path.join(__dirname, "script")));
app.use(express.static(path.join(__dirname, "pages")));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost/loginRegistration", function(){
	console.log("successfully Connected with database");
})


/*router.get("/", function(request, response){
	response.json("This is my first program");
})
*/

/*router.get("/contacts", function(request, response){
	Contact.getContacts(function(err, contactObj){
		if(err){
			throw err;
		}
		response.json(contactObj)
	})
})*/


/*router.get("/getContactById/:id", function(request,response){
		var contactId = request.params.id;
	Contact.getContactById(contactId, function(err,contactObj){
		if(err){
			throw err;
		}
		response.json(contactObj)
	})
})*/


router.post("/createRegister", function(request, response){
	//var regObj = request.body;

	bcrypt.genSalt(10, function(err, salt) {
		console.log(salt);
    bcrypt.hash(request.body.password, salt, function(err, hash) {
        // Store hash in your password DB. 

        console.log(hash);
        var regObj = {
        	name: request.body.name,
        	email: request.body.email,
        	gender: request.body.gender,
			password:  hash,
			cpassword: hash
	}


	Register.createRegister(regObj, function(err, regObj){
		if(err){
			throw err;
		}
		response.json(regObj)
		   });
		});
	})
})


/*router.put("/updateContact/:id", function(request, response){
	var contactId = request.params.id;
	var contactObj = request.body;

	Contact.updateContact(contactId, contactObj,function(err, callbackConObj){
		if(err){
			throw err;
		}
		response.json(callbackConObj)
	})
})*/


/*router.delete("/removeContact/:id", function(request, response){
	var contactId = request.params.id;

	Contact.removeContact(contactId, function(err,callbackConObj){
		if(err){
			throw err;
		}
		response.json(callbackConObj)
	})
})*/


app.use("/", router);

var PORT = process.env.PORT || 8008;

app.listen(PORT, function(){
	console.log("Server is listening on PORT"+ PORT);
})
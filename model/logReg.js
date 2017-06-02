var mongoose = require("mongoose");

var registerSchema = mongoose.Schema({

	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	gender:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	cpassword:{
		type: String,
		required: true
	}
});


var Register = module.exports = mongoose.model("registerModel", registerSchema, "login");



module.exports.createRegister= function(regObj, callback){
	return Register.create(regObj, callback);
}
/*
module.exports.getContacts= function(callback){
	return Register.find(callback);
}*/

/*module.exports.getContactById = function(contactId, callback){
	return Register.findById({_id:contactId}, callback);
}*/

/*module.exports.updateContact = function(contactId, contactObj, callback){
	return Register.update({_id: contactId},
	{$set:{
			name: contactObj.name,
			email: contactObj.email,
			mobile: contactObj.mobile
	}}, callback)
}*/

/*module.exports.removeContact= function(contactId, callback){
	return Register.remove({_id:contactId}, callback)
}*/
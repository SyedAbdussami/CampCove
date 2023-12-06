var mongoose=require("mongoose");

//making the schema
var campgroundSchema=new mongoose.Schema({
	name:String,
	image:String,
	description:String,
	author:{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username:String,
	},
	comments:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Comment"
	}]
});
//eporting the functionality of the file 
module.exports = mongoose.model("Campgrounds",campgroundSchema);
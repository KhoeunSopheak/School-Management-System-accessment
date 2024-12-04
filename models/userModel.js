import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
fullname: { 
    type: String,
    require: true
},
email: { 
    type: String,
    require: true
},
password: { 
    type: Number,
    require: true
},
role: { 
    type: String,
    require: true
},
},
{
	timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;

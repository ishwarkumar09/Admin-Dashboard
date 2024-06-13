import mongooose from 'mongoose';

const UserSchema = new mongooose.Schema({
    name:{
        type: String,
        required:true,
        min: 2,
        max: 100,
    },
    email:{
        type: String,
        required:true,
        max: 2,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 5,    
    },
    city:String,
    state:String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array ,
    role:{
        type: String,
        enum: ["user" , "admin" , "superadmin"],
        default: "admin"

    } ,

},{ timestamps:true }

);

const User = mongooose.model("User" , UserSchema);

export default User;
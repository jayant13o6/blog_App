const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');


const userSchema = new Schema({
    Username :{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required: true 
    },
    Confirm_password: {
        type: String,
        required: true
    },
    tokens:[{ token:{type: String, required:true}}]
},{timestamps:true});


userSchema.methods.createToken = async function(){
    try{
        // const token = jwt.sign({Username:this.Username},"verystrongsecrettokeep")
        // users.tokens = token.toString()
        console.log(this._id)
        const tokenx = jwt.sign({_id:this._id},"verystrongsecrettokeep")
        console.log(tokenx)
        this.tokens= this.tokens.concat({token:tokenx.toString()})
        await this.save();
        return tokenx;
    }
    catch(error){console.log(error);}
}

//models--> mongoose.model('collection name', 'schema name')
const Users = mongoose.model('Users',userSchema);
module.exports = Users;

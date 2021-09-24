const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId :{ 
        // type: mongoose.Schema.ObjectId,
        type: String,
        ref: 'Users'
    },
    blogId :{
        type: mongoose.Schema.ObjectId,
        ref: 'Blog'
    },
    comments :{type: String, default:'aaaa'},
    parentId :{
        type: mongoose.Schema.ObjectId,
        ref: 'comment'
    },
    childId :{        
        type: mongoose.Schema.ObjectId,
        ref: 'comment'},
},{timestamps:true},);


const comments = mongoose.model('comments',commentSchema);
module.exports = comments;
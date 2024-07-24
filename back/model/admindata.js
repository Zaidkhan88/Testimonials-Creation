const {mongoose} = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    customMsg:{type:String},
    quiz:[String],
    linkkk:String
})
const AdminData = mongoose.model('AdminData',userSchema)
module.exports = {AdminData}
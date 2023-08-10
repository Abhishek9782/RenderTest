const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    mob: Number

}
)
module.exports = mongoose.model('student', studentSchema)
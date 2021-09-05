const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: false,
        required: [true, 'Please add a title'],
        maxlength: [40, 'Title cannot be more than 40 charcaters']
    },
    description: {
        type: String,
        required: false,
        maxlength: [200, 'Description cannot be more than 200 characters']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', noteSchema)
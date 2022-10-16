import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    discription: { type: String, required: true },
    duration: { type: String, required: true },
    date: { type: Date, required: true }
    }, {
    timestamps:true,
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
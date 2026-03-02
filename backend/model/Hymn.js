import mongoose from "mongoose";

const hymnSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    hymn: {
        type: String,
        required: true
    }
}, {timestamps: true});

const HymnModel = mongoose.model("Hymn", hymnSchema);

export default HymnModel
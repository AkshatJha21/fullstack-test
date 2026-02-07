import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    text: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
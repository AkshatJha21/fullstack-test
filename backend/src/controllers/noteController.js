import noteModel from "../models/noteModel.js";

export const createNote = async (req, res) => {
    try {
        const { text } = req.body;
        const userId = req.user.id;

        const note = await noteModel.create({
            text,
            user: userId
        });

        res.status(201).json({
            message: "Note created successfully!",
            note
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export const getNotes = async (req, res) => {
    try {
        const userId = req.user.id;
        const notes = await noteModel.find({ user: userId });

        if (!notes.length) {
            return res.status(404).json({
                message: "No notes created yet!"
            });
        }

        res.status(200).json({
            notes
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}
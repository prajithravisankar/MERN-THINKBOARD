export function getAllNotes(req, res) {
    res.status(200).send("you just fetched notes");
};

export function createNote(req, res) {
    res.status(200).send("you just created a note");
};

export function updateNote(req, res) {
    res.status(200).send("you just updated a note");
};

export function deleteNote(req, res) {
    res.status(200).send("you just deleted a note");
};
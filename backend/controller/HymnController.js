import HymnModel from "../model/Hymn.js";

export const addHymn = async (req, res) => {
	try {
		const { title, hymn } = req.body;
		const newHymn = new HymnModel({ title, hymn });
        await newHymn.save();

        if (newHymn.title) {
            res.json({error: "Hymn Already Exist!"})
        }

		res.status(200).json({
			message: `${title} Has Been Saved!`,
		});
	} catch (error) {
		res.status(500).json({
			error,
		});
	}
};

export const getHymns = async (req, res) => {
    try {
        const hymns = await HymnModel.find();
        res.json(hymns);
    } catch (error) {
        res.json({error: error.message})
    }
}
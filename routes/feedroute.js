const express = require('express')
const FeedModel = require('../Models/feedmodel.js')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { username, password, message, rating } = req.body;
        const feedbacks = new FeedModel({ username, password, message, rating })
        await feedbacks.save();
        res.status(201).json(feedbacks)
    } catch (error) {
        res.status(500).json({ message: 'error saving feedback', error })
    }
})

router.get('/', async (req, res) => {
    try {
        const feedbacks = await FeedModel.find(); 
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching feedbacks", error });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedFeedback = await FeedModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        res.json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ message: "Error updating feedback", error });
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        const deletedFeedback = await FeedModel.findByIdAndDelete(req.params.id);
        if(!deletedFeedback){
            return res.status(404).json({message: "feedback not found"});
        }
        res.json({ message:"feedback deleted succesfully"});
    } catch (error) {
        res.status(500).json({message: "error deteching feedback", error})
    }
})

module.exports = router;
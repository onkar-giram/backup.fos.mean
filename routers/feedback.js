const express = require('express')
const router = express.Router()
const Feedback = require('../models/feedback')

// Fetching all the feedbacks
router.get('/', async(req,res) => {

    try{
        const fetchedFeedbacks = await Feedback.find()
        res.send(fetchedFeedbacks)
    }catch(err){
        res.send('Error '+ err)
    }
    
});

// Adding a new feedback
router.post('/', async(req, res) => {

    const feedback = new Feedback({
        name : req.body.name,
        email_id: req.body.email,
        feedback: req.body.feedback,
    });
    try{
        const savedFeedback = await feedback.save();
        res.send('Feedback send successfully');
    }catch(err){
        res.send('Error '+err);
    }
});

//deleting a feedback
router.delete('/:feedbackId', async(req,res)=> {
    const feedbackId = req.params.feedbackId;
    try{
        await Feedback.deleteOne({_id: feedbackId})
        res.json('Feedback Deleted');
    }catch(err){
        res.send('Error: '+err) 
    }
})


module.exports = router
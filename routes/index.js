const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

/* router.get("/getSelectedEntry", (req, res, next) => {
  console.log('REQ PARAMS, REQ BODY', req.params, req.body)
  
}); */

router.get('/getSelectedEntry', (req, res, next) => {
  console.log('REQ QUERY HERE', req.query)
    /* JournalEntry.find()
    .then(entries => {
      res.json(entries);
    })
    .catch(err => {
      next(err)
    }) */
});

router.post('/entries', (req,res, next) => {
//console.log("this is req.body Post request",req.body)
const {date, question1, question2, question3, ratingMood, ratingMotivation} = req.body;
JournalEntry.create({date, question1, question2, question3, ratingMood, ratingMotivation})
  .then(entry => {
    res.send(entry)
    
  })
  /* .then(() => {
    JournalEntry.find().then((allJournals)=> res.send(allJournals))
  }) */
  . catch (err => {
    next(err)
  })
})


// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;


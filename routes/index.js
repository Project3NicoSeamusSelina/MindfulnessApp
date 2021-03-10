const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

/* router.get("/getSelectedEntry", (req, res, next) => {
  console.log('REQ PARAMS, REQ BODY', req.params, req.body)
  
}); */

router.get('/getSelectedEntry', (req, res, next) => {
  console.log('REQ', req.query.date)
  // res.json(req.query.date)
    JournalEntry.findOne( {date: new Date(req.query.date)} )
    .then(response => {
      console.log("RESPONSE HERE", response)
      res.json(response);
    })
    .catch(err => {
      next(err)
    })
});

router.post('/entries', (req,res, next) => {
const {date, question1, question2, question3, ratingMood, ratingMotivation} = req.body;
JournalEntry.create({date, question1, question2, question3, ratingMood, ratingMotivation})
  .then(response => res.send(response))
  . catch (err => {
    next(err)
  })
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;


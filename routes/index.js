const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/getSelectedEntry', (req, res, next) => {
  console.log('REQ QUERY HERE 3', typeof req.query.date)
  res.json(req.query.date)
    JournalEntry.findOne({
      date: req.query.date
    })
    .then(entries => {
      console.log('THESE ARE THE ENTRIES', entries)
      res.json(entries);
    })
    .catch(err => {
      next(err)
    })
});

router.post('/entries', (req,res, next) => {
  const {date, question1, question2, question3, ratingMood, ratingMotivation} = req.body;
  JournalEntry.create({date, question1, question2, question3, ratingMood, ratingMotivation})
    .then(response => res.send(response))
    .catch(err=> next(err))
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;


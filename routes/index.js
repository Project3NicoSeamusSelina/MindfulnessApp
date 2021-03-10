const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();
const moment = require('moment');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/getSelectedEntry', (req, res, next) => {

  var d = new Date(req.query.date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  let newdate = [year, month, day].join('-');
 
    JournalEntry.findOne({
      date: newdate
    })
    .then(entries => {
      res.json(entries)
      ;
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


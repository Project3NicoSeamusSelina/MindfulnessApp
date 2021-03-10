const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();
const moment = require('moment');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/getSelectedEntry', (req, res, next) => {
  console.log('REQ QUERY HERE 3', typeof req.query.date)
  console.log('THIS IS REQ QUERy DATE', req.query.date)
  //res.json(req.query.date)
  // var dateObj = new Date(req.query.date);
  // var month = dateObj.getUTCMonth() + 1; //months from 1-12
  // var day = dateObj.getUTCDate();
  // var year = dateObj.getUTCFullYear();
  var d = new Date(req.query.date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
        console.log('MONTH LENGTH', month)
    if (day.length < 2) 
        day = '0' + day;
  let newdate = [year, month, day].join('-');
  console.log('THIS NEWDATE HERE',typeof newdate, newdate, month)
  // newdate4DB = newdate.format('YYYY/MM/DD')
  // console.log('IS THIS THE DAGGER?', newdate4DB)
    JournalEntry.findOne({
      date: newdate
    })
    .then(entries => {
      console.log('THESE ARE THE ENTRIES', entries)
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


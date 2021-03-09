const JournalEntry = require('../models/JournalEntry.model')
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/entries", (req, res, next) => {
  //GET THE ENTRIES FOR THE JOURNAL 
res.json("All good in here");
});

// ADD ROUTER.GET TO RETRIEVE WHAT WE HAVE IN LINE 22 
router.post('/entries', (req,res, next) => {
console.log(req.body)
const {date, entries, description} = req.body;
JournalEntry.create({date, entries, description})
  .then(entry => {
    console.log(entry)
    
  }).then(() => {
    JournalEntry.find().then((allJournals)=> res.send(allJournals))
  })
  . catch (err => {
    next(err)
  })
})
// router.get('/', (req, res, next) => {
//   Project.find()
//     .then(projects => {
//       res.json(projects);
//     })
//     .catch(err => {
//       next(err)
//     })
// });

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;


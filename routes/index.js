
const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// router.get("/entries", (req, res, next) => {
//   res.json("All good in here");
// });

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


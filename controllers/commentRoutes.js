const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
  Comment.create({ ...req.body, user_id: req.session.user_id  })
    .then(createComment => {
      res.json(createComment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
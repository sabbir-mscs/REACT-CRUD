let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
//Student Model
let studentSchema = require("../Models/Student");
//!CREATE Student
router.route("/create-student").post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
//!READ Student
router.route("/").get((req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//!GET single student
router.route("/edit-student/:id").get((req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//!UPDATE Student
router.route("/update-student/:id").put((req, res, next) => {
  studentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Student updated successfully");
      }
    }
  );
});

//!DELETE Student
router.route("/delete-student/:id").delete((req, res, next) => {
  studentSchema.findByIdAndRemove(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    }
  );
});
module.exports = router;

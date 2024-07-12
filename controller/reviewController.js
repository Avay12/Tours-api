const Review = require('./../models/reviewModel');
const AppError = require('../utils/appError');
const Factory = require('./../controller/handleFactory');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = Factory.getAll(Review);
exports.getReview = Factory.getOne(Review);
exports.createReview = Factory.CreateOne(Review);
exports.updateReview = Factory.updateOne(Review);
exports.deleteReview = Factory.deleteOne(Review);

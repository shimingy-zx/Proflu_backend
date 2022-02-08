/*'use strict';
};*/
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const moment = require('moment');
  const CourseSchema = new Schema({
    name: {
      type: String,
      unique: false,
      required: true,
    },
    title: {
      type: String,
      unique: false,
      required: true,
    },
    dirTitle: {
      type: String,
      unique: false,
      required: true,
    },
    classTags: {
      type: String,
      unique: false,
      required: false,
    },
    description: {
      type: String,
      unique: false,
      required: false,
    },
    author: {
      type: String,
      unique: false,
      required: false,
    },
    authorTags: {
      type: String,
      unique: false,
      required: false,
    },
    category: {
      type: String,
      unique: false,
      required: false,
    },
    mode : {
      type: String,
      unique: false,
      required: false,
    },
    videoUrl : {
      type: String,
      unique: false,
      required: false,
    },
    imgUrl : {
      type: String,
      unique: false,
      required: false,
    }, 
    mainCourseId : {
      type: String,
      unique: false,
      required: false,
    },
    sort : {
      type: Number,
      unique: false,
      required: false,
    },
    duration : {
      type: Number,
      unique: false,
      required: false,
    },
    onlineTime: {
      type: Date,
      get: v => moment(v).format('YYYY-MM-DD HH:mm:ss'),
    },
    addTime: {
      type: Date,
      get: v => moment(v).format('YYYY-MM-DD HH:mm:ss'),
    },
    updateTime: {
      type: Date,
      get: v => moment(v).format('YYYY-MM-DD HH:mm:ss'),
    },

  });
  return mongoose.model('Course', CourseSchema);
}

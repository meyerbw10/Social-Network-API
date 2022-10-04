const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
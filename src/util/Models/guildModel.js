const { Schema, model } = require('mongoose');

const guildProfile = new Schema(
  {
    guildID: {
      type: String,
      required: true,
      unique: true,
    },
    language: {
      type: String,
      default: 'en_EN',
      required: true,
    },
    welcome: {
      type: Boolean,
      default: false,
    },
    welcomeChannel: {
      type: String,
    },
    dailyMsg: {
      type: Boolean,
      default: false,
    },
    dailyChannel: {
      type: String,
    },
    dailyRole: {
      type: String,
    },
    dailyTimezone: {
      type: String,
      default: "America/Chicago"
    },
    dailyRather: {
      type: Boolean,
      default: false,
    },
    dailyDay: {
      type: Number,
      default: 0,
    },
    nsfw: {
      type: Boolean,
      default: false,
    },
    botJoined: {
      type: Number,
    },
    customMessages: [{
      type: Object,
      default: {},
    },],
    customTypes: {
      type: String,
      default: "mixed"
    },
  },
  { timestamps: true },
);

module.exports = model('guildProfile', guildProfile);

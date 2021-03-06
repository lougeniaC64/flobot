"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DB_USER = process.env.DB_USER;
var DB_PASSWORD = process.env.DB_PASSWORD;
var DB_URI = process.env.DB_URI;
var DB_NAME = exports.DB_NAME = process.env.DB_NAME;
var DB_CONNECTION = exports.DB_CONNECTION = "mongodb://" + DB_USER + ":" + DB_PASSWORD + "@" + DB_URI;

var SLACK_FLOBOT_WEBHOOK = exports.SLACK_FLOBOT_WEBHOOK = process.env.SLACK_FLOBOT_WEBHOOK; // #invites
var SLACK_FLOBOT_WEBHOOK_TEST = exports.SLACK_FLOBOT_WEBHOOK_TEST = process.env.SLACK_FLOBOT_WEBHOOK_TEST; // #flobot

var TYPEFORM_ID = process.env.TYPEFORM_ID;
var TYPEFORM_KEY = exports.TYPEFORM_KEY = process.env.TYPEFORM_KEY;
var TYPEFORM_RESPONSES_URL = exports.TYPEFORM_RESPONSES_URL = "https://api.typeform.com/forms/" + TYPEFORM_ID + "/responses";
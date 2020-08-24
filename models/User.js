const mongoose = require("mongoose");
// const marked = require("marked");
// const slugify = require("slugify");
// const createDomPurify = require("dompurify");
// const { JSDOM } = require("jsdom");
// const dompurify = createDomPurify(new JSDOM().window);

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

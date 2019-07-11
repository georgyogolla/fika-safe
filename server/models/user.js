const mongoose = require("mongoose");
const schema = mongoose.schema;
const bcrypt = require("bcrypt-nodejs");
const userSchema = new schema({
  local: {
    email: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    role: { type: String, required: true }
  }
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSalt(5), null);
};

userSchema.methods.validpassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", userSchema);

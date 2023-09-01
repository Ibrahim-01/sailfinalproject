const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },

  fullName: { type : String, required: true },
  email: { type : String, required: true },
  phoneNumber: { type : String, required: true },
  gender: { type : String, required: true },
  status: { type : String, required: true },
  address: { type : String, required: true },
  yearGraduated: { type : String, required: true },
  medicalSchool: { type : String, required: true },
  MDN_Number: { type : String, required: true },
  accountNumber: { type : String, required: true },
  country: { type : String, required: true },
  state: { type : String, required: true },
  city: { type : String, required: true },
  localGovernment: { type : String, required: true },
  guarantorsFullName: { type : String, required: true },
  guarantorsAddress: { type : String, required: true },
  guarantorsEmail: { type : String, required: true },
  guarantorsPhoneNumber: { type : String, required: true },

});

module.exports = mongoose.model('caregiver', caregiverSchema);
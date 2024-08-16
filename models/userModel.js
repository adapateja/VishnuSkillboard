const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:
        {
            type: String,
            required: true
        },
        password:
        {
            type: String,
            required: true
        },

        fullName:
        {
            type: String,
            default: ""
        },
        registernumber:
        {
            type: String,
            default: ""
        },
        email:
        {
            type: String,
            default: ""
        },
        mobileNumber:
        {
            type: String,
            default: ""
        },
        

        appliedJobs: [],
    },
    { timestamps: true }
);

const userModal = new mongoose.model("users", userSchema);

module.exports = userModal;


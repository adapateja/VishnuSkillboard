const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true
        },
        applicableyear:
        {
            type: String,
            required: true
        },
        linktoapply:
        {
            type: String,
            required: true
        },
        lastdatetoapply:
        {
            type:String,
            required:true
        },
        fullDescription:
        {
            type: String,
            required: true
        },
        
        appliedCandidates:
        {
            type: [],
            required: true
        },
        postedBy:
        {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const jobModel = new mongoose.model("jobs", jobSchema);
module.exports = jobModel;

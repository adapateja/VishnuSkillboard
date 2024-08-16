import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Button, Tag } from 'antd';
import { Link } from "react-router-dom";

import moment from "moment";
import { applyJob } from '../redux/actions/jobActions';
// import { Button, Tag } from "antd";



const JobsInfo = ({ match }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { jobs } = useSelector((state) => state.jobsReducer);


    const userid = JSON.parse(localStorage.getItem("user"))._id;
    const job = jobs.find((job) => job._id === id);
    const appliedCandidates = job.appliedCandidates;

    const alreadyApplied = appliedCandidates.find(
        (candidate) => candidate.userid === userid
    );

    function applyNow() {
        dispatch(applyJob(job));
    }
    return (
        <DefaultLayout>
            <h4>Oppurtunity Details</h4>
            <hr></hr>
            {job && (
                <div>
                    <p>
                        <b>Title</b> : {job.title}
                    </p>

                    <p> 
                        <b>Link To Apply</b> : <a href={job.linktoapply} target="_blank" rel="noopener noreferrer">Click Here</a>
                    </p>
                    <p>
                        <b>Full Description</b> : {job.fullDescription}
                    </p>
                    <p style={{color:'red'}}>
                        <b>Last Date To Apply</b> : {job.lastdatetoapply}
                    </p>
                    
                    <p>
                        <b>Experience</b> : {job.applicableyear} Year
                    </p>
                    <br/>
                    <br/>
                    <p style={{ color: 'red' }}><b>Please click the 'Applied' button, After completing your application using the link provided in the 'Link to Apply' section.</b></p>
                    <hr />

                    
                    
                    
                    <p>
                        <b>Total Candidates applied</b> : {job.appliedCandidates.length}
                    </p>

                    <hr />

                    <div className="flex justify-content-between">

                        {job.postedBy === userid ? (
                            <Button>
                                <Link to={`/editjob/${job._id}`}>Edit Now</Link>
                            </Button>
                        ) : alreadyApplied ? (
                            <Tag color="green">Already Applied</Tag>
                        ) : (
                            <Button onClick={applyNow}>Applied</Button>
                        )}
                        <p>
                            <b>Posted on</b> {moment(job.createdAt).format("MMM DD yyyy")}
                        </p>
                    </div>
                </div>
            )}
        </DefaultLayout>
    )
}

export default JobsInfo
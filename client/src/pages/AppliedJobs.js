import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { Table } from "antd";
function AppliedJobs() {
    const { jobs } = useSelector(state => state.jobsReducer)

    const user = JSON.parse(localStorage.getItem('user'))

    const userAppliedJobs = []


    for (var job of jobs) {

        var appliedCandidates = job.appliedCandidates

        var temp = appliedCandidates.find(candidate => candidate.userid === user._id)


        if (temp) {

            var obj = {
                title: job.title,
                appliedDate: temp.appliedDate
            }

            userAppliedJobs.push(obj)

        }


    }

    const columns = [
        {
            title: 'Job Title',
            dataIndex: 'title'
        },
        {
            title: 'Applied Date',
            dataIndex: 'appliedDate'
        }
    ]

    return (
        <div>
            <DefaultLayout>
                <h1>Applied Oppurtunities</h1>
                <Table columns={columns} dataSource={userAppliedJobs} />
            </DefaultLayout>
        </div>
    )
}

export default AppliedJobs

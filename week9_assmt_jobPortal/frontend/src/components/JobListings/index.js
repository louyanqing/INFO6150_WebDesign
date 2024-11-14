import React from 'react'
import './jobListings.css'
import {jobPosts} from '../../jobPosts'/* imported from jobData.js */

const JobListings = () => {
    return(
        <div className="job-listing-container">
            <h2>Job Listings</h2>
            <ul className="job-list">
                {
                    jobPosts.map((job)=>(
                        <li key={job.id} className="job-list-item">
                            <h3 className="job-title">{job.title}</h3>
                            <p className="job-description">{job.description}</p>
                            <p className="job-requirements"><strong>Requirements:</strong>{job.requirements}</p>
                            <p className="job-salary"><strong>Salary:</strong>{job.salary}</p>
                            <p className="job-lastUpdated"><strong>LastUpdated:</strong>{job.lastUpdated}</p>
                            <a href={job.applyLink} className="apply-link">Apply Now</a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default JobListings
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const SingleJobWrapper = styled.div`
  background: #282d33;
  padding: 2rem;
  border-radius: 10px;
  color: #fff;

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-weight: 400;
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 18px;
    padding-bottom: 1rem;
  }

  div {
    width: 25%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }

  button {
    margin: 2rem 0;
    width: 100px;
    cursor: pointer;
    border-radius: 10px;
    padding: 0.3rem 0;
    font-size: 1rem;
    // background: #e74990;
    color: #fff;
    border: none;
  }

  hr {
    margin: 1rem 0rem;
  }

  .edit-button {
    background: #40ca8c;
  }

  .delete-button {
    background: #e75149;
  }

  .apply-button {
    background: #e74990;
    width: 200px;
  }
`;

const ViewSingleJob = () => {
  const url = "http://jr-dev-sim-backend.herokuapp.com";
  const { userData } = useContext(UserContext);
  const { jobId } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/job`)
      .then(res => setJob(res.data.find(job => job._id === jobId)))
      .catch(err => console.log(err));
  }, [jobId]);

  const handleDelete = e => {
    console.log(job);
    e.preventDefault();
    axios
      .delete(`${url}/api/job/jobs/${jobId}`)
      .then(res => console.log("Job Deleted"));
    console.log(jobId);
    alert("Job Deleted!");
    window.location = "/";
  };

  if (userData.user) {
    return (
      <SingleJobWrapper>
        <h3>
          {job.jobTitle} - {job.company}
        </h3>
        <h4>{job.location}</h4>
        <h4>{job.salary}</h4>
        <hr />
        <p>{job.description}</p>
        <h5>
          Contact Information: {job.contactName} - {job.contactEmail}
        </h5>
        <div>
          <Link to={`/update/${job._id}`}>
            <button className="edit-button">Edit</button>
          </Link>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </SingleJobWrapper>
    );
  }
  return (
    <SingleJobWrapper>
      <h3>
        {job.jobTitle} - {job.company}
      </h3>
      <h4>{job.location}</h4>
      <h4>{job.salary}</h4>
      <hr />
      <p>{job.description}</p>
      <h5>
        Contact Information: {job.contactName} - {job.contactEmail}
      </h5>
      <button className="apply-button">Apply for this position</button>
    </SingleJobWrapper>
  );
};

export default ViewSingleJob;

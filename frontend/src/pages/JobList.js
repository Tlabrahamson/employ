import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

// Components
import Hero from "../components/Hero";

const JobListWrapper = styled.div`
  background: #5c5470;
  padding: 2rem;
  border-radius: 10px;
  display: grid;
  grid-row-gap: 2rem;

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-weight: 400;
    font-size: 1.5rem;
  }

  p {
    font-size: 18px;
  }

  article {
    padding: 1rem;
    border-radius: 10px;
    background: #352f44;
    color: #fff;
  }

  article a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 2rem;
      padding: 4rem 2rem;
    }
  }
`;

const JobList = () => {
  const url = "https://jr-dev-sim-backend.herokuapp.com";
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${url}/api/job/`)
      .then(res => {
        setLoading(false);
        setJobs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const listJobs = jobs
    .slice(0)
    .reverse()
    .map(job => {
      let month = new Date(job.date).getMonth();
      let day = new Date(job.date).getDate();
      let year = new Date(job.date).getFullYear();
      let jobDate = `${month}/${day}/${year}`;

      return (
        <article key={job._id}>
          <Link to={`/jobs/${job._id}`}>
            <h3>{job.jobTitle}</h3>
          </Link>
          <h4>{job.company}</h4>
          <p>{job.location}</p>
          <p>Posted: {jobDate}</p>
        </article>
      );
    });

  return (
    <>
      <Hero />
      {loading === true ? (
        <CircularProgress className="progress" />
      ) : (
        <JobListWrapper>{listJobs}</JobListWrapper>
      )}
    </>
  );
};

export default JobList;

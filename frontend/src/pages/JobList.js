import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

// Components
import Hero from "../components/Hero";

const JobListWrapper = styled.div`
  border-radius: 10px;
  display: grid;
  grid-row-gap: 2rem;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      transform: scale(1.05);
      box-shadow: 2px 4px 16px #dfdfdf;
    }

    &:active {
      transform: scale(1);
      box-shadow: 2px 4px 4px #dfdfdf;
    }
  }

  h4 {
    font-weight: 400;
  }

  article {
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 2px 4px 8px #dfdfdf;
  }

  span {
    font-weight: 700;
  }
`;

// Need to add pagination or infinite scroll when job list exceeds 10 jobs

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
      let postedDate = new Date(job.date);
      let currentDate = new Date();
      let difference = currentDate.getTime() - postedDate.getTime();
      let differenceInDays = Math.floor(difference / (1000 * 3600 * 24));

      return (
        <Link to={`/jobs/${job._id}`}>
          <article key={job._id}>
            <h2>{job.jobTitle}</h2>
            <p>
              <span>{job.company}</span>
            </p>
            <p>{job.location}</p>
            <p>
              Posted {differenceInDays}{" "}
              {differenceInDays <= 1 ? "day ago" : "days ago"}
            </p>
          </article>
        </Link>
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

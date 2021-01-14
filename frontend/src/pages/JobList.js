import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Pagination from "react-js-pagination";
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

const JobList = () => {
  const url = "https://jr-dev-sim-backend.herokuapp.com";
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [activePage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Logic For Current Jobs
  const indexOfLastJob = activePage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

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

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const listJobs = currentJobs
    .slice(0)
    .reverse()
    .map(job => {
      let postedDate = new Date(job.date);
      let currentDate = new Date();
      let difference = currentDate.getTime() - postedDate.getTime();
      let differenceInDays = Math.floor(difference / (1000 * 3600 * 24));

      return (
        <Link key={job._id} to={`/jobs/${job._id}`}>
          <article>
            <h2>{job.jobTitle}</h2>
            <p>
              <span>{job.company}</span>
            </p>
            <p>{job.location}</p>
            <p>
              Posted {differenceInDays === 0 ? "today" : differenceInDays}{" "}
              {differenceInDays === 1
                ? "day ago"
                : differenceInDays > 1
                ? "days ago"
                : ""}
            </p>
          </article>
        </Link>
      );
    });

  const filterJobs = jobs
    .filter(job => job.category === category)
    .map(job => {
      let postedDate = new Date(job.date);
      let currentDate = new Date();
      let difference = currentDate.getTime() - postedDate.getTime();
      let differenceInDays = Math.floor(difference / (1000 * 3600 * 24));

      return (
        <Link key={job._id} to={`/jobs/${job._id}`}>
          <article>
            <h2>{job.jobTitle}</h2>
            <p>
              <span>{job.company}</span>
            </p>
            <p>{job.location}</p>
            <p>
              Posted {differenceInDays === 0 ? "today" : differenceInDays}{" "}
              {differenceInDays === 1
                ? "day ago"
                : differenceInDays > 1
                ? "days ago"
                : ""}
            </p>
          </article>
        </Link>
      );
    });

  return (
    <>
      <Hero />
      {loading === true ? (
        <div className="progress">
          <CircularProgress />
        </div>
      ) : (
        <JobListWrapper>
          <label htmlFor="category">Filter by category</label>
          <select name="category" onChange={e => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="sales-and-marketing">Sales and Marketing</option>
            <option value="customer-support">Customer Support</option>
            <option value="other">Other</option>
          </select>
          {category === "" ? listJobs : filterJobs}
        </JobListWrapper>
      )}
      <Pagination
        className="pagination"
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={jobs.length}
        pageRangeDisplay={3}
        onChange={handlePageChange}
      />
    </>
  );
};

export default JobList;

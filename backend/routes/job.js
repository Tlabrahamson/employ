const router = require("express").Router();
const Job = require("../model/Job");

// Get all of the jobs
router.get("/", async (req, res) => {
  await Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json("Error: " + err));
});

// Create a new job listing
router.post("/create", async (req, res) => {
  // Create a new job
  const job = new Job({
    jobTitle: req.body.jobTitle,
    company: req.body.company,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
    contactName: req.body.contactName,
    contactEmail: req.body.contactEmail
  });
  try {
    const savedJob = await job.save();
    res.send({ savedJob });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Find a single job by ID
router.get("/jobs/:id", async (req, res) => {
  await Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json("Error: " + err));
});

// Find a job by ID and delete
router.delete("/jobs/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    .then(res.json("Job deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update a current job listing
router.post("/update/:id", async (req, res) => {
  await Job.findByIdAndUpdate(req.params.id, { useFindAndModify: false }).then(
    job => {
      (job.jobTitle = req.body.jobTitle),
        (job.company = req.body.company),
        (job.description = req.body.description),
        (job.location = req.body.location),
        (job.salary = req.body.salary),
        (job.contactName = req.body.contactName),
        (job.contactEmail = req.body.contactEmail);

      job
        .save()
        .then(() => res.json("Job updated!"))
        .catch(err => res.status(400).json("Error" + err));
    }
  );
});

module.exports = router;

const express = require("express");
const { launches } = require("../../models/launches.model");
const { httpGetAllLaunches, httpScheduleNewLaunches, httpAbortLaunch } = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpScheduleNewLaunches);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;

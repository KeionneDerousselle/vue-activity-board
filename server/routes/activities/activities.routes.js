var express = require('express')
const ActivitiesController = require('./activities.controller')
const { Activities } = require('../../models')

const initRouter = (router, activitiesController) => {
  router.get('/', activitiesController.getActivities.bind(activitiesController))
  return router
}

module.exports = initRouter(
  express.Router(),
  new ActivitiesController(Activities)
)

class ActivitiesController {
  /**
   * Controller class for the Activities endpoints
   * @param {sequelize.Model} activities
   */
  constructor(activities) {
    this.activities = activities
  }

  /**
   * Retrieves all activities
   * @param {express.Request} req
   * @param {express.Response} res
   */
  async getActivities(req, res) {
    try {
      const result = await this.activities.findAll()
      res.json({ activities: result })
    } catch (error) {
      res.status(error.statusCode || 500).json({
        message: (error && error.message) || error
      })
    }
  }
}

module.exports = ActivitiesController

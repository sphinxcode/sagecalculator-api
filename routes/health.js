const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const healthStatus = {
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: '1.0.0',
    services: {
      ephemeris: 'operational',
      geocoding: 'operational',
      human_design_engine: 'operational'
    }
  };

  res.status(200).json(healthStatus);
});

module.exports = router;
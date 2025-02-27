// routes/insightsRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  // 1. On-Time Percentage
router.get('/ontime', async (req, res) => {
    try {
    const result = await pool.query(`
        SELECT 
        COUNT(*) FILTER (WHERE EXTRACT(HOUR FROM time_in) < 9) AS on_time_count,
        COUNT(*) AS total_count
        FROM attendance
    `);

    const { on_time_count, total_count } = result.rows[0];
      const percentage = total_count > 0 ? (on_time_count / total_count) * 100 : 0;

      res.json({ percentage: percentage.toFixed(2) }); // Return percentage with 2 decimal places
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // 2. Late Percentage
router.get('/late', async (req, res) => {
    try {
    const result = await pool.query(`
        SELECT 
        COUNT(*) FILTER (WHERE EXTRACT(HOUR FROM time_in) >= 9) AS late_count,
        COUNT(*) AS total_count
        FROM attendance
    `);

    const { late_count, total_count } = result.rows[0];
      const percentage = total_count > 0 ? (late_count / total_count) * 100 : 0;

    res.json({ percentage: percentage.toFixed(2) });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // 3. Total Break Hours
router.get('/breakhours', async (req, res) => {
    try {
    const result = await pool.query(`
        SELECT 
        SUM(EXTRACT(EPOCH FROM (break_end - break_start))) AS total_seconds
        FROM attendance
        WHERE break_start IS NOT NULL AND break_end IS NOT NULL
    `);

    const totalSeconds = result.rows[0].total_seconds || 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    res.json({ hours, minutes, seconds });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // 4. Total Working Hours
router.get('/workinghours', async (req, res) => {
    try {
    const result = await pool.query(`
        SELECT 
        SUM(EXTRACT(EPOCH FROM (time_out - time_in))) AS total_seconds
        FROM attendance
        WHERE time_in IS NOT NULL AND time_out IS NOT NULL
    `);
    const totalSeconds = result.rows[0].total_seconds || 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    res.json({ hours, minutes, seconds });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

  // 5. Average Working Hours per Day
router.get('/average-working-hours', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
            AVG(EXTRACT(EPOCH FROM (time_out - time_in))) AS average_seconds
            FROM attendance
            WHERE time_in IS NOT NULL AND time_out IS NOT NULL
        `);

        const averageSeconds = result.rows[0].average_seconds || 0;
        const hours = Math.floor(averageSeconds / 3600);
        -const minutes = Math.floor((averageSeconds % 3600) / 60);
        const seconds = Math.floor(averageSeconds % 60);

        res.json({ hours, minutes, seconds });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
  // 6. Total Absent Days
    router.get('/absent-days', async (req, res) => {
        try {
            const result = await pool.query(`
                SELECT COUNT(*) FROM attendance WHERE time_in IS NULL AND time_out IS NULL
            `);

            res.json({ absentDays: parseInt(result.rows[0].count) });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

return router;
};
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// data for chart (this would be replaced with real data)
const chartData = [
  { time: '10:00', value: 50 },
  { time: '11:00', value: 60 },
  { time: '12:00', value: 70 }
];

// Endpoint to get chart data based on filters
app.post('/getChartData', (req, res) => {
  const { access_time, access_date, employee_name, algo_status } = req.body;

  // Filter chart data based on algo_status (example filtering logic)
  const filteredData = chartData.filter(item => algo_status === 'ON' ? item.value >= 60 : item.value < 60);
  
  res.json(filteredData);
});

// Endpoint to log access
app.post('/logAccess', (req, res) => {
  const { access_time, access_date, employee_name, algo_status } = req.body;

  // Here you would log the data to a database or file system
  console.log('Logging Access:', req.body);

  // Respond with a success message
  res.status(200).send('Access logged successfully');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

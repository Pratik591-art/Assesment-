import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch chart data from the API
    axios.get('http://localhost:5000/api/chart-data')
      .then(response => {
        setChartData(response.data);
      })
      .catch(error => console.error('Error fetching chart data:', error));
  }, []);

  const data = {
    labels: chartData.map(item => item.label),
    datasets: [
      {
        label: 'Chart Data',
        data: chartData.map(item => item.value),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Data',
      },
    },
  };

  return (
    <div className="App">
      <h1>Chart Data</h1>
      <Line data={data} options={options} />
    </div>
  );
}

export default App;

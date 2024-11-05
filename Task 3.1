document.getElementById('dataAccessForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const accessTime = document.getElementById('accessTime').value;
  const accessDate = document.getElementById('accessDate').value;
  const employeeName = document.getElementById('employeeName').value;
  const algoStatus = document.getElementById('algoStatus').value;

  // Prepare the data to be sent to the API
  const formData = {
    access_time: accessTime,
    access_date: accessDate,
    employee_name: employeeName,
    algo_status: algoStatus
  };

  try {
    // Call the API to get chart data based on filters
    const response = await fetch('https://api.example.com/getChartData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const chartData = await response.json(); // Assuming API returns chart data in JSON format
      displayChartData(chartData); // Display the updated chart data
    } else {
      alert('Error fetching chart data.');
    }

    // Log the access in the backend (for logging purposes)
    const logResponse = await fetch('https://api.example.com/logAccess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!logResponse.ok) {
      alert('Error logging access data.');
    }

  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong.');
  }
});

// Function to display chart data (This will depend on the format of chart data returned by the API)
function displayChartData(data) {
  const chartDataDiv = document.getElementById('chartData');
  chartDataDiv.innerHTML = ''; // Clear any previous data
  
  // Assuming the chart data is an array of objects, e.g., [{ time: '10:00', value: 50 }, ...]
  data.forEach(item => {
    const p = document.createElement('p');
    p.textContent = `Time: ${item.time}, Value: ${item.value}`;
    chartDataDiv.appendChild(p);
  });
}

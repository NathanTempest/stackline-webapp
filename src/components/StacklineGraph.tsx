import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ProductData, SalesData } from '../types';
import data from '../assets/stackline_frontend_assessment_data_2021.json';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StacklineGraph: React.FC = () => {
  const productData: ProductData = data[0];
const salesData: SalesData[] = productData.sales;

const monthLabels = salesData.map((sale) => {
    const date = new Date(sale.weekEnding);
    const options: Intl.DateTimeFormatOptions = { month: 'short' as const };
    return new Intl.DateTimeFormat('en-US', options).format(date);
});

  const chartData = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Retail Sales',
        data: salesData.map((sale) => sale.retailSales),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.2,
      },
      {
        label: 'Wholesale Sales',
        data: salesData.map((sale) => sale.wholesaleSales),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Retail and Wholesale Sales Over Time',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Months',
        },
        grid: {
          display: false
      },
      },
      y: {
        title: {
          display: false,
          text: 'Sales (in $)',
        },
        grid: {
          display: false
      },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StacklineGraph;
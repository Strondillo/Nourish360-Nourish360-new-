import { ChartData, ChartOptions } from 'chart.js';

export const graphData: Record<'bar' | 'line' | 'pie' | 'doughnut', ChartData> = {
  bar: {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Energy Intake',
        data: [2500, 2400, 2300, 2200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  },
  pie: {
    labels: ['Carbs', 'Proteins', 'Fats'],
    datasets: [
      {
        label: 'Macronutrient Distribution',
        data: [55, 30, 15],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  },
  doughnut: {
    labels: ['Carbs', 'Proteins', 'Fats'],
    datasets: [
      {
        label: 'Macronutrient Distribution',
        data: [55, 30, 15],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  },
  line: {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Energy Intake',
        data: [2500, 2400, 2300, 2200],
        borderColor: '#4BC0C0',
        fill: false,
      },
    ],
  },
};

export const graphOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

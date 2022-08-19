import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = (props) => {
    const data = {
        labels: [12, 34, 54, 123],
        datasets: [{
            label: "User count",
            data: [12, 34, 54, 123],
        }],
        hoverOffset: 4
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <div style={{ flex: 1 }}>
            <Line data={data} options={options} />

        </div>
    );
}

export default Chart;
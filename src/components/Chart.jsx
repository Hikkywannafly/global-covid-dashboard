import { Line } from 'react-chartjs-2';
const Chart = (props) => {

    return (
        <>
            <div style={{ flex: 1 }}>
                <Line
                    datasetIdKey='id'
                    data={{
                        labels: ['Jun', 'Jul', 'Aug'],
                        datasets: [
                            {
                                id: 1,
                                label: '',
                                data: [5, 6, 7],
                            },
                            {
                                id: 2,
                                label: '',
                                data: [3, 2, 1],
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                            },
                        ],
                    }}
                />
            </div>
        </>
    );
}
export default Chart;
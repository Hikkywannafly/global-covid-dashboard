import StatusTime from '../components/StatusTime';
import StatusBox from '../components/StatusBox';
import DataCountry from '../components/DataCountry';
import Chart from '../components/Chart';
const DashBoard = () => {
    return (
        <>
            <StatusTime />

            <div className="status-box-grid">
                <StatusBox />
            </div>
            <div className="contries-container">
                <DataCountry />
            </div>
            <div className="chart-container">

            </div>
        </>
    );
}

export default DashBoard;
import StatusTime from '../components/StatusTime';
import StatusBox from '../components/StatusBox';
import DataCountry from '../components/DataCountry';
// import Chart from '../components/Chart';
import { useEffect, useState } from "react";
import axios from 'axios';
const DashBoard = () => {
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState([]);
    const [countries, setCountries] = useState([]);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const fetchDataSummary = async () => await axios.get('https://api.covid19api.com/summary');
        fetchDataSummary()
            .then(res => { console.log(res.data) })
            .catch(err => console.error(err));
        const fetchDataWorld = async () => await axios.get('https://api.covid19api.com/world');
        fetchDataWorld()
            .then(res => console.log(res.data))
            .catch(err => console.error(err));

    }, []);

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
                {/* <Chart /> */}
            </div>
        </>
    );
}

export default DashBoard;
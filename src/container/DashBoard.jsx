import StatusTime from '../components/StatusTime';
import StatusBox from '../components/StatusBox';
import DataCountry from '../components/DataCountry';
import Chart from '../components/Chart';
import { useEffect, useState } from "react";
import axios from 'axios';
const DashBoard = () => {
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState([]);
    const [countries, setCountries] = useState([]);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const fetchDataSummary = async () => {
            const data = await axios.get('https://api.covid19api.com/summary')
            return data;
        };
        fetchDataSummary()
            .then(res => res.data)
            .then(data => {
                console.log(data.Global);
                setStatus(data.Global);
                setCountries(data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed));
            })
            .catch(err => console.error(err));
        const fetchDataWorld = async () => await axios.get('https://api.covid19api.com/world');
        fetchDataWorld()
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
        setLoading(false);
    }, []);
    return (
        <>
            <StatusTime updated={status.Date} />

            <div className="status-box-grid">
                <StatusBox title="Total" value={status.TotalConfirmed} textColor="orange" />
                <StatusBox title="Death" value={status.TotalDeaths} textColor="red" />
                <StatusBox title="Recovered" value={status.TotalRecovered} textColor="#00FF00" />
                <StatusBox title="New Cases" value={status.NewConfirmed} textColor="yellow" />
                <StatusBox title="New Death" value={status.NewDeaths} textColor="orangered" />
                <StatusBox title="Countries" value={countries.length} textColor="rgb(0, 174, 255)" />
            </div>
            <div className="contries-container">
                {
                    countries.map((country) => (
                        <DataCountry key={country.Country} name={country.Country} value={country.TotalConfirmed}
                            percentage={Math.ceil((country.TotalConfirmed / countries[0].TotalConfirmed) * 100)} />)
                    )
                }

                {/* {<DataCountry name={'viet nam'} value={'đá'} precentage={100} />} */}
            </div>
            <div className="chart-container">
                <Chart />
            </div>
        </>
    );
}

export default DashBoard;
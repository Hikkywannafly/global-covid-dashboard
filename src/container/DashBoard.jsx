import StatusTime from '../components/StatusTime';
import StatusBox from '../components/StatusBox';
import DataCountry from '../components/DataCountry';
import Chart from '../components/Chart';
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
const DashBoard = () => {
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState([]);
    const [countries, setCountries] = useState([]);
    const [timeLine, setTimeline] = useState([]);

    useEffect(async () => {
        const fetchDataWorld = async () => {
            const data = await axios.get('https://api.covid19api.com/world');
            console.log(data);
            return data;
        }
        await fetchDataWorld()
            .then(res => res.data)
            .then(data => {
                console.log(data)
                setTimeline(data.sort((a, b) => new Date(a.Date) - new Date(b.Date)));

            })
            .catch(err => console.error(err));


        const fetchDataSummary = async () => {
            const data = await axios.get('https://api.covid19api.com/summary')

            return data;
        };


        await fetchDataSummary()
            .then(res => res.data)
            .then(data => {
                // console.log(data.Global);
                setStatus(data.Global);
                setCountries(data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed));
            })
            .catch(err => console.error(err));

        setLoading(false);

    }, []);
    return (
        <>
            {loading ?
                (<div
                    style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        display: "flex", height: "100%", width: "100%", backgroundColor: "rgb(39, 29, 52)",
                        justifyContent: "center", alignItems: "center"
                    }}>

                    <CircularProgress color="success" />
                </div>) : (
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
                            <Chart color={'rgb(145, 207, 255)'} name={'Total Covid'}
                                // data={{
                                //     name: timeLine.filter((e) => e.Date.map(e => e.Date)),
                                //     uv: (timeLine.filter((e) => e.TotalConfirmed.map(e => e.TotalConfirmed)))
                                // }}
                                // data={timeLine.filter((e) => e.TotalConfirmed.map((e) => e.TotalConfirmed))}
                                data={timeLine.filter((e) => e.TotalConfirmed).map((e) => e.TotalConfirmed)}
                                labels={timeLine.filter((e) => e.TotalConfirmed).map((e) => e.Date)}
                            // label={timeLine.filter((e) => e.Date.map(e => e.Date))}
                            />
                            <Chart color={'rgb(255, 251, 145)'} name={'New Case Covid'}
                                data={timeLine.filter((e) => e.NewConfirmed).map((e) => e.NewConfirmed)}
                                labels={timeLine.filter((e) => e.NewConfirmed).map((e) => e.Date)}
                            />
                            <Chart color={'rgb(251, 119, 119)'} name={'New death Covid'}
                                data={timeLine.filter((e) => e.NewDeaths).map((e) => e.NewDeaths)}
                                labels={timeLine.filter((e) => e.NewDeaths).map((e) => e.Date)}
                            />
                        </div>
                    </>
                )
            }
        </>
    );
}

export default DashBoard;

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = (props) => {
    const { color, name, data, labels } = props;

    const newLabels = labels.map((e) => `${new Date(e).toLocaleDateString("default", { month: "short" })} ${new Date(e).getDate()}`);
    const dataSets = data.map((e, i) => ({ name: newLabels[i], uv: e }));
    const CustomTooltip = ({ payload, label, active }) => {
        if (active) {
            return (
                <div className="custom-tooltip" >
                    <div style={{ padding: '3px', }}>
                        <p className="desc" style={{ color: color }} >{name}</p>
                        <p className="label" style={{ color: 'rgb(4, 6, 54)', weight: '600' }} >{`${label}`}</p>
                        <p className="label" style={{ color: 'rgb(161, 244, 161))' }} >{`${payload[0].value}`} </p>
                    </div>


                </div>
            );
        }

        return null;
    }
    return (
        <>
            <div className="chart-box">
                <div className='label-chart' > <h4 style={{ color: color }}>{name}</h4></div>
                <div style={{ width: '100%', height: '300px' }}>

                    <ResponsiveContainer>
                        <AreaChart
                            data={dataSets}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip content={CustomTooltip} />
                            <Area type="monotone" dataKey='uv' stroke={color} fill={color} />
                        </AreaChart>

                    </ResponsiveContainer>

                </div>
            </div>
        </>
    );
}

export default Chart;
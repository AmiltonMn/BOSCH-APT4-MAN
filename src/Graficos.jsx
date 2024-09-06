import { Buttons } from "./components/Buttons"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    {name: 'Page A', uv: 900, pv: 240, amt: 2400},
    {name: 'Page B', uv: 400, pv: 240, amt: 2400},
    {name: 'Page C', uv: 1400, pv: 240, amt: 2400}
];

const data2 = [
    {name: 'Page A', uv: 500, pv: 240, amt: 2400},
    {name: 'Page B', uv: 3800, pv: 240, amt: 2400},
    {name: 'Page C', uv: 300, pv: 240, amt: 2400},
    {name: 'Page D', uv: 9000, pv: 240, amt: 2400}
]

export default function GraphPage() {

    
    return (
        <>
            <div>
                <Buttons />
            </div>

            <div style={{marginTop: "100px", justifyContent: "center", alignItems: "center", flexDirection: "row", display: "flex"}}>

                <div>
                    <LineChart width={600} height={300} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>

                <div>
                    <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>

                
            </div>

        </>
    )
}
import { LineChart, XAxis, CartesianGrid, Line, Tooltip} from "recharts";

const data = [
    {
        name: 'Page A',
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 1000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 1800,
        pv: 9800,
        amt: 290,
    },
    {
        name: 'Page D',
        uv: 1780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1300,
        pv: 3908,
        amt: 2000,
    },
];


const Report = () =>{

    return(
            <LineChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
            </LineChart>
        
    )
}

export default Report
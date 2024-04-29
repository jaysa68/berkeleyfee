import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';
import "../../styles/globals.css";

const textColor = "#cad3f5";

const dataMap = new Map([
  ['2023', [
        { name: 'Student Affairs Division', value: 29009334, fill:"#b7bdf8" },
        { name: 'University Health Services', value: 14048487, fill:"#f5bde6" },
        { name: 'AVC SA & Dean of Students', value: 7824953, fill:"#f0c6c6" },
        { name: 'Equity and Inclusion Division', value: 4483359, fill:"#8aadf4" },
        { name: 'Undergraduate Education Division', value: 3369773, fill:"#f4dbd6" },
        { name: 'Research Teaching & Learning', value: 2982364, fill:"#a6da95" },
        { name: 'Financial Aid Division', value: 2363619, fill:"#c6a0f6" },
        { name: 'Graduate Division', value: 1604871, fill:"#eed49f" },
        { name: 'BAMPFA', value: 1300497, fill:"#ed8796" },
        { name: 'Disabled Students Program', value: 1297576, fill:"#8bd5ca" },
  ]]
])

function sumValues(dataset) {
  console.log(dataset)
  const sum = dataset.reduce((sum, data) => sum + data.value, 0)
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(sum)

}


export default function Example() {
const year = "2023"

  return (
    <ResponsiveContainer width="100%">
      <PieChart>
        <text x={"50%"} y={"50%"} dy={8} textAnchor="middle" fill={textColor} fontWeight={"bold"} fontSize={"28px"}>
          {sumValues(dataMap.get(year))}
        </text>
        <Pie dataKey="value" data={dataMap.get(year)} innerRadius={"50%"} outerRadius={"100%"} />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

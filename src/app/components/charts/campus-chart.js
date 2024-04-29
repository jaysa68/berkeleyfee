import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';
import "../../styles/globals.css";

const textColor = "#cad3f5";

const dataMap = new Map([
  ['Undergraduate', [
        { name: 'Lower Sproul Fee', value: 306, fill:"#a6da95" },
        { name: 'Wellness Fee', value: 212.75, fill:"#8bd5ca" },
        { name: 'Health Care Fee', value: 92.75, fill:"#91d7e3" },
        { name: 'Life Safety Fee', value: 46.00, fill:"#7dc4e4" },
        { name: 'ASUC Fee', value: 34.00, fill:"#8aadf4" },
        { name: 'Big C Fee', value: 33.00, fill:"#b7bdf8" },
        { name: 'STARR Fee', value: 28.75, fill:"#fadbd6" },
        { name: 'GOLD Fee', value: 20.75, fill:"#f0c6c6" },
        { name: 'Student Basic Needs Fee', value: 17.25, fill:"#f5bde6" },
        { name: 'TGIF Fee', value: 10.00, fill:"#c6a0f6" },
        { name: 'V.O.I.C.E Fee', value: 6.00, fill:"#ed8796" },
        { name: 'Housing Security Fee', value: 4.50, fill:"#ee99a0" },
        { name: 'Ethnic Studies Fee', value: 2.25, fill:"#eed49f" },
  ]],
  ['Graduate', [
        { name: 'Lower Sproul Fee', value: 306, fill:"#a6da95" },
        { name: 'Wellness Fee', value: 212.75, fill:"#8bd5ca" },
        { name: 'Health Care Fee', value: 92.75, fill:"#91d7e3" },
        { name: 'Life Safety Fee', value: 46.00, fill:"#7dc4e4" },
        { name: 'GA Fee', value: 33.00, fill:"#f5a97f" },
        { name: 'Big C Fee', value: 33.00, fill:"#b7bdf8" },
        { name: 'GOLD Fee', value: 20.75, fill:"#f0c6c6" },
        { name: 'Student Basic Needs Fee', value: 17.25, fill:"#f5bde6" },
        { name: 'TGIF Fee', value: 10.00, fill:"#c6a0f6" },
        { name: 'V.O.I.C.E Fee', value: 6.00, fill:"#ed8796" },
        { name: 'Housing Security Fee', value: 4.50, fill:"#ee99a0" },
        { name: 'Ethnic Studies Fee', value: 2.25, fill:"#eed49f" },
  ]],
])

function sumValues(dataset) {
  const sum = dataset.reduce((sum, data) => sum + data.value, 0)
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(sum)

}


export default function Example( { year, res, grad }) {

  return (
    <ResponsiveContainer width="100%">
      <PieChart>
        <text x={"50%"} y={"50%"} dy={8} textAnchor="middle" fill={textColor} fontWeight={"bold"} fontSize={"28px"}>
          {sumValues(dataMap.get(grad))}
        </text>
        <Pie dataKey="value" data={dataMap.get(grad)} innerRadius={"50%"} outerRadius={"100%"} />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

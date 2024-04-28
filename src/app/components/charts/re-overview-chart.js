import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';
import "../../styles/globals.css";

const textColor = "#cad3f5";

const dataMap = new Map([
  ['2023', new Map([
    ['Resident', new Map ([
      ['Undergraduate', [
        { name: 'Undergraduate Tuition', value: 12522, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1230, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1640, fill:"#eed49f" },
        { name: 'IREF', value: 235, fill:"#a6da95" },
        { name: 'Class Pass Fee', value: 210, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Graduate Tuition', value: 12264, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1206, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1580.5, fill:"#eed49f" },
        { name: 'IREF', value: 235, fill:"#a6da95" },
        { name: 'Class Pass Fee', value: 210, fill:"#8bd5ca" },
      ]],
    ])],
    ['Non-resident', new Map ([
      ['Undergraduate', [
        { name: 'Nonresident Supplemental Tuition', value: 32574, fill:"#c6a0f6"},
        { name: 'Undergraduate Tuition', value: 12522, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1230, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1640, fill:"#eed49f" },
        { name: 'IREF', value: 235, fill:"#a6da95" },
        { name: 'Class Pass Fee', value: 210, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Nonresident Supplemental Tuition', value: 15102, fill:"#c6a0f6"},
        { name: 'Graduate Tuition', value: 12264, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1206, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1580.5, fill:"#eed49f" },
        { name: 'IREF', value: 235, fill:"#a6da95" },
        { name: 'Class Pass Fee', value: 210, fill:"#8bd5ca" },
      ]],
    ])]
  ])],
  ['2022', new Map([
    ['Resident', new Map ([
      ['Undergraduate', [
        { name: 'Undergraduate Tuition', value: 11928, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1176, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1501, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Undergraduate Tuition', value: 11700, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1152, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1434, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
    ])],
    ['Non-resident', new Map ([
      ['Undergraduate', [
        { name: 'Nonresident Supplemental Tuition', value: 31026, fill:"#c6a0f6"},
        { name: 'Undergraduate Tuition', value: 11928, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1176, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1501, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Nonresident Supplemental Tuition', value: 15102, fill:"#c6a0f6"},
        { name: 'Undergraduate Tuition', value: 11700, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1152, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1434, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
    ])]
  ])],
  ['2021', new Map([
    ['Resident', new Map ([
      ['Undergraduate', [
        { name: 'Undergraduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1465.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Graduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1399.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
    ])],
    ['Non-resident', new Map ([
      ['Undergraduate', [
        { name: 'Nonresident Supplemental Tuition', value: 29754, fill:"#c6a0f6"},
        { name: 'Undergraduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1465.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Nonresident Supplemental Tuition', value: 15102, fill:"#c6a0f6"},
        { name: 'Graduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1399.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
    ])]
  ])],
  ['2020', new Map([
    ['Resident', new Map ([
      ['Undergraduate', [
        { name: 'Undergraduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1551.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Resident Graduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1485.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
    ])],
    ['Non-resident', new Map ([
      ['Undergraduate', [
        { name: 'Nonresident Supplemental Tuition', value: 29754, fill:"#c6a0f6"},
        { name: 'Undergraduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1551.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
      ['Graduate', [
        { name: 'Nonresident Supplemental Tuition', value: 15102, fill:"#c6a0f6"},
        { name: 'Graduate Tuition', value: 11442, fill:"#ed8796" },
        { name: 'Student Services Fee', value: 1128, fill:"#f5a97f" },
        { name: 'Campus-Based Fees', value: 1485.5, fill:"#eed49f" },
        { name: 'Class Pass Fee', value: 190, fill:"#8bd5ca" },
      ]],
    ])]
  ])],
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
          {sumValues(dataMap.get(year).get(res).get(grad))}
        </text>
        <Pie dataKey="value" data={dataMap.get(year).get(res).get(grad)} innerRadius={"50%"} outerRadius={"100%"} />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

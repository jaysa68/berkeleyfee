'use client'

import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import styles from '../../styles/globals.css'

import {Chart, ArcElement, DoughnutController, Tooltip} from 'chart.js'
Chart.register(ArcElement, DoughnutController, Tooltip);

const data = {
  labels: [
    'Tuition',
    'Student Services Fee',
],
datasets: [{
//  data: [300, 50, 100],
//    data: [
//      {id: 'Tuition', costs:
//        {
//          "2023": 1500,
//          "2022": 500,
//        }
//      }, 
//      {id: 'Student Services Fee', costs:
//        {
//          "2023": 700,
//          "2022": 1000,
//        }
//      }
//    ],
//  data: [
//    { id: 'Tuition', costs:
//      {
//        2023: { undergraduate: 200, graduate: 200},
//        2022: { undergraduate: 100, graduate: 50},
//        2021: { undergraduate: 50, graduate: 25},
//        2020: { undergraduate: 25, graduate: 10},
//      }
//    },
//    { id: 'SSF', costs:
//      {
//        2023: { undergraduate: 200, graduate: 200},
//        2022: { undergraduate: 100, graduate: 50},
//        2021: { undergraduate: 50, graduate: 25},
//        2020: { undergraduate: 25, graduate: 10},
//      }
//    }
//  ],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};


export default function OverviewChart( { year } ) {

  return (
    <div>
    ball suckmine ({year})
    <Doughnut
      data={data}
      options={{
        parsing: {
          key: `costs.${year}`
        } 
      }}
    />
    </div>
  );
}

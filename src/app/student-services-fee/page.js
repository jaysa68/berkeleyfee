"use client"
import { useState } from 'react';

import Header from "../components/header.js";

import styles from "../styles/Overview.module.css"
import OverviewChart from "../components/charts/resident-undergraduate-cost-of-attendance.js"
import Descriptions from "../components/ssf-descriptions.js"

import Example from "../components/charts/re-overview-chart.js"

export default function Page() {

  const [selectedYear, setSelectedYear] = useState('2023');

  return (
    <div className={styles.outerContainer}>
      <div className={styles.descContainer}>
        <Descriptions />
      </div>
      <div className={styles.chartContainer}>
        <h1> 
          2023 Student Services Fee Allocation
        </h1>

        <div className={styles.chartGrid}> 
        </div>

      </div>
    </div>
  )
}

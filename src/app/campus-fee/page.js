"use client"
import { useState } from 'react';

import styles from "../styles/Overview.module.css"
import Descriptions from "../components/campus-descriptions.js"
import OverviewChart from "../components/charts/resident-undergraduate-cost-of-attendance.js"
import Dropdown from "../components/dropdown.js"

import Example from "../components/charts/re-overview-chart.js"

const yearList = ["2023", "2022", "2021", "2020"]
const resList = ["Resident", "Non-resident"]
const gradList = ["Undergraduate", "Graduate"]

export default function Home() {

const [selectedYear, setSelectedYear] = useState('2023');
const [selectedGrad, setSelectedGrad] = useState('Undergraduate');


  return (
    <div className={styles.outerContainer}>
      <div className={styles.descContainer}>
        <Descriptions />
      </div>
      <div className={styles.chartContainer}>
        <h1>
        2024
        <Dropdown id="grad" items={gradList} selectedItem={selectedGrad} setSelectedItem={setSelectedGrad} />
        Campus-Based Fee Breakdown
        </h1>

        <div className={styles.chartGrid}> 
        </div>

      </div>
    </div>
  )
}

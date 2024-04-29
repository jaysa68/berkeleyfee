"use client"
import { useState } from 'react';

import styles from "./styles/Overview.module.css"
import Descriptions from "./components/overview-descriptions.js"
import Dropdown from "./components/dropdown.js"

import Example from "./components/charts/re-overview-chart.js"

const yearList = ["2023", "2022", "2021", "2020"]
const resList = ["Resident", "Non-resident"]
const gradList = ["Undergraduate", "Graduate"]

export default function Home() {

const [selectedYear, setSelectedYear] = useState('2023');
const [selectedRes, setSelectedRes] = useState('Resident');
const [selectedGrad, setSelectedGrad] = useState('Undergraduate');


  return (
    <div className={styles.outerContainer}>
      <div className={styles.descContainer}>
        <Descriptions />
      </div>
      <div className={styles.chartContainer}>
        <h1> (Enrolled
        <Dropdown id="year" items={yearList} selectedItem={selectedYear} setSelectedItem={setSelectedYear} />
        )
        <Dropdown id="res" items={resList} selectedItem={selectedRes} setSelectedItem={setSelectedRes} />
        <Dropdown id="grad" items={gradList} selectedItem={selectedGrad} setSelectedItem={setSelectedGrad} />
        Student
        </h1>

        <div className={styles.chartGrid}> 
          <Example year={selectedYear} res={selectedRes} grad={selectedGrad}/>
        </div>

      </div>
    </div>
  )
}

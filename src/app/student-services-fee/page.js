"use client"
import { useState } from 'react';

import Header from "../components/header.js";

import styles from "../styles/Overview.module.css"
import Descriptions from "../components/ssf-descriptions.js"

import Example from "../components/charts/ssf-chart.js"

export default function Page() {

  return (
    <div className={styles.outerContainer}>
      <div className={styles.descContainer}>
        <Descriptions />
      </div>
      <div className={styles.chartContainer}>
        <h1> 
          Top 10 2023 Student Services Fee Allocations
        </h1>

        <div className={styles.chartGrid}> 
          <Example />
        </div>

      </div>
    </div>
  )
}

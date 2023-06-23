import React, { useState } from 'react'
import Search from './components/Search'
import { SnackTable } from './components/SnackTable'
import {snacks} from "./data"
export const App = () => {
  const [data, setData] = useState(snacks);
  return (
    <div>
        <h3>Snack Table</h3>
        <Search data={data} setData={setData} />
        <SnackTable data={data} setData={setData} />
    </div>
  )
}

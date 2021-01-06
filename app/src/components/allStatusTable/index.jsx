import React from "react"
import Proptypes from "proptypes"
import { DataGrid } from "@material-ui/data-grid"
import "./index.css"

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "statusType", headerName: "Status Type", width: 200 },
  { field: "activationTime", headerName: "Activation Time", width: 200 },
  { field: "isActive", headerName: "Active", width: 200 },
]

/**
 *
 * @param {Object} props the props that contains the data to be rendered
 * by the material ui data grid table
 */
export default function DataTable({ data }) {
  return (
    <section className="table__section">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
    </section>
  )
}

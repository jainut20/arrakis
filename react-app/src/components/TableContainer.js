import { React } from "react";
import { useTable, useFilters, useGlobalFilter,useSortBy } from "react-table";
import { GlobalFilter, DefaultFilterForColumn } from "./Filter";

export default function Table(props) {
  const { columns, data } = props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    visibleColumns,
    prepareRow,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultFilterForColumn },
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <table style={{display:"block", overflow:"auto"}} {...getTableProps()} className="table table-striped">
      <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps(column.getSortByToggleProps())}
                       style={{
                         borderBottom: 'solid 3px blue',
                         color: 'black',
                       }}
                   >
                     {column.render('Header')}
                     <span>
                       {column.isSorted
                           ? column.isSortedDesc
                               ? '🔽'
                               : '🔼'
                           : ''}
                    </span>
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                   </th>
               ))}
             </tr>
         ))}
         <tr>
           <th
             colSpan={visibleColumns.length}
             style={{
               textAlign: 'left',
             }}
           >
             <GlobalFilter
               preGlobalFilteredRows={preGlobalFilteredRows}
               globalFilter={state.globalFilter}
               setGlobalFilter={setGlobalFilter}
             />
           </th>
         </tr>
         </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                console.log(cell.column.Header)
                return <td style={{color: cell.column.Header != "Status"? "black" : "black"  || (cell.row.values.status === "ACTIVE" && cell.column.Header ==="Status" )? "green" : "red"}} {...cell.getCellProps()}>{cell.render("Cell")}</td>;

              })}
              <td><button onClick={()=>{props.handleDelete(row.cells[0].value)}} payload>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
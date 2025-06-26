import React from 'react'

const ReusableTable = ({tableData}) => {
console.log(tableData,'tableData')
const column = tableData.length > 0 ? Object.keys(tableData[0]): null;
console.log(column)
if(tableData.length > 0){
    return (
        <table>
            <thead>
                <tr>
                {column.map((colData, colIndex)=>(
                        <th key={colIndex}>{colData.toUpperCase()}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, dataIndex)=>(
                    <tr key={dataIndex}>
                        {column.map((innerColData, innerColIndex)=>(
                            <td key={innerColIndex}>{data[innerColData]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
      )
}
 else{
    return (<div><h5>Table Data is empty</h5></div>)
 } 
}

export default ReusableTable
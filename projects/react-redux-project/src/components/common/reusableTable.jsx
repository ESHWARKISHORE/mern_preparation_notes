const ReusableTable = ({tableData, isDeleteButton, handleDeleteButton}) => {
const column = tableData.length > 0 ? Object.keys(tableData[0]): null;

if(tableData.length > 0){
    return (
        <table>
            <thead>
                <tr>
                {column.map((colData, colIndex)=>(
                        <th key={colIndex}>{colData.toUpperCase()}</th>
                ))}
                    {isDeleteButton ? <th>Action</th> : null}
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, dataIndex)=>(
                    <tr key={dataIndex}>
                        {column.map((innerColData, innerColIndex)=>(
                            <td key={innerColIndex}>{data[innerColData]}</td>
                        ))}
                        {isDeleteButton ? <td><button onClick={()=> handleDeleteButton(data)}>Delete the user</button></td>: null}
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
import React from 'react';
import '../App.css';
import JsonData from './data.json'
function Table(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
				</tr>
			)
		}
	)

	return(
		<div className='table-striped'>
			<table class="table border">
				<thead>
					<tr className='infotable'>
					<th className='srNum'>Sr.NO</th>
					<th className='srNum'>Name</th>
					<th className='srNum'>City</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default Table;

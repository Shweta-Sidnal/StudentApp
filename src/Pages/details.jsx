import React from 'react'
import {db} from '../db' 
import { useLiveQuery} from 'dexie-react-hooks'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Details = () => {
   const students = useLiveQuery(() => db.userdata.toArray());

	return (
		// <div>
		// 	{students?.map(({ id, Name, Email,PhoneNo,Gender}) => (
		// 		<div key={id}>
		// 			{id}, {Name}, {Email}, {PhoneNo},{Gender}
		// 		</div>
		// 	))}
		// </div>
		<TableContainer component={Paper}>
		<Table sx={{ minWidth: 100 }} aria-label="simple table">
		  <TableHead>
			<TableRow>
			  <TableCell align='left'>ID</TableCell>
			  <TableCell align="right">Name</TableCell>
			  <TableCell align="right">Email</TableCell>
			  <TableCell align="right">Contact No</TableCell>
			  <TableCell align="right">Gender</TableCell>
			</TableRow>
		  </TableHead>
		  <TableBody>
			{students?.map(({ id, Name, Email,PhoneNo,Gender}) => (
			  <TableRow key={id} >
				<TableCell align="left">{id}</TableCell>
				<TableCell align="right">{Name}</TableCell>
				<TableCell align="right">{Email}</TableCell>
				<TableCell align="right">{PhoneNo}</TableCell>
				<TableCell align="right">{Gender}</TableCell>
			  </TableRow>
			))}
		  </TableBody>
		</Table>
	  </TableContainer>
	);
}

export default Details;
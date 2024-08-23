"use client";

import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { Container } from "@mantine/core";

const Dashboard = () => {
	const colDef = useMemo(
		() => [
			{ field: "Name" },
			{ field: "Email" },
			{ field: "Phone Number" },
			{ field: "Reimbursement Amount" },
			{ field: "Time Requested" },
		],
		[]
	);

	return (
		<Container>
			<AgGridReact columnDefs={colDef} />
		</Container>
	);
};

export default Dashboard;

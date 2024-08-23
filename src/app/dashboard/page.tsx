"use client";

import React, { useMemo } from "react";
import { Box, Button, Center, Code, Stack, Text } from "@mantine/core";
import { closeAllModals, openModal } from "@mantine/modals";
import { DataTable } from "mantine-datatable";
import mockRequests from "@/data/mockRequests.json";
import { Request } from "@/types/RequestTypes";
import { DataTableRowClickParams } from "@/types/DataTableTypes";

const Dashboard = () => {
	const columns = useMemo(
		() => [
			{
				accessor: "requesterName",
			},
			{ accessor: "phoneNumber" },
			{
				accessor: "email",
			},
			{
				accessor: "amount",
				render: ({ amount }: Request) => {
					const formatter = new Intl.NumberFormat("en-US", {
						style: "currency",
						currency: "USD",
					});
					return <Box>{formatter.format(amount)}</Box>;
				},
			},
			{
				accessor: "requestType",
			},
		],
		[]
	);
	return (
		<DataTable
			textSelectionDisabled
			withTableBorder
			withColumnBorders
			striped
			highlightOnHover
			records={mockRequests}
			columns={columns}
			onRowClick={({ record, index, event }: DataTableRowClickParams) => {
				openModal({
					title: "Company information",
					children: (
						<Stack>
							<Text size="sm">
								You clicked on row[{index}], referring to company{" "}
								<em>{record.requesterName}</em>.
								<br />
								{event.shiftKey && (
									<>
										You pressed the <Code>Shift</Code> key when clicking.
										<br />
									</>
								)}
								{event.ctrlKey && (
									<>
										You pressed the <Code>Ctrl</Code> key when clicking.
										<br />
									</>
								)}
								{event.altKey && (
									<>
										You pressed the <Code>Alt</Code> key when clicking.
										<br />
									</>
								)}
								{event.metaKey && (
									<>
										You pressed the <Code>Meta</Code> key when clicking.
										<br />
									</>
								)}
							</Text>
							<Center>
								<Button fullWidth onClick={() => closeAllModals()}>
									OK
								</Button>
							</Center>
						</Stack>
					),
				});
			}}
		/>
	);
};

export default Dashboard;

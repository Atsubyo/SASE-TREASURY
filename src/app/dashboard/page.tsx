"use client";

import React, { Fragment, useMemo, useState } from "react";
import { Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { mockData } from "@/data/mockRequests";
import { Request } from "@/types/RequestTypes";
import { DataTableRowClickParams } from "@/types/DataTableTypes";
import { useDisclosure } from "@mantine/hooks";
import RequestProcessDrawer from "@/components/drawers/RequestProcessDrawer";

export const formatUSD = (amount?: number): string => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	if (amount) {
		return formatter.format(amount);
	} else {
		return formatter.format(0);
	}
};

const Dashboard = () => {
	const [drawerOpened, drawerHandler] = useDisclosure(false);
	const [rowParams, setRowParams] = useState<DataTableRowClickParams>({
		event: {} as React.MouseEvent,
		record: {} as Request,
		index: 0,
	});

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
					return <Box>{formatUSD(amount)}</Box>;
				},
			},
			{
				accessor: "requestType",
			},
		],
		[]
	);
	return (
		<Fragment>
			<DataTable
				textSelectionDisabled
				withTableBorder
				withColumnBorders
				striped
				highlightOnHover
				records={mockData}
				columns={columns}
				onRowClick={(params: DataTableRowClickParams) => {
					drawerHandler.open();
					setRowParams(params);
				}}
			/>
			<RequestProcessDrawer
				drawerOpened={drawerOpened}
				open={drawerHandler.open}
				close={drawerHandler.close}
				rowParams={rowParams}
			/>
		</Fragment>
	);
};

export default Dashboard;

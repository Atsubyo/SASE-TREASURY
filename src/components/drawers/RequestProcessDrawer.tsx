import { DataTableRowClickParams } from "@/types/DataTableTypes";
import { Button, Drawer, Text } from "@mantine/core";
import React from "react";

const formatUSD = (amount?: number): string => {
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

interface RequestProcessDrawerParams {
	drawerOpened: boolean;
	open: () => void;
	close: () => void;
	rowParams: DataTableRowClickParams;
}

const RequestProcessDrawer: React.FC<RequestProcessDrawerParams> = (props) => {
	return (
		<Drawer
			opened={props.drawerOpened}
			onClose={props.close}
			position="right"
			title={`Review ${props.rowParams?.record.requesterName}'s Request`}
		>
			<Text>{formatUSD(props.rowParams?.record.amount)}</Text>
			<Button>{props.rowParams?.index}</Button>
		</Drawer>
	);
};

export default RequestProcessDrawer;

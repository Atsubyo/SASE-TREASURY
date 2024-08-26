import { formatUSD } from "@/app/dashboard/page";
import { DataTableRowClickParams } from "@/types/DataTableTypes";
import { Button, Drawer, Text } from "@mantine/core";
import React from "react";

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

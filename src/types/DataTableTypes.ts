import { Request } from "./RequestTypes";

export type DataTableRowClickParams = {
	event: React.MouseEvent;
	record: Request;
	index: number;
};

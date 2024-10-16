import { MantineColor } from "@mantine/core";

export type StackedBarRecord = {
	label?: string;
	[key: string]: any;
};

/** An array of objects with `name`, `label`, and `color` keys. Determines which data should be consumed from the `data` array. */
export interface StackedBarSeries {
	name: string;
	label?: string;
}

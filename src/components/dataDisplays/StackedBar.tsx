import { StackedBarRecord, StackedBarSeries } from "@/types/DataDisplayTypes";
import {
	DefaultMantineColor,
	ProgressLabel,
	ProgressRoot,
	ProgressSection,
	Tooltip,
} from "@mantine/core";
import React from "react";

interface StackedBarProps {
	data: StackedBarRecord[];
	dataKey: string;
	series: StackedBarSeries;
}

const StackedBar: React.FC<StackedBarProps> = ({ data, dataKey, series }) => {
	const maxValue = data.reduce((acc, item) => acc + item.value, 0);
	const colors: DefaultMantineColor[] = [
		"red",
		"orange",
		"yellow",
		"green",
		"blue",
		"indigo",
		"violet",
	];

	return (
		<ProgressRoot size={40}>
			{data.map((item, index) => {
				const percentage = ((item[series.name] / maxValue) * 100).toFixed(1);
				return (
					<Tooltip
						key={index}
						label={`${item[dataKey]}: $${item[series.name]} (${percentage}%)`}
						position="top"
					>
						<ProgressSection value={item[series.name]} color={colors[index]}>
							<ProgressLabel>{item[dataKey]}</ProgressLabel>
						</ProgressSection>
					</Tooltip>
				);
			})}
		</ProgressRoot>
	);
};

export default StackedBar;

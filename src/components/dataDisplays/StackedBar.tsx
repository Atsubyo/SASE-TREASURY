import { StackedBarRecord, StackedBarSeries } from "@/types/DataDisplayTypes";
import {
	DefaultMantineColor,
	ProgressLabel,
	ProgressRoot,
	ProgressSection,
	Tooltip,
	Text,
} from "@mantine/core";
import React, { Fragment } from "react";

interface StackedBarProps {
	title?: string;
	data: StackedBarRecord[];
	dataKey: string;
	series: StackedBarSeries;
}

const StackedBar: React.FC<StackedBarProps> = ({
	title,
	data,
	dataKey,
	series,
}) => {
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
		<Fragment>
			{title ? (
				<Text fz="h2" mb="sm" ta="center">
					{title}
				</Text>
			) : null}
			<ProgressRoot size={40} w="100%">
				{data.map((item, index) => {
					const percentage = ((item[series.name] / maxValue) * 100).toFixed(1);
					return (
						<Tooltip
							key={index}
							label={`${item[dataKey]}: $${item[series.name]} (${percentage}%)`}
							position="top"
						>
							<ProgressSection
								value={parseFloat(percentage)}
								color={colors[index]}
							>
								<ProgressLabel>{item[dataKey]}</ProgressLabel>
							</ProgressSection>
						</Tooltip>
					);
				})}
			</ProgressRoot>
		</Fragment>
	);
};

export default StackedBar;

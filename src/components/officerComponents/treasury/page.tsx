import React from "react";
import styles from "./treasury.module.css";
import { BarChart } from "@mantine/charts";
import {
	mockTotalBudgetData,
	mockCategorizedBudgetData,
} from "@/data/mockRequests";
import { Flex, Grid, GridCol, Text } from "@mantine/core";
import StackedBar from "@/components/dataDisplays/StackedBar";

const TreasurerHome: React.FC = () => {
	return (
		<main className={styles.main}>
			<Grid grow gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
				<GridCol span={12}>
					<Flex align="flex-start" justify="center" direction="column" w="100%">
						<StackedBar
							title="Expenses"
							data={mockTotalBudgetData}
							dataKey="category"
							series={{ name: "value" }}
						/>
					</Flex>
				</GridCol>
				<GridCol span={12}>
					<Flex align="flex-start" justify="center" direction="column" w="100%">
						<StackedBar
							title="Funding"
							data={mockTotalBudgetData}
							dataKey="category"
							series={{ name: "value" }}
						/>
					</Flex>
				</GridCol>
				<GridCol span={12}>
					<Flex align="center" justify="center" direction="column" w="100%">
						<Text fz="h2" mb="sm" ta="center">
							Expenses vs. Funding
						</Text>
						<BarChart
							h={300}
							data={mockCategorizedBudgetData}
							dataKey="month"
							withLegend
							legendProps={{ verticalAlign: "bottom" }}
							tooltipAnimationDuration={200}
							valueFormatter={(value: number): string => `$${value.toFixed(2)}`}
							series={[
								{
									name: "expenses",
									label: "Expenses",
									color: "red.5",
								},
								{ name: "funding", label: "Funding", color: "green.4" },
							]}
						/>
					</Flex>
				</GridCol>
			</Grid>
		</main>
	);
};

export default TreasurerHome;

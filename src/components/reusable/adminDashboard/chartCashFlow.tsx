"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  inflow: {
    label: "Masuk",
    color: "#15C924",
  },
  outflow: {
    label: "keluar",
    color: "#E51251",
  },
} satisfies ChartConfig;

interface InterfareDataCashFlowChart {
  month: string;
  inFlow: number;
  outFlow: number;
}

export function ChartCashFlow({
  dataCashFlowChart,
}: {
  dataCashFlowChart: InterfareDataCashFlowChart[];
}) {
  return (
    <ChartContainer config={chartConfig} className="h-96 w-full">
      <BarChart accessibilityLayer data={dataCashFlowChart}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="inFlow" fill="var(--color-inflow)" radius={2} />
        <Bar dataKey="outFlow" fill="var(--color-outflow)" radius={2} />
      </BarChart>
    </ChartContainer>
  );
}

"use client";

import { Bar, BarChart, CartesianGrid } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "user",
    color: "#2563eb",
  },
} satisfies ChartConfig;

interface ChartInterface {
  nama: string;
  value: number;
}

export function ChartUsers(chartData: ChartInterface[]) {
  return (
    <ChartContainer config={chartConfig} className="h-44 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

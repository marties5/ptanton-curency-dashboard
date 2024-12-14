import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface CurrencyData {
  currencyName: string;
  baseCurrency: string;
  rate: number;
  changePercent: number;
  lastUpdated: Date;
}

export const CurrencyCard = ({ data }: { data: CurrencyData }) => {
  const getColorClass = () => {
    if (data.changePercent > 0) return "text-green-500";
    if (data.changePercent < 0) return "text-red-500";
    return "text-gray-500";
  };

  const getIcon = () => {
    if (data.changePercent > 0) return <ArrowUp className="w-5 h-5" />;
    if (data.changePercent < 0) return <ArrowDown className="w-5 h-5" />;
    return <Minus className="w-5 h-5" />;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{data.currencyName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">
            {data.baseCurrency} {data.rate.toFixed(2)}
          </span>
          <div className={`flex items-center ${getColorClass()}`}>
            {getIcon()}
            <span className="ml-1 font-semibold">
              {Math.abs(data.changePercent).toFixed(2)}%
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Terakhir diperbarui: {data.lastUpdated.toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

interface BudgetCardProps {
  title: string;
  amount: number;
  type: "income" | "expense" | "balance";
  trend?: number;
}

const BudgetCard = ({ title, amount, type, trend }: BudgetCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  const getIcon = () => {
    switch (type) {
      case "income":
        return <TrendingUp className="h-5 w-5 text-success" />;
      case "expense":
        return <TrendingDown className="h-5 w-5 text-destructive" />;
      default:
        return <DollarSign className="h-5 w-5 text-primary" />;
    }
  };

  const getAmountColor = () => {
    switch (type) {
      case "income":
        return "text-success";
      case "expense":
        return "text-destructive";
      default:
        return amount >= 0 ? "text-success" : "text-destructive";
    }
  };

  return (
    <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${getAmountColor()}`}>
          {formatCurrency(amount)}
        </div>
        {trend !== undefined && (
          <p className="text-xs text-muted-foreground mt-1">
            {trend >= 0 ? "+" : ""}{trend.toFixed(1)}% dal mese scorso
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetCard;
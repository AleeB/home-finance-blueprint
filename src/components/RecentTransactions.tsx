import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpCircle, ArrowDownCircle, Calendar } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: "income" | "expense";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    description: "Stipendio Gennaio",
    amount: 2500,
    category: "Stipendio",
    date: "2024-01-15",
    type: "income"
  },
  {
    id: "2", 
    description: "Spesa Supermercato",
    amount: -85.50,
    category: "Alimentari",
    date: "2024-01-14",
    type: "expense"
  },
  {
    id: "3",
    description: "Bolletta Luce",
    amount: -120,
    category: "Utenze",
    date: "2024-01-13",
    type: "expense"
  },
  {
    id: "4",
    description: "Freelance Progetto",
    amount: 800,
    category: "Lavoro Extra",
    date: "2024-01-12",
    type: "income"
  },
  {
    id: "5",
    description: "Rifornimento Auto",
    amount: -65,
    category: "Trasporti",
    date: "2024-01-11",
    type: "expense"
  }
];

const RecentTransactions = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR'
    }).format(Math.abs(value));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span>Movimenti Recenti</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  transaction.type === "income" 
                    ? "bg-success/10 text-success" 
                    : "bg-destructive/10 text-destructive"
                }`}>
                  {transaction.type === "income" ? (
                    <ArrowUpCircle className="h-4 w-4" />
                  ) : (
                    <ArrowDownCircle className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{transaction.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(transaction.date)}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === "income" ? "text-success" : "text-destructive"
              }`}>
                {transaction.type === "income" ? "+" : "-"}{formatCurrency(transaction.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
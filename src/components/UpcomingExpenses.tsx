import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, AlertTriangle } from "lucide-react";

interface UpcomingExpense {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  category: string;
  priority: "high" | "medium" | "low";
}

const upcomingExpenses: UpcomingExpense[] = [
  {
    id: "1",
    description: "Rata Mutuo",
    amount: 850,
    dueDate: "2024-01-20",
    category: "Casa",
    priority: "high"
  },
  {
    id: "2",
    description: "Assicurazione Auto",
    amount: 180,
    dueDate: "2024-01-25",
    category: "Trasporti",
    priority: "medium"
  },
  {
    id: "3",
    description: "Bolletta Gas",
    amount: 95,
    dueDate: "2024-01-28",
    category: "Utenze",
    priority: "medium"
  },
  {
    id: "4",
    description: "Palestra",
    amount: 45,
    dueDate: "2024-02-01",
    category: "Sport",
    priority: "low"
  }
];

const UpcomingExpenses = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffDays = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Oggi";
    if (diffDays === 1) return "Domani";
    if (diffDays < 7) return `Tra ${diffDays} giorni`;
    
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-warning/10 text-warning-foreground border-warning/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const isUrgent = (dueDate: string) => {
    const date = new Date(dueDate);
    const today = new Date();
    const diffDays = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays <= 3;
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          <span>Prossime Scadenze</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingExpenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {isUrgent(expense.dueDate) && (
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                )}
                <div>
                  <p className="font-medium text-sm">{expense.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {expense.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getPriorityColor(expense.priority)}`}
                    >
                      {expense.priority === "high" ? "Alta" : expense.priority === "medium" ? "Media" : "Bassa"}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-destructive">
                  {formatCurrency(expense.amount)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(expense.dueDate)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingExpenses;
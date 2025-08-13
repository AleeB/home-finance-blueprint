import Header from "@/components/Header";
import BudgetCard from "@/components/BudgetCard";
import RecentTransactions from "@/components/RecentTransactions";
import BudgetChart from "@/components/BudgetChart";
import UpcomingExpenses from "@/components/UpcomingExpenses";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-hero rounded-xl p-8 text-white shadow-elegant">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2">Benvenuto nel tuo Budget Manager</h2>
            <p className="text-white/90 text-lg">
              Gestisci le tue finanze familiari in modo intelligente e pianifica il futuro con fiducia.
            </p>
          </div>
        </div>

        {/* Budget Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BudgetCard
            title="Entrate Mensili"
            amount={3300}
            type="income"
            trend={8.2}
          />
          <BudgetCard
            title="Uscite Mensili"
            amount={2900}
            type="expense"
            trend={-3.1}
          />
          <BudgetCard
            title="Bilancio"
            amount={400}
            type="balance"
            trend={15.8}
          />
        </div>

        {/* Charts Section */}
        <BudgetChart />

        {/* Transactions and Upcoming Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentTransactions />
          <UpcomingExpenses />
        </div>
      </main>
    </div>
  );
};

export default Index;

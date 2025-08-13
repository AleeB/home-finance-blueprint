import { Button } from "@/components/ui/button";
import { PlusCircle, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                JBudget
              </h1>
              <p className="text-sm text-muted-foreground">Gestione Budget Familiare</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
              <PlusCircle className="h-4 w-4 mr-2" />
              Nuovo Movimento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
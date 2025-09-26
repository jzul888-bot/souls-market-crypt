import { Link, useLocation } from "react-router-dom";
import { Skull, Sword, Home } from "lucide-react";
import { useSouls } from "@/contexts/SoulsContext";

const Header = () => {
  const location = useLocation();
  const { souls } = useSouls();

  const navItems = [
    { path: "/", label: "Inicio", icon: Home },
    { path: "/marketplace", label: "Marketplace", icon: Sword },
    { path: "/buy-souls", label: "Comprar Almas", icon: Skull },
    { path: "/profile", label: "Perfil", icon: Skull },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Skull className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:bg-accent/30 transition-all duration-300"></div>
            </div>
            <h1 className="text-2xl font-bold souls-title">
              Souls Market
            </h1>
          </Link>

          {/* Navigation */}
          <div className="flex space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === path
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground hover:text-accent hover:bg-secondary/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Almas Counter */}
          <div className="flex items-center space-x-2 bg-secondary/30 px-4 py-2 rounded-lg border border-border">
            <div className="w-3 h-3 bg-accent rounded-full pulse-souls"></div>
            <span className="text-sm font-medium text-accent">{souls.toLocaleString()} ALMAS</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
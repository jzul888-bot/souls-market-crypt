import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Skull, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen hero-bg">
      <Header />
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="souls-card p-8">
            <Skull className="w-20 h-20 text-primary mx-auto mb-6 pulse-souls" />
            <h1 className="text-6xl font-gothic font-bold mb-4 flame-text">404</h1>
            <h2 className="text-2xl font-gothic mb-4 text-foreground">
              Alma Perdida en las Tinieblas
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              La entidad que buscas se ha desvanecido en el vacío eterno. 
              Quizás nunca existió, o tal vez fue consumida por las sombras del abismo.
            </p>
            <div className="space-y-4">
              <Link 
                to="/" 
                className="souls-button inline-flex items-center space-x-2 w-full justify-center"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Regresar al Reino</span>
              </Link>
              <Link 
                to="/marketplace" 
                className="block px-6 py-3 rounded-lg font-medium border border-border bg-secondary/20 text-foreground hover:bg-secondary/40 transition-all duration-300"
              >
                Explorar Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

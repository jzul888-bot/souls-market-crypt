import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SoulsProvider } from "./contexts/SoulsContext";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import NFTDetail from "./pages/NFTDetail";
import NotFound from "./pages/NotFound";
import BuySouls from "./pages/BuySouls";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SoulsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/nft/:id" element={<NFTDetail />} />
            <Route path="/buy-souls" element={<BuySouls />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SoulsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

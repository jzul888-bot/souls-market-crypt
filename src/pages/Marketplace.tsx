import { useState } from "react";
import { Link } from "react-router-dom";
import { Sword, Users, Crown, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { nfts, NFT } from "@/data/nfts";

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "character" | "weapon">("all");
  const [selectedRarity, setSelectedRarity] = useState<"all" | "common" | "rare" | "epic" | "legendary" | "mythic">("all");

  const filteredNFTs = nfts.filter(nft => {
    if (selectedCategory !== "all" && nft.category !== selectedCategory) return false;
    if (selectedRarity !== "all" && nft.rarity !== selectedRarity) return false;
    return true;
  });

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: "text-gray-400 border-gray-400/30",
      rare: "text-blue-400 border-blue-400/30", 
      epic: "text-epic border-epic/30",
      legendary: "text-accent border-accent/30",
      mythic: "text-primary border-primary/30"
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const getRarityIcon = (rarity: string) => {
    switch(rarity) {
      case "mythic": return <Crown className="w-4 h-4" />;
      case "legendary": return <Sparkles className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen hero-bg fire-border">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 souls-title">
              Marketplace de Almas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre personajes legendarios y armas malditas forjadas en las profundidades del abismo. 
              Cada NFT guarda secretos y poder que desafían la mortalidad.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {/* Category Filter */}
            <div className="flex gap-2">
              {[
                { key: "all", label: "Todos", icon: null },
                { key: "character", label: "Personajes", icon: Users },
                { key: "weapon", label: "Armas", icon: Sword }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? "souls-button"
                      : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Rarity Filter */}
            <div className="flex gap-2">
              {[
                { key: "all", label: "Todas las Rarezas" },
                { key: "common", label: "Común" },
                { key: "rare", label: "Raro" },
                { key: "epic", label: "Épico" },
                { key: "legendary", label: "Legendario" },
                { key: "mythic", label: "Mítico" }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSelectedRarity(key as any)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedRarity === key
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* NFTs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNFTs.map((nft) => (
              <Link
                key={nft.id}
                to={`/nft/${nft.id}`}
                className="souls-card p-4 nft-hover"
              >
                <div className="aspect-square bg-secondary/20 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded border ${getRarityColor(nft.rarity)} flex items-center gap-1`}>
                      {getRarityIcon(nft.rarity)}
                      {nft.rarity.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {nft.category === "character" ? "PERSONAJE" : "ARMA"}
                    </span>
                  </div>
                  
                  <h3 className="font-gothic font-semibold text-lg leading-tight">
                    {nft.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {nft.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full pulse-souls"></div>
                      <span className="text-accent font-medium">{nft.price} ALMAS</span>
                    </div>
                    <button className="text-xs text-primary hover:text-accent transition-colors">
                      Ver Detalles →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Mostrando {filteredNFTs.length} de {nfts.length} NFTs disponibles
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
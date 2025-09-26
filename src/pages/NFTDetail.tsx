import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Crown, Sparkles, Zap, Shield, Skull } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import { getNFTById } from "@/data/nfts";
import { useSouls } from "@/contexts/SoulsContext";

const NFTDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { souls, purchaseNFT } = useSouls();
  const nft = id ? getNFTById(id) : null;

  if (!nft) {
    return (
      <div className="min-h-screen hero-bg flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-4xl font-gothic font-bold mb-4 text-primary">
            NFT No Encontrado
          </h1>
          <p className="text-muted-foreground mb-6">
            El alma que buscas se ha desvanecido en las sombras.
          </p>
          <Link to="/marketplace" className="souls-button">
            Regresar al Marketplace
          </Link>
        </div>
      </div>
    );
  }

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: "text-gray-400 border-gray-400/30 bg-gray-400/10",
      rare: "text-blue-400 border-blue-400/30 bg-blue-400/10", 
      epic: "text-epic border-epic/30 bg-epic/10",
      legendary: "text-accent border-accent/30 bg-accent/10",
      mythic: "text-primary border-primary/30 bg-primary/10"
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const getRarityIcon = (rarity: string) => {
    switch(rarity) {
      case "mythic": return <Crown className="w-5 h-5" />;
      case "legendary": return <Sparkles className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const handleClaimWithSouls = () => {
    if (purchaseNFT(nft.price)) {
      toast.success(`¡Alma Reclamada!`, {
        description: `Has reclamado "${nft.name}" por ${nft.price} ALMAS. La entidad ahora te pertenece.`,
        duration: 5000,
      });
    } else {
      toast.error("Almas Insuficientes", {
        description: `Necesitas ${nft.price} ALMAS para reclamar esta entidad. Tienes ${souls} ALMAS.`,
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen hero-bg fire-border">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/marketplace"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Marketplace</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-6">
              <div className="souls-card p-6">
                <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
              
              {/* Attributes */}
              <div className="souls-card p-6">
                <h3 className="font-gothic font-semibold text-xl mb-4 flame-text">
                  Atributos de Poder
                </h3>
                <div className="space-y-3">
                  {nft.attributes.strength && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>Fuerza</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-secondary/30 rounded-full h-2">
                          <div 
                            className="h-2 bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${nft.attributes.strength}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8">{nft.attributes.strength}</span>
                      </div>
                    </div>
                  )}
                  
                  {nft.attributes.magic && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span>Magia</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-secondary/30 rounded-full h-2">
                          <div 
                            className="h-2 bg-accent rounded-full transition-all duration-500"
                            style={{ width: `${nft.attributes.magic}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8">{nft.attributes.magic}</span>
                      </div>
                    </div>
                  )}
                  
                  {nft.attributes.curse && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Skull className="w-4 h-4 text-destructive" />
                        <span>Maldición</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-secondary/30 rounded-full h-2">
                          <div 
                            className="h-2 bg-destructive rounded-full transition-all duration-500"
                            style={{ width: `${nft.attributes.curse}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8">{nft.attributes.curse}</span>
                      </div>
                    </div>
                  )}

                  {nft.attributes.souls && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-accent rounded-full pulse-souls" />
                        <span>Poder de Almas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-secondary/30 rounded-full h-2">
                          <div 
                            className="h-2 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(nft.attributes.souls, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8">{nft.attributes.souls}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="souls-card p-6">
                {/* Category & Rarity */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {nft.category === "character" ? "PERSONAJE OSCURO" : "ARMA MALDITA"}
                  </span>
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg border ${getRarityColor(nft.rarity)}`}>
                    {getRarityIcon(nft.rarity)}
                    <span className="text-sm font-medium">{nft.rarity.toUpperCase()}</span>
                  </div>
                </div>

                {/* Name */}
                <h1 className="text-4xl font-gothic font-bold mb-6 flame-text">
                  {nft.name}
                </h1>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="font-gothic font-semibold text-lg mb-3 text-accent">
                    Historia de las Sombras
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {nft.description}
                  </p>
                </div>

                {/* Price */}
                <div className="bg-secondary/20 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Precio de Invocación</p>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-4 h-4 bg-accent rounded-full pulse-souls"></div>
                      <span className="text-3xl font-gothic font-bold text-accent">
                        {nft.price} ALMAS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleClaimWithSouls}
                  className={`w-full text-lg py-4 font-semibold transition-all duration-300 ${
                    souls >= nft.price 
                      ? "souls-button" 
                      : "bg-secondary/50 text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={souls < nft.price}
                >
                  {souls >= nft.price ? "Reclamar con Almas" : "Almas Insuficientes"}
                </button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Al reclamar esta entidad, aceptas los riesgos inherentes a su poder oscuro.
                  Las consecuencias son irreversibles una vez que el contrato de almas se ejecute.
                </p>
              </div>

              {/* Additional Info */}
              <div className="souls-card p-6">
                <h3 className="font-gothic font-semibold text-lg mb-4 text-accent">
                  Información Arcana
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ID de Entidad:</span>
                    <span className="font-mono">{nft.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoría:</span>
                    <span>{nft.category === "character" ? "Personaje" : "Arma"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rareza:</span>
                    <span className={getRarityColor(nft.rarity).split(' ')[0]}>
                      {nft.rarity.charAt(0).toUpperCase() + nft.rarity.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estado:</span>
                    <span className="text-accent">Disponible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NFTDetail;
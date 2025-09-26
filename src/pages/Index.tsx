import { Link } from "react-router-dom";
import { ArrowRight, Skull, Crown, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { getFeaturedNFTs } from "@/data/nfts";
import heroBackground from "@/assets/hero-castle-bg.jpg";

const Index = () => {
  const featuredNFTs = getFeaturedNFTs();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center hero-bg fire-border"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="mb-6">
              <Skull className="w-16 h-16 text-primary mx-auto mb-4 pulse-souls" />
              <h1 className="text-6xl md:text-7xl font-bold mb-6 souls-title">
                Souls Market
              </h1>
            </div>

            {/* Welcome Message */}
            <h2 className="text-3xl md:text-4xl font-gothic mb-8 text-foreground">
              Bienvenido al <span className="blood-accent">mercado de las almas</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Descubre entidades oscuras y armas malditas forjadas en las profundidades del abismo. 
              Cada NFT contiene poder ancestral que desafía los límites de la mortalidad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/marketplace" className="souls-button text-lg py-4 px-8 inline-flex items-center space-x-3">
                <span>Explorar Marketplace</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="px-8 py-4 rounded-lg font-medium border border-border bg-secondary/20 text-foreground hover:bg-secondary/40 transition-all duration-300 backdrop-blur-sm">
                Conocer las Almas
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { label: "NFTs Disponibles", value: "20", icon: Skull },
                { label: "Almas Intercambiadas", value: "12.4K", icon: null },
                { label: "Entidades Míticas", value: "6", icon: Crown },
                { label: "Poder Acumulado", value: "∞", icon: Sparkles }
              ].map(({ label, value, icon: Icon }, index) => (
                <div key={index} className="text-center">
                  {Icon && <Icon className="w-8 h-8 text-accent mx-auto mb-2" />}
                  <div className="text-3xl font-gothic font-bold flame-text mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gothic font-bold mb-6 flame-text">
              Entidades Destacadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Las almas más poderosas y codiciadas del reino oscuro. 
              Cada una guarda secretos ancestrales y poder inimaginable.
            </p>
          </div>

          {/* NFTs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredNFTs.map((nft) => (
              <Link
                key={nft.id}
                to={`/nft/${nft.id}`}
                className="souls-card p-6 nft-hover group"
              >
                <div className="aspect-square bg-secondary/20 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 rounded-lg bg-primary/20 text-primary border border-primary/30">
                      {nft.category === "character" ? "PERSONAJE" : "ARMA"}
                    </span>
                    {nft.rarity === "mythic" && <Crown className="w-4 h-4 text-primary" />}
                    {nft.rarity === "legendary" && <Sparkles className="w-4 h-4 text-accent" />}
                  </div>
                  
                  <h3 className="font-gothic font-semibold text-xl leading-tight group-hover:text-accent transition-colors">
                    {nft.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {nft.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent rounded-full pulse-souls"></div>
                      <span className="text-accent font-medium text-lg">{nft.price} ALMAS</span>
                    </div>
                    <span className="text-primary text-sm group-hover:text-accent transition-colors">
                      Reclamar →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link to="/marketplace" className="souls-button text-lg py-4 px-8 inline-flex items-center space-x-3">
              <span>Ver Todas las Entidades</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-bg fire-border relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold mb-6 flame-text">
            ¿Listo para Reclamar tu Poder?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Únete a los señores oscuros y maestros de las artes prohibidas. 
            Tu destino te espera en las sombras del marketplace.
          </p>
          <Link to="/marketplace" className="souls-button text-lg py-4 px-8 inline-flex items-center space-x-3">
            <Skull className="w-5 h-5" />
            <span>Comenzar mi Legado Oscuro</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { useSouls } from "@/contexts/SoulsContext";
import { User, Trophy, Star, Crown } from "lucide-react";

const Profile = () => {
  const { souls } = useSouls();
  
  // Simulamos NFTs comprados (en una app real, esto vendría de un estado global o base de datos)
  const [ownedNFTs] = useState([
    {
      id: "char-001",
      name: "Caballero de la Llama Negra",
      image: "/src/assets/characters/dark-flame-knight.jpg",
      rarity: "legendary",
      purchaseDate: "2024-01-15"
    },
    {
      id: "char-005",
      name: "Asesino Sombra de Luna", 
      image: "/src/assets/characters/moon-shadow-assassin.jpg",
      rarity: "legendary",
      purchaseDate: "2024-01-20"
    },
    {
      id: "char-013",
      name: "Cazador de Sombras",
      image: "/src/assets/characters/shadow-hunter.jpg", 
      rarity: "rare",
      purchaseDate: "2024-01-22"
    }
  ]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "mythic": return "bg-gradient-to-r from-purple-600 to-pink-600";
      case "legendary": return "bg-gradient-to-r from-orange-500 to-red-600";
      case "epic": return "bg-gradient-to-r from-purple-500 to-blue-600";
      case "rare": return "bg-gradient-to-r from-blue-500 to-cyan-600";
      default: return "bg-gradient-to-r from-gray-400 to-gray-600";
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case "mythic": return <Crown className="w-4 h-4" />;
      case "legendary": return <Star className="w-4 h-4" />;
      case "epic": return <Trophy className="w-4 h-4" />;
      default: return null;
    }
  };

  const userStats = {
    totalNFTs: ownedNFTs.length,
    totalValue: ownedNFTs.reduce((acc, nft) => {
      // Valores estimados basados en rareza
      const values = { mythic: 50000, legendary: 30000, epic: 15000, rare: 8000, common: 3000 };
      return acc + (values[nft.rarity as keyof typeof values] || 0);
    }, 0),
    rareCounts: ownedNFTs.reduce((acc, nft) => {
      acc[nft.rarity] = (acc[nft.rarity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header del Perfil */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gradient mb-2">Mi Perfil</h1>
            <p className="text-muted-foreground">Coleccionista de Almas Oscuras</p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{souls.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Almas Disponibles</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{userStats.totalNFTs}</p>
                  <p className="text-sm text-muted-foreground">NFTs Poseídos</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{userStats.totalValue.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Valor Estimado</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{userStats.rareCounts.legendary || 0}</p>
                  <p className="text-sm text-muted-foreground">Legendarios</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="collection" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="collection">Mi Colección</TabsTrigger>
              <TabsTrigger value="stats">Estadísticas</TabsTrigger>
              <TabsTrigger value="achievements">Logros</TabsTrigger>
            </TabsList>
            
            <TabsContent value="collection" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ownedNFTs.map((nft) => (
                  <Card key={nft.id} className="overflow-hidden group hover:shadow-lg transition-all">
                    <div className="relative">
                      <img 
                        src={nft.image} 
                        alt={nft.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                      />
                      <Badge 
                        className={`absolute top-2 right-2 text-white border-0 ${getRarityColor(nft.rarity)}`}
                      >
                        <div className="flex items-center gap-1">
                          {getRarityIcon(nft.rarity)}
                          <span className="capitalize">{nft.rarity}</span>
                        </div>
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{nft.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Adquirido: {new Date(nft.purchaseDate).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
                
                {ownedNFTs.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground text-lg mb-4">
                      Aún no tienes NFTs en tu colección
                    </p>
                    <Button asChild>
                      <a href="/marketplace">Explorar Marketplace</a>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="stats" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por Rareza</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(userStats.rareCounts).map(([rarity, count]) => (
                      <div key={rarity} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded ${getRarityColor(rarity)}`}></div>
                          <span className="capitalize">{rarity}</span>
                        </div>
                        <span className="font-semibold">{count}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Actividad Reciente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {ownedNFTs.slice(0, 3).map((nft) => (
                        <div key={nft.id} className="flex justify-between items-center text-sm">
                          <span>Comprado: {nft.name}</span>
                          <span className="text-muted-foreground">
                            {new Date(nft.purchaseDate).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                    <h3 className="font-semibold mb-2">Primer Coleccionista</h3>
                    <p className="text-sm text-muted-foreground">Compra tu primer NFT</p>
                    <Badge className="mt-2" variant={ownedNFTs.length > 0 ? "default" : "secondary"}>
                      {ownedNFTs.length > 0 ? "Completado" : "Pendiente"}
                    </Badge>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Star className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                    <h3 className="font-semibold mb-2">Cazador Legendario</h3>
                    <p className="text-sm text-muted-foreground">Posee 5 NFTs legendarios</p>
                    <Badge className="mt-2" variant={(userStats.rareCounts.legendary || 0) >= 5 ? "default" : "secondary"}>
                      {(userStats.rareCounts.legendary || 0) >= 5 ? "Completado" : `${userStats.rareCounts.legendary || 0}/5`}
                    </Badge>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Crown className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                    <h3 className="font-semibold mb-2">Señor de las Almas</h3>
                    <p className="text-sm text-muted-foreground">Acumula 100,000 almas</p>
                    <Badge className="mt-2" variant={souls >= 100000 ? "default" : "secondary"}>
                      {souls >= 100000 ? "Completado" : "Pendiente"}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useSouls } from "@/contexts/SoulsContext";
import Header from "@/components/Header";
import { CreditCard, Smartphone } from "lucide-react";

const BuySouls = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });
  const [nequiPhone, setNequiPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addSouls } = useSouls();

  const soulPackages = [
    { id: "small", souls: 10000, price: 5, name: "Paquete Pequeño" },
    { id: "medium", souls: 25000, price: 10, name: "Paquete Mediano" },
    { id: "large", souls: 60000, price: 20, name: "Paquete Grande" },
    { id: "mega", souls: 150000, price: 45, name: "Paquete Mega" },
    { id: "ultimate", souls: 350000, price: 100, name: "Paquete Supremo" }
  ];

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage || !paymentMethod || !email) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "card" && (!cardData.number || !cardData.expiry || !cardData.cvv || !cardData.name)) {
      toast({
        title: "Error", 
        description: "Por favor completa todos los datos de la tarjeta",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "nequi" && !nequiPhone) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu número de teléfono Nequi",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simular procesamiento de pago
    setTimeout(() => {
      const package_ = soulPackages.find(p => p.id === selectedPackage);
      if (package_) {
        addSouls(package_.souls);
        toast({
          title: "¡Compra Exitosa!",
          description: `Se te enviará un correo de confirmación a ${email}. ¡Has recibido ${package_.souls.toLocaleString()} almas!`,
        });
        
        // Reset form
        setSelectedPackage("");
        setPaymentMethod("");
        setCardData({ number: "", expiry: "", cvv: "", name: "" });
        setNequiPhone("");
        setEmail("");
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">Comprar Almas</h1>
            <p className="text-muted-foreground text-lg">
              Obtén más almas para ampliar tu colección de NFTs oscuros
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Paquetes de Almas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary"></div>
                  Seleccionar Paquete
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {soulPackages.map((package_) => (
                  <div
                    key={package_.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedPackage === package_.id 
                        ? "border-primary bg-primary/5" 
                        : "border-border"
                    }`}
                    onClick={() => setSelectedPackage(package_.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{package_.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {package_.souls.toLocaleString()} almas
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">${package_.price}</p>
                        <p className="text-xs text-muted-foreground">USD</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Formulario de Pago */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Pago</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePurchase} className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email de Confirmación *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu-email@ejemplo.com"
                      required
                    />
                  </div>

                  {/* Método de Pago */}
                  <div className="space-y-2">
                    <Label>Método de Pago *</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona método de pago" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            Tarjeta de Crédito/Débito
                          </div>
                        </SelectItem>
                        <SelectItem value="nequi">
                          <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4" />
                            Nequi
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Datos de Tarjeta */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 border-t pt-4">
                      <h3 className="font-semibold">Datos de la Tarjeta</h3>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nombre del Titular *</Label>
                        <Input
                          id="cardName"
                          value={cardData.name}
                          onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Juan Pérez"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Número de Tarjeta *</Label>
                        <Input
                          id="cardNumber"
                          value={cardData.number}
                          onChange={(e) => setCardData(prev => ({ ...prev, number: e.target.value }))}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Vencimiento *</Label>
                          <Input
                            id="expiry"
                            value={cardData.expiry}
                            onChange={(e) => setCardData(prev => ({ ...prev, expiry: e.target.value }))}
                            placeholder="MM/AA"
                            maxLength={5}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={cardData.cvv}
                            onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value }))}
                            placeholder="123"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Datos de Nequi */}
                  {paymentMethod === "nequi" && (
                    <div className="space-y-4 border-t pt-4">
                      <h3 className="font-semibold">Datos de Nequi</h3>
                      <div className="space-y-2">
                        <Label htmlFor="nequiPhone">Número de Teléfono *</Label>
                        <Input
                          id="nequiPhone"
                          value={nequiPhone}
                          onChange={(e) => setNequiPhone(e.target.value)}
                          placeholder="300 123 4567"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading || !selectedPackage}
                  >
                    {isLoading ? "Procesando..." : "Comprar Almas"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuySouls;
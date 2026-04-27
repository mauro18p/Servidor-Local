import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <>
      <div className="bg-gray-300 h-screen flex justify-between">
        <div className="w-1/2 bg-red-500 text-center content-center">
          <Badge variant="secondary" className="text-left">Precision Concierge service</Badge>

          <h1  className="text-left">Elevate Your Standard Of Service</h1>
          <p  className="text-left">Join Servidor Local to experience a curated ecosystem connecting discerning clients with elite professional and premier companies</p>
          <div className="flex justify-enenly w-full">
            <Card className="w-1/2">
                <CardContent>
                    <CardTitle>Vetted Network</CardTitle>
                    <CardDescription>Exclusive access to top-tier providers and clients</CardDescription>
                </CardContent>
            </Card>
            <Card className="w-1/2">
                <CardContent>
                    <CardTitle>Secure Platform</CardTitle>
                    <CardDescription>Entrepise-grade security for all your transactions and data</CardDescription>
                </CardContent>
            </Card>

          </div>
        </div>

        <div className="w-1/2 bg-green-500 text-center">
          <p>Direita</p>
        </div>
      </div>
    </>
  );
}

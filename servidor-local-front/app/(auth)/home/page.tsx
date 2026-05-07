import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
    return (
        <>
            <div className="bg-gray-300 h-screen flex justify-center">
                <h1 className="text-4xl font-bold text-center mt-20">Bem-vindo ao Servidor Local!</h1>
                <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                    <PedidoCard
                        title="Emergency Plumbing"
                        description="24/7 emergency plumbing services available. Fast response and reliable solutions for all your plumbing needs."
                        image="https://content.nationalgeographic.pt/medio/2025/01/10/dromedarios_5464acc9_250110103422_1280x960.webp"
                        category={{
                            id: 1,
                            nome: "Categoria 1",
                            icone: "https://magtechnical.com/wp-content/uploads/2024/07/How-Your-Home-Plumbing-System-Works.jpg"
                        }} />
                </div>
            </div>
        </>
    );
}
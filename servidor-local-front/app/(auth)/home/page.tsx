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
                        image="/images.jpg"
                        category={{
                            id: 1,
                            nome: "Categoria 1",
                            icone: "/icone1.png"
                        }} />
                </div>
            </div>
        </>
    );
}
import { Card, CardContent } from "../ui/card"

interface CategoriaType {
    id: number;
    nome: string;
    icone: string;
}
interface PedidoCardProps {
    title: string;
    description: string;
    image: string;
    category: CategoriaType
}

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return (
        <Card>
            <CardContent>
                <img src={pedidoCardProps.image} alt={pedidoCardProps.title} className="w-full h-48 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-4">{pedidoCardProps.title}</h2>
                <p className="text-gray-600 mt-2">{pedidoCardProps.description}</p>
            </CardContent>
        </Card>
    )
}
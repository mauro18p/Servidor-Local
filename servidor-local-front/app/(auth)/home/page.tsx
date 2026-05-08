import { Navbar } from "@/components/core/navbar";
import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
    return (
        <>
            <div className="grid h-screen grid-cols-[250px_1fr] grid-rows-[70px_1fr]">

                <header className="col-span-2 border-b flex items-center px-6">
                    <Navbar />
                </header>

                <aside className="border-r bg-zinc-100 p-4">
                    <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
                </aside>

                <main className="p-6 overflow-y-auto">
                    <div className="bg-gray-300 h-screen grid grid-cols-3 gap-4">
                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            <PedidoCard
                                title="Emergency Plumbing"
                                description="24/7 emergency plumbing services available. Fast response and reliable solutions for all your plumbing needs."
                                image="https://content.nationalgeographic.pt/medio/2025/01/10/dromedarios_5464acc9_250110103422_1280x960.webp"
                                category={{
                                    id: 1,
                                    nome: "Categoria 1",
                                    icone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaC1pY29uIGx1Y2lkZS13cmVuY2giPjxwYXRoIGQ9Ik0xNC43IDYuM2ExIDEgMCAwIDAgMCAxLjRsMS42IDEuNmExIDEgMCAwIDAgMS40IDBsMy4xMDYtMy4xMDVjLjMyLS4zMjIuODYzLS4yMi45ODMuMjE4YTYgNiAwIDAgMS04LjI1OSA3LjA1N2wtNy45MSA3LjkxYTEgMSAwIDAgMS0yLjk5OS0zbDcuOTEtNy45MWE2IDYgMCAwIDEgNy4wNTctOC4yNTljLjQzOC4xMi41NC42NjIuMjE5Ljk4NHoiLz48L3N2Zz4="
                                }} />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            <PedidoCard
                                title="Emergency Plumbing"
                                description="24/7 emergency plumbing services available. Fast response and reliable solutions for all your plumbing needs."
                                image="https://content.nationalgeographic.pt/medio/2025/01/10/dromedarios_5464acc9_250110103422_1280x960.webp"
                                category={{
                                    id: 1,
                                    nome: "Categoria 1",
                                    icone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaC1pY29uIGx1Y2lkZS13cmVuY2giPjxwYXRoIGQ9Ik0xNC43IDYuM2ExIDEgMCAwIDAgMCAxLjRsMS42IDEuNmExIDEgMCAwIDAgMS40IDBsMy4xMDYtMy4xMDVjLjMyLS4zMjIuODYzLS4yMi45ODMuMjE4YTYgNiAwIDAgMS04LjI1OSA3LjA1N2wtNy45MSA3LjkxYTEgMSAwIDAgMS0yLjk5OS0zbDcuOTEtNy45MWE2IDYgMCAwIDEgNy4wNTctOC4yNTljLjQzOC4xMi41NC42NjIuMjE5Ljk4NHoiLz48L3N2Zz4="
                                }} />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            <PedidoCard
                                title="Emergency Plumbing"
                                description="24/7 emergency plumbing services available. Fast response and reliable solutions for all your plumbing needs."
                                image="https://content.nationalgeographic.pt/medio/2025/01/10/dromedarios_5464acc9_250110103422_1280x960.webp"
                                category={{
                                    id: 1,
                                    nome: "Categoria 1",
                                    icone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaC1pY29uIGx1Y2lkZS13cmVuY2giPjxwYXRoIGQ9Ik0xNC43IDYuM2ExIDEgMCAwIDAgMCAxLjRsMS42IDEuNmExIDEgMCAwIDAgMS40IDBsMy4xMDYtMy4xMDVjLjMyLS4zMjIuODYzLS4yMi45ODMuMjE4YTYgNiAwIDAgMS04LjI1OSA3LjA1N2wtNy45MSA3LjkxYTEgMSAwIDAgMS0yLjk5OS0zbDcuOTEtNy45MWE2IDYgMCAwIDEgNy4wNTctOC4yNTljLjQzOC4xMi41NC42NjIuMjE5Ljk4NHoiLz48L3N2Zz4="
                                }} />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            <PedidoCard
                                title="Emergency Plumbing"
                                description="24/7 emergency plumbing services available. Fast response and reliable solutions for all your plumbing needs."
                                image="https://content.nationalgeographic.pt/medio/2025/01/10/dromedarios_5464acc9_250110103422_1280x960.webp"
                                category={{
                                    id: 1,
                                    nome: "Categoria 1",
                                    icone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaC1pY29uIGx1Y2lkZS13cmVuY2giPjxwYXRoIGQ9Ik0xNC43IDYuM2ExIDEgMCAwIDAgMCAxLjRsMS42IDEuNmExIDEgMCAwIDAgMS40IDBsMy4xMDYtMy4xMDVjLjMyLS4zMjIuODYzLS4yMi45ODMuMjE4YTYgNiAwIDAgMS04LjI1OSA3LjA1N2wtNy45MSA3LjkxYTEgMSAwIDAgMS0yLjk5OS0zbDcuOTEtNy45MWE2IDYgMCAwIDEgNy4wNTctOC4yNTljLjQzOC4xMi41NC42NjIuMjE5Ljk4NHoiLz48L3N2Zz4="
                                }} />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            <PedidoCard
                                title="Emergency Plumbing"
                                description="24/7 emergency plumbing services available. Fast response and reliable solutions for all your plumbing needs."
                                image="https://content.nationalgeographic.pt/medio/2025/01/10/dromedarios_5464acc9_250110103422_1280x960.webp"
                                category={{
                                    id: 1,
                                    nome: "Categoria 1",
                                    icone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaC1pY29uIGx1Y2lkZS13cmVuY2giPjxwYXRoIGQ9Ik0xNC43IDYuM2ExIDEgMCAwIDAgMCAxLjRsMS42IDEuNmExIDEgMCAwIDAgMS40IDBsMy4xMDYtMy4xMDVjLjMyLS4zMjIuODYzLS4yMi45ODMuMjE4YTYgNiAwIDAgMS04LjI1OSA3LjA1N2wtNy45MSA3LjkxYTEgMSAwIDAgMS0yLjk5OS0zbDcuOTEtNy45MWE2IDYgMCAwIDEgNy4wNTctOC4yNTljLjQzOC4xMi41NC42NjIuMjE5Ljk4NHoiLz48L3N2Zz4="
                                }} />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
                            <PedidoCard
                                title="Emergency Plumbing"
                                description="24/7 emergency plumbing services available. Fast response and reliable solutions for all your plumbing needs."
                                image="https://content.nationalgeographic.pt/medio/2025/01/10/dromedarios_5464acc9_250110103422_1280x960.webp"
                                category={{
                                    id: 1,
                                    nome: "Categoria 1",
                                    icone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaC1pY29uIGx1Y2lkZS13cmVuY2giPjxwYXRoIGQ9Ik0xNC43IDYuM2ExIDEgMCAwIDAgMCAxLjRsMS42IDEuNmExIDEgMCAwIDAgMS40IDBsMy4xMDYtMy4xMDVjLjMyLS4zMjIuODYzLS4yMi45ODMuMjE4YTYgNiAwIDAgMS04LjI1OSA3LjA1N2wtNy45MSA3LjkxYTEgMSAwIDAgMS0yLjk5OS0zbDcuOTEtNy45MWE2IDYgMCAwIDEgNy4wNTctOC4yNTljLjQzOC4xMi41NC42NjIuMjE5Ljk4NHoiLz48L3N2Zz4="
                                }} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
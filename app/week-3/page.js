import ItemList from "./item-list";

export default function Page() {
    return (
    <main className="m-4">
        <h1 className="text-3xl font-bold">Shopping List</h1>
        <div>
            <h2><ItemList /></h2>
        </div>  
    </main>
    )

}
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  return (
    <main className="m-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div>
        <h2>
          <ItemList />
        </h2>
      </div>
    </main>
  );
}

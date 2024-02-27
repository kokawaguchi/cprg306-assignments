export default function Item({ name, quantity, category }) {
  return (
    <ul className=" p-2 rounded-md mb-2 max-w-sm w-full bg-blue-900">
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </ul>
  );
}

export default function Item({name, quantity, category}) {
  return(
    <ul className=" p-2 rounded-md mb-4 w-1/4 bg-blue-900">
      <h1 className="text-xl font-bold" >{name}</h1>
      <p className="text-sm">Buy {quantity} in {category}</p>
    </ul>
  );
};

import Dog from "./dog.js";

// loop through dog-data.json and create a Dog component for each dog (map)
// delete passed to DogList via props
export default function DogList({ dogs, onDelete }) {
  return (
    // key should be unique, so use id
    <div>
      <h2>Dog List</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Dog
              id={dog.id}
              name={dog.name}
              age={dog.age}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

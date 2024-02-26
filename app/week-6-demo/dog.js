export default function Dog({ id, name, age, onDelete }) {
  // can also use Dog(props) and then use props.name, props.age, but this is not as clear
  // as just destructuring the props into name and age
  return (
    <div>
      <h2>Dog</h2>
      <p>Name:{name}</p>
      <p>Age: {age}</p>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
}

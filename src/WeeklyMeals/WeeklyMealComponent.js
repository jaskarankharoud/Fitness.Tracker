export default function Day(props) {
  return <div>{props.children}</div>;
}

export function Meal(props) {
  return (
    <div>
      <div>
        <span>Breakfast: </span>
        <span>{props.breakfast}</span>
      </div>
      <div>
        <span>Lunch: </span>
        <span>{props.lunch}</span>
      </div>
      <div>
        <span>Dinner: </span>
        <span>{props.dinner}</span>
      </div>
    </div>
  );
}

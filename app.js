const GroceryList = () => (
  <ul>
    <Milk />
    <Cereal />
  </ul>
);

const Milk = () => (
  <li>Milk</li>
);

const Cereal = () => (
  <li>Cereal</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
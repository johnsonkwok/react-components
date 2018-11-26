const GroceryList = (props) => (
  <ul>
    <GroceryListItem groceryItem={props.groceryItems[0]} />
    <GroceryListItem groceryItem={props.groceryItems[1]} />
  </ul>
);

const GroceryListItem = (props) => (
  <li>{props.groceryItem}</li>
);

const groceryItems = ['Milk', 'Cereal'];

ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById('app'));
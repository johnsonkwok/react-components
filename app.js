const GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => 
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.groceryItem}</li>
    );
  }

}

const groceryItems = ['Milk', 'Cereal'];

ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById('app'));
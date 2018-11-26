const GroceryList = (props) => (
  <ul>
    {props.groceryItems.map((groceryItem, index) => 
      <GroceryListItem key={index} groceryItem={groceryItem} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseOverItem = this.onMouseOverItem.bind(this);
    this.onMouseOffItem = this.onMouseOffItem.bind(this);
    this.state = {
      bold: false
    };
  }

  onMouseOverItem() {
    this.setState({
      bold: true
    });
  }

  onMouseOffItem() {
    this.setState({
      bold: false
    });
  }

  render() {
    const style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onMouseOverItem} onMouseOut={this.onMouseOffItem}>{this.props.groceryItem}</li>
    );
  }

}

const groceryItems = ['Milk', 'Cereal'];

ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById('app'));
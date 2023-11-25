class ProductList extends React.Component {
  render(){
    return(
      <div className = 'ui unstackable items'>
      Hello, friend! I am a basic React Component.Component.
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
import React, {Component} from 'react';
import './App.css';
//import './table.css';

class ProductRow extends React.Component {
  render() {
    
    const product = this.props.product;
    
    return (
        <tr>
          <td style={{ color: product.availability === false ? 'red' : 'black' }} >{product.title}</td>
          <td style={{ color: product.availability === false ? 'red' : 'black' }} >{product.genre}</td>
          <td style={{ color: product.availability === false ? 'red' : 'black' }} >{product.description}</td>
          <td style={{ color: product.availability === false ? 'red' : 'black' }} >{product.availability===true? "Yes":"No"}</td>
        </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];

    this.props.products.forEach((product) => {
      if (product.title.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.availability) {  
        return;
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          id = "form_input"
        />
        <p id = "form_p" class = "available_tutor">
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show available tutors
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
class App extends Component {
    
      state = {
        videos:[]
      }

      componentDidMount(){

        fetch('videos.json', {
          headers : { 
            'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( (data) => {
            this.setState({ videos: data })
            console.log( this.state.videos )
        })
        .catch(console.log)


      }
      render () {    
         return (
            <FilterableProductTable products={this.state.videos} />
        );
 
      }
}

//export default App;
export { SearchBar, ProductTable };

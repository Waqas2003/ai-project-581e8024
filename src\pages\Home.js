import React from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios.get('https://api.example.com/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <div className="row">
          {this.state.products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
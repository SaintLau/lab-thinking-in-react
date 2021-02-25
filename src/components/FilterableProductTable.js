import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';


class FilterableProductTable extends React.Component {

    state = {
        products: this.props.products,
        //filteredProducts: this.props.products,
        }

    render() {
        const { products} = this.state;
        return (
            <div>
                <SearchBar />
                <ProductTable filteredProducts={products} />
            </div>
        )
    }

}

export default FilterableProductTable;
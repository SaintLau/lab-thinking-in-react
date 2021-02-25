import React from 'react';
import ProductRow from './ProductRow';


class ProductTable extends React.Component {
    render() {
        const { filteredProducts } = this.props;
        return (
            <table>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                <tbody>
                    {filteredProducts.map((product) => {
                        return (
                            <ProductRow {...product} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}


export default ProductTable;
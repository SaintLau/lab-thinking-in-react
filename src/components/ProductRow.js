import React from 'react';

class ProductRow extends React.Component {   
    render(){
        const { name, price, stocked } = this.props;
        return (
            <tr>
                {/* if out of stock red else black */}
                <td style={{ color: stocked ? 'black' : 'red'}}>
                    {name}
                </td>
                <td>
                    {price}
                </td>
            </tr>
        )
    }
}
export default ProductRow;
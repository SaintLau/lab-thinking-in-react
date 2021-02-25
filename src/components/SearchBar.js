import React from 'react';
import ProductTable from './ProductTable';

class SearchBar extends React.Component {
    state = {
        search: '',
        stock: false,
    }
    
     handleFormSearch = (event) => {
        this.setState({
            search: event.target.value,
        }
        ) //  this.props.onFilter(this.state)
       }
        
    

    render() {
        return(
            <form>
                <label>Search</label>
                <input type="text" name="search" onChange={this.handleFormSearch} />

               <p>
               <input type="checkbox" name="onStock" /> {/*onChange={} checked={stock} */} 
               <label>Only show products on stock</label>
               </p>  
           </form>
        )
    }
}



export default SearchBar;
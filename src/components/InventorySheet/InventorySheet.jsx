import React from 'react';
import './InventorySheet.css'
import adminService from '../../utils/adminService';
import InventoryRow from '../InventoryRow/InventoryRow';
import { Component } from 'react';

class InventorySheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: null,
            sortedProducts: props.products
        }
    }
    mapProducts = () => {
        const products = (
            this.props.products.map((p, idx) => (
                <InventoryRow 
                    key={idx}
                    product={p}
                    handleUpdateProduct={this.props.handleUpdateProduct}
                    handleDeleteProduct={this.props.handleDeleteProduct}
                    handleRefresh={this.props.handleRefresh}
                    handleView={this.props.handleView}
                    toggleEditing={this.props.toggleEditing}
                />
            ))
        )
        // console.log('MORE MORE MORE TESTING===========', products)
        return products;
    }

    async componentDidMount() {
        const products = await adminService.indexProducts();
        this.setState({
            sortedProducts: products.sort(this.handleSortFunction('stockM'))
        });
        console.log('COMPONENT DID MOUNT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      }

    handleSort = (param) => {
        const newSort = [...this.props.products].sort(this.handleSortFunction(param))
        this.props.handleSort(newSort)
        // this.setState({
        //     sortedProducts: newSort
        // });
    }

    handleSortFunction = (param) => {
        function compare(a, b) {
            let paramA = a[param];
            let paramB = b[param];
    
            let comparison = 0;
            if (paramA > paramB) {
                comparison = 1;
            } else if (paramA < paramB) {
                comparison = -1
            }
            return comparison
        }
        return compare;
    }




    render() {
        // const products = (
        //     this.state.sortedProducts.map((p, idx) => (
        //         <InventoryRow 
        //             key={idx}
        //             product={p}
        //             handleUpdateProduct={this.props.handleUpdateProduct}
        //             handleDeleteProduct={this.props.handleDeleteProduct}
        //             handleRefresh={this.props.handleRefresh}
        //             handleView={this.props.handleView}
        //             toggleEditing={this.props.toggleEditing}
        //         />
        //     ))
        // )

        // console.log('TESTING=================', this.mapProducts());
     
        const mapped = this.mapProducts();
        console.log(mapped)
        return (
            <div>
                <h1>INVENTORY</h1>
                <h3 className="Button" onClick={() => this.props.toggleCreating()}>NEW PRODUCT</h3>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => this.handleSort('displayName')}>Name</th>
                            <th onClick={() => this.handleSort('series')}>Series</th>
                            <th>Cut</th>
                            <th>Color</th>
                            <th>XS</th>
                            <th>S</th>
                            <th>M</th>
                            <th>L</th>
                            <th>XL</th>
                            <th>SKU</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapped}
                    </tbody>
                </table> 
            </div>
        )
    }
} 

export default InventorySheet;
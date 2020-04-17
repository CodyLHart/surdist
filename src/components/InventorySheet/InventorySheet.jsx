import React from 'react';
import './InventorySheet.css'

import InventoryRow from '../InventoryRow/InventoryRow';

const InventorySheet = (props) => {
    const products = (
        props.products.map((p, idx) => (
            <InventoryRow 
                key={idx}
                product={p}
                handleUpdateProduct={props.handleUpdateProduct}
                handleDeleteProduct={props.handleDeleteProduct}
                handleRefresh={props.handleRefresh}
                handleView={props.handleView}
                toggleEditing={props.toggleEditing}
            />
        ))
    )
 
    return(
        <div>
            <h1>INVENTORY</h1>
            <h3 className="Button" onClick={() => props.toggleCreating()}>NEW PRODUCT</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Series</th>
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
                    {products}
                </tbody>
            </table> 
        </div>
    )
}

export default InventorySheet;
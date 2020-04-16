import React from 'react';
import './InventorySheet.css'

import InventoryRow from '../InventoryRow/InventoryRow';

const InventorySheet = (props) => {
    const products = (
        props.products.map((p, idx) => (
            <InventoryRow 
                product={p}
                handleUpdateProduct={props.handleUpdateProduct}
                handleDeleteProduct={props.handleDeleteProduct}
            />
        ))
    )

    return(
        <div>
            <h1>INVENTORY SHEET</h1>
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
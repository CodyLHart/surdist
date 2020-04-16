import React from 'react';
import './InventorySheet.css'
// import { Link } from 'react-router-dom';

const InventorySheet = (props) => {
    const products = (
        props.products.map((p, idx) => (
            <tr>
                <td>{p.design}</td>
                <td>{p.series}</td>
                <td>{p.cut}</td>
                <td>{p.color}</td>
                <td>{p.stockXS}</td>
                <td>{p.stockS}</td>
                <td>{p.stockM}</td>
                <td>{p.stockL}</td>
                <td>{p.stockXL}</td>
                <td>{p.sku}</td>
            </tr>
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
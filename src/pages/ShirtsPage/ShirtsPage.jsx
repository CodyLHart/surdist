import React, { Component } from 'react';
import styles from './ShirtsPage.module.css'
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import adminService from '../../utils/adminService';
import ProductCard from '../ProductCard/ProductCard';

class ShirtsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products,
            filtered: props.products.filter((product) => true),
            viewing: null
        }
    };
    
    async componentDidMount() {
        const products = await adminService.indexProducts();
        this.setState({
            products: products,
            filtered: products.filter((product) => true)
        });
    }

    handleFilter = (param, match) => {
        let filtered = this.props.products.filter((product) => product[param] === match);
        this.setState({filtered: filtered})
    }

    handleViewing = (product) => {
        this.state.viewing ? 
        this.setState({
            viewing: null
        })
        :
        this.setState({
            viewing: product 
        })
    }




    render() {
        const shirts = this.state.filtered.map((shirt, idx) => (
            <ProductThumbnail 
                product={shirt}
                key={idx}
                handleViewing={this.handleViewing}
            />
        ))
        return (
            <div className={styles.page}>
                <div className={styles.headerFill}></div>
                <ProductCard 
                    viewing={this.state.viewing}
                />
                <h1 className={styles.series}>SHIRTS</h1>
                <h3>HAND PRINTED BY THE MILK MEN THEMSELVES</h3>
                <button onClick={() => {this.handleFilter('productType', "Shirt")}}>VIEW ALL</button>
                <button onClick={() => {this.handleFilter('series', "Milk Shirts")}}>MILK</button>
                <button onClick={() => {this.handleFilter('series', "Not Milk?")}}>NOT MILK</button>
                <button onClick={() => {this.handleFilter('color', "Brown")}}>BROWN</button>
                <div className={styles.whiteBG}>
                    <div className={styles.container}>
                        {shirts}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShirtsPage;
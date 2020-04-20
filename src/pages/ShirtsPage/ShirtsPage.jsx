import React, { Component } from 'react';
import styles from './ShirtsPage.module.css'
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import adminService from '../../utils/adminService';
import ProductCard from '../../components/ProductCard/ProductCard';

class ShirtsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products,
            filtered: props.products,
            filter: ""
        }
    };
    
    async componentDidMount() {
        const products = await adminService.indexProducts();
        this.setState({
            products: products,
            filtered: products.filter((product) => !!product.photo )
        });
    }

    handleFilter = (param, match) => {
        let filtered = this.props.products.filter((product) => (product[param] === match) && product.photo);
        this.setState({filtered: filtered, filter: match})
    }

    render() {
        const shirts = this.state.filtered.map((shirt, idx) => (
            <ProductThumbnail 
                product={shirt}
                key={idx}
                handleViewing={this.props.handleViewing}
            />
        ))
        return (
            <div className={styles.page} onClick={() => this.props.handleViewingNull()}>
                <div className={styles.headerFill}></div>
                <ProductCard 
                    viewing={this.props.viewing}
                    cartVisible={this.props.cartVisible}
                    handleViewing={this.props.handleViewing}
                    handleCartButton={this.props.handleCartButton}
                />
                <h1 className={styles.series}>SHIRTS</h1>
                <h3>HAND PRINTED BY THE MILK MEN THEMSELVES</h3>
                <button className={this.state.filter === "" ? styles.sel : null} onClick={() => {this.handleFilter('productType', "Shirt")}}>VIEW ALL</button>
                <button className={this.state.filter === "Milk Shirts" ? styles.sel : null} onClick={() => {this.handleFilter('series', "Milk Shirts")}}>THE MILK SHIRTS</button>
                <button className={this.state.filter === "Not Milk?" ? styles.sel : null} onClick={() => {this.handleFilter('series', "Not Milk?")}}>NOT MILK?</button>
                <button className={this.state.filter === "Opinions" ? styles.sel : null} onClick={() => {this.handleFilter('series', "Opinions")}}>OPINIONS</button>
                <button onClick={() => {this.handleFilter('series', "The Bread Shirts")}}>THE BREAD SHIRTS</button>
                {/* <button onClick={() => {this.handleFilter('color', "Brown")}}>BROWN</button> */}
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
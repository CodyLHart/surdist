import React, {Component} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './EditProductForm.module.css'

class EditProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: props.product ? true : false,
            displayName: null,
            series: null,
            cut: null,
            color: null,
            stockXS: null,
            stockS: null,
            stockM: null,
            stockL: null,
            stockXL: null,
            sku: null,
            
        }
    }
    render() {
        return (
            <div onClick={(e) => e.stopPropagation()} className={this.props.product ? styles.editForm : styles.none}>
                <ProductCard />
            </div>
        );
    }
}

export default EditProductForm;
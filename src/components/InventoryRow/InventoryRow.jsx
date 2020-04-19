import React from 'react';
// import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './InventoryRow.module.css';
// import adminService from '../../utils/adminService';

class InventoryRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: null,
            deleting: false,
            displayName: this.props.product.displayName,
            series: this.props.product.series,
            cut: this.props.product.cut,
            color: this.props.product.color,
            stockXS: this.props.product.stockXS,
            stockS: this.props.product.stockS,
            stockM: this.props.product.stockM,
            stockL: this.props.product.stockL,
            stockXL: this.props.product.stockXL,
            sku: this.props.product.sku,
            newdisplayName: null,
            newseries: null,
            newcut: null,
            newcolor: null,
            newstockXS: null,
            newstockS: null,
            newstockM: null,
            newstockL: null,
            newstockXL: null,
            newsku: null,
            _id: this.props.product._id,
        }
    }

    initialState = {
            editing: null,
            displayName: this.props.product.displayName,
            series: this.props.product.series,
            cut: this.props.product.cut,
            color: this.props.product.color,
            stockXS: this.props.product.stockXS,
            stockS: this.props.product.stockS,
            stockM: this.props.product.stockM,
            stockL: this.props.product.stockL,
            stockXL: this.props.product.stockXL,
            sku: this.props.product.sku,
            newdisplayName: null,
            newseries: null,
            newcut: null,
            newcolor: null,
            newstockXS: null,
            newstockS: null,
            newstockM: null,
            newstockL: null,
            newstockXL: null,
            newsku: null,
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.product._id !== this.state._id) {
            this.setState({ ...this.state, ...nextProps.product });
        }
    }

    toggleDeleting = () => {
        this.setState({
            deleting: this.state.deleting ? false : true
        })
    }

    handleEdit = (id) => {
        this.setState({editing: id})
    } 

    handleSave = () => {
        let product = {...this.props.product}
        product.displayName = this.state.newdisplayName ? this.state.newdisplayName : this.state.displayName;
        product.series = this.state.newseries ? this.state.newseries : this.state.series;
        product.cut = this.state.newcut ? this.state.newcut : this.state.cut;
        product.color = this.state.newcolor ? this.state.newcolor : this.state.color;
        product.stockXS = this.state.newstockXS ? this.state.newstockXS : this.state.stockXS;
        product.stockS = this.state.newstockS ? this.state.newstockS : this.state.stockS;
        product.stockM = this.state.newstockM ? this.state.newstockM : this.state.stockM;
        product.stockL = this.state.newstockL ? this.state.newstockL : this.state.stockL;
        product.stockXL = this.state.newstockXL ? this.state.newstockXL : this.state.stockXL;
        product.sku = this.state.newsku ? this.state.newsku : this.state.sku;

        this.props.handleUpdateProduct(product);
        this.setState({editing: null})
    }

    handleCancel = () => {
        let newVals = {
            newdisplayName: '',
            newseries: '',
            newcut: '',
            newcolor: '',
            newstockXS: '',
            newstockS: '',
            newstockM: '',
            newstockL: '',
            newstockXL: '',
        };

        this.setState({
            editing: null,
            ...newVals,
            sku: this.props.product.sku
        });

    }
    
    handleChange = (e) => {
        this.setState({
            [`new${e.target.name}`]: e.target.value,
            sku: `${this.state.newdisplayName ? this.state.newdisplayName.slice(0,3).toUpperCase() : this.state.displayName.slice(0,3).toUpperCase()}-${this.state.newcut ? this.state.newcut.slice(0, 1).toUpperCase() : this.state.cut.slice(0, 1).toUpperCase()}-${this.state.newcolor ? this.state.newcolor.slice(0,3).toUpperCase() : this.state.color.slice(0,3).toUpperCase()}`
        });
    }

    render() {
        return(
            this.state.editing === this.props.product._id?
            <tr>
                <td><input type="text" value={this.state.newdisplayName ? this.state.newdisplayName : this.state.displayName} name='displayName' onChange={this.handleChange}></input></td>
                <td><input type="text" value={this.state.newseries ? this.state.newseries : this.state.series} name='series' onChange={this.handleChange}></input></td>
                <td><input type="text" value={this.state.newcut ? this.state.newcut : this.state.cut} name='cut' onChange={this.handleChange}></input></td>
                <td><input type="text" value={(typeof this.state.newcolor === 'string') ? this.state.newcolor : this.state.color} name='color' onChange={this.handleChange}></input></td>
                <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockXS ? this.state.newstockXS : this.state.stockXS} name='stockXS' onChange={this.handleChange}></input></td>
                <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockS ? this.state.newstockS : this.state.stockS} name='stockS' onChange={this.handleChange}></input></td>
                <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockM ? this.state.newstockM : this.state.stockM} name='stockM' onChange={this.handleChange}></input></td>
                <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockL ? this.state.newstockL : this.state.stockL} name='stockL' onChange={this.handleChange}></input></td>
                <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockXL ? this.state.newstockXL : this.state.stockXL} name='stockXL' onChange={this.handleChange}></input></td>
                <td>{this.state.newsku ? this.state.newsku : this.state.sku}</td>
                <td className={styles.save} onClick={() => this.handleSave()}>SAVE</td>
                <td className={styles.cancel} onClick={() => this.handleCancel()}>CANCEL</td>
                {/* <td><Link to={`/admin/product/${this.props.product._id}`}>Edit</Link></td> */}
            </tr>
            :
            <tr>
                <td>{this.state.displayName}</td>
                <td>{this.state.series}</td>
                <td>{this.state.cut}</td>
                <td className={styles.color} style={{backgroundColor: this.state.color.replace(' ', '')}} >{this.state.color}</td>
                <td className={styles.number}>{this.state.stockXS}</td>
                <td className={styles.number}>{this.state.stockS}</td>
                <td className={styles.number}>{this.state.stockM}</td>
                <td className={styles.number}>{this.state.stockL}</td>
                <td className={styles.number}>{this.state.stockXL}</td>
                <td>{this.state.sku}</td>
                <td className={styles.edit} onClick={() => this.handleEdit(this.props.product._id)}>EDIT</td>
                <td className={styles.view} onClick={() => this.props.handleView(this.props.product)}>VIEW</td>
                <td className={styles.delete} onClick={() => this.toggleDeleting()}>
                    {this.state.deleting ? 'REALLY?' : 'DELETE'}
                </td>
                {this.state.deleting ? 
                    <>
                        <td className={styles.save} onClick={() => this.toggleDeleting()}>NO</td>
                        <td className={styles.cancel} onClick={() => (this.props.handleDeleteProduct(this.props.product))}>YES</td>
                    </> 
                    : null}
            </tr>
        )
    }
}

export default InventoryRow; 
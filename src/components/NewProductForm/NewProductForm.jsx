import React, {Component} from 'react';
// import userService from '../../utils/userService';
import adminService from '../../utils/adminService';
import styles from './NewProductForm.module.css'

class NewProductForm extends Component {
    initState = {
        productType: '',
        displayName: '',
        series: '',
        design: '',
        cut: '',
        material: '',
        color: '',
        price: '25',
        stockXS: '5',
        stockS: '5',
        stockM: '5',
        stockL: '5',
        stockXL: '5',
        sku: '',
        photo: '',
    };

    state = this.initState;

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            sku: `${this.state.design.slice(0, 3).toUpperCase()}-${this.state.cut.slice(0,1).toUpperCase()}-${this.state.color.slice(0, 3).toUpperCase()}`
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await adminService.createProduct(this.state);
            this.setState(this.initState);
            await adminService.indexProducts();
        } catch (err) {
            console.log(err)
        }
        this.props.handleAddProduct(this.state);
        this.props.history.push('/admin/inventory');
    }

    isFormInvalid() {
        return !(this.state.productType && this.state.displayName && this.state.sku)
    }

    render() {
        return (
            <div onClick={(e) => e.stopPropagation()} className={this.props.creating ? styles.newProductFormCard : styles.none}>
                <header className={styles.createHeader}>CREATE NEW PRODUCT</header>
                <form onSubmit={this.handleSubmit} className={styles.newProductForm}>
                    <label>
                        Product Type: &nbsp;
                        <select name="productType" onChange={this.handleChange}>
                            <option value={null} defaultValue></option>
                            <option value='Shirt'>Shirt</option>
                            <option value='Hat'>Hat</option>
                            <option value='Art'>Art</option>
                            <option value='Other'>Other</option>
                        </select>
                    </label>
                    <label>
                        Display Name: &nbsp;
                        <input type="text" placeholder="Display Name" value={this.state.displayName} name="displayName" onChange={this.handleChange}></input>
                    </label>
                    { this.state.productType === 'Shirt' ?
                        <>
                        <label>
                            Series: &nbsp;
                            <input type="text" placeholder="Series" value={this.state.series} name="series" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Design: &nbsp;
                            <input type="text" placeholder="Design" value={this.state.design} name="design" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Cut: &nbsp;
                            <input type="text" placeholder="Cut" value={this.state.cut} name="cut" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Material: &nbsp;
                            <input type="text" placeholder="Material" value={this.state.material} name="material" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Color: &nbsp;
                            <input type="text" placeholder="Color" value={this.state.color} name="color" onChange={this.handleChange}></input>
                        </label>
                        </>
                    : null}
                    <label>
                        Price: &nbsp;
                        <input type="number" placeholder="25" value={this.state.price} name="price" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock XS: &nbsp;
                        <input type="number" placeholder="0" value={this.state.stockXS} name="stockXS" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock S: &nbsp;
                        <input type="number" placeholder="0" value={this.state.stockS} name="stockS" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock M: &nbsp;
                        <input type="number" placeholder="0" value={this.state.stockM} name="stockM" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock L: &nbsp;
                        <input type="number" placeholder="0" value={this.state.stockL} name="stockL" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock XL: &nbsp;
                        <input type="number" placeholder="0" value={this.state.stockXL} name="stockXL" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        SKU: &nbsp;
                        <input type="text" disabled placeholder={this.state.color} value={this.state.sku} name="sku"></input>
                    </label>
                    <label>
                        PHOTO: &nbsp;
                        <input type="text" placeholder="Photo1 URL" value={this.state.photo1} name="photo1" onChange={this.handleChange}></input>
                    </label>
                    <br/>
                    <button className="Button" disabled={this.isFormInvalid()}>CREATE</button>
                </form>
            </div>
        );
    }
} 

export default NewProductForm;
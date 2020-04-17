import React, {Component} from 'react';
// import userService from '../../utils/userService';
import adminService from '../../utils/adminService';
import './EditProductForm.css'

class EditProductForm extends Component {

    initState = {
        productType: '',
        displayName: '',
        series: '',
        design: '',
        cut: '',
        material: '',
        color: '',
        price: '25',
        stockXS: '0',
        stockS: '0',
        stockM: '0',
        stockL: '0',
        stockXL: '0',
        sku: '',
        photo: '',
    };

    state = this.initState;
    async componentDidMount() {
        const product = await adminService.indexOne();
        alert(product);
        this.setState({
            product: product
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            sku: `${this.state.design.slice(0, 3).toUpperCase()}-${this.state.cut.slice(0,1).toUpperCase()}-${this.state.color.slice(0, 3).toUpperCase()}`
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            this.setState({
                price: parseInt(this.state.price),
                stock: parseInt(this.state.stock)
            }, () => console.log(this.state));
            
            await adminService.createProduct(this.state);
            this.setState(this.initState);
            await adminService.indexProducts();
        } catch (err) {
            console.log(err)
        }
        this.props.history.push('/admin/inventory');
    }

    isFormInvalid() {
        return !(this.state.productType && this.state.displayName && this.state.sku)
    }

    render() {
        return (
            <div>
                <header>EDIT PRODUCT {this.state.product}</header>
                <form onSubmit={this.handleSubmit} className="new-product-form">
                    <label>
                        Product Type &nbsp;
                        <select name="productType" onChange={this.handleChange}>
                            <option value={null} defaultValue></option>
                            <option value='Shirt' defaultValue>Shirt</option>
                            <option value='Hat' defaultValue>Hat</option>
                            <option value='Art' defaultValue>Art</option>
                            <option value='Other' defaultValue>Other</option>
                        </select>
                    </label>
                    <label>
                        Display Name: &nbsp;
                        <input type="text" className="edit-input" placeholder="Display Name" value={this.state.displayName} name="displayName" onChange={this.handleChange}></input>
                    </label>
                    { this.state.productType === 'Shirt' ?
                        <>
                        <label>
                            Series: &nbsp;
                            <input type="text" className="edit-input" placeholder="Series" value={this.state.series} name="series" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Design: &nbsp;
                            <input type="text" className="edit-input" placeholder="Design" value={this.state.design} name="design" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Cut: &nbsp;
                            <input type="text" className="edit-input" placeholder="Cut" value={this.state.cut} name="cut" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Material: &nbsp;
                            <input type="text" className="edit-input" placeholder="Material" value={this.state.material} name="material" onChange={this.handleChange}></input>
                        </label>
                        <label>
                            Color: &nbsp;
                            <input type="text" className="edit-input" placeholder="Color" value={this.state.color} name="color" onChange={this.handleChange}></input>
                        </label>
                        </>
                    : null}
                    <label>
                        Price: &nbsp;
                        <input type="number" className="edit-input" placeholder="25" value={this.state.price} name="price" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock XS: &nbsp;
                        <input type="number" className="edit-input" placeholder="5" value={this.state.stockXS} name="stockXS" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock S: &nbsp;
                        <input type="number" className="edit-input" placeholder="5" value={this.state.stockS} name="stockS" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock M: &nbsp;
                        <input type="number" className="edit-input" placeholder="5" value={this.state.stockM} name="stockM" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock L: &nbsp;
                        <input type="number" className="edit-input" placeholder="5" value={this.state.stockL} name="stockL" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        Stock XL: &nbsp;
                        <input type="number" className="edit-input" placeholder="5" value={this.state.stockXL} name="stockXL" onChange={this.handleChange}></input>
                    </label>
                    <label>
                        SKU: &nbsp;
                        <input type="text" className="edit-input" disabled placeholder={this.state.color} value={this.state.sku} name="sku"></input>
                    </label>
                    <label>
                        PHOTO: &nbsp;
                        <input type="text" className="edit-input" placeholder="Photo1 URL" value={this.state.photo1} name="photo1" onChange={this.handleChange}></input>
                    </label>
                    <br/>
                    <button disabled={this.isFormInvalid()}>Create Product</button>
                </form>
            </div>
        );
    }
}

export default EditProductForm;
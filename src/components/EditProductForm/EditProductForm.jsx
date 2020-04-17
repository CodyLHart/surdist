import React, {Component} from 'react';
// import userService from '../../utils/userService';
// import adminService from '../../utils/adminService';
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
                <header>EDIT PRODUCT</header>
                <h2>{this.props.product ? this.props.product.displayName : null}</h2>
                <h3>{this.state.displayName}</h3>
                <input type="text" value={this.state.displayName ? this.state.displayName : this.props.displayName} name='displayName' onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default EditProductForm;


// this.state.editing === this.props.product._id ?
//             <tr>
//                 <td><input type="text" value={this.state.newdisplayName ? this.state.newdisplayName : this.state.displayName} name='displayName' onChange={this.handleChange}></input></td>
//                 <td><input type="text" value={this.state.newseries ? this.state.newseries : this.state.series} name='series' onChange={this.handleChange}></input></td>
//                 <td><input type="text" value={this.state.new ? this.state.newcut : this.state.cut} name='cut' onChange={this.handleChange}></input></td>
//                 <td><input type="text" value={(typeof this.state.newcolor === 'string') ? this.state.newcolor : this.state.color} name='color' onChange={this.handleChange}></input></td>
//                 <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockXS ? this.state.newstockXS : this.state.stockXS} name='stockXS' onChange={this.handleChange}></input></td>
//                 <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockS ? this.state.newstockS : this.state.stockS} name='stockS' onChange={this.handleChange}></input></td>
//                 <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockM ? this.state.newstockM : this.state.stockM} name='stockM' onChange={this.handleChange}></input></td>
//                 <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockL ? this.state.newstockL : this.state.stockL} name='stockL' onChange={this.handleChange}></input></td>
//                 <td className={styles.number}><input className={styles.numberEdit} type="number" value={this.state.newstockXL ? this.state.newstockXL : this.state.stockXL} name='stockXL' onChange={this.handleChange}></input></td>
//                 <td>{this.state.newsku ? this.state.newsku : this.state.sku}</td>
//                 <td onClick={() => this.handleSave()}>SAVE</td>
//                 <td onClick={() => this.handleCancel()}>CANCEL</td>
//                 {/* <td><Link to={`/admin/product/${this.props.product._id}`}>Edit</Link></td> */}
//             </tr>
//             :
//             <tr>
//                 <td>{this.state.displayName}</td>
//                 <td>{this.state.series}</td>
//                 <td>{this.state.cut}</td>
//                 <td>{this.state.color}</td>
//                 <td className={styles.number}>{this.state.stockXS}</td>
//                 <td className={styles.number}>{this.state.stockS}</td>
//                 <td className={styles.number}>{this.state.stockM}</td>
//                 <td className={styles.number}>{this.state.stockL}</td>
//                 <td className={styles.number}>{this.state.stockXL}</td>
//                 <td>{this.state.sku}</td>
//                 <td onClick={() => this.handleEdit(this.props.product._id)}>EDIT</td>
//                 <td onClick={() => this.props.handleView(this.props.product)}>VIEW</td>
//                 <td onClick={() => this.toggleDeleting()}>
//                     {this.state.deleting ? 'REALLY?' : 'DELETE'}
//                 </td>
//                 {this.state.deleting ? 
//                     <>
//                         <td onClick={() => this.toggleDeleting()}>NO</td>
//                         <td onClick={() => (this.props.handleDeleteProduct(this.props.product))}>YES</td>
//                     </> 
//                     : null}
//             </tr>
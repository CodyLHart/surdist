import React, { Component } from 'react';
import './AdminPage.css'
import NewProductForm from '../../components/NewProductForm/NewProductForm';
import adminService from '../../utils/adminService';
import InventorySheet from '../../components/InventorySheet/InventorySheet';
import { Switch, Route } from 'react-router-dom';
import AdminNav from '../../components/AdminNav/AdminNav';

class AdminPage extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            currentProduct: null,
        }
    }

    async componentDidMount() {
        const products = await adminService.indexProducts();
        this.setState({
            products: products
        });
    }

    render() {

        // const productRows = this.state.products.map((name, idx) => (
        //     <tr key={idx}>
        //         <td>{this.state.products[idx].displayName}</td>
        //     </tr>
        // ));
        
        return (
            <div className="admin-page">
                <h1>ADMIN PAGE</h1>
                <AdminNav />
                <main className="admin-main">
                    <Switch>
                        <Route exact path = '/admin/inventory' render={() =>
                            <InventorySheet 
                                products={this.state.products}
                            />
                        }/>
                        <Route exact path = '/admin/new' render={() =>
                            <NewProductForm 
                                history={this.props.history}
                            />
                        }/>
                        <Route exact path = '/admin/edit' render={() =>
                            <NewProductForm 
                                history={this.props.history}
                            />
                        }/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default AdminPage;
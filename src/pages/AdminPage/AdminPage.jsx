import React, { Component } from 'react';
import './AdminPage.css'
import NewProductForm from '../../components/NewProductForm/NewProductForm';
import EditProductForm from '../../components/EditProductForm/EditProductForm';
import adminService from '../../utils/adminService';
import InventorySheet from '../../components/InventorySheet/InventorySheet';
import { Switch, Route } from 'react-router-dom';
import AdminNav from '../../components/AdminNav/AdminNav';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
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
        return (
            <div className="admin-page">
                <h1>ADMIN PAGE</h1>
                <AdminNav />
                <main className="admin-main">
                    <Switch>
                        <Route exact path = '/admin/inventory' render={() =>
                            <InventorySheet 
                                products={this.state.products}
                                handleUpdateProduct={this.props.handleUpdateProduct}
                                handleDeleteProduct={this.props.handleDeleteProduct}
                                handleRefresh={this.props.handleRefresh}
                            />
                        }/>
                        <Route exact path = '/admin/new' render={() =>
                            <NewProductForm 
                                history={this.props.history}
                            />
                        }/>
                        <Route path = '/admin/product/:id' render={() =>
                            <EditProductForm 
                                history={this.props.history}
                                handleUpdateProduct={this.props.handleUpdateProduct}
                                handleDeleteProduct={this.props.handleDeleteProduct}
                                // products={this.state.products}
                            />
                        }/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default AdminPage;
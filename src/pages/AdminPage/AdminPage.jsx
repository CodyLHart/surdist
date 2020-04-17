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
            editing: false,
            creating: false
        }
    }

    async componentDidMount() {
        const products = await adminService.indexProducts();
        this.setState({
            products: products
        });
    }

    handleView = (product) => {
        this.toggleEditing();
        this.setState({
            currentProduct: (this.state.currentProduct && !product) ? null : product 
        })   

    }

    handleOffClick = () => {
        if (this.state.currentProduct) {
            this.setState({currentProduct: null})
        } else if (this.state.creating) {
            this.setState({creating: null})
        }
    }

    toggleEditing = () => {
        this.state.editing ? 
            (this.setState({editing: false}))
        :
            (this.setState({editing: true}));

    };
    
    toggleCreating = () => {
        this.state.creating ? 
            (this.setState({creating: false}))
        :
            (this.setState({creating: true}));

    };
    

    render() {        
        return (
            <div onClick={() => this.handleOffClick()} className="admin-page">
                <h1>ADMIN PAGE</h1>
                <AdminNav 
                    toggleCreating={this.toggleCreating}
                />
                <main className="admin-main">
                    <Switch>
                        <Route exact path = '/admin/inventory' render={() =>
                            <InventorySheet 
                                products={this.props.products}
                                handleUpdateProduct={this.props.handleUpdateProduct}
                                handleDeleteProduct={this.props.handleDeleteProduct}
                                handleRefresh={this.props.handleRefresh}
                                handleView={this.handleView}
                                toggleEditing={this.toggleEditing}
                                toggleCreating={this.toggleCreating}
                                handleSort={this.props.handleSort}
                            />
                        }/>
                        <Route exact path = '/admin/new' render={() =>
                            <NewProductForm 
                                history={this.props.history}
                            />
                        }/>
                    </Switch>
                    <NewProductForm 
                        history={this.props.history}
                        creating={this.state.creating}
                        cartVisible={this.props.cartVisible}
                        handleAddProduct={this.props.handleAddProduct}
                    />
                    <EditProductForm 
                        product={this.state.currentProduct}
                        handleView={this.handleView}
                        editing={this.state.editing}
                    />
                </main>
            </div>
        );
    }
}

export default AdminPage;
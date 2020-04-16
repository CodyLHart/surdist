import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css'

const AdminNav = (props) => {

    return (
        <div className="AdminNav">
            <nav>
                <Link to="/admin/inventory">Inventory</Link>
                <Link to="/admin/new">New Product</Link>
            </nav>
        </div>
    );
};

export default AdminNav;
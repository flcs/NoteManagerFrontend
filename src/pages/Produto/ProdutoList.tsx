// https://jasonwatmore.com/post/2020/10/09/react-crud-example-with-react-hook-form#users-list-jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { apiDeleteProduto, apiGetProduto, apiGetProdutos } from '../../services/produto';

function List({ match }) {
    const { path } = match;
    const [listProdutos, setListProdutos] = useState([]);

    useEffect(() => {
        apiGetProdutos().then(x => setListProdutos(x));
    }, []);

    function deleteUser(id) {
        setListProdutos(listProdutos.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        apiDeleteProduto(id).then(() => {
            setListProdutos(listProdutos => listProdutos.filter(x => x.id !== id));
        });
    }

    return (
        <div>
            <h1>Users</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add User</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '30%' }}>Role</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {listProdutos && listProdutos.map(produto =>
                        <tr key={produto.id}>
                            <td>{produto.name}</td>
                            <td>{produto.categoria}</td>
                            <td>{produto.preco}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${produto.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteUser(produto.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={produto.isDeleting}>
                                    {produto.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!listProdutos &&
                        <tr>
                            <td className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {listProdutos && !listProdutos.length &&
                        <tr>
                            <td className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };
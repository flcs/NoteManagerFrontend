//https://jasonwatmore.com/post/2020/10/09/react-crud-example-with-react-hook-form#users-list-jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { apiGetProduto, apiGetProdutos, apiPostProduto, apiUpdateProduto } from '../../services/produto';

function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        nome: Yup.string()
            .required('Nome is required'),
        categoria: Yup.string()
            .required('Categoria is required'),
        preco: Yup.string()
            .required('Preco is required')
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function onSubmit(data) {
        return isAddMode
            ? createProduto(data)
            : updateProduto(id, data);
    }

    function createProduto(data) {
        return apiPostProduto(data)
            .then(() => {
                alertService.success('User added', { keepAfterRouteChange: true });
                history.push('.');
            })
            .catch(alertService.error);
    }

    function updateProduto(id, data) {
        return apiUpdateProduto({ id, ...data } )
            .then(() => {
                alertService.success('User updated', { keepAfterRouteChange: true });
                history.push('..');
            })
            .catch(alertService.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            apiGetProduto(id).then(produto => {
                const fields = ['nome', 'categoria', 'preco'];
                fields.forEach(field => setValue(field, produto[field]));
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <h1>{isAddMode ? 'Add Produto' : 'Edit Produto'}</h1>
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Nome</label>
                    <input name="nome" type="text" ref={register} className={`form-control ${errors.nome ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.nome?.message}</div>
                </div>
                <div className="form-group col-5">
                    <label>Categoria</label>
                    <input name="categoria" type="text" ref={register} className={`form-control ${errors.categoria ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.categoria?.message}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Preco</label>
                    <input name="preco" type="text" ref={register} className={`form-control ${errors.preco ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.preco?.message}</div>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" disabled={formState.isSubmitting} className="btn btn-primary">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export { AddEdit };
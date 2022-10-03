// https://jasonwatmore.com/post/2020/10/09/react-crud-example-with-react-hook-form#users-list-jsx

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProdutoList } from './ProdutoList';
import { AddEdit } from './AddEdit';

function Produtos({ match }) {
    const { path } = match;
    
    return (
        <Switch>
            <Route exact path={path} component={ProdutoList} />
            <Route path={`${path}/add`} component={AddEdit} />
            <Route path={`${path}/edit/:id`} component={AddEdit} />
        </Switch>
    );
}

export { Produtos };
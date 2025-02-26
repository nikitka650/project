import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../home';
import Ball from '../ball';
import TodoList from '../todolist';
import About from '../about';

const Main = () => {

    return <div>
        <Switch>
            <Route path='/about_website' component={About} />
            <Route path='/todoList' component={TodoList} />
            <Route path='/ball_8' component={Ball} />
            <Route exams path='/' component={Home} />
        </Switch>
    </div>
}

export default Main;
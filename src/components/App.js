import React from 'react';
import Form from './Form';
import Recipes from './Recipes';
import {BrowserRouter, Switch, Route} from 'react-router';

const API_KEY = 'f3ff197056d60457fe43970181456e38';

class App extends React.Component {

    state = {recipes: []}

    getRecipe = async (event) => {
        event.preventDefault();

        const recipeName = event.target.elements.recipeName.value;

        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
        const data = await api_call.json();

        this.setState({recipes: data.recipes});
    }

    render() {
        return (
            <div>
                <Form getRecipe={this.getRecipe} />
                <Recipes recipes={this.state.recipes} />
            </div>
        );
    }
}

export default App;
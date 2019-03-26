import React from 'react';
import Form from './Form';

const API_KEY = 'f3ff197056d60457fe43970181456e38';

class App extends React.Component {

    state = {recipes: []}

    getRecipe = async (event) => {
        event.preventDefault();

        const recipeName = event.target.elements.recipeName.value;
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`);

        const data = await api_call.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                <Form getRecipe={this.getRecipe}/>
            </div>
        )
    }
}

export default App;
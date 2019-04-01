import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const Recipes = (props) => {

    return (
        <div>
            {props.recipes.map((recipe) => {
                    return (
                        <div key={recipe.recipe_id} className="ui raised segments">
                            <p>{recipe.title}</p>
                            <img src={recipe.image_url} alt={recipe.title} className="picture"/>
                        </div>
                    );
                })}
        </div>
    )
}

export default Recipes;
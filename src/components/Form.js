import React from 'react';

const Form = (props) => {

    return (
        <form className="ui icon input" onSubmit={props.getRecipe}>
            <input className="ui input focus" type="text" name="recipeName" />
            <button className="ui yellow basic button">Search</button>
        </form>
    );
};

export default Form;
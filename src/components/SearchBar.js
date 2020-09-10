import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');
    //only one line callback, so we can put it inside the JSX itself
    /* const onInputChange = (event) => {
        setTerm(event.target.value);
    } */
    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    }
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Youtube Video Search</label>
                    <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} placeholder='Search'/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
//input in HTML takes in the following attributes...type class id value and required
//these attrs will be props that container component passes down to its presentational child component(input)
//thus mentioning props, best practice is to incoporate prop-types to document React components.

import React from 'react'; 
import PropTypes from 'prop-types';

const Input = ({label, text, type, id, value, handleChange}) => (
    <div className='form-group'>
    {/* htmlFor attritube specifies which form element a label is bound to. case: the label being pulled in from container parent */}
        <label htmlFor={label}>
            {text} 
        </label>
        <input
            type={type}
            className='form-control'
            id={id}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);

//type check with PropTypes in React
Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};


export default Input;
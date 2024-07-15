import React from 'react';
import Form from 'react-bootstrap/Form';

const Sidebar = ({ categories, selectedOptions, handleOptionChange }) => {
    return (
        <div className="sidebar">
            {categories.map((category, idx) => (
                <div key={idx}>
                    <h4>{category.name}</h4>
                    <Form>
                        {category.options.map((option, optionIdx) => (
                            <Form.Check 
                                key={optionIdx}
                                type="checkbox"
                                id={`option-${optionIdx}`}
                                label={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleOptionChange(option)}
                            />
                        ))}
                    </Form>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

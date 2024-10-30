import React from 'react';

const AddItemForm = ({ onSubmit, toggleSubmit, inputValue, setInputValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <div className="addTasks">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='✍️ Add Tasks...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                {
                    toggleSubmit ? <button type="submit" className="fa-solid fa-plus add-btn" title='Add Tasks'></button> :
                        <button type="submit" className="fa-solid fa-pen-to-square edit-btn" title='Update Tasks'></button>
                }
            </form>
        </div>
    );
}

export default AddItemForm;

import React from 'react';

const GameFilters = ({ onFilterChange }) => {
    return (
        <div>
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">Tutte le piattaforme</option>
                <option value="Steam">Steam</option>
                <option value="Xbox">Xbox</option>
                <option value="PlayStation">PlayStation</option>
            </select>
        </div>
    );
};

export default GameFilters;


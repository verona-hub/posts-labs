import React, { useContext } from 'react';
// Context
import { MyStateManagement } from '../Context/MyStateManagement';

const Search = () => {

    // Import state from Context
    const { setSearch } = useContext(MyStateManagement);

    const onInputChange = e => {
        setSearch(e.target.value);
    };

    return (
        <div className="Search">
            <input
                type='text'
                placeholder='Search posts...'
                onChange={onInputChange}
            />
        </div>
    );
};


export default Search;

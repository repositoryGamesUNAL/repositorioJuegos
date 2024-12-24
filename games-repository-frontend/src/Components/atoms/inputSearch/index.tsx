import React, { useState } from 'react';
import Styles from './inputSearch.module.scss';
import { SearchInputProps } from './inputSearch.type';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput: React.FC<SearchInputProps> = ({ className = '', placeholder = 'Buscar...', onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showIcon, setShow] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setShow(event.target.value.length === 0); // Ocultar el ícono al escribir
    };

    const handleSearch = () => {
        setShow(false); // Oculatar el ícono de búsqueda al hacer clic o presionar Enter
        if (onSearch) {
            onSearch(searchTerm);
        } else {
            console.log('Buscando:', searchTerm);
        }
    };

    return (
        <div className={Styles.searchcontainer}>
            <input
                type="text"
                className={Styles.searchInput}
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleInputChange}
            />
            {showIcon ? (
                <button className={Styles.searchButton} onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            ) : null}
        </div>
    );
};

export default SearchInput;



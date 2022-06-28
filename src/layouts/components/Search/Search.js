import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SearchProductItem from '~/components/SearchProductItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
import './Search.scss';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleClear = (e) => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHide = (e) => {
        setShowResult(false);
    };

    const debounceValue = useDebounce(searchValue, 700);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchService.search(debounceValue);
            setSearchResult(result);
        };
        fetchApi();
    }, [debounceValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference
        // element solves this by creating a new parentNode context.
        <div className="wrapper-search">
            <Tippy
                onClickOutside={handleHide}
                interactive
                visible={showResult && searchResult.length > 0}
                placement="bottom"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchResult.map((result) => (
                                <SearchProductItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <form className="header-search">
                    <input
                        ref={inputRef}
                        type="text"
                        className="input-search"
                        placeholder="Tìm sản phẩm"
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && <FontAwesomeIcon className="icon" icon={faCircleXmark} onClick={handleClear} />}
                    <button type="submit" className="btn-search" onClick={(e) => e.preventDefault()} />
                </form>
            </Tippy>
        </div>
    );
}

export default Search;

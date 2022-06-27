import { useState, useEffect, useRef } from 'react';
import className from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SearchProductItem from '~/components/SearchProductItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = className.bind(styles);

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
        <div>
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
                <form className={cx('header-search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        className={cx('input-search')}
                        placeholder="Tìm sản phẩm"
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} onClick={handleClear} />
                    )}
                    <button type="submit" className={cx('btn-search')} onClick={(e) => e.preventDefault()} />
                </form>
            </Tippy>
        </div>
    );
}

export default Search;

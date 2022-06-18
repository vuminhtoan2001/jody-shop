import { useState, useEffect, useRef } from 'react';
import className from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import SearchProductItem from '~/components/SearchProductItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

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

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(`https://yody.vn/search?type=product&view=json&q=${encodeURIComponent(searchValue)}`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.results);
            });
    }, [searchValue]);
    return (
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
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} onClick={handleClear} />}
                <button type="submit" className={cx('btn-search')} />
            </form>
        </Tippy>
    );
}

export default Search;

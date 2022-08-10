import './TabLink.scss';
function TabLink({ listTab, setTypeLink, currentTab }) {
    return (
        <div className="title-desktop">
            <ul className="tab-list">
                {listTab.map((tab) => (
                    <li
                        key={tab.name}
                        className={`tab-link ${currentTab === tab.url ? 'current' : ''}`}
                        onClick={() => setTypeLink(tab.url)}
                    >
                        {tab.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TabLink;

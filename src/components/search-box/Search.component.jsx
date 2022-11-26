import "./Search.styles.css";

const Search = ({className, ph, onSearch}) => (
    <div>
        <input className={className} type='search' placeholder={ph} onChange={onSearch}/>
    </div>
);

export default Search;
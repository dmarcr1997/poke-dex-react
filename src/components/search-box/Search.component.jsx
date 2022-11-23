// @flow
import { Component } from 'react';
import "./Search.styles.css";

class Search extends Component{
    render() {
        return (
        <div>
            <input className={this.props.className} type='search' placeholder={this.props.ph} onChange={this.props.onSearch}/>
        </div>
        );
    };
};

export default Search;
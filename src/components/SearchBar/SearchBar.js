import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        }
    }

    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        });
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        }
    }
    

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)}
                       key={sortByOptionValue}     
                       onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                        {sortByOption}
                        </li>);
        });
    }

    /*Double bind: This will allow us to both bind to the current value of 
    this (as we usually do in the constructor()) but also bind 
    the current sortByOptionValue as the first argument to the method call, 
    ensuring the method is called with the appropriate value when clicked. */

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;
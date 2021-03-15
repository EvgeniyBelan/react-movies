import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            type: 'all',
        };

        this.handleKey = this.handleKey.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleKey(event) {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter(event) {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    }

    render() {
        return (
            <form action="#">
                <div className="row">
                    <div className="col s12">
                        <input
                            className="validate"
                            placeholder="search"
                            type="search"
                            id="email_inline"
                            value={this.state.search}
                            onChange={(event) =>
                                this.setState({ search: event.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn"
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            Search
                        </button>
                    </div>
                    <div className="radio-box">
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </form>
        );
    }
}

export { Search };

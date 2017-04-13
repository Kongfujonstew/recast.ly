class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      searchVal: 'no searchVal'

    };

  }

  handleSearchInputChange(e) {
    this.setState({
      searchVal: e.target.value
    });
  }

  searchYouTube8(searchTerm) {
    this.props.searchYT(searchTerm);
  }

  handleClick(searchTerm) {
    this.searchYouTube8(this.state.searchVal);
  }


  render () {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text"
        onChange={this.handleSearchInputChange.bind(this)}

      />
      <button className="target"
        onClick={this.handleClick.bind(this)}

      >
      </button>
    </div> 
    );
  }
}


window.Search = Search;

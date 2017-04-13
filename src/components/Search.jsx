class Search extends React.Component {
  constructor () {
    super();

  }

  render () {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="target">
      </button>
    </div> 
    );
  }
}


window.Search = Search;

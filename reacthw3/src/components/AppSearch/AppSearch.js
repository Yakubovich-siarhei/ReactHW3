import React from 'react';
// import TodoList from '../TodoList/TodoList'

class AppSearch extends React.Component {

	render() {

  const { onFilterItemActive, onAllItem, onFilterItemDone } = this.props;
    return   (
    <div className="search">
        <input type="text" className="searchInput" id="searchInput" placeholder="search" />
        <div className="searchButton">
          <button onClick={onAllItem}>All</button>
          <button onClick={onFilterItemActive}>Active</button>
          <button onClick={onFilterItemDone}>Done</button>
        </div>      
    </div>
    
    );
}
}

export default AppSearch;

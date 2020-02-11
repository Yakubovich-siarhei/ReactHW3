import React from 'react';

const AppTitle = ({tD, done}) => {
    return (
      <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>{tD} more to do, {done} done</h2>
      </div>
    );
  };
  
  export default AppTitle;

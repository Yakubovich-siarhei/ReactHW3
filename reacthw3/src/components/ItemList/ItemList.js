import React from 'react';

import './itemList.css';

// import  FontAwesome from '@fortawesome/react-fontawesome'
// import faExclamation  from '@fortawesome/free-solid-svg-icons'

class ItemList extends React.Component {
	render() {
		const { items, done, important, onDelete, onToggle, onImportants } = this.props;

		const style = {
			color: important ? 'rgb(11, 158, 30)' : 'black',
			fontWeight: important ? 700 : 400
		};

		let classNames = 'listItem';

		if (important) {
			classNames += ' important';
		}

		if (done) {
			classNames += ' done';
		}

		return (
			<span className={classNames}>
				<span className='itemLabel' style={style} onClick={onToggle} >
					{items}
				</span>

				<button type='button' className='btn btn-outline-danger btn-sm float-right' 
					onClick={onDelete} >
					del
				</button>				
				<button type='button' className='btn btn-outline-success btn-sm float-right'
					onClick={onImportants}>
					!{/* <i className='fa fa-exclamation' /> */}
				</button>
			</span>
		);
	}
}

export default ItemList;
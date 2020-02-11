import React, { Component } from 'react';

class AddForm extends Component {
	state = {
		items: 'create new list'
	};

	onChange = (e) => {
		const value = e.target.value;
		this.setState({ items: value });
	};

	render() {
		const { onAdd } = this.props;
		const { items } = this.state;
		return (
			<form
				className='d-flex mt-1'
				onSubmit={(e) => {
					e.preventDefault();
					onAdd(items);
					this.setState({ items: '' });
				}}
			>
				<input className='form-control' onChange={this.onChange} value={items} />
				<button className='btn btn-outline-secondary'>Add</button>
			</form>
		);
	}
}

export default AddForm;

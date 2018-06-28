import React, { Component } from 'react'



class FormExampleForm extends Component {
	handleRegisterClick = (e) => {
		this.props.history.push('/map');
	}

	render() {
		return (
			<div class="body">
				<div class="form-wrap">
					<form>
						<h1>Sign Up</h1>
						<input type="text" placeholder="First Name" />
						<input type="text" placeholder="Last Name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<input type="password" placeholder="Confirm Password" />
						<input id="button" type="button" value="Sign Up" onClick={this.handleRegisterClick} />
					</form>
				</div>
			</div>

		)
	}
}

export default FormExampleForm
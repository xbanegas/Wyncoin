import React, { Component } from 'react'
import '../css/login.css';



class FormExampleForm extends Component {
	handleRegisterClick = (e) => {
		this.props.history.push('/map');
	}

	render() {
		return (
			<div class="body">
				<div class="form-wrap">
					<form>
						<h1>Log In</h1>
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<input id="button" type="button" value="Log In" onClick={this.handleRegisterClick} />
					</form>
				</div>
			</div>

		)
	}
}

export default FormExampleForm
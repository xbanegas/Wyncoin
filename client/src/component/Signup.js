import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class FormExampleForm extends Component {
	handleRegisterClick = (e) => {
			this.props.history.push('/map');
	}

	render(){
		return(
			<Form>
				<Form.Field>
					<label>Email</label>
					<input placeholder='Email' />
				</Form.Field>
				<Form.Field>
					<label>Username</label>
					<input placeholder='Username (optional)' />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder='Password' />
				</Form.Field>
				<Form.Field>
					<label>First Name</label>
					<input placeholder='First Name' />
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input placeholder='Last Name' />
				</Form.Field>
				<Form.Field>
					<Checkbox label='I agree to the Terms and Conditions' />
				</Form.Field>
				<Button type='submit' onClick={this.handleRegisterClick}>Submit</Button>
			</Form>
		)
	}
}

export default FormExampleForm
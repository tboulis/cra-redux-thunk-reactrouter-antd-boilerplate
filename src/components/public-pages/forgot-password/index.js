import React, { Component } from 'react';
import { Button, Divider, Form, Icon, Input, Row } from 'antd';

class ForgotPasswordForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			submitted: false,
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			loading: true
		})
		this.props.form.validateFields( async (err, values) => {
			if (!err) {
				console.log(values);
			}
		})
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div>
				<div
					style={{
						position: 'fixed',
						left: 15,
						top: 15,
						zIndex: 2,
					}}
				>
					<Icon
						onClick={() => this.props.history.push('/login')}
						style={{
							color: 'white',
							fontSize: 24,
							lineHeight: '24px',
						}}
						type='arrow-left'
					/>
					<Divider type='vertical' style={{ height: '24px', top: '-0.26em' }} />
					<span style={{ fontSize: 20, color: 'white', lineHeight: '24px'}}> Πίσω</span>
				</div>
				<div className='limiter'>
					<div className='container-login'>
						<Row>
							<Row>
								<div
									style={{
										color: 'white',
										fontSize: 20,
										margin: 'auto auto 30px 40px',
										textAlign: 'left'
									}}
								>
									Βάλτε τη διεύθυνση e-mail σας:
								</div>
							</Row>
							{ this.state.submitted ?
								<div>
									<Icon type='check' />
									<p>Αν η διεύθυνση e-mail που βάλατε είναι σωστή, θα σας έρθει ένα e-mail με έναν σύνδεσμο προκειμένου να επαναφέρετε τον κωδικό σας.</p>
								</div> :
								<Form
									onSubmit={this.handleSubmit}
									layout='inline'
								>
									<Form.Item>
										{getFieldDecorator('email', {
											rules: [{
												type: 'email', message: 'Βάλτε μία έγκυρη διεύθυνση e-mail!'
											},{
												required: true, message: 'Παρακαλώ βάλτε μία διεύθυνση e-mail!'
											}]
										})(
											<Input autoFocus prefix={<Icon type='user'/>} placeholder='e-mail' style={{ height: 40 }}/>
										)}
									</Form.Item>
									<Form.Item>
										<Button
											htmlType='submit'
											icon={this.state.loading ? 'loading' : 'arrow-right'}
											shape='circle'
											size='large'
											style={{
												fontSize: 24,
												background: '#333'
											}}
											type='primary'
										/>
									</Form.Item>
								</Form>
							}
						</Row>
					</div>
				</div>
			</div>
		)
	}
}

const ForgotPassword = Form.create({ name: 'forgot-password' })(ForgotPasswordForm);

export default ForgotPassword;
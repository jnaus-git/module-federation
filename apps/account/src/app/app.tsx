// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Account } from '@module-federation/shared-data';
import { useState } from 'react';
import NxWelcome from './nx-welcome';
//import styles from './app.module.scss';
import './app.module.scss'

export function App() {
	const [name, setName] = useState<string>(Account.name);

	const onNameChange = (e: { target: { value: string; }; }) => {
		setName(() => {
			Account.name = e.target.value;
			return Account.name
		});
	};

	return (
		<>
			<div className='container'>
				<div>Shared Data: {name}</div>
				<input className='inputText' type="text" placeholder='Name' value={name} onChange={onNameChange} />
				<NxWelcome title="account" />
			</div>
			<div></div>
		</>
	);
}

export default App;

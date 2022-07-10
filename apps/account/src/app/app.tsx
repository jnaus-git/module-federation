// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Account } from '@module-federation/shared-data';
import { useEffect, useState } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
	const [name, setName] = useState<string>(Account.name);

	//useEffect(() => {
	//	setName(() => {
	//		Account.name = 'Jimmy'
	//		return Account.name
	//	});
	//}, [])

	const onNameChange = (e: { target: { value: string; }; }) => {
		setName(() => {
			Account.name = e.target.value;
			return Account.name
		});
	};

	return (
		<>
			<div>{name}</div>
			<input type="text" value={name} onChange={onNameChange} />
			<NxWelcome title="account" />
		</>
	);
}

export default App;

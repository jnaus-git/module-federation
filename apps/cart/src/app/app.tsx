// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Account } from '@module-federation/shared-data';
import { useState } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
	const [name] = useState<string>(Account.name);

	return (
		<>
			<div> {name} </div>
			<NxWelcome title="cart" />
		</>
	);
}

export default App;

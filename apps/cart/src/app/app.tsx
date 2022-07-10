import { Account } from '@module-federation/shared-data';
import { useState } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
	const [name] = useState<string>(Account.name);

	return (
		<>
			<div className='container'>
				<div> Shared Data: {name} </div>
				<NxWelcome title="cart" />
			</div>
			<div></div>
		</>
	);
}

export default App;

import React from 'react';
import { useEffect } from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes, useSearchParams, useNavigate } from 'react-router-dom';

const Account = React.lazy(() => import('account/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const Shop = React.lazy(() => import('shop/Module'));


export function App() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	console.log('--- Params: ' + searchParams);

	const path = searchParams.get('path');
	console.log('--- path = ' + path);


	useEffect(() => {
		console.log(searchParams);

		if (path) {
			//navigate('shop');
			navigate(path);
		}

	}, [path, searchParams, navigate])


	return (
		<React.Suspense fallback={null}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/account">Account</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
			<Routes>
				<Route path="/" element={<NxWelcome title="shell" />} />
				<Route path="/account" element={<Account />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</React.Suspense>
	);
}

export default App;

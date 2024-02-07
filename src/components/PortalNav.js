'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children }) {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => setMounted(true), []);

	return mounted
		? createPortal(
				<>
					<h1>123 from portal</h1>
				</>,
				document.body
		  )
		: null;
}

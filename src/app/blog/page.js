import Link from 'next/link';
import React from 'react';

const Blog = () => {
	return (
		<div>
			Blog Page with 2 links right now
			<Link href={'/blog/post-1'}>Post 1</Link>
			<Link href='/blog/post-2'>Post 2</Link>
		</div>
	);
};

export default Blog;

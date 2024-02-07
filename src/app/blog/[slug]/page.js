import React from 'react';

// params are passed to all components from next
// slug is used to access whats the url for particular dynamic page
const BlogPage = ({ params }) => {
	return <div>BlogPage for {params.slug}</div>;
};

export default BlogPage;

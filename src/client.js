import sanityClient from '@sanity/client';

export default sanityClient({
	projectId:'3ur8jueq',
	dataset:'production',
	apiVersion:'2021-03-25',
	useCdn: false,
})
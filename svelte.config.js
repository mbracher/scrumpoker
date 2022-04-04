// import firebase from 'svelte-adapter-firebase';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
	],


	kit: {
		// adapter: firebase({
		// 	firebaseJsonPath: './firebase.json'
		// }),
		
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),


		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},
		
		trailingSlash: 'always'
	}
	
};

export default config;

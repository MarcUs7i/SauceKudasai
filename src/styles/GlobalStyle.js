/** @format */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		/* Colors */
		--lavender: #484870;
		--lavenderlight: #1a1a2e;
		--lightblue: #738aff;
		--link: #738aff;
		--nav: #1a1a2a;
		--cardbg: #121212;
		--Styledlinks: #738aff;
		--text-color: #e0e0e0;
		--container-bg: #1f1f2c;
		--drop-container-bg: #1a1a2e;
		--search-container-bg: #1a1a2a;

		--border: 1.5px solid #2a2a3a;
		--radius: 0.9rem;
		--card-radius: 15px 15px 0px 0px;
		--box-shadow: 0px 5px 29px -4px rgba(0, 0, 0, 0.5), inset 0px 1px 5px rgba(0, 0, 0, 0.5);

		/* Font Weights */
		--regular: 400;
		--semi-medium: 500;
		--medium: 600;
		--semi-bold: 700;
		--bold: 800;
	}

	html,
	body {
		position: relative;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow: hidden;
		max-height: 100vh;
		width: 100%;
		color: var(--text-color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Inter', sans-serif;
		background: linear-gradient(116.2deg, #121420 -0.48%, #1e1a2c 102.36%);
		text-size-adjust: none;
		-webkit-text-size-adjust: none;
		-moz-text-size-adjust: none;
		-ms-text-size-adjust: none;
	}

	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	video {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	button {
		border: none;
		cursor: pointer;
		outline: none;
		display: inline;
		color: var(--text-color);
		background-color: var(--lavender);
	}
	div,
	p {
		outline: none;
		color: var(--text-color);
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	ul {
		list-style: none;
		display: inline-block;
	}
	li {
		list-style: none;
		display: inline-block;
	}

	/* Override styles for specific components */
	.Container {
		background: var(--container-bg);
		box-shadow: var(--box-shadow);
	}
	
	.Dropcontainer {
		background: var(--drop-container-bg);
	}
	
	.Search, .Button, .Url {
		background: var(--lavender);
		color: var(--text-color);
	}
	
	.Navbar {
		background: var(--nav);
	}
	
	.Title {
		color: var(--text-color);
	}
	
	.Footer {
		color: var(--text-color);
	}
`;

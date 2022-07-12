<template>

	<main class="class">
		<theme-button />
		<section class="heading">
			<h1>Grade Calculator</h1>
			<h2 class="welcome">
				Hi there, <input type="text" id="name" placeholder="friend..." v-model="user_name">
			</h2>
		</section>
		<section class="result">
			<h2 v-if="avg >= 70"> 1st Class!</h2>
			<h2 v-else-if="avg >= 60"> 2nd Class (2:1)</h2>
			<h2 v-else-if="avg >= 50"> 2nd Class (2:2)</h2>
			<h2 v-else-if="avg >= 40"> 3rd Class</h2>
			<h2 v-else-if="avg >= 1"> Fail</h2>
			<h4 v-else>Add your grades below...</h4>

		</section>

		<section class="grade-list">
			<h3>What are your grades so far?</h3>
			<h4>Overtype the grade (and/or title) for each module...</h4>
		</section>

		<section>
			<table class="grade-table">
				<tr>
					<th>Module</th>
					<th>Grade</th>
				</tr>
				<tr v-for="(result, index) in results" :class="[`index--${index}`]" v-bind:key="index">
					<td><input class="mod-entry" v-model="result.modName"></td>
					<td><input class="grade-entry modGrade" v-model.number="result.modGrade"></td>
				</tr>
				<tr>
					<td>Average Grade</td>
					<td data-test="AvgGrade"> {{ avg }} %</td>
				</tr>
			</table>
		</section>

		<footer>
			<a href="https://github.com/tj2904/vue-grade-calculator" aria-label="Link to github"><i
					class="fa fa-github"></i></a>
		</footer>

	</main>

</template>

<script>
import ThemeButton from "@/components/ThemeButton.vue";

export default {

	components: { ThemeButton },
	data() {
		return {

			user_name: "",

			results: [
				{ modName: "Networks", modGrade: 0 },
				{ modName: "OOP", modGrade: 0 },
				{ modName: "Adv Programming", modGrade: 0 },
				{ modName: "Software Engineering", modGrade: 0 },
				{ modName: "Operating Systems", modGrade: 0 },
				{ modName: "Big Data & Databases", modGrade: 0 }
			],

		}
	},
	computed: {
		avg() {
			return Math.round(this.results.reduce((a, b) => a + b.modGrade, 0) / this.results.length);
		}
	},
	watch: {
		user_name(newName) { localStorage.setItem('user_name', newName) },
		results: {
			handler() {
				localStorage.setItem('results', JSON.stringify(this.results))
			},
			deep: true
		}
	},

	mounted() {
		if (localStorage.user_name) {
			this.user_name = localStorage.user_name;
		}
		if (localStorage.getItem("results")) {
			this.results = JSON.parse(localStorage.getItem("results"));
		}
	}
}

</script>

<style>
:root {
	--background: linear-gradient(-45deg, #c5e0dc, #dcedc2);
	--base-color: #556270;
	--main-background-color: rgba(238, 238, 238, 0.55);
	--table-border: 1px solid #fff;
	--h3-color: #313154;
	--h4-color: #1E4147;

	--result-bg-color: #FAE3B4;
	--result-border: #1e4147cc;
	--result-alt-row: rgb(240, 252, 245);
	--entry-color: #556270;

	/* for the theme switcher */
	--background-color-primary: #ebebeb;
	--background-color-secondary: #fafafa;
	--accent-color: #cacaca;
	--text-primary-color: #222;
	--element-size: 2.75rem;
}

:root.dark-theme {
	--background: linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%);
	--base-color: #949292;
	--main-background-color: rgba(41, 57, 75, 0.938);
	--table-border: 1px solid rgb(29, 41, 94);

	--h3-color: #949292;
	--h4-color: #5c797e;

	--result-bg-color: #363636;
	--result-border: #5c797e;
	--result-alt-row: #3f525f;
	--entry-color: #929294;

	/* for the theme switcher */
	--background-color-primary: #1e1e1e;
	--background-color-secondary: #2d2d30;
	--accent-color: #3f3f3f;
	--text-primary-color: #ddd;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'montserrat', sans-serif;
}

html {
	color: var(--base-color);
	background: var(--background);
	min-height: 100vh;
}

main {
	max-width: 500px;
	margin: 30px auto;
	padding: 20px;
	background-color: var(--main-background-color);
	border: var(--table-border);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}


input:not([type="radio"]):not([type="checkbox"]),
button {
	appearance: none;
	border: none;
	outline: none;
	cursor: initial;
	background: inherit;
}

section {
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding-left: 1.5rem;
	padding-right: 1.5em;
}

footer {
	text-align: center;
}

footer>a:visited,
footer>a:hover {
	color: rgb(22, 22, 22)
}

h1 {
	text-align: center;
	font-size: 2.5rem;
}

h2 {
	font-size: 2.5rem;
	margin: 0.5rem;
}

h3 {
	color: var(--h3-color);
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;
}

h4 {
	color: var(--h4-color);
	font-size: 0.875rem;
	font-weight: 700;
}

table {
	width: 100%;
	border-collapse: collapse;
	border: 1px solid black;
	text-align: center;
}

th,
td {
	border: 1px solid black;
	padding: 0.5rem;
	border-collapse: collapse;
}

/* alternate row striping */
tr:nth-child(even) {
	background-color: var(--result-alt-row);
}

tr:last-child {
	text-align: center;
	font-weight: 700;
	color: var(--h3-color)
}

.grade-entry {
	text-align: center;
	color: var(--base-color);
}

.mod-entry {
	color: var(--base-color);
}

.heading .welcome {
	display: flex;
}

.heading .welcome input {
	margin-left: 0.5rem;
	flex: 1 1 0%;
	min-width: 0;
}

.heading .welcome,
.heading .welcome input {
	color: #929294;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 2.5rem;
}

.result {
	text-align: center;
	padding: 0.25rem;
	margin: 0.25rem;
	line-height: 2rem;
	border: 2px solid var(--result-border);
	background-color: var(--result-bg-color);
	border-radius: 5px;
	max-width: 70%;
	margin: auto;
}

.grade-list .list {
	margin: 1rem 0;
}

.grade-list .todo-item {
	display: flex;
	align-items: center;
	background-color: #FFF;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
}


@media screen and (max-width:780px) {
	main {
		max-width: none;
		margin: 10px;
		padding: 0px;
		background: var(--background);
		border: 0px;
		box-shadow: none;
		min-height: 100vh;
	}

	.grade-table, .grade-entry {
		padding: 0px;
		margin: auto;
		border-collapse: collapse;
		border: 1px solid red;
		text-align: center;
	}
}

</style>

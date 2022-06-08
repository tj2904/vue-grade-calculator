<template>

	<main class="class">

		<section class="heading">
			<h1>Grade Calculator</h1>
			<!-- <h2 class="welcome">
				Hi there, <input type="text" id="name" placeholder="<Name here>" v-model="user_name">
			</h2> -->
		</section>
		<section class="result">
			<h2 v-if="averageGrade >= 70"> 1st Class!</h2>
			<h2 v-else-if="averageGrade >= 60"> 2nd Class (2:1)</h2>
			<h2 v-else-if="averageGrade >= 50"> 2nd Class (2:2)</h2>
			<h2 v-else-if="averageGrade >= 40"> 3rd Class</h2>
			<div v-else-if="averageGrade <= 39">
				<h2>Fail</h2>
				<h4>Not enough Credits yet</h4>
			</div>
		</section>

		<section class="grade-list">
			<h3>What are your grades so far?</h3>
			<h4>Overtype the name and grade for each module</h4>
			<div class="list" id="grade-list">
				<div class="grade-content">
					<form id="add-grade" @submit.prevent="addGrade">
						<table class="table">

							<tr>
								<th>Module</th>
								<th>Grade</th>
							</tr>
							<tr>
								<td> <input type="text" name="module_name" id="mod1_input_name" placeholder="ADP"
										v-model="mod1_input_name" /></td>
								<td> <input class="grade-entry
							" type="text" name="module_grade" id="mod1_input_grade" placeholder="0" v-model.number="mod1_input_grade" />
								</td>
							</tr>

							<tr>
								<td> <input type="text" name="module_name" id="mod2_input_name"
										v-model="mod2_input_name" /></td>
								<td> <input class="grade-entry
							" type="text" name="module_grade" id="mod2_input_grade" v-model.number="mod2_input_grade" /></td>
							</tr>
							<tr>
								<td> <input type="text" name="module_name" id="mod3_input_name"
										v-model="mod3_input_name" />
								</td>
								<td> <input class="grade-entry
							" type="text" name="module_grade" id="mod3_input_grade" v-model.number="mod3_input_grade" /></td>
							</tr>
							<tr>
								<td> <input type="text" name="module_name" id="mod4_input_name"
										v-model="mod4_input_name" />
								</td>
								<td> <input class="grade-entry
							" type="text" name="module_grade" id="mod4_input_grade" v-model.number="mod4_input_grade" /></td>
							</tr>
							<tr>
								<td> <input type="text" name="module_name" id="mod5_input_name"
										v-model="mod5_input_name" />
								</td>
								<td> <input class="grade-entry
							" type="text" name="module_grade" id="mod5_input_grade" v-model.number="mod5_input_grade" /></td>
							</tr>
							<tr>
								<td> <input type="text" name="module_name" id="mod6_input_name"
										v-model="mod6_input_name" />
								</td>
								<td> <input class="grade-entry
							" type="text" name="module_grade" id="mod6_input_grade" v-model.number="mod6_input_grade" />
								</td>
							</tr>
							<tr>
								<td>Module Average:</td>
								<td> {{ avgGrade =
										Math.round((mod1_input_grade + mod2_input_grade +
											mod3_input_grade + mod4_input_grade +
											mod5_input_grade + mod6_input_grade) / 6)
								}}
								</td>
							</tr>
						</table>

					</form>
				</div>
			</div>
		</section>
		<footer>
			<a href="https://github.com/tj2904/vue-grade-calculator"><i class="fa fa-github"></i></a>
		</footer>
		<!-- <GradesInput v-model.number="avgGrade" />
<GradesInput v-model.number="avgGrade" />
<GradesInput v-model.number="avgGrade" />
<GradesInput v-model.number="avgGrade" />
<GradesInput v-model.number="avgGrade" />
<GradesInput v-model.number="avgGrade" /> -->

	</main>

</template>

<script>

export default {

	data() {
		return {
			mod1_input_name: "ADP",
			mod2_input_name: "OOP",
			mod3_input_name: "BDD",
			mod4_input_name: "SFE",
			mod5_input_name: "NET",
			mod6_input_name: "OSY",
			mod1_input_grade: 0,
			mod2_input_grade: 0,
			mod3_input_grade: 0,
			mod4_input_grade: 0,
			mod5_input_grade: 0,
			mod6_input_grade: 0,
			avgGrade: 0,
			user_name: ""

		}
	},
	computed: {
		averageGrade: function () {
			return Math.round((this.mod1_input_grade + this.mod2_input_grade +
				this.mod3_input_grade + this.mod4_input_grade +
				this.mod5_input_grade + this.mod6_input_grade) / 6)
		}
	}
}


</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'montserrat', sans-serif;

}

main {
	max-width: 500px;
	margin: 30px auto;
	padding: 20px;
	background-color: rgba(238, 238, 238, 0.55);
	border: 1px solid #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

input:not([type="radio"]):not([type="checkbox"]),
button {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	cursor: initial;
}

body {
	color: #556270;
	background-image: linear-gradient(-45deg, #c5e0dc, #dcedc2);
	min-height: 96vh;
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

h1 {
	text-align: center;
	font-size: 2.5rem;
}

h2 {
	font-size: 2.5rem;
	margin: 0.5rem;
}

h3 {
	color: #313154;
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;
}

h4 {
	color: #888;
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
	background-color: #FFF;
}

tr:last-child {
	text-align: center;
	font-weight: 700;
}

.grade-entry {
	text-align: center;
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
	color: #313154;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 2.5rem;
}

.result {
	text-align: center;
	padding: 0.25rem;
	margin: 0.25rem;
	line-height: 2rem;
	border: 2px solid #999;
	background-color: rgb(226, 196, 63);
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
</style>
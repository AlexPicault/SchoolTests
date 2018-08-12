<template>
<div>
    <home></home>
		<ModalEndGame :correct="correct"></ModalEndGame>
		<modal></modal>
    <div class="container">
  <nav class="menu">
    <ul class="op">
      <li>
        <a class="btn" v-on:click="setOperation('multiplication')" :class="operation === 'multiplication' ? 'active' : ''">
          <span>x</span>
        </a>
      </li>
      <li>
        <a class="btn" v-on:click="setOperation('addition')" :class="operation === 'addition' ? 'active' : ''">
          <span>+</span>
        </a>
      </li>
      <li>
        <a class="btn" v-on:click="setOperation('soustraction')" :class="operation === 'soustraction' ? 'active' : ''">
          <span>-</span>
        </a>
      </li>
      <li>
        <a class="btn" v-on:click="setOperation('mix')" :class="operation === 'mix' ? 'active' : ''">
          <span>?</span>
        </a>
      </li>
    </ul>
    <ul class="level">
      <li>
        <a class="btn" v-on:click="setOperation('1')" :class="level === '1' ? 'active' : ''">
          <span>1</span>
        </a>
      </li>
      <li>
        <a class="btn" v-on:click="setOperation('2')" :class="level === '2' ? 'active' : ''">
          <span>2</span>
        </a>
      </li>
      <li>
        <a class="btn" v-on:click="setOperation('3')" :class="level === '3' ? 'active' : ''">
          <span>3</span>
        </a>
      </li>
    </ul>
  </nav>
  <div class="operation">
		<div class="new-game">
    	<span class="btn" v-on:click="reSetGrid()">Nouvelle Partie</span>
    </div>
		<div class="text">{{currentOp.digit1}} {{currentOp.opChar}} {{currentOp.digit2}}</div>
    <div class="score">
      <span class="ok">{{correct}}</span> /
      <span class="ko">{{wrong}}</span>
    </div>
    <ul class="steps">
      <li class="step" v-for="(step) in steps" :class="step">
      </li>
    </ul>
  </div>
  <div class="numbers">
    <table appGoWild>
      <tbody>
        <tr v-for="(row) in grid" class="odd">
          <td v-for="(field) in row" class="field">
            <a class="btn" v-on:click="setAnswer(field)" :class="[field.color, field.help]">
              <span>{{field.value}}</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</template>
<script>
import { calculette } from "../mixins/calculette.js";

export default {
    data(){
        return{
            currentOp: {},
            wrong: 0,
            wrongTry: 0,
            correct: 0,
            try:0,
            steps:[],
            operation:"multiplication",
            level:2,
            grid:[],
            answer:0,
        }
		},
		mixins : [calculette],
			mounted() {
	   		this.steps = this.setSteps();
    		this.grid = this.setGrid();
				this.currentOp = this.getOp(this.operation, this.level);
	},
	
		methods : {

			reSetGrid(){
				this.steps = this.setSteps();
    		this.grid = this.setGrid();
				this.currentOp = this.getOp(this.operation, this.level);
				this.wrong = 0;
				this.correct = 0;
      	this.steps = this.setSteps();
			},
	
  //set answer parameters (squareColor, step, try)
  setAnswer(answer) {
			this.$modal.show('end-game');		
    this.answer = answer.value;
    if (this.answer === this.currentOp.result) {
      this.setSquareColor(answer, true);
      this.correct++;
      this.steps[this.try] = "ok";
      this.grid = this.setGrid();
      this.currentOp = this.getOp(this.operation, this.level);
      this.reSetSteps("ok");
    } else {
      this.wrongTry++
      this.wrong++;
      this.setSquareColor(answer, false);
      if (this.wrongTry === 2) {
        this.helpme();
        this.wrongTry = 0;
      }
      this.steps[this.try] = "ko";
      this.reSetSteps("ko");
    }
  },

  //reset step bar
  reSetSteps(status) {
    this.try++;
    if (this.try === 21) {
			this.$modal.show('end-game');
			this.reSetGrid();
			this.try = 0;
    }
  },

  //set square color if wrong or correct answer 
  setSquareColor(answer, answerStatus) {
    if (answer.value < 10) {
      this.grid[0][answer.value].color = (answerStatus) ? "ok" : "ko"
    } else {
      var digits = answer.value.toString().split('');
      this.grid[digits[0]][digits[1]].color = (answerStatus) ? "ok" : "ko";
    }
  },

  //change color of square into grey to help when 2 consecutives wrong
  helpme() {
    for (var i = 0; i < 100; i++) {
      switch (this.currentOp.op) {
        case 'multiplication':
          if (i % this.currentOp.digit1 != 0) {
            this.setHelpSquares(i);
          }
          break;

        case 'addition':
        case 'soustraction':
          if (i != this.currentOp.result && Math.random() > 0.7) {
            this.setHelpSquares(i);
          }
        default:
      }
    }
  },

  //change color of square into grey
  setHelpSquares(i) {
    if (i < 10) {
      this.grid[0][i].help = "wrong"
    } else {
      var digits = i.toString().split('');
      this.grid[digits[0]][digits[1]].help = "wrong";
    }
  },

  //set new operation and clear grid
  setOperation(param) {
    if (typeof param === 'number') {
      this.level = param
    } else {
      this.operation = param;
    }
    this.currentOp = this.getOp(this.operation, this.level);
    this.grid = this.setGrid();
  },

		}
}
</script>

<style scoped>
.container {
	height:100%;
	margin:0 auto;
	width:100vmin;
}

.menu {
	width:100%;
	height:5%;
}

.menu ul {
	margin:1% 0;
	display:inline-block;
	width:40%;
	list-style:none;
}

.menu .level {
	float:right;
}

.menu ul li {
	display:inline-block;
	border-radius:3px;
	width:20%;
	text-align:center;
	margin:0 1%;
}

.menu .btn {
	font-size:3vh;
}

.menu .btn:active, .menu .btn.active {
	background-color:#555;
	color:#FFF;
}

.operation {
	height:25%;
	width:100%;
	box-sizing:border-box;
	padding:4px;
	position:relative;
	display:table;
}

.operation .text {
	border-radius:1vmin;
	background-color:#DFF;
	display:table-cell;
	text-align:center;
	vertical-align:middle;
	font-size:18vh;
	-webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
}

.operation .text.addition, .operation .text.soustraction {
	font-size:13vh;
}
.operation .new-game{
	position:absolute;
	font-size:200%;
	top:10px;
	right:10px;
	cursor: pointer;
}
.operation .new-game:hover{
	background:  #55efc4;
}

.operation .score {
	position:absolute;
	font-size:300%;
	top:10px;
	left:10px;
}
.operation .steps {
	position:absolute;
	display:block;
	text-align:center;
	bottom:5%;
	left:0;
	margin:0 auto;
	padding:0;
	width:100%;
	padding-top:5%;
}
.operation .step {
	display:inline-block;
	margin:1%;
	border:1px solid #666;
	border-radius:1000px;
	width:2%;
	padding-top:2%;
	background-color:#FFF;
	list-style: none;
}

.numbers {
	box-sizing:border-box;
	padding:1%;
	height:70%;
}
.numbers table {
	text-align:center;
	width:100%;
	height:100%;
}
.numbers table td {
		cursor: pointer;
}

.btn {
	text-decoration:none;
	cursor: pointer;
	display:table;
	height:100%;
	width:100%;
	color:#333;
	background-color:#DFF;
	box-sizing: border-box;
	border-radius:3px;
	box-shadow: 0 2px #888;
	-webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
}
.btn span {
	display:table-cell;
	vertical-align:middle;
	height:100%;
}
.btn:hover {
	background-color:#EEE;
}
.btn:active {
	background-color:#EEE;
	box-shadow: 0 2px #888;
  	transform: translateY(1px);
}
.numbers .btn {
	font-size:3vh;
}
.numbers .odd .btn, {
	background-color:#BDD;
}
.numbers table td .wrong {
	background-color:#888;
}
table .ok, .text.ok, .step.ok {
	background-color:#4F4 !important;
}
table .ko, .text.ko, .step.ko {
	background-color:#F44 !important;
}
.score {
	font-size:3em;
}
.score .ok {
	color:#4F4 !important;
}
.score .ko {
	color:#F44 !important;
}
</style>



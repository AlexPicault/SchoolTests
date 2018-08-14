<template>
<div>
    <home></home>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">Le Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Question from './Question.vue';
    import Answer from './Answer.vue';

    export default {
        data() {
            return {
                mode: 'app-question',
                wrong : "",
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-question';
                 this.wrong = "danger"
              }
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>


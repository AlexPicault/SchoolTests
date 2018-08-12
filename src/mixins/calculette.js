export const calculette = {
    data(){
        return {
            retOperation : {},
        }
    },
    
    methods:{
        setGrid(){
            var grid = [];
            for (var i = 0; i < 10; i++) {
              grid[i] = [];
              for (var j = grid[i].length; j < 10; j++) {
                grid[i].push({
                  value: i * 10 + j,
                  color: "",
                  help: "",
                });
              }
            }
            return grid;
          },
    
          setSteps() {
            var steps = [];
            for (var i = 0; i < 20; i++) {
              steps.push("");
            }
            return steps;
          },

        //get a new operation 
        getOp(opType, level) {
            var coefs = [0.25, 0.6, 1];
            var coef = coefs[level-1];
            var ops  = ['multiplication', 'addition', 'soustraction', 'mix'];
            switch(opType) {
                case 'multiplication' :
                this.retOperation.digit1 = Math.floor(coef * (level == 1 ? Math.random() * 10 : 3 + Math.random() * 7));
                this.retOperation.digit2 = Math.floor( 1 + Math.random() * 10 );
                this.retOperation.opChar = 'x';
                this.retOperation.result = this.retOperation.digit1 * this.retOperation.digit2;
                break;
                
                case 'addition' :
                this.retOperation.digit1 = Math.floor( Math.random() * 99 );
                this.retOperation.digit2 = Math.floor( 1 + Math.random() * (99 - this.retOperation.digit1) );
                this.retOperation.digit1 = Math.floor(this.retOperation.digit1 * coef);
                this.retOperation.digit2 = Math.floor(this.retOperation.digit2 * coef);
                this.retOperation.opChar = '+';
                this.retOperation.result = this.retOperation.digit1 + this.retOperation.digit2;
                break;
                
                case 'soustraction' :
                this.retOperation.digit1 = Math.floor( 10 + Math.random() * 90 );
                this.retOperation.digit2 = Math.floor( Math.random() * this.retOperation.digit1 );
                this.retOperation.digit1 = Math.floor(this.retOperation.digit1 * coef);
                this.retOperation.digit2 = Math.floor(this.retOperation.digit2 * coef);
                this.retOperation.opChar = '-';
                this.retOperation.result = this.retOperation.digit1 - this.retOperation.digit2;
                break;
                
                default :
                return this.getOp(ops[Math.floor(Math.random() * 3)], level);
            }
            this.retOperation.op = opType;
            
            return this.retOperation;
        }
    }
}
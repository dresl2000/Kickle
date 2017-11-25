export class SimpleAction {
    
    
        constructor(id : number, name: string, step: number, dice: string){
            this.Id = id;
            this.Name = name;
            this.Step = step;
            this.Dice = dice;
        }
        
        public readonly Id: number;
        public readonly Name: string;
        public readonly Dice: string;	

        private readonly Step: number;
                
        get TotalStep(): number {
            return this.Step;
        }	
        
        
    }
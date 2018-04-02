export class LegendPoints {
	
	public current: number;
	public total: number;
	public status : string;
			
	constructor(current: number, total: number, status: string ){
		this.current = current;
		this.total = total;
		this.status = status;
    };
    
}
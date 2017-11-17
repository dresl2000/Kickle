export class CircleAdvancement {


	constructor(nextCircle : number,minNumberOfTalents : number,minRank : number,oneTalentFromPrevRank : number ){
		this.NextCircle = nextCircle;
		this.MinNumberOfTalents = minNumberOfTalents;
		this.MinRank = minRank;
		this.OneTalentFromPrevRank = oneTalentFromPrevRank;
	}
	
	public readonly NextCircle: number;
	public readonly MinNumberOfTalents: number;
	public readonly MinRank: number;
	public readonly OneTalentFromPrevRank: number;
	
	
	
}
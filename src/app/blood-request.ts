export class BloodRequest {

    constructor(private requiredGroup:string, private reqDate: Date,
    private hospital:string, private unit: number){
        this.requiredGroup = requiredGroup;
        this.hospital = hospital;
        this.reqDate = reqDate;
        this.unit = unit;

    }
}


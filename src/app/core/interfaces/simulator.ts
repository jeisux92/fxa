export interface ISimulator {
    amountByPeriod: number;
    amountTotal: number;
    limit: number;
    numberDisbursement: number;
    percentage: number;
    quota: number;
}

export class Simulator implements ISimulator {
    amountByPeriod: number;
    amountTotal: number;
    limit: number;
    numberDisbursement: number;
    percentage: number;
    quota: number;
}


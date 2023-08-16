export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

export const data: Data = {
    report: [
        {
            id: "uuid1",
            source: "Fruit",
            amount: 10000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "YouTube",
            amount: 15000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
        {
            id: "uuid3",
            source: "Salary",
            amount: 50000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        }
    ]
}

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[]
}
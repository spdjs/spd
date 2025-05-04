export interface ISettlementType {
    id: number;
    name: string;
    created_at: Date;
}

export interface ISupplier {
    id: number;
    name: string;
    address: string;
    file_code: string;
    credit_code: string;
    contact_person: string;
    contact_number: string;
    settlement_type_id: number;
    created_at: Date;
    enabled: string;
}



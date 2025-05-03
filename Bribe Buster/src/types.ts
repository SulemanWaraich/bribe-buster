export type Department = 
| 'Traffic Police' 
| 'Electricity Department'
| 'Water & Sanitation'
| 'Tax Office' 
| 'Land Registry'
| 'Other';

export interface BribeReport {
department: Department;
amount: number;
location: string;
submitted: boolean;
reportId?: string;
timestamp?: Date;
}
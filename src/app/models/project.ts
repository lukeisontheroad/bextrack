import { Package } from './package';

export interface Project {
    id: number;
    nr: string;
    name: string;
    start_date: string;
    end_date?: any;
    comment: string;
    pr_state_id: number;
    pr_project_type_id: number;
    contact_id: number;
    contact_sub_id?: any;
    pr_invoice_type_id: number;
    pr_invoice_type_amount: string;
    pr_budget_type_id: number;
    pr_budget_type_amount: string;
    packages: Package[];

    // Calculated
    estimated_time_in_hours: number;
    spent_time_in_hours: number;
}
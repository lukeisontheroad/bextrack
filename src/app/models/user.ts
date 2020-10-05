export interface User {
    id: number;
    salutation_type: string;
    firstname: string;
    lastname: string;
    email: string;
    is_superadmin: boolean;
    is_accountant: boolean;
}
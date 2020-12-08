
export interface Contact {
    id: number;
    nr: string;
    contact_id?: number;
    contact_type_id: number;
    name_1: string;
    name_2?: string;
    salutation_id: number;
    salutation_form?: any;
    title_id?: any;
    birthday?: any;
    address: string;
    postcode: number;
    city: string;
    country_id: number;
    mail: string;
    mail_second: string;
    phone_fixed: string;
    phone_fixed_second: string;
    phone_mobile: string;
    fax: string;
    url: string;
    skype_name: string;
    remarks: string;
    language_id?: any;
    is_lead: boolean;
    contact_group_ids: string;
    contact_branch_ids?: any;
    user_id: number;
    owner_id: number;
    updated_at: string;
}
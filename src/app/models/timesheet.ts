import { Tracking } from './tracking';
import { User } from './user';
import { Project } from './project';

export interface Timesheet {
    id: number;
    user_id: number;
    user?: User;
    status_id: number;
    client_service_id: number;
    text: string;
    allowable_bill: boolean;
    charge?: any;
    contact_id: number;
    sub_contact_id?: any;
    pr_project_id?: any;
    project?: Project;
    pr_package_id?: any;
    package?: string;
    pr_milestone_id?: any;
    travel_time?: any;
    travel_charge?: any;
    travel_distance: number;
    estimated_time: string;
    date: string;
    duration: string;
    running: boolean;
    tracking: Tracking;
}
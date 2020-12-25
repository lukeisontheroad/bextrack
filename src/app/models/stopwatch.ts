import { DatePipe } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { Timesheet } from './timesheet';

export class Stopwatch {
    id: string;
    status_id: number;
    client_service_id: number;
    text: string;
    title: string;
    allowable_bill = false;
    contact_id: number;
    pr_project_id?: any;
    pr_package_id?: any;
    pr_milestone_id?: any;
    selectedProjectText: string;
    selectedPackageText: string;
    selectedClientServiceText:string;
    selectedStatusText:string;
    timerDisplay: string;
    strategy = 0;

    constructor(){
        this.id = uuidv4()
    }

    toTimesheet(user_id: number): Timesheet{
        console.log('this', this)
        let timesheet = new Timesheet()
        timesheet.user_id = user_id
        timesheet.status_id = this.status_id
        timesheet.client_service_id = this.client_service_id
        timesheet.text = this.text
        timesheet.allowable_bill = this.allowable_bill
        timesheet.contact_id = this.contact_id
        timesheet.pr_project_id = this.pr_project_id
        timesheet.pr_package_id = this.pr_package_id
        let duration = this.timerDisplay.substring(0, 5)
        timesheet.tracking = {
          "type": "duration",
          "date": new DatePipe('en-US').transform(new Date(), 'yyyy-MM-dd'),
          "duration": duration
        }
        return timesheet
    }
}
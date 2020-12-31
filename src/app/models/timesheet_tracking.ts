export class TimesheetTracking {
    type: 'duration' | 'range';

    // Duration
    date?: string;
    duration?: string;

    // Range
    start?: string;
    end?: string;

    constructor(){
        this.type = 'duration'
        let today = new Date()
        today.setSeconds(0, 0)
        this.start = today.toISOString()
        this.date = today.toISOString()    
    }
}
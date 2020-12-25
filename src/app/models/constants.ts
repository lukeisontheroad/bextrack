export const TYPES = {
    LAST_USED: '-1',
    NONE: '-2'
}

export const DEFAULTS = {
    STOPWATCHES: '[]',
    SERVICE_ID: TYPES.LAST_USED,
    STATUS_ID: TYPES.LAST_USED,
    PROJECT_ID: TYPES.NONE,
    NOTIFICATION_TIME: '17:00',
    NOTIFICATION_WEEKDAYS: {
        d0: false, // Sunday
        d1: true, // Monday
        d2: true, // Tuesday
        d3: true, // Wednesday
        d4: true, // Thursday
        d5: true, // Friday
        d6: false, // Saturday
    },
    MODULES: {
        dashboard: true,
        times: true,
        projects: true,
        stopwatches: true,
        contacts: true
    },
    STEPS: 15,
    DURATION: 1,
    HOURS_PER_DAY: 8,

    SHOW_FAVORITES: false,
    CURRENT_FILTER: '',
    FAVORITES: []
}

export const STORAGE = {
    STOPWATCHES: 'stopwatches',
    STOPWATCHES_FIELDS: ['startTime', 'savedTime', 'difference', 'paused', 'running', 'timerDisplay'],

    PROJECTS_SHOW_FAVORITES: 'projects_show_favorites',
    PROJECTS_CURRENT_FILTER: 'projects_current_filter',
    PROJECTS_FAVORITES: 'projects_favorites',

    SETTINGS_LAST_SERVICE: 'settings_last_service',
    SETTINGS_LAST_SERVICE_ID: 'settings_last_service_id',
    SETTINGS_LAST_STATUS: 'settings_last_status',
    SETTINGS_LAST_STATUS_ID: 'settings_last_status_id',
    SETTINGS_LAST_PROJECT: 'settings_last_project',
    SETTINGS_LAST_PROJECT_ID: 'settings_last_project_id',

    SETTINGS_STEPS: 'settings_steps',
    SETTINGS_HOURS_PER_DAY: 'settings_hours_per_day',
    SETTINGS_DURATION: 'settings_duration',
    SETTINGS_NOTIFICATIONS_TIME: 'settings_notifications_time',
    SETTINGS_NOTIFICATIONS_WEEKDAYS: 'settings_notifications_weekdays',
    SETTINGS_MODULES: 'settings_modules'
}
export const requests = {
    login: {
        url: 'users/user/',
        method: 'GET'
    },
    getListOfTechnics: {
        url: 'technics',
        method: 'GET'
    },
    getAllRunways: {
        url: 'runways',
        method: 'GET'
    },
    getAllTasks: {
        url: 'tasks',
        method: 'GET'
    },
    getTasksByUserId: {
        url:(patientId: number) => `tasks/units/${patientId}`,
        method: 'GET'
    },
    createNewTask: {
        url: 'tasks/task',
        method: 'POST'
    },
    updateRunwayUnit: {
        url: 'runways/units',
        method: 'PUT'
    },
}

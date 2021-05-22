export const requests = {
    login:{
        url:'users/user/',
        method: 'GET'
    },
    getPatient:{
        url:(patientId: number) => `patient/${patientId}`,
        method: 'GET'
    },
}

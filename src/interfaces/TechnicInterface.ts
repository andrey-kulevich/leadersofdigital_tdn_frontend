import {RunwayUnitInterface} from "./RunwayUnitInterface";

export interface TechnicInterface {
    id: number,
    name: string,
    type: {
        id: number,
        name: string,
        description: string
    }
    model: {
        id: number,
        name: string,
        power: number,
        maxFuelReserve: number,
        maxReagentReserve: number,
        reagentConsumption: number,
        fuelConsumption: number
    },
    currentFuelReserve: number,
    currentReagentReserve: number,
    status: {
        id: number,
        name: string,
        description: string
    },
    latitude: number,
    longitude: number,
    lastUpdate: string,
    runwayUnit: RunwayUnitInterface
}

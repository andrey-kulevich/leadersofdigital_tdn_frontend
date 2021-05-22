import {ServicePointInterface} from "./ServicePointInterface";

export interface RunwayUnitInterface {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    icing: number,
    snowLevel: number,
    servicePoints: ServicePointInterface,
}

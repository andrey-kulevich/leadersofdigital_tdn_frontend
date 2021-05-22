import {RunwayUnitInterface} from "./RunwayUnitInterface";
import {TechnicInterface} from "./TechnicInterface";

export interface TaskInterface {
    id: number,
    runwayUnit: RunwayUnitInterface,
    technic: TechnicInterface,
    isFinished: boolean
}

import { IOrbit } from "./orbit.interface";

export interface IMission {
    id: number;
    name: string;
    description: string;
    launch_designator?: any;
    type: string;
    orbit: IOrbit;
}
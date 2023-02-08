import { IConfiguration } from "./configuration.interface";

export interface IRocket {
    id: number;
    configuration: IConfiguration;
}
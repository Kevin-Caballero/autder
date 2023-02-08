import { ILaunchServiceProvider } from "./launc-service-provider.interface";
import { IMission } from "./mission.interface";
import { IPad } from "./pad.interface";
import { IRocket } from "./rocket.interface";
import { IStatus } from "./status.interface";

export interface ILaunch {
    id: string;
    url: string;
    slug: string;
    name: string;
    status: IStatus;
    last_updated: Date;
    net: Date;
    window_end: Date;
    window_start: Date;
    probability: number;
    holdreason: string;
    failreason: string;
    hashtag?: any;
    launch_service_provider: ILaunchServiceProvider;
    rocket: IRocket;
    mission: IMission;
    pad: IPad;
    webcast_live: boolean;
    image: string;
    infographic?: any;
    program: any[];
    orbital_launch_attempt_count: number;
    location_launch_attempt_count: number;
    pad_launch_attempt_count: number;
    agency_launch_attempt_count: number;
    orbital_launch_attempt_count_year: number;
    location_launch_attempt_count_year: number;
    pad_launch_attempt_count_year: number;
    agency_launch_attempt_count_year: number;
}


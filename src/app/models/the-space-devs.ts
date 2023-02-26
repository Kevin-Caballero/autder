export interface IUpdate {
    id: number;
    profile_image: string;
    comment: string;
    info_url: string;
    created_by: string;
    created_on: Date;
}

export interface IType {
    id: number;
    name: string;
}

export interface IStatus {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export interface ILaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
}

export interface IConfiguration {
    id: number;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
}

export interface IRocket {
    id: number;
    configuration: IConfiguration;
}

export interface IOrbit {
    id: number;
    name: string;
    abbrev: string;
}

export interface IMission {
    id: number;
    name: string;
    description: string;
    launch_designator: string;
    type: string;
    orbit: IOrbit;
}

export interface ILocation {
    id: number;
    url: string;
    name: string;
    country_code: string;
    map_image: string;
    total_launch_count: number;
    total_landing_count: number;
}

export interface IPad {
    id: number;
    url: string;
    agency_id: number;
    name: string;
    info_url: string;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: Location;
    map_image: string;
    total_launch_count: number;
    orbital_launch_attempt_count: number;
}

export interface IAgency {
    id: number;
    url: string;
    name: string;
    type: string;
}

export interface IMissionPatch {
    id: number;
    name: string;
    priority: number;
    image_url: string;
    agency: IAgency;
}

export interface IProgram {
    id: number;
    url: string;
    name: string;
    description: string;
    agencies: IAgency[];
    image_url: string;
    start_date: Date;
    end_date: Date;
    info_url: string;
    wiki_url: string;
    mission_patches: IMissionPatch[];
}

export interface ISpacestation {
    id: number;
    url: string;
    name: string;
    status: IStatus;
    orbit: string;
    image_url: string;
}

export interface IExpedition {
    id: number;
    url: string;
    name: string;
    start: Date;
    end: Date;
    spacestation: ISpacestation;
    mission_patches: IMissionPatch[];
}

export interface IEvent {
    id: number;
    url: string;
    slug: string;
    name: string;
    updates: IUpdate[];
    type: IType;
    description: string;
    webcast_live: boolean;
    location: string;
    news_url: string;
    video_url: string;
    feature_image: string;
    date: Date;
    launches: ILaunch[];
    expeditions: IExpedition[];
    spacestations: ISpacestation[];
    program: IProgram[];
}

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

export interface IResponse<T> {
    count: number;
    next: string;
    previus: string | null;
    results: T[];
}

export interface IAgencyDetail extends IAgency {
    featured: boolean;
    country_code: string;
    abbrev: string;
    description: string;
    administrator: string;
    founding_year: string;
    launchers: string;
    spacecraft: string;
    parent?: any;
    image_url: string;
    logo_url: string;
}

export interface IAstronaut {
    id: number;
    url: string;
    name: string;
    status: IStatus;
    type: IType;
    age: number;
    date_of_birth: string;
    date_of_death?: any;
    nationality: string;
    bio: string;
    twitter?: any;
    instagram?: any;
    wiki: string;
    agency: IAgencyDetail;
    profile_image: string;
    profile_image_thumbnail: string;
    flights_count: number;
    landings_count: number;
    last_flight: Date;
    first_flight: Date;
}

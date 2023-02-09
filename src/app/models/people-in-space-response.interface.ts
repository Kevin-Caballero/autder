import { IPeopleInSpacePerson } from "./people-in-space-person.interface";

export interface IResponsePeopleInSpace {
    message: string;
    people: IPeopleInSpacePerson[];
    number: number;
}
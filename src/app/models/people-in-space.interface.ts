
export interface IResponsePeopleInSpace {
    message: string;
    people: IPeopleInSpacePerson[];
    number: number;
}

export interface IPeopleInSpacePerson {
    name: string;
    craft: string;
}
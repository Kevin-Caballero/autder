export interface IResponse<T> {
    count: number;
    next: string;
    previus: string | null;
    results: T[];
}
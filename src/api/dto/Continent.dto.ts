/**
 * API Representation of [Continent] object
 */
export interface ContinentDto {
    id: number
    namefr: string;
    nameus: string;
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
}
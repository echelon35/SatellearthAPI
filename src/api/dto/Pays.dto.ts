/**
 * API Representation of [Pays] object
 */
export interface PaysDto {
    id: number
    namefr: string;
    nameus: string;
    trigramme: string;
    iso3166: string;
    population: number;
    superficie: number;
    geom: any;
    wikilink: string;
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
}
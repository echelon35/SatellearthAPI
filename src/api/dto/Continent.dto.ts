/**
 * API Representation of [Continent] object
 */
 export interface AleaDto {
    id: number
    name: string
    legend: string
    disponible: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
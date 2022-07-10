/**
 * Representation of [Source] object
 */
export interface SourceDto {
    id: number
    name: string
    adresse: string
    icone: Text
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }
/**
 * API Representation of [Count] object
 */
export interface CountDto {
    count: number
}

export const toCount = (nbCount: number): CountDto => {
    return {
        count: nbCount
    }
}
/**
 * API Representation of [Error] object
 */
export interface ErrorDto {
    title: string,
    type: string,
    content: string,
    status: number
}

export const toError404 = (Resource: string): ErrorDto => {
    return {
        type: "https://developer.mozilla.org/fr/docs/Web/HTTP/Status/404",
        title: `Not found`,
        content: `[${Resource}] Not found`,
        status: 404
    }
}

export const toError500 = (errorMessage: string): ErrorDto => {
    return {
        type: "https://developer.mozilla.org/fr/docs/Web/HTTP/Status/500",
        title: "Internal Server Error",
        content: `An error occured : ${errorMessage}`,
        status: 500
    }
}
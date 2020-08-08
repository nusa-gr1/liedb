/**
 * LieDB is a wonderful data storage solution for prototyping:
 * - it's server-free
 * - disk-free
 * - schema-free
 * As a consequence, it also has no data.
 */

export type LieDBAccessor<T> = (obj: T) => Promise<T>

export interface LieDBAPI {
    get: LieDBAccessor<any>,
    insert: LieDBAccessor<any>,
    delete: LieDBAccessor<any>,
    update: LieDBAccessor<any>,
}
    
export function lieDB(): LieDBAPI {
    return {
        get: (obj: any): Promise<any> => Promise.resolve(obj),
        insert: (obj: any): Promise<any> => Promise.resolve(obj),
        delete: (obj: any): Promise<any> => Promise.resolve(obj),
        update: (obj: any): Promise<any> => Promise.resolve(obj),
    };
}

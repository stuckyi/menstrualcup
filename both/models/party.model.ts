import { CollectionObject } from './collection-object.models';

export interface Party extends CollectionObject {
    name: string;
    description: string;
    location: string;
    owner?: string;
    public: boolean;
}
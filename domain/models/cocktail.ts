export type cocktailType = {
    id: number;
    name: string;
    description: string;
};

export type cocktailsType = cocktailType[];

export type cocktailNewType = {
    name: string;
    description: string;
};
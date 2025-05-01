type Permission = {
    id: string;
    title: string;
    description: string;
}

type AppUser = {
    name: string;
    age: number;
    permissions:Permission[]
}
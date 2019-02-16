export interface Client {

    // Defino los atributos que debe tener un cliente
    id: number;
    name: string;
    address?: string;
    city?: string;
    phone?: string;
    totalCards: number;
}
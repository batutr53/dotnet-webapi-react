export interface IProduct {
    id: number; 
    name: string;
    descriptin: string;
    price: number;
    isActive: boolean;
    imageUrl?: string;
    stock: number;
}
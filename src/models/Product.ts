import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IProduct{
    id: string,
    name: string,
    price: number,
    stock: number,
    updated: string,
}


const ProductSchema = new Schema ({
    name: {type: String},
    price: {type: Number},
    stock: {type: Number},
    updated: {type: Date}
})
export const ProductModel = mongoose.model('Products', ProductSchema);
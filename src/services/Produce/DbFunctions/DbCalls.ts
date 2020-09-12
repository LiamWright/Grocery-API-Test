import { json } from "body-parser"
import {Product} from '../../../interfaces/Product'

export const getAllProduceItems = async() =>
{
    const stubbedData:Product[] = [
        {
            name: 'Item1',
            price: 1,
            stock: 2,
            updated: Date.now().toString()
        }
    ]
    return JSON.stringify(stubbedData);
}
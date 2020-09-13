import * as mongoose from 'mongoose';
import { json } from "body-parser"
import {ProductModel, IProduct} from '../../models/Product'

export const getAllProduceItems = async(req, res) =>
{
    try {
        await ProductModel.find({},(err, result) =>
        {
            if(err) {
                res.send(err);
            }
            res.json(result);
        });
    }
    catch (ex) {
        return ex;
    }
}
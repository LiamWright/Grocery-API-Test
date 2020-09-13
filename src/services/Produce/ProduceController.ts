import {ProductModel} from '../../models/Product'

export const getAllProduceItems = async(req, res) =>
{
    try {
        await ProductModel.find({},(err, result) =>
        {
            if(err) {
                res.send(err);
            }
            res.json(result);
        }).sort({updated: -1});
    }
    catch (ex) {
        return ex;
    }
}
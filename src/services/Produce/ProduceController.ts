import {IProduct, ProductModel} from '../../models/Product'

export const getAllProduceItems = async(req, res) => {
    try {
        await ProductModel.find({},(err, result) => {
            if(err) {
                res.send(err);
                return;
            }
            res.json(result);
            return;
        }).sort({updated: -1});
    }
    catch (ex) {
        return ex;
    }
}
export const getProductByName = async(req, res) => {
    if(req?.params?.productName) {
        const productName = req.params.productName;

        try {
            await ProductModel.find({name: productName},(err, result) => {
                if(err) {
                    res.send(err);
                    return;
                }
                res.json(result);
                return;
            });
        }
        catch (ex) {
            return ex;
        }
    }
}
export const updatePriceForProduct = async(req, res) => {
    if(req?.params?.productName) {
        const productName = req.params.productName;

        try {
            await ProductModel.findOneAndUpdate({name: productName}, req.body, {new: true},(err, result) => {
                if(err) {
                    res.send(err);
                    return;
                }
                res.json(result);
                return;
            });
        }
        catch (ex) {
            return ex;
        }
    }
}
export const uploadNewProduceList = async(req, res) => {
    if(req.body) {
        
        try {
            const productArray = req.body;

            await ProductModel.deleteMany((err, result) => {
                if(err) {
                    res.send(err);
                }

            });
            //Validation TODO
            await ProductModel.insertMany(productArray,(err, result) => {
                if(err) {
                    res.send(err);
                }
                res.json(result);
                return;
            
            });
        }
        catch (ex) {
            return ex;
        }
    }
}
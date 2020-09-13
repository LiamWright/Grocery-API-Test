import { Request, Response } from "express";
import { getAllProduceItems, getProductByName } from "./ProduceController";

const address = "/api/v1"
export default [
  {
    //Get all
    path: address + "/produce",
    method: "get",
    handler: [
        async (req: Request, res: Response) => {
            const result = await getAllProduceItems(req, res);
            res.status(200).send(result);
        }

    ]

  },
  {
    //GetByName
    path: address + "/produce/:productName",
    method: "get",
    handler: [
        async (req: any, res: Response) => {
          
        const result = await getProductByName(req,res);
        res.status(200).send(result);
      
        res.status(400).send("Invalid or empty search term");
  

        }

    ]
  },
  /* {
    //Bulk Upload
    path: address + "/produce",
    method: "post",
    handler: [
        async (req: any, res: Response) => {
            //const result = await getAllProduceItems();
            res.status(200).send(result);

        }

    ]
  },
  {
    //Update Price
    path: address + "/produce/:productName",
    method: "put",
    handler: [
        async (req: any, res: Response) => {
            //const result = await getAllProduceItems();
            res.status(200).send(result);

        }

    ]
  } */
];
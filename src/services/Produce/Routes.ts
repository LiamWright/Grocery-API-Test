import { Request, Response } from "express";
import { getAllProduceItems } from "./ProduceController";

const address = "/api/v1"
export default [
  {
    //Get all
    path: address + "/produce",
    method: "get",
    handler: [
        async (req: any, res: Response) => {
            const result = await getAllProduceItems(req, res);
            res.status(200).send(result);
        }

    ]

  }/* ,
  {
    //GetByName
    path: address + "/produce/:productName",
    method: "get",
    handler: [
        async (req: any, res: Response) => {
            //const result = await getAllProduceItems();
            res.status(200).send(result);

        }

    ]
  },
  {
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
    method: "post",
    handler: [
        async (req: any, res: Response) => {
            //const result = await getAllProduceItems();
            res.status(200).send(result);

        }

    ]
  } */
];
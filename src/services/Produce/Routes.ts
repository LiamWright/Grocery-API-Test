import { Request, Response } from "express";
import { getAllProduceItems } from "./DbFunctions/DbCalls";

export default [
  {
    path: "/api/v1/produce",
    method: "get",
    handler: [
        async (req: any, res: Response) => {
        const result = await getAllProduceItems();
        res.status(200).send(result);
        }

    ]

  }
];
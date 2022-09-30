import { Request, Response } from "express";
import { omit } from "lodash";
import logger from "../utils/logger";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response
  ) {
    try {
     
      const user = await createUser(req.body);
      if(user.lenght!=0){
            
    }
      return res.send('user added successfulley');
    } catch (e: any) {
    //   logger.error(e);
      return res.status(409).send(e.message);
    }
  }
import { Get, Post, Res, Params, Body, Router } from "@reflet/express";
import { Response } from "express";

@Router("/locations")
export class LocationRouter {
  @Get()
  async all(@Res res: Response) {
    res.send([]);
  }
}

// src/candidate.controller.ts

import { Request, Response, NextFunction } from "express";

class CandidateController {
  public async getDomains(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<any> {
    // Implementation goes here
  }
}

export default CandidateController;

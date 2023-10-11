// src/candidate.controller.ts

import { Request, Response, NextFunction } from "express";

class CandidateController {
  public async function1(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<any> {
    // Function 1 implementation
  }

  public async function2(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<any> {
    // Function 2 implementation
  }

  // Add more public functions here if needed
}

export default CandidateController;

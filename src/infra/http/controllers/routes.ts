import { FastifyInstance } from "fastify";
import { designDescription } from "./design-description";

export async function routes(app: FastifyInstance){
  app.post('/ai/description', designDescription)
}
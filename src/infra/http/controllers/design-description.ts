import { FastifyReply, FastifyRequest } from "fastify";

export async function designDescription(request: FastifyRequest, reply: FastifyReply){
  return 'Hello world'
}
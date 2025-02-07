import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { openai } from "../../lib/openai";


export async function designDescription(request: FastifyRequest, reply: FastifyReply){
  const designDescriptionBodySchema = z.object({
    prompt: z.string(),
  })

  const { prompt } = designDescriptionBodySchema.parse(request.body)

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: "system",
        content: "You are designer and should offer a description analysis of the user prompt and the photo sent"
      },
      {
        role: "user",
        content: prompt
      }
    ]
  })

  return reply.status(200).send(response.choices[0].message.content);
}
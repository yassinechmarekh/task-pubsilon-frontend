import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({message: 'Enter a valid email !'}),
    password: z.string().min(8),
  });
export type loginType = z.infer<typeof loginSchema>;
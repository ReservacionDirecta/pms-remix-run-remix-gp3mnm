import { z } from 'zod';

export const propertySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  settings: z.record(z.unknown()).default({}),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Property = z.infer<typeof propertySchema>; 
import { z } from "zod";
import { TypeUser } from "../entities/user.entitie";

const addressSchema = z.object({
  id: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  cep: z.string().max(9),
  city: z.string(),
  state: z.string().max(2),
});

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string().max(11),
  phone: z.string().max(11),
  birthdate: z.string(),
  description: z.string().nullish(),
  typeUser: z.nativeEnum(TypeUser).nullish(),
  password: z.string(),
  createdAt: z.date().nullish(),
  resetToken: z.string().nullish(),  
});

const addressSchemaRequest = addressSchema.omit({
  id: true,
});

const userSchemaRequest = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({ address: z.optional(addressSchemaRequest) });

const userSchemaUpdateRequest = userSchemaRequest.partial();

const addressSchemaUpdateRequest = addressSchemaRequest.partial();

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userRetrieveSchemaResponse = userSchemaResponse.extend({
  address: addressSchema,
});

export {
  userSchema,
  addressSchema,
  addressSchemaRequest,
  userSchemaRequest,
  userSchemaUpdateRequest,
  userSchemaResponse,
  userRetrieveSchemaResponse,
  addressSchemaUpdateRequest,
};

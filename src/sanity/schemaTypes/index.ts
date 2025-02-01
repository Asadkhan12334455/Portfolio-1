import { type SchemaTypeDefinition } from 'sanity'
import contactSchema from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contactSchema],
}

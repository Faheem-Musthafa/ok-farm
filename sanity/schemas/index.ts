import type { SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [product, testimonial];

import { defineQuery } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/react";
import type { Image as SanityImage } from "sanity";

export type ProductVariant = {
  size: string;
  price: number;
  sku?: string;
};

export type Product = {
  _id: string;
  name: string;
  slug?: string;
  badge?: string;
  description?: PortableTextBlock[];
  image?: SanityImage;
  variants?: ProductVariant[];
  featured?: boolean;
  order?: number;
};

export type Testimonial = {
  _id: string;
  name: string;
  quote: string;
  rating?: number;
  location?: string;
  avatar?: SanityImage;
  featured?: boolean;
  order?: number;
};

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(order asc, _createdAt asc) {
    _id,
    name,
    "slug": slug.current,
    badge,
    description,
    image,
    variants,
    featured,
    order
  }
`);

export const FEATURED_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(order asc, _createdAt asc) [0...6] {
    _id,
    name,
    "slug": slug.current,
    badge,
    description,
    image,
    variants
  }
`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc, _createdAt desc) {
    _id,
    name,
    quote,
    rating,
    location,
    avatar,
    featured,
    order
  }
`);

export const FEATURED_TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc, _createdAt desc) [0...3] {
    _id,
    name,
    quote,
    rating,
    location,
    avatar
  }
`);

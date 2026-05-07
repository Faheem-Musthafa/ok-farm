import { defineType, defineField, defineArrayMember } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "badge",
      title: "Badge",
      description: 'Short label, e.g. "Daily fresh", "Slow-cooked"',
      type: "string",
      validation: (rule) => rule.max(24),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "variants",
      title: "Variants",
      description: "Sizes and prices",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "variant",
          fields: [
            defineField({
              name: "size",
              title: "Size",
              type: "string",
              description: 'e.g. "500 ml", "1 litre", "250 g"',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price (INR)",
              type: "number",
              validation: (rule) => rule.required().positive(),
            }),
            defineField({
              name: "sku",
              title: "SKU",
              type: "string",
            }),
          ],
          preview: {
            select: { size: "size", price: "price" },
            prepare: ({ size, price }) => ({
              title: size,
              subtitle: price ? `₹${price}` : "—",
            }),
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "featured",
      title: "Show on homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      description: "Lower numbers appear first",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "name", media: "image", badge: "badge" },
    prepare: ({ title, media, badge }) => ({
      title,
      subtitle: badge,
      media,
    }),
  },
});

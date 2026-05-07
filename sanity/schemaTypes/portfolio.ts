import { defineField, defineType } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Web Design', value: 'Web Design' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Development', value: 'Development' },
          { title: 'Motion', value: 'Motion' },
          { title: 'Mobile', value: 'Mobile' },
          { title: 'UI / UX', value: 'UI / UX' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      type: 'number',
      title: 'Year',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Short labels shown as pills on the image (e.g. "Next.js", "Figma")',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Short Description',
      rows: 3,
    }),
    defineField({
      name: 'projectUrl',
      type: 'url',
      title: 'Live Project URL',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Show in Selected Work',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})

import {defineType, defineField} from 'sanity'

const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position or Role',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'dateFrom',
      title: 'From (mm/yyyy)',
      type: 'datetime',
    }),
    defineField({
      name: 'dateTo',
      title: 'From (mm/yyyy)',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the company logo',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: '3-6 bullet points describing responsibilities and/or achievements',
    }),
  ],
})

export default experience

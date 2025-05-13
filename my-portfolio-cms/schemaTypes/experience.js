import {defineType, defineField} from 'sanity'

const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date (mm/yyyy)',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (mm/yyyy)',
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
      description: '3-6 bullet points highlighting responsibilities/achievements',
    }),
  ],
})

export default experience

import {defineType, defineField} from 'sanity'

const aboutMe = defineType({
  name: 'aboutMe', // name of the schema
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Your profile image for the About Me page',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
      description: 'A short biography or introduction.',
    }),
  ],
  preview: {
    select: {
      title: 'bio.0.children.0.text', // grabs the first text block in bio
      media: 'profileImage',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title || 'About Me',
        media,
      }
    },
  },
})

export default aboutMe

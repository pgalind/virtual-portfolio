export default {
  name: 'aboutMe', // name of the schema
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title for the About Me section',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'blockContent',
      description: 'A short biography or introduction.',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Your profile image for the About Me page',
    },
  ],
}

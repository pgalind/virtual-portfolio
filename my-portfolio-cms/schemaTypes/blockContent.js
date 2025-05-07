import {defineType} from 'sanity'

const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block', // Standard rich text block
    },
    // You can add other types here, such as image types
  ],
})

export default blockContent

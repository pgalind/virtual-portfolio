import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const {SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET} = process.env

// Error handling for missing environment variables
if (!SANITY_STUDIO_PROJECT_ID) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID in environment variables.')
}

if (!SANITY_STUDIO_DATASET) {
  throw new Error('Missing SANITY_STUDIO_DATASET in environment variables.')
}

export default defineConfig({
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  name: 'default',
  title: 'my-portfolio-cms',
  basePath: '/',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

import {defineCliConfig} from 'sanity/cli'

const {SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET} = process.env

// Error handling for missing environment variables
if (!SANITY_STUDIO_PROJECT_ID) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID in environment variables.')
}

if (!SANITY_STUDIO_DATASET) {
  throw new Error('Missing SANITY_STUDIO_DATASET in environment variables.')
}

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})

import { sprig } from '@sprig-technologies/sprig-browser'

export const Sprig = sprig.configure({
  environmentId: import.meta.env.VITE_SPRIG_ENVIRONMENT_ID,
})

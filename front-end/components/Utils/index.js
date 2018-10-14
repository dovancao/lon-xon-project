import { Metrics } from '../Themes'

export default {
  throwShouldImplementError () {
    throw new Error('Should implement this method')
  },

  vw (percent) {
    return Metrics.screenWidth * percent / 100
  }
}

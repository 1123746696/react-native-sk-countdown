import countDown from './countDown'
import CountDownText from './CountDownText'
const component = {
  get countDown() { return countDown },
  get CountDownText() { return CountDownText }
}
module.exports = component;
import _ from 'lodash'

/**
 * 判断是否是颜色值
 * @param {*} color
 */
isColor = color => {
  if (_.startsWith(color, '#') || _.startsWith(color, 'rgb')) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isColor
}

import gray from 'gray-percentage'
import hex2rgba from 'hex2rgba'

const Colors = {
  icon: {
    selectedTeal: '#00BEBE',
    selectedGray: '#363C54',
    default: '#696D7F',
    hint: '#9B9DA9',
    disabled: '#CDCED4',
    selectedWhite: '#FFFFFF',
    defaultWhite: hex2rgba('#FFFFFF', 0.6)
  },
  text: {
    titleGray: '#363C54',
    defaut: '#363C54',
    hintGray: '#9B9DA9',
    hintWeakGray: '#',  
    highlight: '#00BEBE',
    titleWhite: '#FFFFFF',
    hintWhite: hex2rgba('#FFFFFF', 0.6)
  },
  background: {
    mask: hex2rgba('#000000', 0.3),
    inputLine: '#CDCED4',
    devider: '#F0F1F2',
    light: '#F7F7F8',
    white: '#FFFFFF'
  },
  status: {
    charging: '#00BEBE',
    none: hex2rgba('#000000', 0),
    error: '#EF7575',
    success: '#0BAF38',
    warning: '#FFCC1C',
    hint: '#588EEA',
    free: '#CDCED4',
    heating: '#E45458',
    cooling: '#91C1EA',
  },
  nio: {
    greyLighten3: '#F7F7F8',
    grayLighten2: '#F0F1F2',
    grayLighten1: '#CDCED4',
    gray: '#9B9DA9',
    grayDarken1: '#696D7F',
    grayDarken2: '#363C54',
    grayDarken3: '#2B2B2B',
    white: '#ffffff',
    black: '#000000',
    red: '#EF7575',
    redLighten1: '#FF5A53',
    redLighten2: '#FF772F',
    redDarken1: '#E83131',
    orange: '#FFCE27',
    green: '#24BD4C',
    teal: '#00BEBE',
    tealLighten1: '#B7E8EB',
    tealLighten2: '#E7F4F8',
    blue: '#4BACF1',
    blueLighten1: '#70B7E9'
  },
  gray: {
    dark: gray(8, 270),
    copy: gray(12, 270),
    lightCopy: gray(35, 270),
    calm: gray(46, 270),
    bright: gray(64, 270),
    light: gray(80, 270),
    superLight: gray(96, 270),
  },
  code: {
    bgInline: '#fbf2e9',
    bg: '#fdfaf6',
    border: '#faede5',
    text: '#866c5b',
    remove: '#e45c5c',
    add: '#4a9c59',
    selector: '#b3568b',
    tag: '#4084a1',
    keyword: '#538eb6',
    comment: '#6f8f39',
    punctuation: '#53450e',
    regex: '#d88489',
    cssString: '#a2466c',
    invisibles: '#e0d7d1',
    scrollbarThumb: '#f4d1c6',
    lineHighlightBorder: '#f1beb6',
  },
}

export default Colors
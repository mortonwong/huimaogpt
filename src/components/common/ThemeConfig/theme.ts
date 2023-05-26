import type { GlobalThemeOverrides } from 'naive-ui'
const blue: any = {
  normal: '#154EC1',
  hover: '#3868c9',
  pressed: '#1749ad',
}
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorSuppl: blue.normal,
    primaryColor: blue.normal,
    primaryColorHover: blue.hover,
    primaryColorPressed: blue.normal,
    iconColor: blue.normal,
    fontSize: '16px',
    iconColorHover: blue.hover,
    iconColorPressed: blue.pressed,
    // dividerColor: '#154EC1',
    borderColor: blue.normal,
    scrollbarColor: blue.normal,
    scrollbarColorHover: blue.normal,
    borderRadius: '15px',
    borderRadiusSmall: '15px',
    // iconColorDisabled: '#154EC1',
    // primaryColorSuppl: '#4098FC'
  },
  // Button: {
  //     textColor: '#FF0000'
  // }
}

export default themeOverrides

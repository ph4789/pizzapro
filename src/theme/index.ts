const theme = {
  COLORS: {
    BACKGROUND: '#F7F7F7',
    PRIMARY_900: '#B83341',
    PRIMARY_800: '#E03F50',
    PRIMARY_100: '#D16470',
    PRIMARY_50: '#F1F2F6',

    SECONDARY_900: '#572D31',
    SECONDARY_500: '#7A6769',
    SECONDARY_100: '#A18C8E',

    SUCCESS_900: '#528F33',
    SUCCESS_50: '#F7FFF9',

    ALERT_900: '#B27F00',
    ALERT_800: '#C5941A',

    SHAPE: '#DCDCDC',
    TITLE: '#FFF',

    GRADIENT: ['#B83341', '#E03F50'] as string[],
  },
  FONTS: {
    TEXT: 'DMSans_400Regular',
    TITLE: 'DMSerifDisplay_400Regular',
  },
};

export default theme;
export type ThemeType = typeof theme;

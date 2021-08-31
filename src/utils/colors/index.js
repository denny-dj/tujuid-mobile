const mainColors = {
    green1 : '#0bcad4',
    green2 : '#edfcfd',
    dark1 : '#112340',
    dark2 : '#495a75',
    dark3 : '#8092af',
    grey1 : '#7d8797',
    grey2 : '#e9e9e9',
    grey3 : '#EDEEF0',
};

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    white: 'white',
    black: 'black',
    disable : mainColors.grey3,
    text : {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.dark2,
        menuActive : mainColors.green1,
        subtitle : mainColors.dark3,
    },
    button : {
        primary: {
            background: mainColors.green1,
            text: 'white',
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1,
        }
    },
    border : mainColors.grey2,
    cardLight : mainColors.green2,
}
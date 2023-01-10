import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, FontWeight, BaseColor, useTheme } from '../config';

export default function Index(props) {
    const {
        header,
        title1,
        title2,
        title3,
        headline,
        body1,
        body2,
        callout,
        subhead,
        footnote,
        caption1,
        caption2,
        overline,
        // props font
        thin,
        ultraLight,
        light,
        regular,
        medium,
        semibold,
        bold,
        heavy,
        black,
        //custom color
        primaryColor,
        darkPrimaryColor,
        lightPrimaryColor,
        accentColor,
        grayColor,
        dividerColor,
        whiteColor,
        fieldColor,
        numberOfLines,
        textAlign,
        style,
        children,
    } = props;

    const { colors } = useTheme();

    let textStyle = StyleSheet.flatten([
        { textAlign },
        header && Typography.header,
        title1 && Typography.title1,
        title2 && Typography.title2,
        title3 && Typography.title3,
        headline && Typography.headline,
        body1 && Typography.body1,
        body2 && Typography.body2,
        callout && Typography.callout,
        subhead && Typography.subhead,
        footnote && Typography.footnote,
        caption1 && Typography.caption1,
        caption2 && Typography.caption2,
        overline && Typography.overline,
        //custom for font
        thin && { fontWeight: FontWeight.thin },
        ultraLight && { fontWeight: FontWeight.ultraLight },
        light && { fontWeight: FontWeight.light },
        regular && { fontWeight: FontWeight.regular },
        medium && { fontWeight: FontWeight.medium },
        semibold && { fontWeight: FontWeight.semibold },
        bold && { fontWeight: FontWeight.bold },
        heavy && { fontWeight: FontWeight.heavy },
        black && { fontWeight: FontWeight.black },
        // default color
        { color: colors.text },
        //custom for color
        primaryColor && { color: colors.primary },
        darkPrimaryColor && { color: colors.primaryDark },
        lightPrimaryColor && { color: colors.primaryLight },
        accentColor && { color: colors.accent },
        grayColor && { color: BaseColor.grayColor },
        dividerColor && { color: BaseColor.dividerColor },
        whiteColor && { color: BaseColor.whiteColor },
        fieldColor && { color: BaseColor.fieldColor },
        style && style,
    ]);

    return (
        <Text style={textStyle} numberOfLines={numberOfLines}>
            {children}
        </Text>
    );
};

Index.defaultProps = {
    numberOfLines: 10,
    style: {},
    children: '',
};

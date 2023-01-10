import React from "react";
import { StyleSheet, Image as FastImage } from "react-native";

export default Image = (props) => {
    const { style, resizeMode, ...rest } = props;
    return (
        <FastImage
            style={StyleSheet.flatten([style && style])}
            {...rest}
            resizeMode={"cover"}
        />
    );
};

Image.defaultProps = {
    style: {},
    resizeMode: "cover"
};

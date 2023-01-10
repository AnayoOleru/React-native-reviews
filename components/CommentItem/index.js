import React from "react";
import { View } from "react-native";
import { BaseColor, useTheme } from "../../config";
import { Text, Image, StarRating } from "../index";
import PropTypes from "prop-types";
import styles from "./styles";

export default CommentItem = ({ style, image, name, rate, date, title, comment }) => {
    const { colors } = useTheme();
    const cardColor = colors.card;
    return (
        <View style={[styles.contain, { backgroundColor: cardColor }, style]}>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <View style={styles.contentLeft}>
                    <Image source={{ uri: image }} style={styles.thumb} />
                    <View>
                        <Text headline semibold numberOfLines={1}>
                            {name}
                        </Text>
                        <View style={styles.contentRate}>
                            <StarRating
                                disabled={true}
                                starSize={14}
                                maxStars={5}
                                rating={rate}
                                selectedStar={rating => { }}
                                fullStarColor={BaseColor.yellowColor}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.contentRight}>
                    <Text caption2 grayColor numberOfLines={1}>
                        {date}
                    </Text>
                </View>
            </View>
            <View>
                <Text subhead semibold>
                    {title}
                </Text>
                <Text
                    body2
                    grayColor
                    style={{
                        marginTop: 10
                    }}
                >
                    {comment}
                </Text>
            </View>
        </View>
    );
}

CommentItem.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    image: PropTypes.node.isRequired,
    name: PropTypes.string,
    rate: PropTypes.number,
    date: PropTypes.string,
    title: PropTypes.string,
    comment: PropTypes.string
};

CommentItem.defaultProps = {
    style: {},
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    name: "",
    rate: 0,
    date: "",
    title: "",
    comment: ""
};

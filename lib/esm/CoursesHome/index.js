import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, FlatList, } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStopwatch, faEye, faThumbsUp, faBookmark, } from "@fortawesome/free-solid-svg-icons";
const HomeCourses = ({ card }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const flatListRef = React.useRef();
    return (React.createElement(View, { style: styles.container },
        React.createElement(View, { style: { flex: 0.5 } },
            React.createElement(FlatList, { style: styles.menu, horizontal: true, showsHorizontalScrollIndicator: false, data: card.categories, ref: flatListRef, renderItem: ({ item, index }) => (React.createElement(TouchableWithoutFeedback, { key: index, onPress: () => {
                        setSelectedIndex(index);
                        flatListRef.current.scrollToIndex({
                            index: index,
                            animated: true,
                        });
                    } },
                    React.createElement(View, { key: index, style: selectedIndex === index ? styles.selected : styles.menuItem },
                        React.createElement(Text, null, item)))) })),
        React.createElement(View, { style: {
                flex: 5,
                alignItems: "center",
            } },
            React.createElement(View, { style: styles.courseCard },
                React.createElement(View, { style: styles.cardImageContainer },
                    React.createElement(Image, { source: { uri: `${card.thumbnail}` }, style: styles.cardImage })),
                React.createElement(View, { style: styles.cardHeader },
                    React.createElement(View, null,
                        React.createElement(Text, { style: styles.cardHeaderCategory }, card.author)),
                    React.createElement(View, { style: { flexDirection: "row", alignItems: "center" } },
                        React.createElement(FontAwesomeIcon, { icon: faStopwatch }),
                        React.createElement(Text, { style: styles.courseTime },
                            card.timeToRead,
                            " min"))),
                React.createElement(View, { style: styles.cardTitle },
                    React.createElement(Text, null, card.title)),
                React.createElement(View, { style: styles.cardActions },
                    React.createElement(View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        } },
                        React.createElement(FontAwesomeIcon, { icon: faEye, style: { color: card.isRead ? "blue" : "#e0e0e0" } })),
                    React.createElement(View, { style: { flexDirection: "row", alignItems: "center" } },
                        React.createElement(FontAwesomeIcon, { icon: faThumbsUp, style: { color: card.isLiked ? "blue" : "#e0e0e0" } }),
                        React.createElement(FontAwesomeIcon, { icon: faBookmark, style: {
                                color: card.isBookmarked ? "blue" : "#e0e0e0",
                                marginLeft: 20,
                            } })))))));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    menu: {},
    menuItem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        width: 230,
        borderColor: "#e0e0e0",
        borderBottomWidth: 5,
        borderStyle: "solid",
        color: "#e0e0e0",
    },
    selected: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        width: 230,
        paddingHorizontal: 15,
        borderColor: "blue",
        borderBottomWidth: 5,
        borderStyle: "solid",
        color: "blue",
    },
    courseCard: {
        marginTop: 40,
        flexDirection: "column",
        backgroundColor: "white",
        width: 350,
        height: 300,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 30,
        elevation: 5,
    },
    cardImageContainer: {
        flex: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    cardImage: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        height: "100%",
    },
    cardHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    cardHeaderCategory: { fontWeight: "bold" },
    courseTime: {
        marginLeft: 5,
    },
    cardTitle: {
        flex: 1,
        paddingHorizontal: 10,
    },
    cardActions: {
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
export default HomeCourses;

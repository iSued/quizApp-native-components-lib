import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const HomeCourses = ({
  card,
  toggleLike,
  toggleBookmarked
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.courseCard
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.cardImageContainer
  }, /*#__PURE__*/React.createElement(Image, {
    source: {
      uri: `${card.thumbnail}`
    },
    style: styles.cardImage
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.cardHeader
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.cardHeaderCategory
  }, card.author)), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: "stopwatch"
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.courseTime
  }, card.timeToRead, "min"))), /*#__PURE__*/React.createElement(View, {
    style: styles.cardTitle
  }, /*#__PURE__*/React.createElement(Text, null, card.title)), /*#__PURE__*/React.createElement(View, {
    style: styles.cardActions
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: "eye",
    style: {
      color: card.isRead ? "blue" : "#e0e0e0"
    }
  })), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: toggleLike
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: "thumbs-up",
    style: {
      color: card.isLiked ? "blue" : "#e0e0e0"
    }
  })), /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: toggleBookmarked
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: "bookmark",
    style: {
      color: card.isBookmarked ? "blue" : "#e0e0e0",
      marginLeft: 20
    }
  })))));
};

const styles = StyleSheet.create({
  courseCard: {
    marginTop: 40,
    flexDirection: "column",
    backgroundColor: "white",
    minHeight: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 30,
    elevation: 5
  },
  cardImageContainer: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  cardImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%"
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  cardHeaderCategory: {
    fontWeight: "bold"
  },
  courseTime: {
    marginLeft: 5
  },
  cardTitle: {
    flex: 1,
    paddingHorizontal: 10
  },
  cardActions: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default HomeCourses;
//# sourceMappingURL=index.js.map
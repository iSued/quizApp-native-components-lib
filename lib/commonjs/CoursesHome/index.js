"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeFontawesome = require("@fortawesome/react-native-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HomeCourses = ({
  card,
  toggleLike,
  toggleBookmarked
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.courseCard
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardImageContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: {
      uri: `${card.thumbnail}`
    },
    style: styles.cardImage
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardHeader
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.cardHeaderCategory
  }, card.author)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeFontawesome.FontAwesomeIcon, {
    icon: "stopwatch"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.courseTime
  }, card.timeToRead, "min"))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardTitle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, card.title)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardActions
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeFontawesome.FontAwesomeIcon, {
    icon: "eye",
    style: {
      color: card.isRead ? "blue" : "#e0e0e0"
    }
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: toggleLike
  }, /*#__PURE__*/_react.default.createElement(_reactNativeFontawesome.FontAwesomeIcon, {
    icon: "thumbs-up",
    style: {
      color: card.isLiked ? "blue" : "#e0e0e0"
    }
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: toggleBookmarked
  }, /*#__PURE__*/_react.default.createElement(_reactNativeFontawesome.FontAwesomeIcon, {
    icon: "bookmark",
    style: {
      color: card.isBookmarked ? "blue" : "#e0e0e0",
      marginLeft: 20
    }
  })))));
};

const styles = _reactNative.StyleSheet.create({
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

var _default = HomeCourses;
exports.default = _default;
//# sourceMappingURL=index.js.map
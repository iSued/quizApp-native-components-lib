"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const HomeCourses = ({ card }) => {
    return (<react_native_1.View style={styles.courseCard}>
      <react_native_1.View style={styles.cardImageContainer}>
        <react_native_1.Image source={{ uri: `${card.thumbnail}` }} style={styles.cardImage}></react_native_1.Image>
      </react_native_1.View>
      <react_native_1.View style={styles.cardHeader}>
        <react_native_1.View>
          <react_native_1.Text style={styles.cardHeaderCategory}>{card.author}</react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={{ flexDirection: "row", alignItems: "center" }}>
          <react_native_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faStopwatch}/>
          <react_native_1.Text style={styles.courseTime}>{card.timeToRead} min</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>
      <react_native_1.View style={styles.cardTitle}>
        <react_native_1.Text>{card.title}</react_native_1.Text>
      </react_native_1.View>
      <react_native_1.View style={styles.cardActions}>
        <react_native_1.View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        }}>
          <react_native_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faEye} style={{ color: card.isRead ? "blue" : "#e0e0e0" }}/>
        </react_native_1.View>

        <react_native_1.View style={{ flexDirection: "row", alignItems: "center" }}>
          <react_native_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faThumbsUp} style={{ color: card.isLiked ? "blue" : "#e0e0e0" }}/>
          <react_native_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faBookmark} style={{
            color: card.isBookmarked ? "blue" : "#e0e0e0",
            marginLeft: 20,
        }}/>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    courseCard: {
        marginTop: 40,
        flexDirection: "column",
        backgroundColor: "white",
        minHeight: 300,
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
exports.default = HomeCourses;
//# sourceMappingURL=index.js.map
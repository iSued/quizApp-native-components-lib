import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type CourseCard = {
  title: string;
  author: string;
  thumbnail: string;
  isLiked: boolean;
  isRead: boolean;
  isBookmarked: boolean;
  timeToRead: number;
  categories: string[];
};

const HomeCourses: React.FC<{
  card: CourseCard;
  toggleLike: () => void;
  toggleBookmarked: () => void;
}> = ({ card, toggleLike, toggleBookmarked }) => {
  return (
    <View style={styles.courseCard}>
      <View style={styles.cardImageContainer}>
        <Image
          source={{ uri: `${card.thumbnail}` }}
          style={styles.cardImage}
        ></Image>
      </View>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.cardHeaderCategory}>{card.author}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesomeIcon icon="stopwatch" />
          <Text style={styles.courseTime}>{card.timeToRead}min</Text>
        </View>
      </View>
      <View style={styles.cardTitle}>
        <Text>{card.title}</Text>
      </View>
      <View style={styles.cardActions}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon="eye"
            style={{ color: card.isRead ? "blue" : "#e0e0e0" }}
          />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableWithoutFeedback onPress={toggleLike}>
            <FontAwesomeIcon
              icon="thumbs-up"
              style={{
                color: card.isLiked ? "blue" : "#e0e0e0",
              }}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={toggleBookmarked}>
            <FontAwesomeIcon
              icon="bookmark"
              style={{
                color: card.isBookmarked ? "blue" : "#e0e0e0",
                marginLeft: 20,
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
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

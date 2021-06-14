import React from "react";
declare type CourseCard = {
    title: string;
    author: string;
    thumbnail: string;
    isLiked: boolean;
    isRead: boolean;
    isBookmarked: boolean;
    timeToRead: number;
    categories: string[];
};
declare const HomeCourses: React.FC<{
    card: CourseCard;
    toggleLike: () => void;
    toggleBookmarked: () => void;
}>;
export default HomeCourses;

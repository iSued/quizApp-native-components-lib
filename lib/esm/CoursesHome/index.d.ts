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
    toggleLike: () => boolean;
    toggleBookmarked: () => boolean;
};
declare const HomeCourses: React.FC<{
    card: CourseCard;
}>;
export default HomeCourses;

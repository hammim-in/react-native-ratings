import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { starFilled, starOutline } from '../images';
export const defaultLabels = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];
const Ratings = ({ count = 5, defaultRating = 0, size = 30, showRating = false, isDisabled = false, starContainerStyle = {}, onFinishRating = () => { }, labels = defaultLabels }) => {
    const [rating, setRating] = React.useState(defaultRating);
    React.useEffect(() => {
        setRating(defaultRating);
    }, [defaultRating]);
    const handleRate = (value) => {
        if (!isDisabled) {
            setRating(value);
            onFinishRating(value);
        }
    };
    return (React.createElement(View, { style: { alignItems: 'flex-start' } },
        React.createElement(View, { style: [styles.starRow, starContainerStyle] }, Array.from({ length: count }, (_, i) => (React.createElement(TouchableOpacity, { key: i, activeOpacity: 0.7, onPress: () => handleRate(i + 1), disabled: isDisabled },
            React.createElement(Image, { source: i < rating ? starFilled : starOutline, style: { width: size, height: size, marginHorizontal: 2 }, resizeMode: "contain" }))))),
        showRating && rating > 0 && (React.createElement(Text, { style: styles.ratingText }, labels[rating - 1]))));
};
const styles = StyleSheet.create({
    starRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },
});
export default Ratings;

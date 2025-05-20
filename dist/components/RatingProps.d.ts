import { StyleProp, ViewStyle } from 'react-native';
export interface RatingProps {
    count?: number;
    defaultRating?: number;
    size?: number;
    showRating?: boolean;
    isDisabled?: boolean;
    starContainerStyle?: StyleProp<ViewStyle>;
    onFinishRating?: (value: number) => void;
    labels?: string[];
}

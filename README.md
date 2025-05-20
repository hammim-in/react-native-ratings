# React Native Ratings

> ✅ **Supports React 19**

A customizable, simple star-based rating component for React Native.  
Lightweight and easy to integrate into your app for collecting user ratings.

---

## ✨ Features

- 🌟 Interactive star ratings  
- 🎨 Customizable star size and colors  
- 📝 Optional labels for each rating level  
- 🚫 Disable interaction mode  
- ⚡ Zero dependency other than React Native  
- 🧠 Written fully in TypeScript  

---

## 📦 Installation

```bash
npm install @hammim-in/react-native-ratings
# or
yarn add @hammim-in/react-native-ratings



## Usage

```javascript
import { Ratings } from '@hammim-in/react-native-ratings';

function MyComponent() {
  return (
    <Ratings
      rating={3}
      size={32}
      maxStars={5}
      showRating={true}
      labels={['Bad', 'Okay', 'Good', 'Very Good', 'Excellent']}
      onRate={(value) => console.log('Rated:', value)}
    />
  );
}
```

## 🛠️ Props

| Prop Name    | Type                      | Required | Description                                               |
| ------------ | ------------------------- | -------- | --------------------------------------------------------- |
| `rating`     | `number`                  | ✅ Yes    | The current rating value                                  |
| `maxStars`   | `number`                  | ❌ No     | Maximum number of stars (default: `5`)                    |
| `size`       | `number`                  | ❌ No     | Size (width/height) of each star (default: `24`)          |
| `labels`     | `string[]`                | ❌ No     | Array of labels to show based on the rating               |
| `showRating` | `boolean`                 | ❌ No     | Whether to show label text below stars (default: `false`) |
| `onRate`     | `(value: number) => void` | ❌ No     | Callback triggered when a star is selected                |
| `isDisabled` | `boolean`                 | ❌ No     | Disable rating interaction (default: `false`)             |

## 🎨 Customization

Easily style and configure the component:

- Choose star size and spacing
- Use your own star images (defaults included)
- Customize the number of stars
- Toggle label visibility
- Disable interaction when needed
- Customize label text for each rating level

## 🧩 Types
```javascript
interface RatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  showRating?: boolean;
  labels?: string[];
  onRate?: (rating: number) => void;
  isDisabled?: boolean;
}

```
## 📄 License

MIT License © 2025 [Ham Mim](https://hammim.in)

## 🙌 Support

If you find any issues or have a feature request, feel free to [open an issue](https://github.com/hammim-in/react-native-places-autocomplete/issues).

Or contact: [support@hammim.in](mailto:support@hammim.in)

## 🚧 Future Improvements (Coming Soon)

- Customizable debounce delay
- Add current location ("Use my location") button
- Styling props for better theming
- Support reverse geocoding
- Localization for different languages

# 🌟 fade-gallery

Fade between images in your React app with customizable transitions and easy navigation.

### Key Features:
- **Seamless Image Fading**: Easily transition between images with smooth fade effects.
- **Customizable**: Adjust the fade duration and interval to suit your needs.
- **Navigation Functions**: Built-in `next` and `previous` functions for easy control.

## 🚀 Installation
To install fade-gallery, run the following command:

```bash
npm install fade-gallery
```

## 🛠 Getting Started
To get started, simply import the `fadeGallery` function into your React component:

```javascript
import fadeGallery from 'fade-gallery';
```

Then, initialize it with your desired images, interval, and fade duration:

```javascript
const { styleProps1, styleProps2, previous, next } = fadeGallery({
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    interval: 3000,
    fadeDuration: '2s'
});
```

Use the returned props on your `<img>` elements:

```javascript
<div style={...styleProps1} alt="Image 1" />
<div style={...styleProps2} alt="Image 2" />
```

And use the `next` and `previous` functions to control the image transitions.

## 📸 Example
Here’s how to use fade-gallery in your component:

```javascript
import fadeGallery from 'fade-gallery';

function MyComponent() {
    const { styleProps1, styleProps2, previous, next } = fadeGallery({
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        interval: 3000,
        fadeDuration: '2s'
    });

    return (
        <div>
            <div style={...styleProps1}/>
            <div style={...styleProps2} />
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
}
```
_Example GIF coming soon..._
<!-- ![Example image](path.png) -->

## 🌟 Why Choose fade-gallery?
- **Lightweight**: Minimal overhead, easy to integrate.
- **Customizable**: Fine-tune the transition effects to match your design.
- **Simple API**: Easy to use with just a few lines of code.

## 🌍 Supported Environments
fade-gallery is compatible with all modern browsers and works seamlessly with React 16.8 and above.

## 🎨 Customization
react-gallery imgxProps modify these css properties:
- opacity
- backgroundImage
- transitionProperty
- transitionTimingFunction
- transitionDuration

Feel free to override these css props with your own values.

You can customize the fading effect by adjusting the `fadeDuration` and `interval` options:

```javascript
const { styleProps1, styleProps2 } = fadeGallery({
    images: ['image1.jpg', 'image2.jpg'],
    interval: 5000,
    fadeDuration: '3s'
});
```

- **interval**: The time (in milliseconds) between each image transition.
- **fadeDuration**: The duration (in seconds) of the fade effect.

## 🔧 Acknowledgments & Contributions
Feel free to fork, open issues, or submit pull requests to help improve this project.

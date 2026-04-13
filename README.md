# image-slider
A lightweight vanilla JavaScript image slider with next/back navigation

## Features

- Navigate forward and backward through images
- Loops automatically from the last image back to the first (and vice versa)
- Pure HTML, CSS, and JavaScript — zero dependencies

## How It Works

The slider listens for clicks on `#next` and `#back` buttons and updates the `src` attribute of an `#picture` image element. An index tracks the current image and wraps around when it reaches either end of the array.

## Getting Started

1. Clone the repository
   git clone https://github.com/your-username/image-slider.git

2. Add your images to the project folder and update the array in `slider.js`
   const images = ["image1.jpeg", "image2.jpeg", ...];

3. Open `index.html` in your browser — no build step needed

## Project Structure

image-slider/
├── index.html
├── slider.js
└── images/

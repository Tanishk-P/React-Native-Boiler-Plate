# React Native Boilerplate

This repository serves as a robust boilerplate for starting new React Native projects. It includes pre-configured tools, libraries, and best practices to help developers jumpstart their applications with minimal setup.

## Features

- **Navigation**: Integrated with [React Navigation](https://reactnavigation.org/).
- **Scalable Structure**: Organized folder structure for components, screens, assets, and utilities.
- **TypeScript Support**: Ready-to-use TypeScript configuration for type-safe development.
- **Utilities**: Includes helper functions and utilities to accelerate development.

- **State Management**: Includes setup for [Redux](https://redux.js.org/) and Context API for managing global state.(Uncoming Feature!)

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn
- React Native CLI
- Android Studio / Xcode (for native builds)

## Getting Started

Follow these steps to use the boilerplate in your React Native project:

### Clone the Repository

```bash
git clone https://github.com/Tanishk-P/React-Native-Boiler-Plate.git
```

### Install Dependencies

Navigate to the project folder and install the dependencies:

```bash
cd React-Native-Boiler-Plate
npm install
```

or

```bash
cd React-Native-Boiler-Plate
yarn install
```

### Run the Application

#### iOS

```bash
npx pod-install
yarn ios
```

#### Android

```bash
yarn android
```

## Folder Structure

The boilerplate follows a modular and scalable folder structure:

```
React-Native-Boiler-Plate/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Application screens
│   ├── navigation/      # Navigation configuration
│   ├── store/           # Redux store and slices
│   ├── utils/           # Utility functions
│   ├── assets/          # Static assets (images, fonts, etc.)
│   └── types/           # TypeScript type definitions
├── android/             # Android-specific files
├── ios/                 # iOS-specific files
├── App.tsx              # Entry point
└── package.json         # Project configuration
```

## Contributing

Contributions are welcome! If you have ideas for improving this boilerplate, feel free to fork the repository and submit a pull request.

### Steps to Contribute

1. Fork this repository.
2. Create a new branch for your feature or bugfix.
3. Implement your changes and commit them.
4. Submit a pull request with a detailed description.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Feedback

If you have any issues or suggestions, please open an issue in this repository. Your feedback is greatly appreciated!

## Related Tool

Check out the [create-rn-boilerplate](https://www.npmjs.com/package/create-rn-boilerplate?activeTab=readme) CLI tool, which uses this boilerplate to help you quickly start new React Native projects.

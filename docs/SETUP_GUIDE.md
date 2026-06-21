# Setup Guide for NutriLens

Welcome to the NutriLens team! This guide will help you set up your local development environment.

## 1. Prerequisites
- Node.js (v18+)
- React Native CLI
- Android Studio with Android SDK 12+ (API 31+) and an Android Emulator
- JDK 17
- Git

## 2. Clone Repository
```bash
git clone <repository_url>
cd NutriLens
```

## 3. Install Dependencies
```bash
npm install
```

## 4. Environment Variables
1. Copy the example file:
   ```bash
   cp .env.example .env
   ```
2. Contact the backend lead or supervisor to get the valid Firebase API keys and credentials.
3. Paste the credentials into the `.env` file.

## 5. Firebase Configuration
- Ensure your `google-services.json` (Android) and `GoogleService-Info.plist` (iOS) are placed in the correct native directories (`android/app/` and `ios/` respectively).
- Note: These files are ignored by git, so you must get them from the team lead.

## 6. Run the Application
1. Start Metro Bundler:
   ```bash
   npm start
   ```
2. Start Android app:
   ```bash
   npm run android
   ```

## Common Issues & Solutions
- **Build fails with "SDK not found"**: Ensure `ANDROID_HOME` environment variable is set properly.
- **Metro Bundler hangs**: Run `npm start -- --reset-cache`.
- **Firebase/Vision Camera Native Errors**: Try cleaning the build: `cd android && ./gradlew clean` and then rebuild.

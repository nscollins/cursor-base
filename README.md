This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, set up your Firebase project:

1. Create a new project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database in your project
3. Go to Project Settings > General > Your apps > Web app
4. Register a new web app and get your Firebase configuration
5. Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Firebase Integration

This project includes a basic Firebase setup with Firestore database integration. The Firebase configuration and utility functions are located in:

- `lib/firebase/config.ts` - Firebase initialization and configuration
- `lib/firebase/firestore.ts` - Generic Firestore utility functions

To use Firestore in your components:

```typescript
import { getCollection, addDocument } from '@/lib/firebase/firestore';

// Example usage
const getData = async () => {
  const items = await getCollection<YourType>('collection-name');
  // ... use your data
};

const addData = async (data: YourType) => {
  const newId = await addDocument('collection-name', data);
  // ... handle the new document
};
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

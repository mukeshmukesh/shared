# Anonymous Stories

A compassionate platform for sharing stories of sadness anonymously. Built with Next.js, MongoDB, and integrated with Google Ads and Analytics.

## Features

- Anonymous story sharing
- Community support through reading others' stories
- Comments on stories
- Google Ads integration for monetization
- SEO optimized for discoverability
- Responsive, encouraging UI design
- Google Analytics for tracking

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your values:
   - MongoDB URI (use MongoDB Atlas free tier)
   - Google Analytics Measurement ID
   - Google AdSense Publisher ID
4. Run the development server: `npm run dev`

## Database Setup (MongoDB Atlas Free)

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Sign up for free account
3. Create a free cluster (M0 Sandbox)
4. Create database user with read/write permissions
5. Whitelist IP addresses (0.0.0.0/0 for development)
6. Get connection string and replace credentials
7. Set MONGODB_URI in .env.local

## Google Analytics Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account and property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Set GA_MEASUREMENT_ID in .env.local

## Google AdSense Setup

1. Go to [adsense.google.com](https://adsense.google.com)
2. Apply for account (may take time for approval)
3. Get Publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
4. Set ADSENSE_CLIENT in .env.local

## Deployment to Vercel

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Connect GitHub account
4. Import your repository
5. Add environment variables in Vercel dashboard:
   - MONGODB_URI
   - GA_MEASUREMENT_ID
   - ADSENSE_CLIENT
6. Deploy

## Domain Setup

1. Register domain on GoDaddy (e.g., anonymousstories.com)
2. In Vercel dashboard, go to Settings > Domains
3. Add your domain and follow DNS instructions

## Data Storage

- **Stories**: Stored in MongoDB `stories` collection
- **Comments**: Stored in MongoDB `comments` collection, linked by `storyId`
- **Timestamps**: Automatic `createdAt` fields
- **User Details**: Currently anonymous (no user accounts), but all data is public

## Monetization

- Apply for Google AdSense
- Place ad units strategically (banners, in-feed ads)
- Monitor performance with Analytics

## Legal

- Add privacy policy and terms of service pages
- Implement content moderation
- Ensure GDPR compliance if targeting EU users

## Contributing

Feel free to improve the design, add features like user accounts, or enhance security.

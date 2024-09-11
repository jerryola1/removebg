# RemoveBG - Background Removal App

This is a [Next.js](https://nextjs.org) project that allows users to remove backgrounds from images using AI-powered technology.

## Features

- Upload images from local device
- Remove backgrounds using AI-powered service (FAL AI)
- Display processed images with transparent backgrounds
- Download processed images
- Responsive design for mobile and desktop
- Enlarge processed images for better viewing

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [FAL AI](https://fal.ai/) - AI-powered background removal service
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/jerryola1/removebg.git
   cd removebg
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your FAL AI API key:
   ```
   FAL_KEY=your_fal_ai_api_key_here
   ```

4. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Main application code
  - `actions/`: Server actions (e.g., removeBackground.ts)
  - `api/`: API routes (e.g., upload handling)
  - `components/`: Reusable React components
  - `page.tsx`: Main page component
  - `layout.tsx`: Root layout component
- `public/`: Static assets

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [FAL AI](https://fal.ai/) for providing the background removal service
- [Next.js](https://nextjs.org/) for the awesome React framework
- [Vercel](https://vercel.com/) for hosting and deployment

# Harsh Dubey - Personal Portfolio

A modern, highly interactive personal portfolio website showcasing my experience, projects, and skills. Built with the latest web technologies to deliver a premium, visually engaging user experience.

## ✨ Features

- **Next.js & React**: Built with Next.js App Router and Server Actions.
- **Stunning UI/UX**: Features a rich gradient mesh background, subtle dot grid pattern, and vibrant accent glows for an immersive experience.
- **Smooth Animations**: Powered by Framer Motion for sophisticated entering/exiting animations and smooth scrolling.
- **Dark & Light Mode**: Seamlessly transition between themes with a click.
- **Dynamic Content**:
  - **Experience** section detailing professional history.
  - **Projects** section with real-time tech stack icons.
  - **Skills** section with individual technology icons.
- **Working Contact Form**: Integrated with React Email & Resend to send real emails directly from the site.
- **Fully Responsive**: Carefully designed to look great on desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: React Email & Resend
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

You need Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshdubey6/portfolio.git
   ```

2. Navigate into the directory:
   ```bash
   cd portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root of your project and add your Resend API key:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the outcome.

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

*Note: If you experience deployment issues related to dependency resolution (`ERESOLVE` errors) on Vercel, rest assured that an `.npmrc` file is already included in this repository to configure npm to use legacy peer dependencies behavior automatically during the build process.*

## 📄 License

This project is open-source and available under the MIT License.

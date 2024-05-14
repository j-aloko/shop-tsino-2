# Documentation

## Custom Shopify Storefront

Welcome to the documentation for our custom Shopify storefront. This storefront is a robust and feature-rich e-commerce solution built using Next.js and Shopify's GraphQL APIs. It offers a unique shopping experience, with features like multilingual support, price conversion, intelligent variant selection, dynamic product filtering, and much more.

Our storefront is designed to be highly customizable and easy to use, with a clean and organized codebase that promotes reusability and maintainability. It leverages several performance optimization techniques provided by Next.js, ensuring a fast and smooth user experience.

In this documentation, you'll find detailed information about the storefront's architecture, key features, codebase structure, and more. We also provide comprehensive onboarding support, including training sessions, technical support, and regular updates.

Whether you're a developer looking to customize the storefront or a store owner wanting to understand how it works, this documentation is here to guide you.

## Introduction

This document provides an overview of our custom Shopify storefront, which leverages the power of Next.js and Shopify's GraphQL APIs to deliver a unique and optimized shopping experience.

## Technologies Used

Our storefront is built using **Next.js**, a popular React framework that enables features like server-side rendering and static site generation. We also use [Shopify's Storefront](https://shopify.dev/docs/api/storefront) and [Admin GraphQL APIs](https://shopify.dev/docs/api/admin-graphql) to fetch and manage data directly from Shopify. Other technologies used include Redux Toolkit for state management, Material-UI for UI components, and next-i18next for translating static resources.

## Architecture

Our ecommerce storefront architecture is meticulously crafted to harness the full potential of **Next.js**, **Shopify's APIs**, and **Redux Toolkit**.

At the heart of our architecture is **Next.js**, a powerful React framework that takes charge of the frontend. It is responsible for rendering our React components and serving our pages, ensuring a seamless and responsive user interface.

The **Shopify's Storefront and Admin GraphQL APIs** play a crucial role in our architecture. They are used to fetch product data, manage shopping carts, handle customer accounts, and process orders. This integration with Shopify's APIs allows us to provide a robust and reliable ecommerce solution.

To manage the application state, we employ the **Redux Toolkit**, a modern, opinionated, batteries-included toolset for efficient Redux development. It simplifies the Redux setup and includes utilities to simplify tasks like performing asynchronous logic with **async thunks**.

Async thunks are used to handle asynchronous operations, allowing us to write Redux logic that interacts with the server. This ensures that our application remains responsive and performant, even when dealing with complex state management.

In summary, our architecture is a harmonious blend of Next.js for frontend rendering, Shopify's APIs for data management, and Redux Toolkit with async thunks for state management, providing a comprehensive, efficient, and scalable solution for custom ecommerce storefronts. This architecture not only delivers stunning visuals but also ensures a smooth and engaging shopping experience for our customers.

## Codebase Structure

Our codebase is meticulously structured to promote both reusability and maintainability:

- **Pages Directory**: This directory is specific to Next.js and is where all the page components reside. Each file corresponds to a route based on its name. This is where we leverage the power of Next.js's file-system based routing.

- **API Directory**: This directory contains all the API calls to Shopify's Storefront and Admin GraphQL APIs. It helps to keep our API calls isolated and organized.

- **Components Directory**: This is where all reusable UI components are stored. Each component is designed to be stateless and only takes props, ensuring maximum reusability across different parts of the application.

- **Containers Directory**: This directory houses the execution of state management logic, hooks, custom hooks, and API interactions. Containers are where data is fetched and state is accessed, which are then passed as props to components. This separation of concerns allows our components to remain clean and focused on presentation.

- **Hooks Directory**: All custom hooks are stored in this directory. These hooks encapsulate complex logic, such as state management and side effects, into reusable functions. This helps to keep our components clean and focused on rendering.

- **Services Directory**: This is where we manage our Redux state and asynchronous middleware with Redux Toolkit. It also contains the implementations for interacting with Shopify's Storefront and Admin GraphQL APIs. By isolating these services, we ensure that any changes to our data fetching logic or state management don't affect the rest of the codebase.

- **Public/Locales Directory**: This directory stores translations of static resources in English, Spanish (Espanol), and French. These translations allow us to easily internationalize our storefront. Additional languages can be added as needed.

- **Utils Directory**: This directory contains utility functions that are used across the application. It promotes code reusability and cleanliness.

- **Styles Directory**: This directory contains all the global styles and theme related files. It helps to maintain a consistent look and feel across the application.

- **Theme Directory**: This directory is dedicated to customizing the application's theme. It includes all the necessary configurations for typography, color schemes, and other stylistic elements. This centralized approach to styling makes it easy to maintain a consistent look and feel across the entire application.

## Styling and Responsive Design

Styling is handled using a combination of Material-UI, react-bootstrap for carousel, and traditional CSS. We've also implemented a responsive design, ensuring our storefront looks great on devices of all sizes.

## Key Features

Our custom Shopify storefront includes a variety of features designed to provide a seamless and enjoyable shopping experience:

- **Featured Collections**: Our storefront prominently displays featured collections, allowing customers to quickly find and browse your top product collections.

  ![responsive-homepage-mockup](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/8a7bb3f4-4daa-4711-97e7-d889ed020a17)

- **Product Listing**: We provide a clean and organized product listing, making it easy for customers to browse and select products.

  ![Product Listing - 1](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/fb2b0863-ee9e-4ec9-b898-ecf665a2af4b)
  ![Product Listing - 2](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/4ddae450-17f8-441d-b7f8-3b8924464c6d)

- **Cart Management**: Our cart management system allows customers to easily add products to their cart, view their cart contents, and modify quantities or remove items as needed. This feature is designed to be intuitive and user-friendly, providing customers with a clear overview of their potential purchases.

  ![Cart Management-1](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/ab6cd730-7bdd-406e-9ce8-8b187d9cc22e)
  ![Cart Management-2](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/20ce27df-0321-484a-b90c-b201d92a2391)

- **Checkout Functionality**: We provide a secure and efficient checkout process. Customers can review their orders, choose their preferred shipping method, and make payments using a variety of options. Our checkout process is also designed to handle customer information securely, ensuring a safe shopping experience.

  ![Checkout Functionality](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/c97cd6af-6be1-4513-b2bc-0c23484d910a)

- **Robust User Authentication**: From signup to account activation, login, and password management, our fully functional user authentication ensures a secure and smooth user journey.

  ![Auth-account-activate](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/82b10c7f-7c61-4c5b-8958-caccfff964fb)

  ![Auth-forgot-password](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/abe38dec-db1f-4671-a518-da18fb4abfb8)

  ![Auth-login](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/f40db592-ce9f-44ab-be77-1afaf416d100)

  ![Auth-reset-password](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/0a35f17f-43e2-4669-acf2-a3e0dbbf4a2d)

  ![Auth-signup](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/eb9349fe-21c0-45d5-9a26-e5df14026cdb)

- **Multilingual Support**: Our platform is ready to speak your language. With built-in translations for English, Español, and French, we break down language barriers. Plus, our customization options allow for further language support, making global shopping a breeze.

  ![Multilingual Support](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/701caa9a-2f8e-4afc-8241-61133015fdf3)

- **Price Conversion**: Our visitors can effortlessly convert product prices into their local currency, making shopping a seamless experience no matter where they are in the world.

  ![Price Conversion](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/e33e089c-e13c-4561-a097-e7cdaf0a4884)

- **Intelligent Variant Selection**: Our online store offers an intelligent variant selection feature for products. If a customer selects a variant that is unavailable, the system automatically selects the first available option, preventing any shopping interruptions.

  ![Intelligent Variant Selection](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/918a0b2b-89ab-421b-9a94-f5e17b784c8a)

- **Dynamic Product Filtering**: Our collections page isn’t just a list. With dynamic filtering, customers can sort products by price range and other options, making their search for the perfect item quick and efficient.

  ![Dynamic Product Filtering](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/120ae3be-5077-407b-930d-03017273ac21)

- **Quick Search**: Instant results, no page reloads. Our quick search makes finding products faster and easier, enhancing the shopping experience.

  ![Ajax Quick Search - 1](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/ff93ea28-8ddd-4eab-a9b7-96094c2385fa)

  ![Ajax Quick Search - 2](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/d7400a24-7708-4ae8-a674-e0cf3feed0e6)

- **Newsletter Subscription**: Stay in the loop! Our newsletter feature allows customers to subscribe and receive regular updates about our latest products, special offers, and exclusive deals.

  ![Newsletter Subscription](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/9b3ccbc9-b45c-4d68-936a-e7f46a144b87)

- **Mega Menu**: Navigate with ease. Our mega menu offers a comprehensive overview of all our pages, making it easy for customers to find exactly what they’re looking for.

  ![Mega Menu](https://github.com/j-aloko/shoptsino-uploaded-images/assets/93955657/5d2f21a1-4ce6-46b8-a35f-3fc33022fde8)

## Performance Optimization

In the development of our custom Shopify storefront, we've strategically leveraged several performance optimization techniques provided by Next.js:

- **Server-Side Rendering (SSR)**: We utilize SSR to render pages on the server before sending them to the client, resulting in faster page loads and improved SEO.

- **Automatic Code Splitting**: We take advantage of Next.js's automatic code splitting feature, which splits the code into smaller chunks that are only loaded when needed, reducing the initial load time.

- **Image Optimization**: We use the built-in Image component in Next.js to optimize images for different device sizes and support lazy loading, improving performance by loading images only when they enter the viewport.

- **Dynamic Imports**: We use dynamic imports to load modules only when they are required, reducing the size of the initial JavaScript bundle.

- **Caching**: We leverage both client-side and server-side caching to reduce network requests and improve performance.

- **Client-Side Rendering**: We use partial hydration, or client-side rendering, to boost performance by only rendering parts of the page that are needed.

## Conclusion

This document provides a comprehensive overview of our custom Shopify storefront. If you have any further questions or need assistance, please feel free to contact us at waynegreen344@gmail.com.

# Onboarding Support

We understand that setting up a new storefront can be a complex process, especially if you're new to Next.js or Shopify's APIs. That's why we offer onboarding support to all clients who purchase our custom storefront.

Our onboarding support includes:

- **Setup Assistance**: We'll guide you through the process of setting up the storefront on your server, including configuring the necessary environment variables and deploying the application.

- **Feature Walkthrough**: We'll provide a detailed walkthrough of all the features of our storefront, explaining how each feature works and how it can be customized to suit your needs.

- **Shopify API Integration**: We'll assist you in integrating the storefront with your Shopify store, ensuring that product listing, cart management, and checkout functionality are all working seamlessly.

- **Ongoing Support**: Even after the onboarding process, we'll be available to provide ongoing support and answer any questions you may have.

Please feel free to contact us at waynegreen344@gmail.com for any queries or assistance.

## Technical Requirements

Before running this application, make sure you have the following prerequisites:

- **Node.js**: You should have the latest stable version of Node.js installed. You can download it from Node.js official [website](https://nodejs.org/en/download/).

- **npm or Yarn**: These are Node.js package managers used for managing project dependencies. npm is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer. Yarn is an alternative to npm. You can download Yarn from Yarn official website.

- **Environment Variables**: Set up the following environment variables in a `.env.local` file. You can use the provided `.env.local.example` file as a template:

  - **HOST**: The domain URL of the hosted app.
  - **SHOPIFY_STORE_DOMAIN** and **NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN**: Your default Shopify domain.
  - **NEXT_PUBLIC_NAME_STORE_NAME**: The name of your store.
  - **NEXT_PUBLIC_ALTERNATE_STORE_NAME**: An alternate name or initials for your store.
  - **NEXT_PUBLIC_STORE_EMAIL**: The email address for your store.
  - **SHOPIFY_API_VERSION**: The version of the Shopify API you're using.
  - **SHOPIFY_STOREFRONT_ACCESS_TOKEN** and **SHOPIFY_ADMIN_ACCESS_TOKEN**: Your Shopify storefront and admin access tokens, respectively.
  - **NEXT_PUBLIC_NEWSLETTER_MODAL_OPEN_TIME**: The time it takes in milliseconds for the newsletter alert modal to display.

Please ensure that you have these prerequisites and environment variables correctly set up before running the application. If you encounter any issues or need further assistance, please don't hesitate to contact us.

# Getting Local Server Started

First, run the development server:

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

# Deploying App on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

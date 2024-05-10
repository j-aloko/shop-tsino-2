# Custom Shopify Storefront

Welcome to the documentation for our custom Shopify storefront. This storefront is a robust and feature-rich e-commerce solution built using Next.js and Shopify's GraphQL APIs. It offers a unique shopping experience, with features like multilingual support, price conversion, intelligent variant selection, dynamic product filtering, and much more.

Our storefront is designed to be highly customizable and easy to use, with a clean and organized codebase that promotes reusability and maintainability. It leverages several performance optimization techniques provided by Next.js, ensuring a fast and smooth user experience.

In this documentation, you'll find detailed information about the storefront's architecture, key features, codebase structure, and more. We also provide comprehensive onboarding support, including training sessions, technical support, and regular updates.

Whether you're a developer looking to customize the storefront or a store owner wanting to understand how it works, this documentation is here to guide you.

# Documentation

## Introduction

This document provides an overview of our custom Shopify storefront, which leverages the power of Next.js and Shopify's GraphQL APIs to deliver a unique and optimized shopping experience.

## Technologies Used

Our storefront is built using **Next.js**, a popular React framework that enables features like server-side rendering and static site generation. We also use [Shopify's Storefront](https://shopify.dev/docs/api/storefront) and [Admin GraphQL APIs](https://shopify.dev/docs/api/admin-graphql) to fetch and manage data directly from Shopify. Other technologies used include Redux Toolkit for state management, Material-UI for UI components, and next-i18next for translating static resources.

## Architecture

The architecture of our storefront is designed to maximize the benefits of Next.js and Shopify's APIs. Next.js handles the frontend, rendering our React components and serving our pages, while Shopify's APIs are used to fetch and manage data.

## Codebase Structure

Our codebase is meticulously structured to promote both reusability and maintainability:

- **Components Directory**: This is where all reusable UI components are stored. Each component is designed to be stateless and only takes props, ensuring maximum reusability across different parts of the application.

- **Containers Directory**: This directory houses the state management logic, hooks, custom hooks, and API interactions. Containers are responsible for fetching data and managing state, which are then passed as props to components. This separation of concerns allows our components to remain clean and focused on presentation.

- **Hooks Directory**: All custom hooks are stored in this directory. These hooks encapsulate complex logic, such as state management and side effects, into reusable functions. This helps to keep our components clean and focused on rendering.

- **Services Directory**: This is where we manage our Redux state and asynchronous middleware with Redux Toolkit. It also contains the implementations for interacting with Shopify's Storefront and Admin GraphQL APIs. By isolating these services, we ensure that any changes to our data fetching logic or state management don't affect the rest of the codebase.

- **Public/Locales Directory**: This directory stores translations of static resources in English, Spanish (Espanol), and French. These translations allow us to easily internationalize our storefront. Additional languages can be added as needed.

- **Theme Directory**: This directory is dedicated to customizing the application's theme. It includes all the necessary configurations for typography, color schemes, and other stylistic elements. This centralized approach to styling makes it easy to maintain a consistent look and feel across the entire application.

## Styling and Responsive Design

Styling is handled using a combination of Material-UI, react-bootstrap for carousel, and traditional CSS. We've also implemented a responsive design, ensuring our storefront looks great on devices of all sizes.

## Key Features

Our custom Shopify storefront includes a variety of features designed to provide a seamless and enjoyable shopping experience:

- **Featured Collections**: Our storefront prominently displays featured collections, allowing customers to quickly find and browse your top product collections.
  ![responsive-homepage-mockup](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/738d05ad-1b67-49a9-a567-b5c776911511)

- **Product Listing**: We provide a clean and organized product listing, making it easy for customers to browse and select products.
  ![Product Listing - 1](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/56798ec6-6cd8-457b-9edc-e3972467a987)
  ![Product Listing - 2](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/ba878c64-e57b-43fd-8797-6c5a99fb517a)

- **Cart Management**: Our cart management system allows customers to easily add products to their cart, view their cart contents, and modify quantities or remove items as needed. This feature is designed to be intuitive and user-friendly, providing customers with a clear overview of their potential purchases.
  ![Cart Management-1](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/f1905a5f-09b8-4662-912c-8e591e839d8f)
  ![Cart Management-2](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/82fb26b0-363a-4b80-91ad-c0ec394557ef)

- **Checkout Functionality**: We provide a secure and efficient checkout process. Customers can review their orders, choose their preferred shipping method, and make payments using a variety of options. Our checkout process is also designed to handle customer information securely, ensuring a safe shopping experience.
  ![Checkout Functionality](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/8a1b5c9b-a3de-46ef-982a-d11f986715d8)

- **Robust User Authentication**: From signup to account activation, login, and password management, our fully functional user authentication ensures a secure and smooth user journey.
  ![Auth-account-activate](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/c3d212ed-65ec-4b51-b5d1-673623042aba)
  ![Auth-forgot-password](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/c5886ed8-0b0a-4692-ab52-b6aeb6b8c062)
  ![Auth-login](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/1b5a2e98-6010-4c77-a37d-0c3d4ae34543)
  ![Auth-reset-password](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/9ec1806c-c756-47bc-9d20-65b028e28f30)
  ![Auth-signup](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/4ea7e243-6c4b-4e51-8bd4-394750c52210)

- **Multilingual Support**: Our platform is ready to speak your language. With built-in translations for English, Español, and French, we break down language barriers. Plus, our customization options allow for further language support, making global shopping a breeze.
  ![Multilingual Support](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/49755f61-88fd-4fd3-b118-8992d00fcc43)

- **Price Conversion**: Our visitors can effortlessly convert product prices into their local currency, making shopping a seamless experience no matter where they are in the world.
  ![Price Conversion](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/7bddc3f8-fecd-4c50-99ad-e85e9f4b7d60)

- **Intelligent Variant Selection**: Our online store offers an intelligent variant selection feature for products. If a customer selects a variant that is unavailable, the system automatically selects the first available option, preventing any shopping interruptions.
  ![Intelligent Variant Selection](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/eecb7104-5a23-47c4-a440-e2142aefc4d3)

- **Dynamic Product Filtering**: Our collections page isn’t just a list. With dynamic filtering, customers can sort products by price range and other options, making their search for the perfect item quick and efficient.
  ![Dynamic Product Filtering](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/f696a39c-5625-4d36-abee-48c6d02a4487)

- **Quick Search**: Instant results, no page reloads. Our quick search makes finding products faster and easier, enhancing the shopping experience.
  ![Ajax Quick Search - 1](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/6d0f86cc-5cb5-4188-b2b1-ed3822a32298)
  ![Ajax Quick Search - 2](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/91aebeee-0112-4b1a-9d9c-ca6089916a6e)

- **Newsletter Subscription**: Stay in the loop! Our newsletter feature allows customers to subscribe and receive regular updates about our latest products, special offers, and exclusive deals.
  ![Newsletter Subscription](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/03a4420e-6ac2-4752-8ef8-42499edb4e75)

- **Mega Menu**: Navigate with ease. Our mega menu offers a comprehensive overview of all our pages, making it easy for customers to find exactly what they’re looking for.
  ![Mega Menu](https://github.com/j-aloko/shopify-custom-storefronts/assets/93955657/867aa321-e3d5-4cf4-8732-fe58b76d7d93)

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

# Getting Server Started

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

# Deploying on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

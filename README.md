# Tour India - South India Tourism Website

Welcome to **Tour India**, a premium travel website dedicated to showcasing the vibrant culture, heritage, and landscapes of South India. This project is built with modern web technologies to provide a seamless and immersive user experience.

## 🚀 Features

*   **Immersive Hero Section**: Captivating visual introduction with smooth navigation.
*   **Featured Packages**: Curated travel packages displaying destinations like Goa, Kerala, and Hampi.
*   **Interactive Gallery**: A visual journey through photos and videos with a lightbox view.
*   **Client Testimonials**: Animated carousel sharing reviews from happy travelers.
*   **Contact Form**: Fully functional enquiry form that sends details directly to your email (via Nodemailer).
*   **WhatsApp Integration**: A global "Chat with Us" floating button for instant communication.
*   **Responsive Design**: Fully optimized browsing experience across Mobile, Tablet, and Desktop.
*   **Smooth Animations**: Engaging UI transitions powered by Framer Motion.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Notifications**: Sonner (Toast notifications)
*   **Email Service**: Nodemailer (Gmail SMTP)
*   **Deployment**: Vercel (Recommended)

## 🏁 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Manushprajwal7/tour-india.git
    cd tour-india
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    To enable the email enquiry feature, you need to configure your email credentials. Create a `.env.local` file in the root directory:

    ```bash
    touch .env.local
    ```

    Add the following variables to `.env.local`:
    ```env
    EMAIL_USER=tourindia.murugan@gmail.com
    EMAIL_PASS=your-gmail-app-password
    ```
    > **Note:** For Gmail, you must use an **App Password** generated from your Google Account Security settings. Do not use your regular login password.

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

*   `app/`: Contains the main application routes, layout, and page logic.
*   `app/actions/`: Server actions for backend logic (e.g., sending emails).
*   `components/`: Reusable UI components (Hero, Gallery, Contact Form, etc.).
*   `public/`: Static assets such as images and icons.
*   `lib/`: Helper functions and static data sets.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Manushprajwal7/tour-india/issues).

## 📄 License

This project is licensed under the MIT License.

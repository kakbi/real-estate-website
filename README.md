# 🏠 Real Estate Website

This is a project for a real estate website, featuring a **property gallery** with detailed information, including **price**, **size**, and **location**.  
The website also includes a **homepage** with a carousel and a **contact page** with a map showing the **main office** and **properties for sale/rent**.

---

## Getting Started

These instructions will help you get your project up and running locally.

---

## Prerequisites

Before you start, ensure you have the following installed:

-   **Node.js** (LTS version recommended)
-   **npm** (comes with Node.js)

To check if you already have them installed, run the following commands:

```bash
node -v
npm -v
```

If not, [download and install Node.js](https://nodejs.org/) from the official website.

---

## Installation

1. **Clone the repository**  
   Open a terminal and run:

    ```bash
    git clone <repository_url>
    ```

    Replace `<repository_url>` with the URL of the repository.

2. **Navigate to the project directory**

    ```bash
    cd <project_directory>
    ```

    Replace `<project_directory>` with the name of your project folder.

3. **Install dependencies**  
   Once inside the project folder, run:

    ```bash
    npm install
    ```

---

## Scripts

Make sure your `package.json` includes the following scripts:

```json
"scripts": {
  "scss": "sass --watch src/scss:src/css",
  "lint": "eslint . --ext .js && stylelint \"src/scss/**/*.scss\""
}
```

---

## Sass Compilation

This project uses **Sass** for styling.

To compile `.scss` files into `.css`, run:

```bash
npm run scss
```

This will watch for changes in the `src/scss/` folder and generate corresponding CSS files in `src/css/`.

---

## Linting

To ensure code quality, the project uses:

-   **ESLint** for JavaScript
-   **Stylelint** for SCSS

Run lint checks using:

```bash
npm run lint
```

---

## Running the Project

You can use **Live Server** to run this project locally.

### Steps:

1. Open **Visual Studio Code**
2. Go to the **Extensions** panel and search for **Live Server**
3. Install **Live Server**

Then:

-   Open the file `src/main.html`
-   In the **bottom-right corner** of VSCode, click **Go Live**
-   The project will open in your browser, typically at:

```
http://127.0.0.1:5501/src/main.html
```

---

## Features

### Homepage

-   **Header** with **menu** and **submenu**
-   A **carousel** displaying property images, automatically changing every **5 seconds**
-   **Mobile-friendly navigation** for smaller devices

### Gallery Page

-   **Property cards** showing key info: price, size, location, amenities
-   **Pagination** to navigate multiple pages of properties
-   **Sorting and filtering** by:
    -   Type
    -   Price range
    -   Size

### Contact Page

-   **Interactive map** with:
    -   Main office location
    -   Properties for sale/rent

### Responsive Design

-   The entire project is **responsive** and optimized for **various screen sizes**

---

## Plans for Improvement

In the future, I plan to:

-   **Refactor** the code to improve structure and readability
-   **Optimize image handling**, since image-heavy projects tend to consume a lot of space/resources. The images will be removed from the repository as they were only included for demo purposes.

    ### Possible solutions:

    -   **Image compression**: Reduce file sizes to speed up loading
    -   **Move images to a server**: Offload assets from the client to improve performance and scalability

-   **Restructure the project’s file system** for better organization and maintainability:

    ### Ideas for restructuring:

    -   Split JavaScript into **reusable modules**
    -   Use **SCSS partials** and **modular imports**
    -   Separate **assets**, **components**, and **utilities**

These changes will make the project more efficient, easier to maintain, and ready for future scaling.

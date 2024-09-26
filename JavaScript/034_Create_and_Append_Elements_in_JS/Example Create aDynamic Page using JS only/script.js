// Select the body element
const documentBody = document.body;

// Function to create and append the header with navigation bar
const createHeaderSection = () => {
    // Create header and navigation container
    const headerSection = document.createElement("header");
    const navigationBar = document.createElement("div");
    navigationBar.setAttribute("class", "navbar");

    // Create logo link
    const logoLink = document.createElement("a");
    logoLink.setAttribute("class", "logo");
    logoLink.setAttribute("href", "/index.html");
    logoLink.textContent = "M7-TROJAN";

    // Create navigation list (ul) and items (li)
    const navigationList = document.createElement('ul');
    const navigationItems = ['Home', 'About', 'Contact'];

    navigationItems.forEach(itemName => {
        const listItem = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.setAttribute("href", `#${itemName.toLowerCase()}`);
        navLink.textContent = itemName;
        listItem.appendChild(navLink);
        navigationList.appendChild(listItem);
    });

    // Append logo and nav list to navigation bar, and then to the header section
    navigationBar.appendChild(logoLink);
    navigationBar.appendChild(navigationList);
    headerSection.appendChild(navigationBar);

    // Append the header section to the document body
    documentBody.appendChild(headerSection);
};

// Function to create and append the main content section with user cards
const createMainContentSection = () => {
    const mainContentSection = document.createElement("section");
    mainContentSection.setAttribute("class", "main-content");

    // Generate 100 user cards
    for (let userIndex = 0; userIndex < 100; userIndex++) {
        const userCard = document.createElement("div");
        userCard.setAttribute("class", "card");

        // Create and add the user name header (h2) and age content (p)
        const userNameHeader = document.createElement("h2");
        userNameHeader.textContent = `User ${userIndex + 1}`;

        const userAgeParagraph = document.createElement("p");
        userAgeParagraph.textContent = "Age: ";

        const userAgeValue = document.createElement("span");
        userAgeValue.textContent = 20 + (userIndex + 1);
        userAgeParagraph.appendChild(userAgeValue);

        // Append header and paragraph to the user card, and card to main content section
        userCard.appendChild(userNameHeader);
        userCard.appendChild(userAgeParagraph);
        mainContentSection.appendChild(userCard);
    }

    // Append the main content section to the document body
    documentBody.appendChild(mainContentSection);
};

// function to style the page content
function addGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }

        ul li {
            margin-left: 20px;
        }

        ul li a {
            text-decoration: none;
            color: white;
            padding: 10px;
            font-size: 18px;
            transition: background-color 0.3s ease;
        }

        ul li a:hover {
            background-color: #555;
            border-radius: 5px;
        }

        .main-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
            gap: 20px;
        }

        .card {
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 200px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
            text-align: center;
        }

        .card:hover {
            transform: scale(1.05);
        }

        .card h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 10px;
        }

        .card p {
            font-size: 16px;
            color: #666;
        }

        .card p span {
            font-weight: bold;
            color: #333;
        }
    `;
    document.head.appendChild(style);
}

// Call the functions
createHeaderSection();
createMainContentSection();
addGlobalStyles();

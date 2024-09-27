// Apply background to body
document.body.style.background = "#ecf0f3";

// Function to apply multiple styles to an element
function applyStyles(element, styles) {
  Object.assign(element.style, styles);
}

// Function to create and return a styled element
function createElement(tag, className = "", styles = {}) {
  const element = document.createElement(tag);
  element.className = className;
  applyStyles(element, styles);
  return element;
}

// Function to attach clone event to card button
function attachCloneEvent(cardElement) {
  const button = cardElement.querySelector(".clone-btn");
  button.addEventListener("click", () => {
    cloneCounter++;
    const newClone = cardElement.cloneNode(true);
    newClone.className = `item item-${cloneCounter}`;
    const order = newClone.querySelector("span");
    order.textContent = cloneCounter;
    container.appendChild(newClone);
    attachCloneEvent(newClone); // Reattach event listener for the cloned button
  });
}

// Constants for common styles
const commonCardStyles = {
  background: "#fff",
  padding: "1.5rem",
  marginBottom: "1rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// Header creation and styling
const header = createElement("section", "header", {
  width: "100%",
  background: "#fff",
  padding: "10px 0",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});
document.body.appendChild(header);

// Navbar creation
const navbar = createElement("div", "navbar", {
  maxWidth: "1100px",
  padding: "0 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "auto",
});
header.appendChild(navbar);

// Logo creation
const logo = createElement("a", "logo", {
  color: "#033b4a",
  fontSize: "24px",
  fontWeight: "600",
  textDecoration: "none",
});
logo.textContent = "M7-TROJAN";
navbar.appendChild(logo);

// Navigation menu creation
const nav = createElement("nav");
const menu = createElement("ul", "", {
  listStyle: "none",
  display: "flex",
  padding: 0,
  margin: 0,
});
navbar.appendChild(nav);
nav.appendChild(menu);

// Array of menu items
const listItems = ["Home", "About", "Services", "Contact"];
listItems.forEach(item => {
  const li = createElement("li");
  const link = createElement("a", "", {
    marginRight: "15px",
    color: "#033b4a",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    padding: "5px 10px",
  });
  link.setAttribute("href", `#${item.toLowerCase()}`);
  link.textContent = item;
  li.appendChild(link);
  menu.appendChild(li);
});

// Remove margin-right from last menu item
menu.lastElementChild.firstElementChild.style.marginRight = "0";

// Add hover effect to menu links
const navLinks = menu.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#0298d1";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "#033b4a";
  });
});

// Home section creation
const home = createElement("section", "home", {
  height: "100vh",
  marginTop: "10px",
});
home.setAttribute("id", "home");
document.body.appendChild(home);

// Container creation for cards
const container = createElement("div", "container", {
  maxWidth: "1100px",
  padding: "0 2rem",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});
home.appendChild(container);

// Initial card creation
const card = createElement("div", "item item-1", commonCardStyles);
container.appendChild(card);

// Order number inside card
const order = createElement("span", "", {
  display: "block",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: "#033b4a",
});
order.textContent = 1;
card.appendChild(order);

// Add product name to card
card.append("Product");

// Create clone button inside card
const button = createElement("button", "clone-btn", {
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#0298d1",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
});
button.textContent = "Click to Clone";
card.appendChild(button);

// Clone counter
let cloneCounter = 1;

// Handle initial card clone button event
button.addEventListener("click", () => {
  cloneCounter++;
  const clonedCard = card.cloneNode(true);
  clonedCard.className = `item item-${cloneCounter}`;
  const order = clonedCard.querySelector("span");
  order.textContent = cloneCounter;
  container.appendChild(clonedCard);
  attachCloneEvent(clonedCard);
});

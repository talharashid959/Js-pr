async function getUser() {
  try {
    const response = await fetch("https://api.github.com/users?per_page=100");

    const data = await response.json();

    const parent = document.getElementById("first");

    for (let user of data) {
      const element = document.createElement("div");
      element.classList.add("user");

      const image = document.createElement("img");
      image.src = user.avatar_url;
      image.alt = user.login;

      const username = document.createElement("h2");
      username.textContent = user.login;

      const profileLink = document.createElement("a");
      profileLink.href = user.html_url;
      profileLink.textContent = "View Profile";
      profileLink.target = "_blank";

      element.append(image, username, profileLink);
      parent.append(element);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUser();

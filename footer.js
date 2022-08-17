export default function Navigation() {
  const buttonHome = document.querySelector('[data-nav="home"]');
  const buttonBookmark = document.querySelector('[data-nav="bookmark"]');
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');
  const headline = document.querySelector("[data-js=headline]");

  const pageHome = document.querySelector('[data-page="home"]');
  const pageBookmark = document.querySelector('[data-page="bookmark"]');
  const pageCreate = document.querySelector('[data-page="create"]');
  const pageProfile = document.querySelector('[data-page="profile"]');

  buttonHome.addEventListener("click", () => {
    pageHome.classList.remove("hidden");
    pageBookmark.classList.add("hidden");
    pageCreate.classList.add("hidden");
    pageProfile.classList.add("hidden");
    headline.textContent = "Kanji 漢字";
  });

  buttonBookmark.addEventListener("click", () => {
    pageBookmark.classList.remove("hidden");
    pageHome.classList.add("hidden");
    pageCreate.classList.add("hidden");
    pageProfile.classList.add("hidden");
    headline.innerText = "Bookmarks";
  });

  buttonCreate.addEventListener("click", () => {
    pageCreate.classList.remove("hidden");
    pageBookmark.classList.add("hidden");
    pageHome.classList.add("hidden");
    pageProfile.classList.add("hidden");
    headline.textContent = "Create";
  });

  buttonProfile.addEventListener("click", () => {
    pageProfile.classList.remove("hidden");
    pageCreate.classList.add("hidden");
    pageHome.classList.add("hidden");
    pageBookmark.classList.add("hidden");
    headline.textContent = "Profile";
  });
}

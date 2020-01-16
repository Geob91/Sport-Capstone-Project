function createListHTML(links) {
  return links
    .map(
      link =>
        `<li class="button"><a href="./${link.toLowerCase()}" data-navigo>${link}</a></li>`
    )
    .join("");
}

export default st => `
<nav>
  <ul>
  ${createListHTML(st)}
  </ul>
</nav>`;

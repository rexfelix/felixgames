document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      title: "CandyPang",
      image: "games/CandyPang_webGL/icon.png",
      description:
        "CandyPang is a game where you pop three or more candies of the same color in a line. Special candies pop all candies that are the same candy type as the selected neighbor.",
      url: "games/CandyPang_webGL/index.html",
    },
    // 여기에 추가 게임 정보를 넣으세요
  ];

  const gridContainer = document.querySelector(".grid-container");

  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title} 대표 이미지">
      <h3>${game.title}</h3>
      <p>${game.description}</p>    
    `;
    card.addEventListener("click", () => {
      window.open(game.url, "_blank");
    });

    gridContainer.appendChild(card);
  });
});

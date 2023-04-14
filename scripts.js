document.addEventListener("DOMContentLoaded", () => {
    const games = [
        {
            title: "Chick Ball",
            image: "games/ChickBallWeb/icon.png",
            description: "Chick Ball은 Egg를 쳐내는 게임입니다.\n테스트용",
            url: "games/ChickBallWeb/index.html",
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

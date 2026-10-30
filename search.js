const searchInput = document.getElementById("diagramSearch");
const searchMessage = document.getElementById("searchMessage");

const diagramCards = document.querySelectorAll(".diagram-card");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchValue = this.value.trim().toLowerCase();
        let visibleCount = 0;

        diagramCards.forEach(function (card) {
            const name = card.querySelector("h3")?.textContent || "";

            const categories = Array.from(
                card.querySelectorAll(".bubble")
            )
                .map(function (bubble) {
                    return bubble.textContent;
                })
                .join(" ");

            const searchableText = (
                name + " " + categories
            ).toLowerCase();

            if (searchableText.includes(searchValue)) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (searchValue === "") {
            searchMessage.textContent = "";
        } else if (visibleCount === 0) {
            searchMessage.textContent =
                "لم يتم العثور على مخططات مطابقة.";
        } else {
            searchMessage.textContent =
                `تم العثور على ${visibleCount} مخطط.`;
        }
    });
}
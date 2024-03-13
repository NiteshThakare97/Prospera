
const sectionContainers = document.querySelectorAll('.section');

sectionContainers.forEach(sectionContainer => {
    const loadMoreBtn = sectionContainer.querySelector('.load-more');
    const boxes = sectionContainer.querySelectorAll('.box');
    const boxesToShowInitially = BboxesToShowInitially;
    let isHiddenVisible = false;

    if (boxes.length <= boxesToShowInitially) {
        loadMoreBtn.style.display = 'none';
    } else {
        boxes.forEach((box, boxIndex) => {
            if (boxIndex >= boxesToShowInitially) {
                box.classList.add('hidden');
            }
        });
    }

    loadMoreBtn.addEventListener('click', () => {
        boxes.forEach((box, boxIndex) => {
            if (boxIndex >= boxesToShowInitially) {
                box.classList.toggle('hidden');
            }
        });

        if (isHiddenVisible) {
            loadMoreBtn.textContent = 'Load More';
        } else {
            loadMoreBtn.textContent = 'Show Less';
        }

        isHiddenVisible = !isHiddenVisible;
    });
});
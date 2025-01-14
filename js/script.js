// 音乐搜索功能
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const musicItems = document.querySelectorAll('.music-item');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    musicItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
            highlightText(item, searchTerm);
        } else {
            item.style.display = 'none';
        }
    });
});

function highlightText(element, term) {
    const regex = new RegExp(`(${term})`, 'gi');
    element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$1</span>');
}

// 初始化
searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        musicItems.forEach(item => {
            item.style.display = 'block';
            item.innerHTML = item.textContent;
        });
    }
});

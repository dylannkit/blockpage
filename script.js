const params = new URLSearchParams(window.location.search);

const category = params.get('category');
const group = params.get('group');
const url = params.get('url');

if (category) {
    document.getElementById('categoryRow').classList.remove('hidden-row');
    document.getElementById('categoryValue').textContent = category;
}

if (group) {
    document.getElementById('groupRow').classList.remove('hidden-row');
    document.getElementById('groupValue').textContent = group;
}

if (url) {
    document.getElementById('urlRow').classList.remove('hidden-row');
    document.getElementById('urlValue').textContent = url;
}
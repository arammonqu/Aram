// State Management
let playlists = []; // Array of { name, videos: [] }
let currentPlaylist = null;
let activeVideoId = null;
let player = null;

// DOM Elements
const playlistList = document.getElementById('playlist-list');
const currentPlaylistName = document.getElementById('current-playlist-name');
const homeView = document.getElementById('home-view');
const homeNav = document.getElementById('home-nav');
const playerLayout = document.getElementById('player-layout');
const nextUpList = document.getElementById('next-up-list');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const emptyState = document.getElementById('empty-state');
const playerWrapper = document.getElementById('player-wrapper');
const playerContainer = document.getElementById('player-section');

// YouTube IFrame API initialization
function onYouTubeIframeAPIReady() {
    // Player will be initialized when a playlist is selected
}

// Helper: Extract Playlist or Video ID from URL
function extractYtId(input) {
    // Playlist ID
    const plMatch = input.match(/[?&]list=([^#&?]+)/);
    if (plMatch) return { id: plMatch[1], type: 'playlist' };
    
    // Short URL youtu.be/ID
    const shortMatch = input.match(/youtu\.be\/([^#&?]+)/);
    if (shortMatch) return { id: shortMatch[1], type: 'video' };
    
    // Standard URL watch?v=ID
    const videoMatch = input.match(/[?&]v=([^#&?]+)/);
    if (videoMatch) return { id: videoMatch[1], type: 'video' };

    return { id: input.trim(), type: 'playlist' }; // Fallback
}

// Render Sidebar
function renderSidebar() {
    playlistList.innerHTML = '';
    playlists.forEach((pl, index) => {
        const li = document.createElement('li');
        li.className = `nav-item ${currentPlaylist === pl ? 'active' : ''}`;
        li.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
            <span>${pl.name}</span>
        `;
        li.onclick = () => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            li.classList.add('active');
            currentPlaylist = pl;
            openPlaylist(pl);
        };
        playlistList.appendChild(li);
    });
}

// Render Home View (Playlists)
function renderHome() {
    homeView.innerHTML = '';
    playlists.forEach((pl, index) => {
        const card = document.createElement('div');
        card.className = 'playlist-card';
        
        // Use thumbnail of the first video in the playlist
        const firstVideo = pl.videos[0];
        const thumbUrl = firstVideo 
            ? `https://img.youtube.com/vi/${firstVideo.id}/mqdefault.jpg`
            : `https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=300&h=168&auto=format&fit=crop`;

        card.innerHTML = `
            <div class="card-thumb">
                <img src="${thumbUrl}" alt="${pl.name}">
                <div class="card-overlay"></div>
                <div class="play-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </div>
            </div>
            <div class="card-info">
                <div class="card-type">Playlist (${pl.videos.length} videos)</div>
                <div class="card-title">${pl.name}</div>
            </div>
        `;
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = () => openPlaylist(pl);
        homeView.appendChild(card);
    });
}

// Open a specific playlist (Show its videos)
function openPlaylist(pl) {
    if (!pl || !pl.videos || pl.videos.length === 0) return;
    
    // Select the first video but do not autoplay
    selectVideo(pl.videos[0], pl, false);
}

// Navigation Logic
if (homeNav) {
    homeNav.onclick = () => {
        currentPlaylist = null;
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        homeNav.classList.add('active');
        showView('home');
        renderHome();
    };
}

function showView(view) {
    if (view === 'home') {
        homeView.style.display = 'grid';
        
        if (playerLayout.classList.contains('mini-mode')) {
            // Keep player visible in mini-mode
            playerLayout.style.display = 'flex';
        } else {
            // Hide player and stop video by clearing iframe
            playerLayout.style.display = 'none';
            const playerDiv = document.getElementById('youtube-player');
            if (playerDiv) playerDiv.innerHTML = ''; 
        }
        
        if (!currentPlaylist) {
            currentPlaylistName.textContent = 'Home';
        }
    } else {
        homeView.style.display = 'none';
        playerLayout.style.display = 'flex';
    }
}

// Global Search
searchInput.oninput = (e) => {
    const query = e.target.value.toLowerCase();
    clearSearchBtn.style.display = query ? 'block' : 'none';
    
    if (!query) {
        if (!currentPlaylist) renderHome();
        else openPlaylist(currentPlaylist);
        return;
    }

    homeView.innerHTML = '';
    showView('home');
    currentPlaylistName.textContent = `Search: ${query}`;

    playlists.forEach(pl => {
        const matches = pl.videos.filter(v => v.name.toLowerCase().includes(query));
        matches.forEach((video, index) => {
            const card = document.createElement('div');
            card.className = 'playlist-card';
            const thumbUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

            card.innerHTML = `
                <div class="card-thumb">
                    <img src="${thumbUrl}" alt="${video.name}">
                    <div class="card-overlay"></div>
                    <div class="play-badge">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
                <div class="card-info">
                    <div class="card-type">${pl.name}</div>
                    <div class="card-title">${video.name}</div>
                </div>
            `;
            card.style.animationDelay = `${index * 0.05}s`;
            card.onclick = () => selectVideo(video, pl);
            homeView.appendChild(card);
        });
    });
};

clearSearchBtn.onclick = () => {
    searchInput.value = '';
    searchInput.oninput({ target: searchInput });
};

// Select Video to Play
function selectVideo(video, pl, autoplay = true) {
    activeVideoId = video.id;
    currentPlaylist = pl;
    currentPlaylistName.textContent = video.name;
    
    // Exit mini mode when playing a new video
    playerLayout.classList.remove('mini-mode');
    
    showView('player');
    
    emptyState.style.display = 'none';
    playerWrapper.style.display = 'block';

    renderNextUp(video, pl);

    const playerDiv = document.getElementById('youtube-player');
    if (!playerDiv) return;

    const autoPlayParam = autoplay ? '1' : '0';

    if (video.type === 'playlist') {
        playerDiv.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=${video.id}&autoplay=${autoPlayParam}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        playerDiv.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video.id}?autoplay=${autoPlayParam}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

function renderNextUp(activeVideo, pl) {
    nextUpList.innerHTML = '';
    if (!pl || !pl.videos) return;

    const currentIndex = pl.videos.indexOf(activeVideo);
    
    pl.videos.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = `next-item ${video.id === activeVideo.id ? 'active' : ''}`;
        const thumbUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

        item.innerHTML = `
            <img class="next-thumb" src="${thumbUrl}">
            <div class="next-info">
                <div class="next-name">${video.name}</div>
                <div class="card-type">${index === currentIndex ? 'Playing Now' : 'Up Next'}</div>
            </div>
        `;
        item.onclick = () => selectVideo(video, pl);
        nextUpList.appendChild(item);
    });
}

// Removed onPlayerStateChange since we are using a standard iframe now.
// Note: Auto-playing the next video is disabled in file:// environments due to CORS blocking iframe API events.

// Mini Mode Toggle
window.toggleMiniMode = function() {
    playerLayout.classList.toggle('mini-mode');
};

window.setTheme = function(color) {
    document.documentElement.style.setProperty('--accent-color', color);
    document.documentElement.style.setProperty('--accent-glow', color + '66'); // add transparency
};

// Theater Mode Toggle
window.toggleTheater = function() {
    playerContainer.classList.toggle('theater-mode');
};

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;

    if (e.key.toLowerCase() === 'm') {
        toggleMiniMode();
    } else if (e.key.toLowerCase() === 't') {
        toggleTheater();
    } else if (e.code === 'Space') {
        // e.preventDefault(); // removed because we can't easily control standard iframe
    }
});

// Storage logic removed

// Modal Logic removed

const refreshBtn = document.getElementById('refresh-btn');
if (refreshBtn) {
    refreshBtn.onclick = () => {
        refreshBtn.classList.add('spinning');
        setTimeout(() => location.reload(), 300);
    };
}

// Load from window.LINKS_DATA
function loadLinksFromFile() {
    if (window.LINKS_DATA) {
        parseLinksText(window.LINKS_DATA);
    } else {
        console.warn('Could not load links.txt');
        showErrorPrompt("Error Loading Content", "Make sure your links.txt file contains 'window.LINKS_DATA = `' at the top and '`;' at the bottom.");
    }
    
    // Remove loading screen safely
    const loader = document.getElementById('loading-screen');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 800);
    }
}

function parseLinksText(text) {
    const lines = text.split('\n');
    
    playlists = [];
    let currentPl = null;

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // Check for Playlist Header (starts with # or [)
        if (trimmed.startsWith('#') || trimmed.startsWith('[')) {
            const name = trimmed.replace(/^[#\[\]]+|[\]]+$/g, '').trim();
            currentPl = { name, videos: [] };
            playlists.push(currentPl);
        } else if (trimmed.includes('|')) {
            const [vName, url] = trimmed.split('|').map(s => s.trim());
            const video = extractYtId(url);
            if (vName && video.id) {
                if (currentPl) {
                    currentPl.videos.push({ name: vName, ...video });
                } else {
                    // Fallback for videos before any header
                    const defaultPl = playlists.find(p => p.name === 'General');
                    if (defaultPl) {
                        defaultPl.videos.push({ name: vName, ...video });
                    } else {
                        const newPl = { name: 'General', videos: [{ name: vName, ...video }] };
                        playlists.push(newPl);
                        currentPl = newPl;
                    }
                }
            }
        }
    });

    if (playlists.length > 0) {
        renderSidebar();
        renderHome();
        showView('home');
    } else {
        showErrorPrompt("Empty File", "No valid links were found in your links.txt file. Please check the formatting.");
    }
}

function showErrorPrompt(title, msg) {
    showView('home');
    homeView.innerHTML = `
        <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; text-align: center; color: var(--text-secondary);">
            <div style="background: rgba(244, 63, 94, 0.1); padding: 24px; border-radius: 50%; margin-bottom: 24px;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </div>
            <h2 style="color: white; margin-bottom: 12px; font-weight: 800;">${title}</h2>
            <p style="margin-bottom: 32px; max-width: 450px; line-height: 1.6;">${msg}</p>
        </div>
    `;
}

// Initial Render
renderSidebar();
showView('home');
loadLinksFromFile();
if (playlists.length > 0) {
    // selectPlaylist(playlists[0].id, playlists[0].name);
}

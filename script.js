// Initial data with categories as an object
const initialData = {
    "watchlist": [
        { "title": "Breaking Bad", "seasons": 5, "episodes": 62, "totalWatchTime": "~62 hours", "imdbLink": "https://www.imdb.com/title/tt0903747/", "notes": "Really intense show!" },
        { "title": "Game of Thrones", "seasons": 8, "episodes": 73, "totalWatchTime": "~70 hours", "imdbLink": "https://www.imdb.com/title/tt0944947/", "notes": "Watch with friends" },
        { "title": "One Piece (Ongoing)", "seasons": "20+", "episodes": "1000+", "totalWatchTime": "~500+ hours", "imdbLink": "https://www.imdb.com/title/tt0388629/", "notes": "Long but worth it" },
        { "title": "Dark", "seasons": 3, "episodes": 26, "totalWatchTime": "~22 hours", "imdbLink": "https://www.imdb.com/title/tt5753856/", "notes": "Mind-bending plot" },
        { "title": "Harry Potter Series", "seasons": "-", "episodes": "8 movies", "totalWatchTime": "~20 hours", "imdbLink": "https://www.imdb.com/title/tt0241527/", "notes": "Family favorite" },
        { "title": "Transformers (Movies)", "seasons": "-", "episodes": "7 movies", "totalWatchTime": "~17 hours", "imdbLink": "https://www.imdb.com/title/tt0418279/", "notes": "Action-packed" },
        { "title": "Resident Evil (Live-Action)", "seasons": "-", "episodes": "7 movies", "totalWatchTime": "~12 hours", "imdbLink": "https://www.imdb.com/title/tt0120804/", "notes": "Scary but fun" },
        { "title": "Arrowverse (Live-Action & Animated)", "seasons": "Multiple", "episodes": 1006, "totalWatchTime": "~589 hours", "imdbLink": "https://www.imdb.com/title/tt2193021/", "notes": "Huge universe" },
        { "title": "DCAU Watch Order", "seasons": "Varies", "episodes": "~500+", "totalWatchTime": "~100+ hours", "imdbLink": "https://www.imdb.com/title/tt0105946/", "notes": "Classic animation" },
        { "title": "F.R.I.E.N.D.S", "seasons": 10, "episodes": 236, "totalWatchTime": "~89 hours", "imdbLink": "https://www.imdb.com/title/tt0108778/", "notes": "Funny show" },
        { "title": "Mushoku Tensei (Ongoing)", "seasons": 4, "episodes": 48, "totalWatchTime": "~19 hours", "imdbLink": "https://www.imdb.com/title/tt13293588/", "notes": "Great anime" }
    ],
    "arrowverse": [
        { "title": "Arrow", "seasons": 8, "episodes": 170, "totalWatchTime": "~120 hours", "imdbLink": "https://www.imdb.com/title/tt2193021/", "notes": "Started it all" },
        { "title": "The Flash", "seasons": 9, "episodes": 184, "totalWatchTime": "~130 hours", "imdbLink": "https://www.imdb.com/title/tt3107288/", "notes": "Fast-paced" },
        { "title": "Supergirl", "seasons": 6, "episodes": 126, "totalWatchTime": "~90 hours", "imdbLink": "https://www.imdb.com/title/tt4016454/", "notes": "Strong lead" },
        { "title": "Legends of Tomorrow", "seasons": 7, "episodes": 110, "totalWatchTime": "~80 hours", "imdbLink": "https://www.imdb.com/title/tt4532368/", "notes": "Funny team" },
        { "title": "Black Lightning", "seasons": 4, "episodes": 58, "totalWatchTime": "~45 hours", "imdbLink": "https://www.imdb.com/title/tt6045844/", "notes": "Unique story" },
        { "title": "Batwoman", "seasons": 3, "episodes": 51, "totalWatchTime": "~40 hours", "imdbLink": "https://www.imdb.com/title/tt8712204/", "notes": "Cool action" },
        { "title": "Superman & Lois", "seasons": 4, "episodes": "43+", "totalWatchTime": "~40+ hours", "imdbLink": "https://www.imdb.com/title/tt11192306/", "notes": "Family drama" },
        { "title": "Vixen (Animated)", "seasons": 2, "episodes": "12 (shorts)", "totalWatchTime": "~2 hours", "imdbLink": "https://www.imdb.com/title/tt5096864/", "notes": "Short but good" },
        { "title": "Freedom Fighters: The Ray", "seasons": 2, "episodes": "12 (shorts)", "totalWatchTime": "~2 hours", "imdbLink": "https://www.imdb.com/title/tt7168882/", "notes": "Animated fun" },
        { "title": "Constantine", "seasons": 1, "episodes": 13, "totalWatchTime": "~10 hours", "imdbLink": "https://www.imdb.com/title/tt3648416/", "notes": "Dark and gritty" },
        { "title": "Stargirl", "seasons": 3, "episodes": 39, "totalWatchTime": "~30 hours", "imdbLink": "https://www.imdb.com/title/tt8722888/", "notes": "Fresh story" }
    ],
    "DCAU": [
        { "title": "Batman: Mask of the Phantasm", "seasons": "-", "episodes": "1 Movie", "totalWatchTime": "~1.5 hours", "imdbLink": "https://www.imdb.com/title/tt0106364/", "notes": "Amazing movie" },
        { "title": "Batman: The Animated Series", "seasons": 2, "episodes": 85, "totalWatchTime": "~35 hours", "imdbLink": "https://www.imdb.com/title/tt0105946/", "notes": "Classic Batman" },
        { "title": "Batman & Mr. Freeze: SubZero", "seasons": "-", "episodes": "1 Movie", "totalWatchTime": "~1.5 hours", "imdbLink": "https://www.imdb.com/title/tt0143127/", "notes": "Cool story" },
        { "title": "Superman: The Animated Series", "seasons": 3, "episodes": 54, "totalWatchTime": "~20 hours", "imdbLink": "https://www.imdb.com/title/tt0115378/", "notes": "Great Superman" },
        { "title": "The New Batman Adventures", "seasons": 1, "episodes": 24, "totalWatchTime": "~10 hours", "imdbLink": "https://www.imdb.com/title/tt0118266/", "notes": "New style" },
        { "title": "Superman: TAS - 'World's Finest'", "seasons": "-", "episodes": "3 (Crossover)", "totalWatchTime": "~1 hour", "imdbLink": "https://www.imdb.com/title/tt0115378/", "notes": "Batman crossover" },
        { "title": "Justice League - 'Secret Origins'", "seasons": "-", "episodes": 3, "totalWatchTime": "~1 hour", "imdbLink": "https://www.imdb.com/title/tt0275137/", "notes": "Team begins" },
        { "title": "Justice League", "seasons": 2, "episodes": 52, "totalWatchTime": "~20 hours", "imdbLink": "https://www.imdb.com/title/tt0275137/", "notes": "Epic team-up" },
        { "title": "Justice League: Starcrossed", "seasons": "-", "episodes": 3, "totalWatchTime": "~1 hour", "imdbLink": "https://www.imdb.com/title/tt0275137/", "notes": "Great ending" },
        { "title": "Justice League Unlimited", "seasons": 3, "episodes": 39, "totalWatchTime": "~15 hours", "imdbLink": "https://www.imdb.com/title/tt0414022/", "notes": "More heroes" },
        { "title": "Batman and Harley Quinn", "seasons": "-", "episodes": "1 Movie", "totalWatchTime": "~1.5 hours", "imdbLink": "https://www.imdb.com/title/tt6550274/", "notes": "Funny movie" },
        { "title": "Justice League vs. The Fatal Five", "seasons": "-", "episodes": "1 Movie", "totalWatchTime": "~1.5 hours", "imdbLink": "https://www.imdb.com/title/tt8754122/", "notes": "Action-packed" },
        { "title": "Batman Beyond", "seasons": 3, "episodes": 52, "totalWatchTime": "~20 hours", "imdbLink": "https://www.imdb.com/title/tt0147746/", "notes": "Futuristic Batman" },
        { "title": "The Zeta Project", "seasons": 2, "episodes": 26, "totalWatchTime": "~10 hours", "imdbLink": "https://www.imdb.com/title/tt0251736/", "notes": "Spin-off show" },
        { "title": "Batman Beyond: Return of the Joker", "seasons": "-", "episodes": "1 Movie", "totalWatchTime": "~1.5 hours", "imdbLink": "https://www.imdb.com/title/tt0233298/", "notes": "Joker returns" },
        { "title": "Justice League Unlimited - 'Epilogue'", "seasons": "-", "episodes": 1, "totalWatchTime": "~0.5 hours", "imdbLink": "https://www.imdb.com/title/tt0414022/", "notes": "Series end" },
        { "title": "Static Shock", "seasons": 4, "episodes": 52, "totalWatchTime": "~20 hours", "imdbLink": "https://www.imdb.com/title/tt0247723/", "notes": "Cool hero" },
        { "title": "Superman: Brainiac Attacks", "seasons": "-", "episodes": "1 Movie", "totalWatchTime": "~1.5 hours", "imdbLink": "https://www.imdb.com/title/tt0775361/", "notes": "Brainiac fight" }
    ]
};

// Load data from localStorage if it exists, otherwise use the initial data
let savedData = JSON.parse(localStorage.getItem('watchlistData')) || initialData;

// Function to normalize category names for comparison
function normalizeCategoryName(name) {
    return name.trim().toLowerCase().replace(/[\s-]+/g, '');
}

// Function to clean up duplicate categories
function cleanUpDuplicateCategories(data) {
    const normalizedCategories = {};
    const cleanedData = {};

    Object.keys(data).forEach(category => {
        const normalized = normalizeCategoryName(category);
        if (!normalizedCategories[normalized]) {
            normalizedCategories[normalized] = category;
            cleanedData[category] = data[category];
        } else {
            const existingCategory = normalizedCategories[normalized];
            cleanedData[existingCategory] = [
                ...cleanedData[existingCategory],
                ...data[category]
            ];
        }
    });

    return cleanedData;
}

// Clean up duplicates in savedData
let categories = cleanUpDuplicateCategories(savedData);

// Log the categories to confirm cleanup
console.log('Categories after cleanup:', categories);

// Save the cleaned data back to localStorage
localStorage.setItem('watchlistData', JSON.stringify(categories));

// Function to show a success message
function showSuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        successMessage.classList.remove('hide');
        setTimeout(() => {
            successMessage.classList.add('hide');
        }, 3000);
    } else {
        console.error('Element with ID "success-message" not found at:', new Date().toISOString());
    }
}

// Function to format category names for display
function formatCategoryName(category) {
    return category.replace(/-/g, ' ').toUpperCase();
}

// Function to update the "Last Updated" timestamp
function updateLastUpdated() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = formattedDate;
    } else {
        console.error('Element with ID "last-updated" not found at:', new Date().toISOString());
    }
}

// Function to save data to localStorage and update the timestamp
function saveToLocalStorage() {
    try {
        localStorage.setItem('watchlistData', JSON.stringify(categories));
        updateLastUpdated();
    } catch (error) {
        console.error('Error saving to localStorage at:', new Date().toISOString(), error);
    }
}

// Function to populate the category dropdown
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        categorySelect.innerHTML = '';
        const categoryKeys = Object.keys(categories);
        if (categoryKeys.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No Categories Available';
            option.disabled = true;
            option.selected = true;
            categorySelect.appendChild(option);
        } else {
            categoryKeys.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = formatCategoryName(category);
                categorySelect.appendChild(option);
            });
        }
    } else {
        console.error('Element with ID "category" not found at:', new Date().toISOString());
    }
}

// Function to render the hero section
function renderHeroSection() {
    const heroSection = document.getElementById('hero-section');
    if (!heroSection) {
        console.error('Element with ID "hero-section" not found at:', new Date().toISOString());
        return;
    }

    // Highlight the first entry from the first category (e.g., WATCHLIST)
    const firstCategory = Object.keys(categories)[0];
    const firstEntry = categories[firstCategory] && categories[firstCategory][0];

    if (firstEntry) {
        heroSection.innerHTML = `
            <div class="hero-content">
                <h2>${firstEntry.title}</h2>
                <p>${firstEntry.seasons} Seasons | ${firstEntry.episodes} Episodes</p>
            </div>
        `;
    } else {
        heroSection.innerHTML = `
            <div class="hero-content">
                <h2>Your Watchlist</h2>
                <p>Add some entries to get started!</p>
            </div>
        `;
    }
}

// Function to render a single category section with cards
function renderCategorySection(category, data) {
    const container = document.getElementById('categories-container');
    if (!container) {
        console.error('Element with ID "categories-container" not found at:', new Date().toISOString());
        return;
    }

    console.log(`Rendering section for category "${category}" with data:`, data);

    const section = document.createElement('section');
    section.className = 'category-section';
    section.id = `${category}-section`;
    section.innerHTML = `
        <div class="category-header">
            <h2>${formatCategoryName(category)}</h2>
            <div class="category-actions">
                <button class="rename" onclick="renameCategory('${category}')">Rename</button>
                <button class="delete-category" onclick="deleteCategory('${category}')">Delete</button>
            </div>
        </div>
        <div class="entries-grid" id="${category}-grid"></div>
    `;
    container.appendChild(section);

    const grid = document.getElementById(`${category}-grid`);
    if (!grid) {
        console.error(`Element with ID "${category}-grid" not found at:`, new Date().toISOString());
        return;
    }

    if (data.length === 0) {
        grid.innerHTML = `<p>No entries in this category.</p>`;
    } else {
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'entry-card';
            card.innerHTML = `
                <div class="entry-title">${item.title}</div>
                <div class="entry-info">Seasons: ${item.seasons} | Episodes: ${item.episodes}</div>
                <div class="entry-watch-time">${item.totalWatchTime}</div>
                <div class="entry-imdb">
                    ${item.imdbLink ? `<a href="${item.imdbLink}" target="_blank"><img src="images/imdb-icon.png" alt="IMDb" class="imdb-icon"></a>` : '-'}
                </div>
                <div class="entry-notes">${item.notes || '-'}</div>
                <div class="entry-actions">
                    <button class="edit" onclick="openEditModal('${category}', ${index})">Edit</button>
                    <button class="delete" onclick="deleteEntry('${category}', ${index})">Delete</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// Function to render all category sections
function renderAllSections() {
    const container = document.getElementById('categories-container');
    if (!container) {
        console.error('Element with ID "categories-container" not found at:', new Date().toISOString());
        return;
    }
    container.innerHTML = '';
    const categoryKeys = Object.keys(categories);
    if (categoryKeys.length === 0) {
        container.innerHTML = '<p>No categories available.</p>';
    } else {
        categoryKeys.forEach(category => {
            renderCategorySection(category, categories[category]);
        });
    }
}

// Function to rename a category
window.renameCategory = function(oldCategory) {
    const newCategoryName = prompt('Enter new category name:', formatCategoryName(oldCategory));
    if (newCategoryName) {
        const newCategoryKey = newCategoryName.trim().toLowerCase().replace(/\s+/g, '-');
        const normalizedNewKey = normalizeCategoryName(newCategoryKey);
        const existingCategory = Object.keys(categories).find(cat => normalizeCategoryName(cat) === normalizedNewKey);
        if (existingCategory) {
            showSuccessMessage('This category name already exists!');
        } else if (newCategoryKey) {
            categories[newCategoryKey] = categories[oldCategory];
            delete categories[oldCategory];
            saveToLocalStorage();
            populateCategoryDropdown();
            renderAllSections();
            renderHeroSection();
            showSuccessMessage(`Category renamed to "${newCategoryName}" successfully!`);
        }
    }
};

// Function to delete a category
window.deleteCategory = function(category) {
    if (confirm(`Are you sure you want to delete the category "${formatCategoryName(category)}"? This will delete all its entries.`)) {
        if (confirm(`Please confirm again: Do you really want to delete "${formatCategoryName(category)}"?`)) {
            delete categories[category];
            saveToLocalStorage();
            populateCategoryDropdown();
            renderAllSections();
            renderHeroSection();
            showSuccessMessage(`Category "${formatCategoryName(category)}" deleted successfully!`);
        }
    }
};

// Function to open the edit modal
window.openEditModal = function(category, index) {
    const modal = document.getElementById('edit-modal');
    if (!modal) {
        console.error('Element with ID "edit-modal" not found at:', new Date().toISOString());
        return;
    }
    const item = categories[category][index];

    const editCategoryInput = document.getElementById('edit-category');
    const editIndexInput = document.getElementById('edit-index');
    const editTitleInput = document.getElementById('edit-title');
    const editSeasonsInput = document.getElementById('edit-seasons');
    const editEpisodesInput = document.getElementById('edit-episodes');
    const editTotalWatchTimeInput = document.getElementById('edit-totalWatchTime');
    const editImdbLinkInput = document.getElementById('edit-imdbLink');
    const editNotesInput = document.getElementById('edit-notes');

    if (!editCategoryInput || !editIndexInput || !editTitleInput || !editSeasonsInput || !editEpisodesInput || !editTotalWatchTimeInput || !editImdbLinkInput || !editNotesInput) {
        console.error('One or more edit modal inputs not found at:', new Date().toISOString());
        return;
    }

    editCategoryInput.value = category;
    editIndexInput.value = index;
    editTitleInput.value = item.title;
    editSeasonsInput.value = item.seasons;
    editEpisodesInput.value = item.episodes;
    editTotalWatchTimeInput.value = item.totalWatchTime;
    editImdbLinkInput.value = item.imdbLink;
    editNotesInput.value = item.notes || '';

    modal.style.display = 'block';
};

// Function to delete an entry
window.deleteEntry = function(category, index) {
    const itemTitle = categories[category][index].title;
    if (confirm(`Are you sure you want to delete the entry "${itemTitle}"?`)) {
        if (confirm(`Please confirm again: Do you really want to delete "${itemTitle}"?`)) {
            categories[category].splice(index, 1);
            saveToLocalStorage();
            renderAllSections();
            renderHeroSection();
            showSuccessMessage(`Entry "${itemTitle}" deleted successfully!`);
        }
    }
};

// Function to handle navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to the clicked link and target section
            this.classList.add('active');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                if (targetId === 'view-watchlist') {
                    renderHeroSection();
                }
            }
        });
    });
}

// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        // Function to close the edit modal
        const modalClose = document.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', function() {
                const modal = document.getElementById('edit-modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Theme Toggle
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', function() {
                document.body.classList.toggle('dark-theme');
                const isDark = document.body.classList.contains('dark-theme');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                themeToggleBtn.innerHTML = isDark
                    ? '<i class="fas fa-sun"></i> Toggle Theme'
                    : '<i class="fas fa-moon"></i> Toggle Theme';
            });
        }

        // Handle adding a new category
        const categoryForm = document.getElementById('category-form');
        if (categoryForm) {
            categoryForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const newCategoryInput = document.getElementById('new-category');
                if (!newCategoryInput) {
                    console.error('Element with ID "new-category" not found at:', new Date().toISOString());
                    return;
                }
                const newCategory = newCategoryInput.value.trim().toLowerCase().replace(/\s+/g, '-');
                const normalizedNewCategory = normalizeCategoryName(newCategory);
                const existingCategory = Object.keys(categories).find(cat => normalizeCategoryName(cat) === normalizedNewCategory);

                if (existingCategory) {
                    showSuccessMessage('This category name already exists!');
                } else if (newCategory) {
                    categories[newCategory] = [];
                    saveToLocalStorage();
                    populateCategoryDropdown();
                    renderAllSections();
                    renderHeroSection();
                    const displayName = formatCategoryName(newCategory);
                    newCategoryInput.value = '';
                    showSuccessMessage(`Category "${displayName}" added successfully!`);
                }
            });
        }

        // Handle adding a new entry
        const watchlistForm = document.getElementById('watchlist-form');
        if (watchlistForm) {
            watchlistForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const categorySelect = document.getElementById('category');
                const titleInput = document.getElementById('title');
                const seasonsInput = document.getElementById('seasons');
                const episodesInput = document.getElementById('episodes');
                const totalWatchTimeInput = document.getElementById('totalWatchTime');
                const imdbLinkInput = document.getElementById('imdbLink');
                const notesInput = document.getElementById('notes');

                if (!categorySelect || !titleInput || !seasonsInput || !episodesInput || !totalWatchTimeInput || !imdbLinkInput || !notesInput) {
                    console.error('One or more add entry form inputs not found at:', new Date().toISOString());
                    return;
                }

                const category = categorySelect.value;
                if (!category) {
                    showSuccessMessage('Please select a category.');
                    return;
                }

                const newEntry = {
                    title: titleInput.value,
                    seasons: seasonsInput.value,
                    episodes: episodesInput.value,
                    totalWatchTime: totalWatchTimeInput.value,
                    imdbLink: imdbLinkInput.value,
                    notes: notesInput.value
                };

                categories[category].push(newEntry);
                saveToLocalStorage();
                renderAllSections();
                renderHeroSection();
                this.reset();
                showSuccessMessage(`Entry "${newEntry.title}" added successfully!`);
            });
        }

        // Handle edit form submission
        const editForm = document.getElementById('edit-form');
        if (editForm) {
            editForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const editCategoryInput = document.getElementById('edit-category');
                const editIndexInput = document.getElementById('edit-index');
                const editTitleInput = document.getElementById('edit-title');
                const editSeasonsInput = document.getElementById('edit-seasons');
                const editEpisodesInput = document.getElementById('edit-episodes');
                const editTotalWatchTimeInput = document.getElementById('edit-totalWatchTime');
                const editImdbLinkInput = document.getElementById('edit-imdbLink');
                const editNotesInput = document.getElementById('edit-notes');

                if (!editCategoryInput || !editIndexInput || !editTitleInput || !editSeasonsInput || !editEpisodesInput || !editTotalWatchTimeInput || !editImdbLinkInput || !editNotesInput) {
                    console.error('One or more edit form inputs not found at:', new Date().toISOString());
                    return;
                }

                const category = editCategoryInput.value;
                const index = parseInt(editIndexInput.value);
                const dataArray = categories[category];

                dataArray[index] = {
                    title: editTitleInput.value,
                    seasons: editSeasonsInput.value,
                    episodes: editEpisodesInput.value,
                    totalWatchTime: editTotalWatchTimeInput.value,
                    imdbLink: editImdbLinkInput.value,
                    notes: editNotesInput.value
                };

                saveToLocalStorage();
                renderAllSections();
                renderHeroSection();
                const modal = document.getElementById('edit-modal');
                if (modal) {
                    modal.style.display = 'none';
                    showSuccessMessage(`Entry "${dataArray[index].title}" updated successfully!`);
                }
            });
        }

        // Setup navigation
        setupNavigation();

        // Initial rendering
        populateCategoryDropdown();
        renderAllSections();
        renderHeroSection();
        updateLastUpdated();
    }, 1000);

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
        }
    }
});
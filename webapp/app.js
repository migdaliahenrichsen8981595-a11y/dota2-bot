// Инициализация Telegram WebApp
let tg = window.Telegram?.WebApp;
if (tg) {
    tg.expand();
    tg.ready();
}

// Состояние приложения
const state = {
    currentPage: 'tierlist',
    selectedEnemies: [],
    selectedHeroForBuild: null,
    searchQuery: ''
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTierList();
    initCounterPicks();
    initBuilds();

    // Проверка URL параметров
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    if (page) {
        switchPage(page);
    }
});

// Навигация между страницами
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            switchPage(page);
        });
    });
}

function switchPage(page) {
    // Обновляем состояние
    state.currentPage = page;

    // Обновляем навигацию
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === page);
    });

    // Показываем нужную страницу
    document.querySelectorAll('.page').forEach(p => {
        p.classList.toggle('active', p.id === `${page}-page`);
    });

    // Уведомляем Telegram
    if (tg) {
        tg.HapticFeedback.impactOccurred('light');
    }
}

// ============= TIER LIST =============
function initTierList() {
    renderTierList();
}

function renderTierList() {
    const tiers = ['s', 'a', 'b', 'c'];

    tiers.forEach(tier => {
        const container = document.getElementById(`${tier}-tier-heroes`);
        if (!container) return;

        const heroes = Object.entries(heroesData)
            .filter(([name, data]) => data.tier === tier.toUpperCase())
            .sort((a, b) => parseFloat(b[1].winrate) - parseFloat(a[1].winrate));

        container.innerHTML = heroes.map(([name, data]) => `
            <div class="hero-card" onclick="showHeroDetails('${name}')">
                <div class="hero-icon">${data.icon}</div>
                <div class="hero-name">${name}</div>
                <div class="hero-winrate">${data.winrate}</div>
            </div>
        `).join('');
    });
}

function showHeroDetails(heroName) {
    const hero = heroesData[heroName];
    if (!hero) return;

    if (tg) {
        tg.HapticFeedback.notificationOccurred('success');
        tg.showAlert(`${hero.icon} ${heroName}\n\nРоль: ${hero.role}\nВинрейт: ${hero.winrate}\n\n${hero.description}`);
    } else {
        alert(`${hero.icon} ${heroName}\n\nРоль: ${hero.role}\nВинрейт: ${hero.winrate}\n\n${hero.description}`);
    }
}

// ============= COUNTER PICKS =============
function initCounterPicks() {
    const searchBtn = document.getElementById('search-heroes');
    const searchInput = document.getElementById('search-input');

    // Инициализируем слоты для врагов
    renderEnemySlots();

    searchBtn.addEventListener('click', () => {
        toggleHeroSearch();
    });

    searchInput.addEventListener('input', (e) => {
        filterHeroSearch(e.target.value);
    });
}

function renderEnemySlots() {
    const container = document.getElementById('selected-enemies');
    container.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const enemy = state.selectedEnemies[i];
        const slot = document.createElement('div');
        slot.className = enemy ? 'enemy-slot filled' : 'enemy-slot';

        if (enemy) {
            const heroData = heroesData[enemy] || { icon: '❓' };
            slot.innerHTML = `
                ${heroData.icon}
                <button class="remove-btn" onclick="removeEnemy(${i})">×</button>
            `;
        } else {
            slot.innerHTML = '+';
            slot.onclick = () => toggleHeroSearch();
        }

        container.appendChild(slot);
    }
}

function toggleHeroSearch() {
    const searchDiv = document.getElementById('hero-search');
    searchDiv.classList.toggle('hidden');

    if (!searchDiv.classList.contains('hidden')) {
        renderHeroSearchResults(allHeroesShort);
        document.getElementById('search-input').focus();
    }
}

function filterHeroSearch(query) {
    const filtered = allHeroesShort.filter(hero =>
        hero.toLowerCase().includes(query.toLowerCase())
    );
    renderHeroSearchResults(filtered);
}

function renderHeroSearchResults(heroes) {
    const container = document.getElementById('search-results');
    container.innerHTML = heroes.map(hero => {
        const heroData = heroesData[hero] || { icon: '❓', tier: 'C' };
        const isSelected = state.selectedEnemies.includes(hero);

        return `
            <div class="hero-card ${isSelected ? 'selected' : ''}"
                 onclick="addEnemy('${hero}')"
                 style="${isSelected ? 'opacity: 0.5; pointer-events: none;' : ''}">
                <div class="hero-icon">${heroData.icon}</div>
                <div class="hero-name">${hero}</div>
            </div>
        `;
    }).join('');
}

function addEnemy(heroName) {
    if (state.selectedEnemies.length >= 5) {
        if (tg) {
            tg.showAlert('Уже выбрано 5 героев');
        }
        return;
    }

    if (!state.selectedEnemies.includes(heroName)) {
        state.selectedEnemies.push(heroName);
        renderEnemySlots();
        renderHeroSearchResults(allHeroesShort);
        generateCounterSuggestions();

        if (tg) {
            tg.HapticFeedback.impactOccurred('medium');
        }
    }
}

function removeEnemy(index) {
    state.selectedEnemies.splice(index, 1);
    renderEnemySlots();
    renderHeroSearchResults(allHeroesShort);
    generateCounterSuggestions();

    if (tg) {
        tg.HapticFeedback.impactOccurred('light');
    }
}

function generateCounterSuggestions() {
    const container = document.getElementById('counter-suggestions');

    if (state.selectedEnemies.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">Выберите героев противника для получения рекомендаций</p>';
        return;
    }

    // Собираем всех возможных контрпиков
    const counterScores = {};

    state.selectedEnemies.forEach(enemy => {
        const enemyData = heroesData[enemy];
        if (enemyData && enemyData.counteredBy) {
            enemyData.counteredBy.forEach(counter => {
                counterScores[counter] = (counterScores[counter] || 0) + 1;
            });
        }

        // Используем расширенные данные если есть
        if (counterData[enemy]) {
            counterData[enemy].counters.forEach(c => {
                counterScores[c.hero] = (counterScores[c.hero] || 0) + 2;
            });
        }
    });

    // Сортируем по количеству контрпиков
    const sortedCounters = Object.entries(counterScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    if (sortedCounters.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">Контрпики не найдены. Попробуйте других героев.</p>';
        return;
    }

    container.innerHTML = sortedCounters.map(([heroName, score]) => {
        const hero = heroesData[heroName] || { icon: '❓', description: 'Нет данных' };

        // Найдем конкретные причины
        let reasons = [];
        state.selectedEnemies.forEach(enemy => {
            if (counterData[enemy]) {
                const counterInfo = counterData[enemy].counters.find(c => c.hero === heroName);
                if (counterInfo) {
                    reasons.push(`Против ${enemy}: ${counterInfo.reason}`);
                }
            }
        });

        const reasonText = reasons.length > 0
            ? reasons.join('<br>')
            : `Эффективен против ${score} героя(ов) из вражеской команды`;

        return `
            <div class="counter-hero">
                <div class="counter-hero-icon">${hero.icon}</div>
                <div class="counter-hero-info">
                    <div class="counter-hero-name">${heroName}</div>
                    <div class="counter-reason">${reasonText}</div>
                </div>
                <div class="counter-advantage">+${Math.round(score * 2.5)}%</div>
            </div>
        `;
    }).join('');
}

// ============= BUILDS =============
function initBuilds() {
    const searchInput = document.getElementById('build-search');

    searchInput.addEventListener('input', (e) => {
        filterBuildHeroes(e.target.value);
    });

    renderBuildHeroesList();
}

function filterBuildHeroes(query) {
    const heroes = Object.keys(heroesData).filter(hero =>
        hero.toLowerCase().includes(query.toLowerCase())
    );
    renderBuildHeroesList(heroes);
}

function renderBuildHeroesList(heroes = null) {
    const container = document.getElementById('build-heroes-list');
    const heroesList = heroes || Object.keys(heroesData);

    container.innerHTML = heroesList.map(heroName => {
        const hero = heroesData[heroName];
        return `
            <div class="hero-card" onclick="showHeroBuild('${heroName}')">
                <div class="hero-icon">${hero.icon}</div>
                <div class="hero-name">${heroName}</div>
                <div class="hero-winrate">${hero.role}</div>
            </div>
        `;
    }).join('');
}

function showHeroBuild(heroName) {
    const hero = heroesData[heroName];
    if (!hero || !hero.builds) return;

    state.selectedHeroForBuild = heroName;
    const container = document.getElementById('hero-build-detail');

    container.classList.remove('hidden');
    container.scrollIntoView({ behavior: 'smooth' });

    container.innerHTML = `
        <div class="build-header">
            <div class="build-hero-icon">${hero.icon}</div>
            <div class="build-hero-name">${heroName}</div>
            <div class="build-role">${hero.role} • WR: ${hero.winrate}</div>
            <p style="margin-top: 12px; color: var(--text-secondary); font-size: 14px;">${hero.description}</p>
        </div>

        <div class="build-section">
            <h3>🎒 Стартовые предметы</h3>
            <div class="items-grid">
                ${hero.builds.starting.map(item => `
                    <div class="item-card">
                        <div class="item-icon">${item.icon}</div>
                        <div class="item-name">${item.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="build-section">
            <h3>⚡ Ранние предметы</h3>
            <div class="items-grid">
                ${hero.builds.early.map(item => `
                    <div class="item-card">
                        <div class="item-icon">${item.icon}</div>
                        <div class="item-name">${item.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="build-section">
            <h3>⚔️ Основные предметы</h3>
            <div class="items-grid">
                ${hero.builds.core.map(item => `
                    <div class="item-card">
                        <div class="item-icon">${item.icon}</div>
                        <div class="item-name">${item.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="build-section">
            <h3>🌟 Поздние предметы</h3>
            <div class="items-grid">
                ${hero.builds.lategame.map(item => `
                    <div class="item-card">
                        <div class="item-icon">${item.icon}</div>
                        <div class="item-name">${item.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        ${hero.talents ? `
        <div class="build-section">
            <h3>🎯 Таланты (рекомендуемые выделены)</h3>
            <div class="talents-grid">
                ${hero.talents.map(talent => `
                    <div class="talent-row">
                        <div class="talent ${talent.recommended === 'left' ? 'recommended' : ''}">
                            <div class="talent-level">Level ${talent.level}</div>
                            <div>${talent.left}</div>
                        </div>
                        <div class="talent ${talent.recommended === 'right' ? 'recommended' : ''}">
                            <div class="talent-level">Level ${talent.level}</div>
                            <div>${talent.right}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}

        <div class="build-section">
            <h3>💡 Контрпики</h3>
            <div style="background: var(--bg-card); padding: 16px; border-radius: 8px; margin-top: 12px;">
                <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 8px;">
                    <strong style="color: var(--accent-b);">Хорош против:</strong>
                    ${hero.counters ? hero.counters.join(', ') : 'Нет данных'}
                </p>
                <p style="color: var(--text-secondary); font-size: 14px;">
                    <strong style="color: var(--accent-s);">Слаб против:</strong>
                    ${hero.counteredBy ? hero.counteredBy.join(', ') : 'Нет данных'}
                </p>
            </div>
        </div>
    `;

    if (tg) {
        tg.HapticFeedback.impactOccurred('medium');
    }
}

// Утилиты
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Экспорт для глобального использования
window.switchPage = switchPage;
window.showHeroDetails = showHeroDetails;
window.addEnemy = addEnemy;
window.removeEnemy = removeEnemy;
window.showHeroBuild = showHeroBuild;

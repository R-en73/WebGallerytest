/**
 * Portfolio Gallery - Main JavaScript
 * 作品ギャラリーサイトのメイン機能
 */

// ===================================
// ポートフォリオデータ
// ===================================
const portfolioData = [
  {
    id: 1,
    title: "MIRAGE - デジタルな悪夢の解体",
    category: "video",
    categoryLabel: "Ai作品",
    thumbnail: "img/videoMIRAGEサムネ.png",
    image: "img/videoMIRAGEサムネ.png",
    video: "video/MIRAGE__デジタルな悪夢の解体.mp4",
    description: "notebookLMというAiツールを使いて制作した映像作品。Webサイトの説明を動画にしました。",
    url: null,
    pdf: null,
    date: "2026年2月"
  },
  {
    id: 2,
    title: "ZELEM GROUP - デジタルな幻影の解剖",
    category: "video",
    categoryLabel: "Ai作品",
    thumbnail: "img/videoZEREMGROUPサムネ.png",
    image: "img/videoZEREMGROUPサムネ.png",
    video: "video/ZELEM_GROUP__デジタルな幻影の解剖.mp4",
    description: "notebookLMというAiツールを使いて制作した映像作品。Webサイトの説明を動画にしました。",
    url: null,
    pdf: null,
    date: "2026年2月"
  },
  {
    id: 3,
    title: "卒業・進級制作展示資料",
    category: "pdf",
    categoryLabel: "資料（PDF）",
    thumbnail: "img/PDFサムネ.png",
    image: "img/PDFサムネ.png",
    video: null,
    description: "卒業・進級制作展示会向けのプレゼンテーション資料。作品コンセプトから技術的なアプローチまで、視覚的にわかりやすく構成しました。",
    url: null,
    pdf: "pdf/卒業進級制作展示説明資料完成パワポ.pdf",
    date: "2026年2月"
  },
  {
    id: 4,
    title: "ZEROEDGE スポーツカーブランドサイト",
    category: "website",
    categoryLabel: "Webサイト",
    thumbnail: "img/Web1.png",
    image: "img/Web1.png",
    fullImage: "img/Web1全体スクショ.png",
    video: null,
    description: "スポーツカーブランドの公式サイト。ブランド力があふれるように、哲学のようなものを感じるようなデザインを目指しました。",
    url: null,
    pdf: null,
    date: "2025年10月"
  },
  {
    id: 5,
    title: "MIRAGE ホラー映画サイト",
    category: "website",
    categoryLabel: "Webサイト",
    thumbnail: "img/Web2.png",
    image: "img/Web2.png",
    fullImage: "img/Web2全体スクショ.png",
    video: null,
    description: "ホラー映画をテーマにしたWebサイト。パララックス効果で不気味な雰囲気を演出し、視覚的に魅力的な体験を提供しました。",
    url: "https://r-en73.github.io/Fictionalhorrormoviesite/",
    pdf: null,
    date: "2025年12月"
  },
  {
    id: 6,
    title: "ZELEM GROUP コーポレートサイト",
    category: "website",
    categoryLabel: "Webサイト",
    thumbnail: "img/Web3.png",
    image: "img/Web3.png",
    fullImage: "img/Web3全体スクショ.png",
    video: null,
    description: "架空の企業ZELEM GROUPのコーポレートサイト。オレンジ色を使い、活力のあるデザインを目指しました。企業のビジョンやサービスをわかりやすく伝える構成にしています。",
    url: null,
    pdf: null,
    date: "2025年11月"
  },
  {
    id: 7,
    title: "学年企画 ゲーム公式サイト",
    category: "website",
    categoryLabel: "Webサイト",
    thumbnail: "img/Web4.png",
    image: "img/Web4.png",
    fullImage: "img/Web4全体スクショ.png",
    video: null,
    description: "学年企画のゲーム公式サイト。イラストコースとチームで協力して制作しました。ゲームの世界観を反映したデザインを実現しました。",
    url: "https://r-en73.github.io/Crossfall-/",
    pdf: null,
    date: "2026年2月"
  },
  {
    id: 8,
    title: "POP AIwebサイト",
    category: "website",
    categoryLabel: "Webサイト",
    thumbnail: "img/Web5.png",
    image: "img/Web5.png",
    fullImage: "img/Web5全体スクショ.png",
    video: null,
    description: "Google AntigravityというAiツールを使いて制作したWebサイト。POPなデザインを目指し、プロンプトですべて制作しました。",
    url: null,
    pdf: null,
    date: "2025年11月"
  },
  {
    id: 9,
    title: "キャンペーンサイト AIwebサイト",
    category: "website",
    categoryLabel: "Webサイト",
    thumbnail: "img/Web6.png",
    image: "img/Web6.png",
    fullImage: "img/Web6全体サイト.png",
    video: null,
    description: "ClaudeというAiツールを使いて制作したキャンペーンサイト。プロンプトですべて制作しました",
    url: null,
    pdf: null,
    date: "2026年2月"
  },
  {
    id: 10,
    title: "QR-コードツールとJAXA-MCP資料",
    category: "pdf",
    categoryLabel: "資料（PDF）",
    thumbnail: "img/QR-MCPPDFサムネ.png",
    image: "img/QR-MCPPDFサムネ.png",
    video: null,
    description: "AI授業で制作したQRコードツールとJAXA-MCPのMCPに関してまとめた資料。QRコードツールの概要ややJAXA-MCPの概要をわかりやすく説明しています。",
    url: null,
    pdf: "pdf/QR-MCP.pdf",
    date: "2026年2月"
  },
  {
    id: 11,
    title: "セキュリティ会社サイト  AIwebサイト",
    category: "website",
    categoryLabel: "Webサイト",
    thumbnail: "img/Web7.png",
    image: "img/Web7.png",
    fullImage: "img/Web7全体スクショ.png",
    video: null,
    description: "セキュリティ会社のコーポレートサイト。Claude Opus 4.6というモデルを使ってプロンプトですべて制作しました。",
    url: null,
    pdf: null,
    date: "2026年2月"
  },
  {
    id: 12,
    title: "卒業進級制作展 文章説明資料",
    category: "pdf",
    categoryLabel: "資料（PDF）",
    thumbnail: "img/卒業進級制作展文章説明資料サムネ画像.png",
    image: "img/卒業進級制作展文章説明資料サムネ画像.png",
    video: null,
    description: "卒業進級制作展のWebサイトの技術を文章での説明資料。作品の背景やコンセプトを文章でまとめました。",
    url: null,
    pdf: "pdf/卒業進級制作展文章説明資料.pdf",
    date: "2026年2月"
  }
];

// ===================================
// DOM要素の取得
// ===================================
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalDate = document.getElementById('modalDate');
const modalLinks = document.getElementById('modalLinks');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

// 現在のフィルター状態と検索クエリを保持
let currentFilter = 'all';
let currentSearchQuery = '';

// ===================================
// カード生成関数
// ===================================
function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card fade-in';
  card.dataset.category = item.category;
  card.dataset.id = item.id;
  card.dataset.scrollStagger = ''; // スクロールアニメーション属性を追加
  
  // 映像作品の場合は再生アイコンを表示
  const playIcon = item.video ? `
    <div class="play-icon">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    </div>
  ` : '';
  
  card.innerHTML = `
    <div class="card-image-container">
      <img 
        src="${item.thumbnail}" 
        alt="${item.title}" 
        class="card-image"
        loading="lazy"
        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22 viewBox=%220 0 400 250%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22250%22/%3E%3Ctext fill=%22%23666%22 font-size=%2218%22 font-family=%22sans-serif%22 x=%22200%22 y=%22130%22 text-anchor=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E'"
      >
      ${playIcon}
      <div class="card-overlay">
        <span class="card-category">${item.categoryLabel}</span>
        <h3 class="card-title">${item.title}</h3>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-info-title">${item.title}</h3>
      <span class="card-info-category">${item.categoryLabel}</span>
    </div>
  `;
  
  // カードクリックイベント
  card.addEventListener('click', () => openModal(item));
  
  return card;
}

// ===================================
// ギャラリー描画関数
// ===================================
function renderGallery(data) {
  galleryGrid.innerHTML = '';
  
  if (data.length === 0) {
    galleryGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">📂</div>
        <p class="empty-state-text">該当する作品がありません</p>
      </div>
    `;
    return;
  }
  
  data.forEach((item, index) => {
    const card = createCard(item);
    // 順番にアニメーション
    card.style.animationDelay = `${index * 0.1}s`;
    galleryGrid.appendChild(card);
  });
  
  // スクロールアニメーションを再適用
  refreshCardScrollAnimations();
}

// ===================================
// フィルター機能
// ===================================
function filterGallery(category) {
  currentFilter = category;
  
  // ボタンのアクティブ状態を更新
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === category) {
      btn.classList.add('active');
    }
  });
  
  // フィルタリングと検索を適用
  applyFiltersAndSearch();
}

// ===================================
// 検索機能
// ===================================
function searchGallery(query) {
  currentSearchQuery = query.toLowerCase().trim();
  
  // クリアボタンの表示/非表示
  if (searchClear) {
    if (currentSearchQuery.length > 0) {
      searchClear.classList.add('visible');
    } else {
      searchClear.classList.remove('visible');
    }
  }
  
  // フィルタリングと検索を適用
  applyFiltersAndSearch();
}

// ===================================
// フィルターと検索の統合処理
// ===================================
function applyFiltersAndSearch() {
  let filteredData = portfolioData;
  
  // カテゴリフィルタを適用
  if (currentFilter !== 'all') {
    filteredData = filteredData.filter(item => item.category === currentFilter);
  }
  
  // 検索フィルタを適用
  if (currentSearchQuery.length > 0) {
    filteredData = filteredData.filter(item => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const categoryLabel = item.categoryLabel.toLowerCase();
      
      return title.includes(currentSearchQuery) || 
             description.includes(currentSearchQuery) ||
             categoryLabel.includes(currentSearchQuery);
    });
  }
  
  // 再描画
  renderGallery(filteredData);
}

// フィルターボタンにイベントリスナーを設定
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterGallery(filter);
  });
});

// 検索機能のイベントリスナー
if (searchInput) {
  // 入力イベント（リアルタイム検索）
  searchInput.addEventListener('input', (e) => {
    searchGallery(e.target.value);
  });
  
  // Enterキーでフォーカスを外す
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchInput.blur();
    }
    // Escapeキーで検索をクリア
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchGallery('');
      searchInput.blur();
    }
  });
}

// 検索クリアボタン
if (searchClear) {
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchGallery('');
    searchInput.focus();
  });
}

// ===================================
// モーダル機能
// ===================================
const modalMediaContainer = document.getElementById('modalMediaContainer');

function openModal(item) {
  // モーダルメディアコンテナをクリア
  modalMediaContainer.innerHTML = '';
  
  // 映像作品の場合はビデオを表示
  if (item.video) {
    const video = document.createElement('video');
    video.className = 'modal-video';
    video.src = item.video;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    modalMediaContainer.appendChild(video);
  } else if (item.pdf) {
    // PDFの場合はiframeで表示
    const pdfContainer = document.createElement('div');
    pdfContainer.className = 'modal-pdf-container';
    
    const iframe = document.createElement('iframe');
    iframe.className = 'modal-pdf-viewer';
    iframe.src = encodeURI(item.pdf);
    iframe.title = item.title;
    iframe.setAttribute('allowfullscreen', 'true');
    
    pdfContainer.appendChild(iframe);
    modalMediaContainer.appendChild(pdfContainer);
    modalMediaContainer.classList.add('pdf-mode');
  } else {
    // 画像を表示
    modalMediaContainer.classList.remove('pdf-mode');
    modalMediaContainer.classList.remove('fullscreen-mode');
    
    // 全体スクショがある場合は切り替え機能を追加
    if (item.fullImage) {
      // 画像切り替えコンテナ
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'modal-image-wrapper';
      
      // 通常画像
      const img = document.createElement('img');
      img.className = 'modal-image active';
      img.src = item.image;
      img.alt = item.title;
      img.dataset.type = 'thumbnail';
      img.onerror = function() {
        this.src = `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 viewBox=%220 0 800 500%22%3E%3Crect fill=%22%231a1a2e%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%23666%22 font-size=%2224%22 font-family=%22sans-serif%22 x=%22400%22 y=%22260%22 text-anchor=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E`;
      };
      
      // 全体スクショ（スクロール可能なコンテナ）
      const fullImageContainer = document.createElement('div');
      fullImageContainer.className = 'modal-full-image-container';
      
      const fullImg = document.createElement('img');
      fullImg.className = 'modal-full-image';
      fullImg.src = encodeURI(item.fullImage);
      fullImg.alt = item.title + ' - 全体';
      fullImg.dataset.type = 'full';
      fullImg.onerror = function() {
        this.src = `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 viewBox=%220 0 800 500%22%3E%3Crect fill=%22%231a1a2e%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%23666%22 font-size=%2224%22 font-family=%22sans-serif%22 x=%22400%22 y=%22260%22 text-anchor=%22middle%22%3ENo Full Image%3C/text%3E%3C/svg%3E`;
      };
      fullImageContainer.appendChild(fullImg);
      
      // 切り替えボタン
      const toggleContainer = document.createElement('div');
      toggleContainer.className = 'modal-image-toggle';
      
      const toggleBtnThumb = document.createElement('button');
      toggleBtnThumb.className = 'toggle-btn active';
      toggleBtnThumb.dataset.target = 'thumbnail';
      toggleBtnThumb.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span>プレビュー</span>
      `;
      
      const toggleBtnFull = document.createElement('button');
      toggleBtnFull.className = 'toggle-btn';
      toggleBtnFull.dataset.target = 'full';
      toggleBtnFull.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 3 21 3 21 9"/>
          <polyline points="9 21 3 21 3 15"/>
          <line x1="21" y1="3" x2="14" y2="10"/>
          <line x1="3" y1="21" x2="10" y2="14"/>
        </svg>
        <span>全体を見る</span>
      `;
      
      toggleContainer.appendChild(toggleBtnThumb);
      toggleContainer.appendChild(toggleBtnFull);
      
      imageWrapper.appendChild(img);
      imageWrapper.appendChild(fullImageContainer);
      imageWrapper.appendChild(toggleContainer);
      modalMediaContainer.appendChild(imageWrapper);
      
      // 切り替えイベント
      toggleContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.toggle-btn');
        if (!btn) return;
        
        const target = btn.dataset.target;
        toggleContainer.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (target === 'full') {
          img.classList.remove('active');
          fullImageContainer.classList.add('active');
          modalMediaContainer.classList.add('fullscreen-mode');
        } else {
          img.classList.add('active');
          fullImageContainer.classList.remove('active');
          modalMediaContainer.classList.remove('fullscreen-mode');
        }
      });
    } else {
      // 全体スクショがない場合は通常表示
      const img = document.createElement('img');
      img.className = 'modal-image';
      img.src = item.image;
      img.alt = item.title;
      img.onerror = function() {
        this.src = `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 viewBox=%220 0 800 500%22%3E%3Crect fill=%22%231a1a2e%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%23666%22 font-size=%2224%22 font-family=%22sans-serif%22 x=%22400%22 y=%22260%22 text-anchor=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E`;
      };
      modalMediaContainer.appendChild(img);
    }
  }
  
  modalTitle.textContent = item.title;
  modalCategory.textContent = item.categoryLabel;
  modalDescription.textContent = item.description;
  modalDate.textContent = `制作: ${item.date}`;
  
  // リンクボタンの生成
  modalLinks.innerHTML = '';
  
  if (item.url) {
    const urlLink = document.createElement('a');
    urlLink.href = item.url;
    urlLink.target = '_blank';
    urlLink.rel = 'noopener noreferrer';
    urlLink.className = 'modal-link primary';
    urlLink.innerHTML = `
      <svg class="modal-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      サイトを見る
    `;
    modalLinks.appendChild(urlLink);
  }
  
  if (item.pdf) {
    const pdfLink = document.createElement('a');
    pdfLink.href = encodeURI(item.pdf);
    pdfLink.download = item.title + '.pdf';
    pdfLink.className = 'modal-link secondary';
    pdfLink.innerHTML = `
      <svg class="modal-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      PDFをダウンロード
    `;
    modalLinks.appendChild(pdfLink);
  }
  
  // モーダルを表示
  modal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
  modalMediaContainer.classList.remove('pdf-mode');
  modalMediaContainer.classList.remove('fullscreen-mode');
  
  // ビデオを停止
  const video = modalMediaContainer.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// モーダルを閉じるイベント
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Escキーでモーダルを閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ===================================
// モバイルメニュー機能
// ===================================
function toggleMobileMenu() {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

function closeMobileMenu() {
  mobileMenuBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// モバイルメニューのリンクをクリックしたらメニューを閉じる
mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// ===================================
// スムーズスクロール
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// ウィンドウリサイズ時の処理
// ===================================
window.addEventListener('resize', () => {
  // モバイルメニューが開いている状態でウィンドウサイズが変わったら閉じる
  if (window.innerWidth > 767 && mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});

// ===================================
// 初期化
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  // ギャラリーを描画
  renderGallery(portfolioData);
  
  // スクロールアニメーションを初期化
  initScrollAnimations();
  
  console.log('Portfolio Gallery initialized');
});

// ===================================
// スクロールアニメーション
// ===================================
function initScrollAnimations() {
  // Intersection Observerの設定
  const observerOptions = {
    root: null, // ビューポートを基準
    rootMargin: '0px 0px -80px 0px', // 下方向に80pxのマージン
    threshold: 0.1 // 10%見えたら発火
  };

  // スクロールアニメーション用Observer
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 一度アニメーションしたら監視を解除（パフォーマンス最適化）
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // data-scroll属性を持つ要素を監視
  const scrollElements = document.querySelectorAll('[data-scroll]');
  scrollElements.forEach(el => {
    scrollObserver.observe(el);
  });

  // ギャラリーカード用のObserver（stagger animation）
  const cardObserverOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // stagger効果のための遅延を設定
        const cards = document.querySelectorAll('.card[data-scroll-stagger]');
        cards.forEach((card, index) => {
          if (card.classList.contains('is-visible')) return;
          
          const rect = card.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isInView) {
            setTimeout(() => {
              card.classList.add('is-visible');
            }, index * 100); // 100msずつ遅延
          }
        });
      }
    });
  }, cardObserverOptions);

  // ギャラリーグリッドを監視
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    cardObserver.observe(galleryGrid);
  }

  // パララックス効果
  initParallaxEffect();
}

// パララックス効果の初期化
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('[data-scroll-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  // ユーザーのモーション設定を確認
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let ticking = false;

  function updateParallax() {
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.scrollParallax) || 0.5;
      const rect = el.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = rect.top + scrolled;
      const offset = (scrolled - elementTop) * speed;
      
      el.style.transform = `translateY(${offset}px)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

// カード生成時にスクロールアニメーション属性を追加
function addScrollAnimationToCards() {
  const cards = document.querySelectorAll('.card:not([data-scroll-stagger])');
  cards.forEach(card => {
    card.setAttribute('data-scroll-stagger', '');
  });
  
  // 新しいカードを監視
  refreshCardScrollAnimations();
}

// カードのスクロールアニメーションを更新
function refreshCardScrollAnimations() {
  const cards = document.querySelectorAll('.card[data-scroll-stagger]');
  
  const cardObserverOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const visibleCards = document.querySelectorAll('.card[data-scroll-stagger]:not(.is-visible)');
        visibleCards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isInView) {
            setTimeout(() => {
              card.classList.add('is-visible');
            }, index * 100);
          }
        });
      }
    });
  }, cardObserverOptions);

  cards.forEach(card => {
    // 画面内にすでにいるカードは即座に表示
    const rect = card.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      card.classList.add('is-visible');
    } else {
      cardObserver.observe(card);
    }
  });
}

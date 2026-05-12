<div class="app-shell">
  <main class="gallery-panel">
    <header class="page-header">
      <div>
        <p class="eyebrow">Планувальник виробництва у Foxhole</p>
        <h1>Трекер ресурсів та черг</h1>
      </div>
      <p class="page-description">Наведіть на предмет щоб побачити скільки треба BMat'ів, EMat'ів та Rmat'ів. Натисніть на нього щоб додати його в чергу. НЕ ВИКОРИСТОВУВАТИ ДЛЯ РЕАЛЬНОЇ ЛОГІСТИКИ. РЕПРЕЗЕНТАЦІЯ ПРЕДМЕТІВ НЕПОВНА ТА НЕТОЧНА</p>
    </header>

    <div class="gallery-controls">
      <label for="categorySelect">Оберіть категорію</label>
      <select id="categorySelect" aria-label="Select item category"></select>
    </div>

    <section class="item-grid" id="itemGrid" aria-label="Available Foxhole items"></section>
  </main>

  <aside class="queue-panel">
    <div class="queue-header">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2>Черги фабрики</h2>
          <p>Додайте предмети з лівого поля щоб побачити результати за категорією.</p>
        </div>
        <button id="clearQueueBtn" style="padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,100,100,0.1); color: #ff6b6b; cursor: pointer; font-size: 0.85rem;">Clear</button>
      </div>
    </div>
    <div class="queue-list" id="queueList" aria-live="polite"></div>
    <div class="totals-card">
      <div class="totals-heading">Category totals</div>
      <div class="category-totals" id="categoryTotals"></div>
      <div class="totals-divider"></div>
      <div class="total-block">
        <span>Всього BMat'ів</span>
        <strong id="totalBmats">0</strong>
      </div>
      <div class="total-block">
        <span>Всього EMat'ів</span>
        <strong id="totalEmats">0</strong>
      </div>
      <div class="total-block">
        <span>Всього RMat'ів</span>
        <strong id="totalRmats">0</strong>
      </div>
      <div class="total-block">
        <span>Всього часу</span>
        <strong id="totalTime">0 хв</strong>
      </div>
    </div>
  </aside>
</div>

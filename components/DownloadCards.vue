<template>
  <div class="platform-cards-container">

    <div class="row platform-cards-row">
      <!-- 第一行：iOS 和 Android -->
      <div class="col col-6 platform-card-col">
        <a href="#ios" class="platform-card">
          <div class="platform-icon platform-icon-ios">📱</div>
          <h3>iOS</h3>
          <p>iPhone and iPad</p>
        </a>
      </div>

      <div class="col col-6 platform-card-col">
        <a href="#android" class="platform-card">
          <div class="platform-icon platform-icon-android">🤖</div>
          <h3>Android</h3>
          <p>Mobile and Tablet</p>
        </a>
      </div>

      <!-- 第二行：Windows, macOS, Linux -->
      <div class="col col-4 platform-card-col">
        <a href="#windows" class="platform-card">
          <div class="platform-icon platform-icon-windows">🖥</div>
          <h3>Windows</h3>
          <p>Desktop version</p>
        </a>
      </div>

      <div class="col col-4 platform-card-col">
        <a href="/guide/macos" class="platform-card">
          <div class="platform-icon platform-icon-macos">💻</div>
          <h3>macOS</h3>
          <p>Mac computer</p>
        </a>
      </div>

      <div class="col col-4 platform-card-col">
        <a href="/guide/linux" class="platform-card">
          <div class="platform-icon platform-icon-linux">🐧</div>
          <h3>Linux</h3>
          <p>Support for multiple distributions</p>
        </a>
      </div>

      <!-- 第三行：tvOS 和 Android TV -->
      <div class="col col-6 platform-card-col">
        <a href="#ios" class="platform-card">
          <div class="platform-icon platform-icon-tvos">📺</div>
          <h3>tvOS</h3>
          <p>Apple TV</p>
        </a>
      </div>

      <div class="col col-6 platform-card-col">
        <a href="#android-tv" class="platform-card">
          <div class="platform-icon platform-icon-android-tv">📟</div>
          <h3>Android TV</h3>
          <p>TV version</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这是一个纯展示组件，无需逻辑
</script>

<style scoped>
/* 平台卡片容器 */
.platform-cards-container {
  margin: 2rem 0;
}

.platform-cards-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.75rem;
}

.platform-card-col {
  margin-bottom: 1.5rem;
  padding: 0 0.75rem;
}

/* 响应式列布局 */
.col-6 {
  width: 50%;
  flex: 0 0 50%;
}

.col-4 {
  width: 33.33333%;
  flex: 0 0 33.33333%;
}

/* 平台卡片样式 */
.platform-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  height: 100%;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
  text-decoration: none;
}

/* 平台图标样式 */
.platform-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.platform-icon-android {
  color: #3DDC84;
}

.platform-icon-windows {
  color: #0078D6;
}

.platform-icon-linux {
  color: #FCC624;
}

.platform-icon-android-tv {
  color: #3DDC84;
}

/* 卡片内文字样式 */
.platform-card h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.platform-card p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .platform-card {
    padding: 1.25rem;
  }

  .platform-icon {
    width: 50px;
    height: 50px;
    font-size: 1.75rem;
  }

  .platform-card h3 {
    font-size: 1.1rem;
  }

  .platform-card p {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .col-6, .col-4 {
    width: 50%;
    flex: 0 0 50%;
  }

  .platform-card {
    padding: 1rem;
  }

  .platform-icon {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }

  .platform-card h3 {
    font-size: 1rem;
  }

  .platform-card p {
    font-size: 0.8rem;
  }
}
</style>
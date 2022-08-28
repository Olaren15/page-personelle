<template>
  <div class="subpixel-antialiased drawer">
    <input id="page-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <header>
        <navigation-bar />
      </header>
      <slot />
    </div>
    <div class="drawer-side">
      <label for="page-drawer" class="drawer-overlay"></label>
      <navigation-links :is-drawer="true" />
    </div>
  </div>
</template>

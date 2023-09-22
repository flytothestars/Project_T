<template>
    <div
      class="sidebar vh-100 border border-right col-md-3 col-lg-1 p-0 bg-body-tertiary"
    >
      <div
        class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto"
      >
        <ul class="nav flex-column align-items-center">
          <li class="nav-item">
            <router-link class="nav-link gap-2 border-bottom" to="/">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link gap-2 border-bottom" to="/list-tender">Тендер</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script></script>

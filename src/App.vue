<template>
  <div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">

        <RouterLink class="navbar-brand fw-bold" to="/">
          ☕ Coffee Time
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <RouterLink class="nav-link" to="/">
                Home
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">
                About
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">
                Contact
              </RouterLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>

    <RouterView />

  </div>
</template>
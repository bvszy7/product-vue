
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
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
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

            <li class="nav-item">
              <RouterLink class="nav-link" to="/grade">
                Grade
              </RouterLink>
            </li>

            <!-- Dropdown ราคาทอง -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="goldDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                API
              </a>

              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <RouterLink class="dropdown-item" to="/golds">
                    ราคาทองวันนี้
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/product_api">
                    สินค้า
                  </RouterLink>
                </li>
                <RouterLink class="dropdown-item" to="/product_table">
                    ตารางสินค้า
                  </RouterLink>
                  <RouterLink class="dropdown-item" to="/user">
                    แสดงผู้ใช้
                  </RouterLink>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- แสดงหน้าตาม Route -->
    <RouterView />
  </div>
</template>

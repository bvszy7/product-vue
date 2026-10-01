<template>

  <div class="container">

    <div class="px-4 py-5 my-5 text-center">

      <img
        src="/coffee.jpg"
        class="d-block mx-auto mb-4 rounded"
        width="300"
        alt="Coffee"
      >

      <h1 class="display-5 fw-bold">
        Welcome to Coffee Time
      </h1>

      <div class="col-lg-6 mx-auto">

        <p class="lead mb-4">
          ร้านกาแฟสำหรับคนรักกาแฟ
          พร้อมกาแฟคุณภาพและบรรยากาศที่อบอุ่น
        </p>

        <RouterLink
          to="/about"
          class="btn btn-primary btn-lg"
        >
          About Us
        </RouterLink>

      </div>

    </div>

  </div>

</template>
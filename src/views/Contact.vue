```vue
<template>

  <div class="container py-5">

    <h1 class="text-center mb-4">
      Contact Us
    </h1>

    <div class="row justify-content-center">

      <div class="col-md-6">

        <form>

          <!-- Name -->
          <div class="mb-3">
            <label class="form-label">
              Name
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Enter your name"
            >
          </div>

          <!-- Email -->
          <div class="mb-3">
            <label class="form-label">
              Email
            </label>

            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
            >
          </div>

          <!-- Subject -->
          <div class="mb-3">
            <label class="form-label">
              Subject
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Enter subject"
            >
          </div>

          <!-- Message -->
          <div class="mb-3">
            <label class="form-label">
              Message
            </label>

            <textarea
              class="form-control"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="btn btn-primary"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>

</template>
```

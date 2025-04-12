<template>
  <main>
    <section>
      <div class="container">
        <div class="error">
          <h2>404 Not page found</h2>
          <p>Your visit page not found. You may go home page.</p>
          <div>
            <button class="btn-primary" @click="$router.push('/')">Back to home page</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  min-height: 80vh;
}
.error {
  text-align: center;

  & > h2 {
    font-size: 46px;
    margin-block: 10px 14px;
  }

  & > p {
    font-size: 16px;
    margin-bottom: 46px;
  }
}
</style>

<template>
  <div>
    <main v-if="error.statusCode === 404">
      <AppHeader />
      <PageNotFound />
    </main>
    <main v-else>
      <v-heading>An error occurred</v-heading>
    </main>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
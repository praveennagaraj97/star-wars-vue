<template>
  <h1>Details for {{ details.name }}</h1>
  <div>
    {{ JSON.stringify(details) }}
  </div>
</template>

<script>
import { getIndividualDetails } from "../../api";

export default {
  data: () => ({ details: {} }),
  mounted() {
    (async () => {
      this.details = await (await getIndividualDetails(this.$route.params.id))
        .data;
    })();
  },
};
</script>

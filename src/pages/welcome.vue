<template>
  <div>
    <h5>Welcome To Vue Validation...!</h5>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat
      magni aliquam eius eaque cum provident ad blanditiis debitis corrupti
      reiciendis minus deserunt esse repudiandae, cumque rerum possimus.
      Exercitationem, inventore!
    </p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat
      magni aliquam eius eaque cum provident ad blanditiis debitis corrupti
      reiciendis minus deserunt esse repudiandae, cumque rerum possimus.
      Exercitationem, inventore!
    </p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat
      magni aliquam eius eaque cum provident ad blanditiis debitis corrupti
      reiciendis minus deserunt esse repudiandae, cumque rerum possimus.
      Exercitationem, inventore!
    </p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat
      magni aliquam eius eaque cum provident ad blanditiis debitis corrupti
      reiciendis minus deserunt esse repudiandae, cumque rerum possimus.
      Exercitationem, inventore!
    </p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat
      magni aliquam eius eaque cum provident ad blanditiis debitis corrupti
      reiciendis minus deserunt esse repudiandae, cumque rerum possimus.
      Exercitationem, inventore!
    </p>
    <hr />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { access } from "@/store/access";
import { useRouter } from "vue-router";

const accessModule = access();
const router = useRouter();

onBeforeMount(() => {
  if (accessModule.access === false) {
    router.push("/form-validate");
  }
});
</script>

<style></style>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="col-lg-6">
      <h6>Vue Form Validate...!</h6>
      <baseInput class="mt-3" placeholder="Username" />
      <baseInput class="mt-2" placeholder="Email" />
      <baseInput class="mt-2" placeholder="Password" />
      <div class="d-flex mt-2">
        <baseButton name="Submit" color="btn-primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import baseButton from "@/components/baseButton";
import baseInput from "@/components/baseInput";
</script>

<style></style>

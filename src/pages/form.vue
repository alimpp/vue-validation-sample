<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="col-lg-8">
      <h6>Vue Form Validate...!</h6>
      <baseInput
        class="mt-3"
        placeholder="Username"
        type="text"
        v-model="formData.username"
      />
      <p
        class="text-danger"
        v-for="error in v$.username.$errors"
        :key="error.$uid"
      >
        .{{ error.$message }}
      </p>
      <baseInput
        class="mt-2"
        placeholder="Email"
        type="email"
        v-model="formData.email"
      />
      <p
        class="text-danger"
        v-for="error in v$.email.$errors"
        :key="error.$uid"
      >
        .{{ error.$message }}
      </p>
      <baseInput
        class="mt-2"
        placeholder="Password"
        v-model="formData.password"
      />
      <p
        class="text-danger"
        v-for="error in v$.password.$errors"
        :key="error.$uid"
      >
        .{{ error.$message }}
      </p>
      <div class="d-flex mt-2">
        <baseButton @click="submit" name="Submit" color="btn-primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import baseButton from "@/components/baseButton";
import baseInput from "@/components/baseInput";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { access } from "@/store/access";
import { useRouter } from "vue-router";

const accessModule = access();
const router = useRouter();

const formData = ref({
  username: "",
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(8) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});

const v$ = useVuelidate(rules, formData);

const submit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    accessModule.changeAccessStatus();
    router.push("/welcome");
  }
};
</script>

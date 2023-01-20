<template>
  <div class="form-validate">
    <div class="row">
      <div class="col-lg-6">
        <h5>Lorem ipsum dolor</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio
          sunt aliquid placeat deserunt reprehenderit consequuntur, aliquam quae
          accusantium, modi blanditiis vitae impedit dolorem esse aspernatur
          possimus? Enim, natus eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam maiores aliquid corporis recusandae veniam
          dolorem nulla reprehenderit facilis laudantium enim! Voluptatem magni
          vitae debitis possimus tenetur repudiandae quaerat dolor officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quasi, voluptas id hic pariatur tenetur, similique recusandae expedita
          corrupti soluta adipisci nostrum provident quam fugiat? Enim adipisci
          debitis et earum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Iure, quia, est voluptatem odit eum necessitatibus ipsam ipsa
          omnis dolores reprehenderit quae aliquam! Eveniet et ad animi nam
          harum dignissimos <reprehenderit class="lore"></reprehenderit>
        </p>
      </div>
      <div class="col-lg-6 pt-5">
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { access } from "@/store/access";
import { useRouter } from "vue-router";
import baseButton from "@/components/baseButton";
import baseInput from "@/components/baseInput";
import useVuelidate from "@vuelidate/core";

import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

const accessModule = access();
const router = useRouter();

const hasUser = (value) => {
  return value.includes("user");
};

const test = ref("");

const formData = ref({
  username: "",
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    username: {
      required,
      minLength: minLength(8),
      hasUser: helpers.withMessage("should user in username", hasUser),
    },
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

<style lang="scss">
.form-validate {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

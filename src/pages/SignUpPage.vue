<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page
        class="bg-light-green window-height window-width row justify-center items-center"
      >
        <div class="column">
          <div class="row">
            <h5 class="text-h5 text-white q-my-md">회원가입</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="userInfo.loginId"
                    type="text"
                    label="아이디"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="userInfo.userName"
                    label="사용자명"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="userInfo.password"
                    type="password"
                    label="비밀번호"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="userInfo.email"
                    type="email"
                    label="이메일"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="light-green-7"
                  size="lg"
                  class="full-width"
                  label="가입하기"
                  @click="signUp"
                />
              </q-card-actions>
              <q-card-section class="text-center q-pa-none">
                <!-- <p class="text-grey-6" @click="router.push('/signup')">
                  회원가입
                </p> -->
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import loginService from "../service/loginService";
// import apiService from "../service/apiService";

const router = useRouter();

const userInfo = reactive({
  loginId: "",
  userName: "",
  password: "",
  email: "",
});

const signUp = async () => {
  loginService
    .signUp(userInfo)
    .then((o) => {
      console.log("회원가입 api", o);
      router.push("/");
    })
    .catch((e) => console.log("error~~~", e));
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>

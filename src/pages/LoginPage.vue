<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page
        class="bg-light-green window-height window-width row justify-center items-center"
      >
        <div class="column">
          <div class="row">
            <h5 class="text-h5 text-white q-my-md">연습 게시판 프로젝트</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <q-form class="q-gutter-md" ref="loginForm">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="userId"
                    type="text"
                    label="ID"
                    :rules="[user_id_rules]"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="password"
                    type="password"
                    label="PASSWORD"
                    :rules="[user_pw_rules]"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="light-green-7"
                  size="lg"
                  class="full-width"
                  label="Login"
                  @click="login"
                />
              </q-card-actions>
              <q-card-section class="text-center q-pa-none">
                <p class="text-grey-6" @click="router.push('/signup')">
                  회원가입
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const loginForm = ref(null);

const router = useRouter();
const email = ref();
const password = ref();

const user_id_rules = (v) => {
  if (!v) {
    return "아이디를 입력해주세요.";
  }
  const kor = v.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g);
  if (kor) {
    return "한글은 입력할 수 없습니다.";
  }
  const special = v.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g);
  if (special) {
    return "특수문자는 입력할 수 없습니다.";
  }
  return true;
};
const user_pw_rules = (v) => {
  if (!v) {
    return "패스워드를 입력해주세요.";
  }
  return true;
};

const login = async () => {
  const valid = await loginForm.value.validate();
  if (valid) {
    // apiService
    console.log("success", user_id.value, user_pw.value);
  }
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>

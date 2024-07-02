<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> 게시판 </q-toolbar-title>

        <div @cllick="router.push('/')"><q-icon name="home" />Home</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>
        <!-- MenuList -->
        <div v-for="list in menuList" :key="list.title">
          <q-item>
            <q-item-section avatar>
              <q-icon :name="list.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ list.title }}</q-item-label>
              <q-item-label caption>{{ list.caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
      <div><q-icon name="logout" />Logout</div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});

const menuList = [
  {
    title: "게시판",
    caption: "board",
    icon: "school",
  },
  {
    title: "활동내역",
    caption: "myAction",
    icon: "chat",
  },
  {
    title: "내 정보",
    caption: "myInfo",
    icon: "record_voice_over",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

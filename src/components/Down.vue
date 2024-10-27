<template>
  <!-- <div style="margin-bottom: auto ;"> -->
  <transition appear enter-active-class="animated backInDown">
    <div class="row justify-center items-center reverse">
      <h1 class="text-h4 q-mt-lg q-mb-sm text-yellow text-center  q-pr-lg">معلومات </h1>
      <h1 class="text-h6 q-mb-lg text-grey-5 text-center q-pr-lg">تنزيل التطبيق </h1>
    </div>
  </transition>
  <hr class="full-width">

  <h1 class="text-body1 q-my-sm text-grey-4 text-right full-width">اختار نوع الجهاز المحمول و تتبع الخطوات التلاته في
    الصور المرفقه علي حسب نوع الجهاز المحمول لديك</h1>

  <div class="row justify-center items-center full-width reverse">

    <transition appear enter-active-class="animated slideInRight">
      <q-btn round class="q-my-md q-ml-md" icon="android" size="lg" :color="plat === 'android' ? 'yellow-3' : 'indigo-2'"
        text-color="black" @click="plat = 'android'; slide = 'step1'"></q-btn>
    </transition>

    <transition appear enter-active-class="animated slideInLeft">
      <q-btn round class="q-my-md" icon="mdi-apple" size="lg" :color="plat === 'apple' ? 'yellow-3' : 'indigo-2'"
        text-color="black" @click="plat = 'apple'; slide = 'step1'"></q-btn>
    </transition>
  </div>

  <transition appear enter-active-class="animated slideInRight">

    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated swipeable arrows
      control-color="yellow" class="rounded-borders" height="550px"
      style="background-color: rgba(162, 184, 228, 0.3); border-radius: 10px;  margin: auto;">

      <q-carousel-slide name="step3" class="column no-wrap flex-center">

        <q-img :src="plat === 'android' ? d3 : a3" fit="fill" spinner-color="white"
          style=" width: 250px; height: 500px ; box-shadow: 1px 1px 5px rgb(17, 18, 18); border-radius: 8px; border: 1px solid rgb(108, 109, 111);" />
        <h1 class="text-body1 q-mt-md q-mb-xs  text-grey-4 text-center full-width">
          {{ plat === 'android' ? d3t : a3t }}
        </h1>
      </q-carousel-slide>


      <q-carousel-slide name="step2" class="column no-wrap flex-center">

        <q-img :src="plat === 'android' ? d2 : a2" fit="fill" spinner-color="white"
          style=" width: 250px; height: 500px ; box-shadow: 1px 1px 5px rgb(17, 18, 18); border-radius: 8px; border: 1px solid rgb(106, 106, 108);" />
        <h1 class="text-body1 q-mt-md q-mb-xs  text-grey-4 text-center full-width">
          {{ plat === 'android' ? d2t : a2t }}
        </h1>
      </q-carousel-slide>

      <q-carousel-slide name="step1" class="column no-wrap flex-center">
        <q-img :src="plat === 'android' ? d1 : a1" fit="fill" spinner-color="white"
          style=" width: 250px; height: 500px ; box-shadow: 1px 1px 5px rgb(17, 18, 18); border-radius: 8px; border: 1px solid rgb(98, 99, 100);" />
        <h1 class="text-body1 q-mt-md q-mb-xs text-grey-4 text-center full-width">
          {{ plat === 'android' ? d1t : a1t }}
        </h1>
      </q-carousel-slide>




    </q-carousel>
  </transition>

  <q-btn-toggle class="q-my-md" rounded glossy v-model="slide" color="indigo-2" text-color="black" toggle-color="yellow-3"
    style="margin-bottom: 40px;"
    toggle-text-color="black" :options="[
      { label: 3, value: 'step3' },
      { label: 2, value: 'step2' },
      { label: 1, value: 'step1' }
    ]" />



  <!-- <hr class="full-width q-mt-lg" style="margin-botom: auto;">
  <transition appear enter-active-class="animated backInUp">

    <q-btn rounded label="الرئيسية" class="q-my-md" icon-right="home" size="lg" color="indigo-1" text-color="black"
      @click="store.screen = 'Landing'" />

  </transition> -->
</template>

<script setup>
import { store } from '../store/store.js'

import { ref } from 'vue';

const plat = ref('android');

const slide = ref('step1')

// Use import for static assets
import id1 from '../assets/android1.jpeg';
import id2 from '../assets/android2.jpeg';
import id3 from '../assets/android3.jpeg';
import ia1 from '../assets/apple1.jpeg';
import ia2 from '../assets/apple2.jpeg';
import ia3 from '../assets/apple3.jpeg';

const d1 = id1
const d2 = id2
const d3 = id3
const d1t = 'اختار القائمة المشار اليها بالسهم'
const d2t = 'اختار الاضافة الي الشاشه الرئيسية'
const d3t = 'قم بتأكيد التتبيت'

const a1 = ia1
const a2 = ia2
const a3 = ia3
const a1t = 'اختار المشاركة المشار اليها بالسهم'
const a2t = 'اختار الاضافة الي الصفحة الرئيسية'
const a3t = 'قم بتأكيد التتبيت'



</script>

<style lang="scss" scoped></style>
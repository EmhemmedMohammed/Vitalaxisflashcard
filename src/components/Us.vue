<template>
  <transition appear enter-active-class="animated backInUp">
    <div class="row justify-center items-center reverse">
    <h1 class="text-h4 q-mt-lg q-mb-sm text-yellow text-center  q-pr-lg">معلومات </h1>
<h1 class="text-h6 q-mb-lg text-grey-5 text-center q-pr-lg">حول التطبيق  </h1>
</div>
</transition>
<hr class="full-width">

<transition appear enter-active-class="animated slideInLeft">
<h1 class="text-h6 q-mb-lg text-grey-1 text-right full-width q-pr-lg">تهدف ادارة التطعيمات إلى حماية صحة ورفاهية جميع المواطنين من خلال توفير اللقاحات الأساسية. و مهمتنا هي ضمان حصول كل طفل في ليبيا على التحصينات المنقذة للحياة، بما في ذلك شلل الأطفال والحصبة والنكاف والحصبة الألمانية مما يساعد على منع انتشار الأمراض المعدية</h1>
</transition>

<transition appear enter-active-class="animated slideInRight">
<h1 class="text-h6 q-mb-lg text-yellow-2 text-right full-width q-pr-lg">يعد هذا التطبيق جزءًا من جهودنا المستمرة و قد تم تصميمه و تنفيده و تطويره من قبل ادارة التطعيمات لتوفير المعلومات الدقيقة و الحديثة حول حملات التطعيم الخاصة بنا</h1>
</transition>
<h1 class="text-h6 bg-indigo-3 q-mb-lg text-black text-right full-width q-pr-lg q-pa-xs" style="border-radius: 50px;">اهداف التطبيق</h1>


<transition appear enter-active-class="animated slideInLeft">
<div class=" full-width row justify-center items-center no-wrap reverse">
<q-icon size="md" name="download_done" />
<h1 class="text-body1 q-mb-sm text-grey-1 text-right full-width q-pr-lg">توفير معلومات دقيقة عن حملات التطعيم</h1>
</div>
</transition>


<transition appear enter-active-class="animated slideInRight">
<div class=" full-width row justify-center items-center no-wrap reverse">
<q-icon size="md" name="download_done" />
<h1 class="text-body1 q-mb-sm text-grey-1 text-right full-width q-pr-lg">تقديم الاتجاهات إلى أقرب مراكز التطعيم في جميع المدن الليبية لتسهيل عملية الوصول</h1>
</div>
</transition>

<transition appear enter-active-class="animated slideInLeft">
<div class=" full-width row justify-center items-center no-wrap reverse">
<q-icon size="md" name="download_done" />
<h1 class="text-body1 q-mb-sm text-grey-1 text-right full-width q-pr-lg">تسهيل التواصل مع المتخصصين في الرعاية الصحية من خلال قسم الأسئلة والأجوبة المصمم لتثقيف الجمهور حول اللقاحات وأهميتها</h1>
</div>
</transition>

<transition appear enter-active-class="animated slideInRight">
<div class=" full-width row justify-center items-center no-wrap reverse">
<q-icon size="md" name="download_done" />
<h1 class="text-body1 q-mb-sm text-grey-1 text-right full-width q-pr-lg">جمع ملاحظات قيمة حول الحمله لتحسين خدماتنا المستقبلية</h1>
</div>
</transition>


<div class=" full-width row justify-center items-center no-wrap reverse">
<q-icon size="md" name="download_done" />
<h1 class="text-body1 q-mb-sm text-grey-1 text-right full-width q-pr-lg">الإبلاغ عن أي أعراض أو آثار جانبية يعاني منها الطفل بعد التطعيم. حيث تساعدنا هده المعلومات في ضمان سلامة وفعالية برنامج التطعيم الخاص بنا و لتقديم الخدمات الطبية في وقتها</h1>
</div>

<div class=" full-width row justify-center items-center no-wrap reverse">
<q-icon size="md" name="download_done" />
<h1 class="text-body1 q-mb-lg text-grey-1 text-right full-width q-pr-lg">تعزيز الوعي من خلال المشاركة على وسائل التواصل الاجتماعي</h1>
</div>

<div class=" q-mt-xl full-width row justify-center items-center no-wrap reverse" style="border-top-left-radius: 15px; background-color: rgba(162, 184, 228, 0.4);">
<q-icon  size="xl" name="developer_mode" color="yellow-2" />
<div class="column">
<h1 class=" text-h6 q-my-xs text-indigo-2 text-center full-width q-pr-lg">تصميم و تنفيد </h1>
<h1 class=" text-h5 q-my-xs text-grey-1 text-center full-width q-pr-lg">ادارة التطعيمـــــــــــــات</h1>
</div>
</div>
<h1 class="bg-indigo-1 text-h4 q-my-sm text-grey-7 text-center full-width q-pr-lg" style="border-bottom-right-radius: 15px;">EPI</h1>
<h1 class="text-body1 q-my-xs text-grey-5 text-center full-width q-pr-lg"> جميع الحقوق محفوظة</h1>
<h1 class="text-h5 q-mb-lg q-mt-xs text-grey-3  text-center full-width q-pr-lg">© 2024 EPI Libya</h1>




<!-- <transition appear enter-active-class="animated backInUp">
    <q-btn rounded label="الرئيسية" class="q-mb-md" icon-right="home" size="lg" color="indigo-1" text-color="black" @click="store.screen = 'Landing'"
     ></q-btn>
  </transition> -->

 
  

</template>

<script setup>
import { store } from '../store/store.js'

import {ref} from 'vue'

const alert = ref(false)

</script>

<style lang="scss" scoped></style>
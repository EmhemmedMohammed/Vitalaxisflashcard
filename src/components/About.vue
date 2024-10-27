<template>
  <transition appear enter-active-class="animated backInUp">
    <div class="row justify-center items-center reverse">
      <h1 class="text-h4 q-mt-lg q-mb-sm text-yellow text-center  q-pr-lg">معلومات </h1>
      <h1 class="text-h6 q-mb-lg text-grey-5 text-center q-pr-lg">حول الحملة </h1>
    </div>
  </transition>
  <hr class="full-width">

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right "
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" group="somegroup"
      label=" ما هو الهدف من حملة التطعيمات الوطنية؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">الهدف من الحملة هو حماية الأطفال والمجتمع من أمراض الحصبة، الحصبة الألمانية،
            وشلل الأطفال. تعمل الحملة على تعزيز المناعة المجتمعية والقضاء على هذه الأمراض التي يمكن أن تسبب مضاعفات خطيرة
          </h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="من هم المستهدفون من هذه الحملة؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">الحملة تستهدف جميع الأطفال في ليبيا الذين تتراوح أعمارهم من يوم حتى 6 سنوات،
            بغض النظر عن حالة تطعيمهم السابقة، لضمان توفير الحماية القصوى لهم</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="لماذا يتم تطعيم الأطفال الذين سبق أن حصلوا على التطعيم؟" header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">حتى لو تلقى الطفل تطعيمات سابقة، فإن الحصول على جرعة إضافية خلال الحملة يمكن
            أن يعزز مناعة الجسم ويقلل من احتمالية الإصابة، مما يساعد على القضاء الكامل على المرض</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="ما هي الأمراض التي تغطيها هذه الحملة وما هي مضاعفاتها؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">تشمل الحملة التطعيم ضد الحصبة، الحصبة الألمانية، وشلل الأطفال. الحصبة يمكن أن
            تؤدي إلى مضاعفات مثل التهاب الرئة أو الدماغ، بينما شلل الأطفال قد يؤدي إلى شلل الدائم. الحصبة الألمانية قد
            تكون خطيرة وخصوصاً لو انتقلت إلى إحدى النساء الحوامل حيث يمكن أن تؤدي إلى تشوهات خلقية في الجنين</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="هل التطعيمات آمنة؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">نعم، التطعيمات آمنة وتم اختبارها واعتمادها من قبل منظمة الصحة العالمية. تم
            استخدامها على نطاق واسع في جميع أنحاء العالم لسنوات وتمت ملاحظة فعاليتها وأمانها. وهي مستعملة منذ سنوات في
            ليبيا وليست حديثة المصدر</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="أين يمكنني الحصول على التطعيم لطفلي؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">يمكن الحصول على التطعيمات في المراكز الصحية التي تشارك في الحملة في جميع
            بلديات ليبيا. كما أن بعض البلديات ستنظم محطات مؤقتة داخل الحدائق وأماكن التجمعات. إضافة إلى بعض الفرق المتحركة
            لتصل إلى الأماكن صعبة الوصول. بإمكانك الإطلاع على أماكن التطعيم بالبلديات من خلال هذا التطبيق</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="هل التطعيم مجاني؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">نعم، كل التطعيمات مجانية وتقدم لجميع الأطفال للمقيمين بالدولة الليبية سواء
            كانوا مواطنون أو أجانب، لضمان حماية جميع الأطفال دون تحميل الأسر أي تكلفة</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="هل هناك آثار جانبية للتطعيم؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">في معظم الحالات، لا تكون هناك أعراض جانبية باستثناء الألم مكان الحقنة،
            وأحياناً تكون الآثار الجانبية طفيفة وتشمل احمرارًا أو تورمًا في موقع الحقن، أو حمى خفيفة. نادرًا ما تحدث آثار
            جانبية خطيرة، وفي حال ظهورها يجب التبليغ من خلال هذا التطبيق واستشارة الطبيب</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px"
      label="ماذا يجب أن أفعل إذا فاتني موعد التطعيم؟ أو إذا كان الطفل مريضاً؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">يمكنك التوجه إلى أقرب مركز صحي والاستفسار عن إمكانية الحصول على التطعيم. من
            الأفضل ألا يفوت الطفل موعد التطعيم خلال الحملة لضمان حمايته في أسرع وقت ممكن</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="كيف يمكنني الحصول على المزيد من المعلومات حول الحملة؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">يمكنك من خلال هذا التطبيق أو زيارة الموقع الإلكتروني لصفحة المركز الوطني
            لمكافحة الامراض أو متابعة الصفحات الرسمية على وسائل التواصل الاجتماعي، أو الاتصال بالخط الساخن 195 للحصول على
            كافة المعلومات والتحديثات المتعلقة بالحملة</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="كيف يتم تحضير الطفل للتطعيم؟
" header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">يُنصح بإعطاء الطفل وجبة خفيفة قبل الذهاب للتطعيم. يُفضل أن يرتدي ملابس مريحة
            تسهل على الممرض الوصول إلى موضع الحقن (عادة الذراع أو الفخذ)، ومن الجيد التحدث مع الطفل وشرح له ما سيحدث
            بطريقة بسيطة لطمأنته</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="هل يمكن لطفلي الحصول على التطعيم إذا كان مريضًا؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">إذا كان الطفل يعاني من حمى شديدة أو مرض حاد، يفضل تأجيل التطعيم حتى يتماثل
            للشفاء. في حالات المرض الخفيف، مثل الزكام أو الحمى الخفيفة، يمكن عادة تطعيم الطفل. من الأفضل استشارة الطبيب
            قبل التطعيم إذا كان الطفل مريضًا</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="هل يحتاج الأطفال الأكبر سنًا إلى التطعيم؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">نعم، ولكن الحملة تستهدف الأطفال حتى عمر 6 سنوات، لأنهم الأكثر عرضةً للإصابة
            بهذه الأمراض، وقد يتعرضون لمخاطر الإصابة أو نقل المرض للآخرين</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="هل هناك موانع للتطعيم؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">عادةً، لا توجد موانع للتطعيم إلا في حالات نادرة مثل الحساسية الشديدة لأي من
            مكونات اللقاحات المستعملة في الحملة، الأطفال الذين لديهم نقص في المناعة مثل الأيدز، أو السرطانات وهم تحت
            العلاج، الأطفال الذين تحصلوا على تطعيم الجذيري المائي قبل أقل من أربع أسابيع من تاريخ التطعيم بالحملة. كما
            يُستثنى من التطعيم بشلل الأطفال الفموي الأطفال المخالطين مباشرة لشخص من العائلة لديه مرض ضعف في المناعة</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="ما هو الفرق بين الحصبة والحصبة الألمانية؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">الحصبة والحصبة الألمانية هما مرضان مختلفان تسببهما فيروسات مختلفة. الحصبة تسبب
            حمى شديدة وطفح جلدي يمكن أن يكون خطيرًا. الحصبة الألمانية تسبب أعراضًا مشابهة لكن تكون خفيفة عادة، إلا أنها
            خطيرة على النساء الحوامل حيث يمكن أن تؤدي إلى مشاكل خطيرة للجنين</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label=". ما هي جرعات التطعيم ضد شلل الأطفال؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">التطعيم ضد شلل الأطفال يكون فمويًا أو حقنة بالعضلة، ويتم إعطاءه ضمن التطعيمات
            الروتنية بالبرنامج الليبي للتطعيمات على 7 جرعات (5جرعات حقنة + جرعتين فموية ).
            وتتكون جرعة الحملة ضد شلل الأطفال قطرتين من اللقاح، بحيث تضمن تعزيز مناعة الطفل ضد المرض</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="كم تستمر فعالية التطعيم؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">عادة، توفر التطعيمات حماية طويلة الأمد. يمكن أن تكون بعض الجرعات المعززة
            ضرورية للحفاظ على المناعة القوية، وهو ما تسعى الحملة لتحقيقه عبر توفير جرعات إضافية. كما تفيد الذين تأخروا عن
            التطعيمات الروتينية</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="ما هي الخطوات المتبعة بعد التطعيم؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">ينصح بالبقاء في المركز الصحي لمدة قصيرة بعد التطعيم لمراقبة أي رد فعل فوري.
            كما ينصح بمراقبة الطفل لعدة ساعات / أيام بعد التطعيم، حيث قد تشهد ارتفاعاً في درجة حرارة الجسم، و تتم المراقبة
            حتى يتم تقديم الرعاية اللازمة في حال حدوث أي آثار جانبية</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>


  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="هل يجب على الوالدين الحصول على التطعيم أيضًا؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">هذه الحملة تستهدف الأطفال دون الست سنوات فقط، ولكن في بعض الأحيان الأخرى قد
            تكون هناك حملات مخصصة للكبار في حال تخطيط القضاء على الحصبة خصوصاً للذين لم يتلقوا تطعيمات في السابق أو لديهم
            شكوك بشأن مناعتهم</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>


  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="كيف تساهم الحملة في تحسين الصحة العامة في ليبيا؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">من خلال تطعيم الأطفال، تقلل الحملة من انتشار الأمراض وتساهم في تحسين الصحة
            العامة، حيث تساهم هذه الجهود في بناء مجتمع خالٍ من الأمراض المعدية، وتقليل الأعباء الصحية والاقتصادية الناتجة
            عن هذه الأمراض</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>


  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px"
      label="ما هي المدة التي تستغرقها الحملة الوطنية للتطعيم؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">تستمر الحملة الوطنية للتطعيم لمدة 6 ايام ، يُنصح بمتابعة الإعلانات الرسمية
            لمعرفة الجدول الزمني الدقيق والتوجه إلى المراكز الصحية في الوقت المحدد، و يمكنكم الاستعانة بهذا التطبيق لمعرفة
            أماكن انطلاق الحملة داخل البلدية</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>


  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="كيف يتم تنظيم الحملة الوطنية للتطعيمات؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">يتم تنظيم الحملة الوطنية بقيادة المركز الوطني لمكافحة الأمراض و تنفيذ إدارة
            التطعيمات وعبر وحدات الرعاية الصحية الأولية بالبلديات من خلال فرق التطعيم. وتسعى الإدارة إلى تأمين الموارد
            اللازمة لتحقيق نجاح الحملة</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>


  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="هل يجب أن أبلغ عن تطعيم طفلي للحضانة؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">نعم، يفضل إبلاغ الحضانة بتطعيم طفلك، حيث تساعد هذه المعلومات في توفير بيئة
            أكثر أمانًا للجميع، وتسهل متابعة حالة التطعيم على المستوى المدرسي وتجنب انتشار الأمراض المعدية</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="كيف تؤثر الحملة على الجهود الصحية طويلة المدى في ليبيا؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">تساهم الحملة في بناء مناعة مجتمعية قوية، وتساعد في خفض معدلات الأمراض المعدية
            على المدى الطويل. كما تعزز من الثقة في النظام الصحي وتشجع المواطنين على الاستمرار في متابعة التطعيمات الدورية
          </h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px"
      label="هل هناك دراسات تظهر فعالية الحملات الوطنية للتطعيم؟" header-class="bg-indigo-5 text-white"
      expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">نعم، أظهرت الدراسات أن حملات التطعيم الجماعي تقلل من انتشار الأمراض بشكل
            ملحوظ، وحيث أن آخر حملة وطنية تم إنجازها في سنة 2018 أثبتت نجاحها في معدلات انتشار المرض مقارنة بالأعوام التي
            تليها. كما تقلل من الوفيات المرتبطة بالأمراض المعدية. وقد أثبتت نجاحًا كبيرًا في القضاء على أمراض معينة في
            العديد من البلدان حول العالم</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-radius: 10px" label="ماذا عن الأشخاص الذين لا يؤمنون بفعالية التطعيم؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">تعمل الحملة على نشر الوعي وتقديم المعلومات العلمية المثبتة حول فعالية وأمان
            التطعيمات. يتم تقديم النصائح والرد على استفسارات الجميع، مع التركيز على أهمية التطعيمات لحماية الأطفال
            والمجتمع ككل</h1>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </transition>

  <transition appear enter-active-class="animated slideInLeft">
    <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
      style="border-bottom: 1px solid #e0e0e0; border-radius: 10px" label="ما هي التحديات التي قد تواجه الحملة؟"
      header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <h1 class="text-body1 text-black">من التحديات المحتملة نقص الوعي أو المعلومات الخاطئة حول التطعيمات، وكذلك
          الوصول إلى المناطق الطرفية. لهذا، تتعاون الحملة مع المجتمع المحلي للتغلب على هذه التحديات وضمان الوصول إلى
          أكبر عدد ممكن من الأطفال</h1>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</transition>


<transition appear enter-active-class="animated slideInRight">
  <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-my-sm  text-right"
    style="border-radius: 10px" label="كيف يتم اختيار نوع اللقاحات المستخدمة في الحملة؟"
    header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
    <q-card>
      <q-card-section>
        <h1 class="text-body1 text-black">يتم اختيار اللقاحات بناءً على توصيات اللجنة الاستشارية العليا للتطعيمات حيث
          تشترط في اختياراتها على اللقاحات التي تكون معتمدة من منظمة الصحة العالمية وذات معاييرسلامة عالية. اللقاحات
          المستخدمة في الحملة معتمدة وآمنة، وتستخدم على نطاق واسع في برامج التطعيم الوطني والدولي</h1>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</transition>

<transition appear enter-active-class="animated slideInLeft">
  <q-expansion-item group="somegroup" class="shadow-1 overflow-hidden full-width text-subtitle1 q-mt-sm  text-right"
    style="border-bottom: 1px solid #e0e0e0; border-radius: 10px; " label="كيف يمكنني التأكد من أن التطعيمات آمنة وفعالة؟"
    header-class="bg-indigo-5 text-white" expand-icon-class="text-white">
    <q-card>
      <q-card-section>
        <h1 class="text-body1 text-black">تقوم وزارة الصحة بالتعاون مع المنظمات الصحية العالمية بإجراء اختبارات سلامة
          وفعالية على اللقاحات قبل استخدامها. تمثل اللقاحات المستخدمة في الحملة معايير الجودة العالمية وتخضع لإجراءات
          مراقبة صارمة.
          كما أن إدارة التطعيمات تعمل على العديد من المؤشرات لرقابة فاعلية و صلاحية اللقاحات المستخدمة سواءً في الحملات
          أو التطعيمات الروتينية</h1>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</transition>

<div style="margin-bottom: 70px; height: 10px;">
  </div>

<!-- <transition appear enter-active-class="animated backInUp">
  <q-btn rounded label="الرئيسية" class="q-my-md" icon-right="home" size="lg" color="indigo-1" text-color="black"
    @click="store.screen = 'Landing'"></q-btn>
</transition> -->


</template>

<script setup>
import { store } from '../store/store.js'



</script>

<style lang="scss" scoped></style>
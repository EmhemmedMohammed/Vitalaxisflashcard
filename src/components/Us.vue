<script setup>
import { ref, onMounted, watch } from 'vue';
import Dexie from 'dexie';

// Define the IndexedDB schema
const db = new Dexie('FlashcardsDB1');
db.version(1).stores({
  questions: 'id, bookId, question, answer, note1, note2, note3',
});

const questions = ref([]); // Reactive array to hold the questions
const searchQuery = ref(''); // Reactive property for the search box
const searchResults = ref([]); // Reactive array for the filtered questions

// Load questions from IndexedDB or fetch if not available
const loadQuestions = async () => {
  try {
    // Check if IndexedDB is empty
    const count = await db.questions.count();
    if (count === 0) {
      const response = await fetch('/flashcards.json');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();

      // Add data to IndexedDB
      const enrichedData = Object.values(data).map((item) => ({
        id: item.id,
        bookId: item.bookId,
        question: item.question,
        answer: item.answer,
        note1: '', // Default value for note1
        note2: '', // Default value for note2
        note3: '', // Default value for note3
      }));
      await db.questions.bulkAdd(enrichedData);
    }

    // Load all questions from IndexedDB
    // questions.value = await db.questions.toArray();
    // searchResults.value = questions.value; // Initialize search results
  } catch (error) {
    console.error(error.message);
  }
};

// Search questions by bookId
const searchQuestions = async () => {
  // if (!searchQuery.value.trim()) {
  //   searchResults.value = questions.value; // Reset to all questions
  //   return;
  // }

  // Query IndexedDB by bookId
  searchResults.value = await db.questions
    .where('bookId')
    .equals(searchQuery.value)
    .toArray();
};

// Watch for changes in searchQuery and trigger searchQuestions
watch(searchQuery, async () => {
  await searchQuestions();
});

// Update note1 in IndexedDB
const updateNote1 = async (id, newNote) => {
  try {
    // Update the note in IndexedDB
    await db.questions.update(id, { note1: newNote });

    // Update the local data
    const updatedQuestion = searchResults.value.find((q) => q.id === id);
    if (updatedQuestion) {
      updatedQuestion.note1 = newNote;
    }
  } catch (error) {
    console.error('Failed to update note1:', error.message);
  }
};

// Initialize data on mount
onMounted(loadQuestions);
</script>

<template>
  <div>
    <h1 class="text-h4">Questions List</h1>
    <div class="text-h6 hide-scrollbar" style="overflow-x: scroll; position:sticky; top: 0">
    <q-btn-toggle   v-model="searchQuery" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"  :options="[
        { label: 'cv', value: 'cv' },
        { label: 'en', value: 'en' },
        { label: 'gi', value: 'gi' },
        { label: 'gm', value: 'gm' },
        { label: 'gm2', value: 'gm2' },
        { label: 'hm', value: 'hm' },
        { label: 'id', value: 'id' },
        { label: 'np', value: 'np' },
        { label: 'nr', value: 'nr' },
        { label: 'on', value: 'on' },
         { label: 'pm', value: 'pm' },
         { label: 'rm', value: 'rm' }
      ]" />
    </div>
    <!-- Search Box -->
    <!-- <input
      v-model="searchQuery"
      @input="searchQuestions"
      type="text"
      placeholder="Search by Book ID"
      class="search-box"
    /> -->

    <!-- Questions List -->
    <ul>
      <li v-for="question in searchResults" :key="question.id">
        <h1 class="text-yellow-3 text-h5" v-html="question.question"></h1>
        <h1 class="text-white text-h6" v-html="'Answer: ' + question.answer"></h1>
        <div>
          <label>
            Note 1:
            <input
              v-model="question.note1"
              @blur="updateNote1(question.id, question.note1)"
              type="text"
              style="width: 70%; font-size: larger;"
            />
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
h1 {
  font-family: Arial, sans-serif;
}

.search-box {
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.hide-scrollbar {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

</style>

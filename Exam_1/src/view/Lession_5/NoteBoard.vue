<!-- src/components/NoteBoard.vue -->
<template>
  <div class="note-board">
    <button @click="addNote">Add Note</button>
    <div class="notes">
      <NoteCard
          v-for="note in notes"
          :key="note.id"
          :note="note"
          @updateNote="updateNote"
          @deleteNote="deleteNote"
      />
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import NoteCard from './NoteCard.vue';

export default {
  components: {NoteCard},
  setup() {
    const notes = ref([
      {id: 1, title: 'Sample Note', content: 'This is a sample note.'}
    ]);

    const addNote = () => {
      notes.value.push({
        id: Date.now(),
        title: 'New Note',
        content: 'Enter your content here...'
      });
    };

    const updateNote = (updatedNote) => {
      const index = notes.value.findIndex(note => note.id === updatedNote.id);
      if (index !== -1) notes.value[index] = updatedNote;
    };

    const deleteNote = (id) => {
      notes.value = notes.value.filter(note => note.id !== id);
    };

    return {notes, addNote, updateNote, deleteNote};
  }
};
</script>

<style scoped>
.note-board {
  padding: 20px;
}

button {
  margin-bottom: 20px;
}

.notes {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>

<template>
  <div class="home">
    <h1>YOUR KANBAN</h1><br>
      <div class="container">
        <board v-bind="{
          data: todo,
          name: 'TO DO',
          type: 'todo',
          className: 'danger',
          changeType
        }"></board>
        <board v-bind="{
          data: ongoing,
          name: 'ON GOING',
          type: 'ongoing',
          className: 'info',
          changeType
        }"></board>
        <board v-bind="{
          data: done,
          name: 'DONE',
          type: 'done',
          className: 'success',
          changeType
        }"></board>
      </div>
      <modal v-bind="{ note, type, onChangeNote, addNote }"></modal>
  </div>
</template>

<script>
import Board from '../components/Board'
import Modal from '../components/Modal'

export default {
  name: 'home',
  components: {
    Board,
    Modal
  },
  data: () => ({
    todo: [],
    ongoing: [],
    done: [],
    note: '',
    type: ''
  }),
  methods: {
    getNotes () {
      ['todo', 'ongoing', 'done'].forEach(task => {
        this[`$${task}`].on('value', response => {
          if (response.val() === null) this[task] = {}
          else this[task] = response.val()
        })
      })
    },
    addNote (type) {
      // this[type].push(this.note)
      this[`$${type}`].push(this.note)
      this.note = ''
      this.type = ''
    },
    changeType (newType) {
      this.type = newType
    },
    onChangeNote (newNote) {
      this.note = newNote
    }
  },
  mounted () {
    this.getNotes()
  }
}
</script>

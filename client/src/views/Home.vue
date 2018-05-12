<template>
  <div class="home">
    <h1>YOUR KANBAN</h1><br>
    <div class="container">
        <div class="col-sm-4">
            <div class="panel panel-danger">
              <div class="panel-heading">TO DO</div>
              <div class="panel-body">
                <draggable class="drag" v-model="todo" :options="{group:'kanban'}" @start="drag=true" @end="drag=false">
                  <div class="alert alert-danger cursor" v-for="({ note }, index ) in todo" :key="index">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    {{note}}
                    </div>
                </draggable>
              </div>
              <div class="panel-footer"><a data-toggle="modal" data-target="#myModal" class="btn btn-secondary" @click='changeType("todo")'>Add Sticky Note</a></div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="panel panel-primary">
              <div class="panel-heading">ON GOING</div>
              <div class="panel-body">
                <draggable class="drag" v-model="ongoing" :options="{group:'kanban'}" @start="drag=true" @end="drag=false">
                  <div class="alert alert-info cursor" v-for="({ note }, index ) in ongoing" :key="index">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    {{note}}
                    </div>
                </draggable>
              </div>
              <div class="panel-footer"><a data-toggle="modal" data-target="#myModal" class="btn btn-secondary" @click='changeType("ongoing")'>Add Sticky Note</a></div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="panel panel-success">
              <div class="panel-heading">DONE</div>
              <div class="panel-body">
                <draggable class="drag" v-model="done" :options="{group:'kanban'}" @start="drag=true" @end="drag=false">
                  <div class="alert alert-success cursor" v-for="({ note }, index ) in done" :key="index">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    {{note}}
                    </div>
                </draggable>
              </div>
              <div class="panel-footer"><a data-toggle="modal" data-target="#myModal" class="btn btn-secondary" @click='changeType("done")'>Add Sticky Note</a></div>
            </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">New Note</h4>
                </div>
                <div class="form-group">
                  <textarea v-model='note' style="text-align: center" class="form-control" cols="3" rows="3" id="comment"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" @click='addNote(type)'>Submit</button>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'home',
  components: {
    draggable
  },
  data: function () {
    return {
      todo: [],
      ongoing: [],
      done: [],
      note: '',
      type: ''
    }
  },
  methods: {
    addNote (type) {
      this[type].push({
        note: this.note
      })
      this.note = ''
      this.type = ''
    },
    changeType (newType) {
      this.type = newType
    }
  }
}
</script>

<style scoped>
  .drag {
    min-height: 3em;
  }
  .cursor {
    cursor: pointer;
  }
</style>

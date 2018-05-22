<template>
  <div class="col-sm-4">
    <div :class="`panel panel-${className}`">
      <div class="panel-heading">{{ name }}</div>
      <div class="panel-body">
        <draggable class="drag" v-model="data" :options="{group:'kanban'}" @start="drag=true" @end="drag=false">
          <div :class="`alert alert-${className} pointer-cursor`" v-for="({ note }, index ) in data" :key="index">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            {{note}}
            </div>
        </draggable>
      </div>
      <div class="panel-footer"><a data-toggle="modal" data-target="#myModal" class="btn btn-secondary" @click='changeType(type)'>Add Sticky Note</a></div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: {
    data: Array,
    name: String,
    type: String,
    className: String,
    changeType: Function
  }
}
</script>

<style scoped>
  .drag {
    min-height: 3em;
  }
  .pointer-cursor {
    cursor: pointer;
  }
</style>

<template>
  <div class="home">
    <TodoList />
    <hr />
    <SimpleCounterCompositionApi />
    <hr />
    <WatchCounter />
    <hr />
    <ReactiveCounter />
    <hr />
    <SimpleCounter />
    <hr />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SimpleCounter from "@/components/SimpleCounter.vue";
import ReactiveCounter from "@/components/ReactiveCounter.vue";
import WatchCounter from "@/components/WatchCounter.vue";
import SimpleCounterCompositionApi from "@/components/SimpleCounterCompositionApi.vue";
import TodoList from "@/components/TodoList";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter,
    SimpleCounterCompositionApi,
    TodoList,
  },
};
</script>

<template>
  <div class="home">
    <ProfileWithProps />
    <hr />

    <Suspense>
      <template #default>
        <SuspenseFetch />
      </template>
      <template #fallback>
        Por favor espere a que se cargue los datos...
      </template>
    </Suspense>

    <hr />
    <SimpleFetch />
    <hr />
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
import SimpleFetch from "@/components/SimpleFetch.vue";
import SuspenseFetch from "@/components/SuspenseFetch.vue";
import ProfileWithProps from "@/components/ProfileWithProps.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter,
    SimpleCounterCompositionApi,
    TodoList,
    SimpleFetch,
    SuspenseFetch,
    ProfileWithProps
  },
};
</script>
